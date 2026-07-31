import React from "react";
import BasBas from "../assets/BasBas.jpeg";
import Button from "../components/Button";
import Stack from "../components/Stack";
import MyApproach from "../components/MyApproach";
import Experience from "../components/Experience";
import CallToActionBanner from "../components/CallToActionBanner";
import Basit from "../assets/OffBas.JPG"

function Home() {
  return (
    <div className="w-full overflow-x-hidden min-h-screen bg-gradient-to-b from-slate-50 via-white to-emerald-50/20 py-12 sm:py-20 px-4 sm:px-6 lg:px-8 transition-colors duration-300">
      
      {/* HERO SECTION */}
      <section className="max-w-5xl mx-auto flex flex-col md:flex-row items-center justify-center gap-8 md:gap-12 lg:gap-16 lg:pl-32">
        
        {/* Avatar Container */}
        <div className="relative shrink-0 ">
          <div className="w-40 h-40 sm:w-48 sm:h-48 md:w-56 md:h-56 border-2 border-emerald-500/30 overflow-hidden rounded-2xl shadow-xl shadow-emerald-900/10 bg-white">
            <img
              src={Basit}
              alt="Mustapha AbdulBasit Olamide"
              className="w-full h-full object-cover"
            />
          </div>

          {/* Code Badge */}
          <div className="absolute -bottom-3 -right-3 bg-white border border-slate-200 px-3 py-1 rounded-xl text-emerald-600 shadow-md">
            <span className="font-mono text-lg sm:text-xl font-bold">{`</>`}</span>
          </div>
        </div>

        {/* Hero Text Content */}
        <div className="flex flex-col items-center md:items-start text-center md:text-left">
          
          {/* Status Badge */}
          <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-emerald-50 border border-emerald-200 text-emerald-700 text-xs sm:text-sm font-medium mb-4 shadow-sm">
            <span className="relative flex h-2 w-2 sm:h-2.5 sm:w-2.5">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75"></span>
              <span className="relative inline-flex rounded-full h-2 w-2 sm:h-2.5 sm:w-2.5 bg-emerald-500"></span>
            </span>
            Available for new opportunities
          </div>

          {/* Main Heading */}
          <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-extrabold tracking-tight text-slate-900 leading-tight">
            Hi, I'm{" "}
            <span className="text-emerald-600 block sm:inline">
              Mustapha AbdulBasit
            </span>
            .
          </h1>

          {/* Subtitle */}
          <p className="mt-3 text-slate-600 text-base sm:text-lg lg:text-xl max-w-xl font-normal">
            Frontend Engineer <span className="text-emerald-600 font-semibold">||</span>{" "}
            Project Manager
          </p>

          {/* Call To Action Buttons */}
          <div className="mt-6 flex flex-wrap items-center justify-center md:justify-start gap-4">
            <Button
              to="/projects"
              variant="outline"
              className="hover:scale-105 text-sm sm:text-base py-2.5 px-6 border-slate-300 text-black hover:bg-slate-100 hover:border-slate-400 shadow-sm"
            >
              View My Projects
            </Button>
          </div>
        </div>
      </section>

      {/* SUB-SECTIONS */}

      {/* Tech Stack Bar */}
      <div className="-mx-4 sm:-mx-6 lg:-mx-8 mt-16 sm:mt-24 w-[calc(100%+2rem)] sm:w-[calc(100%+3rem)] lg:w-[calc(100%+4rem)]">
        <Stack />
      </div>

      {/* Approach Section */}
      <div className="mt-16 sm:mt-24 max-w-6xl mx-auto">
        <MyApproach />
      </div>

      {/* Experience Section */}
      <div className="-mx-4 sm:-mx-6 lg:-mx-8 mt-16 sm:mt-24 w-[calc(100%+2rem)] sm:w-[calc(100%+3rem)] lg:w-[calc(100%+4rem)]">
        <Experience />
      </div>

      {/* Call To Action Banner */}
      <div className="mt-16 sm:mt-24 max-w-6xl mx-auto">
        <CallToActionBanner />
      </div>
    </div>
  );
}

export default Home;