"use client";

import { useTranslations } from "next-intl";
import { motion } from "framer-motion";
import GlowButton from "./GlowButton";
import { useTypewriter } from "@/hooks/useTypewriter";
import { useCountUp } from "@/lib/useCountUp";

function StatItem({ target, suffix, label }: { target: number; suffix: string; label: string }) {
  const { count, ref } = useCountUp(target);
  return (
    <div ref={ref} className="text-center">
      <div className="text-3xl font-bold text-gold">
        {count}
        {suffix}
      </div>
      <div className="text-sm text-text-muted mt-1">{label}</div>
    </div>
  );
}

export default function HeroSection() {
  const t = useTranslations("hero");
  const titles = t.raw("titles") as string[];
  const displayedTitle = useTypewriter(titles);

  return (
    <section className="relative min-h-screen flex items-center overflow-hidden pt-20 pb-12">
      <div className="absolute inset-0 bg-gradient-to-br from-midnight via-midnight to-obsidian" />
      <div className="absolute inset-0 opacity-20">
        <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-gold/10 rounded-full blur-[120px]" />
        <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-teal/10 rounded-full blur-[120px]" />
      </div>
      <div className="absolute inset-0" style={{
        backgroundImage: "radial-gradient(rgba(201,168,76,0.1) 1px, transparent 1px)",
        backgroundSize: "40px 40px",
      }} />

      <div className="relative z-10 max-w-6xl mx-auto px-4 sm:px-6 w-full">
        <div className="flex flex-col items-center text-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-green-500/10 border border-green-500/20 text-green-400 text-xs mb-6">
              <span className="w-2 h-2 rounded-full bg-green-400 animate-pulse" />
              {t("availability")}
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.1 }}
          >
            <div className="text-xs text-text-muted mb-3 tracking-widest uppercase">{t("location")}</div>
          </motion.div>

          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="text-4xl sm:text-5xl lg:text-6xl font-bold leading-tight mb-6 max-w-4xl"
          >
            {t("name")}
          </motion.h1>

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.3 }}
            className="h-10 mb-8"
          >
            <span className="text-xl sm:text-2xl gold-gradient-text font-semibold">
              {displayedTitle}
              <span className="animate-pulse">|</span>
            </span>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.4 }}
            className="flex flex-col sm:flex-row gap-4 mb-12"
          >
            <a href="/resume.png" download="Muhammad_Asif_Shahzad_Resume.png">
              <GlowButton size="lg">{t("cta_resume")}</GlowButton>
            </a>
            <GlowButton
              variant="ghost"
              size="lg"
              onClick={() => document.getElementById("contact")?.scrollIntoView({ behavior: "smooth" })}
            >
              {t("cta_contact")}
            </GlowButton>
          </motion.div>

          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.6, delay: 0.5 }}
            className="flex flex-wrap justify-center gap-8 sm:gap-12"
          >
            <StatItem target={25} suffix="+" label={t("stats_1")} />
            <StatItem target={500} suffix="+" label={t("stats_2")} />
            <StatItem target={2008} suffix="" label={t("stats_3")} />
            <StatItem target={4} suffix="" label={t("stats_4")} />
          </motion.div>
        </div>
      </div>

      <motion.div
        animate={{ y: [0, 8, 0] }}
        transition={{ duration: 2, repeat: Infinity }}
        className="absolute bottom-8 left-1/2 -translate-x-1/2"
      >
        <div className="w-6 h-10 rounded-full border border-gold/30 flex items-start justify-center p-1.5">
          <div className="w-1.5 h-3 rounded-full bg-gold animate-float" />
        </div>
      </motion.div>
    </section>
  );
}
