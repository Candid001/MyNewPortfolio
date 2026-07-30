import React from "react";

const approaches = [
  {
    number: "01",
    title: "Research & Planning",
    description:
      "Understanding user needs and project requirements to map out effective, scalable solutions.",
    accent:
      "border-indigo-500/30 text-indigo-400 group-hover:border-indigo-500",
    glow: "group-hover:shadow-[0_0_20px_rgba(99,102,241,0.25)]",
  },
  {
    number: "02",
    title: "Design & Prototype",
    description:
      "Creating interactive wireframes and modern interfaces to visualize a seamless user experience.",
    accent:
      "border-purple-500/30 text-purple-400 group-hover:border-purple-500",
    glow: "group-hover:shadow-[0_0_20px_rgba(168,85,247,0.25)]",
  },
  {
    number: "03",
    title: "Develop & Test",
    description:
      "Building robust frontend applications with clean code, responsive layouts, and thorough performance optimization.",
    accent:
      "border-emerald-500/30 text-emerald-400 group-hover:border-emerald-500",
    glow: "group-hover:shadow-[0_0_20px_rgba(52,211,153,0.25)]",
  },
];

const MyApproach = () => {
  return (
    <div className="w-full max-w-4xl mx-auto py-16 px-4 mt-20">
      {/* Section Header */}
      <div className="text-center mb-12">
        <h3 className="text-3xl sm:text-4xl font-extrabold text-white tracking-tight">
          My Approach
        </h3>
        <div className="w-16 h-1 bg-emerald-400 mx-auto mt-3 rounded-full" />
      </div>

      {/* Vertical Flex-Col Cards */}
      <div className="flex flex-col gap-6">
        {approaches.map((item, index) => (
          <div
            key={index}
            className={`group relative flex flex-col sm:flex-row items-start sm:items-center gap-6 p-6 sm:p-8 rounded-2xl bg-slate-900/40 border border-slate-800 transition-all duration-300 hover:-translate-y-1 hover:border-slate-700 ${item.glow} animate-fade-in-up`}
            style={{ animationDelay: `${index * 150}ms` }}
          >
            {/* Number Badge with Border */}
            <div
              className={`flex-shrink-0 w-14 h-14 rounded-xl border flex items-center justify-center font-mono text-xl font-bold transition-colors duration-300 ${item.accent}`}
            >
              {item.number}
            </div>

            {/* Step Content */}
            <div className="flex-1">
              <h4 className="text-xl font-bold text-white mb-1 group-hover:text-emerald-300 transition-colors">
                {item.title}
              </h4>
              <p className="text-gray-400 text-sm sm:text-base leading-relaxed">
                {item.description}
              </p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default MyApproach;
