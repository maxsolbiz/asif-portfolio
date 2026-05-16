import type { Metadata } from "next";
import "./globals.css";
import { DM_Sans, Noto_Naskh_Arabic, Noto_Nastaliq_Urdu } from "next/font/google";

const dmSans = DM_Sans({
  variable: "--font-sans",
  subsets: ["latin"],
  display: "swap",
});

const notoNaskhArabic = Noto_Naskh_Arabic({
  variable: "--font-arabic",
  subsets: ["arabic"],
  weight: ["400", "500", "600", "700"],
  display: "swap",
});

const notoNastaliqUrdu = Noto_Nastaliq_Urdu({
  variable: "--font-urdu",
  subsets: ["arabic"],
  weight: ["400", "500", "600", "700"],
  display: "swap",
});

export const metadata: Metadata = {
  title: "Muhammad Asif Shahzad — Technical Founder & Full-Stack Architect",
  description:
    "25+ years of experience building scalable SaaS platforms, enterprise infrastructure, AI workflows, and business automation. Founder of MaxSolBiz IT Solutions.",
  metadataBase: new URL("https://asif.maxsolbiz.com"),
  openGraph: {
    title: "Muhammad Asif Shahzad — Technical Founder & Full-Stack Architect",
    description:
      "25+ years of experience building scalable SaaS platforms, enterprise infrastructure, AI workflows, and business automation.",
    type: "website",
    url: "https://asif.maxsolbiz.com",
    siteName: "Muhammad Asif Shahzad",
  },
  twitter: {
    card: "summary_large_image",
    title: "Muhammad Asif Shahzad — Technical Founder & Full-Stack Architect",
    description:
      "25+ years of experience building scalable SaaS platforms, enterprise infrastructure, AI workflows, and business automation.",
  },
  icons: {
    icon: "/favicon.ico",
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html
      lang="en"
      suppressHydrationWarning
      className={`${dmSans.variable} ${notoNaskhArabic.variable} ${notoNastaliqUrdu.variable}`}
    >
      <head />
      <body>{children}</body>
    </html>
  );
}
