import React from "react";
import { Document, Page, Text, View, StyleSheet, Font, Image } from "@react-pdf/renderer";

Font.register({
  family: "Inter",
  fonts: [
    { src: "https://fonts.gstatic.com/s/inter/v18/UcCO3FwrK3iLTeHuS_nVMrMxCp50SjIw2boKDuKmMg.woff2", fontWeight: 400 },
    { src: "https://fonts.gstatic.com/s/inter/v18/UcCO3FwrK3iLTeHuS_nVMrMxCp50SjIw2boKDuKmMg.woff2", fontWeight: 600 },
    { src: "https://fonts.gstatic.com/s/inter/v18/UcCO3FwrK3iLTeHuS_nVMrMxCp50SjIw2boKDuKmMg.woff2", fontWeight: 700 },
  ],
});

const C_GOLD = "#C9A84C";
const C_DARK = "#0A0E1A";
const C_TEXT = "#1a1a2e";
const C_MUTED = "#64748b";

const styles = StyleSheet.create({
  page: {
    padding: 40,
    fontFamily: "Inter",
    fontSize: 9,
    color: C_TEXT,
    backgroundColor: "#ffffff",
  },
  header: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "flex-start",
    marginBottom: 20,
    paddingBottom: 16,
    borderBottom: `2px solid ${C_GOLD}`,
  },
  nameBlock: {
    flex: 1,
  },
  name: {
    fontSize: 28,
    fontWeight: 700,
    color: C_DARK,
    marginBottom: 2,
  },
  title: {
    fontSize: 11,
    color: C_GOLD,
    fontWeight: 600,
    marginBottom: 4,
  },
  contactRow: {
    flexDirection: "row",
    gap: 4,
    fontSize: 8,
    color: C_MUTED,
    flexWrap: "wrap",
  },
  contactBlock: {
    alignItems: "flex-end",
    fontSize: 8,
    color: C_MUTED,
    gap: 2,
  },
  section: {
    marginBottom: 14,
  },
  sectionTitle: {
    fontSize: 12,
    fontWeight: 700,
    color: C_DARK,
    borderBottom: `1px solid ${C_GOLD}`,
    paddingBottom: 4,
    marginBottom: 8,
    textTransform: "uppercase",
    letterSpacing: 1,
  },
  summary: {
    fontSize: 9,
    lineHeight: 1.5,
    color: C_TEXT,
    marginBottom: 4,
  },
  expRow: {
    marginBottom: 10,
  },
  expHeader: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "baseline",
  },
  expTitle: {
    fontSize: 10,
    fontWeight: 700,
    color: C_DARK,
  },
  expCompany: {
    fontSize: 9,
    color: C_GOLD,
    fontWeight: 600,
    marginBottom: 2,
  },
  expDate: {
    fontSize: 8,
    color: C_MUTED,
  },
  expLocation: {
    fontSize: 8,
    color: C_MUTED,
  },
  bullet: {
    flexDirection: "row",
    marginTop: 2,
    paddingLeft: 8,
  },
  bulletDot: {
    width: 3,
    marginRight: 4,
    fontSize: 9,
    color: C_GOLD,
  },
  bulletText: {
    fontSize: 8.5,
    lineHeight: 1.4,
    color: C_TEXT,
    flex: 1,
  },
  skillsGrid: {
    flexDirection: "row",
    flexWrap: "wrap",
    gap: 3,
  },
  skillPill: {
    fontSize: 7.5,
    padding: "3 6",
    backgroundColor: `${C_GOLD}15`,
    color: C_DARK,
    borderRadius: 3,
  },
  eduRow: {
    flexDirection: "row",
    justifyContent: "space-between",
    marginBottom: 4,
  },
  eduTitle: {
    fontSize: 9,
    fontWeight: 600,
    color: C_DARK,
  },
  eduDetail: {
    fontSize: 8,
    color: C_MUTED,
  },
  certRow: {
    fontSize: 8.5,
    color: C_TEXT,
    marginBottom: 2,
  },
  footer: {
    position: "absolute",
    bottom: 20,
    left: 40,
    right: 40,
    textAlign: "center",
    fontSize: 7,
    color: C_MUTED,
    borderTop: `0.5px solid ${C_MUTED}30`,
    paddingTop: 8,
  },
});

const experience = [
  {
    title: "Founder & Technical Director",
    company: "MaxSolBiz IT Solutions",
    location: "Lahore / Dubai",
    date: "2008 – Present",
    bullets: [
      "Architected 50+ custom SaaS platforms, admin panels, and financial workflow systems for multi-industry clients across manufacturing, retail, healthcare, and logistics",
      "Built and managed Linux cloud servers, hosting pipelines, email infrastructure, and deployment systems for enterprise-grade reliability",
      "Engineered enterprise networks including MikroTik, Ubiquiti, Cisco, VPNs, fiber optics, and CCTV surveillance",
      "Developed Excel VBA + Python automation tools eliminating 200+ hours/month of manual reporting workflows",
      "Implemented AI-assisted development pipelines for faster delivery, documentation generation, and code quality",
    ],
  },
  {
    title: "Network Design Engineer",
    company: "MaxEase International",
    location: "Lahore",
    date: "Feb 2007 – Mar 2008",
    bullets: [
      "Designed and deployed enterprise network infrastructure for 20+ business clients",
      "Configured routers, switches, wireless access points, and network security systems",
    ],
  },
  {
    title: "IT Manager",
    company: "Star Corporation",
    location: "Lahore",
    date: "Nov 2005 – Jan 2007",
    bullets: [
      "Supervised all IT operations including networking, hardware, software deployment, and technical support",
      "Implemented backup systems, security policies, and cross-departmental IT infrastructure",
    ],
  },
  {
    title: "Network Administrator",
    company: "ModVision IT Zone",
    location: "Lahore",
    date: "Nov 2001 – Jul 2005",
    bullets: [
      "Managed servers, routers, firewalls, and wireless systems for 100+ node network",
      "Implemented network security, backup procedures, and preventive maintenance schedules",
    ],
  },
];

