import React from 'react';
import { ArrowRight, Mail, Sparkles } from 'lucide-react';

const CallToActionBanner = () => {
  const scrollToContact = () => {
    const contactElement = document.getElementById('contact');
    if (contactElement) {
      contactElement.scrollIntoView({ behavior: 'smooth' });
    } else {
      window.location.href = 'mailto:abdulbasitmustapha1@gmail.com';
    }
  };

  return (
    <section className="py-16 w-full">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="relative overflow-hidden rounded-3xl bg-gradient-to-r from-slate-900 via-slate-900 to-emerald-950/60 border border-emerald-500/30 p-8 sm:p-12 lg:p-16 shadow-2xl">
          
          {/* Ambient Glow Effects */}
          <div className="absolute top-0 right-0 -mt-12 -mr-12 w-64 h-64 bg-emerald-500/10 rounded-full blur-3xl pointer-events-none" />
          <div className="absolute bottom-0 left-1/3 -mb-12 w-48 h-48 bg-emerald-400/10 rounded-full blur-2xl pointer-events-none" />

          <div className="relative z-10 flex flex-col lg:flex-row items-center justify-between gap-8 text-center lg:text-left">
            
            {/* Text Content */}
            <div className="max-w-2xl">
              <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-emerald-400/10 border border-emerald-500/20 text-emerald-400 text-xs font-mono font-semibold uppercase mb-4">
                <Sparkles className="w-3.5 h-3.5" />
                <span>Available for New Opportunities</span>
              </div>
              <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-white tracking-tight leading-tight">
                Have a project in mind or looking to hire?
              </h2>
              <p className="mt-4 text-gray-300 text-base sm:text-lg leading-relaxed">
                Whether you need a full web platform built from scratch, frontend scaling, or component architecture optimization, let's build something scalable together.
              </p>
            </div>

            {/* Action Buttons */}
            <div className="flex flex-col sm:flex-row items-center gap-4 shrink-0 w-full sm:w-auto">
              <button
                onClick={scrollToContact}
                className="w-full sm:w-auto inline-flex items-center justify-center space-x-2 bg-emerald-400 hover:bg-emerald-500 text-slate-950 font-bold px-8 py-4 rounded-xl transition-all duration-200 hover:scale-105 shadow-lg shadow-emerald-500/10 group"
              >
                <span>Let's Talk</span>
                <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform stroke-[2.5]" />
              </button>

              <a
                href="mailto:abdulbasitmustapha1@gmail.com"
                className="w-full sm:w-auto inline-flex items-center justify-center space-x-2 bg-slate-800/80 hover:bg-slate-800 text-white border border-slate-700 hover:border-emerald-500/50 font-semibold px-6 py-4 rounded-xl transition-all duration-200"
              >
                <Mail className="w-5 h-5 text-emerald-400" />
                <span>Send Email</span>
              </a>
            </div>

          </div>
        </div>
      </div>
    </section>
  );
};

export default CallToActionBanner;