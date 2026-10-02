"use client";

import { motion } from "framer-motion";
import { ReactNode } from "react";

interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  children: ReactNode;
  variant?: "primary" | "outline" | "ghost";
  size?: "sm" | "md" | "lg";
  className?: string;
}

export function Button({
  children,
  variant = "primary",
  size = "md",
  className = "",
  ...props
}: ButtonProps) {
  const baseStyles =
    "relative inline-flex items-center justify-center rounded-full font-semibold transition-all duration-500 focus:outline-none cursor-pointer overflow-hidden";

  const variants = {
    primary:
      "bg-[var(--color-brand-copper)] text-[var(--color-brand-white)] hover:bg-[var(--color-brand-copper-dark)] shadow-[0_0_20px_rgba(198,93,46,0.2)] hover:shadow-[0_0_30px_rgba(198,93,46,0.4)] group",
    outline:
      "border border-[var(--color-brand-navy)] bg-transparent text-[var(--color-brand-navy)] hover:bg-[var(--color-brand-navy)] hover:text-[var(--color-brand-white)] shadow-sm",
    ghost: "bg-transparent text-[var(--color-brand-navy)]/70 hover:text-[var(--color-brand-navy)] hover:bg-[var(--color-brand-navy)]/5",
  };

  const sizes = {
    sm: "px-5 py-2.5 text-sm",
    md: "px-7 py-3.5 text-sm md:text-base",
    lg: "px-9 py-4 text-base md:text-lg",
  };

  return (
    <motion.button
      whileHover={{ scale: 1.02 }}
      whileTap={{ scale: 0.97 }}
      transition={{ type: "spring", stiffness: 400, damping: 25 }}
      className={`${baseStyles} ${variants[variant]} ${sizes[size]} ${className}`}
      {...props}
    >
      {variant === "primary" && (
        <span className="absolute inset-0 bg-gradient-to-r from-transparent via-white/10 to-transparent -translate-x-full group-hover:animate-[shimmer_1.5s_infinite] pointer-events-none" />
      )}
      <span className="relative z-10 flex items-center">{children}</span>
    </motion.button>
  );
}
