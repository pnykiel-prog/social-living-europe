import { Eyebrow } from "@/components/ui";
import type { FaqItem } from "@/lib/data";

export default function Faq({
  items,
  title,
  eyebrow = "FAQ",
  variant = "gray",
}: {
  items: FaqItem[];
  title: string;
  eyebrow?: string;
  variant?: "gray" | "white";
}) {
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: items.map((it) => ({
      "@type": "Question",
      name: it.q,
      acceptedAnswer: { "@type": "Answer", text: it.a },
    })),
  };

  return (
    <section
      className={variant === "gray" ? "sec-gray" : undefined}
      style={{ padding: "clamp(64px,8vw,96px) 0" }}
    >
      <div className="container-narrow">
        <Eyebrow label={eyebrow} />
        <h2 className="h2" style={{ fontSize: "clamp(28px,3.6vw,42px)", color: "var(--dark)", margin: "0 0 30px" }}>
          {title}
        </h2>
        <div className="faq-list">
          {items.map((it, i) => (
            <details className="faq-item" key={i}>
              <summary className="faq-q">{it.q}</summary>
              <div className="faq-a">{it.a}</div>
            </details>
          ))}
        </div>
      </div>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
    </section>
  );
}
