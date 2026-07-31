import React from "react";

const approaches = [
  {
    number: "01",
    tag: "Discovery & Strategy",
    title: "Research & Planning",
    description:
      "Understanding user needs and project goals to map out clear, scalable solutions before writing a line of code.",
    accent: "text-emerald-400 border-emerald-500/30 bg-emerald-500/10",
    glow: "group-hover:border-emerald-500/50 group-hover:shadow-[0_0_25px_rgba(16,185,129,0.15)]",
  },
  {
    number: "02",
    tag: "UI/UX & Architecture",
    title: "Design & Prototype",
    description:
      "Creating interactive wireframes and modern interfaces to visualize a seamless, intuitive user experience.",
    accent: "text-indigo-400 border-indigo-500/30 bg-indigo-500/10",
    glow: "group-hover:border-indigo-500/50 group-hover:shadow-[0_0_25px_rgba(99,102,241,0.15)]",
  },
  {
    number: "03",
    tag: "Execution & Quality",
    title: "Develop & Test",
    description:
      "Building robust frontend applications with clean code, responsive layouts, and thorough performance optimization.",
    accent: "text-purple-400 border-purple-500/30 bg-purple-500/10",
    glow: "group-hover:border-purple-500/50 group-hover:shadow-[0_0_25px_rgba(168,85,247,0.15)]",
  },
];

const MyApproach = () => {
  return (
    <div className="w-full max-w-6xl mx-auto px-4 sm:px-6 my-12">
      {/* Outer Studio Container */}
      <div className="relative overflow-hidden rounded-3xl bg-slate-900 border border-slate-800 p-8 sm:p-10 shadow-2xl shadow-emerald-950/20">
        
        {/* Subtle Ambient Background Glows */}
        <div className="absolute -top-24 -right-24 w-80 h-80 bg-emerald-500/10 rounded-full blur-3xl pointer-events-none" />
        <div className="absolute -bottom-24 -left-24 w-80 h-80 bg-indigo-500/10 rounded-full blur-3xl pointer-events-none" />

        {/* Section Header */}
        <div className="relative z-10 text-center mb-12">
          <span className="text-xs font-mono font-semibold tracking-widest text-emerald-400 uppercase bg-emerald-500/10 px-3 py-1 rounded-full border border-emerald-500/20">
            Workflow & Process
          </span>
          <h3 className="text-2xl sm:text-3xl font-extrabold text-white mt-3 tracking-tight">
            How I Build Digital Products
          </h3>
          <p className="text-slate-400 text-sm sm:text-base max-w-xl mx-auto mt-2">
            A structured, iterative workflow focused on performance, clarity, and user satisfaction.
          </p>
        </div>

        {/* Vertical Step Grid */}
        <div className="relative z-10 flex flex-col gap-6 max-w-4xl mx-auto">
          {approaches.map((item, index) => (
            <div
              key={index}
              className={`group relative flex flex-col sm:flex-row items-start gap-6 p-6 sm:p-7 rounded-2xl bg-slate-950/60 border border-slate-800/80 transition-all duration-300 ${item.glow}`}
            >
              {/* Step Badge */}
              <div
                className={`flex-shrink-0 w-12 h-12 sm:w-14 sm:h-14 rounded-2xl border flex items-center justify-center font-mono text-lg font-bold transition-all duration-300 ${item.accent}`}
              >
                {item.number}
              </div>

              {/* Step Content */}
              <div className="flex-1 min-w-0">
                <div className="flex items-center gap-2 mb-1.5">
                  <span className="text-[11px] font-mono uppercase tracking-wider text-slate-400 bg-slate-800/60 px-2.5 py-0.5 rounded-md border border-slate-700/50">
                    {item.tag}
                  </span>
                </div>
                
                <h4 className="text-xl font-bold text-white mb-2 group-hover:text-emerald-300 transition-colors">
                  {item.title}
                </h4>
                
                <p className="text-slate-400 text-sm sm:text-base leading-relaxed">
                  {item.description}
                </p>
              </div>
            </div>
          ))}
        </div>

        {/* Footer Summary Tag */}
        <div className="mt-10 pt-6 border-t border-slate-800/80 text-center">
          <span className="text-xs font-mono text-slate-400">
            Quality First • Clean Code • Continuous Refinement
          </span>
        </div>

      </div>
    </div>
  );
};

export default MyApproach;