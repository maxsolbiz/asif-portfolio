"use client";

import { useTranslations } from "next-intl";
import { motion } from "framer-motion";
import { Download, FileText, ExternalLink } from "lucide-react";
import GlowButton from "./GlowButton";
import ResumeDownloadButton from "./ResumeDownloadButton";

export default function ResumeSection() {
  const t = useTranslations("nav");

  return (
    <section className="py-24 relative bg-obsidian/30">
      <div className="max-w-5xl mx-auto px-4 sm:px-6">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-10"
        >
          <div className="inline-flex items-center gap-3 text-xs tracking-[0.2em] text-gold uppercase font-medium mb-4">
            <span className="w-8 h-px bg-gold/50" />
            RESUME
            <span className="w-8 h-px bg-gold/50" />
          </div>
          <h2 className="font-bold text-3xl sm:text-4xl">Professional Resume</h2>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="relative"
        >
          {/* Light card for PDF preview */}
          <div className="bg-white rounded-2xl overflow-hidden border border-gray-200 shadow-lg">
            {/* Mac-style window header */}
            <div className="flex items-center gap-2 px-5 py-3 border-b border-gray-200 bg-gray-50">
              <div className="w-3 h-3 rounded-full bg-red-500" />
              <div className="w-3 h-3 rounded-full bg-yellow-500" />
              <div className="w-3 h-3 rounded-full bg-green-500" />
              <div className="flex items-center gap-2 ml-3 text-xs text-gray-500">
                <FileText className="w-3.5 h-3.5" />
                Muhammad_Asif_Shahzad_Resume.pdf
              </div>
              <div className="ml-auto flex items-center gap-1 text-[10px] text-gray-400">
                <ExternalLink className="w-3 h-3" /> Open
              </div>
            </div>

            {/* Resume content preview - light theme */}
            <div className="p-8 sm:p-10 max-h-[600px] overflow-y-auto">
              <div className="max-w-2xl mx-auto">
                {/* Header */}
                <div className="flex justify-between items-start pb-4 mb-5 border-b-2 border-amber-400">
                  <div>
                    <h3 className="text-xl font-bold text-gray-900">Muhammad Asif Shahzad</h3>
                    <p className="text-sm text-amber-600 font-semibold">Technical Founder & Full-Stack Architect</p>
                    <p className="text-xs text-gray-500 mt-0.5">Dubai, UAE | maxsolbiz@gmail.com | +971 50 562 4287</p>
                  </div>
                  <div className="text-xs text-gray-500 text-right leading-relaxed">
                    25+ Years Experience<br />500+ Projects<br />CCNA · MCP
                  </div>
                </div>

                {/* Summary */}
                <div className="mb-4">
                  <h4 className="text-xs font-bold text-gray-800 uppercase tracking-wide border-b border-amber-400 pb-1 mb-2">Professional Summary</h4>
                  <p className="text-sm text-gray-700 leading-relaxed">
                    Results-driven Technical Founder and Full-Stack Systems Architect with 25+ years of hands-on experience
                    building scalable SaaS platforms, enterprise infrastructure, AI-assisted workflows, and business automation
                    systems. Founder of MaxSolBiz IT Solutions.
                  </p>
                </div>

                {/* Skills preview */}
                <div className="mb-4">
                  <h4 className="text-xs font-bold text-gray-800 uppercase tracking-wide border-b border-amber-400 pb-1 mb-2">Technical Skills</h4>
                  <div className="flex flex-wrap gap-1.5">
                    {["Laravel", "React.js", "Next.js", "Python", "MySQL", "Linux", "MikroTik", "Cisco", "AI/LLM", "Photoshop"].map((s) => (
                      <span key={s} className="text-xs px-2 py-0.5 bg-amber-50 text-gray-800 rounded border border-amber-200">{s}</span>
                    ))}
                  </div>
                </div>

                {/* Experience preview */}
                <div>
                  <h4 className="text-xs font-bold text-gray-800 uppercase tracking-wide border-b border-amber-400 pb-1 mb-2">Experience</h4>
                  <div className="flex justify-between items-baseline">
                    <span className="text-sm font-semibold text-gray-900">Founder & Technical Director</span>
                    <span className="text-xs text-gray-500">2008 – Present</span>
                  </div>
                  <p className="text-xs text-amber-600 font-medium">MaxSolBiz IT Solutions — Lahore / Dubai</p>
                  <p className="text-xs text-gray-600 mt-1">Architected 50+ custom SaaS platforms, admin panels, and financial workflow systems...</p>
                </div>
              </div>
            </div>

            {/* Bottom bar */}
            <div className="flex items-center justify-between px-5 py-4 border-t border-gray-200 bg-gray-50">
              <div className="text-xs text-gray-500">PDF · Formatted Resume</div>
              <ResumeDownloadButton>
                <GlowButton size="sm">
                  <Download className="w-4 h-4" />
                  {t("resume")}
                </GlowButton>
              </ResumeDownloadButton>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
