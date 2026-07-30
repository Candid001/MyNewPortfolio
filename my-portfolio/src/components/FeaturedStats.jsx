import React from 'react';
import { Code2, FolderCheck, Layout, Zap } from 'lucide-react';

const FeaturedStats = () => {
  const stats = [
    {
      id: 1,
      icon: FolderCheck,
      value: '10+',
      label: 'Projects Completed',
      sublabel: 'Web applications & platforms'
    },
    {
      id: 2,
      icon: Code2,
      value: '3+ Years',
      label: 'Production Experience',
      sublabel: 'React, Next.js & TypeScript'
    },
    {
      id: 3,
      icon: Layout,
      value: '100%',
      label: 'Responsive Design',
      sublabel: 'Mobile-first & accessible UIs'
    },
    {
      id: 4,
      icon: Zap,
      value: '35%',
      label: 'Performance Uplift',
      sublabel: 'Measurable production impact'
    }
  ];

  return (
    <section className="py-12 bg-slate-900/80 border-y border-slate-800/80">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-6 lg:gap-8">
          {stats.map((stat) => (
            <div
              key={stat.id}
              className="bg-slate-950/60 p-6 rounded-2xl border border-slate-800/80 hover:border-emerald-500/40 transition-all duration-300 group hover:-translate-y-1"
            >
              <div className="flex items-center justify-between mb-4">
                <span className="text-3xl sm:text-4xl font-extrabold text-white group-hover:text-emerald-400 transition-colors tracking-tight font-mono">
                  {stat.value}
                </span>
                <div className="p-2.5 bg-slate-900 rounded-xl border border-slate-800 text-emerald-400 group-hover:bg-emerald-400 group-hover:text-slate-950 transition-all duration-300">
                  <stat.icon className="w-5 h-5 stroke-[2.2]" />
                </div>
              </div>
              <h3 className="text-sm font-bold text-gray-200 mb-1">
                {stat.label}
              </h3>
              <p className="text-xs text-gray-400 font-mono">
                {stat.sublabel}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default FeaturedStats;