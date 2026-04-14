"use client";

import React from "react";
import Link from "next/link";
import { motion } from "framer-motion";
import { ArrowLeft, Download } from "lucide-react";
import ResumeView from "@/components/ResumeView";

export default function ResumePage() {
  return (
    <div className="min-h-screen bg-[#08080F] text-gray-200 selection:bg-[#5B8DEF]/30 selection:text-white pb-24 font-sans">
      <div className="max-w-4xl mx-auto px-6 pt-12 print:max-w-none print:px-0 print:pt-0">
        
        {/* Top Control Bar (Hidden on print) */}
        <div className="flex justify-between items-center mb-10 print:hidden">
          <Link
            href="/"
            className="group flex items-center text-sm font-medium text-gray-400 hover:text-white transition-colors"
          >
            <motion.div
              layout
              transition={{ type: "spring", stiffness: 400, damping: 30 }}
              className="mr-2 group-hover:-translate-x-1 transition-transform"
            >
              <ArrowLeft size={16} />
            </motion.div>
            Back to Portfolio
          </Link>
          
          <a
            href="/Saiyam_Bajpai_Resume.pdf"
            download
            className="inline-flex items-center gap-2 px-5 py-2.5 rounded-xl bg-gradient-to-r from-[#5B8DEF] to-[#4A7BD9] text-white text-sm font-semibold hover:shadow-[0_0_15px_rgba(91,141,239,0.4)] transition-all duration-300"
          >
            <Download size={16} />
            Download PDF
          </a>
        </div>

        {/* Animated Resume Card Entrance */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ type: "spring", stiffness: 100, damping: 20 }}
          className="print:mt-0"
        >
          <ResumeView />
        </motion.div>

      </div>
    </div>
  );
}
