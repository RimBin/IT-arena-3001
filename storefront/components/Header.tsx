"use client";
import Link from "next/link";
import Image from "next/image";
import { NavigationMenu, NavigationMenuItem } from "@/components/ui/navigation-menu";
import { Button } from "@/components/ui/button";

export default function Header() {
  return (
    <header className="sticky top-4 z-40">
      <div className="mx-auto max-w-7xl px-4">
        <div className="backdrop-blur-lg bg-white/30 border border-white/20 rounded-2xl shadow-[0_10px_30px_rgba(16,24,40,0.08)] p-3 flex items-center justify-between">
          <Link href="/" className="flex items-center gap-2" aria-label="IT Arena — į pradžią">
            {/* Wordmark SVG matching provided layout */}
            <Image src="/logos/itarena-wordmark.svg" alt="IT Arena" width={220} height={34} priority />
          </Link>
          <NavigationMenu>
            <NavigationMenuItem href="/">Pagrindinis</NavigationMenuItem>
            <NavigationMenuItem href="/about">Apie mus</NavigationMenuItem>
            <NavigationMenuItem href="/admin">Administravimas</NavigationMenuItem>
          </NavigationMenu>
          <div className="flex items-center gap-2">
            <Button size="sm" variant="default">
              Susisiekti
            </Button>
          </div>
        </div>
      </div>
    </header>
  );
}
