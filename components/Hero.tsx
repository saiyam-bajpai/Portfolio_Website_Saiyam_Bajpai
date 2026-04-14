"use client";

import React, { useState, useEffect } from "react";
import { motion } from "framer-motion";
import { ArrowRight, FileText } from "lucide-react";
import Link from "next/link";

// Inline Aceternity Spotlight
const Spotlight = ({ className = "" }: { className?: string }) => {
  return (
    <svg
      className={`absolute z-[1] opacity-50 pointer-events-none animate-spotlight ${className}`}
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 3787 2842"
      fill="none"
    >
      <g filter="url(#filter)">
        <ellipse
          cx="1924.71"
          cy="273.501"
          rx="1924.71"
          ry="273.501"
          transform="matrix(-0.822377 -0.568943 -0.568943 0.822377 3631.88 2291.09)"
          fill="white"
          fillOpacity="0.1"
        ></ellipse>
      </g>
      <defs>
        <filter
          id="filter"
          x="0.860352"
          y="0.838989"
          width="3785.16"
          height="2840.26"
          filterUnits="userSpaceOnUse"
          colorInterpolationFilters="sRGB"
        >
          <feFlood floodOpacity="0" result="BackgroundImageFix"></feFlood>
          <feBlend
            mode="normal"
            in="SourceGraphic"
            in2="BackgroundImageFix"
            result="shape"
          ></feBlend>
          <feGaussianBlur
            stdDeviation="151"
            result="effect1_foregroundBlur_1065_8"
          ></feGaussianBlur>
        </filter>
      </defs>
    </svg>
  );
};

const Typewriter = ({ words }: { words: string[] }) => {
  const [index, setIndex] = useState(0);
  const [text, setText] = useState("");
  const [isDeleting, setIsDeleting] = useState(false);
  
  useEffect(() => {
    let typeSpeed = isDeleting ? 30 : 60;
    
    if (!isDeleting && text === words[index]) {
      typeSpeed = 1500;
      setIsDeleting(true);
    } else if (isDeleting && text === "") {
      setIsDeleting(false);
      setIndex((prev) => (prev + 1) % words.length);
      typeSpeed = 500;
    }
    
    const timeout = setTimeout(() => {
      setText((prev) =>
        isDeleting
          ? prev.slice(0, -1)
          : words[index].slice(0, prev.length + 1)
      );
    }, typeSpeed);
    
    return () => clearTimeout(timeout);
  }, [text, isDeleting, index, words]);
  
  return (
    <span>
      {text}
      <motion.span
        animate={{ opacity: [1, 0, 1] }}
        transition={{ repeat: Infinity, duration: 0.8 }}
        className="inline-block ml-1 w-[2px] h-[1em] bg-[#E8823A] align-middle"
      />
    </span>
  );
};

