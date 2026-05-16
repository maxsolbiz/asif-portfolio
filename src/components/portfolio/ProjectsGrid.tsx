"use client";

import { useState } from "react";
import { useTranslations } from "next-intl";
import { motion, AnimatePresence } from "framer-motion";
import { X, ExternalLink } from "lucide-react";

const projectKeys = ["p1", "p2", "p3", "p4", "p5", "p6", "p7", "p8"];

const projectTags: Record<string, string[]> = {
  p1: ["Laravel", "MySQL", "REST API", "AI"],
  p2: ["Financial", "Ledger", "Automation"],
  p3: ["MikroTik", "Ubiquiti", "Cisco"],
  p4: ["Excel VBA", "Python", "Automation"],
  p5: ["Web", "Analytics", "Reporting"],
  p6: ["ERP", "CRM", "Custom"],
  p7: ["Branding", "Design", "Creative"],
  p8: ["Python", "SQL", "ETL"],
};

const projectIcons = ["⚙️", "💰", "🌐", "📊", "💻", "🏗️", "🎨", "📦"];

export default function ProjectsGrid() {
  const t = useTranslations("projects");
  const [selected, setSelected] = useState<string | null>(null);

  return (
    <section id="projects" className="py-28 relative bg-obsidian/30">
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
            PROJECTS
            <span className="w-8 h-px bg-gold/50" />
          </div>
          <h2 className="font-bold text-3xl sm:text-4xl">{t("title")}</h2>
        </motion.div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5">
          {projectKeys.map((key, i) => (
            <motion.div
              key={key}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: i * 0.08 }}
              className="glass-card p-5 hover:border-gold/30 transition-all duration-300 hover:-translate-y-1 cursor-pointer group"
              onClick={() => setSelected(key)}
            >
              <div className="text-2xl mb-3">{projectIcons[i]}</div>
              <h3 className="font-semibold text-text-primary mb-2 text-sm">
                {t(`${key}_title`)}
              </h3>
              <p className="text-xs text-text-muted mb-3 line-clamp-2">
                {t(`${key}_desc`)}
              </p>
              <div className="flex flex-wrap gap-1.5">
                {(projectTags[key] || []).map((tag) => (
                  <span key={tag} className="text-[10px] px-2 py-0.5 rounded-full bg-gold/10 text-gold">
                    {tag}
                  </span>
                ))}
              </div>
              <div className="mt-3 text-xs text-teal flex items-center gap-1 opacity-0 group-hover:opacity-100 transition-opacity">
                {t("view_details")} <ExternalLink className="w-3 h-3" />
              </div>
            </motion.div>
          ))}
        </div>
      </div>

      <AnimatePresence>
        {selected && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/60 backdrop-blur-sm"
            onClick={() => setSelected(null)}
          >
            <motion.div
              initial={{ scale: 0.9, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.9, opacity: 0 }}
              className="glass-card p-8 max-w-lg w-full relative"
              onClick={(e) => e.stopPropagation()}
            >
              <button
                onClick={() => setSelected(null)}
                className="absolute top-4 right-4 text-text-muted hover:text-text-primary"
              >
                <X className="w-5 h-5" />
              </button>
              <div className="text-3xl mb-4">{projectIcons[projectKeys.indexOf(selected)]}</div>
              <h3 className="text-xl font-bold text-text-primary mb-3">
                {t(`${selected}_title`)}
              </h3>
              <p className="text-text-muted text-sm leading-relaxed mb-4">
                {t(`${selected}_desc`)}
              </p>
              <div className="flex flex-wrap gap-2">
                {(projectTags[selected] || []).map((tag) => (
                  <span key={tag} className="px-3 py-1 rounded-full bg-gold/10 text-gold text-xs">
                    {tag}
                  </span>
                ))}
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
}
