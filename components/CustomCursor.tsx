"use client";

import { useEffect, useState, useCallback, useRef } from "react";
import { motion, useMotionValue, useSpring, useTransform } from "framer-motion";

export default function CustomCursor() {
  const [isHovering, setIsHovering] = useState(false);
  const [isMouseDown, setIsMouseDown] = useState(false);
  const [isVisible, setIsVisible] = useState(false);
  
  // Use raw motion values for zero-lag position tracking
  const mouseX = useMotionValue(-100);
  const mouseY = useMotionValue(-100);
  
  // Create a snappy spring for the size to keep the "cool" effect but make it responsive
  const springConfig = { damping: 20, stiffness: 300, mass: 0.5 };
  const sizeSpring = useSpring(isHovering ? 60 : 20, springConfig);
  
  // Sync sizeSpring with state
  useEffect(() => {
    sizeSpring.set(isHovering ? 60 : 20);
  }, [isHovering, sizeSpring]);

  useEffect(() => {
    const moveCursor = (e: MouseEvent) => {
      // Direct set for zero lag
      mouseX.set(e.clientX);
      mouseY.set(e.clientY);
      if (!isVisible) setIsVisible(true);
    };
    
    const handleMouseDown = () => setIsMouseDown(true);
    const handleMouseUp = () => setIsMouseDown(false);

    // Using event delegation to detect hovers on links or buttons
    const handleMouseOver = (e: MouseEvent) => {
      const target = e.target as HTMLElement;
      const isInteractive = 
        target.tagName.toLowerCase() === "a" ||
        target.tagName.toLowerCase() === "button" ||
        target.closest("a") ||
        target.closest("button") ||
        target.style.cursor === "pointer" ||
        window.getComputedStyle(target).cursor === "pointer";
        
      setIsHovering(!!isInteractive);
    };

    window.addEventListener("mousemove", moveCursor, { passive: true });
    window.addEventListener("mouseover", handleMouseOver);
    window.addEventListener("mousedown", handleMouseDown);
    window.addEventListener("mouseup", handleMouseUp);
    
    return () => {
      window.removeEventListener("mousemove", moveCursor);
      window.removeEventListener("mouseover", handleMouseOver);
      window.removeEventListener("mousedown", handleMouseDown);
      window.removeEventListener("mouseup", handleMouseUp);
    };
  }, [mouseX, mouseY, isVisible]);

  if (!isVisible) return null;

  return (
    <motion.div
      className="fixed top-0 left-0 rounded-full pointer-events-none z-[9999] mix-blend-screen"
      style={{
        x: mouseX,
        y: mouseY,
        width: sizeSpring,
        height: sizeSpring,
        translateX: "-50%",
        translateY: "-50%",
        backgroundColor: "rgba(91, 141, 239, 0.6)",
        boxShadow: isHovering 
          ? "0 0 30px 8px rgba(91, 141, 239, 0.4)" 
          : "0 0 20px 4px rgba(91, 141, 239, 0.3)",
      }}
      animate={{
        scale: isMouseDown ? 0.8 : 1,
        opacity: isHovering ? 0.8 : 1,
      }}
      transition={{
        scale: { type: "spring", stiffness: 400, damping: 20 },
        opacity: { duration: 0.2 }
      }}
    />
  );
}

