"use client";

import { useEffect, useState } from "react";
import { ShieldCheck, HardHat, Menu, X, ArrowUpRight } from "lucide-react";

export default function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const handleNavClick = (e: React.MouseEvent<HTMLAnchorElement>, id: string) => {
    e.preventDefault();
    const element = document.getElementById(id);
    if (element) {
      const offset = 80; // height of navbar
      const bodyRect = document.body.getBoundingClientRect().top;
      const elementRect = element.getBoundingClientRect().top;
      const elementPosition = elementRect - bodyRect;
      const offsetPosition = elementPosition - offset;

      window.scrollTo({
        top: offsetPosition,
        behavior: "smooth"
      });
    }
    setMobileMenuOpen(false);
  };

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled
          ? "bg-industrial-dark/90 backdrop-blur-md border-b border-industrial-slate py-3 shadow-lg"
          : "bg-transparent py-5"
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between">
          
          {/* Logo Brand Block */}
          <div className="flex items-center gap-3">
            <img src="/epcx-logo-white.png" alt="EPCX Logo" className="h-9 w-auto object-contain" />
            <span
              className="text-2xl select-none tracking-wide uppercase"
              style={{ fontFamily: "\"Brigends\", sans-serif", letterSpacing: "0.1em" }}
            >
              <span className="text-white">EPC</span>
              <span className="text-industrial-lime">X</span>
            </span>
          </div>

          {/* Desktop Navigation Links */}
          <nav className="hidden md:flex items-center gap-8">
            <a
              href="#problems"
              onClick={(e) => handleNavClick(e, "problems")}
              className="text-xs uppercase font-technical tracking-widest text-industrial-silver hover:text-white transition-colors"
            >
              / Pain-points
            </a>
            <a
              href="#capabilities"
              onClick={(e) => handleNavClick(e, "capabilities")}
              className="text-xs uppercase font-technical tracking-widest text-industrial-silver hover:text-white transition-colors"
            >
              / Capabilities
            </a>
            <a
              href="#deployment"
              onClick={(e) => handleNavClick(e, "deployment")}
              className="text-xs uppercase font-technical tracking-widest text-industrial-silver hover:text-white transition-colors"
            >
              / Deployment
            </a>
            <a
              href="#dashboard"
              onClick={(e) => handleNavClick(e, "dashboard")}
              className="text-xs uppercase font-technical tracking-widest text-industrial-silver hover:text-white transition-colors"
            >
              / Command-Center
            </a>
            <a
              href="#benefits"
              onClick={(e) => handleNavClick(e, "benefits")}
              className="text-xs uppercase font-technical tracking-widest text-industrial-silver hover:text-white transition-colors"
            >
              / Outcomes
            </a>
          </nav>

          {/* Right Action Block */}
          <div className="hidden md:flex items-center gap-4">
            <div className="flex items-center gap-1.5 px-3 py-1 bg-industrial-slate/40 border border-industrial-slate rounded-sm text-[10px] uppercase font-technical tracking-widest text-white">
              <span className="w-1.5 h-1.5 rounded-full bg-feedback-success status-active"></span>
              Deploy Ready
            </div>
            
            <a
              href="#demo"
              onClick={(e) => handleNavClick(e, "demo")}
              className="px-4 py-2 border border-industrial-lime bg-industrial-lime text-industrial-dark font-technical font-bold text-xs uppercase tracking-widest hover:bg-transparent hover:text-industrial-lime transition-all duration-300 rounded-sm inline-flex items-center gap-2"
            >
              Request Demo
              <ArrowUpRight className="w-3.5 h-3.5" />
            </a>
          </div>

          {/* Mobile Menu Button */}
          <div className="md:hidden">
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="text-white hover:text-industrial-lime transition-colors p-2"
              aria-label="Toggle menu"
            >
              {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>

        </div>
      </div>

      {/* Mobile Drawer Menu */}
      {mobileMenuOpen && (
        <div className="md:hidden bg-industrial-dark border-t border-industrial-slate px-4 pt-4 pb-6 space-y-4">
          <nav className="flex flex-col gap-4">
            <a
              href="#problems"
              onClick={(e) => handleNavClick(e, "problems")}
              className="text-sm uppercase font-technical tracking-widest text-industrial-silver py-2 border-b border-industrial-slate/40"
            >
              Pain-points
            </a>
            <a
              href="#capabilities"
              onClick={(e) => handleNavClick(e, "capabilities")}
              className="text-sm uppercase font-technical tracking-widest text-industrial-silver py-2 border-b border-industrial-slate/40"
            >
              Capabilities
            </a>
            <a
              href="#deployment"
              onClick={(e) => handleNavClick(e, "deployment")}
              className="text-sm uppercase font-technical tracking-widest text-industrial-silver py-2 border-b border-industrial-slate/40"
            >
              Deployment
            </a>
            <a
              href="#dashboard"
              onClick={(e) => handleNavClick(e, "dashboard")}
              className="text-sm uppercase font-technical tracking-widest text-industrial-silver py-2 border-b border-industrial-slate/40"
            >
              Command-Center
            </a>
            <a
              href="#benefits"
              onClick={(e) => handleNavClick(e, "benefits")}
              className="text-sm uppercase font-technical tracking-widest text-industrial-silver py-2 border-b border-industrial-slate/40"
            >
              Outcomes
            </a>
          </nav>
          
          <div className="pt-4 flex flex-col gap-4">
            <div className="flex items-center justify-center gap-1.5 py-2 bg-industrial-slate border border-industrial-slate rounded-sm text-xs uppercase font-technical tracking-widest text-white">
              <span className="w-1.5 h-1.5 rounded-full bg-feedback-success status-active"></span>
              Deploy Ready v1.4.8
            </div>
            <a
              href="#demo"
              onClick={(e) => handleNavClick(e, "demo")}
              className="w-full text-center py-3 border border-industrial-lime bg-industrial-lime text-industrial-dark font-technical font-bold text-sm uppercase tracking-widest rounded-sm"
            >
              Request Demo
            </a>
          </div>
        </div>
      )}
    </header>
  );
}
