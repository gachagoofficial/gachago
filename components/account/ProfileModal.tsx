"use client";

import { useEffect, useState } from "react";
import { createClient } from "@/lib/supabase/client";

interface Profile {
  nickname: string;
  phone: string;
  address: string;
  address_detail: string;
}

// 프로필 설정 모달: 닉네임 / 전화번호 / 배송지 수정.
export function ProfileModal({
  userId,
  close,
}: {
  userId: string;
  close: () => void;
}) {
  const supabase = createClient();
  const [form, setForm] = useState<Profile>({
    nickname: "",
    phone: "",
    address: "",
    address_detail: "",
  });
  const [loading, setLoading] = useState(true);
  const [saving, setSaving] = useState(false);
  const [msg, setMsg] = useState("");

  useEffect(() => {
    let cancelled = false;
    supabase
      .from("profiles")
      .select("nickname, phone, address, address_detail")
      .eq("id", userId)
      .maybeSingle()
      .then(({ data }) => {
        if (cancelled) return;
        if (data) {
          setForm({
            nickname: data.nickname || "",
            phone: data.phone || "",
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

  const save = async () => {
    setSaving(true);
    setMsg("");
    const { error } = await supabase.from("profiles").upsert({
      id: userId,
      nickname: form.nickname.trim() || null,
      phone: form.phone.trim() || null,
      address: form.address.trim() || null,
      address_detail: form.address_detail.trim() || null,
      updated_at: new Date().toISOString(),
    });
    setSaving(false);
    if (error) {
      setMsg("저장 실패: " + error.message);
    } else {
      setMsg("저장되었습니다.");
      setTimeout(close, 700);
    }
  };

  const set = (k: keyof Profile) => (e: React.ChangeEvent<HTMLInputElement>) =>
    setForm((f) => ({ ...f, [k]: e.target.value }));

  return (
    <div
      className="result-overlay"
      onClick={(e) => e.target === e.currentTarget && close()}
    >
      <div className="profile-modal">
        <button className="result-close" onClick={close} aria-label="닫기">
          ×
        </button>
        <h3 className="profile-modal__title">프로필 설정</h3>

        {loading ? (
          <p className="draw-history-empty">불러오는 중...</p>
        ) : (
          <div className="profile-form">
            <label>
              <span>닉네임</span>
              <input value={form.nickname} onChange={set("nickname")} placeholder="닉네임을 입력하세요" />
            </label>
            <label>
              <span>전화번호</span>
              <input value={form.phone} onChange={set("phone")} placeholder="010-0000-0000" inputMode="tel" />
            </label>
            <label>
              <span>배송지 주소</span>
              <input value={form.address} onChange={set("address")} placeholder="도로명 주소" />
            </label>
            <label>
              <span>상세 주소</span>
              <input value={form.address_detail} onChange={set("address_detail")} placeholder="동/호수 등" />
            </label>

            {msg && <p className="profile-msg">{msg}</p>}

            <button className="result-btn result-btn--primary" onClick={save} disabled={saving}>
              {saving ? "저장 중..." : "저장하기"}
            </button>
          </div>
        )}
      </div>
    </div>
  );
}
