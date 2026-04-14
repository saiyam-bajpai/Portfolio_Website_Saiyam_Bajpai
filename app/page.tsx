import React from "react";
import Hero from "@/components/Hero";
import ScrollyCanvas from "@/components/ScrollyCanvas";
import Overlay from "@/components/Overlay";
import About from "@/components/About";
import Projects from "@/components/Projects";
import Skills from "@/components/Skills";
import Research from "@/components/Research";
import Contact from "@/components/Contact";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <main className="bg-[#08080F] min-h-screen text-gray-200 selection:bg-[#5B8DEF]/30 selection:text-white overflow-x-hidden">

      <Hero />

      {/* Scrollytelling Section */}
      <ScrollyCanvas>
        <Overlay />
      </ScrollyCanvas>

      <About />

      <Projects />

      {/* Very Minimal Experience Block */}
      <section className="py-8 bg-[#08080F]">
        <div className="container mx-auto px-6 max-w-6xl">
          <h3 className="text-lg font-medium text-white mb-4 tracking-wide">Experience</h3>
          <div className="space-y-2">
            <p className="text-sm text-[#6B7280] leading-loose">
              Python Developer Intern · CodeAlpha · Remote · Jan–Feb 2026
            </p>
            <p className="text-sm text-[#6B7280] leading-loose">
              Python Developer Intern · CodSoft · Remote · Jan–Feb 2026
            </p>
          </div>
        </div>
      </section>

      <Skills />

      <Research />

      <Contact />

      <Footer />
    </main>
  );
}
