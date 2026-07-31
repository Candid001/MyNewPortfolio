import React, { useState } from "react";
import { NavLink } from "react-router-dom";
import Button from "./Button";
import { ArrowDown, Menu, X } from "lucide-react";

const links = [
  { to: "/", label: "Home" },
  { to: "/about", label: "About Me" },
  { to: "/projects", label: "Projects" },
  { to: "/contact", label: "Contact Me" },
];

function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => setIsOpen(!isOpen);
  const closeMenu = () => setIsOpen(false);

  return (
    <nav className="sticky top-0 w-full bg-slate-950/95 backdrop-blur-md border-b border-slate-800 text-white z-50 shadow-md">
      {/* 100% Full-Width Wrapper with Centered Content Container */}
      <div className="w-full max-w-7xl mx-auto px-4 sm:px-8 lg:px-12 py-4 flex items-center justify-between">
        
        {/* Brand / Logo */}
        <NavLink 
          to="/" 
          onClick={closeMenu}
          className="text-xl sm:text-2xl font-extrabold tracking-tight hover:opacity-90 transition-opacity flex items-center gap-1"
        >
          <span>Basit</span>
          <span className="text-emerald-400 font-mono">/&gt;</span>
        </NavLink>

        {/* Desktop Navigation Links */}
        <div className="hidden md:flex items-center gap-8 lg:gap-10 text-sm font-medium">
          {links.map((link) => (
            <NavLink
              key={link.to}
              to={link.to}
              className={({ isActive }) =>
                isActive
                  ? "text-emerald-400 font-semibold border-b-2 border-emerald-400 pb-1 transition-all"
                  : "text-slate-300 hover:text-emerald-400 pb-1 transition-colors"
              }
            >
              {link.label}
            </NavLink>
          ))}
        </div>

        {/* Desktop Resume Button */}
        <div className="hidden md:block">
          <Button
            href="/BasitTechResume.pdf"
            download="BasitTechResume.pdf"
            variant="ghost"
            className="flex items-center gap-2 text-xs font-semibold bg-emerald-400 hover:bg-emerald-300 text-slate-950 px-4 py-2.5 rounded-xl transition-all shadow-sm hover:scale-[1.02]"
          >
            Resume <ArrowDown className="w-3.5 h-3.5 stroke-[2.5]" />
          </Button>
        </div>

        {/* Mobile Toggle Button */}
        <button
          onClick={toggleMenu}
          className="md:hidden text-slate-300 hover:text-emerald-400 p-2 focus:outline-none rounded-lg hover:bg-slate-900 transition-colors"
          aria-label="Toggle Navigation Menu"
        >
          {isOpen ? <X className="w-6 h-6 text-emerald-400" /> : <Menu className="w-6 h-6" />}
        </button>
      </div>

      {/* Full-Width Mobile Dropdown Drawer */}
      {isOpen && (
        <div className="md:hidden w-full bg-slate-950 border-t border-slate-800/80 px-6 py-6 space-y-4 animate-in slide-in-from-top-2 duration-200 shadow-2xl">
          <div className="flex flex-col space-y-2">
            {links.map((link) => (
              <NavLink
                key={link.to}
                to={link.to}
                onClick={closeMenu}
                className={({ isActive }) =>
                  isActive
                    ? "text-emerald-400 font-semibold text-base bg-slate-900 px-4 py-2.5 rounded-xl border-l-2 border-emerald-400"
                    : "text-slate-300 hover:text-white text-base px-4 py-2.5 rounded-xl hover:bg-slate-900/60 transition-colors"
                }
              >
                {link.label}
              </NavLink>
            ))}
          </div>

          <div className="pt-3 border-t border-slate-800">
            <Button
              href="/AbdulBasit_Mustapha_CV_Tech.pdf"
              download="Mustapha_AbdulBasit_CV.pdf"
              variant="ghost"
              onClick={closeMenu}
              className="w-full flex items-center justify-center gap-2 text-sm font-semibold bg-emerald-400 text-slate-950 py-3 rounded-xl hover:bg-emerald-300 transition-colors"
            >
              Resume <ArrowDown className="w-4 h-4 stroke-[2.5]" />
            </Button>
          </div>
        </div>
      )}
    </nav>
  );
}

export default Navbar;