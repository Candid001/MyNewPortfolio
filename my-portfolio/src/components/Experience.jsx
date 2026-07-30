import React from 'react';
import { Briefcase, Calendar, MapPin, ChevronRight } from 'lucide-react';

const Experience = () => {
  const experiences = [
    {
      id: 1,
      role: 'Frontend Engineer',
      company: 'Geotopup Technology Solutions',
      location: 'Ibadan, Nigeria',
      period: 'Dec 2023 – Feb 2026',
      description:
        'Architected and shipped multi-service payment and financial applications, driving key business metrics through responsive UI and API integrations.',
      highlights: [
        'Architected a utility payment platform using React & Next.js, boosting transaction success rates by 35% and cutting user complaints by 25%.',
        'Implemented wallet funding and transaction tracking with REST APIs, driving a 20% growth in returning users within 3 months.',
        'Designed a centralized dashboard component library, accelerating cross-module development speed.',
        'Contributed to Celergate (open-banking integration & payout modules) with TypeScript-first React interfaces for B2B financial flows.'
      ],
      skills: ['React', 'Next.js', 'TypeScript', 'REST APIs', 'Dashboard Architecture']
    },
    {
      id: 2,
      role: 'IT Intern - Frontend',
      company: 'Geotopup Technology Solutions',
      location: 'Remote',
      period: 'May 2023 – Dec 2023',
      description:
        'Developed interactive user interfaces for internal productivity tools and complex data-driven platforms.',
      highlights: [
        'Built scalable React components for an internal ticketing tool with real-time tracking, calendar views, and chat.',
        'Developed interactive UI for CGS, an AI-powered commodity grading system integrated with computer vision data.',
        'Managed state consistency using Zustand and Redux across sensitive HR and budgeting workflows.'
      ],
      skills: ['React', 'Zustand', 'Redux', 'UI/UX Design', 'Data Visualization']
    },
    {
      id: 3,
      role: 'Computer Science Teacher (NYSC)',
      company: 'Temitope Secondary School',
      location: 'Ilorin, Nigeria',
      period: 'Dec 2022 – Nov 2023',
      description:
        'Led tech instruction and mentorship for students in ICT and web fundamentals.',
      highlights: [
        'Delivered ICT curricula to 30+ senior students, improving the average pass rate by 15%.',
        'Mentored 25 coding club students to build two functional web applications for school administrative use.'
      ],
      skills: ['ICT Instruction', 'Mentorship', 'Web Development Fundamentals']
    }
  ];

  return (
    <section 
      id="experience" 
      className="py-24 w-full h-auto relative bg-gradient-to-b from-slate-900 via-slate-900/90 to-slate-950 border-y border-slate-800/80 shadow-2xl overflow-hidden"
    >
      {/* Subtle Background Glow Elements */}
      <div className="absolute top-1/4 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[500px] h-[500px] bg-emerald-500/5 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute bottom-10 right-10 w-72 h-72 bg-emerald-400/5 rounded-full blur-2xl pointer-events-none" />

      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Header */}
        <div className="text-center mb-16">
          <span className="text-xs font-mono font-semibold tracking-wider text-emerald-400 uppercase bg-emerald-400/10 px-3.5 py-1.5 rounded-full border border-emerald-500/20">
            Career Journey
          </span>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-white tracking-tight mt-4">
            Work Experience
          </h2>
          <div className="w-16 h-1 bg-emerald-400 mx-auto mt-3 rounded-full mb-4" />
          <p className="text-gray-400 text-base sm:text-lg max-w-2xl mx-auto">
            A track record of building production-ready frontend applications, scalable design systems, and user-focused interfaces.
          </p>
        </div>

        {/* Timeline Wrap Box with Glass Effect */}
        <div className="bg-slate-950/50 backdrop-blur-sm p-6 sm:p-10 rounded-3xl border border-slate-800/80 shadow-inner">
          <div className="relative border-l border-slate-800 ml-4 md:ml-28 space-y-12">
            {experiences.map((exp) => (
              <div key={exp.id} className="relative pl-8 md:pl-10 group">
                
                {/* Timeline Marker Dot */}
                <div className="absolute -left-[17px] top-1.5 w-8 h-8 rounded-full bg-slate-900 border-2 border-slate-700 group-hover:border-emerald-400 flex items-center justify-center transition-all duration-300 shadow-md group-hover:shadow-emerald-500/20">
                  <Briefcase className="w-3.5 h-3.5 text-gray-400 group-hover:text-emerald-400 transition-colors" />
                </div>

                {/* Experience Card */}
                <div className="bg-slate-900/80 p-6 sm:p-8 rounded-2xl border border-slate-800 hover:border-emerald-500/50 transition-all duration-300 hover:shadow-xl hover:shadow-emerald-500/5">
                  
                  {/* Card Header */}
                  <div className="flex flex-col md:flex-row md:items-center justify-between gap-2 mb-4">
                    <div>
                      <h3 className="text-xl font-bold text-white group-hover:text-emerald-300 transition-colors">
                        {exp.role}
                      </h3>
                      <div className="text-emerald-400 font-medium text-sm sm:text-base">
                        {exp.company}
                      </div>
                    </div>

                    <div className="flex flex-wrap items-center gap-3 text-xs sm:text-sm text-gray-400 font-mono">
                      <span className="flex items-center gap-1.5 bg-slate-950 px-3 py-1.5 rounded-xl border border-slate-800">
                        <Calendar className="w-3.5 h-3.5 text-emerald-400" />
                        {exp.period}
                      </span>
                      <span className="flex items-center gap-1.5 bg-slate-950 px-3 py-1.5 rounded-xl border border-slate-800">
                        <MapPin className="w-3.5 h-3.5 text-emerald-400" />
                        {exp.location}
                      </span>
                    </div>
                  </div>

                  <p className="text-gray-300 text-sm sm:text-base mb-6 leading-relaxed">
                    {exp.description}
                  </p>

                  {/* Highlights Bullet List */}
                  <ul className="space-y-2.5 mb-6">
                    {exp.highlights.map((point, idx) => (
                      <li key={idx} className="flex items-start text-sm sm:text-base text-gray-400">
                        <ChevronRight className="w-4 h-4 text-emerald-400 shrink-0 mt-1 mr-2" />
                        <span>{point}</span>
                      </li>
                    ))}
                  </ul>

                  {/* Tech Badges */}
                  <div className="flex flex-wrap gap-2 pt-4 border-t border-slate-800/80">
                    {exp.skills.map((skill, idx) => (
                      <span
                        key={idx}
                        className="bg-slate-950 text-emerald-300 text-xs px-3 py-1 rounded-lg border border-slate-800 font-mono"
                      >
                        {skill}
                      </span>
                    ))}
                  </div>

                </div>
              </div>
            ))}
          </div>
        </div>

      </div>
    </section>
  );
};

export default Experience;