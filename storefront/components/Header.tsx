"use client";
import Link from "next/link";
import Image from "next/image";
import { useEffect, useMemo, useState } from "react";
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
  const [isScrolled, setIsScrolled] = useState(false);
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

  useEffect(() => {
    const onScroll = () => setIsScrolled(window.scrollY > 10);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header className="fixed top-0 inset-x-0 z-50">
      <div className={"mx-auto max-w-[1440px] px-6 pb-4 transition-all duration-300 " + (isScrolled ? "pt-0" : "pt-4")}>
        <div
          className={
            "flex justify-between items-center mb-0 transition-all duration-300 " +
            (isScrolled
              ? "bg-white/30 backdrop-blur-xl border border-white/40 rounded-2xl shadow-[0_14px_36px_rgba(16,24,40,0.12)]"
              : "")
          }
        >
          <div className="y-neumo-surface y-pill px-6 py-3 transition-all duration-300">
            <Link href={localize("/")} className="font-semibold" aria-label="IT Arena — į pradžią">
              IT Arena
            </Link>
          </div>

          <div className="y-neumo-inset y-pill px-8 py-3 flex items-center gap-6 transition-all duration-300">
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
          </div>

          <div className="flex items-center">
            <button type="button" className="y-cta-glow y-focus font-semibold text-slate-900 hover:text-slate-700 transition-colors">
              Susisiekti
            </button>
          </div>
        </div>
      </div>
    </header>
  );
}
