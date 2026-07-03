"use client";

import { useState } from "react";
import { createClient } from "@/lib/supabase/client";

const CATEGORIES = ["자유", "후기", "이벤트", "1:1 문의"];

// 글쓰기 모달. 작성자명은 프로필 닉네임(없으면 이메일 앞부분)으로 저장.
export function WritePostModal({
  userId,
  close,
  onPosted,
}: {
  userId: string;
  close: () => void;
  onPosted: () => void;
}) {
  const supabase = createClient();
  const [category, setCategory] = useState("자유");
  const [title, setTitle] = useState("");
  const [content, setContent] = useState("");
  const [saving, setSaving] = useState(false);
  const [msg, setMsg] = useState("");

  const submit = async () => {
    if (!title.trim()) {
      setMsg("제목을 입력해주세요.");
      return;
    }
    setSaving(true);
    setMsg("");

    // 작성자명: 프로필 닉네임 → 없으면 이메일 앞부분
    let authorName = "익명";
    const { data: prof } = await supabase
      .from("profiles")
      .select("nickname")
      .eq("id", userId)
      .maybeSingle();
    if (prof?.nickname) {
      authorName = prof.nickname;
    } else {
      const { data: u } = await supabase.auth.getUser();
      const email = u.user?.email || "";
      authorName = email ? email.split("@")[0] : "익명";
    }

    const { error } = await supabase.from("posts").insert({
      user_id: userId,
      author_name: authorName,
      category,
      title: title.trim(),
      content: content.trim() || null,
      is_notice: false,
    });

    setSaving(false);
    if (error) {
      setMsg("등록 실패: " + error.message);
    } else {
      onPosted();
    }
  };

  return (
    <div className="result-overlay" onClick={(e) => e.target === e.currentTarget && close()}>
      <div className="profile-modal write-modal">
        <button className="result-close" onClick={close} aria-label="닫기">×</button>
        <h3 className="profile-modal__title">글쓰기</h3>

        <div className="profile-form">
          <label>
            <span>카테고리</span>
            <select
              className="write-select"
              value={category}
              onChange={(e) => setCategory(e.target.value)}
            >
              {CATEGORIES.map((c) => (
                <option key={c}>{c}</option>
              ))}
            </select>
          </label>
          <label>
            <span>제목</span>
            <input value={title} onChange={(e) => setTitle(e.target.value)} placeholder="제목을 입력하세요" />
          </label>
          <label>
            <span>내용</span>
            <textarea
              className="write-textarea"
              value={content}
              onChange={(e) => setContent(e.target.value)}
              placeholder="내용을 입력하세요"
              rows={6}
            />
          </label>

          {msg && <p className="profile-msg">{msg}</p>}

          <button className="result-btn result-btn--primary" onClick={submit} disabled={saving}>
            {saving ? "등록 중..." : "등록하기"}
          </button>
        </div>
      </div>
    </div>
  );
}
