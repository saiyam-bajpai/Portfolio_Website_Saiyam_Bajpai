"use client";

import React, { useState } from "react";
import { motion } from "framer-motion";
import { Mail } from "lucide-react";
import { FaLinkedin, FaGithub } from "react-icons/fa6";

export default function Contact() {
  const [copied, setCopied] = useState(false);

  const handleCopyEmail = () => {
    navigator.clipboard.writeText("officialsb1009@gmail.com");
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <section id="contact" className="relative py-24 bg-[#08080F] border-t border-white/5">
      <div className="container mx-auto px-6 max-w-5xl relative z-10 text-center">
        
        {/* Section Header */}
        <div className="mb-16">
          <h3 className="text-sm text-gray-500 uppercase tracking-[0.2em] font-semibold mb-4">Contact</h3>
          <h2 className="text-4xl md:text-5xl font-syne font-bold text-white tracking-tight mb-4">
            Let's connect.
          </h2>
          <p className="text-gray-400 font-sans max-w-lg mx-auto">
            Always open to interesting conversations — about projects, ideas,
            collaborations, or just to say hello.
          </p>
        </div>

        {/* Contact Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-12">
          
          {/* Email Card */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="group relative p-8 rounded-2xl bg-white/[0.03] border border-white/5 hover:border-[#5B8DEF]/40 hover:-translate-y-1 transition-all duration-300 flex flex-col items-center overflow-hidden"
          >
            {/* Glow */}
            <div className="absolute inset-0 bg-gradient-to-t from-[#5B8DEF]/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
            
            <div className="w-12 h-12 rounded-full bg-white/5 flex items-center justify-center mb-4 group-hover:scale-110 transition-transform duration-300">
              <Mail className="w-5 h-5 text-gray-300 group-hover:text-[#5B8DEF] transition-colors" />
            </div>
            
            <h4 className="text-lg font-bold text-white mb-1">Email</h4>
            <p className="text-sm text-gray-400 font-mono mb-6">officialsb1009@gmail.com</p>
            
            <button
              onClick={handleCopyEmail}
              className="mt-auto px-5 py-2 rounded-full bg-white/10 hover:bg-[#5B8DEF] hover:text-white text-gray-300 text-sm font-medium transition-colors w-full border border-white/5 hover:border-transparent"
            >
              {copied ? "Copied ✓" : "Copy"}
            </button>
          </motion.div>

          {/* LinkedIn Card */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="group relative p-8 rounded-2xl bg-white/[0.03] border border-white/5 hover:border-[#0A66C2]/40 hover:-translate-y-1 transition-all duration-300 flex flex-col items-center overflow-hidden"
          >
            {/* Glow */}
            <div className="absolute inset-0 bg-gradient-to-t from-[#0A66C2]/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
            
            <div className="w-12 h-12 rounded-full bg-white/5 flex items-center justify-center mb-4 group-hover:scale-110 transition-transform duration-300">
              <FaLinkedin className="w-5 h-5 text-gray-300 group-hover:text-[#0A66C2] transition-colors" />
            </div>
            
            <h4 className="text-lg font-bold text-white mb-1">LinkedIn</h4>
            <p className="text-sm text-gray-400 font-mono mb-6">saiyam-bajpai</p>
            
            <a
              href="https://linkedin.com/in/saiyam-bajpai"
              target="_blank"
              rel="noopener noreferrer"
              className="mt-auto px-5 py-2 rounded-full bg-white/10 hover:bg-[#0A66C2] hover:text-white text-gray-300 text-sm font-medium transition-colors w-full border border-white/5 hover:border-transparent"
            >
              Connect
            </a>
          </motion.div>

          {/* GitHub Card */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="group relative p-8 rounded-2xl bg-white/[0.03] border border-white/5 hover:border-[#E8823A]/40 hover:-translate-y-1 transition-all duration-300 flex flex-col items-center overflow-hidden"
          >
            {/* Glow */}
            <div className="absolute inset-0 bg-gradient-to-t from-[#E8823A]/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
            
            <div className="w-12 h-12 rounded-full bg-white/5 flex items-center justify-center mb-4 group-hover:scale-110 transition-transform duration-300">
              <FaGithub className="w-5 h-5 text-gray-300 group-hover:text-[#E8823A] transition-colors" />
            </div>
            
            <h4 className="text-lg font-bold text-white mb-1">GitHub</h4>
            <p className="text-sm text-gray-400 font-mono mb-6">saiyam-bajpai</p>
            
            <a
              href="https://github.com/saiyam-bajpai"
              target="_blank"
              rel="noopener noreferrer"
              className="mt-auto px-5 py-2 rounded-full bg-white/10 hover:bg-[#E8823A] hover:text-[#08080F] text-gray-300 flex items-center justify-center text-sm font-medium transition-colors w-full border border-white/5 hover:border-transparent"
            >
              Follow
            </a>
          </motion.div>

        </div>

        {/* Bottom Note */}
        <p className="text-sm text-gray-500 font-medium">
          Open to: <span className="text-gray-400">Internships · Research collaborations · Project partnerships · Mentorship</span>
        </p>
        
      </div>
    </section>
  );
}
