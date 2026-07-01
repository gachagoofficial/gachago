import { PageHero } from "@/components/packs/PageHero";
import { PacksBrowser } from "@/components/packs/PacksBrowser";

export default function PacksPage() {
  return (
    <section className="subpage">
      <PageHero
        eyebrow="Luxury Mystery Packs"
        title="PACKS"
        description="명품을 가장 짜릿하게 만나는 GACHA GO의 전체 럭셔리 팩을 확인해 보세요."
      />
      <PacksBrowser />
    </section>
  );
}
