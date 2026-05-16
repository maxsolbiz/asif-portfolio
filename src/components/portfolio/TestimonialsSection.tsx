"use client";

import { useTranslations } from "next-intl";
import { motion } from "framer-motion";

const badges = ["badge_1", "badge_2", "badge_3", "badge_4", "badge_5"];

export default function TestimonialsSection() {
  const t = useTranslations("testimonials");

  return (
    <section className="py-28 relative">
      <div className="max-w-6xl mx-auto px-4 sm:px-6">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-12"
        >
          <div className="inline-flex items-center gap-3 text-xs tracking-[0.2em] text-gold uppercase font-medium mb-4">
            <span className="w-8 h-px bg-gold/50" />
            TRUST
            <span className="w-8 h-px bg-gold/50" />
          </div>
          <h2 className="font-bold text-3xl sm:text-4xl">{t("title")}</h2>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.4 }}
          className="flex flex-wrap justify-center gap-3 mb-16"
        >
          {badges.map((badge) => (
            <span
              key={badge}
              className="px-5 py-2.5 rounded-full border border-gold/20 bg-bg-surface text-sm text-gold font-medium"
            >
              {t(badge)}
            </span>
          ))}
        </motion.div>

        <div className="grid md:grid-cols-3 gap-5">
          {[1, 2, 3].map((i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: i * 0.1 }}
              className="glass-card p-6 hover:border-gold/30 transition-all"
            >
              <div className="text-gold text-2xl mb-3">"</div>
              <p className="text-text-muted text-sm leading-relaxed mb-4">
                {t(`t${i}_text`)}
              </p>
              <div className="text-xs text-gold font-medium">— {t(`t${i}_author`)}</div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
