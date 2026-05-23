"use client";

import { motion } from "framer-motion";
import { Wrench, Building2, RotateCcw, Factory, Blocks, Users } from "lucide-react";

const WORK_TYPES = [
  {
    id: "piping",
    tag: "WORK_TYPE_01",
    title: "Piping Fabrication & Erection",
    desc: "Track FITUP, WELDING, and ERECTION progress by spool number and line. AI reads field DPR photos. Cumulative inch-dia and inch-meter totals always up to date.",
    icon: Wrench,
    pills: ["FITUP", "WELDING", "ERECTION", "INCH-DIA"],
  },
  {
    id: "tank",
    tag: "WORK_TYPE_02",
    title: "Tank Erection & Storage",
    desc: "Monitor plate alignment, weld joint progress, roof erection stages, and hydro-test completion. Each stage tracked and linked to drawing revisions.",
    icon: Building2,
    pills: ["PLATES", "WELD JOINTS", "HYDRO TEST"],
  },
  {
    id: "shutdown",
    tag: "WORK_TYPE_03",
    title: "Shutdown / Turnaround",
    desc: "Manage punch lists, isolation certificates, and punch item close-out. Track manpower mobilization and daily progress against shutdown schedule.",
    icon: RotateCcw,
    pills: ["PUNCH LIST", "ISOLATION CERT", "CLOSE-OUT"],
  },
  {
    id: "fabrication",
    tag: "WORK_TYPE_04",
    title: "Heavy Fabrication",
    desc: "Log shop-floor fabrication progress against drawings. Track cutting, fit-up, and welding stages with daily status from the fabrication yard floor.",
    icon: Factory,
    pills: ["SHOP DRAWINGS", "FAB PROGRESS", "WPS TRACKER"],
  },
  {
    id: "civil",
    tag: "WORK_TYPE_05",
    title: "Civil / Infrastructure",
    desc: "Track foundation pours, formwork, rebar placement, and concrete volumes. Manpower and equipment logs captured daily through the field chat interface.",
    icon: Blocks,
    pills: ["FOUNDATION", "REBAR", "CONCRETE VOL"],
  },
  {
    id: "supply",
    tag: "WORK_TYPE_06",
    title: "Supply / Manpower Contracts",
    desc: "Manage supply contractor attendance with photo evidence. Daily manpower count by role, shift, and contractor automatically compiled into reports.",
    icon: Users,
    pills: ["ATTENDANCE", "SHIFT A/B", "DAILY COUNT"],
  },
];

export default function WorkTypes() {
  return (
    <section className="bg-industrial-dark text-white py-24 border-b border-industrial-slate relative overflow-hidden industrial-grid-dark">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">

        {/* Section Header */}
        <div className="max-w-3xl mb-16">
          <span className="font-technical text-xs text-industrial-lime uppercase tracking-widest font-bold block mb-3">
            [ WORK TYPE COVERAGE ]
          </span>
          <h2 className="font-technical text-3xl md:text-4xl font-bold uppercase tracking-tight text-white">
            BUILT FOR EVERY EPC WORK TYPE
          </h2>
          <p className="mt-4 text-sm text-industrial-silver leading-relaxed font-sans max-w-2xl">
            Whether you run piping fabrication, tank erection, or a shutdown turnaround — EPCX tracks progress, manpower, and drawings in the language your field team already uses.
          </p>
        </div>

        {/* Work Type Cards Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
          {WORK_TYPES.map((type, idx) => {
            const Icon = type.icon;
            return (
              <motion.div
                key={type.id}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: idx * 0.08 }}
                className="bg-industrial-slate/20 border border-industrial-slate rounded-sm p-6 hover:border-industrial-lime transition-all duration-300 group"
              >
                {/* Top row: icon + tag */}
                <div className="flex items-start justify-between">
                  <div className="w-10 h-10 bg-industrial-dark border border-industrial-slate group-hover:border-industrial-lime rounded-xs flex items-center justify-center transition-colors duration-300">
                    <Icon className="w-5 h-5 text-industrial-lime" />
                  </div>
                  <span className="text-[8px] font-technical uppercase tracking-widest text-industrial-silver/60 font-bold mt-1">
                    {type.tag}
                  </span>
                </div>

                {/* Title */}
                <h3 className="font-technical text-sm font-bold uppercase tracking-wide text-white mt-4">
                  {type.title}
                </h3>

                {/* Description */}
                <p className="text-xs text-industrial-silver leading-relaxed mt-2 font-sans">
                  {type.desc}
                </p>

                {/* Pill tags */}
                <div className="flex flex-wrap gap-1.5 mt-4">
                  {type.pills.map((pill) => (
                    <span
                      key={pill}
                      className="text-[9px] font-technical uppercase tracking-wider px-2 py-0.5 border border-industrial-slate/60 rounded-xs text-industrial-silver bg-industrial-dark/50"
                    >
                      {pill}
                    </span>
                  ))}
                </div>
              </motion.div>
            );
          })}
        </div>

      </div>
    </section>
  );
}
