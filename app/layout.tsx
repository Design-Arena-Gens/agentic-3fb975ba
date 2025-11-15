import type { Metadata } from "next";
import { Noto_Sans_Arabic, Manrope } from "next/font/google";
import "./globals.css";

const arabic = Noto_Sans_Arabic({
  variable: "--font-arabic",
  subsets: ["arabic"],
  display: "swap",
  weight: ["400", "600", "700"]
});

const sans = Manrope({
  variable: "--font-sans",
  subsets: ["latin"],
  display: "swap",
  weight: ["400", "500", "600", "700"]
});

export const metadata: Metadata = {
  title: "رلن — Creative Arabic Futures",
  description:
    "رلن is a sensorial Arabic brand experience blending typography, motion, and soundscapes to explore new creative futures.",
  keywords: ["رلن", "Arabic design", "immersive experience", "creative futures"],
  openGraph: {
    title: "رلن — Creative Arabic Futures",
    description:
      "Experience an immersive Arabic-first narrative crafted with motion and generative gradients.",
    url: "https://agentic-3fb975ba.vercel.app",
    siteName: "رلن",
    locale: "ar_AE",
    type: "website"
  },
  twitter: {
    card: "summary_large_image",
    title: "رلن — Creative Arabic Futures",
    description:
      "Discover a minimal, motion-infused Arabic landing environment inspired by the brand رلن."
  },
  metadataBase: new URL("https://agentic-3fb975ba.vercel.app")
};

export default function RootLayout({
  children
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="ar" dir="rtl" className={`${arabic.variable} ${sans.variable}`}>
      <body>{children}</body>
    </html>
  );
}
