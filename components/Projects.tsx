"use client";

import React from "react";
import { motion } from "framer-motion";
import { FaGithub } from "react-icons/fa6";

export default function Projects() {
  return (
    <section id="projects" className="relative py-24 bg-[#08080F]">
      <div className="container mx-auto px-6 max-w-6xl relative z-10">
        
        {/* Section Header */}
        <div className="mb-16">
          <h3 className="text-sm text-gray-500 uppercase tracking-[0.2em] font-semibold mb-4">Projects</h3>
          <h2 className="text-4xl md:text-5xl font-syne font-bold text-white tracking-tight mb-3">
            Things I&apos;ve Built
          </h2>
          <p className="text-sm text-gray-400 italic">
            Real projects. Real code. Still learning.
          </p>
        </div>

        {/* Bento Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 auto-rows-min">
          
          {/* Card 1 — GestureFlow (spans 2 columns) */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="md:col-span-2 group relative p-6 md:p-8 rounded-2xl bg-white/[0.03] border border-white/[0.08] backdrop-blur-sm hover:border-[#5B8DEF] hover:-translate-y-1 transition-all duration-300 overflow-hidden flex flex-col"
          >
            {/* Top Bar */}
            <div className="flex justify-between items-start mb-6">
              <div className="inline-flex items-center px-4 py-1.5 rounded-full bg-[#5B8DEF]/15 border border-transparent group-hover:border-[#5B8DEF]/30 transition-colors">
                <span className="text-xs font-semibold text-[#5B8DEF] uppercase tracking-wide">Computer Vision · AI</span>
              </div>
              <span className="text-xs text-gray-500 font-mono">Dec 2025 · Web: Mar 2026</span>
            </div>

            {/* Content */}
            <h3 className="text-2xl font-syne font-bold text-white mb-4">GestureFlow</h3>
            <p className="text-gray-400 font-sans leading-relaxed mb-8 flex-grow">
              A real-time hand gesture recognition system that controls OS-level
              functions — volume, brightness, scroll — using only a webcam. Built with
              MediaPipe&apos;s ML pipeline and OpenCV. My first real dive into on-device
              ML inference and computer vision.
            </p>

            {/* Footer Area */}
            <div className="flex flex-wrap items-center justify-between gap-4 mt-auto">
              <div className="flex flex-wrap gap-2">
                {['Python', 'MediaPipe', 'OpenCV', 'NumPy', 'pycaw'].map((tech) => (
                  <span key={tech} className="px-3 py-1 rounded-full bg-[#5B8DEF]/10 border border-[#5B8DEF]/20 text-xs text-gray-300">
                    {tech}
                  </span>
                ))}
              </div>
              <a
                href="https://github.com/saiyam-bajpai"
                target="_blank"
                rel="noopener noreferrer"
                className="p-2 rounded-full bg-white/5 hover:bg-white/10 text-gray-400 hover:text-white transition-colors"
                aria-label="View on GitHub"
              >
                <FaGithub size={20} />
              </a>
            </div>
          </motion.div>

          {/* Card 2 — Bibliotlek (1 column) */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="group relative p-6 md:p-8 rounded-2xl bg-white/[0.03] border border-white/[0.08] backdrop-blur-sm hover:border-[#E8823A] hover:-translate-y-1 transition-all duration-300 overflow-hidden flex flex-col"
          >
            {/* Top Bar */}
            <div className="flex justify-between items-start mb-6">
              <div className="inline-flex items-center px-4 py-1.5 rounded-full bg-[#E8823A]/15 border border-transparent group-hover:border-[#E8823A]/30 transition-colors">
                <span className="text-xs font-semibold text-[#E8823A] uppercase tracking-wide">Full-Stack · Web</span>
              </div>
            </div>

            {/* Content */}
            <h3 className="text-2xl font-syne font-bold text-white mb-2">Bibliotlek</h3>
            <span className="text-xs text-gray-500 font-mono mb-4 block">2024 · Web: Sep 2025</span>
            <p className="text-gray-400 font-sans leading-relaxed mb-8 flex-grow">
              A database-driven library management system built end-to-end — schema
              design, Flask backend, and browser frontend. Started as a CLI tool,
              grew into a full web app. Learned the full stack the hard way.
            </p>

            {/* Footer Area */}
            <div className="flex flex-wrap items-center justify-between gap-4 mt-auto">
              <div className="flex flex-wrap gap-2 mb-4 w-full">
                {['Python', 'Flask', 'SQL', 'HTML', 'CSS', 'JavaScript'].map((tech) => (
                  <span key={tech} className="px-3 py-1 rounded-full bg-[#E8823A]/10 border border-[#E8823A]/20 text-xs text-gray-300">
                    {tech}
                  </span>
                ))}
              </div>
              <a
                href="https://github.com/saiyam-bajpai"
                target="_blank"
                rel="noopener noreferrer"
                className="p-2 rounded-full bg-white/5 hover:bg-white/10 text-gray-400 hover:text-white transition-colors ml-auto"
                aria-label="View on GitHub"
              >
                <FaGithub size={20} />
              </a>
            </div>
          </motion.div>

          {/* Card 3 — 3D Maze Game (1 column) */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="group relative p-6 md:p-8 rounded-2xl bg-white/[0.03] border border-white/[0.08] backdrop-blur-sm hover:border-[#9D5BEF] hover:-translate-y-1 transition-all duration-300 overflow-hidden flex flex-col"
          >
            {/* Top Bar */}
            <div className="flex justify-between items-start mb-6">
               {/* Purple mix of blue and amber approximation */}
              <div className="inline-flex items-center px-4 py-1.5 rounded-full bg-[#9D5BEF]/15 border border-transparent group-hover:border-[#9D5BEF]/30 transition-colors">
                <span className="text-xs font-semibold text-[#9D5BEF] uppercase tracking-wide">Graphics · C++</span>
              </div>
            </div>

            {/* Content */}
            <h3 className="text-2xl font-syne font-bold text-white mb-2">3D Maze — From Scratch</h3>
            <span className="text-xs text-gray-500 font-mono mb-4 block">Apr 2026</span>
            <p className="text-gray-400 font-sans leading-relaxed mb-8 flex-grow">
              A first-person 3D maze game in C++ with zero game engines. Built a
              real-time raycaster, procedural maze generation, and BFS auto-solve
              pathfinding. Developed across 5 progressive build stages.
            </p>

            {/* Footer Area */}
            <div className="flex flex-wrap items-center justify-between gap-4 mt-auto">
              <div className="flex flex-wrap gap-2 mb-4 w-full">
                {['C++', 'SDL2', 'BFS', 'Raycasting', 'Git'].map((tech) => (
                  <span key={tech} className="px-3 py-1 rounded-full bg-[#9D5BEF]/10 border border-[#9D5BEF]/20 text-xs text-gray-300">
                    {tech}
                  </span>
                ))}
              </div>
              <a
                href="https://github.com/saiyam-bajpai"
                target="_blank"
                rel="noopener noreferrer"
                className="p-2 rounded-full bg-white/5 hover:bg-white/10 text-gray-400 hover:text-white transition-colors ml-auto"
                aria-label="View on GitHub"
              >
                <FaGithub size={20} />
              </a>
            </div>
          </motion.div>

          {/* Card 4 — Placeholder (1 column) */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.3 }}
            className="md:col-span-2 lg:col-span-1 border border-dashed border-white/15 rounded-2xl p-6 md:p-8 flex flex-col items-center justify-center min-h-[250px] hover:scale-[1.01] transition-transform duration-300 relative overflow-hidden"
          >
             {/* Suble pulsing animation on border */}
             <div className="absolute inset-0 border-2 border-transparent border-dashed rounded-2xl animate-pulse bg-white/5 pointer-events-none"></div>
             
             <div className="relative z-10 text-center">
               <h3 className="text-2xl font-syne font-bold text-gray-300 mb-2 flex items-center justify-center gap-1">
                 Next Project
                 <span className="inline-block w-8 overflow-hidden inline-flex">
                    <span className="animate-[typewriter_2s_infinite]">...</span>
                 </span>
               </h3>
               <p className="text-sm text-gray-500">Currently building something new...</p>
             </div>
          </motion.div>

        </div>
      </div>
      
      <style dangerouslySetInnerHTML={{__html: `
        @keyframes typewriter {
            0% { content: "."; }
            33% { content: ".."; }
            66% { content: "..."; }
            100% { content: "."; }
        }
      `}} />
    </section>
  );
}
