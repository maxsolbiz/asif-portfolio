"use client";

import { useTranslations } from "next-intl";
import { motion } from "framer-motion";
import Image from "next/image";
import { Download } from "lucide-react";
import GlowButton from "./GlowButton";

export default function ResumeSection() {
  const t = useTranslations("nav");

  return (
    <section className="py-20 relative bg-obsidian/30">
      <div className="max-w-4xl mx-auto px-4 sm:px-6">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-8"
        >
          <div className="inline-flex items-center gap-3 text-xs tracking-[0.2em] text-gold uppercase font-medium mb-4">
            <span className="w-8 h-px bg-gold/50" />
            RESUME
            <span className="w-8 h-px bg-gold/50" />
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="glass-card p-4 sm:p-6 relative group"
        >
          <div className="relative w-full max-w-2xl mx-auto rounded-lg overflow-hidden">
            <Image
              src="/resume.png"
              alt="Muhammad Asif Shahzad Resume"
              width={800}
              height={1100}
              className="w-full h-auto object-contain"
            />
            <div className="absolute inset-0 bg-black/0 group-hover:bg-black/40 transition-all duration-300 flex items-center justify-center">
              <a
                href="/resume.png"
                download="Muhammad_Asif_Shahzad_Resume.png"
                className="opacity-0 group-hover:opacity-100 transition-opacity duration-300"
              >
                <GlowButton size="md">
                  <Download className="w-4 h-4" />
                  {t("resume")}
                </GlowButton>
              </a>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
