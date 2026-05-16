"use client";

import { ButtonHTMLAttributes, forwardRef } from "react";
import { cn } from "@/lib/utils";

interface GlowButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: "primary" | "ghost";
  size?: "sm" | "md" | "lg";
}

const GlowButton = forwardRef<HTMLButtonElement, GlowButtonProps>(
  ({ className, variant = "primary", size = "md", children, ...props }, ref) => {
    return (
      <button
        ref={ref}
        className={cn(
          "relative overflow-hidden rounded-xl font-medium transition-all duration-300 inline-flex items-center justify-center gap-2 group",
          variant === "primary" &&
            "bg-gradient-to-r from-gold to-gold-light text-midnight hover:shadow-[0_0_30px_rgba(201,168,76,0.4)]",
          variant === "ghost" &&
            "border border-gold/30 text-gold hover:bg-gold/10 hover:border-gold/50",
          size === "sm" && "px-4 py-2 text-sm",
          size === "md" && "px-6 py-3 text-base",
          size === "lg" && "px-8 py-4 text-lg",
          className
        )}
        {...props}
      >
        {variant === "primary" && (
          <span className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent -translate-x-full group-hover:translate-x-full transition-transform duration-700" />
        )}
        <span className="relative z-10">{children}</span>
      </button>
    );
  }
);

GlowButton.displayName = "GlowButton";
export default GlowButton;
