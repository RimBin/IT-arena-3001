"use client";
import Link from "next/link";
import Image from "next/image";
import { useMemo } from "react";
import { usePathname } from "next/navigation";
import {
  NavigationMenu,
  NavigationMenuDropdown,
  NavigationMenuDropdownGrid,
  NavigationMenuDropdownLink,
  NavigationMenuItem,
} from "@/components/ui/navigation-menu";
import { Button } from "@/components/ui/button";

const LOCALES = ["lt", "en", "sv", "es"] as const;

export default function Header() {
  const pathname = usePathname() || "/";
  const locale = useMemo(() => {
    const parts = pathname.split("/").filter(Boolean);
    return parts.length > 0 && LOCALES.includes(parts[0] as (typeof LOCALES)[number]) ? parts[0] : "";
  }, [pathname]);

  const localize = (href: string) => {
    // Only adjust absolute paths
    if (!href.startsWith("/")) return href;
    // Already localized
    if (locale && href.startsWith(`/${locale}`)) return href;
    // Root -> /lt
    if (href === "/") return locale ? `/${locale}` : "/";
    // Anchor-only -> /lt#anchor
    if (href.startsWith("/#")) return locale ? `/${locale}${href}` : href;
    // Otherwise prefix locale
    return locale ? `/${locale}${href}` : href;
  };

  return (
    <header className="sticky top-4 z-40">
      <div className="mx-auto max-w-7xl px-4">
        <div className="backdrop-blur-lg bg-white/30 border border-white/20 rounded-2xl shadow-[0_10px_30px_rgba(16,24,40,0.08)] p-3 flex items-center justify-between">
          <Link href={localize("/")} className="flex items-center gap-2" aria-label="IT Arena — į pradžią">
            {/* Wordmark SVG matching provided layout */}
            <Image src="/logos/itarena-wordmark.svg" alt="IT Arena" width={220} height={34} priority />
          </Link>
          <NavigationMenu>
            <NavigationMenuItem href={localize("/")}>Pagrindinis</NavigationMenuItem>
            <NavigationMenuItem href={localize("/about")}>Apie mus</NavigationMenuItem>
            <NavigationMenuDropdown label="Paslaugos">
              <NavigationMenuDropdownGrid>
                <NavigationMenuDropdownLink
                  href={localize("/#paslaugos")}
                  title="Interneto svetainių kūrimas"
                  description="Reprezentacinės svetainės, landing’ai, individualūs sprendimai"
                />
                <NavigationMenuDropdownLink
                  href={localize("/#paslaugos")}
                  title="Elektroninių parduotuvių kūrimas"
                  description="E-komercija, apmokėjimai, pristatymai, integracijos"
                />
                <NavigationMenuDropdownLink
                  href={localize("/#paslaugos")}
                  title="Gamybos valdymo sistemos"
                  description="Procesų automatizavimas, ERP/MES integracijos"
                />
                <NavigationMenuDropdownLink
                  href={localize("/#paslaugos")}
                  title="Programėlių kūrimas"
                  description="Web ir mobilios programėlės, API, integracijos"
                />
                <NavigationMenuDropdownLink
                  href={localize("/#paslaugos")}
                  title="SEO LLM"
                  description="SEO turinys ir struktūra, pritaikyta paieškai ir LLM"
                />
                <NavigationMenuDropdownLink
                  href={localize("/#paslaugos")}
                  title="Google Ads"
                  description="Kampanijos, analitika, optimizavimas, konversijos"
                />
              </NavigationMenuDropdownGrid>
            </NavigationMenuDropdown>
            <NavigationMenuItem href={localize("/blog")}>Tinklaraštis</NavigationMenuItem>
            <NavigationMenuItem href={localize("/#kontaktai")}>Kontaktai</NavigationMenuItem>
            <NavigationMenuItem href={localize("/#darbai")}>Darbai</NavigationMenuItem>
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
