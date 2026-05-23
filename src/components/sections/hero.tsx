"use client";

import { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Activity, FileText, ChevronRight, Play } from "lucide-react";

// Pool of field updates to cycle through
const FIELD_UPDATES = [
  {
    id: 0,
    supervisor: "Ravi Kumar",
    role: "Supervisor",
    time: "09:14",
    message: 'Today fitup done: Spool 14-A / Line 6" DPR attached as photo',
    classification: "AI CLASSIFICATION: ACTIVITY / PIPING",
    extracted: [
      { label: "Spool No", value: "14-A" },
      { label: "Line Number", value: "P-0614" },
      { label: "Activity", value: "FITUP", highlight: true },
      { label: "Inch Dia", value: "8.5 ID" },
    ],
    confidence: 91,
    file: "DPR_0523.jpg",
  },
  {
    id: 1,
    supervisor: "Arun Sharma",
    role: "Field Insp.",
    time: "10:32",
    message: 'Welding completed: Spool 22-B / Line 4" joint pass OK',
    classification: "AI CLASSIFICATION: ACTIVITY / WELDING",
    extracted: [
      { label: "Spool No", value: "22-B" },
      { label: "Line Number", value: "P-0422" },
      { label: "Activity", value: "WELDING", highlight: true },
      { label: "Inch Dia", value: "6.0 ID" },
    ],
    confidence: 88,
    file: "DPR_0841.jpg",
  },
  {
    id: 2,
    supervisor: "Deepak Nair",
    role: "Sr. Supervisor",
    time: "11:47",
    message: 'Erection done: Spool 9-C / Rack-3 lift completed, 10" line',
    classification: "AI CLASSIFICATION: ACTIVITY / ERECTION",
    extracted: [
      { label: "Spool No", value: "9-C" },
      { label: "Line Number", value: "P-0310" },
      { label: "Activity", value: "ERECTION", highlight: true },
      { label: "Inch Dia", value: "10.0 ID" },
    ],
    confidence: 94,
    file: "DPR_1102.jpg",
  },
];

