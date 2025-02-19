import type { Metadata } from "next";
import localFont from "next/font/local";
import Script from "next/script";
import "./globals.css";
import { Analytics } from "@vercel/analytics/react";

const geistSans = localFont({
  src: "./fonts/GeistVF.woff",
  variable: "--font-geist-sans",
  weight: "100 900",
});
const geistMono = localFont({
  src: "./fonts/GeistMonoVF.woff",
  variable: "--font-geist-mono",
  weight: "100 900",
});

export const metadata: Metadata = {
  title: "apivot.me - Personal Profile for Everyone",
  description:
    "apivot.me旨在构建全球个人档案平台，连接中国和全球的用户，提供中文、英文和法语的多语言支持。",
  keywords: ["global", "profile", "social", "交流", "中国", "英文", "法语"],
  alternates: {
    canonical: "https://apivot.me",
    languages: {
      en: "https://apivot.me/en",
      zh: "https://apivot.me/zh",
      fr: "https://apivot.me/fr",
    },
  },
};

const structuredData = {
  "@context": "https://schema.org",
  "@type": "WebSite",
  url: "https://apivot.me",
  name: "apivot.me",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <head>
        <Script
          id="structured-data"
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(structuredData) }}
        />
      </head>
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        {children}
        <Analytics />
      </body>
      <Analytics />
    </html>
  );
}
