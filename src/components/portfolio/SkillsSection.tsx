"use client";

import { useState } from "react";
import { useTranslations } from "next-intl";
import { motion, AnimatePresence } from "framer-motion";
import { cn } from "@/lib/utils";

const skillData: Record<string, string[]> = {
  tab_1: [
    "Laravel", "PHP", "JavaScript", "TypeScript", "React.js", "Next.js", "HTML5", "CSS3",
    "Tailwind CSS", "MySQL", "PostgreSQL", "REST APIs", "GraphQL", "JSON", "SaaS Platforms",
    "Admin Systems", "CMS Development", "Headless CMS", "API Integration", "Webhook Automation",
  ],
  tab_2: [
    "Linux Server Administration", "Cloud Hosting & Deployment", "VPS Management", "MikroTik",
    "Ubiquiti", "Cisco", "Juniper", "VPN Configuration", "Firewall Management", "Routing & Switching",
    "LAN/WAN Design", "Wireless Networking", "Fiber Optic", "CCTV & Surveillance", "Network Security",
    "VLAN", "QoS", "Bandwidth Management", "Structured Cabling", "IP Addressing & Subnetting",
  ],
  tab_3: [
    "Excel VBA", "Python", "SQL", "Bulk Data Processing", "Data Cleaning & Transformation",
    "ETL Workflows", "Reporting Dashboards", "Analytics Systems", "Data Science Fundamentals",
    "Business Intelligence", "Microsoft Office 365", "Google Sheets Automation", "Power BI",
    "PDF/CSV Processing", "Inventory Data Systems",
  ],
  tab_4: [
    "Prompt Engineering", "AI-Assisted Development", "Chain-of-Thought Reasoning",
    "LLM Workflow Integration", "AI Documentation Generation", "AI-Powered UI/UX Planning",
    "ChatGPT / Claude / Gemini", "Agentic AI Workflows", "AI Product Development",
    "Instruction Tuning", "Zero-shot & Few-shot Prompting",
  ],
  tab_5: [
    "Senior System Analyst", "Solutions Architecture", "SaaS Platform Design",
    "Business Process Analysis", "Workflow Automation", "Requirements Engineering",
    "Technical Documentation", "System Integration", "Scalability Planning",
    "Operational Efficiency Design", "ERP/CRM Architecture", "Financial Workflow Systems",
    "Multi-role Access Control", "Audit & Compliance Systems",
  ],
  tab_6: [
    "Adobe Photoshop", "Adobe Illustrator", "CorelDRAW", "Canva", "UI/UX Design",
    "Graphic Design", "Logo & Brand Identity", "Marketing Creatives", "Social Media Assets",
    "Print Design", "Digital Branding", "Landing Page Design", "Color Theory", "Typography",
    "Creative Direction",
  ],
  tab_7: [
    "Project Management", "Technical Leadership", "Client Consulting", "Cross-functional Coordination",
    "Agile Methodology", "Requirement Gathering", "Vendor Management", "Budget Planning",
    "Stakeholder Communication", "Team Leadership", "Entrepreneurship", "Business Development",
  ],
  tab_8: [
    "Creative Thinking", "Creative Writing", "Chain of Thought Analysis", "Problem Solving",
    "Systems Thinking", "Analytical Reasoning", "Technical Communication", "Attention to Detail",
    "Adaptability", "Fast Learner", "Multilingual Communication",
  ],
};

const tabs = ["tab_1", "tab_2", "tab_3", "tab_4", "tab_5", "tab_6", "tab_7", "tab_8"] as const;

export default function SkillsSection() {
  const t = useTranslations("skills");
  const [activeTab, setActiveTab] = useState(0);

  const tabKey = tabs[activeTab];

  return (
    <section id="skills" className="py-28 relative bg-obsidian/30">
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
            SKILLS
            <span className="w-8 h-px bg-gold/50" />
          </div>
          <h2 className="font-bold text-3xl sm:text-4xl">{t("title")}</h2>
        </motion.div>

        <div className="flex flex-wrap justify-center gap-2 mb-10">
          {tabs.map((tab, i) => (
            <button
              key={tab}
              onClick={() => setActiveTab(i)}
              className={cn(
                "px-4 py-2 rounded-full text-sm font-medium transition-all border",
                activeTab === i
                  ? "bg-gold text-midnight border-gold"
                  : "border-gold/20 text-text-muted hover:text-gold hover:border-gold/40"
              )}
            >
              {t(tab)}
            </button>
          ))}
        </div>

        <AnimatePresence mode="wait">
          <motion.div
            key={tabKey}
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -10 }}
            transition={{ duration: 0.3 }}
            className="flex flex-wrap justify-center gap-3 max-w-4xl mx-auto"
          >
            {skillData[tabKey].map((skill) => (
              <span
                key={skill}
                className="px-4 py-2 rounded-full border border-gold/15 bg-white/5 text-sm text-text-muted hover:border-gold/30 hover:text-gold transition-all"
              >
                {skill}
              </span>
            ))}
          </motion.div>
        </AnimatePresence>
      </div>
    </section>
  );
}
