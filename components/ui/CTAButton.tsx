"use client";

import { cn } from "@/lib/utils";
import { ArrowRight } from "lucide-react";

interface CTAButtonProps {
  href: string;
  children: React.ReactNode;
  variant?: "primary" | "outline" | "ghost";
  size?: "md" | "lg";
  className?: string;
  showArrow?: boolean;
  external?: boolean;
  ariaLabel?: string;
}

export function CTAButton({
  href,
  children,
  variant = "primary",
  size = "lg",
  className,
  showArrow = true,
  external = true,
  ariaLabel,
}: CTAButtonProps) {
  const base =
    "group relative inline-flex items-center justify-center gap-2.5 rounded-full font-sans font-semibold tracking-wide transition-all duration-300 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-brand focus-visible:ring-offset-2 focus-visible:ring-offset-ink overflow-hidden";

  const sizes = {
    md: "px-6 py-3 text-sm",
    lg: "px-8 py-4 text-sm md:text-base min-h-[52px]",
  };

  const variants = {
    primary:
      "bg-gradient-to-r from-brand-deep via-brand to-brand-light text-white shadow-glow hover:shadow-glow-lg hover:-translate-y-0.5",
    outline:
      "border border-white/20 bg-white/[0.02] text-white backdrop-blur-sm hover:border-brand/60 hover:bg-brand/10",
    ghost: "text-slatey-light hover:text-white",
  };

  return (
    <a
      href={href}
      aria-label={ariaLabel}
      target={external ? "_blank" : undefined}
      rel={external ? "noopener noreferrer" : undefined}
      className={cn(base, sizes[size], variants[variant], className)}
    >
      {/* Shimmer sweep on primary */}
      {variant === "primary" && (
        <span className="pointer-events-none absolute inset-0 -translate-x-full bg-gradient-to-r from-transparent via-white/25 to-transparent transition-transform duration-700 group-hover:translate-x-full" />
      )}
      <span className="relative z-10">{children}</span>
      {showArrow && (
        <ArrowRight className="relative z-10 h-4 w-4 transition-transform duration-300 group-hover:translate-x-1" />
      )}
    </a>
  );
}
