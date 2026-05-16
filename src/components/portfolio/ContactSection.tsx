"use client";

import { useState } from "react";
import { useTranslations } from "next-intl";
import { motion } from "framer-motion";
import { Mail, Phone, MapPin, MessageCircle } from "lucide-react";
import GlowButton from "./GlowButton";

export default function ContactSection() {
  const t = useTranslations("contact");
  const [status, setStatus] = useState<"idle" | "sending" | "success" | "error">("idle");

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setStatus("sending");
    const formData = new FormData(e.currentTarget);

    try {
      const res = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          name: formData.get("name"),
          email: formData.get("email"),
          message: formData.get("message"),
        }),
      });

      if (res.ok) {
        setStatus("success");
        (e.target as HTMLFormElement).reset();
      } else {
        setStatus("error");
      }
    } catch {
      setStatus("error");
    }
  };

  const contactInfo = [
    { icon: Mail, label: t("email"), href: "mailto:maxsolbiz@gmail.com" },
    { icon: Phone, label: t("phone"), href: "tel:+971505624287" },
    { icon: MapPin, label: t("location") },
  ];

  return (
    <section id="contact" className="py-28 relative" style={{
      background: "linear-gradient(180deg, var(--midnight), #05080f, var(--midnight))",
    }}>
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
            CONTACT
            <span className="w-8 h-px bg-gold/50" />
          </div>
          <h2 className="font-bold text-3xl sm:text-4xl mb-3">{t("title")}</h2>
          <p className="text-text-muted">{t("subtitle")}</p>
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-10 max-w-4xl mx-auto">
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="space-y-4"
          >
            {contactInfo.map((info, i) => (
              <div key={i} className="glass-card p-4 flex items-center gap-4 hover:border-gold/30 transition-all">
                <info.icon className="w-5 h-5 text-gold shrink-0" />
                {info.href ? (
                  <a href={info.href} className="text-sm text-text-muted hover:text-gold transition-colors">
                    {info.label}
                  </a>
                ) : (
                  <span className="text-sm text-text-muted">{info.label}</span>
                )}
              </div>
            ))}

            <a
              href="https://wa.me/+971505624287"
              target="_blank"
              rel="noopener noreferrer"
              className="glass-card p-4 flex items-center gap-4 hover:border-green-500/30 transition-all group"
            >
              <MessageCircle className="w-5 h-5 text-green-400 shrink-0" />
              <span className="text-sm text-green-400 group-hover:text-green-300 transition-colors">
                {t("whatsapp")}
              </span>
            </a>
          </motion.div>

          <motion.form
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            onSubmit={handleSubmit}
            className="glass-card p-6 space-y-4"
          >
            <input
              type="text"
              name="name"
              placeholder={t("name_placeholder")}
              required
              className="w-full bg-white/5 border border-gold/20 rounded-lg px-4 py-3 text-sm text-text-primary placeholder:text-text-muted/50 outline-none focus:border-gold/50 transition-colors"
            />
            <input
              type="email"
              name="email"
              placeholder={t("email_placeholder")}
              required
              className="w-full bg-white/5 border border-gold/20 rounded-lg px-4 py-3 text-sm text-text-primary placeholder:text-text-muted/50 outline-none focus:border-gold/50 transition-colors"
            />
            <textarea
              name="message"
              placeholder={t("message_placeholder")}
              rows={4}
              required
              className="w-full bg-white/5 border border-gold/20 rounded-lg px-4 py-3 text-sm text-text-primary placeholder:text-text-muted/50 outline-none focus:border-gold/50 transition-colors resize-none"
            />
            <GlowButton type="submit" className="w-full" disabled={status === "sending"}>
              {status === "sending" ? t("sending") : t("send")}
            </GlowButton>
            {status === "success" && (
              <p className="text-center text-green-400 text-sm">{t("success")}</p>
            )}
            {status === "error" && (
              <p className="text-center text-red-400 text-sm">{t("error")}</p>
            )}
          </motion.form>
        </div>
      </div>
    </section>
  );
}
