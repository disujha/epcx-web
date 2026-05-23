"use client";

import { FileText, ShieldCheck, Cpu, Activity, FolderOpen, Users, Cloud, Radio } from "lucide-react";

const STRIP_ITEMS = [
  { text: "PIPING DPR AUTO-EXTRACTED", icon: FileText, status: "ok" },
  { text: "PEC PETROCHEM — LIVE DEPLOYMENT", icon: ShieldCheck, status: "ok" },
  { text: "AI CONFIDENCE: 85%+ ACCURACY", icon: Cpu, status: "active" },
  { text: "WELDING & FITUP TRACKED LIVE", icon: Activity, status: "ok" },
  { text: "DRAWINGS MANAGED DIGITALLY", icon: FolderOpen, status: "normal" },
  { text: "SHIFT A + B ATTENDANCE LOGGED", icon: Users, status: "ok" },
  { text: "CLOUD-BASED FIELD ACCESS", icon: Cloud, status: "ok" },
  { text: "REAL-TIME AUDIT REPORTING", icon: Radio, status: "active" },
];

export default function TrustStrip() {
  return (
    <div className="bg-industrial-dark border-y border-industrial-slate py-4 overflow-hidden relative select-none">

      {/* Absolute Diagonal Accent Markers */}
      <div className="absolute top-0 left-0 w-2 h-full bg-industrial-lime/80" />
      <div className="absolute top-0 right-0 w-2 h-full bg-industrial-lime/80" />

      {/* Ticker Container using hardware accelerated flex wrap scroll animation */}
      <div className="flex w-max items-center animate-ticker whitespace-nowrap gap-12 px-6">

        {/* Double items array for infinite looping feel */}
        {[...STRIP_ITEMS, ...STRIP_ITEMS, ...STRIP_ITEMS].map((item, idx) => {
          const Icon = item.icon;
          return (
            <div
              key={idx}
              className="inline-flex items-center gap-2.5 font-technical text-xs font-semibold uppercase tracking-widest text-white"
            >
              <div className="w-5 h-5 bg-industrial-slate/40 border border-industrial-slate flex items-center justify-center rounded-xs">
                <Icon className="w-3 h-3 text-industrial-lime" />
              </div>
              <span>{item.text}</span>
              <span className="w-1.5 h-1.5 rounded-full bg-feedback-success status-active mx-2"></span>
              <span className="text-industrial-slate font-normal font-mono select-none">|</span>
            </div>
          );
        })}

      </div>

      <style jsx global>{`
        @keyframes ticker {
          0% {
            transform: translate3d(0, 0, 0);
          }
          100% {
            transform: translate3d(-33.33%, 0, 0);
          }
        }
        .animate-ticker {
          display: flex;
          animation: ticker 25s linear infinite;
        }
        .animate-ticker:hover {
          animation-play-state: paused;
        }
      `}</style>

    </div>
  );
}
