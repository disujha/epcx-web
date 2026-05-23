"use client";

import { motion } from "framer-motion";
import { ArrowRight, CheckCircle, XCircle, TrendingUp, AlertTriangle } from "lucide-react";

const OPERATIONAL_CHALLENGES = [
  {
    title: "Manual Attendance Chaos",
    description: "Paper logbooks, proximity cards, and buddy-punching create ghost workforce and payroll leaks of 3-7%.",
    impact: "High Financial Risk"
  },
  {
    title: "Contractor Coordination Failure",
    description: "Multiple subcontractors on differing hours lead to duplicate billing, unapproved overtime, and reconciliation delays.",
    impact: "Margin Compression"
  },
  {
    title: "No Real-Time Visibility",
    description: "Operations managers cannot verify who is in high-risk zones, fabricating in yards, or deployed on structural rings.",
    impact: "Safety Compliance Risk"
  },
  {
    title: "Reporting Delays",
    description: "Compiling man-hours and headcounts takes 3-7 days. Decision-makers operate on outdated telemetry.",
    impact: "Schedule Slippage"
  }
];

const TRANSFORMATION_METRICS = [
  {
    label: "Workforce Visibility",
    before: "Zero",
    after: "Real-Time",
    icon: TrendingUp
  },
  {
    label: "Reporting Speed",
    before: "3-7 Days",
    after: "Instant",
    icon: TrendingUp
  },
  {
    label: "Contractor Coordination",
    before: "Manual",
    after: "Unified Platform",
    icon: TrendingUp
  },
  {
    label: "Payroll Accuracy",
    before: "93-97%",
    after: "99.9%+",
    icon: TrendingUp
  }
];

export default function OperationalStory() {
  return (
    <section className="bg-background-light py-32 border-b border-industrial-silver relative overflow-hidden industrial-grid">
      
      {/* Transformation Atmospheric Background */}
      <div className="absolute inset-0 z-0">
        <motion.img 
          src="/images/operations.png" 
          alt="" 
          className="absolute inset-0 w-full h-full object-cover opacity-10 mix-blend-multiply"
          style={{ filter: 'contrast(1.1) brightness(1.1) saturate(0.9)' }}
          animate={{
            opacity: [0.1, 0.12, 0.1],
            scale: [1, 1.02, 1]
          }}
          transition={{
            duration: 18,
            repeat: Infinity,
            ease: "easeInOut"
          }}
        />
        <div className="absolute inset-0 bg-gradient-to-br from-white/95 via-white/90 to-industrial-lime/5" />
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Header */}
        <div className="max-w-3xl mb-16">
          <span className="font-technical text-xs text-industrial-lime uppercase tracking-widest font-bold block">
            [ OPERATIONAL TRANSFORMATION ]
          </span>
          <h2 className="font-technical text-3xl md:text-4xl font-bold uppercase tracking-tight text-industrial-dark mt-3">
            How Industrial Operations Currently Fail
          </h2>
          <p className="mt-4 text-sm text-industrial-slate leading-relaxed font-sans">
            Heavy engineering, construction, and turnaround shutdowns struggle with manual operations. Paper records, legacy systems, and fragmented workflows hide deep commercial leakage, contractor overcharges, and audit vulnerabilities.
          </p>
        </div>

        {/* Operational Challenges Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-20">
          {OPERATIONAL_CHALLENGES.map((challenge, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: idx * 0.1 }}
              className="bg-white border border-industrial-silver/50 p-6 rounded-sm"
            >
              <div className="flex items-start gap-3 mb-3">
                <div className="w-10 h-10 bg-feedback-error/10 border border-feedback-error/20 flex items-center justify-center rounded-xs flex-shrink-0">
                  <AlertTriangle className="w-5 h-5 text-feedback-error" />
                </div>
                <div>
                  <h3 className="font-technical text-sm font-bold uppercase tracking-wide text-industrial-dark">
                    {challenge.title}
                  </h3>
                  <span className="text-[10px] font-technical text-feedback-error uppercase tracking-wider block mt-1">
                    {challenge.impact}
                  </span>
                </div>
              </div>
              <p className="text-xs text-industrial-slate leading-relaxed font-sans">
                {challenge.description}
              </p>
            </motion.div>
          ))}
        </div>

        {/* Transformation Section */}
        <div className="bg-industrial-dark text-white p-8 md:p-12 rounded-sm border border-industrial-slate">
          <div className="text-center mb-10">
            <h3 className="font-technical text-2xl md:text-3xl font-bold uppercase tracking-tight text-white">
              EPCX Transforms Operations
            </h3>
            <p className="mt-3 text-sm text-industrial-silver font-sans max-w-2xl mx-auto">
              Replace manual chaos with intelligent automation. From field to dashboard, EPCX provides real-time visibility, unified contractor control, and instant operational reporting.
            </p>
          </div>

          {/* Transformation Metrics */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {TRANSFORMATION_METRICS.map((metric, idx) => {
              const Icon = metric.icon;
              return (
                <motion.div
                  key={idx}
                  initial={{ opacity: 0, scale: 0.95 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.4, delay: idx * 0.1 }}
                  className="bg-industrial-slate/30 border border-industrial-slate p-5 rounded-sm"
                >
                  <div className="flex items-center justify-between mb-3">
                    <span className="text-[10px] font-technical uppercase tracking-wider text-industrial-silver">
                      {metric.label}
                    </span>
                    <Icon className="w-4 h-4 text-industrial-lime" />
                  </div>
                  <div className="flex items-center gap-2 mb-2">
                    <span className="text-sm text-industrial-silver line-through">
                      {metric.before}
                    </span>
                    <ArrowRight className="w-3 h-3 text-industrial-silver" />
                    <span className="text-sm font-bold text-industrial-lime">
                      {metric.after}
                    </span>
                  </div>
                  <div className="w-full h-1 bg-industrial-slate/50 rounded-xs overflow-hidden">
                    <motion.div
                      initial={{ width: 0 }}
                      whileInView={{ width: "100%" }}
                      viewport={{ once: true }}
                      transition={{ duration: 0.8, delay: idx * 0.1 + 0.2 }}
                      className="h-full bg-industrial-lime rounded-xs"
                    />
                  </div>
                </motion.div>
              );
            })}
          </div>

          {/* Bottom CTA */}
          <div className="mt-10 text-center">
            <div className="inline-flex items-center gap-2 bg-feedback-success/10 border border-feedback-success/30 px-4 py-2 rounded-xs">
              <CheckCircle className="w-4 h-4 text-feedback-success" />
              <span className="text-xs font-technical text-feedback-success uppercase tracking-wider">
                Deployed in Active Industrial Environments
              </span>
            </div>
          </div>
        </div>

      </div>
    </section>
  );
}
