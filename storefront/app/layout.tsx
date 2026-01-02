import type { Metadata } from "next";
import { Poppins, Montserrat, Outfit, Inter } from "next/font/google";
import "./globals.css";
import "../styles/neumorphism.css";
import Footer from "@/components/Footer";

const poppins = Poppins({ weight: ["800"], subsets: ["latin"], variable: "--font-heading-a" });
const montserrat = Montserrat({ weight: ["900"], subsets: ["latin"], variable: "--font-heading-b" });
const outfit = Outfit({ weight: ["600"], subsets: ["latin"], variable: "--font-outline" });
const inter = Inter({ weight: ["400"], subsets: ["latin"], variable: "--font-body" });

export const metadata: Metadata = {
  title: "IT Arena — Interneto svetainių kūrimas",
  description: "Aukštos klasės interneto svetainių kūrimas: aiškūs terminai, fiksuota kaina, SEO paruošta, orientuota į konversijas.",
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="lt">
      <body className={`${poppins.variable} ${montserrat.variable} ${outfit.variable} ${inter.variable} antialiased`}>
        <main className="pt-0">{children}</main>
        <Footer />
      </body>
    </html>
  );
}
