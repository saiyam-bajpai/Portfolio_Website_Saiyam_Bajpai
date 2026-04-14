"use client";

import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Link from "next/link";
import { Menu, X } from "lucide-react";
import { FiGithub, FiLinkedin } from "react-icons/fi";

const NAV_LINKS = [
  { name: "About", href: "#about" },
  { name: "Projects", href: "#projects" },
  { name: "Skills", href: "#skills" },
  { name: "Research", href: "#research" },
  { name: "Resume", href: "/resume" },
];

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [activeSection, setActiveSection] = useState("");

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);

      // Scroll Spy Logic
      const sections = NAV_LINKS.map(link => link.href.substring(1)).filter(href => href !== "resume");
      
      let currentSection = "";
      for (const section of sections) {
        const element = document.getElementById(section);
        if (element && window.scrollY >= element.offsetTop - 200) {
          currentSection = section;
        }
      }
      setActiveSection(currentSection);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <motion.nav
      initial={{ opacity: 0, y: -20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
      className={`fixed top-0 w-full z-50 transition-all duration-300 ${
        scrolled ? "bg-[#08080F]/80 backdrop-blur-md py-4 border-b border-[rgba(255,255,255,0.08)]" : "bg-transparent py-6"
      }`}
    >
      <div className="max-w-7xl mx-auto px-6 lg:px-12 flex items-center justify-between">
        {/* Logo */}
        <Link href="/" className="relative group flex items-center justify-center cursor-pointer">
          <div className="absolute inset-0 bg-gradient-to-tr from-[#5B8DEF] to-[#E8823A] rounded-lg blur-[6px] opacity-40 group-hover:opacity-75 transition-opacity duration-300"></div>
          <div className="relative w-10 h-10 flex items-center justify-center bg-[#08080F] rounded-lg border border-[rgba(255,255,255,0.15)] shadow-lg overflow-hidden">
            <span className="font-syne font-bold text-lg tracking-wider text-[#F0F0F5]">SB</span>
          </div>
        </Link>

        {/* Desktop Nav */}
        <div className="hidden md:flex items-center gap-8">
          <div className="flex items-center gap-6">
             {NAV_LINKS.map((link) => {
               const isActive = activeSection === link.href.substring(1) && link.href !== "/resume";
               return (
                 <Link
                   key={link.name}
                   href={link.href}
                   className={`text-sm font-medium transition-colors duration-300 ${
                     isActive ? "text-[#5B8DEF]" : "text-[#6B7280] hover:text-[#F0F0F5]"
                   }`}
                 >
                   {link.name}
                 </Link>
               );
             })}
          </div>
          <div className="h-4 w-[1px] bg-[rgba(255,255,255,0.15)]"></div>
          <div className="flex items-center gap-4">
            <a href="https://github.com/saiyam-bajpai" target="_blank" rel="noopener noreferrer" className="text-[#6B7280] hover:text-[#F0F0F5] transition-colors">
              <FiGithub size={20} />
            </a>
            <a href="https://linkedin.com/in/saiyam-bajpai" target="_blank" rel="noopener noreferrer" className="text-[#6B7280] hover:text-[#5B8DEF] transition-colors">
              <FiLinkedin size={20} />
            </a>
          </div>
        </div>

        {/* Mobile Menu Toggle */}
        <button
          className="md:hidden text-[#F0F0F5]"
          onClick={() => setMobileMenuOpen(true)}
        >
          <Menu size={24} />
        </button>
      </div>

      {/* Mobile Drawer */}
      <AnimatePresence>
        {mobileMenuOpen && (
          <motion.div
            initial={{ x: "100%" }}
            animate={{ x: 0 }}
            exit={{ x: "100%" }}
            transition={{ type: "spring", damping: 25, stiffness: 200 }}
            className="fixed inset-y-0 right-0 w-64 bg-[#08080F] border-l border-[rgba(255,255,255,0.08)] shadow-2xl z-50 p-6 flex flex-col"
          >
            <div className="flex justify-end mb-8">
              <button onClick={() => setMobileMenuOpen(false)} className="text-[#F0F0F5]">
                <X size={24} />
              </button>
            </div>
            
            <div className="flex flex-col gap-6">
              {NAV_LINKS.map((link) => (
                <Link
                  key={link.name}
                  href={link.href}
                  onClick={() => setMobileMenuOpen(false)}
                  className="text-lg font-medium text-[#6B7280] hover:text-[#F0F0F5] transition-colors"
                >
                  {link.name}
                </Link>
              ))}
            </div>

            <div className="mt-auto flex items-center gap-6 pt-6 border-t border-[rgba(255,255,255,0.08)]">
              <a href="https://github.com/saiyam-bajpai" target="_blank" rel="noopener noreferrer" className="text-[#6B7280] hover:text-[#F0F0F5]">
                <FiGithub size={24} />
              </a>
              <a href="https://linkedin.com/in/saiyam-bajpai" target="_blank" rel="noopener noreferrer" className="text-[#6B7280] hover:text-[#5B8DEF]">
                <FiLinkedin size={24} />
              </a>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.nav>
  );
}
