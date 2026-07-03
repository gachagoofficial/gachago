"use client";

import { useEffect, useState } from "react";
import { createClient } from "@/lib/supabase/client";

interface Profile {
  nickname: string;
  phone: string;
  address_name: string;
  postcode: string;
  address: string;
  address_detail: string;
}

// 카카오(Daum) 우편번호 스크립트 로더
function loadDaumPostcode(): Promise<void> {
  return new Promise((resolve, reject) => {
    if (typeof window === "undefined") return reject();
    // 이미 로드됨
    if ((window as unknown as { daum?: { Postcode?: unknown } }).daum?.Postcode) {
      resolve();
      return;
    }
    const existing = document.getElementById("daum-postcode-script");
    if (existing) {
      existing.addEventListener("load", () => resolve());
      return;
    }
    const script = document.createElement("script");
    script.id = "daum-postcode-script";
    script.src = "https://t1.daumcdn.net/mapjsapi/bundle/postcode/prod/postcode.v2.js";
    script.onload = () => resolve();
    script.onerror = () => reject();
    document.head.appendChild(script);
  });
}

export function ProfileModal({
  userId,
  close,
}: {
  userId: string;
  close: () => void;
}) {
  const supabase = createClient();
  const [email, setEmail] = useState("");
  const [form, setForm] = useState<Profile>({
    nickname: "",
    phone: "",
    address_name: "",
    postcode: "",
    address: "",
    address_detail: "",
  });
  const [loading, setLoading] = useState(true);
  const [saving, setSaving] = useState(false);
  const [msg, setMsg] = useState("");

  useEffect(() => {
    let cancelled = false;
    supabase.auth.getUser().then(({ data }) => {
      if (!cancelled) setEmail(data.user?.email || "");
    });
    supabase
      .from("profiles")
      .select("nickname, phone, address_name, postcode, address, address_detail")
      .eq("id", userId)
      .maybeSingle()
      .then(({ data }) => {
        if (cancelled) return;
        if (data) {
          setForm({
            nickname: data.nickname || "",
            phone: data.phone || "",
            address_name: data.address_name || "",
            postcode: data.postcode || "",
            address: data.address || "",
            address_detail: data.address_detail || "",
          });
        }
        setLoading(false);
      });
    return () => {
      cancelled = true;
    };
  }, [userId, supabase]);

  // 카카오 주소 검색 팝업
  const searchAddress = async () => {
    try {
      await loadDaumPostcode();
      const daum = (window as unknown as {
        daum: { Postcode: new (opts: object) => { open: () => void } };
      }).daum;
      new daum.Postcode({
        oncomplete: (data: { zonecode: string; roadAddress: string; jibunAddress: string }) => {
          setForm((f) => ({
            ...f,
            postcode: data.zonecode,
            address: data.roadAddress || data.jibunAddress,
          }));
        },
      }).open();
    } catch {
      setMsg("주소 검색을 불러오지 못했습니다. 잠시 후 다시 시도해주세요.");
    }
  };

  const save = async () => {
    setSaving(true);
    setMsg("");
    const { error } = await supabase.from("profiles").upsert({
      id: userId,
      nickname: form.nickname.trim() || null,
      phone: form.phone.trim() || null,
      address_name: form.address_name.trim() || null,
      postcode: form.postcode.trim() || null,
      address: form.address.trim() || null,
      address_detail: form.address_detail.trim() || null,
      updated_at: new Date().toISOString(),
    });
    setSaving(false);
    if (error) setMsg("저장 실패: " + error.message);
    else {
      setMsg("저장되었습니다.");
      setTimeout(close, 700);
    }
  };

  const set = (k: keyof Profile) => (e: React.ChangeEvent<HTMLInputElement>) =>
    setForm((f) => ({ ...f, [k]: e.target.value }));

  return (
    <div className="result-overlay" onClick={(e) => e.target === e.currentTarget && close()}>
      <div className="profile-modal profile-modal--wide">
        <button className="result-close" onClick={close} aria-label="닫기">×</button>
        <p className="profile-eyebrow">PROFILE SETTINGS</p>
        <h3 className="profile-modal__title">프로필 정보</h3>
        <p className="profile-sub">배송과 회원 정보에 사용되는 기본 정보를 관리합니다.</p>

        {loading ? (
          <p className="draw-history-empty">불러오는 중...</p>
        ) : (
          <div className="profile-form">
            <label>
              <span>이메일</span>
              <input value={email} disabled className="input-readonly" />
            </label>
            <label>
              <span>닉네임</span>
              <input value={form.nickname} onChange={set("nickname")} placeholder="닉네임" />
            </label>
            <label>
              <span>연락처</span>
              <input value={form.phone} onChange={set("phone")} placeholder="010-0000-0000" inputMode="tel" />
            </label>
            <label>
              <span>배송지 이름</span>
              <input value={form.address_name} onChange={set("address_name")} placeholder="예: 집, 회사" />
            </label>
            <label>
              <span>우편번호</span>
              <div className="postcode-row">
                <input value={form.postcode} readOnly placeholder="주소 검색을 이용해주세요" />
                <button type="button" className="postcode-btn" onClick={searchAddress}>
                  주소 검색
                </button>
              </div>
            </label>
            <label>
              <span>도로명 주소</span>
              <input value={form.address} readOnly placeholder="주소 검색을 이용해주세요" />
            </label>
            <label>
              <span>상세 주소</span>
              <input value={form.address_detail} onChange={set("address_detail")} placeholder="동/호수 등 상세 주소를 입력하세요." />
            </label>

            {msg && <p className="profile-msg">{msg}</p>}

            <button className="result-btn result-btn--primary" onClick={save} disabled={saving}>
              {saving ? "저장 중..." : "수정하고 저장하기"}
            </button>
          </div>
        )}
      </div>
    </div>
  );
}
