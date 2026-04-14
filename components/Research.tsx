"use client";

import React, { useEffect, useRef } from "react";
import { motion } from "framer-motion";

const ParticleNetwork = () => {
  const canvasRef = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext("2d");
    if (!ctx) return;

    let particles: { x: number; y: number; vx: number; vy: number }[] = [];
    let animationFrameId: number;

    const resize = () => {
      canvas.width = window.innerWidth;
      canvas.height = canvas.parentElement?.clientHeight || window.innerHeight;
      initParticles();
    };

    const initParticles = () => {
      const numParticles = Math.floor((canvas.width * canvas.height) / 15000);
      particles = [];
      for (let i = 0; i < numParticles; i++) {
        particles.push({
          x: Math.random() * canvas.width,
          y: Math.random() * canvas.height,
          vx: (Math.random() - 0.5) * 0.5,
          vy: (Math.random() - 0.5) * 0.5,
        });
      }
    };

    const draw = () => {
      ctx.clearRect(0, 0, canvas.width, canvas.height);
      ctx.fillStyle = "rgba(91, 141, 239, 0.3)"; // #5B8DEF at 30%
      ctx.strokeStyle = "rgba(91, 141, 239, 0.1)";
      ctx.lineWidth = 1;

      // Update positions
      particles.forEach((p) => {
        p.x += p.vx;
        p.y += p.vy;

        // Bounce off edges
        if (p.x < 0 || p.x > canvas.width) p.vx *= -1;
        if (p.y < 0 || p.y > canvas.height) p.vy *= -1;

        ctx.beginPath();
        ctx.arc(p.x, p.y, 2, 0, Math.PI * 2);
        ctx.fill();
      });

      // Draw connections
      for (let i = 0; i < particles.length; i++) {
        for (let j = i + 1; j < particles.length; j++) {
          const dx = particles[i].x - particles[j].x;
          const dy = particles[i].y - particles[j].y;
          const dist = Math.sqrt(dx * dx + dy * dy);

          if (dist < 100) {
            ctx.beginPath();
            ctx.moveTo(particles[i].x, particles[i].y);
            ctx.lineTo(particles[j].x, particles[j].y);
            ctx.stroke();
          }
        }
      }

      animationFrameId = requestAnimationFrame(draw);
    };

    window.addEventListener("resize", resize);
    resize();
    draw();

    return () => {
      window.removeEventListener("resize", resize);
      cancelAnimationFrame(animationFrameId);
    };
  }, []);

  return <canvas ref={canvasRef} className="absolute inset-0 z-0 pointer-events-none opacity-50 block w-full h-full" />;
};

export default function Research() {
  return (
    <section id="research" className="relative py-24 bg-[#08080F] overflow-hidden min-h-[80vh] flex flex-col justify-center">
      {/* Background Effect */}
      <ParticleNetwork />

      <div className="container mx-auto px-6 max-w-5xl relative z-10 flex flex-col items-center text-center">
        
        {/* Section Header */}
        <div className="mb-8">
          <h3 className="text-sm text-gray-500 uppercase tracking-[0.2em] font-semibold mb-4">Research</h3>
          <h2 className="text-4xl md:text-5xl font-syne font-bold text-white tracking-tight">
            Where I Want to Go Next.
          </h2>
        </div>

        {/* Core Text Overlay */}
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="space-y-6 max-w-2xl mx-auto mb-12"
        >
          <h3 className="text-2xl md:text-3xl font-syne font-semibold text-gray-200">
            I haven&apos;t published anything yet.
          </h3>
          <p className="text-lg text-gray-400 leading-relaxed font-sans">
            But I&apos;m drawn to the intersection of human-computer interaction, 
            computer vision, and intelligent systems.
          </p>
          <p className="text-base text-gray-500 italic">
            This space is being built — check back soon.
          </p>
        </motion.div>

        {/* Animated Badge */}
        <motion.div 
          animate={{ opacity: [0.6, 1.0, 0.6] }}
          transition={{ repeat: Infinity, duration: 2, ease: "easeInOut" }}
          className="inline-flex items-center gap-2 px-5 py-2 rounded-full bg-[#5B8DEF]/10 border border-[#5B8DEF]/20 mb-20"
        >
          <span className="relative flex h-2.5 w-2.5">
            <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-[#5B8DEF] opacity-75"></span>
            <span className="relative inline-flex rounded-full h-2.5 w-2.5 bg-[#5B8DEF]"></span>
          </span>
          <span className="text-sm font-medium text-[#5B8DEF] uppercase tracking-wider">In Progress</span>
        </motion.div>

        {/* Paper Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 w-full mb-16">
          {[1, 2, 3].map((item) => (
            <div 
               key={item} 
               className="group relative h-48 rounded-2xl bg-white/[0.02] border border-white/5 backdrop-blur-md overflow-hidden p-6 text-left flex flex-col cursor-default pointer-events-none"
            >
              {/* Shimmer sweep animation */}
              <div className="absolute inset-0 -translate-x-full animate-[shimmer_3s_infinite] bg-gradient-to-r from-transparent via-white/[0.03] to-transparent z-0"></div>
              
              {/* Diagonal Watermark */}
              <div className="absolute inset-0 flex items-center justify-center opacity-10 -rotate-12 z-0">
                 <span className="text-5xl font-black uppercase text-[#5B8DEF]">Draft</span>
              </div>

              {/* Fake Content */}
              <div className="relative z-10 space-y-4 flex-grow">
                {/* Blurred Title Reps */}
                <div className="space-y-2">
                  <div className="h-4 bg-gray-500/20 rounded w-full blur-[2px]"></div>
                  <div className="h-4 bg-gray-500/20 rounded w-4/5 blur-[2px]"></div>
                  <div className="h-4 bg-gray-500/20 rounded w-2/3 blur-[2px]"></div>
                </div>
              </div>

              <div className="relative z-10 pt-4 border-t border-white/5 mt-auto">
                <p className="text-xs text-gray-500 font-mono">Author: Saiyam Bajpai</p>
              </div>
            </div>
          ))}
        </div>

        {/* Bottom Note */}
        <p className="text-sm text-gray-500 italic max-w-sm">
          If you&apos;re a researcher and want to collaborate → reach out below.
        </p>

      </div>
    </section>
  );
}
