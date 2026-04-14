"use client";

import React, { useEffect, useState } from "react";
import { motion, useInView } from "framer-motion";

// Custom hook for animated counter
const AnimatedCounter = ({ from = 0, to, duration = 2 }: { from?: number, to: number | string, duration?: number }) => {
  const [count, setCount] = useState(from);
  const ref = React.useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-50px" });

  useEffect(() => {
    if (isInView && typeof to === "number") {
      let startTimestamp: number;
      const step = (timestamp: number) => {
        if (!startTimestamp) startTimestamp = timestamp;
        const progress = Math.min((timestamp - startTimestamp) / (duration * 1000), 1);
        setCount(Math.floor(progress * (to - from) + from));
        if (progress < 1) {
          window.requestAnimationFrame(step);
        }
      };
      window.requestAnimationFrame(step);
    }
  }, [isInView, to, from, duration]);

  return <span ref={ref}>{typeof to === 'number' ? count : to}</span>;
};

export default function About() {
  const stats = [
    { num: 2, label: "Degrees — simultaneously" },
    { num: 3, label: "Real Projects — shipped" },
    { num: "∞", label: "Things to learn" },
    { num: 1, label: "Goal — build things that matter" },
  ];

  return (
    <section id="about" className="relative py-24 bg-[#08080F] border-t border-white/5 overflow-hidden">
      <div className="container mx-auto px-6 max-w-6xl relative z-10">
        
        {/* Section Header */}
        <div className="mb-12">
          <h3 className="text-sm text-gray-500 uppercase tracking-[0.2em] font-semibold mb-4">About</h3>
          <h2 className="text-4xl md:text-5xl font-syne font-bold text-white tracking-tight">
            Two degrees. One goal. Build.
          </h2>
        </div>

        {/* Two Column Section */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20 mb-16 items-start">
          
          {/* Left Column - Bio */}
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="flex flex-col space-y-8"
          >
            <p className="text-lg md:text-xl text-gray-400 font-sans leading-relaxed">
              I&apos;m in my first year, pursuing two degrees at once — a BS in Data Science 
              from IIT Madras and a BTech in CS &amp; Design from MITS Gwalior. I&apos;m not an 
              expert. I&apos;m at the very start of a long road, and I&apos;ve decided to build my 
              way through it. Every project I ship teaches me something a classroom can&apos;t.
            </p>

            {/* Currently Learning Pill */}
            <div className="inline-flex items-center gap-3 px-5 py-2.5 rounded-full bg-white/5 border border-white/10 w-fit">
              <span className="relative flex h-2.5 w-2.5">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-[#E8823A] opacity-75"></span>
                <span className="relative inline-flex rounded-full h-2.5 w-2.5 bg-[#E8823A]"></span>
              </span>
              <span className="text-sm font-medium text-gray-300">
                Currently Learning
              </span>
            </div>
          </motion.div>

          {/* Right Column - Stats Grid */}
          <div className="grid grid-cols-2 gap-4">
            {stats.map((stat, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, scale: 0.95 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: i * 0.1 }}
                className="group p-6 rounded-2xl bg-white/[0.03] border border-white/[0.08] hover:border-[#5B8DEF]/50 transition-all duration-300 relative overflow-hidden flex flex-col justify-center"
              >
                {/* Hover Glow */}
                <div className="absolute inset-0 bg-[#5B8DEF]/0 group-hover:bg-[#5B8DEF]/10 transition-colors duration-300"></div>
                
                <h4 className="text-5xl md:text-6xl font-syne font-bold text-[#5B8DEF] mb-3 relative z-10">
                  <AnimatedCounter to={stat.num} duration={2} />
                </h4>
                <p className="text-sm md:text-base text-gray-400 font-medium relative z-10">
                  {stat.label}
                </p>
              </motion.div>
            ))}
          </div>
        </div>

        {/* Education Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 items-stretch">
          
          {/* IIT Madras */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="group relative p-6 md:p-8 rounded-2xl bg-white/[0.03] border border-transparent overflow-hidden flex flex-col hover:-translate-y-1 transition-transform duration-300"
          >
            {/* Shimmer Border */}
            <div className="absolute inset-0 z-0 bg-gradient-to-br from-[#5B8DEF]/20 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 rounded-2xl"></div>
            <div className="absolute inset-0 z-0 border border-white/5 rounded-2xl group-hover:border-[#5B8DEF]/30 transition-colors duration-500"></div>
            
            <div className="relative z-10">
              <div className="w-14 h-14 rounded-xl bg-blue-500/10 border border-[#5B8DEF]/30 flex items-center justify-center mb-6">
                <span className="font-syne font-bold text-[#5B8DEF]">IIT-M</span>
              </div>
              <h4 className="text-xl font-bold text-white mb-2">BS — Data Science & Applications</h4>
              <p className="text-gray-400 font-medium mb-4">Indian Institute of Technology, Madras</p>
              <div className="mt-auto">
                <p className="text-sm text-gray-500 font-mono">2024 – 2029 · Remote</p>
              </div>
            </div>
          </motion.div>

          {/* MITS Gwalior */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="group relative p-6 md:p-8 rounded-2xl bg-white/[0.03] border border-transparent overflow-hidden flex flex-col hover:-translate-y-1 transition-transform duration-300"
          >
            {/* Shimmer Border */}
            <div className="absolute inset-0 z-0 bg-gradient-to-br from-[#E8823A]/20 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 rounded-2xl"></div>
            <div className="absolute inset-0 z-0 border border-white/5 rounded-2xl group-hover:border-[#E8823A]/30 transition-colors duration-500"></div>
            
            <div className="relative z-10">
              <div className="w-14 h-14 rounded-xl bg-amber-500/10 border border-[#E8823A]/30 flex items-center justify-center mb-6">
                <span className="font-syne font-bold text-[#E8823A]">MITS</span>
              </div>
              <h4 className="text-xl font-bold text-white mb-2">BTech — Computer Science & Design (Minor: Design)</h4>
              <p className="text-gray-400 font-medium mb-4">Madhav Institute of Technology and Science, Gwalior</p>
              <div className="mt-auto">
                <p className="text-sm text-gray-500 font-mono">2025 – 2029</p>
              </div>
            </div>
          </motion.div>

        </div>
      </div>
    </section>
  );
}
