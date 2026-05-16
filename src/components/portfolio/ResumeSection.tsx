"use client";

import { useTranslations } from "next-intl";
import { motion } from "framer-motion";
import { Download, FileText, ExternalLink } from "lucide-react";
import GlowButton from "./GlowButton";
import ResumeDownloadButton from "./ResumeDownloadButton";

export default function ResumeSection() {
  const t = useTranslations("nav");

  return (
    <section className="py-24 relative bg-bg-section">
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
          <h2 className="font-bold text-3xl sm:text-4xl text-text-primary">Professional Resume</h2>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="relative"
        >
          {/* Theme-aware card */}
          <div className="glass-card overflow-hidden shadow-lg">
            {/* Mac-style window header */}
            <div className="flex items-center gap-2 px-5 py-3 border-b border-border bg-bg-surface">
              <div className="w-3 h-3 rounded-full bg-red-500" />
              <div className="w-3 h-3 rounded-full bg-yellow-500" />
              <div className="w-3 h-3 rounded-full bg-green-500" />
              <div className="flex items-center gap-2 ml-3 text-xs text-text-muted">
                <FileText className="w-3.5 h-3.5" />
                Muhammad_Asif_Shahzad_Resume.pdf
              </div>
              <div className="ml-auto flex items-center gap-1 text-[10px] text-text-muted">
                <ExternalLink className="w-3 h-3" /> Open
              </div>
            </div>

            {/* Resume content preview */}
            <div className="p-8 sm:p-10 max-h-[600px] overflow-y-auto bg-bg">
              <div className="max-w-2xl mx-auto">
                <div className="flex justify-between items-start pb-4 mb-5 border-b-2 border-gold">
                  <div>
                    <h3 className="text-xl font-bold text-text-primary">Muhammad Asif Shahzad</h3>
                    <p className="text-sm text-gold font-semibold">Technical Founder & Full-Stack Architect</p>
                    <p className="text-xs text-text-muted mt-0.5">Dubai, UAE | maxsolbiz@gmail.com | +971 50 562 4287</p>
                  </div>
                  <div className="text-xs text-text-muted text-right leading-relaxed">
                    25+ Years Experience<br />500+ Projects<br />CCNA · MCP
                  </div>
                </div>

                <div className="mb-4">
                  <h4 className="text-xs font-bold text-text-primary uppercase tracking-wide border-b border-gold pb-1 mb-2">Professional Summary</h4>
                  <p className="text-sm text-text-secondary leading-relaxed">
                    Results-driven Technical Founder and Full-Stack Systems Architect with 25+ years of hands-on experience
                    building scalable SaaS platforms, enterprise infrastructure, AI-assisted workflows, and business automation
                    systems. Founder of MaxSolBiz IT Solutions.
                  </p>
                </div>

                <div className="mb-4">
                  <h4 className="text-xs font-bold text-text-primary uppercase tracking-wide border-b border-gold pb-1 mb-2">Technical Skills</h4>
                  <div className="flex flex-wrap gap-1.5">
                    {["Laravel", "React.js", "Next.js", "Python", "MySQL", "Linux", "MikroTik", "Cisco", "AI/LLM", "Photoshop"].map((s) => (
                      <span key={s} className="text-xs px-2 py-0.5 bg-gold/10 text-text-primary rounded border border-gold/30">{s}</span>
                    ))}
                  </div>
                </div>

                <div>
                  <h4 className="text-xs font-bold text-text-primary uppercase tracking-wide border-b border-gold pb-1 mb-2">Experience</h4>
                  <div className="flex justify-between items-baseline">
                    <span className="text-sm font-semibold text-text-primary">Founder & Technical Director</span>
                    <span className="text-xs text-text-muted">2008 – Present</span>
                  </div>
                  <p className="text-xs text-gold font-medium">MaxSolBiz IT Solutions — Lahore / Dubai</p>
                  <p className="text-xs text-text-secondary mt-1">Architected 50+ custom SaaS platforms, admin panels, and financial workflow systems...</p>
                </div>
              </div>
            </div>

            {/* Bottom bar */}
            <div className="flex items-center justify-between px-5 py-4 border-t border-border bg-bg-surface">
              <div className="text-xs text-text-muted">PDF · Formatted Resume</div>
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
