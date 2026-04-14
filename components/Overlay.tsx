"use client";

import React from "react";
import { motion, MotionValue, useTransform, useMotionValue } from "framer-motion";

interface OverlayProps {
  scrollYProgress?: MotionValue<number>;
}

const Letter = ({ char, index, total, scrollYProgress }: { char: string; index: number; total: number; scrollYProgress: MotionValue<number> }) => {
  const start = (index / total) * 0.08;
  const end = start + 0.02;
  const letterOp = useTransform(scrollYProgress, [start, end, 0.08, 0.18], [0, 1, 1, 0]);
  
  return (
    <motion.span style={{ opacity: letterOp }}>
      {char}
    </motion.span>
  );
};

export default function Overlay({ scrollYProgress: externalProgress }: OverlayProps) {
  // Fallback motion value so hooks are always called with a valid MotionValue
  const fallback = useMotionValue(0);
  const scrollYProgress = externalProgress ?? fallback;

  // Section 1: "Saiyam Bajpai." (0% - 18%)
  const s1Text = "Saiyam Bajpai.";
  const s1Opacity = useTransform(scrollYProgress, [0, 0.08, 0.18], [0, 1, 0]);
  const s1Y = useTransform(scrollYProgress, [0, 0.18], [0, -50]); // slight upward float

  // Section 2: "Building things that actually work." (25% - 45%)
  const s2Opacity = useTransform(scrollYProgress, [0.2, 0.25, 0.35, 0.45], [0, 1, 1, 0]);
  const s2Y = useTransform(scrollYProgress, [0.2, 0.45], [100, -100]); // Parallax roughly equivalent to 0.3x

  // Section 3: "From raw ideas to shipped products." (50% - 70%)
  const s3Opacity = useTransform(scrollYProgress, [0.45, 0.5, 0.6, 0.7], [0, 1, 1, 0]);
  const s3Y = useTransform(scrollYProgress, [0.45, 0.7], [100, -100]);

  // Section 4: "Let's see what's possible." (75% - 90%)
  const s4Opacity = useTransform(scrollYProgress, [0.7, 0.75, 0.85, 0.9], [0, 1, 1, 0]);
  const s4Y = useTransform(scrollYProgress, [0.7, 0.9], [50, -50]);

  return (
    <div className="absolute inset-0 z-10 w-full h-full pointer-events-none flex flex-col justify-center">
      {/* Section 1 */}
      <motion.div
        style={{ opacity: s1Opacity, y: s1Y }}
        className="absolute inset-x-0 top-1/2 -translate-y-1/2 text-center"
      >
        <h1 className="font-syne text-white font-bold text-8xl md:text-9xl drop-shadow-lg tracking-tight">
          {s1Text.split("").map((char, i) => (
             <Letter key={i} char={char} index={i} total={s1Text.length} scrollYProgress={scrollYProgress} />
          ))}
        </h1>
      </motion.div>

      {/* Section 2 */}
      <motion.div
        style={{ opacity: s2Opacity, y: s2Y }}
        className="absolute inset-x-0 top-1/2 -translate-y-1/2 pl-8 md:pl-16 text-left"
      >
        <h2 className="font-syne text-5xl md:text-6xl text-[#F0F0F5] font-semibold max-w-3xl drop-shadow-md">
          Building things that actually work.
        </h2>
      </motion.div>

      {/* Section 3 */}
      <motion.div
        style={{ opacity: s3Opacity, y: s3Y }}
        className="absolute inset-x-0 top-1/2 -translate-y-1/2 pr-8 md:pr-16 text-right flex justify-end"
      >
        <h2 className="font-syne text-5xl md:text-6xl text-[#F0F0F5] font-semibold max-w-3xl drop-shadow-md">
          From raw ideas to shipped products.
        </h2>
      </motion.div>

      {/* Section 4 */}
      <motion.div
        style={{ opacity: s4Opacity, y: s4Y }}
        className="absolute inset-x-0 top-1/2 -translate-y-1/2 text-center"
      >
        <h2 className="font-syne text-5xl md:text-7xl text-[#E8823A] font-bold drop-shadow-md">
          Let&apos;s see what&apos;s possible.
        </h2>
      </motion.div>
    </div>
  );
}
