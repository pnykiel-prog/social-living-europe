import type { Metadata } from "next";
import { Newsreader, Hanken_Grotesk } from "next/font/google";
import "./globals.css";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import FloatingContact from "@/components/FloatingContact";

const newsreader = Newsreader({
  subsets: ["latin", "latin-ext"],
  weight: ["400", "500", "600"],
  style: ["normal", "italic"],
  variable: "--font-newsreader",
  display: "swap",
});

const hanken = Hanken_Grotesk({
  subsets: ["latin", "latin-ext"],
  weight: ["400", "500", "600", "700"],
  variable: "--font-hanken",
  display: "swap",
});

export const metadata: Metadata = {
  title: "Konsorcjum Social Living Europe — finansowanie budownictwa społecznego",
  description:
    "Konsorcjum Social Living Europe (Fundacja DivideYou i Social Living Europe PSA) doradza, finansuje modelowo, strukturyzuje i zarządza projektami budownictwa społecznego — łącząc sektor prywatny, JST i kapitał finansowy.",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="pl" className={`${newsreader.variable} ${hanken.variable}`}>
      <body>
        <div className="shell">
          <Header />
          <main className="main">{children}</main>
          <FloatingContact />
          <Footer />
        </div>
      </body>
    </html>
  );
}
