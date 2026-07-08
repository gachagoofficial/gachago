"use client";

import { useEffect, useMemo, useState } from "react";
import { useAuth } from "@/components/auth/AuthProvider";
import { AuthModal } from "@/components/auth/AuthModal";
import { createClient } from "@/lib/supabase/client";
import { WritePostModal } from "./WritePostModal";
import { PostDetailModal } from "./PostDetailModal";

export interface Post {
  id: string;
  user_id: string | null;
  author_name: string | null;
  category: string | null;
  title: string;
  content: string | null;
  is_notice: boolean;
  is_secret?: boolean;
  created_at: string;
}

const CATEGORIES = ["전체", "공지", "자유", "후기", "이벤트", "1:1 문의"];

// 커뮤니티 게시판 (DB 기반 + 글쓰기).
export function CommunityBoard() {
  const { user } = useAuth();
  const supabase = useMemo(() => createClient(), []);
  const [posts, setPosts] = useState<Post[] | null>(null);
  const [activeCategory, setActiveCategory] = useState("전체");
  const [query, setQuery] = useState("");
  const [showWrite, setShowWrite] = useState(false);
  const [showAuth, setShowAuth] = useState(false);
  const [openPost, setOpenPost] = useState<Post | null>(null);

  const load = () => {
    supabase
      .from("posts")
      .select("*")
      .order("is_notice", { ascending: false })
      .order("created_at", { ascending: false })
      .then(({ data }) => setPosts((data as Post[]) || []));
  };

  useEffect(() => {
    load();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  const filtered = useMemo(() => {
    const kw = query.trim().toLowerCase();
    return (posts || []).filter((p) => {
      const catMatch = activeCategory === "전체" || p.category === activeCategory;
      const kwMatch = !kw || p.title.toLowerCase().includes(kw);
      return catMatch && kwMatch;
    });
  }, [posts, activeCategory, query]);

  const onWriteClick = () => {
    if (!user) {
      setShowAuth(true);
      return;
    }
    setShowWrite(true);
  };

  return (
    <div className="subpage-inner community-shell">
      {/* 카테고리 탭 */}
      <div className="community-tabs">
        {CATEGORIES.map((c) => (
          <button
            key={c}
            className={`community-tab${activeCategory === c ? " is-active" : ""}`}
            onClick={() => setActiveCategory(c)}
          >
            {c}
          </button>
        ))}
      </div>

      {/* 툴바: 검색 + 글쓰기 */}
      <div className="community-toolbar">
        <input
          className="community-search-input"
          placeholder="제목 검색"
          value={query}
          onChange={(e) => setQuery(e.target.value)}
        />
        <button className="community-write-btn" onClick={onWriteClick}>
          ✏ 글쓰기
        </button>
      </div>

      {/* 목록 */}
      <div className="community-list">
        {posts === null && <p className="draw-history-empty">불러오는 중...</p>}
        {posts !== null && filtered.length === 0 && (
          <p className="draw-history-empty">아직 글이 없습니다. 첫 글을 남겨보세요!</p>
        )}
        {filtered.map((p) => (
          <button
            key={p.id}
            className={`community-post-row${p.is_notice ? " is-notice" : ""}`}
            onClick={() => setOpenPost(p)}
          >
            <div className="community-post-main">
              {p.is_notice && <span className="notice-badge">공지</span>}
              {!p.is_notice && p.category && (
                <span className="community-cat">{p.category}</span>
              )}
              <span className="community-post-title">
                {p.is_secret && "🔒 "}
                {p.title}
              </span>
            </div>
            <div className="community-post-meta">
              <span>{p.author_name || "익명"}</span>
              <span>{new Date(p.created_at).toLocaleDateString("ko-KR")}</span>
            </div>
          </button>
        ))}
      </div>

      {showWrite && user && (
        <WritePostModal
          userId={user.id}
          close={() => setShowWrite(false)}
          onPosted={() => {
            setShowWrite(false);
            load();
          }}
        />
      )}
      {openPost && (
        <PostDetailModal
          post={openPost}
          currentUserId={user?.id}
          close={() => setOpenPost(null)}
          onDeleted={() => {
            setOpenPost(null);
            load();
          }}
        />
      )}
      {showAuth && <AuthModal initialMode="login" close={() => setShowAuth(false)} />}
    </div>
  );
}
