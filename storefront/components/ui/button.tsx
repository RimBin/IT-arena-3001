import { cn } from "@/lib/utils";

export type ButtonVariant = "default" | "outline" | "ghost" | "cta";
export type ButtonSize = "sm" | "md" | "lg";

type Props = React.ButtonHTMLAttributes<HTMLButtonElement> & {
  variant?: ButtonVariant;
  size?: ButtonSize;
};

type ButtonClassOptions = {
  variant?: ButtonVariant;
  size?: ButtonSize;
  className?: string;
};

const base =
  "inline-flex items-center justify-center rounded-full font-semibold transition-transform duration-200 focus:outline-none focus:ring-2 focus:ring-offset-2";
const variants = {
  default:
    "bg-[#0b1220] text-white hover:brightness-95 focus:ring-[#0b1220] shadow-[0_12px_30px_rgba(3,7,18,0.25)]",
  outline: "border border-neutral-300 bg-white text-slate-900 hover:bg-neutral-50",
  ghost: "bg-transparent hover:bg-neutral-100 text-slate-900",
  cta: "y-cta-glow y-focus text-slate-900 hover:text-slate-700",
} as const;
const sizes = {
  sm: "h-9 px-4 text-sm",
  md: "h-12 px-6 text-base",
  lg: "h-14 px-8 text-lg",
} as const;

export function buttonClasses({ variant = "default", size = "md", className }: ButtonClassOptions = {}) {
  return cn(base, variants[variant], sizes[size], className);
}

export function Button({ className, variant = "default", size = "md", ...props }: Props) {
  return <button className={buttonClasses({ variant, size, className })} {...props} />;
}
