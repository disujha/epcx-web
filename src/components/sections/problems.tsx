"use client";

import { motion } from "framer-motion";
import { AlertTriangle, Clock, Users, ShieldAlert, FileX, BarChart2, EyeOff, ClipboardCheck } from "lucide-react";

const PROBLEMS = [
  {
    code: "ERR_CODE: 0x401A",
    leak: "Ghost Workforce & Payroll Overpay",
    title: "Manual Attendance Tracking",
    desc: "Paper logbooks and proximity cards allow buddy-punching, ghost hours, and unverified supervisor approvals, leaking 3-7% of overall site payroll.",
    level: "CRITICAL ALERT",
    levelColor: "text-feedback-error border-feedback-error bg-feedback-error/10",
    icon: Clock,
    metric: "4.8% Payroll Leak"
  },
  {
    code: "ERR_CODE: 0x209C",
    leak: "Double-Billing & Margin Compression",
    title: "Contractor Coordination Chaos",
    desc: "Managing multiple sub-contractors on differing site hours leads to duplicate billing, unapproved overtime, and intense reconciliation delays.",
    level: "WARNING LEVEL 2",
    levelColor: "text-feedback-warning border-feedback-warning bg-feedback-warning/10",
    icon: Users,
    metric: "12-14 Subcontractors"
  },
  {
    code: "ERR_CODE: 0x884D",
    leak: "Industrial Dispute & Work Stoppage",
    title: "Worker Salary Disputes",
    desc: "Lack of wage calculation transparency leads to regular worker protests and union compliance audits, threatening site operations and schedule timelines.",
    level: "CRITICAL ALERT",
    levelColor: "text-feedback-error border-feedback-error bg-feedback-error/10",
    icon: ShieldAlert,
    metric: "High Project Risk"
  },
  {
    code: "ERR_CODE: 0x1102",
    leak: "Non-Compliant Records & Liability",
    title: "Fragmented Field Records",
    desc: "Worker safety compliance, onboarding records, and timesheets are spread across filing cabinets, scattered emails, and local spreadsheets.",
    level: "WARNING LEVEL 2",
    levelColor: "text-feedback-warning border-feedback-warning bg-feedback-warning/10",
    icon: FileX,
    metric: "Audit Non-Compliance"
  },
  {
    code: "ERR_CODE: 0x9043",
    leak: "Decision Lag & Schedule Slippage",
    title: "Delayed Reporting & Analytics",
    desc: "Compiling man-hours and headcounts takes 3-7 days. Decision-makers operate on outdated telemetry, missing schedule delay indicators.",
    level: "WARNING LEVEL 2",
    levelColor: "text-feedback-warning border-feedback-warning bg-feedback-warning/10",
    icon: BarChart2,
    metric: "4-Day Telemetry Lag"
  },
  {
    code: "ERR_CODE: 0x303B",
    leak: "Uncontrolled Overtime & Blindspots",
    title: "Lack of Workforce Visibility",
    desc: "Operations managers cannot verify who is currently inside high-risk zones, fabricating in the yard, or deployed on the structural ring in real-time.",
    level: "CRITICAL ALERT",
    levelColor: "text-feedback-error border-feedback-error bg-feedback-error/10",
    icon: EyeOff,
    metric: "Zero Zone Telemetry"
  },
  {
    code: "ERR_CODE: 0x5109",
    leak: "Regulatory Penalty & Fine Exposure",
    title: "Audit & Compliance Difficulties",
    desc: "Satisfying labor commission laws, PF/ESIC records, and contractor insurance criteria takes weeks of panic-driven file preparation.",
    level: "CRITICAL ALERT",
    levelColor: "text-feedback-error border-feedback-error bg-feedback-error/10",
    icon: ClipboardCheck,
    metric: "L-1 Regulation Risk"
  },
  {
    code: "ERR_CODE: 0x73B1",
    leak: "Administrative Bottleneck",
    title: "Paper-based Work Approvals",
    desc: "Field variation sheets, site transfers, and payroll approvals sit on clipboards waiting for physical signatures, stalling operational rhythm.",
    level: "WARNING LEVEL 2",
    levelColor: "text-feedback-warning border-feedback-warning bg-feedback-warning/10",
    icon: AlertTriangle,
    metric: "72h Approval Bottleneck"
  }
];

