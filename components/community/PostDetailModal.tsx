"use client";

import { useState } from "react";
import { createClient } from "@/lib/supabase/client";
import type { Post } from "./CommunityBoard";

// 글 상세 모달. 본인 글이면 삭제 버튼 노출.
export function PostDetailModal({
  post,
  currentUserId,
  close,
  onDeleted,
}: {
  post: Post;
  currentUserId?: string;
  close: () => void;
  onDeleted: () => void;
}) {
  const supabase = createClient();
  const [deleting, setDeleting] = useState(false);
  const isOwner = currentUserId && post.user_id === currentUserId && !post.is_notice;

  const remove = async () => {
    if (!confirm("이 글을 삭제할까요?")) return;
    setDeleting(true);
    const { error } = await supabase.from("posts").delete().eq("id", post.id);
    setDeleting(false);
    if (!error) onDeleted();
    else alert("삭제 실패: " + error.message);
  };

  return (
    <div className="result-overlay" onClick={(e) => e.target === e.currentTarget && close()}>
      <div className="profile-modal post-detail">
        <button className="result-close" onClick={close} aria-label="닫기">×</button>

        <div className="post-detail-head">
          {post.is_notice ? (
            <span className="notice-badge">공지</span>
          ) : (
            post.category && <span className="community-cat">{post.category}</span>
          )}
          <h3 className="post-detail-title">{post.title}</h3>
          <div className="post-detail-meta">
            <span>{post.author_name || "익명"}</span>
            <span>{new Date(post.created_at).toLocaleString("ko-KR")}</span>
          </div>
        </div>

        <div className="post-detail-content">
          {post.content
            ? post.content.split("\n").map((line, i) => <p key={i}>{line || "\u00A0"}</p>)
            : <p className="draw-history-empty">내용이 없습니다.</p>}
        </div>

        {isOwner && (
          <div className="post-detail-actions">
            <button className="result-btn" onClick={remove} disabled={deleting}>
              {deleting ? "삭제 중..." : "삭제하기"}
            </button>
          </div>
        )}
      </div>
    </div>
  );
}