export default function Hero() {
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % FIELD_UPDATES.length);
    }, 5000);
    return () => clearInterval(interval);
  }, []);

  const handleScrollTo = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      const offset = 80;
      const bodyRect = document.body.getBoundingClientRect().top;
      const elementRect = element.getBoundingClientRect().top;
      const elementPosition = elementRect - bodyRect;
      const offsetPosition = elementPosition - offset;

      window.scrollTo({
        top: offsetPosition,
        behavior: "smooth",
      });
    }
  };

  const update = FIELD_UPDATES[currentIndex];

  return (
    <section className="relative min-h-screen bg-industrial-dark text-white pt-28 pb-16 flex items-center overflow-hidden industrial-grid-dark">

      {/* Atmospheric Industrial Background Layer */}
      <div className="absolute inset-0 z-0">
        <div className="absolute inset-0 bg-gradient-to-br from-industrial-dark via-industrial-dark/95 to-industrial-dark/90" />
        <motion.img 
          src="/images/hero.png" 
          alt="" 
          className="absolute inset-0 w-full h-full object-cover opacity-20 mix-blend-luminosity"
          style={{ filter: 'contrast(1.1) brightness(0.7)' }}
          animate={{
            scale: [1, 1.05, 1],
            opacity: [0.2, 0.22, 0.2]
          }}
          transition={{
            duration: 20,
            repeat: Infinity,
            ease: "easeInOut"
          }}
        />
        <div className="absolute inset-0 bg-gradient-to-t from-industrial-dark/80 via-transparent to-industrial-dark/60" />
        <div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNDAiIGhlaWdodD0iNDAiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+PGRlZnM+PHBhdHRlcm4gaWQ9ImdyaWQiIHdpZHRoPSI0MCIgaGVpZ2h0PSI0MCIgcGF0dGVyblVuaXRzPSJ1c2VyU3BhY2VPblVzZSI+PHBhdGggZD0iTTAgNDBMMDQwIDBIMCIgZmlsbD0ibm9uZSIgc3Ryb2tlPSJyZ2JhKDQ1LCA0NSwgNDUsIDAuMDMpIiBzdHJva2Utd2lkdGg9IjEiLz48L3BhdHRlcm4+PC9kZWZzPjxyZWN0IHdpZHRoPSIxMDAlIiBoZWlnaHQ9IjEwMCUiIGZpbGw9InVybCgjZ3JpZCkiLz48L3N2Zz4=')] opacity-30" />
      </div>

      {/* Decorative Top Left warning label */}
      <div className="absolute top-24 left-8 hidden lg:flex items-center gap-2 border-l-2 border-industrial-lime pl-3 text-[10px] uppercase font-technical text-industrial-silver tracking-widest z-20">
        <span>Platform State: Stable</span>
        <span className="w-1.5 h-1.5 rounded-full bg-feedback-success status-active"></span>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 w-full">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 items-center">

          {/* LEFT SIDE */}
          <div className="lg:col-span-6 flex flex-col justify-center">

            <div className="inline-flex items-center gap-2 px-3 py-1 bg-industrial-slate/50 border border-industrial-slate rounded-sm max-w-fit mb-6">
              <span className="text-[10px] uppercase font-technical text-industrial-lime tracking-widest font-semibold">
                [ ENTERPRISE OPERATIONS INTELLIGENCE ]
              </span>
            </div>

            <h1 className="font-technical text-4xl sm:text-5xl lg:text-6xl font-bold uppercase tracking-tight leading-[1.05] text-white">
              Industrial Workforce <br />
              <span className="text-industrial-lime">& Site Operations Platform</span>
            </h1>

            <p className="mt-6 text-sm sm:text-base text-industrial-silver leading-relaxed max-w-xl font-sans">
              Replace manual site operations with real-time workforce intelligence. Track attendance, coordinate contractors, ensure salary transparency, and generate industrial reports — all from one unified platform.
            </p>

            <div className="mt-8 flex flex-wrap gap-4">
              <button
                onClick={() => handleScrollTo("demo")}
                className="px-6 py-3 border border-industrial-lime bg-industrial-lime text-industrial-dark font-technical font-bold text-xs uppercase tracking-widest hover:bg-transparent hover:text-industrial-lime transition-all duration-300 rounded-sm inline-flex items-center gap-2 btn-industrial shadow-lg"
              >
                Request Demo
                <ChevronRight className="w-4 h-4" />
              </button>

              <button
                onClick={() => handleScrollTo("dashboard")}
                className="px-6 py-3 border border-industrial-slate bg-industrial-slate/40 text-white font-technical font-semibold text-xs uppercase tracking-widest hover:border-white transition-all duration-300 rounded-sm inline-flex items-center gap-2"
              >
                View Platform
                <Play className="w-3.5 h-3.5 fill-current text-white" />
              </button>
            </div>

            {/* Quick Metrics Bar */}
            <div className="mt-12 grid grid-cols-3 gap-6 border-t border-industrial-slate/60 pt-6">
              <div>
                <span className="text-[10px] font-technical uppercase text-industrial-silver tracking-wider block">Real-Time Workforce Visibility</span>
                <span className="text-xl font-technical font-bold text-white mt-1 block">Live Tracking</span>
              </div>
              <div>
                <span className="text-[10px] font-technical uppercase text-industrial-silver tracking-wider block">Multi-Site Operations</span>
                <span className="text-xl font-technical font-bold text-feedback-success mt-1 block">Unified Control</span>
              </div>
              <div>
                <span className="text-[10px] font-technical uppercase text-industrial-silver tracking-wider block">Deployment Ready</span>
                <span className="text-xl font-technical font-bold text-industrial-lime mt-1 block">14 Days</span>
              </div>
            </div>

          </div>

          {/* RIGHT SIDE: Chat-to-DPR Extraction Mockup */}
          <div className="lg:col-span-6 flex justify-center">
            <div className="w-full max-w-xl glass-panel border border-industrial-slate rounded-sm shadow-2xl overflow-hidden corner-brackets">

              {/* Panel Header */}
              <div className="bg-industrial-slate/70 border-b border-industrial-slate px-4 py-3 flex items-center justify-between">
                <div className="flex items-center gap-2">
                  <Activity className="w-4 h-4 text-industrial-lime" />
                  <span className="font-technical text-[10px] font-bold uppercase tracking-wider text-white">
                    LIVE OPERATIONS FEED
                  </span>
                </div>
                <div className="flex items-center gap-2 bg-industrial-dark px-2 py-0.5 border border-industrial-slate/85 rounded-sm">
                  <span className="w-1.5 h-1.5 rounded-full bg-feedback-success status-active"></span>
                  <span className="font-technical text-[9px] text-industrial-lime tracking-widest font-semibold uppercase">LIVE</span>
                </div>
              </div>

              {/* Chat Bubble Area */}
              <div className="p-4 border-b border-industrial-slate/60 min-h-[148px] relative overflow-hidden">
                <AnimatePresence mode="wait">
                  <motion.div
                    key={update.id}
                    initial={{ opacity: 0, y: 12 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: -12 }}
                    transition={{ duration: 0.4 }}
                    className="space-y-2"
                  >
                    {/* Chat Bubble — Field Supervisor */}
                    <div className="bg-industrial-dark border border-industrial-slate rounded-xs p-3 max-w-[90%]">
                      <div className="text-[9px] font-technical text-industrial-silver mb-1 tracking-wider">
                        {update.supervisor} · {update.role} · {update.time}
                      </div>
                      <p className="text-[11px] text-white font-sans leading-snug">{update.message}</p>
                      {/* Image placeholder */}
                      <div className="w-full h-12 bg-industrial-slate/50 border border-industrial-slate rounded-xs flex items-center justify-center gap-2 mt-2">
                        <FileText className="w-3.5 h-3.5 text-industrial-silver" />
                        <span className="text-[9px] font-technical text-industrial-silver tracking-wider">{update.file}</span>
                      </div>
                    </div>

                    {/* AI Classification Row */}
                    <div className="flex items-center gap-1.5 pl-1">
                      <span className="text-[9px] font-technical text-industrial-lime tracking-widest uppercase">
                        → {update.classification.replace("AI CLASSIFICATION: ", "")}
                      </span>
                    </div>
                  </motion.div>
                </AnimatePresence>
              </div>

              {/* Extracted Operations Data */}
              <div className="p-4">
                <div className="text-[9px] font-technical uppercase tracking-widest text-industrial-silver mb-3">
                  EXTRACTED OPERATIONS DATA
                </div>

                <AnimatePresence mode="wait">
                  <motion.div
                    key={`table-${update.id}`}
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    exit={{ opacity: 0 }}
                    transition={{ duration: 0.35 }}
                    className="space-y-1.5"
                  >
                    {update.extracted.map((row) => (
                      <div
                        key={row.label}
                        className="flex items-center justify-between bg-industrial-dark/60 border border-industrial-slate/50 px-3 py-1.5 rounded-xs"
                      >
                        <span className="text-[9px] font-technical uppercase tracking-wider text-industrial-silver">{row.label}</span>
                        {row.highlight ? (
                          <span className="text-[9px] font-technical font-bold text-industrial-lime bg-industrial-lime/20 border border-industrial-lime/30 px-2 py-0.5 rounded-xs tracking-wider">
                            {row.value}
                          </span>
                        ) : (
                          <span className="text-[10px] font-technical font-bold text-white">{row.value}</span>
                        )}
                      </div>
                    ))}

                    {/* Confidence Indicator */}
                    <div className="mt-3 pt-2 border-t border-industrial-slate/40">
                      <div className="flex items-center justify-between mb-1.5">
                        <span className="text-[9px] font-technical uppercase tracking-widest text-industrial-silver">AI CONFIDENCE</span>
                        <span className="text-[9px] font-technical font-bold text-industrial-lime">{update.confidence}%</span>
                      </div>
                      <div className="w-full h-1 bg-industrial-slate/50 rounded-xs overflow-hidden">
                        <motion.div
                          key={`bar-${update.id}`}
                          initial={{ width: 0 }}
                          animate={{ width: `${update.confidence}%` }}
                          transition={{ duration: 0.6, ease: "easeOut" }}
                          className="h-full bg-industrial-lime rounded-xs"
                        />
                      </div>
                    </div>
                  </motion.div>
                </AnimatePresence>
              </div>

              {/* Bottom Strip */}
              <div className="bg-industrial-dark border-t border-industrial-slate p-3 px-4 flex items-center justify-between text-[9px] font-technical tracking-wider text-industrial-silver">
                <div className="flex items-center gap-1.5">
                  <span className="w-1.5 h-1.5 bg-feedback-success rounded-full"></span>
                  <span>AES-256 SECURED</span>
                </div>
                <div className="flex items-center gap-2">
                  <span>LATENCY: 38MS</span>
                  <span className="w-1 h-1 bg-industrial-silver rounded-full"></span>
                  <span>SYNC: FIRESTORE</span>
                </div>
              </div>

            </div>
          </div>

        </div>
      </div>

      {/* Absolute Diagonal Warning Stripes Decorator */}
      <div className="absolute bottom-0 right-0 left-0 h-1.5 bg-stripes pointer-events-none opacity-20" />
    </section>
  );
}
