import type { Metadata } from "next";
import { Newsreader, Hanken_Grotesk } from "next/font/google";
import "./globals.css";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import FloatingContact from "@/components/FloatingContact";
import { SITE_URL, SITE_NAME, SITE_DESCRIPTION, OG_IMAGE } from "@/lib/site";

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
  metadataBase: new URL(SITE_URL),
  title: {
    default:
      "Konsorcjum Social Living Europe — finansowanie budownictwa społecznego",
    template: "%s — Konsorcjum Social Living Europe",
  },
  description: SITE_DESCRIPTION,
  applicationName: SITE_NAME,
  authors: [{ name: SITE_NAME }],
  creator: SITE_NAME,
  publisher: SITE_NAME,
  keywords: [
    "budownictwo społeczne",
    "społeczne budownictwo czynszowe",
    "finansowanie budownictwa społecznego",
    "SIM",
    "TBS",
    "kredyt BGK",
    "Fundusz Dopłat",
    "mieszkania społeczne",
    "mieszkania pracownicze",
    "budownictwo senioralne",
    "PPP",
    "samorządy",
    "Konsorcjum Social Living Europe",
    "Fundacja DivideYou",
  ],
  category: "Finansowanie i doradztwo budownictwa społecznego",
  alternates: { canonical: SITE_URL },
  openGraph: {
    type: "website",
    locale: "pl_PL",
    url: SITE_URL,
    siteName: SITE_NAME,
    title:
      "Konsorcjum Social Living Europe — finansowanie budownictwa społecznego",
    description: SITE_DESCRIPTION,
    images: [{ url: OG_IMAGE, width: 1200, height: 630, alt: SITE_NAME }],
  },
  twitter: {
    card: "summary_large_image",
    title:
      "Konsorcjum Social Living Europe — finansowanie budownictwa społecznego",
    description: SITE_DESCRIPTION,
    images: [OG_IMAGE],
  },
  icons: {
    icon: "/assets/logo-mark-icon.png",
    shortcut: "/assets/logo-mark-icon.png",
    apple: "/assets/logo-mark-icon.png",
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-image-preview": "large",
      "max-snippet": -1,
      "max-video-preview": -1,
    },
  },
};

const jsonLd = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "Organization",
      "@id": `${SITE_URL}/#organization`,
      name: SITE_NAME,
      alternateName: "Social Living Europe",
      url: SITE_URL,
      logo: `${SITE_URL}/assets/logo-mark-icon.png`,
      image: `${SITE_URL}${OG_IMAGE}`,
      description: SITE_DESCRIPTION,
      email: "office@sociallivingeurope.com",
      telephone: "+48607695900",
      areaServed: "PL",
      knowsLanguage: ["pl"],
      member: [
        { "@type": "Organization", name: "Fundacja DivideYou" },
        { "@type": "Organization", name: "Social Living Europe PSA" },
      ],
      address: {
        "@type": "PostalAddress",
        streetAddress: "ul. Wrzesińska 12",
        postalCode: "03-713",
        addressLocality: "Warszawa",
        addressCountry: "PL",
      },
      contactPoint: [
        {
          "@type": "ContactPoint",
          telephone: "+48607695900",
          email: "office@sociallivingeurope.com",
          contactType: "customer service",
          areaServed: "PL",
          availableLanguage: ["Polish"],
        },
      ],
      knowsAbout: [
        "budownictwo społeczne",
        "społeczne budownictwo czynszowe",
        "SIM",
        "TBS",
        "kredyt preferencyjny BGK",
        "Fundusz Dopłat",
        "mieszkania pracownicze",
        "budownictwo senioralne",
        "finansowanie inwestycji mieszkaniowych",
      ],
    },
    {
      "@type": "WebSite",
      "@id": `${SITE_URL}/#website`,
      url: SITE_URL,
      name: SITE_NAME,
      description: SITE_DESCRIPTION,
      inLanguage: "pl-PL",
      publisher: { "@id": `${SITE_URL}/#organization` },
    },
    {
      "@type": "ProfessionalService",
      "@id": `${SITE_URL}/#service`,
      name: SITE_NAME,
      url: SITE_URL,
      parentOrganization: { "@id": `${SITE_URL}/#organization` },
      areaServed: "PL",
      description:
        "Doradztwo, modelowe finansowanie, strukturyzacja i zarządzanie projektami budownictwa społecznego: SIM/TBS, zakup przez wynajem, program wiarygodności kredytowej, mieszkania pracownicze i budownictwo senioralne.",
      serviceType: [
        "Doradztwo w zakresie budownictwa społecznego",
        "Montaż finansowania (BGK, Fundusz Dopłat, kapitał prywatny)",
        "Strukturyzacja projektów mieszkaniowych",
        "Zarządzanie inwestycjami mieszkaniowymi",
      ],
    },
  ],
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="pl" className={`${newsreader.variable} ${hanken.variable}`}>
      <body>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
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
