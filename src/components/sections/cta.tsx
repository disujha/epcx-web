"use client";

import { useState } from "react";
import { saveLeadSubmission } from "@/lib/firebase";
import { 
  ShieldCheck, ArrowUpRight, Phone, Mail, MapPin, 
  Send, Loader2, MessageSquare, AlertTriangle, HardHat
} from "lucide-react";

export default function CTA() {
  const [formData, setFormData] = useState({
    name: "",
    company: "",
    projectType: "",
    workforceSize: "",
    primaryInterest: "",
    phone: "",
    email: "",
  });

  const [loading, setLoading] = useState(false);
  const [submitResult, setSubmitResult] = useState<{ success: boolean; message: string; isMock?: boolean } | null>(null);
  const [errors, setErrors] = useState<{ [key: string]: string }>({});

  const validateForm = () => {
    const tempErrors: { [key: string]: string } = {};
    if (!formData.name.trim()) tempErrors.name = "Lead name is required";
    if (!formData.company.trim()) tempErrors.company = "Company identity is required";
    if (!formData.projectType) tempErrors.projectType = "Select a valid project sector";
    if (!formData.workforceSize) tempErrors.workforceSize = "Select active site workforce scale";
    
    // Simple Email Regex
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!formData.email.trim()) {
      tempErrors.email = "Audit contact email is required";
    } else if (!emailRegex.test(formData.email)) {
      tempErrors.email = "Enter a valid enterprise email format";
    }

    // Simple Phone Regex (accepts international formats, min 8 digits)
    const phoneRegex = /^\+?[0-9\s-]{8,20}$/;
    if (!formData.phone.trim()) {
      tempErrors.phone = "Field supervisor contact phone is required";
    } else if (!phoneRegex.test(formData.phone)) {
      tempErrors.phone = "Enter a valid international phone format";
    }

    setErrors(tempErrors);
    return Object.keys(tempErrors).length === 0;
  };

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
    // Clear field-specific error on change
    if (errors[name]) {
      setErrors(prev => {
        const copy = { ...prev };
        delete copy[name];
        return copy;
      });
    }
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitResult(null);

    if (!validateForm()) return;

    setLoading(true);
    try {
      const result = await saveLeadSubmission(formData);
      if (result.success) {
        setSubmitResult({
          success: true,
          message: result.isMock 
            ? "DEMO TELEMETRY COMMITTED (Simulated Offline Mode Successful)" 
            : "DEMO REQUEST TRANSMITTED DIRECTLY TO FIRESTORE",
          isMock: result.isMock
        });
        // Clear form
        setFormData({
          name: "",
          company: "",
          projectType: "",
          workforceSize: "",
          primaryInterest: "",
          phone: "",
          email: "",
        });
      } else {
        throw new Error("Callback returned success = false");
      }
    } catch (err) {
      console.error(err);
      setSubmitResult({
        success: false,
        message: "TRANSMISSION INCIDENT: Critical gateway connection timeout. Check network status."
      });
    } finally {
      setLoading(false);
    }
  };

  return (
    <section id="demo" className="bg-industrial-dark text-white py-24 border-b border-industrial-slate relative overflow-hidden industrial-grid-dark">
      
      {/* Structural Accent Indicators */}
      <div className="absolute top-0 left-0 w-full h-1 bg-stripes pointer-events-none opacity-20" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
          
          {/* LEFT PANEL: Enterprise Contact Info (col-span-5) */}
          <div className="lg:col-span-5 flex flex-col justify-between self-stretch">
            <div>
              <div className="inline-flex items-center gap-2 px-3 py-1 bg-industrial-slate/50 border border-industrial-slate rounded-sm max-w-fit mb-6">
                <span className="text-[10px] uppercase font-technical text-industrial-lime tracking-widest font-semibold">
                  [ DEPLOYMENT REQUEST GATE ]
                </span>
              </div>

              <h2 className="font-technical text-3xl sm:text-4xl font-bold uppercase tracking-tight text-white">
                DEPLOY EPCX IN YOUR <br />
                <span className="text-industrial-lime">NEXT INDUSTRIAL PROJECT</span>
              </h2>

              <p className="mt-6 text-sm text-industrial-silver leading-relaxed font-sans max-w-md">
                Schedule a 20-minute operational walk-through with our site deployment engineering team. We will review your contractor structures, map your site gates, and compile a custom implementation checklist.
              </p>

              {/* Direct Telemetry Touchpoints */}
              <div className="mt-10 space-y-6">
                
                <div className="flex items-start gap-4">
                  <div className="w-10 h-10 bg-industrial-slate/40 border border-industrial-slate flex items-center justify-center rounded-xs flex-shrink-0">
                    <Mail className="w-4.5 h-4.5 text-industrial-lime" />
                  </div>
                  <div>
                    <span className="text-[9px] font-technical uppercase tracking-wider text-industrial-silver block">ENTERPRISE AUDIT EMAIL</span>
                    <a href="mailto:madhu@epcx.site" className="text-sm font-semibold text-white hover:text-industrial-lime transition-colors block mt-0.5 font-sans">
                      madhu@epcx.site
                    </a>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="w-10 h-10 bg-industrial-slate/40 border border-industrial-slate flex items-center justify-center rounded-xs flex-shrink-0">
                    <Phone className="w-4.5 h-4.5 text-industrial-lime" />
                  </div>
                  <div>
                    <span className="text-[9px] font-technical uppercase tracking-wider text-industrial-silver block">OPERATIONAL HELPDESK LINE</span>
                    <a href="tel:+919876543210" className="text-sm font-semibold text-white hover:text-industrial-lime transition-colors block mt-0.5 font-sans">
                      +91 98765 43210
                    </a>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="w-10 h-10 bg-industrial-slate/40 border border-industrial-slate flex items-center justify-center rounded-xs flex-shrink-0">
                    <MapPin className="w-4.5 h-4.5 text-industrial-lime" />
                  </div>
                  <div>
                    <span className="text-[9px] font-technical uppercase tracking-wider text-industrial-silver block">DEPLOYMENT CENTRAL OFFICE</span>
                    <span className="text-xs text-industrial-silver block mt-0.5 font-sans">
                      Sector-4, Heavy Engineering Hub, Navi Mumbai, MH 400703
                    </span>
                  </div>
                </div>

              </div>
            </div>

            {/* Direct WhatsApp Call-to-action button */}
            <div className="mt-12 pt-6 border-t border-industrial-slate/40">
              <span className="text-[10px] font-technical uppercase tracking-wider text-industrial-silver block mb-3">
                URGENT OPERATIONS ASSISTANCE //
              </span>
              <a
                href="https://wa.me/918369532599?text=I%20want%20to%20deploy%20EPCX%20for%20piping%20progress%20tracking%20and%20DPR%20automation%20on%20my%20project.%20Please%20connect%20me%20with%20your%20team."
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2.5 px-5 py-3 bg-feedback-success text-white border border-feedback-success font-technical font-bold text-xs uppercase tracking-widest hover:bg-transparent hover:text-feedback-success transition-all duration-300 rounded-sm"
              >
                <MessageSquare className="w-4 h-4 fill-current" />
                Chat With Site Engineer
                <ArrowUpRight className="w-3.5 h-3.5" />
              </a>
            </div>

          </div>

          {/* RIGHT PANEL: Enterprise Lead Submission Form (col-span-7) */}
          <div className="lg:col-span-7 bg-industrial-slate/30 border border-industrial-slate p-6 sm:p-8 rounded-sm corner-brackets relative">
            
            <div className="absolute top-4 right-4 flex items-center gap-1.5 bg-industrial-dark px-2 py-0.5 border border-industrial-slate/85 rounded-sm">
              <span className="w-1.5 h-1.5 rounded-full bg-industrial-lime status-active"></span>
              <span className="font-technical text-[8px] text-industrial-lime tracking-widest font-semibold uppercase">READY_INPUT</span>
            </div>

            <span className="font-technical text-xs text-industrial-lime font-bold uppercase tracking-widest block border-b border-industrial-slate/50 pb-3 mb-6">
              LEAD TELEMETRY CONFIGURATION SHEET
            </span>

            <form onSubmit={handleSubmit} className="space-y-5 font-sans">
              
              {/* Form Row: Name & Company */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                <div>
                  <label htmlFor="name" className="block text-[10px] font-technical uppercase text-industrial-silver tracking-wider mb-2 font-bold">
                    Lead Director Name *
                  </label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    value={formData.name}
                    onChange={handleInputChange}
                    placeholder="e.g. Vikramaditya Solanki"
                    className={`w-full bg-industrial-dark border text-xs px-3.5 py-2.5 rounded-xs focus:outline-none focus:border-industrial-lime text-white ${errors.name ? "border-feedback-error" : "border-industrial-slate"}`}
                  />
                  {errors.name && <span className="text-[9px] text-feedback-error font-mono mt-1 block">{errors.name}</span>}
                </div>

                <div>
                  <label htmlFor="company" className="block text-[10px] font-technical uppercase text-industrial-silver tracking-wider mb-2 font-bold">
                    Company Identity *
                  </label>
                  <input
                    type="text"
                    id="company"
                    name="company"
                    value={formData.company}
                    onChange={handleInputChange}
                    placeholder="e.g. L&T Heavy Engineering"
                    className={`w-full bg-industrial-dark border text-xs px-3.5 py-2.5 rounded-xs focus:outline-none focus:border-industrial-lime text-white ${errors.company ? "border-feedback-error" : "border-industrial-slate"}`}
                  />
                  {errors.company && <span className="text-[9px] text-feedback-error font-mono mt-1 block">{errors.company}</span>}
                </div>
              </div>

              {/* Form Row: Project Type & Workforce Size */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                <div>
                  <label htmlFor="projectType" className="block text-[10px] font-technical uppercase text-industrial-silver tracking-wider mb-2 font-bold">
                    Industrial Project Sector *
                  </label>
                  <select
                    id="projectType"
                    name="projectType"
                    value={formData.projectType}
                    onChange={handleInputChange}
                    className={`w-full bg-industrial-dark border text-xs px-3.5 py-2.5 rounded-xs focus:outline-none focus:border-industrial-lime text-white appearance-none ${errors.projectType ? "border-feedback-error" : "border-industrial-slate"}`}
                  >
                    <option value="">Select Project Type...</option>
                    <option value="Piping Fabrication & Erection">Piping Fabrication & Erection</option>
                    <option value="Tank Erection / Storage">Tank Erection / Storage Projects</option>
                    <option value="Shutdown / Turnaround">Refinery Shutdown / Turnaround</option>
                    <option value="Oil & Gas Projects">Oil & Gas / Refinery Projects</option>
                    <option value="Heavy Fabrication">Heavy Fabrication Workshop</option>
                    <option value="Industrial Construction">Infrastructure / Heavy Civil</option>
                    <option value="Workforce Environments">General Engineering Operations</option>
                  </select>
                  {errors.projectType && <span className="text-[9px] text-feedback-error font-mono mt-1 block">{errors.projectType}</span>}
                </div>

                <div>
                  <label htmlFor="workforceSize" className="block text-[10px] font-technical uppercase text-industrial-silver tracking-wider mb-2 font-bold">
                    Active Workforce scale *
                  </label>
                  <select
                    id="workforceSize"
                    name="workforceSize"
                    value={formData.workforceSize}
                    onChange={handleInputChange}
                    className={`w-full bg-industrial-dark border text-xs px-3.5 py-2.5 rounded-xs focus:outline-none focus:border-industrial-lime text-white appearance-none ${errors.workforceSize ? "border-feedback-error" : "border-industrial-slate"}`}
                  >
                    <option value="">Select Workforce Size...</option>
                    <option value="1-50">1 - 50 Workers</option>
                    <option value="51-200">51 - 200 Workers</option>
                    <option value="201-1000">201 - 1,000 Workers</option>
                    <option value="1000+">More than 1,000 Workers</option>
                  </select>
                  {errors.workforceSize && <span className="text-[9px] text-feedback-error font-mono mt-1 block">{errors.workforceSize}</span>}
                </div>
              </div>

              {/* Form Row: Primary Interest (full width) */}
              <div>
                <label htmlFor="primaryInterest" className="block text-[10px] font-technical uppercase text-industrial-silver tracking-wider mb-2 font-bold">Primary Interest *</label>
                <select
                  id="primaryInterest"
                  name="primaryInterest"
                  value={formData.primaryInterest}
                  onChange={handleInputChange}
                  className="w-full bg-industrial-dark border border-industrial-slate text-xs px-3.5 py-2.5 rounded-xs focus:outline-none focus:border-industrial-lime text-white appearance-none"
                >
                  <option value="">What best describes your need?</option>
                  <option value="Daily Progress Reporting (DPR)">Daily Progress Reporting (DPR)</option>
                  <option value="Workforce & Attendance">Workforce & Attendance Management</option>
                  <option value="Drawing Management">Drawing & Document Management</option>
                  <option value="Full Platform">Full Platform (All of the above)</option>
                </select>
              </div>

              {/* Form Row: Phone & Email */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                <div>
                  <label htmlFor="phone" className="block text-[10px] font-technical uppercase text-industrial-silver tracking-wider mb-2 font-bold">
                    Supervisor Phone *
                  </label>
                  <input
                    type="tel"
                    id="phone"
                    name="phone"
                    value={formData.phone}
                    onChange={handleInputChange}
                    placeholder="e.g. +91 98765 43210"
                    className={`w-full bg-industrial-dark border text-xs px-3.5 py-2.5 rounded-xs focus:outline-none focus:border-industrial-lime text-white ${errors.phone ? "border-feedback-error" : "border-industrial-slate"}`}
                  />
                  {errors.phone && <span className="text-[9px] text-feedback-error font-mono mt-1 block">{errors.phone}</span>}
                </div>

                <div>
                  <label htmlFor="email" className="block text-[10px] font-technical uppercase text-industrial-silver tracking-wider mb-2 font-bold">
                    Audit Email *
                  </label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    value={formData.email}
                    onChange={handleInputChange}
                    placeholder="e.g. v.solanki@company.com"
                    className={`w-full bg-industrial-dark border text-xs px-3.5 py-2.5 rounded-xs focus:outline-none focus:border-industrial-lime text-white ${errors.email ? "border-feedback-error" : "border-industrial-slate"}`}
                  />
                  {errors.email && <span className="text-[9px] text-feedback-error font-mono mt-1 block">{errors.email}</span>}
                </div>
              </div>

              {/* Submit CTA Block */}
              <div className="pt-4">
                <button
                  type="submit"
                  disabled={loading}
                  className="w-full py-3.5 border border-industrial-lime bg-industrial-lime text-industrial-dark font-technical font-bold text-xs uppercase tracking-widest hover:bg-transparent hover:text-industrial-lime transition-all duration-300 rounded-sm inline-flex items-center justify-center gap-2 btn-industrial disabled:opacity-50"
                >
                  {loading ? (
                    <>
                      <Loader2 className="w-4 h-4 animate-spin text-industrial-dark" />
                      SYNCING TELEMETRY DATA...
                    </>
                  ) : (
                    <>
                      <Send className="w-4 h-4" />
                      COMMIT TELEMETRY & BOOK AUDIT
                    </>
                  )}
                </button>
              </div>

            </form>

            {/* Form Result Alert Displays */}
            {submitResult && (
              <div className={`mt-6 border p-4 rounded-xs text-xs flex gap-3 ${
                submitResult.success 
                  ? "bg-feedback-success/5 border-feedback-success text-feedback-success" 
                  : "bg-feedback-error/5 border-feedback-error text-feedback-error"
              }`}>
                {submitResult.success ? (
                  <ShieldCheck className="w-5.5 h-5.5 flex-shrink-0" />
                ) : (
                  <AlertTriangle className="w-5.5 h-5.5 flex-shrink-0" />
                )}
                <div>
                  <span className="font-technical font-bold uppercase block tracking-wider">
                    {submitResult.success ? "TRANSMISSION SUCCESSFUL" : "TRANSMISSION ERROR"}
                  </span>
                  <p className="font-sans mt-0.5 leading-relaxed">
                    {submitResult.message}
                  </p>
                  {submitResult.success && submitResult.isMock && (
                    <span className="text-[10px] font-mono block mt-1.5 opacity-80 border-t border-feedback-success/20 pt-1.5">
                      NOTE: Firebase config keys are empty in local env. Safe local sandbox simulated successfully.
                    </span>
                  )}
                </div>
              </div>
            )}

          </div>

        </div>
      </div>
    </section>
  );
}