export default function Problems() {
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

  return (
    <section id="problems" className="bg-industrial-dark text-white py-24 border-b border-industrial-slate relative overflow-hidden industrial-grid-dark">
      
      {/* Decorative Corner Framing */}
      <div className="absolute top-0 left-0 w-32 h-32 border-t border-l border-industrial-slate/40 pointer-events-none" />
      <div className="absolute bottom-0 right-0 w-32 h-32 border-b border-r border-industrial-slate/40 pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Header */}
        <div className="border-l-4 border-feedback-error pl-4 md:pl-6 max-w-3xl">
          <span className="font-technical text-xs text-feedback-error uppercase tracking-widest font-bold block">
            [ SITE OPERATIONAL LIABILITIES ]
          </span>
          <h2 className="font-technical text-3xl md:text-4xl font-bold uppercase tracking-tight text-white mt-2">
            THE ANARCHY OF ANALOG SITE OPERATIONS
          </h2>
          <p className="mt-4 text-sm text-industrial-silver leading-relaxed font-sans">
            Heavy engineering, construction, and turnaround shutdowns fail due to operations blindspots. Paper records, legacy card scanners, and excel files hide deep commercial leakage, contractor overcharges, and audit vulnerabilities.
          </p>
        </div>

        {/* Warning Indicator / Threat Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mt-16">
          {PROBLEMS.map((prob, idx) => {
            const IconComponent = prob.icon;
            const isCritical = prob.level.includes("CRITICAL");
            
            return (
              <motion.div
                key={idx}
                initial={{ opacity: 0, y: 15 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-100px" }}
                transition={{ duration: 0.4, delay: idx * 0.05 }}
                whileHover={{ y: -4, borderColor: isCritical ? "#ef4444" : "#f59e0b" }}
                className="bg-industrial-dark/85 border border-industrial-slate/70 p-5 rounded-sm flex flex-col justify-between relative overflow-hidden transition-all duration-300"
              >
                
                {/* Visual Alert LED indicator top-right */}
                <div className="absolute top-4 right-4 flex items-center gap-1.5">
                  <span className={`w-2 h-2 rounded-full status-active ${isCritical ? "bg-feedback-error shadow-[0_0_8px_#ef4444]" : "bg-feedback-warning shadow-[0_0_8px_#f59e0b]"}`}></span>
                </div>

                <div>
                  
                  {/* Hexadecimal Telemetry Code */}
                  <span className="font-technical text-[9px] text-industrial-silver tracking-widest block font-mono">
                    {prob.code}
                  </span>

                  {/* Operational Risk Badge */}
                  <span className={`inline-block border font-technical text-[9px] tracking-widest font-bold px-2 py-0.5 mt-2 rounded-xs uppercase ${prob.levelColor}`}>
                    {prob.level}
                  </span>

                  {/* Header Title */}
                  <h3 className="font-technical text-sm font-bold uppercase text-white tracking-wide mt-4 flex items-center gap-2">
                    <IconComponent className={`w-4.5 h-4.5 ${isCritical ? "text-feedback-error" : "text-feedback-warning"}`} />
                    {prob.title}
                  </h3>

                  {/* Threat Description */}
                  <p className="text-xs text-industrial-silver leading-relaxed font-sans mt-3">
                    {prob.desc}
                  </p>

                </div>

                {/* Economic/Incident Cost Muted Telemetry Footer */}
                <div className="mt-6 border-t border-industrial-slate/50 pt-3 flex items-center justify-between text-[10px] font-technical tracking-wide">
                  <span className="text-industrial-silver uppercase">LEAK METRIC:</span>
                  <span className={`font-bold ${isCritical ? "text-feedback-error" : "text-feedback-warning"}`}>
                    {prob.metric}
                  </span>
                </div>

              </motion.div>
            );
          })}
        </div>

        {/* Dynamic Threat Analysis Warning Ribbon */}
        <div className="mt-12 bg-feedback-error/5 border border-feedback-error/20 p-4 rounded-sm flex flex-col sm:flex-row items-center justify-between gap-4">
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 bg-feedback-error/15 border border-feedback-error flex items-center justify-center rounded-xs flex-shrink-0">
              <AlertTriangle className="w-5 h-5 text-feedback-error" />
            </div>
            <div>
              <span className="font-technical text-xs font-bold text-white uppercase tracking-wider block">
                AGGREGATED OPERATIONAL HEADCOUNT LOSS WARNING
              </span>
              <p className="text-[11px] text-industrial-silver font-sans mt-0.5">
                Calculations based on average EPC site reports show that an unmonitored workforce leaks $120,000+ per 500 workers annually through simple timesheet rounding and verification gaps.
              </p>
            </div>
          </div>
          <button
            onClick={() => handleScrollTo("demo")}
            className="px-4 py-2 bg-feedback-error text-white font-technical font-bold text-[10px] uppercase tracking-widest rounded-xs hover:bg-feedback-error/95 transition-colors flex-shrink-0"
          >
            Run Leak Audit
          </button>
        </div>

      </div>
    </section>
  );
}
