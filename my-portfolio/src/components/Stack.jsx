import React from "react";

const techCategories = [
  {
    category: "Frontend",
    skills: ["React", "JavaScript", "Tailwind CSS", "HTML5/CSS3"],
  },
  {
    category: "Backend & Database",
    skills: ["Node.js", "Express", "MongoDB"],
  },
  {
    category: "Tools & Version Control",
    skills: ["Git"],
  },
];

const Stack = () => {
  // Flatten skills for the continuous marquee loop
  const allSkills = [
    { name: "React", tag: "Frontend" },
    { name: "Node.js", tag: "Backend" },
    { name: "JavaScript", tag: "Language" },
    { name: "Tailwind CSS", tag: "Styling" },
    { name: "Express", tag: "Backend" },
    { name: "MongoDB", tag: "Database" },
    { name: "Git", tag: "Tooling" },
    { name: "HTML5/CSS3", tag: "Frontend" },
  ];

  return (
    <div className="w-full max-w-6xl mx-auto px-4 sm:px-6 my-12">
      {/* Outer Card Container with Dark Contrast Canvas */}
      <div className="relative overflow-hidden rounded-3xl bg-slate-900 border border-slate-800 p-8 sm:p-10 shadow-2xl shadow-emerald-950/20">
        
        {/* Subtle Ambient Background Glows */}
        <div className="absolute -top-24 -left-24 w-72 h-72 bg-emerald-500/10 rounded-full blur-3xl pointer-events-none" />
        <div className="absolute -bottom-24 -right-24 w-72 h-72 bg-cyan-500/10 rounded-full blur-3xl pointer-events-none" />

        {/* Section Header */}
        <div className="relative z-10 text-center mb-8">
          <span className="text-xs font-mono font-semibold tracking-widest text-emerald-400 uppercase bg-emerald-500/10 px-3 py-1 rounded-full border border-emerald-500/20">
            Technologies & Ecosystem
          </span>
          <h3 className="text-2xl sm:text-3xl font-extrabold text-white mt-3 tracking-tight">
            Tools & Frameworks I Work With
          </h3>
        </div>

        {/* Infinite Marquee Section */}
        <div className="relative w-full overflow-hidden my-4 py-2">
          {/* Fading Edge Overlays */}
          <div className="pointer-events-none absolute left-0 top-0 z-10 h-full w-16 sm:w-24 bg-gradient-to-r from-slate-900 to-transparent" />
          <div className="pointer-events-none absolute right-0 top-0 z-10 h-full w-16 sm:w-24 bg-gradient-to-l from-slate-900 to-transparent" />

          {/* Scrolling Ticker */}
          <div className="flex w-max animate-marquee gap-4 sm:gap-6 hover:[animation-play-state:paused]">
            {/* First Set */}
            <div className="flex gap-4 sm:gap-6">
              {allSkills.map((tech, index) => (
                <div
                  key={`set1-${index}`}
                  className="group flex items-center gap-3 rounded-2xl border border-slate-800 bg-slate-950/70 px-5 py-3.5 text-sm font-medium text-slate-200 shadow-lg transition-all duration-300 hover:border-emerald-500/50 hover:bg-slate-800/80 hover:scale-105"
                >
                  <span className="w-2 h-2 rounded-full bg-emerald-400 group-hover:animate-ping" />
                  <span className="font-mono text-white font-semibold">{tech.name}</span>
                  <span className="text-[10px] font-mono uppercase tracking-wider text-slate-400 bg-slate-800/80 px-2 py-0.5 rounded-md border border-slate-700/50">
                    {tech.tag}
                  </span>
                </div>
              ))}
            </div>

            {/* Duplicate Set for Seamless Loop */}
            <div className="flex gap-4 sm:gap-6" aria-hidden="true">
              {allSkills.map((tech, index) => (
                <div
                  key={`set2-${index}`}
                  className="group flex items-center gap-3 rounded-2xl border border-slate-800 bg-slate-950/70 px-5 py-3.5 text-sm font-medium text-slate-200 shadow-lg transition-all duration-300 hover:border-emerald-500/50 hover:bg-slate-800/80 hover:scale-105"
                >
                  <span className="w-2 h-2 rounded-full bg-emerald-400 group-hover:animate-ping" />
                  <span className="font-mono text-white font-semibold">{tech.name}</span>
                  <span className="text-[10px] font-mono uppercase tracking-wider text-slate-400 bg-slate-800/80 px-2 py-0.5 rounded-md border border-slate-700/50">
                    {tech.tag}
                  </span>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Bottom Quick Grid Summary (Static Badges) */}
        <div className="mt-8 pt-6 border-t border-slate-800/80 flex flex-wrap justify-center items-center gap-3 text-xs text-slate-400">
          <span className="text-slate-500 font-mono">Core Focus:</span>
          <span className="px-3 py-1 rounded-lg bg-slate-800/50 text-slate-300 border border-slate-700/50">Component Architecture</span>
          <span className="px-3 py-1 rounded-lg bg-slate-800/50 text-slate-300 border border-slate-700/50">Responsive Web Applications</span>
          <span className="px-3 py-1 rounded-lg bg-slate-800/50 text-slate-300 border border-slate-700/50">REST API Integration</span>
        </div>

      </div>
    </div>
  );
};

export default Stack;