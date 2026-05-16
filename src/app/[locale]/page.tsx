"use client";

import { useState, useEffect } from "react";
import { useLocale } from "next-intl";
import { useTranslations } from "next-intl";
import HeroSection from "@/components/portfolio/HeroSection";
import AboutSection from "@/components/portfolio/AboutSection";
import ResumeSection from "@/components/portfolio/ResumeSection";
import SkillsSection from "@/components/portfolio/SkillsSection";
import ExperienceTimeline from "@/components/portfolio/ExperienceTimeline";
import ProjectsGrid from "@/components/portfolio/ProjectsGrid";
import TestimonialsSection from "@/components/portfolio/TestimonialsSection";
import ContactSection from "@/components/portfolio/ContactSection";
import ThemeToggle from "@/components/portfolio/ThemeToggle";
import LanguageSwitcher from "@/components/portfolio/LanguageSwitcher";
import GlowButton from "@/components/portfolio/GlowButton";
import { Menu, X } from "lucide-react";

function NavBar() {
  const t = useTranslations("nav");
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 50);
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const links = [
    { key: "hero", href: "#" },
    { key: "about", href: "#about" },
    { key: "skills", href: "#skills" },
    { key: "experience", href: "#experience" },
    { key: "projects", href: "#projects" },
    { key: "contact", href: "#contact" },
  ];

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-40 transition-all duration-300 ${
        scrolled ? "glass-nav" : "bg-transparent"
      }`}
    >
      <div className="max-w-6xl mx-auto px-4 sm:px-6 h-16 flex items-center justify-between">
        <div className="flex items-center gap-3">
          <a href="#" className="text-xl font-bold gold-gradient-text">Asif</a>
          <div className="hidden sm:block"><LanguageSwitcher /></div>
        </div>

        <div className="hidden md:flex items-center gap-6">
          {links.map((link) => (
            <a
              key={link.key}
              href={link.href}
              className="text-sm text-text-muted hover:text-gold transition-colors"
            >
              {t(link.key)}
            </a>
          ))}
          <a href="/resume.pdf" download>
            <GlowButton size="sm">{t("resume")}</GlowButton>
          </a>
        </div>

        <button className="md:hidden text-text-primary" onClick={() => setOpen(!open)}>
          {open ? <X size={22} /> : <Menu size={22} />}
        </button>
      </div>

      {open && (
        <div className="md:hidden glass-nav border-t border-gold/20 px-4 py-4 flex flex-col gap-3">
          <div className="mb-2"><LanguageSwitcher /></div>
          {links.map((link) => (
            <a
              key={link.key}
              href={link.href}
              className="text-sm text-text-muted hover:text-gold transition-colors"
              onClick={() => setOpen(false)}
            >
              {t(link.key)}
            </a>
          ))}
          <a href="/resume.pdf" download>
            <GlowButton size="sm" className="w-full">{t("resume")}</GlowButton>
          </a>
        </div>
      )}
    </nav>
  );
}

export default function PortfolioPage() {
  const locale = useLocale();
  const isRtl = locale === "ar" || locale === "ur";

  useEffect(() => {
    document.documentElement.dir = isRtl ? "rtl" : "ltr";
  }, [isRtl]);

  return (
    <>
      <NavBar />
      <ThemeToggle />
      <main className="relative z-10">
        <HeroSection />
        <div className="section-divider mx-6" />
        <AboutSection />
        <ResumeSection />
        <SkillsSection />
        <ExperienceTimeline />
        <ProjectsGrid />
        <TestimonialsSection />
        <ContactSection />
        <footer className="py-8 text-center">
          <p className="text-xs text-text-muted">
            © {new Date().getFullYear()} Muhammad Asif Shahzad. All rights reserved.
          </p>
        </footer>
      </main>
    </>
  );
}
