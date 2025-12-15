import { cn } from "@/lib/utils";

type Props = React.ButtonHTMLAttributes<HTMLButtonElement> & {
  variant?: "default" | "outline" | "ghost";
  size?: "sm" | "md" | "lg";
};

export function Button({ className, variant = "default", size = "md", ...props }: Props) {
  // Primary pill-style button used across the site
  const base = "inline-flex items-center justify-center rounded-full font-semibold transition-transform duration-200 focus:outline-none focus:ring-2 focus:ring-offset-2";
  const variants = {
    default: "bg-[#0b1220] text-white hover:brightness-95 focus:ring-[#0b1220] shadow-[0_12px_30px_rgba(3,7,18,0.25)]",
    outline: "border border-neutral-300 bg-white text-slate-900 hover:bg-neutral-50",
    ghost: "bg-transparent hover:bg-neutral-100 text-slate-900",
  } as const;
  const sizes = {
    sm: "h-9 px-4 text-sm",
    md: "h-12 px-6 text-base",
    lg: "h-14 px-8 text-lg",
  } as const;

  return <button className={cn(base, variants[variant], sizes[size], className)} {...props} />;
}
