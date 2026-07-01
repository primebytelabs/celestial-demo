import type { Metadata } from "next";
import { Inter, Fraunces } from "next/font/google";
import { SiteHeader } from "@/components/SiteHeader";
import SmoothScroll from "@/components/SmoothScroll";
import { SiteFooter } from "@/components/SiteFooter";
import "./globals.css";

const inter = Inter({
  variable: "--font-sans",
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
  display: "swap",
});

const fraunces = Fraunces({
  variable: "--font-display",
  subsets: ["latin"],
  style: ["normal", "italic"],
  weight: ["400", "500", "600", "700"],
  display: "swap",
});

export const metadata: Metadata = {
  title: "Celestial Biolabs — Ayurvedic & Pharmaceutical Manufacturing",
  description:
    "We manufacture quality Ayurvedic formulations and proprietary medicines. Celestial Biolabs Limited: Hyderabad, India. Founded 1997.",
};

export default function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <html
      lang="en"
      data-theme="light"
      className={`${inter.variable} ${fraunces.variable}`}
    >
      <head>
        {/* Inline script: set theme before paint (no flash), respect saved choice + system pref */}
        <script
          dangerouslySetInnerHTML={{
            __html: `
              try {
                var t = localStorage.getItem('theme');
                if (t !== 'light' && t !== 'dark') {
                  t = window.matchMedia('(prefers-color-scheme: dark)').matches ? 'dark' : 'light';
                }
                document.documentElement.setAttribute('data-theme', t);
              } catch (_) {
                document.documentElement.setAttribute('data-theme', 'light');
              }
            `,
          }}
        />
      </head>
      <body>
        <SmoothScroll>
          <SiteHeader />
          <main id="main">
            {children}
          </main>
          <SiteFooter />
        </SmoothScroll>
      </body>
    </html>
  );
}
