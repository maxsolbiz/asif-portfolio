"use client";

import { useEffect } from "react";

const experience = [
  {
    title: "Founder & Technical Director",
    company: "MaxSolBiz IT Solutions",
    location: "Lahore / Dubai",
    date: "2008 – Present",
    bullets: [
      "Architected 50+ custom SaaS platforms, admin panels, and financial workflow systems for multi-industry clients across manufacturing, retail, healthcare, and logistics",
      "Built and managed Linux cloud servers, hosting pipelines, email infrastructure, and deployment systems for enterprise-grade reliability",
      "Engineered enterprise networks including MikroTik, Ubiquiti, Cisco, VPNs, fiber optics, and CCTV surveillance systems",
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

export default function ResumePage() {
  const skills = [
    "Laravel", "PHP", "JavaScript", "TypeScript", "React.js", "Next.js", "Tailwind CSS",
    "MySQL", "PostgreSQL", "REST APIs", "GraphQL", "Python", "Excel VBA",
    "Linux Server", "MikroTik", "Ubiquiti", "Cisco", "VPN", "Firewall",
    "AI Prompt Engineering", "ChatGPT / Claude", "LLM Integration",
    "Adobe Photoshop", "Illustrator", "CorelDRAW", "Canva", "UI/UX Design",
    "Project Management", "System Analysis", "Solutions Architecture",
  ];

  useEffect(() => {
    const timer = setTimeout(() => window.print(), 500);
    return () => clearTimeout(timer);
  }, []);

  return (
    <html>
      <head>
        <title>Muhammad Asif Shahzad — Resume</title>
        <style>{`
          @page { margin: 20mm 15mm; }
          * { margin: 0; padding: 0; box-sizing: border-box; }
          body {
            font-family: 'Segoe UI', -apple-system, sans-serif;
            color: #1a1a2e;
            font-size: 10px;
            line-height: 1.5;
            padding: 0;
          }
          .container { max-width: 210mm; margin: 0 auto; padding: 0; }

          .btn-print {
            position: fixed; top: 20px; right: 20px; z-index: 100;
            background: #C9A84C; color: #0A0E1A; border: none;
            padding: 12px 24px; border-radius: 8px; font-size: 14px;
            font-weight: 600; cursor: pointer;
          }
          .btn-print:hover { background: #E8C97A; }

          .header {
            display: flex; justify-content: space-between; align-items: flex-start;
            padding-bottom: 12px; border-bottom: 2px solid #C9A84C; margin-bottom: 14px;
          }
          .header h1 { font-size: 22px; font-weight: 700; color: #0A0E1A; margin-bottom: 2px; }
          .header .title { font-size: 11px; color: #C9A84C; font-weight: 600; margin-bottom: 4px; }
          .header .contact { font-size: 8px; color: #64748b; }
          .header .stats { text-align: right; font-size: 8px; color: #64748b; line-height: 1.6; }

          .section { margin-bottom: 12px; }
          .section-title {
            font-size: 11px; font-weight: 700; color: #0A0E1A;
            text-transform: uppercase; letter-spacing: 1px;
            border-bottom: 1px solid #C9A84C; padding-bottom: 3px; margin-bottom: 6px;
          }
          .summary { font-size: 9px; line-height: 1.6; color: #1a1a2e; }

          .exp { margin-bottom: 8px; }
          .exp-header { display: flex; justify-content: space-between; align-items: baseline; }
          .exp-title { font-size: 10px; font-weight: 700; color: #0A0E1A; }
          .exp-company { font-size: 9px; color: #C9A84C; font-weight: 600; }
          .exp-date { font-size: 8px; color: #64748b; }
          .exp-bullet { display: flex; margin-top: 1px; padding-left: 6px; }
          .exp-bullet-dot { width: 4px; margin-right: 4px; color: #C9A84C; font-size: 9px; }
          .exp-bullet-text { font-size: 8.5px; line-height: 1.4; color: #1a1a2e; flex: 1; }

          .skills { display: flex; flex-wrap: wrap; gap: 3px; }
          .skill-pill {
            font-size: 7.5px; padding: 2px 6px; background: #C9A84C15;
            color: #0A0E1A; border-radius: 3px;
          }

          .edu-grid { display: grid; grid-template-columns: 1fr 1fr; gap: 4px; }
          .edu-item { display: flex; flex-direction: column; }
          .edu-title { font-size: 9px; font-weight: 600; color: #0A0E1A; }
          .edu-detail { font-size: 8px; color: #64748b; }
          .cert { font-size: 8.5px; color: #1a1a2e; margin-top: 2px; }

          .footer {
            margin-top: 16px; padding-top: 6px; border-top: 0.5px solid #C9A84C40;
            text-align: center; font-size: 7px; color: #64748b;
          }

          @media print {
            .btn-print { display: none !important; }
            body { padding: 0 !important; }
            @page { margin: 15mm 12mm; }
          }
        `}</style>
      </head>
      <body>
        <button className="btn-print" onClick={() => window.print()}>Save as PDF</button>

        <div className="container">
          <div className="header">
            <div>
              <h1>Muhammad Asif Shahzad</h1>
              <div className="title">Technical Founder & Full-Stack Architect</div>
              <div className="contact">
                Dubai, UAE | maxsolbiz@gmail.com | +971 50 562 4287 | maxsolbiz.com
              </div>
              <div className="contact" style={{ marginTop: 1 }}>
                English · Urdu · Punjabi · Arabic (basic)
              </div>
            </div>
            <div className="stats">
              25+ Years Experience<br />
              500+ Projects Delivered<br />
              CCNA Certified · MCP Certified
            </div>
          </div>

          <div className="section">
            <div className="section-title">Professional Summary</div>
            <p className="summary">
              Results-driven Technical Founder and Full-Stack Systems Architect with 25+ years of hands-on experience
              building scalable SaaS platforms, enterprise infrastructure, AI-assisted workflows, and business automation
              systems. Founder of MaxSolBiz IT Solutions. Expert in architecting backend systems, engineering enterprise
              networks, and designing brand identities. Passionate about leveraging AI to accelerate development and
              deliver innovative solutions.
            </p>
          </div>

          <div className="section">
            <div className="section-title">Experience</div>
            {experience.map((exp, i) => (
              <div key={i} className="exp">
                <div className="exp-header">
                  <span className="exp-title">{exp.title}</span>
                  <span className="exp-date">{exp.date}</span>
                </div>
                <div className="exp-company">{exp.company} — {exp.location}</div>
                {exp.bullets.map((b, j) => (
                  <div key={j} className="exp-bullet">
                    <span className="exp-bullet-dot">•</span>
                    <span className="exp-bullet-text">{b}</span>
                  </div>
                ))}
              </div>
            ))}
          </div>

          <div className="section">
            <div className="section-title">Technical Skills</div>
            <div className="skills">
              {skills.map((skill, i) => (
                <span key={i} className="skill-pill">{skill}</span>
              ))}
            </div>
          </div>

          <div className="section">
            <div className="section-title">Education &amp; Certifications</div>
            <div className="edu-grid">
              <div className="edu-item">
                <span className="edu-title">BCS — Computer Science</span>
              </div>
              <div className="edu-item">
                <span className="edu-detail">Diploma in Graphic Design — University of the Punjab</span>
              </div>
              <div className="edu-item">
                <span className="edu-detail">AutoCAD Certificate — UET Lahore</span>
              </div>
            </div>
            <div style={{ marginTop: 4 }}>
              <div className="cert">• CCNA (Cisco Certified Network Associate) — 2002</div>
              <div className="cert">• MCP (Microsoft Certified Professional) — 1997</div>
            </div>
          </div>

          <div className="footer">
            Muhammad Asif Shahzad — asif.maxsolbiz.com — maxsolbiz@gmail.com — +971 50 562 4287
          </div>
        </div>
      </body>
    </html>
  );
}
