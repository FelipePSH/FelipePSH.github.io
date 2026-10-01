import type { Metadata } from "next";
import { Albert_Sans, Geist_Mono, Inter } from "next/font/google";
import "./globals.css";

const display = Albert_Sans({ variable: "--font-display", subsets: ["latin"] });
const ui = Inter({ variable: "--font-ui", subsets: ["latin"] });
const mono = Geist_Mono({ variable: "--font-mono", subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Felipe Pereira dos Santos — Mobile Engineer",
  description:
    "Mobile engineer with 7+ years shipping fintech, logistics and SaaS apps. From Santander's mobile security team in Brazil to startups in Australia.",
  openGraph: { images: ["/videos/swaparoo-v2.jpg"] },
};

export default function RootLayout({ children }: LayoutProps<"/">) {
  return (
    <html lang="en" className={`${display.variable} ${ui.variable} ${mono.variable}`}>
      <body>{children}</body>
    </html>
  );
}
