import type { Metadata } from "next";

// Ustaw NEXT_PUBLIC_SITE_URL na docelową domenę produkcyjną (np. https://sociallivingeurope.com).
// Domyślnie wskazuje na obecny adres wdrożenia.
export const SITE_URL = (
  process.env.NEXT_PUBLIC_SITE_URL || "https://social-living-europe.vercel.app"
).replace(/\/$/, "");

export const SITE_NAME = "Konsorcjum Social Living Europe";

export const SITE_DESCRIPTION =
  "Konsorcjum Social Living Europe doradza, finansuje modelowo, strukturyzuje i zarządza projektami budownictwa społecznego — łącząc sektor prywatny, samorządy (JST) i kapitał finansowy, z finansowaniem nawet do 100% ze środków publicznych i prywatnych.";

export const OG_IMAGE = "/assets/og-image.jpg";

// Helper budujący spójne metadane dla podstron (tytuł, opis, kanoniczny URL, OG/Twitter).
export function pageMeta({
  title,
  description,
  path,
  absoluteTitle = false,
}: {
  title: string;
  description: string;
  path: string;
  absoluteTitle?: boolean;
}): Metadata {
  const url = SITE_URL + (path === "/" ? "" : path);
  const fullTitle = absoluteTitle ? title : `${title} — ${SITE_NAME}`;
  return {
    title: absoluteTitle ? { absolute: title } : title,
    description,
    alternates: { canonical: url },
    openGraph: {
      title: fullTitle,
      description,
      url,
      siteName: SITE_NAME,
      locale: "pl_PL",
      type: "website",
      images: [{ url: OG_IMAGE, width: 1200, height: 630, alt: SITE_NAME }],
    },
    twitter: {
      card: "summary_large_image",
      title: fullTitle,
      description,
      images: [OG_IMAGE],
    },
  };
}
