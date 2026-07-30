import React from "react";
import { ExternalLink, Github } from "lucide-react";

const Projects = () => {
  const projects = [
    {
      id: 1,
      title: "TrueCare Cleaning Service",
      description:
        "A website for rendering professional cleaning services for homes, offices, and rentals across Saskatchewan. Features eco-friendly products, reliable cleaners, and a clean interface.",
      image: "https://i.postimg.cc/4356HqXd/True-Care-Image.png",
      tags: ["React.js", "JavaScript", "CSS3", "HTML5"],
      liveUrl: "https://www.truecarecleaningservices.ca/",
      githubUrl: "https://github.com/Candid001/Truecare-Cleaning-Services",
    },
    {
      id: 2,
      title: "Larva Tech Academy",
      description:
        "An educational platform designed to provide comprehensive details, course offerings, and information about Larva Tech Academy.",
      image: "https://i.postimg.cc/rw8VfPSj/Larva-Image.png",
      tags: ["React.js", "JavaScript", "CSS3", "HTML5"],
      liveUrl: "", // Kept empty; icon automatically hides
      githubUrl: "https://github.com/Candid001/Larva-Website",
    },
    {
      id: 3,
      title: "Coffee Web App",
      description:
        "A modern, user-friendly web application for coffee enthusiasts to explore, order, and customize coffee blends from local and global roasters.",
      image: "https://i.postimg.cc/q7QdDss6/coffee.png",
      tags: ["React.js", "JavaScript", "CSS3", "HTML5"],
      liveUrl: "https://coffee-web-app-virid.vercel.app/",
      githubUrl: "https://github.com/Candid001/Coffee-Web-App",
    },
    {
      id: 4,
      title: "Tic-Tac-Toe Game",
      description:
        "A classic 3x3 grid game built to demonstrate core game logic, state management, and interactive UI handling in web development.",
      image: "https://cdn.pixabay.com/photo/2015/09/17/15/44/game-944386_1280.jpg",
      tags: ["JavaScript", "CSS3", "HTML5"],
      liveUrl: "https://tic-tac-toe-omega-livid.vercel.app/",
      githubUrl: "https://github.com/Candid001/Tic-Tac-Toee",
    },
    {
      id: 5,
      title: "Jiji Clone App",
      description:
        "An e-commerce marketplace clone focusing on responsive layout design, product listing views, and user interaction flows.",
      image: "https://images.pexels.com/photos/7688336/pexels-photo-7688336.jpeg?auto=compress&cs=tinysrgb&w=800",
      tags: ["React", "JavaScript", "Tailwind CSS"],
      liveUrl: "https://github.com/Candid001/Jiji-Clone-Team-Larva2.git",
      githubUrl: "https://github.com/Candid001/Jiji-Clone-Team-Larva2.git",
    },
    {
      id: 6,
      title: "AliExpress Clone App",
      description:
        "A functional clone of the AliExpress platform, developed to sharpen dynamic rendering, filtering, and complex component structure.",
      image: "https://i.postimg.cc/kGvcRQJ7/Capture.png",
      tags: ["JavaScript", "CSS3", "HTML5"],
      liveUrl: "https://ali-express-clone-ebon.vercel.app/",
      githubUrl: "https://github.com/Candid001/AliExpress-Clone.git",
    },
  ];

  return (
    <section id="projects" className="py-20 w-full">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="text-3xl sm:text-4xl font-extrabold text-white tracking-tight">
            Featured Projects
          </h2>
          <div className="w-16 h-1 bg-emerald-400 mx-auto mt-3 rounded-full mb-4" />
          <p className="text-gray-400 text-base sm:text-lg max-w-2xl mx-auto">
            Here are some of my recent projects showcasing my experience in building
            responsive web applications, interactive interfaces, and clean frontend architecture.
          </p>
        </div>

        {/* Projects Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {projects.map((project) => (
            <div
              key={project.id}
              className="bg-slate-900/60 rounded-2xl overflow-hidden border border-slate-800 hover:border-emerald-500/50 transition-all duration-300 group hover:-translate-y-1 hover:shadow-[0_10px_30px_rgba(52,211,153,0.1)] flex flex-col justify-between"
            >
              <div>
                {/* Image & Overlay Container */}
                <div className="relative overflow-hidden h-60">
                  <img
                    src={project.image}
                    alt={project.title}
                    className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                  />
                  
                  {/* Subtle Gradient Overlay */}
                  <div className="absolute inset-0 bg-slate-950/60 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center space-x-4 backdrop-blur-[2px]">
                    
                    {/* Live Link Button (Only renders if liveUrl exists) */}
                    {project.liveUrl && (
                      <a
                        href={project.liveUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        aria-label="View Live Site"
                        className="bg-emerald-400 hover:bg-emerald-500 text-slate-950 p-3.5 rounded-full transition-all duration-200 hover:scale-110 shadow-lg"
                      >
                        <ExternalLink className="h-5 w-5 stroke-[2.5]" />
                      </a>
                    )}

                    {/* GitHub Link Button */}
                    <a
                      href={project.githubUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      aria-label="View GitHub Repository"
                      className="bg-slate-800 hover:bg-slate-700 text-white p-3.5 rounded-full transition-all duration-200 hover:scale-110 border border-slate-600 shadow-lg"
                    >
                      <Github className="h-5 w-5" />
                    </a>
                  </div>
                </div>

                {/* Project Details */}
                <div className="p-6 sm:p-8">
                  <h3 className="text-xl font-bold text-white mb-3 group-hover:text-emerald-300 transition-colors">
                    {project.title}
                  </h3>
                  <p className="text-gray-400 text-sm sm:text-base leading-relaxed mb-6">
                    {project.description}
                  </p>
                </div>
              </div>

              {/* Tags Section */}
              <div className="px-6 pb-6 sm:px-8 sm:pb-8">
                <div className="flex flex-wrap gap-2">
                  {project.tags.map((tag, index) => (
                    <span
                      key={index}
                      className="bg-slate-800 border border-slate-700 text-emerald-300 px-3 py-1 rounded-full font-mono text-xs font-medium"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Bottom CTA to GitHub */}
        <div className="text-center mt-16">
          <a
            href="https://github.com/Candid001?tab=repositories"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center space-x-3 bg-emerald-400 hover:bg-emerald-500 text-slate-950 px-8 py-3.5 rounded-xl font-semibold shadow-lg shadow-emerald-500/10 hover:scale-105 transition-all duration-200"
          >
            <Github className="h-5 w-5" />
            <span>View All Repositories on GitHub</span>
          </a>
        </div>

      </div>
    </section>
  );
};

export default Projects;