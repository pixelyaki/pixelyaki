import type { Metadata } from "next";
import { Manrope, Space_Grotesk } from "next/font/google";
import "./globals.css";
import { Ga4Provider } from "@/components/ga4-provider";

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
  metadataBase: new URL("https://example.com"),
  title: "Pixelyaki QR Generator",
  description:
    "Create free QR codes with custom colors, transparent PNG export, logo upload, and SVG download."
};

export default function RootLayout({
  children
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${fontBody.variable} ${fontHeading.variable}`}>
        {children}
        <Ga4Provider gaId={process.env.NEXT_PUBLIC_GA_ID} />
      </body>
    </html>
  );
}
