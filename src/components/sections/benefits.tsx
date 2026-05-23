"use client";

import { motion } from "framer-motion";
import { 
  TrendingDown, CheckSquare, Zap, Eye, BarChart2, ShieldCheck, XCircle
} from "lucide-react";

const BENEFITS = [
  {
    metric: "-85%",
    label: "Admin Hours Overhead",
    title: "Reduced Manual Administration",
    desc: "By automating gate attendance matching, contractor timesheet mapping, and daily reports, EPCX slashes manual labor times from hours to minutes.",
    icon: TrendingDown
  },
  {
    metric: "100%",
    label: "Wage Transparency",
    title: "Complete Workforce Transparency",
    desc: "Every gate card punch-in, biometric check, and safety clearance is logged cryptographically. Eliminates ghost worker disputes and salary calculation fights.",
    icon: CheckSquare
  },
  {
    metric: "0 Days",
    label: "Reconciliation Delay",
    title: "Faster Salary Reconciliation",
    desc: "Automatic wage computation registers process daily hours alongside contractor commissions, resolving payroll at shifts end with zero billing bottlenecks.",
    icon: Zap
  },
  {
    metric: "Live 24/7",
    label: "Central Site Telemetry",
    title: "Centralized Operational Visibility",
    desc: "Directors can view active headcounts per zone, contractor allocations, and historical productivity logs across all sites via one central tower dashboard.",
    icon: Eye
  },
  {
    metric: "90% Faster",
    label: "Compliance Exporting",
    title: "Improved Reporting Efficiency",
    desc: "Generate government-compliant labor timesheet logs, PF forms, and contractor invoice checklists in seconds, eliminating audit-prep panic.",
    icon: BarChart2
  },
  {
    metric: "10x Ready",
    label: "Multi-site Scalability",
    title: "Scalable Site Operations",
    desc: "Scale from 500 workers on 1 site to 15,000 workers across 20 distinct assets using our cloud-based multi-tier architecture with zero performance degradation.",
    icon: ShieldCheck
  }
];

