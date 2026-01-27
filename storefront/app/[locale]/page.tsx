import HeroSmartCity from "@/components/hero/HeroSmartCity";
import HeroSmartCityDuplicate from "@/components/sections/HeroSmartCityDuplicate";

export default async function Home() {
  return (
    <main className="min-h-screen">
      {/* Smart City Hero at top for locale */}
      <HeroSmartCity />
      <HeroSmartCityDuplicate />
    </main>
  );
}
