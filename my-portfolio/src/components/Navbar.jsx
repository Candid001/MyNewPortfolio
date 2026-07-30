import React, { useState } from "react";
import { NavLink } from "react-router-dom";
import Button from "./Button";
import { ArrowDown, Menu, X } from "lucide-react";

const links = [
  { to: "/", label: "Home" },
  { to: "/about", label: "About" },
  { to: "/projects", label: "Projects" },
  { to: "/contact", label: "Contact" },
];

function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => setIsOpen(!isOpen);
  const closeMenu = () => setIsOpen(false);

  return (
    <nav className="relative w-full bg-slate-950/90 backdrop-blur-md border-b border-emerald-300/40 text-white z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-8 lg:px-12 py-4 flex items-center justify-between">
        
        {/* Brand Logo */}
        <NavLink 
          to="/" 
          onClick={closeMenu}
          className="text-xl sm:text-2xl font-semibold tracking-tight hover:opacity-90 transition-opacity"
        >
          Basit
          <span className="text-emerald-300 px-1">/</span>
        </NavLink>

        {/* Desktop Navigation Links */}
        <div className="hidden md:flex items-center gap-8 lg:gap-12 text-base lg:text-lg">
          {links.map((link) => (
            <NavLink
              key={link.to}
              to={link.to}
              className={({ isActive }) =>
                isActive
                  ? "border-b-emerald-300 border-b-2 text-emerald-300 font-medium pb-1 transition-all"
                  : "text-gray-300 hover:text-emerald-300 transition-colors pb-1"
              }
            >
              {link.label}
            </NavLink>
          ))}
        </div>

        {/* Desktop Resume Button */}
        <div className="hidden md:block">
          <Button
            href="/AbdulBasit_Mustapha_CV_Tech.pdf"
            download="Mustapha_AbdulBasit_CV.pdf"
            variant="ghost"
            className="flex items-center gap-2 text-base lg:text-lg border border-emerald-300 text-emerald-300 hover:bg-emerald-400/10 px-4 py-2 rounded-xl"
          >
            Resume <ArrowDown className="w-4 h-4" />
          </Button>
        </div>

        {/* Mobile Hamburger Button */}
        <button
          onClick={toggleMenu}
          className="md:hidden text-gray-300 hover:text-emerald-300 p-2 focus:outline-none"
          aria-label="Toggle Navigation Menu"
        >
          {isOpen ? <X className="w-7 h-7 text-emerald-300" /> : <Menu className="w-7 h-7" />}
        </button>
      </div>

      {/* Mobile Dropdown Drawer */}
      {isOpen && (
        <div className="md:hidden bg-slate-900 border-b border-slate-800 px-6 py-6 space-y-5 animate-in slide-in-from-top-2 duration-200">
          <div className="flex flex-col space-y-4">
            {links.map((link) => (
              <NavLink
                key={link.to}
                to={link.to}
                onClick={closeMenu}
                className={({ isActive }) =>
                  isActive
                    ? "text-emerald-300 font-bold text-lg border-l-2 border-emerald-300 pl-3"
                    : "text-gray-300 hover:text-emerald-300 text-lg pl-3 transition-colors"
                }
              >
                {link.label}
              </NavLink>
            ))}
          </div>

          <div className="pt-4 border-t border-slate-800">
            <Button
              href="/AbdulBasit_Mustapha_CV_Tech.pdf"
              download="Mustapha_AbdulBasit_CV.pdf"
              variant="ghost"
              onClick={closeMenu}
              className="w-full flex items-center justify-center gap-2 text-base border border-emerald-300 text-emerald-300 hover:bg-emerald-400/10 py-2.5 rounded-xl"
            >
              Resume <ArrowDown className="w-4 h-4" />
            </Button>
          </div>
        </div>
      )}
    </nav>
  );
}

export default Navbar;