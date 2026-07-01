"use client";

import { useMemo, useState } from "react";
import { boardPosts, communityCategories } from "@/lib/data/catalog";
import { CategoryTabs } from "./CategoryTabs";
import { BoardRow } from "./BoardRow";

interface BoardPost {
  id: string | number;
  title: string;
  category?: string;
  author?: string;
  [key: string]: unknown;
}

// 커뮤니티 게시판 (카테고리 탭 + 검색 + 목록).
export function CommunityBoard() {
  const [activeCategory, setActiveCategory] = useState("전체");
  const [searchType, setSearchType] = useState("제목");
  const [query, setQuery] = useState("");
  const [submittedQuery, setSubmittedQuery] = useState("");

  const posts = useMemo(() => {
    const keyword = submittedQuery.trim().toLowerCase();
    return (boardPosts as BoardPost[]).filter((post) => {
      const categoryMatch = activeCategory === "전체" || post.category === activeCategory;
      const haystack = String(
        (searchType === "작성자" ? post.author : post.title) ?? "",
      ).toLowerCase();
      const searchMatch = !keyword || haystack.includes(keyword);
      return categoryMatch && searchMatch;
    });
  }, [activeCategory, searchType, submittedQuery]);

  return (
    <div className="subpage-inner community-shell">
      <CategoryTabs
        items={communityCategories as string[]}
        active={activeCategory}
        onChange={setActiveCategory}
      />
      <div className="community-toolbar">
        <div className="community-search">
          <select
            value={searchType}
            onChange={(e) => setSearchType(e.target.value)}
            aria-label="검색 기준"
          >
            <option>제목</option>
            <option>작성자</option>
          </select>
          <input
            value={query}
            onChange={(e) => setQuery(e.target.value)}
            placeholder="검색어를 입력하세요"
          />
          <button onClick={() => setSubmittedQuery(query)}>검색</button>
        </div>
        <button className="write-button">글쓰기</button>
      </div>
      <div className="board-list">
        {posts.map((post) => (
          <BoardRow post={post as never} key={post.id} />
        ))}
      </div>
      <div className="pagination-row">
        <button>이전</button>
        <button className="active">1</button>
        <button>2</button>
        <button>3</button>
        <span>…</span>
        <button>42</button>
        <button>다음</button>
        <strong>총 {(boardPosts as BoardPost[]).length}개의 게시글</strong>
      </div>
    </div>
  );
}
