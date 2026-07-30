import React from "react";

const techStack = [
  "React",
  "Node.js",
  "JavaScript",
  "Tailwind CSS",
  "Express",
  "MongoDB",
  "Git",
  "HTML5/CSS3",
];

const Stack = () => {
  return (
    <div className="flex flex-col h-auto w-full">
      <div className="text-3xl sm:text-4xl font-extrabold text-white text-center mb-8 tracking-tight">My Stack:</div>

      <div className="w-full h-0.5 bg-emerald-300"></div>

      <div className="relative w-full overflow-hidden bg-slate-900 py-6">
        <div className="pointer-events-none absolute left-0 top-0 z-10 h-full w-20 bg-gradient-to-r from-slate-900 to-transparent" />
        <div className="pointer-events-none absolute right-0 top-0 z-10 h-full w-20 bg-gradient-to-l from-slate-900 to-transparent" />

        {/* Animated Flex Container */}
        <div className="flex w-max animate-marquee gap-8 hover:[animation-play-state:paused]">
          {/* Render List #1 */}
          <div className="flex gap-8">
            {techStack.map((tech, index) => (
              <div
                key={`first-${index}`}
                className="flex items-center justify-center rounded-xl border border-slate-700 bg-slate-800/80 px-5 py-3 font-mono text-sm font-semibold text-cyan-400 shadow-md"
              >
                {tech}
              </div>
            ))}
          </div>

          {/* Render List #2 (Duplicate for smooth infinite looping) */}
          <div className="flex gap-8" aria-hidden="true">
            {techStack.map((tech, index) => (
              <div
                key={`second-${index}`}
                className="flex items-center justify-center rounded-xl border border-slate-700 bg-slate-800/80 px-5 py-3 font-mono text-sm font-semibold text-cyan-400 shadow-md"
              >
                {tech}
              </div>
            ))}
          </div>
        </div>
      </div>

      <div className="w-full h-0.5 bg-emerald-300"></div>
    </div>
  );
};

export default Stack;
