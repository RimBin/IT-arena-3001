"use client";
import Link from "next/link";
import { cn } from "@/lib/utils";

export function NavigationMenu({ children, className }: { children: React.ReactNode; className?: string }) {
  return <nav className={cn("flex items-center gap-4", className)}>{children}</nav>;
}

export function NavigationMenuItem({ href, children }: { href: string; children: React.ReactNode }) {
  return (
    <Link href={href} className="text-sm hover:underline underline-offset-4">
      {children}
    </Link>
  );
}