export default function Hero() {
  const basePath = process.env.__NEXT_ROUTER_BASEPATH || "";
  const typewriterWords = [
    "Python learner",
    "CV explorer",
    "Full-stack tinkerer",
    "Curious builder"
  ];

  return (
    <section id="about" className="relative min-h-screen bg-[#08080F] flex items-center justify-center overflow-hidden pt-20 pb-16">
      {/* Background Spotlight */}
      <Spotlight className="-top-40 left-0 md:left-60 md:-top-20" />
      
      <div className="container mx-auto px-6 z-10 grid grid-cols-1 md:grid-cols-2 gap-12 xl:gap-20 items-center">
        
        {/* Left Column */}
        <motion.div 
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          className="flex flex-col space-y-8"
        >
          <div className="space-y-4">
            <h1 className="font-syne text-6xl md:text-7xl font-bold leading-tight tracking-tight text-white">
              I&apos;m Saiyam — <br />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-gray-100 to-gray-400">
                a student who builds.
              </span>
            </h1>
            
            <p className="text-lg md:text-xl text-[#6B7280] font-sans max-w-lg leading-relaxed">
              Dual CS + Data Science undergraduate. Currently learning by shipping real things.
            </p>
          </div>

          <div className="text-xl md:text-2xl font-syne font-medium text-gray-300">
            <span className="text-[#E8823A] opacity-90 mr-2">Currently:</span>
            <span className="text-white">
              <Typewriter words={typewriterWords} />
            </span>
          </div>

          <div className="flex flex-col sm:flex-row gap-5 items-start sm:items-center pt-4">
            {/* CTA 1: Primary Blue */}
            <a 
              href="#projects" 
              className="group relative inline-flex items-center justify-center px-8 py-3.5 text-base font-semibold text-white transition-all duration-300 bg-gradient-to-r from-[#5B8DEF] to-[#4A7BD9] rounded-xl hover:shadow-[0_0_20px_rgba(91,141,239,0.4)] overflow-hidden"
            >
               <span className="relative z-10 flex items-center gap-2">
                 See My Work
               </span>
               <div className="absolute inset-0 h-full w-full bg-gradient-to-tr from-white/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
            </a>

            {/* CTA 2: Ghost Amber */}
            <Link 
              href="/resume" 
              className="group relative inline-flex items-center justify-center px-8 py-3.5 text-base font-semibold transition-all duration-300 rounded-xl border border-[#E8823A]/50 text-[#E8823A] hover:bg-[#E8823A]/10 overflow-hidden"
            >
              {/* Shimmer sweep effect */}
              <div className="absolute inset-0 -translate-x-full group-hover:animate-[shimmer_1.5s_infinite] bg-gradient-to-r from-transparent via-[#E8823A]/10 to-transparent"></div>
              
              <span className="relative z-10 flex items-center gap-2">
                Resume
                
                {/* Icon wrapper to do the swap */}
                <div className="relative w-5 h-5 flex items-center justify-center overflow-hidden">
                  <motion.div
                    className="absolute inset-0 flex items-center justify-center"
                    initial={{ y: 0, opacity: 1 }}
                    whileHover={{ y: -20, opacity: 0 }}
                    transition={{ duration: 0.2 }}
                  >
                    <ArrowRight className="w-4 h-4 ml-1" />
                  </motion.div>
 
                  <motion.div
                    className="absolute inset-0 flex items-center justify-center"
                    initial={{ y: 20, opacity: 0 }}
                    whileHover={{ y: 0, opacity: 1 }}
                    transition={{ duration: 0.2 }}
                  >
                    <FileText className="w-4 h-4 ml-1" />
                  </motion.div>
                </div>
              </span>
            </Link>
          </div>
        </motion.div>

        {/* Right Column */}
        <motion.div 
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 1, delay: 0.2 }}
          className="relative mx-auto mt-10 md:mt-0 max-w-sm md:max-w-md w-full"
        >
          {/* Glowing Halos */}
          <div className="absolute inset-0 rounded-2xl blur-3xl z-0 scale-[0.85] transition-all duration-1000"
               style={{ 
                 boxShadow: '-20px 0 60px #5B8DEF44, 20px 0 60px #E8823A44'
               }}
          />

          {/* Portrait Container - Floating Animation */}
          <motion.div 
            animate={{ y: [-8, 8, -8] }}
            transition={{ repeat: Infinity, duration: 4, ease: "easeInOut" }}
            className="relative z-10 rounded-2xl overflow-hidden border border-white/5 bg-white/5 backdrop-blur-sm aspect-[4/5]"
          >
            <img 
              src={`${basePath}/portrait.jpg`} 
              alt="Saiyam Bajpai Portrait" 
              className="w-full h-full object-cover"
              onError={(e) => {
                // simple fallback if image isn't dropped yet
                (e.currentTarget as HTMLImageElement).src = `https://placehold.co/800x1000/1a1a24/F0F0F5?text=Place+portrait.jpg+in+public`;
              }}
            />

            {/* Bottom-left Badge */}
            <div className="absolute bottom-4 left-4 inline-flex items-center justify-center px-4 py-2 rounded-full bg-white/10 backdrop-blur-md border border-white/10 shadow-xl">
               <span className="text-xs font-semibold text-white font-syne tracking-wide">
                 IIT Madras × MITS Gwalior
               </span>
            </div>

            {/* Top-right pulsing text */}
            <div className="absolute top-4 right-4 inline-flex items-center justify-center px-3 py-1.5 rounded-full bg-black/40 backdrop-blur-sm border border-white/5">
                <span className="relative flex h-2 w-2 mr-2">
                  <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-green-400 opacity-75"></span>
                  <span className="relative inline-flex rounded-full h-2 w-2 bg-green-500"></span>
                </span>
                <span className="text-[10px] text-gray-300 font-sans font-medium uppercase tracking-wider">
                  Open to opportunities
                </span>
            </div>
          </motion.div>
        </motion.div>

      </div>
    </section>
  );
}