export default function Benefits() {
  return (
    <section id="benefits" className="bg-industrial-dark text-white py-32 border-b border-industrial-slate relative overflow-hidden industrial-grid-dark">
      
      {/* Decorative corners */}
      <div className="absolute top-0 right-0 w-24 h-24 border-r border-t border-industrial-slate/40 pointer-events-none" />
      <div className="absolute bottom-0 left-0 w-24 h-24 border-l border-b border-industrial-slate/40 pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Header */}
        <div className="border-l-4 border-industrial-lime pl-4 md:pl-6 max-w-3xl mb-12">
          <span className="font-technical text-xs text-industrial-lime uppercase tracking-widest font-bold block">
            [ ECONOMIC & OPERATIONAL OUTCOMES ]
          </span>
          <h2 className="font-technical text-3xl md:text-4xl font-bold uppercase tracking-tight text-white mt-3">
            MEASURABLE FIELD OPERATING RESULTS
          </h2>
          <p className="mt-5 text-sm text-industrial-silver leading-relaxed font-sans max-w-2xl">
            EPCX replaces operations chaos with structured, highly credible telemetry. Discover the clear, field-tested commercial outcomes our platform delivers to owners, operators, and contractors.
          </p>
        </div>

        {/* Before vs After Contrast Banner */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mt-16 border border-industrial-slate rounded-sm overflow-hidden">
          
          {/* Before Column */}
          <div className="bg-industrial-slate/10 p-6 md:p-8 border-b lg:border-b-0 lg:border-r border-industrial-slate">
            <div className="flex items-center gap-2 border-b border-feedback-error/20 pb-4 mb-6">
              <XCircle className="w-5 h-5 text-feedback-error flex-shrink-0" />
              <span className="font-technical text-xs font-bold text-white uppercase tracking-wider">
                ANALOG SITE OPERATIONS (BEFORE EPCX)
              </span>
            </div>
            
            <ul className="space-y-4 text-xs text-industrial-silver font-sans">
              <li className="flex items-start gap-2.5">
                <span className="w-1.5 h-1.5 bg-feedback-error rounded-full mt-1.5 flex-shrink-0" />
                <span>Supervisors take 2 hours per shift compiling manual paper logbooks.</span>
              </li>
              <li className="flex items-start gap-2.5">
                <span className="w-1.5 h-1.5 bg-feedback-error rounded-full mt-1.5 flex-shrink-0" />
                <span> buddy-punching and ghost hours leak 4-6% of site payroll.</span>
              </li>
              <li className="flex items-start gap-2.5">
                <span className="w-1.5 h-1.5 bg-feedback-error rounded-full mt-1.5 flex-shrink-0" />
                <span>Contractor disputes take weeks to resolve at end-of-month, stalling progress.</span>
              </li>
              <li className="flex items-start gap-2.5">
                <span className="w-1.5 h-1.5 bg-feedback-error rounded-full mt-1.5 flex-shrink-0" />
                <span>Safety compliance safety audits cause panic due to scattered records.</span>
              </li>
            </ul>
          </div>

          {/* After Column */}
          <div className="bg-industrial-slate/35 p-6 md:p-8">
            <div className="flex items-center gap-2 border-b border-industrial-lime/20 pb-4 mb-6">
              <ShieldCheck className="w-5 h-5 text-industrial-lime flex-shrink-0" />
              <span className="font-technical text-xs font-bold text-white uppercase tracking-wider">
                AUTOMATED SITE OPERATIONS (WITH EPCX)
              </span>
            </div>
            
            <ul className="space-y-4 text-xs text-industrial-silver font-sans">
              <li className="flex items-start gap-2.5">
                <span className="w-1.5 h-1.5 bg-industrial-lime rounded-full mt-1.5 flex-shrink-0" />
                <span>Automated reports compile in 60 seconds at shift end.</span>
              </li>
              <li className="flex items-start gap-2.5">
                <span className="w-1.5 h-1.5 bg-industrial-lime rounded-full mt-1.5 flex-shrink-0" />
                <span>Instant biometric face scans match master contractor records securely.</span>
              </li>
              <li className="flex items-start gap-2.5">
                <span className="w-1.5 h-1.5 bg-industrial-lime rounded-full mt-1.5 flex-shrink-0" />
                <span>Wage reconciliation runs in real-time, matching attendance directly to rates.</span>
              </li>
              <li className="flex items-start gap-2.5">
                <span className="w-1.5 h-1.5 bg-industrial-lime rounded-full mt-1.5 flex-shrink-0" />
                <span>100% safety inductions and compliance forms stored in the secure cloud.</span>
              </li>
            </ul>
          </div>

        </div>

        {/* Benefits Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mt-16">
          {BENEFITS.map((benefit, idx) => {
            const BenefIcon = benefit.icon;
            return (
              <motion.div
                key={idx}
                initial={{ opacity: 0, y: 15 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: idx * 0.05 }}
                className="bg-industrial-slate/20 border border-industrial-slate p-6 rounded-sm relative flex flex-col justify-between"
              >
                <div>
                  
                  {/* Metric Display Block */}
                  <div className="flex items-baseline justify-between border-b border-industrial-slate/40 pb-3 mb-4">
                    <span className="font-technical text-3xl font-extrabold text-industrial-lime tracking-tight">
                      {benefit.metric}
                    </span>
                    <span className="text-[9px] font-technical uppercase text-industrial-silver font-mono">
                      {benefit.label}
                    </span>
                  </div>

                  <h3 className="font-technical text-sm font-bold uppercase text-white tracking-wide flex items-center gap-2">
                    <BenefIcon className="w-4 h-4 text-industrial-lime" />
                    {benefit.title}
                  </h3>
                  
                  <p className="text-xs text-industrial-silver leading-relaxed font-sans mt-3">
                    {benefit.desc}
                  </p>

                </div>
              </motion.div>
            );
          })}
        </div>

      </div>
    </section>
  );
}
