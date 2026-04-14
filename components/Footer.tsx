"use client";

import React from "react";
import { FaGithub, FaLinkedin } from "react-icons/fa6";

export default function Footer() {
  return (
    <footer className="bg-[#08080F] border-t border-white/[0.06] py-6">
      <div className="container mx-auto px-6 max-w-6xl flex flex-col md:flex-row items-center justify-between gap-4">
        
        {/* Left */}
        <div className="text-sm text-gray-500">
          Saiyam Bajpai © 2026
        </div>

        {/* Center */}
        <div className="text-sm text-gray-500 italic">
          Built with curiosity.
        </div>

        {/* Right */}
        <div className="flex items-center gap-4">
          <a
            href="https://github.com/saiyam-bajpai"
            target="_blank"
            rel="noopener noreferrer"
            className="text-gray-500 hover:text-white transition-colors"
            aria-label="GitHub"
          >
            <FaGithub size={18} />
          </a>
          <a
            href="https://linkedin.com/in/saiyam-bajpai"
            target="_blank"
            rel="noopener noreferrer"
            className="text-gray-500 hover:text-white transition-colors"
            aria-label="LinkedIn"
          >
            <FaLinkedin size={18} />
          </a>
        </div>
        
      </div>
    </footer>
  );
}
