import React from "react";
import { Link } from "react-router-dom"; // Optional: remove if not using react-router-dom

const Button = ({
  children,
  onClick,
  type = "button",
  variant = "primary", // 'primary', 'secondary', 'outline', or 'ghost'
  className = "", // Allows extra custom Tailwind classes when called
  to, // For internal React Router links (e.g., to="/about")
  href, // For external links or file downloads (e.g., href="/resume.pdf")
  download = false, // Set to true or a filename string for PDF downloads
  target = "_self", // e.g., '_blank' to open in a new tab
  disabled = false,
  ...props
}) => {
  // 1. Base styles applied to all buttons
  const baseStyles =
    "inline-flex items-center justify-center font-medium transition-all duration-200 rounded-lg px-3 py-2 text-white focus:outline-none focus:ring-2 focus:ring-offset-2 disabled:opacity-50 disabled:cursor-not-allowed";

  // 2. Preset color/style variants
  const variants = {
    primary:
      "bg-emerald-400 text-slate-900 hover:bg-emerald-500 focus:ring-emerald-400 font-semibold shadow-md",
    secondary:
      "bg-slate-800 text-white hover:bg-slate-700 focus:ring-slate-700 border border-slate-700",
    outline:
      "border-2 border-emerald-400 text-emerald-400 hover:bg-emerald-400/10 focus:ring-emerald-400",
    ghost:
      "text-gray-300 hover:bg-slate-800 hover:text-white focus:ring-slate-700 border-2",
  };

  // Combine base styles, selected variant, and any custom className passed as props
  const combinedClasses = `${baseStyles} ${variants[variant] || variants.primary} ${className}`;

  // ----------------------------------------------------
  // CASE A: Internal Route Link (using React Router)
  // ----------------------------------------------------
  if (to) {
    return (
      <Link to={to} className={combinedClasses} {...props}>
        {children}
      </Link>
    );
  }

  // ----------------------------------------------------
  // CASE B: External Link OR PDF Download
  // ----------------------------------------------------
  if (href) {
    return (
      <a
        href={href}
        download={download}
        target={target}
        rel={target === "_blank" ? "noopener noreferrer" : undefined}
        className={combinedClasses}
        {...props}
      >
        {children}
      </a>
    );
  }

  // ----------------------------------------------------
  // CASE C: Standard Action Button (onClick)
  // ----------------------------------------------------
  return (
    <button
      type={type}
      onClick={onClick}
      disabled={disabled}
      className={combinedClasses}
      {...props}
    >
      {children}
    </button>
  );
};

export default Button;
