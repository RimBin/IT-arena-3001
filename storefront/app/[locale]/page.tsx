import HeroSmartCity from "@/components/hero/HeroSmartCity";

export default async function Home() {
  return (
    <main className="min-h-screen">
      {/* Smart City Hero at top for locale */}
      <HeroSmartCity />
    </main>
  );
}
