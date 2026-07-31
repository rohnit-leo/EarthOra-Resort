import { useEffect, useState } from "react";
import { motion } from "motion/react";

export function CustomCursor() {
  const [mousePosition, setMousePosition] = useState({ x: -100, y: -100 });
  const [isHovering, setIsHovering] = useState(false);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    // Only run custom cursor on desktop fine pointer devices
    if (window.matchMedia("(pointer: coarse)").matches) {
      return;
    }

    const updateMousePosition = (e: MouseEvent) => {
      setMousePosition({ x: e.clientX, y: e.clientY });
      if (!isVisible) setIsVisible(true);
    };

    const handleMouseLeave = () => {
      setIsVisible(false);
    };

    const handleMouseEnter = () => {
      setIsVisible(true);
    };

    const handleMouseOver = (e: MouseEvent) => {
      const target = e.target as HTMLElement;
      if (!target) return;

      if (
        target.tagName.toLowerCase() === "button" ||
        target.tagName.toLowerCase() === "a" ||
        target.tagName.toLowerCase() === "input" ||
        target.tagName.toLowerCase() === "select" ||
        target.tagName.toLowerCase() === "textarea" ||
        target.closest("button") ||
        target.closest("a") ||
        target.closest(".magnetic") ||
        target.getAttribute("role") === "button"
      ) {
        setIsHovering(true);
      } else {
        setIsHovering(false);
      }
    };

    window.addEventListener("mousemove", updateMousePosition, { passive: true });
    window.addEventListener("mouseover", handleMouseOver, { passive: true });
    document.addEventListener("mouseleave", handleMouseLeave);
    document.addEventListener("mouseenter", handleMouseEnter);

    return () => {
      window.removeEventListener("mousemove", updateMousePosition);
      window.removeEventListener("mouseover", handleMouseOver);
      document.removeEventListener("mouseleave", handleMouseLeave);
      document.removeEventListener("mouseenter", handleMouseEnter);
    };
  }, [isVisible]);

  if (!isVisible) return null;

  return (
    <div className="hidden md:block">
      {/* Inner Dot */}
      <motion.div
        className="fixed top-0 left-0 w-3.5 h-3.5 bg-subtle-gold rounded-full pointer-events-none z-[99999] shadow-md border border-white/40"
        animate={{
          x: mousePosition.x - 7,
          y: mousePosition.y - 7,
          scale: isHovering ? 2.2 : 1,
          opacity: 1,
        }}
        transition={{ type: "tween", ease: "backOut", duration: 0.1 }}
      />
      {/* Outer Spring Ring */}
      <motion.div
        className="fixed top-0 left-0 w-10 h-10 border-2 border-subtle-gold/70 rounded-full pointer-events-none z-[99998]"
        animate={{
          x: mousePosition.x - 20,
          y: mousePosition.y - 20,
          scale: isHovering ? 1.4 : 1,
          opacity: isHovering ? 0.3 : 0.8,
        }}
        transition={{ type: "spring", stiffness: 220, damping: 20, mass: 0.3 }}
      />
    </div>
  );
}
