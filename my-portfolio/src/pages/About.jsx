import React from "react";
import { User, MapPin, Calendar, Award } from "lucide-react";

const About = () => {
  const stats = [
    { icon: Calendar, label: "Years Experience", value: "3+" },
    { icon: Award, label: "Projects Completed", value: "10+" },
    { icon: User, label: "Happy Clients", value: "7+" },
    { icon: MapPin, label: "Based In", value: "Germany" },
  ];

  return (
    <section id="about" className="py-16 sm:py-24 bg-slate-900/60 border-y border-slate-800/80">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center mb-12 sm:mb-16">
          <h2 className="text-3xl sm:text-4xl font-extrabold text-white tracking-tight">
            About Me
          </h2>
          <div className="w-16 h-1 bg-emerald-400 mx-auto mt-3 rounded-full mb-4" />
          <p className="text-gray-400 text-base sm:text-lg max-w-2xl mx-auto">
            Get to know more about my background, skills, and passion for creating high-performance web experiences.
          </p>
        </div>

        {/* Main Content Area */}
        <div className="flex flex-col gap-12 items-center">
          
          {/* Bio Text Paragraphs */}
          <div className="max-w-3xl w-full space-y-6 text-gray-300 text-base sm:text-lg leading-relaxed text-left sm:text-justify">
            <p className="bg-slate-900/80 p-6 rounded-2xl border border-slate-800">
              I'm a passionate frontend engineer with production experience building 
              scalable, user-centered digital web applications[cite: 1]. My journey began with a deep fascination for how clean code and intuitive design intersect to solve complex real-world problems.
            </p>
            <p className="bg-slate-900/80 p-6 rounded-2xl border border-slate-800">
              I specialize in <strong className="text-emerald-300 font-semibold">React, Next.js, and TypeScript</strong> along with modern CSS frameworks like <strong className="text-emerald-300 font-semibold">Tailwind CSS</strong>[cite: 1]. I enjoy architecting reusable component systems and collaborating with cross-functional teams to ship seamless B2B and consumer interfaces[cite: 1].
            </p>
            <p className="bg-slate-900/80 p-6 rounded-2xl border border-slate-800">
              When I'm not writing code or exploring new engineering practices, you'll find me following European football, tweaking interface designs, or diving into modern web technology trends.
            </p>
          </div>

          {/* Responsive Stats Grid */}
          <div className="w-full max-w-4xl grid grid-cols-2 sm:grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6">
            {stats.map((stat, index) => (
              <div
                key={index}
                className="bg-slate-900 p-5 sm:p-6 rounded-2xl border border-slate-800 hover:border-emerald-500/50 transition-all duration-300 group hover:-translate-y-1 shadow-lg"
              >
                <div className="flex items-center space-x-3 mb-3">
                  <div className="p-2 bg-slate-800 rounded-lg text-emerald-400 group-hover:bg-emerald-400 group-hover:text-slate-950 transition-colors">
                    <stat.icon className="h-4 w-4 sm:h-5 sm:w-5" />
                  </div>
                  <span className="text-gray-400 text-xs sm:text-sm font-medium">
                    {stat.label}
                  </span>
                </div>
                <div className="text-2xl sm:text-3xl font-extrabold text-white tracking-tight font-mono group-hover:text-emerald-300 transition-colors">
                  {stat.value}
                </div>
              </div>
            ))}
          </div>

        </div>
      </div>
    </section>
  );
};

export default About;