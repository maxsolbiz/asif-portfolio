"use client";

import { useTranslations } from "next-intl";
import { motion } from "framer-motion";

const items = [
  { key: "item_1", badge: "M" },
  { key: "item_2", badge: "M" },
  { key: "item_3", badge: "S" },
  { key: "item_4", badge: "H" },
  { key: "item_5", badge: "M" },
  { key: "item_6", badge: "Q" },
];

export default function ExperienceTimeline() {
  const t = useTranslations("experience");

  return (
    <section id="experience" className="py-28 relative">
      <div className="max-w-5xl mx-auto px-4 sm:px-6">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <div className="inline-flex items-center gap-3 text-xs tracking-[0.2em] text-gold uppercase font-medium mb-4">
            <span className="w-8 h-px bg-gold/50" />
            EXPERIENCE
            <span className="w-8 h-px bg-gold/50" />
          </div>
          <h2 className="font-bold text-3xl sm:text-4xl">{t("title")}</h2>
        </motion.div>

        <div className="relative">
          <div className="absolute left-[1.625rem] md:left-1/2 md:-translate-x-px top-0 bottom-0 w-px bg-gradient-to-b from-gold/40 via-gold/20 to-transparent" />

          {items.map((item, i) => {
            const title = t(`${item.key}_title`);
            const company = t(`${item.key}_company`);
            const location = t(`${item.key}_location`);
            const date = t(`${item.key}_date`);
            const bullets = [1, 2, 3, 4, 5].map((n) => {
              const key = `${item.key}_${n}`;
              return t.has(key) ? t(key) : null;
            }).filter(Boolean);

            return (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: i * 0.1 }}
                className={`relative flex items-start gap-6 mb-10 last:mb-0 ${
                  i % 2 === 0 ? "md:flex-row" : "md:flex-row-reverse"
                }`}
              >
                <div className="hidden md:flex flex-1" />

                <div className="relative z-10 shrink-0">
                  <div className="w-11 h-11 rounded-full bg-gold/20 border-2 border-gold flex items-center justify-center text-sm font-bold text-gold">
                    {item.badge}
                  </div>
                </div>

                <div className="glass-card p-5 flex-1 max-w-md hover:border-gold/30 transition-all duration-300">
                  <div className="flex items-start justify-between gap-2 mb-1 flex-wrap">
                    <h3 className="font-semibold text-text-primary">{title}</h3>
                    <span className="text-xs text-gold whitespace-nowrap">{date}</span>
                  </div>
                  <div className="text-sm text-teal mb-2">
                    {company} · {location}
                  </div>
                  <ul className="space-y-1.5">
                    {bullets.map((b, j) => (
                      <li key={j} className="text-sm text-text-muted flex items-start gap-2">
                        <span className="w-1 h-1 rounded-full bg-gold/50 mt-2 shrink-0" />
                        {b as string}
                      </li>
                    ))}
                  </ul>
                </div>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
