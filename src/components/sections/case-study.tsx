"use client";

import { motion } from "framer-motion";
import { Clock, BarChart2, FolderOpen, Users, MapPin, CheckCircle, XCircle } from "lucide-react";

const METRIC_CARDS = [
  {
    label: "DPR Preparation",
    value: "3 hrs → 30 sec",
    desc: "AI extracts piping data from field photos automatically",
    icon: Clock,
  },
  {
    label: "Data Accuracy",
    value: "85%+ Confidence",
    desc: "AI-verified spool numbers, inch-dia, activity types",
    icon: BarChart2,
  },
  {
    label: "Drawings Tracked",
    value: "ISO + Line-list",
    desc: "Digital drawing register with revision management",
    icon: FolderOpen,
  },
  {
    label: "Manpower Logged",
    value: "Shift A + B",
    desc: "Daily attendance by shift, contractor and sub-contractor",
    icon: Users,
  },
];

export default function CaseStudy() {
  return (
    <section className="bg-background-light py-24 border-b border-industrial-silver relative overflow-hidden industrial-grid">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">

        {/* Section Header */}
        <div className="mb-12">
          <span className="font-technical text-xs text-industrial-lime uppercase tracking-widest font-bold">
            [ LIVE DEPLOYMENT — CASE STUDY ]
          </span>
          <h2 className="font-technical text-3xl md:text-4xl font-bold uppercase tracking-tight text-industrial-dark mt-3">
            PEC Petrochem Engineering Construction
          </h2>
          <p className="mt-3 text-sm text-industrial-dark/70 font-sans max-w-2xl">
            India&apos;s First EPC Project Running on EPCX — Piping Fabrication &amp; Erection
          </p>
        </div>

        {/* Two-column layout */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">

          {/* LEFT COL — Project Context Card */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="lg:col-span-5"
          >
            <div className="bg-industrial-dark text-white border border-industrial-slate rounded-sm p-6 corner-brackets h-full">

              {/* Project Label */}
              <div className="inline-flex items-center gap-2 mb-4">
                <span className="text-[9px] font-technical uppercase tracking-widest text-industrial-silver bg-industrial-slate/50 border border-industrial-slate px-2 py-0.5 rounded-xs">
                  ACTIVE PROJECT
                </span>
              </div>

              {/* Client */}
              <h3 className="font-technical text-sm font-bold uppercase tracking-tight text-white leading-snug mb-4">
                PEC Petrochem Engineering Construction
              </h3>

              {/* Work Type Tags */}
              <div className="flex flex-wrap gap-2 mb-4">
                {["PIPING", "FITUP", "WELDING", "ERECTION"].map((tag) => (
                  <span
                    key={tag}
                    className="text-[9px] font-technical font-bold uppercase tracking-widest text-industrial-lime bg-industrial-lime/20 border border-industrial-lime/30 px-2 py-0.5 rounded-xs"
                  >
                    {tag}
                  </span>
                ))}
              </div>

              {/* Location */}
              <div className="flex items-center gap-2 mb-4 text-industrial-silver">
                <MapPin className="w-3.5 h-3.5 text-industrial-silver" />
                <span className="text-[10px] font-technical uppercase tracking-wider">India</span>
              </div>

              {/* Status */}
              <div className="flex items-center gap-2 mb-6">
                <span className="w-1.5 h-1.5 rounded-full bg-feedback-success status-active"></span>
                <span className="text-[10px] font-technical uppercase tracking-widest text-feedback-success font-bold">LIVE ON EPCX</span>
              </div>

              {/* Before vs After */}
              <div className="space-y-3">

                {/* Before */}
                <div className="bg-feedback-error/10 border border-feedback-error/20 rounded-xs p-3">
                  <div className="flex items-center gap-2 mb-2">
                    <XCircle className="w-3.5 h-3.5 text-feedback-error" />
                    <span className="text-[9px] font-technical uppercase tracking-widest text-feedback-error font-bold">Before EPCX</span>
                  </div>
                  <p className="text-[10px] font-sans text-industrial-silver leading-relaxed">
                    WhatsApp group + manual Excel DPRs · 3+ hours/day of data entry · No traceability
                  </p>
                </div>

                {/* After */}
                <div className="bg-feedback-success/10 border border-feedback-success/20 rounded-xs p-3">
                  <div className="flex items-center gap-2 mb-2">
                    <CheckCircle className="w-3.5 h-3.5 text-feedback-success" />
                    <span className="text-[9px] font-technical uppercase tracking-widest text-feedback-success font-bold">After EPCX</span>
                  </div>
                  <p className="text-[10px] font-sans text-industrial-silver leading-relaxed">
                    Field photo → AI extracts DPR in 30 sec · Full audit trail · Live dashboard updated instantly
                  </p>
                </div>

              </div>
            </div>
          </motion.div>

          {/* RIGHT COL — 2x2 Metric Cards */}
          <div className="lg:col-span-7">
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              {METRIC_CARDS.map((card, i) => {
                const Icon = card.icon;
                return (
                  <motion.div
                    key={card.label}
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.4, delay: i * 0.1 }}
                    className="bg-industrial-dark text-white border border-industrial-slate rounded-sm p-5"
                  >
                    {/* Top row: label + icon */}
                    <div className="flex items-center justify-between mb-3">
                      <span className="text-[9px] font-technical uppercase tracking-widest text-industrial-silver font-bold">
                        {card.label}
                      </span>
                      <div className="w-6 h-6 bg-industrial-slate/50 border border-industrial-slate rounded-xs flex items-center justify-center">
                        <Icon className="w-3.5 h-3.5 text-industrial-lime" />
                      </div>
                    </div>

                    {/* Value */}
                    <div className="text-industrial-lime font-technical text-xl font-bold mb-2 leading-tight">
                      {card.value}
                    </div>

                    {/* Description */}
                    <p className="text-xs text-industrial-silver font-sans leading-relaxed">
                      {card.desc}
                    </p>
                  </motion.div>
                );
              })}
            </div>
          </div>

        </div>

        {/* Bottom Banner */}
        <motion.div
          initial={{ opacity: 0, y: 12 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.3 }}
          className="mt-10 bg-industrial-dark border-t border-industrial-slate rounded-sm overflow-hidden"
        >
          <div className="p-4 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-3">
            <p className="text-xs font-sans text-industrial-silver leading-relaxed">
              EPCX is currently deployed and processing daily piping progress data for{" "}
              <span className="text-white font-semibold">PEC Petrochem Engineering Construction.</span>
            </p>
            <div className="flex items-center gap-2 bg-feedback-success/10 border border-feedback-success/30 px-3 py-1 rounded-xs shrink-0">
              <span className="w-1.5 h-1.5 rounded-full bg-feedback-success status-active"></span>
              <span className="text-[9px] font-technical uppercase tracking-widest text-feedback-success font-bold">LIVE</span>
            </div>
          </div>
        </motion.div>

      </div>
    </section>
  );
}
