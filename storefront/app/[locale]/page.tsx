import HeroHomepageNeumorphic from "@/components/hero/HeroHomepageNeumorphic";
import HeroHomepageNeumorphicTech from "@/components/hero/HeroHomepageNeumorphicTech";

export default async function Home() {
  return (
    <main className="max-w-[1440px] mx-auto px-[clamp(16px,3vw,40px)] py-[clamp(16px,3vw,48px)] space-y-[clamp(32px,6vw,64px)]">
      <HeroHomepageNeumorphic />
      <HeroHomepageNeumorphicTech />
    </main>
  );
}
