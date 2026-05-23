"use client";

import { Mail, Phone, ChevronUp } from "lucide-react";

const LinkedinIcon = ({ className }: { className?: string }) => (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className={className}>
    <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433a2.062 2.062 0 0 1-2.063-2.065 2.064 2.064 0 1 1 2.063 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/>
  </svg>
);

export default function Footer() {
  const handleScrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth"
    });
  };

  const handleNavClick = (e: React.MouseEvent<HTMLAnchorElement>, id: string) => {
    e.preventDefault();
    const element = document.getElementById(id);
    if (element) {
      const offset = 80;
      const bodyRect = document.body.getBoundingClientRect().top;
      const elementRect = element.getBoundingClientRect().top;
      const elementPosition = elementRect - bodyRect;
      const offsetPosition = elementPosition - offset;

      window.scrollTo({
        top: offsetPosition,
        behavior: "smooth"
      });
    }
  };

  return (
    <footer className="bg-industrial-dark text-white pt-16 pb-8 border-t border-industrial-slate font-sans relative overflow-hidden select-none">
      
      {/* Structural Accent Indicators */}
      <div className="absolute top-0 left-0 w-2.5 h-full bg-industrial-slate/40" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Main Footer Grid */}
        <div className="grid grid-cols-1 md:grid-cols-12 gap-8 border-b border-industrial-slate/60 pb-12">
          
          {/* Column 1: Branding block (col-span-5) */}
          <div className="md:col-span-5 flex flex-col justify-between">
            <div>
              <div className="flex items-center gap-3">
                <img src="/epcx-logo-white.png" alt="EPCX Logo" className="h-10 w-auto object-contain" />
                <div className="flex flex-col">
                  <span
                    className="text-xl uppercase select-none"
                    style={{ fontFamily: '"Brigends", sans-serif', letterSpacing: "0.1em" }}
                  >
                    <span className="text-white">EPC</span>
                    <span className="text-industrial-lime">X</span>
                  </span>
                  <span className="text-[9px] font-technical uppercase tracking-widest text-industrial-lime font-medium -mt-1">
                    OPERATIONAL OS
                  </span>
                </div>
              </div>
              <p className="mt-4 text-xs text-industrial-silver leading-relaxed max-w-sm">
                Enterprise-grade industrial workforce and site operations intelligence platform. Built specifically for EPC contractors, heavy fabrication, shutdowns, and complex engineering environments.
              </p>
            </div>
            
            {/* Social Block */}
            <div className="flex items-center gap-4 mt-6">
              <a
                href="https://linkedin.com"
                target="_blank"
                rel="noopener noreferrer"
                className="w-8 h-8 rounded-xs bg-industrial-slate/50 border border-industrial-slate hover:border-industrial-lime hover:text-industrial-lime transition-all duration-200 flex items-center justify-center text-industrial-silver"
                aria-label="LinkedIn Profile"
              >
                <LinkedinIcon className="w-4 h-4" />
              </a>
              <a
                href="mailto:madhu@epcx.site"
                className="w-8 h-8 rounded-xs bg-industrial-slate/50 border border-industrial-slate hover:border-industrial-lime hover:text-industrial-lime transition-all duration-200 flex items-center justify-center text-industrial-silver"
                aria-label="Email Support"
              >
                <Mail className="w-4.5 h-4.5" />
              </a>
            </div>
          </div>

          {/* Column 2: Platform Jumps (col-span-3) */}
          <div className="md:col-span-3">
            <span className="font-technical text-[10px] text-industrial-lime tracking-widest font-bold block mb-4 uppercase">
              PLATFORM CONSOLE
            </span>
            <ul className="space-y-2.5 text-xs text-industrial-silver font-semibold">
              <li>
                <a href="#problems" onClick={(e) => handleNavClick(e, "problems")} className="hover:text-white transition-colors">
                  / Liabiltes & Leaks
                </a>
              </li>
              <li>
                <a href="#capabilities" onClick={(e) => handleNavClick(e, "capabilities")} className="hover:text-white transition-colors">
                  / System Capabilities
                </a>
              </li>
              <li>
                <a href="#deployment" onClick={(e) => handleNavClick(e, "deployment")} className="hover:text-white transition-colors">
                  / Deployment Readiness
                </a>
              </li>
              <li>
                <a href="#dashboard" onClick={(e) => handleNavClick(e, "dashboard")} className="hover:text-white transition-colors">
                  / Command Dashboard
                </a>
              </li>
              <li>
                <a href="#benefits" onClick={(e) => handleNavClick(e, "benefits")} className="hover:text-white transition-colors">
                  / Financial Outcomes
                </a>
              </li>
            </ul>
          </div>

          {/* Column 3: Contact & Legal Check (col-span-4) */}
          <div className="md:col-span-4 flex flex-col justify-between">
            <div>
              <span className="font-technical text-[10px] text-industrial-lime tracking-widest font-bold block mb-4 uppercase">
                OPERATIONAL CONTACTS
              </span>
              <div className="space-y-2 text-xs text-industrial-silver">
                <p className="flex items-center gap-2">
                  <Mail className="w-4 h-4 text-industrial-lime" />
                  <span>madhu@epcx.site</span>
                </p>
                <p className="flex items-center gap-2">
                  <Phone className="w-4 h-4 text-industrial-lime" />
                  <span>+91 83695 32599</span>
                </p>
              </div>
            </div>

            <div className="mt-6 p-3 bg-industrial-slate/30 border border-industrial-slate rounded-xs text-[9px] font-mono text-industrial-silver">
              <span>SYSTEM: STABLE_BUILD v1.4.8</span> <br />
              <span>COMPLIANT: PF // ESIC // SECURE-REST</span>
            </div>
          </div>

        </div>

        {/* Bottom copyright line and Top-Scroll */}
        <div className="mt-8 flex flex-col sm:flex-row items-center justify-between gap-4 font-mono text-[9px] text-industrial-silver">
          <div>
            © {new Date().getFullYear()} Rethela Technology Pvt Ltd. All enterprise audit rights reserved.
          </div>
          
          <button
            onClick={handleScrollToTop}
            className="flex items-center gap-1 bg-industrial-slate/40 border border-industrial-slate hover:border-industrial-lime hover:text-industrial-lime transition-all duration-200 px-3 py-1.5 rounded-xs uppercase tracking-wider text-[9px] font-technical"
          >
            Scroll to Top
            <ChevronUp className="w-3.5 h-3.5" />
          </button>
        </div>

      </div>
    </footer>
  );
}
