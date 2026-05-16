"use client";

import { useTranslations } from "next-intl";
import { motion } from "framer-motion";
import Image from "next/image";
import { Download, FileText, Eye } from "lucide-react";
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
          {/* Decorative top bar */}
          <div className="absolute -top-3 left-8 right-8 h-3 bg-gold/10 rounded-t-lg border border-gold/20 border-b-0" />
          <div className="absolute -top-6 left-16 right-16 h-3 bg-gold/5 rounded-t-lg border border-gold/10 border-b-0" />

          {/* Main card */}
          <div className="glass-card overflow-hidden border-gold/20">
            {/* Mac-style window header */}
            <div className="flex items-center gap-2 px-5 py-3 border-b border-gold/10 bg-white/5">
              <div className="w-3 h-3 rounded-full bg-red-500/70" />
              <div className="w-3 h-3 rounded-full bg-yellow-500/70" />
              <div className="w-3 h-3 rounded-full bg-green-500/70" />
              <div className="flex items-center gap-2 ml-3 text-xs text-text-muted/60">
                <FileText className="w-3.5 h-3.5" />
                Muhammad_Asif_Shahzad_Resume.png
              </div>
              <div className="ml-auto flex items-center gap-1 text-[10px] text-text-muted/40">
                <Eye className="w-3 h-3" /> Preview
              </div>
            </div>

            {/* Image preview with scroll */}
            <div className="relative max-h-[600px] overflow-y-auto bg-white/5">
              <Image
                src="/resume.png"
                alt="Muhammad Asif Shahzad Resume"
                width={800}
                height={1100}
                className="w-full h-auto object-contain"
                priority
              />

              {/* Gradient fade at bottom */}
              <div className="sticky bottom-0 left-0 right-0 h-24 bg-gradient-to-t from-midnight/80 to-transparent pointer-events-none" />
            </div>

            {/* Bottom bar */}
            <div className="flex items-center justify-between px-5 py-4 border-t border-gold/10 bg-white/5">
              <div className="text-xs text-text-muted/50">PNG · 192 KB</div>
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
