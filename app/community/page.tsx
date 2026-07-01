import { PageHero } from "@/components/packs/PageHero";
import { CommunityBoard } from "@/components/community/CommunityBoard";

export default function CommunityPage() {
  return (
    <section className="subpage">
      <PageHero
        eyebrow="Collector Board"
        title="COMMUNITY"
        description="쿠지 컬렉터들과 함께 이야기해요!"
      />
      <CommunityBoard />
    </section>
  );
}
