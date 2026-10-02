"use client";

import { useEffect, useRef } from "react";
import { motion, useMotionValue, useSpring } from "framer-motion";

export default function CustomCursor() {
  const cursorRef = useRef<HTMLDivElement>(null);
  const dotRef = useRef<HTMLDivElement>(null);

  const mouseX = useMotionValue(-100);
  const mouseY = useMotionValue(-100);

  const springConfig = { damping: 25, stiffness: 300 };
  const cursorX = useSpring(mouseX, springConfig);
  const cursorY = useSpring(mouseY, springConfig);

  const dotX = useSpring(mouseX, { damping: 40, stiffness: 600 });
  const dotY = useSpring(mouseY, { damping: 40, stiffness: 600 });

  useEffect(() => {
    const move = (e: MouseEvent) => {
      mouseX.set(e.clientX - 16);
      mouseY.set(e.clientY - 16);
    };

    const handleEnter = () => {
      cursorRef.current?.classList.add("scale-[2.5]", "border-[var(--color-brand-copper)]", "bg-[var(--color-brand-copper)]/10");
    };
    const handleLeave = () => {
      cursorRef.current?.classList.remove("scale-[2.5]", "border-[var(--color-brand-copper)]", "bg-[var(--color-brand-copper)]/10");
    };

    const interactables = document.querySelectorAll("a, button, [data-cursor='pointer']");
    interactables.forEach(el => {
      el.addEventListener("mouseenter", handleEnter);
      el.addEventListener("mouseleave", handleLeave);
    });

    window.addEventListener("mousemove", move);
    return () => {
      window.removeEventListener("mousemove", move);
      interactables.forEach(el => {
        el.removeEventListener("mouseenter", handleEnter);
        el.removeEventListener("mouseleave", handleLeave);
      });
    };
  }, [mouseX, mouseY]);

  return (
    <>
      {/* Outer ring */}
      <motion.div
        ref={cursorRef}
        style={{ x: cursorX, y: cursorY }}
        className="fixed top-0 left-0 w-8 h-8 rounded-full border border-[var(--color-brand-navy)]/40 pointer-events-none z-[9999] transition-[transform,background,border-color] duration-300 mix-blend-multiply"
      />
      {/* Inner dot */}
      <motion.div
        ref={dotRef}
        style={{ x: dotX, y: dotY }}
        className="fixed top-0 left-0 w-8 h-8 pointer-events-none z-[9999] flex items-center justify-center"
      >
        <div className="w-1.5 h-1.5 rounded-full bg-[var(--color-brand-copper)]" />
      </motion.div>
    </>
  );
}
