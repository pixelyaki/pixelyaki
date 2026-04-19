import type { Metadata } from "next";
import { Manrope, Space_Grotesk } from "next/font/google";
import { GoogleTagManager } from "@next/third-parties/google";
import { Analytics } from "@vercel/analytics/react";
import { SpeedInsights } from "@vercel/speed-insights/next";
import Script from "next/script";
import "./globals.css";
import { getSiteUrl } from "@/lib/site";

const fontBody = Manrope({
  subsets: ["latin"],
  variable: "--font-body",
  display: "swap"
});

const fontHeading = Space_Grotesk({
  subsets: ["latin"],
  variable: "--font-heading",
  display: "swap"
});

export const metadata: Metadata = {
  metadataBase: new URL(getSiteUrl()),
  title: "Pixelyaki QR Generator",
  description:
    "Create free QR codes with custom colors, transparent PNG export, logo upload, and SVG download.",
  icons: {
    icon: [
      { url: "/favicon.ico" },
      { url: "/favicon.svg", type: "image/svg+xml" },
      { url: "/favicon-32x32.png", sizes: "32x32", type: "image/png" },
      { url: "/favicon-16x16.png", sizes: "16x16", type: "image/png" }
    ],
    apple: [{ url: "/apple-touch-icon.png", sizes: "180x180", type: "image/png" }],
    shortcut: ["/favicon.ico"]
  },
  manifest: "/manifest.json"
};

const themeScript = `
  try {
    var media = window.matchMedia('(prefers-color-scheme: dark)');
    var applyTheme = function() {
      document.documentElement.classList.toggle('dark', media.matches);
    };
    applyTheme();
    if (typeof media.addEventListener === 'function') {
      media.addEventListener('change', applyTheme);
    } else if (typeof media.addListener === 'function') {
      media.addListener(applyTheme);
    }
  } catch(e) {}
`;

const GTM_ID = "GTM-KL8VFX7K";

export default function RootLayout({
  children
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <head>
        <script dangerouslySetInnerHTML={{ __html: themeScript }} />
        <Script
          async
          src="https://pagead2.googlesyndication.com/pagead/js/adsbygoogle.js?client=ca-pub-6409621004292366"
          crossOrigin="anonymous"
          strategy="afterInteractive"
        />
      </head>
      <body className={`${fontBody.variable} ${fontHeading.variable}`}>
        {children}
        <GoogleTagManager gtmId={GTM_ID} />
        <Analytics />
        <SpeedInsights />
      </body>
    </html>
  );
}
