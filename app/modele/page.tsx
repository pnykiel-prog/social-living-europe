import { Eyebrow, Quote, CtaSection } from "@/components/ui";
import { pageMeta } from "@/lib/site";
import { modelsFull, quoteKtbs, photos } from "@/lib/data";

export const metadata = pageMeta({
  title: "Modele",
  description:
    "Pięć gotowych modeli budownictwa społecznego do wdrożenia na Twojej inwestycji lub gruncie: SIM/TBS, zakup przez wynajem, program wiarygodności kredytowej, mieszkania pracownicze i budownictwo senioralne.",
  path: "/modele",
});

export default function Modele() {
  return (
    <div>
      {/* HERO — pełnoekranowe zdjęcie */}
      <section
        style={{
          position: "relative",
          minHeight: "clamp(440px,56vw,640px)",
          display: "flex",
          alignItems: "flex-end",
          background: "linear-gradient(120deg,#0a4632,#0d6346)",
          overflow: "hidden",
        }}
      >
        {/* eslint-disable-next-line @next/next/no-img-element */}
        <img
          src={photos.modHero}
          alt=""
          style={{ position: "absolute", inset: 0, width: "100%", height: "100%", objectFit: "cover" }}
        />
        <div
          style={{
            position: "absolute",
            inset: 0,
            background:
              "linear-gradient(180deg,rgba(1,30,22,.15) 0%,rgba(1,30,22,.35) 45%,rgba(1,30,22,.9) 100%)",
          }}
        />
        <div className="container" style={{ position: "relative", padding: "0 36px 64px" }}>
          <div
            style={{
              background: "rgba(1,30,22,.55)",
              backdropFilter: "blur(4px)",
              borderLeft: "4px solid var(--gold)",
              borderRadius: "0 6px 6px 0",
              padding: "40px 44px",
              maxWidth: 760,
            }}
          >
            <div style={{ fontSize: 13, letterSpacing: "3px", textTransform: "uppercase", color: "var(--mint)", fontWeight: 600, marginBottom: 16 }}>
              Modele budownictwa społecznego
            </div>
            <h1 className="h1" style={{ fontSize: "clamp(34px,4.6vw,62px)", lineHeight: 1.04, color: "#fff" }}>
              Twój projekt. Nasze finansowanie. Gotowy model.
            </h1>
          </div>
        </div>
      </section>

      {/* INTRO */}
      <section style={{ padding: "84px 0 30px" }}>
        <div className="container-narrow">
          <Eyebrow label="Sekcja wstępna · Modele" />
          <p
            className="serif"
            style={{ fontWeight: 400, fontSize: "clamp(22px,2.7vw,31px)", lineHeight: 1.4, color: "var(--dark)", margin: "0 0 24px" }}
          >
            Budownictwo społeczne w Polsce weszło w fazę głębokiej reformy
            systemowej. Nowe przepisy, rekordowe pule środków publicznych i
            rosnące zapotrzebowanie gmin tworzą okno możliwości, które trwa — ale
            nie czeka.
          </p>
          <p style={{ fontSize: 16.5, lineHeight: 1.75, color: "var(--muted)", margin: "0 0 16px" }}>
            Konsorcjum SLE to doradca i operator programów budownictwa społecznego z
            dostępem do prywatnych funduszy inwestycyjnych. W wybranych projektach
            możemy zapewnić finansowanie nawet do 100% wartości inwestycji —
            łącząc instrumenty publiczne (kredyt BGK, granty, Fundusz Dopłat) z
            kapitałem prywatnym, który wnosimy lub pozyskujemy dla Twojego
            projektu.
          </p>
          <p style={{ fontSize: 16.5, lineHeight: 1.75, color: "var(--muted)", margin: "0 0 16px" }}>
            Nie sprzedajemy wiedzy ogólnej. Wchodzimy w projekt jako partner
            operacyjny — od analizy i strukturyzacji, przez relacje z gminą i BGK,
            po pełne wdrożenie modelu i obsługę uczestników.
          </p>
          <p style={{ fontSize: 16.5, lineHeight: 1.75, color: "var(--muted)", margin: 0 }}>
            Poniżej opisujemy pięć modeli, które realizujemy. Każdy to sprawdzona
            struktura finansowa i prawna — i każdy można wdrożyć na Twojej
            inwestycji lub gruncie.
          </p>
        </div>
      </section>

      {/* DLA KOGO */}
      <section style={{ padding: "24px 0 70px" }}>
        <div className="container-narrow">
          <div style={{ background: "var(--dark)", borderRadius: 8, borderLeft: "4px solid var(--gold)", padding: "40px 44px" }}>
            <h2 className="h2" style={{ fontSize: 26, color: "#fff", margin: "0 0 14px" }}>
              Dla kogo?
            </h2>
            <p style={{ fontSize: 16, lineHeight: 1.75, color: "rgba(255,255,255,.84)", margin: 0 }}>
              Pracujemy z deweloperami, funduszami nieruchomości, firmami
              budowlanymi, inwestorami prywatnymi i samorządami, które chcą wejść
              w budownictwo społeczne bez budowania od zera własnych kompetencji.
              Ty wnosisz projekt, grunt lub kapitał. My wnosimy strukturę,
              finansowanie i doświadczenie operacyjne.
            </p>
          </div>
        </div>
      </section>

      {/* CYTAT KTBS */}
      <section style={{ padding: "10px 0 60px" }}>
        <div className="container-narrow">
          <Quote text={quoteKtbs.t} author={quoteKtbs.a} variant="light" markSize={60} />
        </div>
      </section>

      {/* PIĘĆ MODELI — karty z banerem zdjęcia */}
      <section style={{ padding: "20px 0 40px" }}>
        <div className="container" style={{ display: "flex", flexDirection: "column", gap: "clamp(40px,5vw,64px)" }}>
          {modelsFull.map((m) => (
            <article
              key={m.num}
              style={{
                background: "#fff",
                border: "1px solid var(--border-2)",
                borderRadius: 10,
                overflow: "hidden",
                boxShadow: "0 22px 60px -38px rgba(1,30,22,.55)",
              }}
            >
              {/* baner zdjęcia z numerem i tytułem */}
              <div
                style={{
                  position: "relative",
                  height: "clamp(250px,32vw,370px)",
                  background: "linear-gradient(120deg,#0a4632,#0d6346)",
                }}
              >
                {/* eslint-disable-next-line @next/next/no-img-element */}
                <img
                  src={m.img}
                  alt=""
                  style={{ position: "absolute", inset: 0, width: "100%", height: "100%", objectFit: "cover" }}
                />
                <div
                  style={{
                    position: "absolute",
                    inset: 0,
                    background:
                      "linear-gradient(180deg,rgba(1,30,22,.1) 0%,rgba(1,30,22,.32) 48%,rgba(1,30,22,.9) 100%)",
                  }}
                />
                <div
                  style={{
                    position: "absolute",
                    left: 0,
                    right: 0,
                    bottom: 0,
                    padding: "clamp(24px,4vw,42px)",
                    display: "flex",
                    alignItems: "flex-end",
                    gap: "clamp(16px,2.6vw,30px)",
                  }}
                >
                  <div className="serif" style={{ fontSize: "clamp(46px,7vw,90px)", fontWeight: 600, color: "var(--gold)", lineHeight: 0.78 }}>
                    {m.num}
                  </div>
                  <div>
                    <h2 className="h2" style={{ fontSize: "clamp(24px,3vw,38px)", lineHeight: 1.08, color: "#fff", margin: "0 0 8px" }}>
                      {m.title}
                    </h2>
                    <p style={{ fontSize: "clamp(14px,1.6vw,17px)", color: "var(--mint)", fontWeight: 500, fontStyle: "italic", margin: 0, lineHeight: 1.4 }}>
                      {m.subtitle}
                    </p>
                  </div>
                </div>
              </div>
              {/* treść karty */}
              <div style={{ padding: "clamp(28px,4vw,48px)" }}>
                <div style={{ display: "flex", flexDirection: "column", gap: 14, maxWidth: 860, marginBottom: 34 }}>
                  {m.body.map((bp, i) => (
                    <p key={i} style={{ fontSize: 15.5, lineHeight: 1.72, color: "var(--muted)", margin: 0 }}>
                      {bp}
                    </p>
                  ))}
                </div>
                <div className="grid-2" style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: 24 }}>
                  <div style={{ background: "#f1f6f2", borderLeft: "3px solid var(--pos)", borderRadius: "0 4px 4px 0", padding: "26px 28px" }}>
                    <div style={{ fontSize: 12, letterSpacing: "1.5px", textTransform: "uppercase", color: "var(--pos)", fontWeight: 700, marginBottom: 10 }}>
                      Co wnosimy
                    </div>
                    <p style={{ fontSize: 15, lineHeight: 1.68, color: "#3f4f49", margin: 0 }}>{m.provide}</p>
                  </div>
                  <div style={{ background: "#faf6ee", borderLeft: "3px solid var(--gold-dark)", borderRadius: "0 4px 4px 0", padding: "26px 28px" }}>
                    <div style={{ fontSize: 12, letterSpacing: "1.5px", textTransform: "uppercase", color: "var(--gold-dark)", fontWeight: 700, marginBottom: 10 }}>
                      Kto powinien rozmawiać z nami o tym modelu
                    </div>
                    <p style={{ fontSize: 15, lineHeight: 1.68, color: "#3f4f49", margin: 0 }}>{m.who}</p>
                  </div>
                </div>
              </div>
            </article>
          ))}
        </div>
      </section>

      {/* STOPKA SEKCJI */}
      <CtaSection
        heading="Nie wiesz, który model pasuje do Twojego projektu?"
        text="Każda inwestycja jest inna. Odpowiedni model zależy od lokalizacji, stanu zaawansowania projektu, dostępnego kapitału i oczekiwanego horyzontu zwrotu. Umów bezpłatną konsultację — w ciągu jednej rozmowy określimy, który wariant ma dla Ciebie sens i jakie są kolejne kroki."
        buttonLabel="Umów bezpłatną konsultację"
        image={photos.modCta}
        maxWidth={660}
        imageWidth="40%"
        imageOpacity={0.4}
      />
    </div>
  );
}
