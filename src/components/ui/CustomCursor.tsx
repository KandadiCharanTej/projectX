"use client";

import { useEffect, useState } from "react";
import { motion, useMotionValue, useSpring } from "framer-motion";
import Image from "next/image";

export default function CustomCursor() {
  const [isVisible, setIsVisible] = useState(false);
  const mouseX = useMotionValue(-100);
  const mouseY = useMotionValue(-100);

  // Use a very tight spring so it tracks the mouse quickly like a real cursor
  const cursorX = useSpring(mouseX, { damping: 50, stiffness: 1000 });
  const cursorY = useSpring(mouseY, { damping: 50, stiffness: 1000 });

  useEffect(() => {
    const move = (e: MouseEvent) => {
      if (!isVisible) setIsVisible(true);
      // Offset by a few pixels if the image hotspot is not exactly top-left
      mouseX.set(e.clientX - 2);
      mouseY.set(e.clientY - 2);
    };

    const handleLeave = () => setIsVisible(false);
    const handleEnter = () => setIsVisible(true);

    window.addEventListener("mousemove", move);
    document.addEventListener("mouseleave", handleLeave);
    document.addEventListener("mouseenter", handleEnter);
    
    return () => {
      window.removeEventListener("mousemove", move);
      document.removeEventListener("mouseleave", handleLeave);
      document.removeEventListener("mouseenter", handleEnter);
    };
  }, [mouseX, mouseY, isVisible]);

  return (
    <motion.div
      style={{ x: cursorX, y: cursorY, opacity: isVisible ? 1 : 0 }}
      className="fixed top-0 left-0 w-15 h-15 pointer-events-none z-[9999]"
    >
      <Image
        src="/Cursor_tail.png"
        alt="Cursor"
        width={50}
        height={50}
        className="w-full h-full object-contain drop-shadow-md"
        priority
      />
    </motion.div>
  );
}
