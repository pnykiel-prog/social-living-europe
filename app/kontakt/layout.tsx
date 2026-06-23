import { pageMeta } from "@/lib/site";

export const metadata = pageMeta({
  title: "Kontakt",
  description:
    "Skontaktuj się z Konsorcjum Social Living Europe — sprawdzimy wykonalność Twojego projektu budownictwa społecznego i zaproponujemy model finansowania.",
  path: "/kontakt",
});

export default function KontaktLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return children;
}
