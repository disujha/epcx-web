"use client";

import { motion } from "framer-motion";
import { 
  Smartphone, Monitor, RefreshCw, Radio, Server, ShieldCheck, 
  MapPin, CheckCircle, ChevronRight, CalendarClock, ShieldAlert
} from "lucide-react";

// Implementation steps
const TIMELINE = [
  { day: "Day 01-03", title: "Site Register Mapping", desc: "Our deployment team maps existing sub-contractors, worker databases, compliance PF structures, and zones." },
  { day: "Day 04-06", title: "Admin Portal Config", desc: "System setup of role permissions, salary formulas, active check-in zones, and compliance approval nodes." },
  { day: "Day 07-10", title: "Field Supervisor Sync", desc: "Rollout of the offline-first mobile app to supervisors. Gate biometric terminals deployed." },
  { day: "Day 11-13", title: "Contractor Onboarding", desc: "Bulk import of contractor rosters, issuance of QR badges, and terminal verification checks." },
  { day: "Day 14", title: "Live Gate Execution", desc: "Platform active. Automated headcount reports, real-time audit streams, and digital salary sheets initialized." },
];

export default function Deployment() {
  return (
    <section id="deployment" className="bg-industrial-dark text-white py-32 border-b border-industrial-slate relative overflow-hidden industrial-grid-dark">
      
      {/* Deployment Environment Atmospheric Background */}
      <div className="absolute inset-0 z-0">
        <motion.img 
          src="/images/deployment.png" 
          alt="" 
          className="absolute inset-0 w-full h-full object-cover opacity-18 mix-blend-overlay"
          style={{ filter: 'contrast(1.15) brightness(0.65) saturate(0.85)' }}
          animate={{
            scale: [1, 1.04, 1],
            opacity: [0.18, 0.2, 0.18]
          }}
          transition={{
            duration: 24,
            repeat: Infinity,
            ease: "easeInOut"
          }}
        />
        <div className="absolute inset-0 bg-gradient-to-br from-industrial-dark/92 via-industrial-dark/88 to-industrial-slate/10" />
      </div>

      {/* Absolute Diagonal Stripes Decorator */}
      <div className="absolute top-0 right-0 w-48 h-1 bg-industrial-lime opacity-30 z-10" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Header */}
        <div className="border-l-4 border-industrial-lime pl-4 md:pl-6 max-w-3xl">
          <span className="font-technical text-xs text-industrial-lime uppercase tracking-widest font-bold block">
            [ FIELD DEPLOYMENT MATURITY ]
          </span>
          <h2 className="font-technical text-3xl md:text-4xl font-bold uppercase tracking-tight text-white mt-2">
            ENGINEERED FOR ACTIVE INDUSTRIAL OPERATIONS
          </h2>
          <p className="mt-4 text-sm text-industrial-silver leading-relaxed font-sans">
            EPCX is built for real industrial environments — high-heat refineries, remote fabrication yards, offshore structures, and low-connectivity sites. Our platform handles workforce management, contractor coordination, and operational reporting where traditional systems fail.
          </p>
        </div>

        {/* 3-Pillars Field Infrastructure Showcase */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 mt-16">
          
          {/* 1. Offline Mobile Supervisor App */}
          <div className="bg-industrial-slate/30 border border-industrial-slate rounded-sm p-6 relative flex flex-col justify-between">
            <div className="absolute top-4 right-4 text-industrial-lime">
              <Smartphone className="w-5 h-5" />
            </div>
            <div>
              <div className="font-technical text-[9px] text-industrial-silver font-mono uppercase tracking-widest">
                INFRASTRUCTURE // 01
              </div>
              <h3 className="font-technical text-sm font-bold uppercase tracking-wide text-white mt-3 flex items-center gap-2">
                Offline-First Field Operations
              </h3>
              <p className="text-xs text-industrial-silver leading-relaxed font-sans mt-3">
                Field supervisors capture attendance, track workforce, and log operations without connectivity. Data queues locally and syncs automatically — ensuring continuous operations in remote sites, refineries, and fabrication yards.
              </p>
              
              {/* Heavy Duty Field Device Mockup */}
              <div className="mt-8 mx-auto w-48 bg-industrial-dark border-4 border-industrial-slate p-3 rounded-xl relative shadow-lg">
                <div className="w-12 h-1 bg-industrial-slate mx-auto rounded-full mb-3" />
                <div className="bg-industrial-slate/40 border border-industrial-slate p-2 rounded-sm text-center">
                  <span className="text-[8px] font-technical font-bold text-industrial-lime uppercase block">EPCX FIELD FORCE v2.1</span>
                  <div className="w-10 h-10 bg-industrial-dark border border-industrial-slate rounded-full mx-auto my-2.5 flex items-center justify-center">
                    <Radio className="w-5 h-5 text-industrial-lime status-active" />
                  </div>
                  <span className="text-[9px] text-white font-mono block">GPS: 24.86° N, 46.72° E</span>
                  <span className="text-[8px] text-feedback-success bg-feedback-success/15 border border-feedback-success/30 px-1 rounded-xs block mt-1">OFFLINE QUEUE: 14 SCANs</span>
                </div>
              </div>
            </div>
            <div className="mt-6 border-t border-industrial-slate/40 pt-3 flex items-center justify-between text-[10px] font-technical text-industrial-silver">
              <span>DEVICE RATING:</span>
              <span className="text-white font-bold">IP68 FIELD COMPLIANT</span>
            </div>
          </div>

          {/* 2. Gate Terminal Sync Nodes */}
          <div className="bg-industrial-slate/30 border border-industrial-slate rounded-sm p-6 relative flex flex-col justify-between">
            <div className="absolute top-4 right-4 text-industrial-lime">
              <RefreshCw className="w-5 h-5" />
            </div>
            <div>
              <div className="font-technical text-[9px] text-industrial-silver font-mono uppercase tracking-widest">
                INFRASTRUCTURE // 02
              </div>
              <h3 className="font-technical text-sm font-bold uppercase tracking-wide text-white mt-3 flex items-center gap-2">
                Unified Workforce Access Control
              </h3>
              <p className="text-xs text-industrial-silver leading-relaxed font-sans mt-3">
                Integrates with RFID turnstiles, QR scanning pillars, and facial recognition tablets. Edge-sync reconciles gate access with contractor databases in 200ms — blocking unverified workers instantly and ensuring only authorized personnel enter site zones.
              </p>

              {/* Edge Node Hardware Visualizer */}
              <div className="mt-8 mx-auto w-48 bg-industrial-dark border border-industrial-slate p-3 rounded-sm relative shadow-lg">
                <div className="flex items-center justify-between text-[7px] font-mono text-industrial-silver border-b border-industrial-slate/50 pb-1.5 mb-2">
                  <span>TERMINAL_ID: T-G04</span>
                  <span className="text-industrial-lime">ONLINE</span>
                </div>
                <div className="space-y-1.5 text-[8px] font-mono">
                  <div className="flex justify-between text-industrial-silver">
                    <span>Active RFID Feeds:</span>
                    <span className="text-white">4 Lanes</span>
                  </div>
                  <div className="flex justify-between text-industrial-silver">
                    <span>Gate Pulse Relay:</span>
                    <span className="text-feedback-success font-bold">NORMAL</span>
                  </div>
                  <div className="flex justify-between text-industrial-silver">
                    <span>Biometric Matcher:</span>
                    <span className="text-white">Active</span>
                  </div>
                </div>
              </div>
            </div>
            <div className="mt-6 border-t border-industrial-slate/40 pt-3 flex items-center justify-between text-[10px] font-technical text-industrial-silver">
              <span>SYNC LATENCY:</span>
              <span className="text-white font-bold">0.2s CLOUD BUFFER</span>
            </div>
          </div>

          {/* 3. Enterprise ERP Integration */}
          <div className="bg-industrial-slate/30 border border-industrial-slate rounded-sm p-6 relative flex flex-col justify-between">
            <div className="absolute top-4 right-4 text-industrial-lime">
              <Server className="w-5 h-5" />
            </div>
            <div>
              <div className="font-technical text-[9px] text-industrial-silver font-mono uppercase tracking-widest">
                INFRASTRUCTURE // 03
              </div>
              <h3 className="font-technical text-sm font-bold uppercase tracking-wide text-white mt-3 flex items-center gap-2">
                Enterprise Operations Integration
              </h3>
              <p className="text-xs text-industrial-silver leading-relaxed font-sans mt-3">
                Eliminate manual data entry. EPCX exports reconciled workforce data, attendance records, and operational reports directly into SAP, Oracle Primavera, and payroll systems — cutting administrative workloads by up to 90%.
              </p>

              {/* Direct Sync UI Mockup */}
              <div className="mt-8 mx-auto w-48 bg-industrial-dark border border-industrial-slate p-3 rounded-sm relative shadow-lg text-[8px] font-mono text-industrial-silver">
                <div className="text-center font-technical text-[8px] text-industrial-silver font-bold uppercase mb-2">ERP DATA SYNC ENGINE</div>
                <div className="space-y-1 border-t border-industrial-slate/40 pt-2">
                  <div className="flex justify-between items-center text-[7px]">
                    <span>SAP Payroll Sync:</span>
                    <span className="text-feedback-success font-bold">CONNECTED</span>
                  </div>
                  <div className="flex justify-between items-center text-[7px]">
                    <span>Primavera P6 Link:</span>
                    <span className="text-feedback-success font-bold">ACTIVE</span>
                  </div>
                  <div className="flex justify-between items-center text-[7px]">
                    <span>Secure Excel Export:</span>
                    <span className="text-white">Ready</span>
                  </div>
                </div>
              </div>
            </div>
            <div className="mt-6 border-t border-industrial-slate/40 pt-3 flex items-center justify-between text-[10px] font-technical text-industrial-silver">
              <span>SECURE PROTOCOL:</span>
              <span className="text-white font-bold">REST API // TLS 1.3</span>
            </div>
          </div>

        </div>

        {/* 14-DAY QUICK IMPLEMENTATION TIMELINE */}
        <div className="mt-24 border-t border-industrial-slate/70 pt-16">
          <div className="max-w-3xl mb-12">
            <span className="font-technical text-xs text-industrial-lime uppercase tracking-widest font-bold block">
              [ RAPID COMMISSIONING FLOW ]
            </span>
            <h3 className="font-technical text-2xl font-bold uppercase tracking-tight text-white mt-2">
              14-DAY COMMISSIONING PROCESS
            </h3>
            <p className="text-xs text-industrial-silver mt-2 font-sans">
              Unlike heavy ERP systems that take 6-12 months to deploy, our dedicated site integration engineering teams map and configure your entire project in exactly 2 weeks.
            </p>
          </div>

          {/* Horizontal timeline cards */}
          <div className="grid grid-cols-1 md:grid-cols-5 gap-4 relative">
            {TIMELINE.map((step, idx) => (
              <motion.div
                key={idx}
                initial={{ opacity: 0, x: -15 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: idx * 0.1 }}
                className="bg-industrial-slate/20 border border-industrial-slate/85 rounded-sm p-4 relative"
              >
                
                {/* Connector Arrow line */}
                {idx < TIMELINE.length - 1 && (
                  <div className="hidden md:block absolute top-1/2 -right-3 transform -translate-y-1/2 z-20">
                    <ChevronRight className="w-5 h-5 text-industrial-lime" />
                  </div>
                )}

                <span className="font-technical text-[10px] font-bold text-industrial-lime uppercase block tracking-wider">
                  {step.day}
                </span>
                
                <h4 className="font-technical text-xs font-bold text-white uppercase mt-2">
                  {step.title}
                </h4>
                
                <p className="text-[10px] text-industrial-silver leading-relaxed font-sans mt-2">
                  {step.desc}
                </p>

              </motion.div>
            ))}
          </div>

          <div className="mt-8 flex items-center justify-center gap-2 bg-industrial-slate/30 border border-industrial-slate p-3 rounded-xs text-[10px] font-technical uppercase max-w-fit mx-auto text-industrial-silver">
            <ShieldCheck className="w-4 h-4 text-feedback-success" />
            <span>Guaranteed Zero Downtime to active site gate operations during commissioning.</span>
          </div>

        </div>

      </div>
    </section>
  );
}
