import React from "react";
import BasBas from "../assets/BasBas.jpeg";
import Button from "../components/Button"; // Import your reusable Button component
import Stack from "../components/Stack";
import MyApproach from "../components/MyApproach";
import Experience from "../components/Experience";
import FeaturedStats from "../components/FeaturedStats";
import CallToActionBanner from "../components/CallToActionBanner";

function Home() {
  return (
    <div className="w-full py-16 px-6">
      {/* ---------------- HERO SECTION ---------------- */}
      <div className="max-w-4xl mx-auto px-6 text-white flex flex-col md:flex-row items-center gap-8 md:gap-12">
        {/* Profile Image & Status Badge */}
        <div className="relative shrink-0">
          <div className="w-48 h-48 md:w-56 md:h-56 border-2 border-emerald-300/80 overflow-hidden rounded-2xl shadow-xl shadow-emerald-950/20">
            <img
              src={BasBas}
              alt="Mustapha AbdulBasit Olamide"
              className="w-full h-full object-cover"
            />
          </div>

          {/* Code Icon Overlay */}
          <div className="absolute -bottom-3 -right-3 bg-slate-900 border border-slate-700 px-3 py-1 rounded-xl text-emerald-300 shadow-lg">
            <span className="font-mono text-xl font-bold">{`</>`}</span>
          </div>
        </div>

        {/* Hero Text Content */}
        <div className="flex flex-col items-center md:items-start text-center md:text-left">
          {/* Status Badge */}
          <div className="inline-flex items-center gap-2.5 px-3.5 py-1.5 rounded-full bg-emerald-500/10 border border-emerald-500/30 text-emerald-300 text-xs sm:text-sm font-medium mb-4">
            <span className="relative flex h-2.5 w-2.5">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75"></span>
              <span className="relative inline-flex rounded-full h-2.5 w-2.5 bg-emerald-500"></span>
            </span>
            Available for new opportunities
          </div>

          {/* Main Heading */}
          <h1 className="text-3xl sm:text-4xl md:text-5xl font-extrabold tracking-tight text-white leading-tight">
            Hi, I'm{" "}
            <span className="text-emerald-300">Mustapha AbdulBasit</span>.
          </h1>

          {/* Subtitle */}
          <p className="mt-3 text-gray-400 text-lg sm:text-xl max-w-xl font-normal">
            Frontend Developer <span className="text-emerald-400/60">||</span>{" "}
            Project Manager
          </p>

          {/* Call To Action Buttons */}
          <div className="mt-6 flex flex-wrap items-center justify-center md:justify-start gap-4">

            {/* View Work Link */}
            <Button
              to="/projects"
              variant="outline"
              className="hover:scale-105"
            >
              View My Projects
            </Button>
          </div>
        </div>
      </div>

      <div className="-mx-6 mt-24 w-[calc(100%+3rem)]">
        <Stack />
      </div>

      <div className="mt-16">
        <MyApproach />
      </div>

      <div className="-mx-6 w-[calc(100%+3rem)]">
        <Experience />
      </div>

      <div>
        <CallToActionBanner />
      </div>
    </div>
  );
}

export default Home;