const skills = [
  "Laravel", "PHP", "JavaScript", "TypeScript", "React.js", "Next.js", "Tailwind CSS",
  "MySQL", "PostgreSQL", "REST APIs", "GraphQL", "Python", "Excel VBA",
  "Linux Server", "MikroTik", "Ubiquiti", "Cisco", "VPN", "Firewall",
  "AI Prompt Engineering", "ChatGPT", "Claude", "LLM Integration",
  "Adobe Photoshop", "Illustrator", "CorelDRAW", "Canva", "UI/UX Design",
  "Project Management", "System Analysis", "Solutions Architecture",
];

export default function ResumePDF() {
  return (
    <Document>
      <Page size="A4" style={styles.page}>
        {/* Header */}
        <View style={styles.header}>
          <View style={styles.nameBlock}>
            <Text style={styles.name}>Muhammad Asif Shahzad</Text>
            <Text style={styles.title}>Technical Founder & Full-Stack Architect</Text>
            <View style={styles.contactRow}>
              <Text>Dubai, UAE</Text>
              <Text>|</Text>
              <Text>maxsolbiz@gmail.com</Text>
              <Text>|</Text>
              <Text>+971 50 562 4287</Text>
              <Text>|</Text>
              <Text>maxsolbiz.com</Text>
            </View>
            <View style={{ ...styles.contactRow, marginTop: 2 }}>
              <Text>English · Urdu · Punjabi · Arabic (basic)</Text>
            </View>
          </View>
          <View style={styles.contactBlock}>
            <Text>25+ Years Experience</Text>
            <Text>500+ Projects Delivered</Text>
            <Text>CCNA Certified</Text>
            <Text>MCP Certified</Text>
          </View>
        </View>

        {/* Summary */}
        <View style={styles.section}>
          <Text style={styles.sectionTitle}>Professional Summary</Text>
          <Text style={styles.summary}>
            Results-driven Technical Founder and Full-Stack Systems Architect with 25+ years of hands-on experience
            building scalable SaaS platforms, enterprise infrastructure, AI-assisted workflows, and business automation
            systems. Founder of MaxSolBiz IT Solutions. Expert in architecting backend systems, engineering enterprise
            networks, and designing brand identities. Passionate about leveraging AI to accelerate development and
            deliver innovative solutions.
          </Text>
        </View>

        {/* Experience */}
        <View style={styles.section}>
          <Text style={styles.sectionTitle}>Experience</Text>
          {experience.map((exp, i) => (
            <View key={i} style={styles.expRow}>
              <View style={styles.expHeader}>
                <Text style={styles.expTitle}>{exp.title}</Text>
                <Text style={styles.expDate}>{exp.date}</Text>
              </View>
              <Text style={styles.expCompany}>{exp.company} — {exp.location}</Text>
              {exp.bullets.map((bullet, j) => (
                <View key={j} style={styles.bullet}>
                  <Text style={styles.bulletDot}>•</Text>
                  <Text style={styles.bulletText}>{bullet}</Text>
                </View>
              ))}
            </View>
          ))}
        </View>

        {/* Skills */}
        <View style={styles.section}>
          <Text style={styles.sectionTitle}>Technical Skills</Text>
          <View style={styles.skillsGrid}>
            {skills.map((skill, i) => (
              <Text key={i} style={styles.skillPill}>{skill}</Text>
            ))}
          </View>
        </View>

        {/* Education & Certs */}
        <View style={styles.section}>
          <Text style={styles.sectionTitle}>Education & Certifications</Text>
          <View style={styles.eduRow}>
            <Text style={styles.eduTitle}>BCS — Computer Science</Text>
            <Text style={styles.eduDetail} />
          </View>
          <View style={styles.eduRow}>
            <Text style={styles.eduTitle}>Diploma in Graphic Design</Text>
            <Text style={styles.eduDetail}>University of the Punjab</Text>
          </View>
          <View style={styles.eduRow}>
            <Text style={styles.eduTitle}>AutoCAD Certificate</Text>
            <Text style={styles.eduDetail}>UET Lahore</Text>
          </View>
          <View style={{ marginTop: 6 }}>
            <Text style={styles.certRow}>• CCNA (Cisco Certified Network Associate) — 2002</Text>
            <Text style={styles.certRow}>• MCP (Microsoft Certified Professional) — 1997</Text>
          </View>
        </View>

        {/* Footer */}
        <Text style={styles.footer}>
          Muhammad Asif Shahzad — asif.maxsolbiz.com — maxsolbiz@gmail.com — +971 50 562 4287
        </Text>
      </Page>
    </Document>
  );
}
