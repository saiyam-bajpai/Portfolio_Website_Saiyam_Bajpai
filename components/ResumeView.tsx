import React from "react";

export default function ResumeView() {
  return (
    <>
      <style dangerouslySetInnerHTML={{ __html: `
        @media print {
          @page { margin: 1cm; }
          .avoid-break { page-break-inside: avoid; break-inside: avoid; }
        }
      `}} />
      <div className="bg-white rounded-2xl shadow-2xl p-6 md:p-10 w-full max-w-3xl mx-auto text-gray-900 font-sans print:shadow-none print:p-0 print:rounded-none overflow-hidden">
        
        {/* Header */}
        <div className="mb-6">
          <h1 className="font-syne text-3xl font-bold text-gray-900 mb-2">Saiyam Bajpai</h1>
          <div className="flex flex-wrap gap-x-2 gap-y-1 text-sm text-gray-500 font-medium">
            <span>+91 8964045669</span>
            <span className="hidden sm:inline">·</span>
            <span>officialsb1009@gmail.com</span>
            <span className="hidden sm:inline">·</span>
            <a href="https://linkedin.com/in/saiyam-bajpai" className="hover:text-[#0A66C2]">linkedin.com/in/saiyam-bajpai</a>
            <span className="hidden sm:inline">·</span>
            <a href="https://github.com/saiyam-bajpai" className="hover:text-[#E8823A]">github.com/saiyam-bajpai</a>
          </div>
        </div>

        {/* Divider */}
        <div className="w-full border-t-2 border-[#5B8DEF] mb-6"></div>

        {/* Section 1 — Summary */}
        <section className="mb-8">
          <h2 className="text-xs font-semibold uppercase tracking-widest text-[#5B8DEF] border-l-[3px] border-[#5B8DEF] pl-3 mb-3">
            Summary
          </h2>
          <p className="text-sm text-gray-700 leading-relaxed">
            Builder-first CS undergrad (MITS Gwalior + IIT Madras BS-DS) passionate about
            turning real-world problems into working AI-first products. Experienced in shipping
            end-to-end projects — from gesture-controlled systems to full-stack web apps —
            with a strong foundation in Python, computer vision, and data science. Continuously
            learning by building and experimenting, with an emphasis on solving real-world
            problems and creating impactful user experiences.
          </p>
        </section>

        {/* Section 2 — Education */}
        <section className="mb-8">
          <h2 className="text-xs font-semibold uppercase tracking-widest text-[#5B8DEF] border-l-[3px] border-[#5B8DEF] pl-3 mb-4">
            Education
          </h2>
          
          <div className="flex flex-col sm:flex-row justify-between mb-4 avoid-break">
            <div>
              <p className="font-bold text-sm text-gray-900">B.Tech — Computer Science & Design (Minor: Design)</p>
              <p className="text-sm text-gray-500">Madhav Institute of Technology and Science, Gwalior, MP</p>
            </div>
            <div className="text-sm text-gray-700 font-medium whitespace-nowrap mt-1 sm:mt-0">
              Aug 2025 – May 2029
            </div>
          </div>

          <div className="flex flex-col sm:flex-row justify-between avoid-break">
            <div>
              <p className="font-bold text-sm text-gray-900">BS — Data Science & Applications (Remote)</p>
              <p className="text-sm text-gray-500">Indian Institute of Technology, Madras — IIT Madras, Chennai, TN</p>
            </div>
            <div className="text-sm text-gray-700 font-medium whitespace-nowrap mt-1 sm:mt-0">
              Aug 2024 – May 2029
            </div>
          </div>
        </section>

        {/* Section 3 — Projects */}
        <section className="mb-8">
          <h2 className="text-xs font-semibold uppercase tracking-widest text-[#5B8DEF] border-l-[3px] border-[#5B8DEF] pl-3 mb-4">
            Projects
          </h2>

          {/* Project 1 */}
          <div className="mb-6 avoid-break">
            <div className="flex flex-col sm:flex-row justify-between items-baseline mb-2 gap-y-1">
              <div className="text-sm">
                <span className="font-bold text-gray-900">GestureFlow — AI-Powered Gesture Control System</span>
                <span className="text-xs text-gray-500 ml-2 block sm:inline">Python · MediaPipe · OpenCV · NumPy · pycaw · Git</span>
              </div>
              <div className="text-xs text-gray-600 sm:text-right whitespace-nowrap font-medium">
                Dec 2025 | Web: Mar 2026
              </div>
            </div>
            <div className="text-sm text-gray-700 leading-relaxed pl-3 border-l-2 border-transparent">
              <p className="relative pl-3 mb-1"><span className="absolute left-0 text-gray-400">•</span>Built a real-time hand gesture recognition system using MediaPipe's ML pipeline to control OS-level functions — brightness, volume, and scroll — without any hardware peripherals.</p>
              <p className="relative pl-3 mb-1"><span className="absolute left-0 text-gray-400">•</span>Demonstrates applied computer vision and human-computer interaction using on-device ML inference, a core building block for multimodal AI interfaces.</p>
              <p className="relative pl-3 mb-1"><span className="absolute left-0 text-gray-400">•</span>Shipped a web-accessible version in March 2026; maintained clean, documented code via GitHub with version-controlled iterative development.</p>
              <p className="relative pl-3"><span className="absolute left-0 text-gray-400">•</span>Key learning: productionising ML models for real-time, low-latency applications on edge hardware.</p>
            </div>
          </div>

          {/* Project 2 */}
          <div className="mb-6 avoid-break">
            <div className="flex flex-col sm:flex-row justify-between items-baseline mb-2 gap-y-1">
              <div className="text-sm">
                <span className="font-bold text-gray-900">Bibliotlek — Full-Stack Library Management System</span>
                <span className="text-xs text-gray-500 ml-2 block sm:inline">Python · Flask · SQL · HTML5 · CSS · JavaScript · Git</span>
              </div>
              <div className="text-xs text-gray-600 sm:text-right whitespace-nowrap font-medium">
                2024 | Web Version: Sep 2025
              </div>
            </div>
            <div className="text-sm text-gray-700 leading-relaxed pl-3 border-l-2 border-transparent">
              <p className="relative pl-3 mb-1"><span className="absolute left-0 text-gray-400">•</span>Designed and shipped a database-driven library management app end-to-end: schema design, backend logic (Flask + SQL), and a browser-based frontend.</p>
              <p className="relative pl-3 mb-1"><span className="absolute left-0 text-gray-400">•</span>Demonstrates ability to own the full stack of a product: data modelling, API design, and UI — a critical skill for rapid MVP development.</p>
              <p className="relative pl-3"><span className="absolute left-0 text-gray-400">•</span>Iteratively extended from a CLI tool to a full web application, mirroring the phased build approach of early-stage product development.</p>
            </div>
          </div>

          {/* Project 3 */}
          <div className="avoid-break">
            <div className="flex flex-col sm:flex-row justify-between items-baseline mb-2 gap-y-1">
              <div className="text-sm">
                <span className="font-bold text-gray-900">3D Maze Game — From-Scratch Graphics Engine</span>
                <span className="text-xs text-gray-500 ml-2 block sm:inline">C++ · SDL2 · BFS Pathfinding · Computer Graphics · Git</span>
              </div>
              <div className="text-xs text-gray-600 sm:text-right whitespace-nowrap font-medium">
                Apr 2026
              </div>
            </div>
            <div className="text-sm text-gray-700 leading-relaxed pl-3 border-l-2 border-transparent">
              <p className="relative pl-3 mb-1"><span className="absolute left-0 text-gray-400">•</span>Built a fully playable first-person 3D maze game in C++ from scratch — no game engine, no rendering library — implementing a real-time raycasting renderer and procedural maze generation.</p>
              <p className="relative pl-3 mb-1"><span className="absolute left-0 text-gray-400">•</span>Integrated BFS pathfinding so the maze auto-solves itself, combining algorithmic thinking with interactive product delivery.</p>
              <p className="relative pl-3"><span className="absolute left-0 text-gray-400">•</span>Developed across 5 progressive build stages, each shipped and version-controlled.</p>
            </div>
          </div>

        </section>

        {/* Section 4 — Experience */}
        <section className="mb-8 avoid-break">
          <h2 className="text-xs font-semibold uppercase tracking-widest text-[#5B8DEF] border-l-[3px] border-[#5B8DEF] pl-3 mb-4">
            Experience
          </h2>

          <div className="mb-4">
            <div className="flex flex-col sm:flex-row justify-between items-baseline mb-1">
              <div className="text-sm">
                <span className="font-bold text-gray-900">Python Developer Intern</span>
                <span className="mx-1 text-gray-500">|</span>
                <span className="text-gray-700">CodeAlpha (Remote)</span>
              </div>
              <div className="text-xs text-gray-600 sm:text-right whitespace-nowrap font-medium mt-1 sm:mt-0">
                Jan 2026 – Feb 2026
              </div>
            </div>
            <div className="text-sm text-gray-700 leading-relaxed pl-3 border-l-2 border-transparent">
              <p className="relative pl-3 mb-1"><span className="absolute left-0 text-gray-400">•</span>Built Python automation scripts covering file handling, regex-based data processing, and modular function design.</p>
              <p className="relative pl-3 mb-1"><span className="absolute left-0 text-gray-400">•</span>Delivered three console-based projects: a game, a rule-based chatbot, and a data-processing pipeline.</p>
              <p className="relative pl-3"><span className="absolute left-0 text-gray-400">•</span>Maintained organised, documented GitHub repositories.</p>
            </div>
          </div>

          <div>
            <div className="flex flex-col sm:flex-row justify-between items-baseline mb-1">
              <div className="text-sm">
                <span className="font-bold text-gray-900">Python Developer Intern</span>
                <span className="mx-1 text-gray-500">|</span>
                <span className="text-gray-700">CodSoft (Remote)</span>
              </div>
              <div className="text-xs text-gray-600 sm:text-right whitespace-nowrap font-medium mt-1 sm:mt-0">
                Jan 2026 – Feb 2026
              </div>
            </div>
            <div className="text-sm text-gray-700 leading-relaxed pl-3 border-l-2 border-transparent">
              <p className="relative pl-3 mb-1"><span className="absolute left-0 text-gray-400">•</span>Executed technical projects bridging classroom concepts with practical software.</p>
              <p className="relative pl-3"><span className="absolute left-0 text-gray-400">•</span>Applied Python fundamentals to project-based tasks.</p>
            </div>
          </div>
        </section>

        {/* Section 5 — Technical Skills */}
        <section className="mb-8 avoid-break">
          <h2 className="text-xs font-semibold uppercase tracking-widest text-[#5B8DEF] border-l-[3px] border-[#5B8DEF] pl-3 mb-3">
            Technical Skills
          </h2>
          <div className="grid grid-cols-1 gap-1.5 text-sm leading-relaxed">
            <div><span className="font-bold text-gray-900 pr-2">Languages:</span><span className="text-gray-600">Python, C/C++, JavaScript, SQL, HTML/CSS</span></div>
            <div>
              <span className="font-bold text-gray-900 pr-2">AI / ML:</span>
              <span className="text-gray-600">MediaPipe, OpenCV, NumPy, pandas, Matplotlib — exploring LLM APIs, vector DBs, and agentic workflows</span>
            </div>
            <div><span className="font-bold text-gray-900 pr-2">Frameworks & Stack:</span><span className="text-gray-600">Flask, React, Node.js, MongoDB (MERN), WordPress</span></div>
            <div><span className="font-bold text-gray-900 pr-2">Dev Tools:</span><span className="text-gray-600">Git, Docker, Google Cloud Platform, VS Code, Visual Studio</span></div>
            <div>
              <span className="font-bold text-gray-900 pr-2">Currently Learning:</span>
              <span className="text-gray-600">LLM Ops, RAG pipelines, vector databases (FAISS/Pinecone), prompt engineering, agentic AI systems</span>
            </div>
          </div>
        </section>

        {/* Section 6 — Languages */}
        <section className="avoid-break">
          <h2 className="text-xs font-semibold uppercase tracking-widest text-[#5B8DEF] border-l-[3px] border-[#5B8DEF] pl-3 mb-3">
            Languages
          </h2>
          <div className="grid grid-cols-1 gap-1.5 text-sm leading-relaxed">
            <div><span className="font-bold text-gray-900 pr-2">English</span><span className="text-gray-500">—</span><span className="text-gray-600 pl-2">Professional working proficiency</span></div>
            <div><span className="font-bold text-gray-900 pr-2">Hindi</span><span className="text-gray-500">—</span><span className="text-gray-600 pl-2">Native / Full professional proficiency</span></div>
            <div><span className="font-bold text-gray-900 pr-2">German</span><span className="text-gray-500">—</span><span className="text-gray-600 pl-2">A1 (in progress, completion expected May 2026)</span></div>
          </div>
        </section>

      </div>
    </>
  );
}
