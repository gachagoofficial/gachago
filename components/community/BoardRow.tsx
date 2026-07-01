interface BoardPost {
  id: string | number;
  title: string;
  category?: string;
  author?: string;
  date?: string;
  likes?: number;
  comments?: number;
  views?: number;
  pinned?: boolean;
}

// 게시판 한 줄.
export function BoardRow({ post }: { post: BoardPost }) {
  return (
    <article className={`board-row ${post.pinned ? "pinned" : ""}`}>
      <div className="board-main">
        {post.pinned && <span className="pin-mark">PIN</span>}
        <span className={`board-badge ${post.category === "이벤트" ? "event" : ""}`}>
          {post.category}
        </span>
        <h3>{post.title}</h3>
      </div>
      <div className="board-meta">
        <span>{post.author}</span>
        <span>{post.date}</span>
        <span>좋아요 {post.likes}</span>
        <span>댓글 {post.comments}</span>
        <span>조회 {(post.views ?? 0).toLocaleString()}</span>
      </div>
    </article>
  );
}
