import { NavLink } from "react-router-dom";
import Button from "./Button";
import { ArrowDown } from "lucide-react";

const links = [
  { to: "/", label: "Home" },
  { to: "/about", label: "About" },
  { to: "/projects", label: "Projects" },
  { to: "/contact", label: "Contact" },
];

function Navbar() {
  return (
    <nav className="flex items-center justify-between px-22 py-4 border-b border-b-emerald-300 text-white text-2xl drop-shadow-lg">
      <span className="font-semibold">
        Basit
        <span className="text-emerald-300 px-1">/</span>
      </span>
      <div className="flex gap-12 text-lg">
        {links.map((link) => (
          <NavLink
            key={link.to}
            to={link.to}
            className={({ isActive }) =>
              isActive
                ? "border-b-emerald-300 border-b-2"
                : "text-white-600 hover:"
            }
          >
            {link.label}
          </NavLink>
        ))}
      </div>
      <Button
        href="/AbdulBasit_Mustapha_CV_Tech.pdf"
        download="Mustapha_AbdulBasit_CV.pdf"
        variant="ghost"
        className="flex gap-2 text-xl bg-none border-emerald-300"
      >
        Resume <ArrowDown className=""/>
      </Button>
    </nav>
  );
}

export default Navbar;
