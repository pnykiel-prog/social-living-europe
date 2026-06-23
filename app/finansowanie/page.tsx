import type { Metadata } from "next";
import { Eyebrow, Quote, CtaSection } from "@/components/ui";
import { finSources, quoteDelowski, photos } from "@/lib/data";

export const metadata: Metadata = {
  title: "Finansowanie — Konsorcjum Social Living Europe",
  description:
    "Sześć źródeł finansowania, które łączymy w jeden montaż — do 100% wartości inwestycji ze środków publicznych i prywatnych.",
};

export default function Finansowanie() {
  return (
    <div>
      {/* HERO — układ dzielony */}
      <section
        className="split-hero"
        style={{ display: "grid", gridTemplateColumns: "1.05fr 1fr", minHeight: "clamp(420px,52vw,600px)" }}
      >
        <div
          style={{
            background: "var(--dark)",
            display: "flex",
            flexDirection: "column",
            justifyContent: "center",
            padding: "80px clamp(36px,5vw,80px)",
          }}
        >
          <Eyebrow label="Finansowanie" tone="dark" hero />
          <h1 className="h1" style={{ fontSize: "clamp(34px,4vw,58px)", lineHeight: 1.05, color: "#fff", margin: "0 0 20px" }}>
            To nie jest model „zbuduj i sprzedaj”.
          </h1>
          <p style={{ fontSize: 17, lineHeight: 1.65, color: "rgba(255,255,255,.8)", margin: 0, maxWidth: 460 }}>
            Sześć źródeł finansowania, które łączymy w jeden montaż — do 100%
            wartości inwestycji ze środków publicznych i prywatnych.
          </p>
        </div>
        <div style={{ position: "relative", background: "linear-gradient(120deg,#0a4632,#0d6346)", minHeight: 320 }}>
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img
            src={photos.finHeroSide}
            alt=""
            style={{ position: "absolute", inset: 0, width: "100%", height: "100%", objectFit: "cover" }}
          />
        </div>
      </section>

      {/* INTRO */}
      <section style={{ padding: "84px 0 30px" }}>
        <div className="container-narrow">
          <Eyebrow label="Sekcja wstępna · Finansowanie" />
          <p style={{ fontSize: 16.5, lineHeight: 1.75, color: "var(--muted)", margin: "0 0 16px" }}>
            Budownictwo społeczne rządzi się innymi prawami niż deweloperka
            komercyjna. Nie ma tu jednorazowej sprzedaży, flipów ani szybkich
            wyjść. Jest za to coś, czego deweloperka komercyjna nie oferuje:
            stabilny, długoterminowy przychód z zasobu mieszkaniowego, oparty na
            regulowanych umowach i wsparciu publicznym.
          </p>
          <p style={{ fontSize: 16.5, lineHeight: 1.75, color: "var(--muted)", margin: "0 0 16px" }}>
            Inwestor wchodzący w budownictwo społeczne z SLE PSA wchodzi w model,
            w którym państwo — przez system dotacji, preferencyjnych kredytów i
            partycypacji publicznej — radykalnie obniża koszt kapitału i ryzyko
            inwestycyjne. W zamian akceptuje ograniczenia: regulowany czynsz, długi
            horyzont, społeczny mandat projektu.
          </p>
          <p
            className="serif"
            style={{ fontWeight: 400, fontStyle: "italic", fontSize: "clamp(22px,2.6vw,30px)", lineHeight: 1.35, color: "var(--dark)", margin: "14px 0 22px" }}
          >
            Dla właściwego inwestora to nie kompromis. To przewaga.
          </p>
          <p style={{ fontSize: 16.5, lineHeight: 1.75, color: "var(--muted)", margin: 0 }}>
            Poniżej opisujemy sześć źródeł finansowania, które można łączyć w
            jednej inwestycji. W praktyce żaden projekt nie korzysta ze wszystkich
            jednocześnie — dobieramy montaż do konkretnego projektu, lokalizacji i
            profilu inwestora.
          </p>
        </div>
      </section>

      {/* CYTAT DELOWSKI */}
      <section style={{ padding: "20px 0 50px" }}>
        <div className="container-narrow">
          <Quote text={quoteDelowski.t} author={quoteDelowski.a} variant="dark" textSize="clamp(21px,2.4vw,30px)" />
        </div>
      </section>

      {/* SZEŚĆ ŹRÓDEŁ — indeks z numeracją i panelem zdjęcia */}
      <section style={{ padding: "30px 0 50px" }}>
        <div className="container" style={{ display: "flex", flexDirection: "column" }}>
          {finSources.map((fs) => (
            <div
              key={fs.num}
              className="row-flex"
              style={{
                display: "flex",
                flexDirection: "row",
                gap: "clamp(30px,4vw,60px)",
                alignItems: "flex-start",
                padding: "clamp(52px,6vw,84px) 0",
                borderTop: "1px solid var(--border-2)",
              }}
            >
              {/* treść z dużą liczbą porządkową */}
              <div style={{ flex: 1.3 }}>
                <div style={{ display: "flex", alignItems: "flex-start", gap: "clamp(16px,2.2vw,30px)", marginBottom: 22 }}>
                  <span
                    className="serif"
                    aria-hidden="true"
                    style={{ fontSize: "clamp(58px,8.5vw,118px)", fontWeight: 600, lineHeight: 0.74, color: "rgba(176,141,67,.26)", flex: "none" }}
                  >
                    {fs.num}
                  </span>
                  <div style={{ paddingTop: "clamp(4px,1vw,10px)" }}>
                    <span
                      style={{
                        display: "inline-block",
                        background: "var(--dark)",
                        color: "var(--mint)",
                        fontSize: 12,
                        fontWeight: 700,
                        letterSpacing: "0.6px",
                        textTransform: "uppercase",
                        padding: "6px 14px",
                        borderRadius: 3,
                        marginBottom: 14,
                      }}
                    >
                      {fs.tag}
                    </span>
                    <h2 className="h2" style={{ fontSize: "clamp(24px,2.8vw,34px)", lineHeight: 1.13, color: "var(--dark)", margin: "0 0 8px" }}>
                      {fs.title}
                    </h2>
                    <p style={{ fontSize: 16.5, color: "var(--gold-dark)", fontWeight: 600, margin: 0, lineHeight: 1.4 }}>
                      {fs.headline}
                    </p>
                  </div>
                </div>
                <div style={{ display: "flex", flexDirection: "column", gap: 13, marginBottom: 22 }}>
                  {fs.body.map((bp, i) => (
                    <p key={i} style={{ fontSize: 15, lineHeight: 1.68, color: "var(--muted)", margin: 0 }}>
                      {bp}
                    </p>
                  ))}
                </div>
                <div style={{ background: "#f1f6f2", borderLeft: "3px solid var(--pos)", borderRadius: "0 4px 4px 0", padding: "16px 20px" }}>
                  <div style={{ fontSize: 12, letterSpacing: "1.5px", textTransform: "uppercase", color: "var(--pos)", fontWeight: 700, marginBottom: 6 }}>
                    Dla kogo
                  </div>
                  <p style={{ fontSize: 14.5, lineHeight: 1.6, color: "#3f4f49", margin: 0 }}>{fs.forWho}</p>
                </div>
              </div>
              {/* stały panel zdjęcia */}
              <div
                style={{
                  flex: 1,
                  position: "relative",
                  height: "clamp(300px,38vw,440px)",
                  borderRadius: 6,
                  overflow: "hidden",
                  background: "linear-gradient(120deg,#0a4632,#0d6346)",
                }}
              >
                {/* eslint-disable-next-line @next/next/no-img-element */}
                <img
                  src={fs.img}
                  alt=""
                  style={{ position: "absolute", inset: 0, width: "100%", height: "100%", objectFit: "cover" }}
                />
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* STOPKA SEKCJI */}
      <CtaSection
        heading="Jak to wszystko złożyć w jeden montaż?"
        text="Każdy projekt wymaga indywidualnego doboru źródeł — zależnie od formy prawnej inwestora, stanu zaawansowania projektu, lokalizacji, dostępności gruntu i oczekiwanego horyzontu zwrotu. Nie ma jednego słusznego montażu — jest montaż optymalny dla Twojego projektu."
        buttonLabel="Zaprojektujmy montaż dla Twojego projektu"
        image={photos.finFooter}
        maxWidth={680}
        imageWidth="40%"
        imageOpacity={0.4}
      />
    </div>
  );
}
