import { Hero } from "@/components/home/Hero";
import { LiveSlotSection } from "@/components/home/LiveSlotSection";
import { FeaturedPacks } from "@/components/home/FeaturedPacks";
import { HowItWorks } from "@/components/home/HowItWorks";
import { CommunityPreview } from "@/components/home/CommunityPreview";

export default function HomePage() {
  return (
    <>
      <Hero />
      <LiveSlotSection />
      <FeaturedPacks />
      <HowItWorks />
      <CommunityPreview />
    </>
  );
}
