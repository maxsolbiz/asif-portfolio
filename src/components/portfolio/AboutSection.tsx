"use client";

import { useTranslations } from "next-intl";
import { motion } from "framer-motion";
import Image from "next/image";
import { GraduationCap, Award, Languages } from "lucide-react";

export default function AboutSection() {
  const t = useTranslations("about");

  const items = [
    { icon: GraduationCap, title: t("education"), details: [t("edu_1"), t("edu_2"), t("edu_3")] },
    { icon: Award, title: t("certs"), details: [t("cert_1"), t("cert_2")] },
    { icon: Languages, title: t("languages"), details: [t("lang_list")] },
  ];

  return (
    <section id="about" className="py-28 relative">
      <div className="max-w-6xl mx-auto px-4 sm:px-6">
        <div className="grid lg:grid-cols-5 gap-12 items-start">
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="lg:col-span-2 flex flex-col items-center lg:items-start"
          >
            <div className="w-48 h-48 rounded-full overflow-hidden mb-6 border-2 border-gold/30">
              <Image
                src="/profile.png"
                alt="Muhammad Asif Shahzad"
                width="192" height="192"
                className="w-full h-full object-cover"
              />
            </div>
            <h2 className="font-bold text-3xl mb-4 text-center lg:text-left">{t("title")}</h2>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="lg:col-span-3"
          >
            <p className="text-text-muted text-lg leading-relaxed mb-8">{t("summary")}</p>

            <div className="grid sm:grid-cols-3 gap-4">
              {items.map((item, i) => (
                <motion.div
                  key={i}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.4, delay: i * 0.1 }}
                  className="glass-card p-5 hover:border-gold/30 transition-all"
                >
                  <item.icon className="w-5 h-5 text-gold mb-3" />
                  <h3 className="font-semibold text-sm mb-2">{item.title}</h3>
                  {item.details.map((d, j) => (
                    <p key={j} className="text-xs text-text-muted leading-relaxed">{d}</p>
                  ))}
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
