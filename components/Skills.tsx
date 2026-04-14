"use client";

import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { CircleDot, Cpu, Layout, Server, Database, Code, Globe, PenTool, BrainCircuit, ScanSearch, FileDigit, BarChart3, Binary, Container, GitBranch, Cloud } from "lucide-react";

// Helper for circular progress
const CircularProgress = ({ percentage, color, label, skill }: { percentage: number, color: string, label: string, skill: string }) => {
  const radius = 40;
  const circumference = 2 * Math.PI * radius;
  const strokeDashoffset = circumference - (percentage / 100) * circumference;

  return (
    <div className="flex flex-col items-center p-4">
      <div className="relative w-32 h-32 flex items-center justify-center mb-4">
         {/* Background Ring */}
        <svg className="w-full h-full transform -rotate-90">
          <circle
            cx="64"
            cy="64"
            r={radius}
            stroke="currentColor"
            strokeWidth="8"
            fill="transparent"
            className="text-white/5"
          />
          {/* Animated Progress Ring */}
          <motion.circle
            cx="64"
            cy="64"
            r={radius}
            stroke={color}
            strokeWidth="8"
            fill="transparent"
            strokeDasharray={circumference}
            initial={{ strokeDashoffset: circumference }}
            animate={{ strokeDashoffset }}
            transition={{ duration: 1.5, ease: "easeOut" }}
            strokeLinecap="round"
          />
        </svg>
        <div className="absolute flex flex-col items-center justify-center">
          <span className="font-syne font-bold text-xl text-white">{percentage}%</span>
        </div>
      </div>
      <h4 className="font-bold text-white mb-1">{skill}</h4>
      <p className="text-xs text-gray-400 text-center">{label}</p>
    </div>
  );
};

export default function Skills() {
  const tabs = ["Languages", "AI & Data", "Stack & Tools"];
  const [activeTab, setActiveTab] = useState(tabs[0]);

  return (
    <section id="skills" className="relative py-24 bg-[#08080F]">
      <div className="container mx-auto px-6 max-w-6xl relative z-10">
        
        {/* Section Header */}
        <div className="mb-12">
          <h3 className="text-sm text-gray-500 uppercase tracking-[0.2em] font-semibold mb-4">Skills</h3>
          <h2 className="text-4xl md:text-5xl font-syne font-bold text-white tracking-tight mb-3">
            What I'm Learning
          </h2>
          <p className="text-sm text-gray-400 italic">
            These aren't mastered skills — they're active explorations.
          </p>
        </div>

        {/* Custom Animated Tabs */}
        <div className="flex flex-wrap gap-2 md:gap-4 mb-10 border-b border-white/10 pb-px">
          {tabs.map((tab) => (
            <button
              key={tab}
              onClick={() => setActiveTab(tab)}
              className={`relative px-4 py-3 text-sm md:text-base font-medium transition-colors ${
                activeTab === tab ? "text-white" : "text-gray-500 hover:text-gray-300"
              }`}
            >
              {tab}
              {activeTab === tab && (
                <motion.div
                  layoutId="activeTabIndicator"
                  className="absolute bottom-0 left-0 right-0 h-0.5 bg-[#5B8DEF]"
                  initial={false}
                  transition={{ type: "spring", stiffness: 500, damping: 30 }}
                />
              )}
            </button>
          ))}
        </div>

        {/* Tab Content Area */}
        <div className="min-h-[400px]">
          <AnimatePresence mode="wait">
            {activeTab === "Languages" && (
              <motion.div
                key="Languages"
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -10 }}
                transition={{ duration: 0.3 }}
                className="grid grid-cols-2 md:grid-cols-3 gap-8"
              >
                <CircularProgress skill="Python" percentage={65} color="#5B8DEF" label="Getting comfortable" />
                <CircularProgress skill="JavaScript" percentage={45} color="#E8823A" label="Building with it" />
                <CircularProgress skill="C/C++" percentage={40} color="#9B8DEF" label="Exploring" />
                <CircularProgress skill="SQL" percentage={50} color="#5B8DEF" label="Query-confident" />
                <CircularProgress skill="HTML/CSS" percentage={60} color="#E8823A" label="Solid foundation" />
              </motion.div>
            )}

            {activeTab === "AI & Data" && (
              <motion.div
                key="AI & Data"
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -10 }}
                transition={{ duration: 0.3 }}
                className="flex flex-col space-y-8"
              >
                <div className="grid grid-cols-2 sm:grid-cols-3 gap-4">
                  {[
                    { name: "MediaPipe", icon: ScanSearch },
                    { name: "OpenCV", icon: BrainCircuit },
                    { name: "NumPy", icon: Binary },
                    { name: "Pandas", icon: FileDigit },
                    { name: "Matplotlib", icon: BarChart3 },
                  ].map((item, i) => (
                    <div key={i} className="flex items-center gap-3 p-4 rounded-xl bg-white/[0.03] border border-white/5 shadow-sm">
                       <item.icon className="w-5 h-5 text-[#5B8DEF]" />
                       <span className="text-sm font-medium text-white">{item.name}</span>
                    </div>
                  ))}
                </div>

                {/* Sub-note */}
                <div className="p-5 rounded-xl border border-white/10 bg-white/5">
                  <p className="text-xs md:text-sm text-gray-400 italic">
                    Currently exploring: <span className="text-gray-300">LLM APIs · RAG pipelines · Vector DBs (FAISS/Pinecone) · Prompt Engineering · Agentic AI systems</span>
                  </p>
                </div>
              </motion.div>
            )}

            {activeTab === "Stack & Tools" && (
              <motion.div
                key="Stack & Tools"
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -10 }}
                transition={{ duration: 0.3 }}
                className="flex flex-col space-y-8"
              >
                <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                  {/* Frameworks & Stack */}
                  <div className="space-y-4 p-6 rounded-2xl bg-white/[0.02] border border-white/5">
                    <h4 className="font-syne font-bold text-white mb-6 flex items-center gap-2">
                       <Layout className="w-4 h-4 text-[#5B8DEF]" />
                       Frameworks & Stack
                    </h4>
                    <ul className="space-y-3">
                      {["Flask", "React", "Node.js", "MongoDB / MERN", "WordPress"].map((item, i) => (
                        <li key={i} className="flex items-center gap-3 text-gray-300 text-sm">
                          <CircleDot className="w-3 h-3 text-[#5B8DEF] fill-[#5B8DEF]" />
                          {item}
                        </li>
                      ))}
                    </ul>
                  </div>

                  {/* Dev Tools */}
                  <div className="space-y-4 p-6 rounded-2xl bg-white/[0.02] border border-white/5">
                    <h4 className="font-syne font-bold text-white mb-6 flex items-center gap-2">
                       <Cpu className="w-4 h-4 text-[#E8823A]" />
                       Dev Tools
                    </h4>
                    <ul className="space-y-3">
                      {["Git", "Docker", "Google Cloud Platform", "VS Code"].map((item, i) => (
                        <li key={i} className="flex items-center gap-3 text-gray-300 text-sm">
                          <CircleDot className="w-3 h-3 text-[#E8823A] fill-[#E8823A]" />
                          {item}
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>

                {/* Bottom Muted Row */}
                <div className="text-center md:text-left px-2">
                  <p className="text-xs text-gray-500 font-mono">
                    Picking up: <span className="text-gray-400">LLM Ops · FAISS · Pinecone · Agentic workflows</span>
                  </p>
                </div>
              </motion.div>
            )}
          </AnimatePresence>
        </div>

      </div>
    </section>
  );
}
