import Link from "next/link";
import { communityPreviewPosts } from "@/lib/data/catalog";

interface PreviewPost {
  user: string;
  title: string;
  meta: string;
  image: string;
}

// 커뮤니티 미리보기 (홈 하단).
export function CommunityPreview() {
  const posts = communityPreviewPosts as PreviewPost[];

  return (
    <section className="section-wrap">
      <div className="grid gap-8 lg:grid-cols-[0.72fr_1.28fr] lg:items-end">
        <div>
          <p className="section-label">Community Preview</p>
          <h2 className="community-preview-title section-title mt-3 font-black">
            오픈의 순간이
            <br />
            곧 컬렉션이
            <br />
            되는 곳
          </h2>
          <p className="mt-5 max-w-md text-base font-medium leading-8 text-white/58">
            최근 당첨, 유저 쇼케이스, 플렉스 이미지가 하나의 럭셔리 소셜 피드처럼 이어집니다.
          </p>
          <Link
            href="/community"
            className="magnetic-btn mt-7 inline-block rounded-full border border-white/10 bg-white/5 px-5 py-3 text-sm font-black text-white"
          >
            커뮤니티 보기
          </Link>
        </div>
        <div className="community-preview-grid grid gap-5 md:grid-cols-3">
          {posts.map((post) => (
            <article className="community-card rounded-[24px]" key={post.user}>
              <div
                className="community-preview-image h-56 bg-cover bg-center"
                style={{
                  backgroundImage: `linear-gradient(180deg, transparent, rgba(0,0,0,.72)), url(${post.image})`,
                }}
              />
              <div className="community-preview-copy p-4">
                <p className="text-xs font-black uppercase tracking-[0.16em] text-drawzy-gold">
                  @{post.user}
                </p>
                <h3 className="mt-2 text-base font-black leading-6 text-white">{post.title}</h3>
                <p className="mt-3 text-sm font-semibold text-white/48">{post.meta}</p>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
