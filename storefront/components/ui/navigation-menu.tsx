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

export function NavigationMenuDropdown({
  label,
  children,
  className,
}: {
  label: React.ReactNode;
  children: React.ReactNode;
  className?: string;
}) {
  return (
    <div className={cn("relative group", className)}>
      <button
        type="button"
        className={cn(
          "text-sm hover:underline underline-offset-4",
          "inline-flex items-center",
          "focus:outline-none focus-visible:ring-2 focus-visible:ring-black/10 rounded-md",
        )}
        aria-haspopup="menu"
      >
        {label}
      </button>

      <div
        className={cn(
          "absolute left-1/2 top-full z-50 w-[560px] -translate-x-1/2",
          "pt-3",
          "pointer-events-none opacity-0 translate-y-2",
          "transition duration-200 ease-out",
          "group-hover:pointer-events-auto group-hover:opacity-100 group-hover:translate-y-0",
          "group-focus-within:pointer-events-auto group-focus-within:opacity-100 group-focus-within:translate-y-0",
        )}
      >
        <div className="rounded-2xl border border-white/30 bg-white/80 backdrop-blur-lg shadow-[0_10px_30px_rgba(16,24,40,0.10)] p-4">
          {children}
        </div>
      </div>
    </div>
  );
}

export function NavigationMenuDropdownGrid({
  children,
  className,
}: {
  children: React.ReactNode;
  className?: string;
}) {
  return <div className={cn("grid grid-cols-2 gap-3", className)}>{children}</div>;
}

export function NavigationMenuDropdownLink({
  href,
  title,
  description,
}: {
  href: string;
  title: string;
  description?: string;
}) {
  return (
    <Link
      href={href}
      className={cn(
        "block rounded-xl p-3",
        "hover:bg-black/5 focus:bg-black/5",
        "focus:outline-none focus-visible:ring-2 focus-visible:ring-black/10",
      )}
    >
      <div className="text-sm font-medium">{title}</div>
      {description ? <div className="mt-0.5 text-xs text-black/60">{description}</div> : null}
    </Link>
  );
}
