import type { Metadata } from "next";
import Link from "next/link";
import { Eyebrow, Quote, CtaSection } from "@/components/ui";
import { skala, celCards, competencies, values, photos } from "@/lib/data";

export const metadata: Metadata = {
  title: "O nas — Konsorcjum Social Living Europe",
  description:
    "Doradca, integrator i zarządca procesu — łączymy sektor prywatny, samorządy i kapitał finansowy w wykonalne projekty mieszkaniowe o realnym oddziaływaniu społecznym.",
};

export default function ONas() {
  return (
    <div>
      {/* HERO */}
      <section style={{ position: "relative", background: "linear-gradient(120deg,#012a1f,#06513a)" }}>
        {/* eslint-disable-next-line @next/next/no-img-element */}
        <img
          src={photos.aboutHero}
          alt=""
          style={{ position: "absolute", inset: 0, width: "100%", height: "100%", objectFit: "cover", opacity: 0.36 }}
        />
        <div
          style={{
            position: "absolute",
            inset: 0,
            background: "linear-gradient(90deg,rgba(1,30,22,.82),rgba(1,30,22,.35))",
          }}
        />
        <div className="container" style={{ position: "relative", padding: "116px 36px 90px" }}>
          <Eyebrow label="O nas" tone="dark" hero />
          <h1 className="h1" style={{ fontSize: "clamp(36px,5vw,62px)", color: "#fff", maxWidth: 840 }}>
            Od koncepcji do zarządzania: budownictwo społeczne, które działa
          </h1>
        </div>
      </section>

      {/* LEAD */}
      <section className="sec" style={{ padding: "90px 0" }}>
        <div className="container-980">
          <p
            className="serif"
            style={{ fontWeight: 400, fontSize: "clamp(23px,2.9vw,34px)", lineHeight: 1.4, color: "var(--dark)", margin: 0 }}
          >
            Social Living Europe to{" "}
            <span style={{ color: "#5e7269" }}>doradca, integrator i zarządca procesu</span> — łączymy
            sektor prywatny, samorządy i kapitał finansowy w wykonalne projekty
            mieszkaniowe o realnym oddziaływaniu społecznym.
          </p>
        </div>
      </section>

      {/* KIM JESTEŚMY / CZEGO NIE ROBIMY */}
      <section className="sec-gray" style={{ padding: "90px 0" }}>
        <div className="container grid-2" style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: 48 }}>
          <div style={{ background: "#fff", borderRadius: 6, padding: "42px 38px", border: "1px solid var(--border)" }}>
            <h3 className="serif" style={{ fontWeight: 500, fontSize: 24, color: "var(--dark)", margin: "0 0 18px" }}>
              Kim jesteśmy
            </h3>
            <p style={{ fontSize: 15.5, lineHeight: 1.7, color: "var(--muted)", margin: "0 0 14px" }}>
              Prowadzimy projekty mieszkaniowe od pomysłu do realizacji. Nie
              jesteśmy deweloperem, który buduje dla zysku, ani urzędem, który
              czeka na dotacje. Jesteśmy partnerem, który spina interesy
              wszystkich stron: samorządu szukającego rozwiązania problemu
              mieszkaniowego, inwestora szukającego bezpiecznego projektu z
              długoterminowym przychodem i instytucji finansowej szukającej
              ekspozycji na rynek z mierzalnym impaktem społecznym.
            </p>
            <p style={{ fontSize: 15.5, lineHeight: 1.7, color: "var(--muted)", margin: "0 0 14px" }}>
              Naszą rolą jest tłumaczenie jednego języka na drugi. Deweloper nie
              musi rozumieć mechanizmów ustawowych BGK. Gmina nie musi znać
              oczekiwań funduszy ESG. Fundusz nie musi wiedzieć, jak działa umowa
              z samorządem. Od tego jesteśmy my.
            </p>
            <p style={{ fontSize: 15.5, lineHeight: 1.7, color: "var(--muted)", margin: 0 }}>
              Układamy finansowanie, dobieramy model prawny i organizacyjny,
              zarządzamy procesem inwestycyjnym i obsługujemy projekt przez cały
              czas jego trwania — tak długo, jak trzeba, żeby projekt rzeczywiście
              działał, a nie tylko ruszył.
            </p>
          </div>
          <div style={{ background: "var(--dark)", borderRadius: 6, padding: "42px 38px" }}>
            <h3 className="serif" style={{ fontWeight: 500, fontSize: 24, color: "#fff", margin: "0 0 18px" }}>
              Czego nie robimy
            </h3>
            <p style={{ fontSize: 15.5, lineHeight: 1.7, color: "rgba(255,255,255,.82)", margin: "0 0 14px" }}>
              Nie jesteśmy wyłącznie deweloperem ani wykonawcą. Nie zastępujemy
              inwestora — pomagamy mu przygotować, sfinansować i bezpiecznie
              przeprowadzić projekt.
            </p>
            <p style={{ fontSize: 15.5, lineHeight: 1.7, color: "rgba(255,255,255,.82)", margin: "0 0 14px" }}>
              Nie sprzedajemy gotowych rozwiązań szablonowych — każdy projekt
              wymaga innego montażu, innej struktury partnerskiej i innych
              instrumentów finansowych.
            </p>
            <p style={{ fontSize: 15.5, lineHeight: 1.7, color: "var(--mint)", margin: 0, fontWeight: 500 }}>
              Nie obiecujemy, że jest łatwo. Obiecujemy, że wiemy jak.
            </p>
          </div>
        </div>
      </section>

      {/* PROBLEM KTÓRY ROZWIĄZUJEMY */}
      <section style={{ padding: "96px 0 50px" }}>
        <div className="container-narrow">
          <Eyebrow label="Problem, który rozwiązujemy" />
          <h2 className="h2" style={{ fontSize: "clamp(28px,3.8vw,44px)", color: "var(--dark)", margin: "0 0 22px", lineHeight: 1.1 }}>
            Polska ma problem mieszkaniowy. Ale nie ten, o którym się mówi.
          </h2>
          <p style={{ fontSize: 16.5, lineHeight: 1.75, color: "var(--muted)", margin: "0 0 16px" }}>
            Przez lata debata publiczna koncentrowała się na liczbie brakujących
            mieszkań. Dziś luka mieszkaniowa wynosi 300–400 tysięcy lokali — nie
            miliony, jak utrzymywano. Rynek budowlany produkuje rekordowe ilości
            mieszkań; w budowie pozostaje obecnie 850 tysięcy lokali. Ilościowy
            deficyt znika.
          </p>
          <p
            className="serif"
            style={{ fontWeight: 400, fontStyle: "italic", fontSize: "clamp(21px,2.4vw,29px)", lineHeight: 1.35, color: "var(--dark)", margin: "14px 0 0" }}
          >
            Zostaje problem głębszy i trudniejszy — luka czynszowa.
          </p>
        </div>
      </section>

      {/* LUKA CZYNSZOWA — DUŻA LICZBA */}
      <section style={{ padding: "0 0 60px" }}>
        <div className="container">
          <div
            className="grid-2"
            style={{
              background: "var(--dark)",
              borderRadius: 8,
              borderLeft: "5px solid var(--gold)",
              overflow: "hidden",
              display: "grid",
              gridTemplateColumns: "0.85fr 1fr",
              alignItems: "center",
            }}
          >
            <div style={{ padding: "56px clamp(36px,4vw,60px)", borderRight: "1px solid rgba(255,255,255,.12)" }}>
              <div
                style={{ fontSize: 13, letterSpacing: "2.5px", textTransform: "uppercase", color: "var(--mint)", fontWeight: 600, marginBottom: 14 }}
              >
                Luka czynszowa w 2026 roku
              </div>
              <div
                className="serif"
                style={{ fontWeight: 500, fontSize: "clamp(64px,9vw,128px)", lineHeight: 0.92, color: "#fff", letterSpacing: "-1px" }}
              >
                9,3 mln
              </div>
              <div style={{ fontSize: 17, color: "rgba(255,255,255,.82)", marginTop: 14, lineHeight: 1.5 }}>
                osób w Polsce — blisko <strong style={{ color: "var(--gold)" }}>25% populacji</strong>
              </div>
            </div>
            <div style={{ padding: "48px clamp(36px,4vw,60px)" }}>
              <p style={{ fontSize: 17, lineHeight: 1.7, color: "rgba(255,255,255,.86)", margin: "0 0 18px" }}>
                W 2026 roku problem luki czynszowej dotyka już blisko jednej
                czwartej Polek i Polaków — osób, które zarabiają „za dużo” na
                lokal socjalny, a „za mało” na kredyt hipoteczny.
              </p>
              <div style={{ fontSize: 14, fontWeight: 600, color: "var(--mint)", letterSpacing: "0.3px" }}>
                — szacunek prof. Adama Czerniaka, SGH (25% z 37,3 mln ≈ 9,3 mln osób)
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* DWIE KARTY PROBLEMU */}
      <section style={{ padding: "0 0 60px" }}>
        <div className="container grid-2" style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: 24 }}>
          {[
            {
              t: "Najem komercyjny",
              d: "Przy cenach mieszkań na poziomie 12 800 zł/m² i rosnących czynszach pochłania 35–45% dochodu netto rodziny z klasy pracującej — nie zostawiając miejsca na oszczędności ani budowanie majątku.",
            },
            {
              t: "Kredyt hipoteczny",
              d: "Dostępny tylko dla tych, którzy mają pełną zdolność kredytową, stabilną historię zatrudnienia i uzbierany wkład własny. Reszta zostaje bez opcji.",
            },
          ].map((c) => (
            <div key={c.t} style={{ background: "var(--gray-bg)", borderRadius: 6, borderTop: "3px solid var(--neg)", padding: "38px 36px" }}>
              <h3 className="serif" style={{ fontWeight: 500, fontSize: 22, color: "var(--dark)", margin: "0 0 14px" }}>
                {c.t}
              </h3>
              <p style={{ fontSize: 15.5, lineHeight: 1.7, color: "var(--muted)", margin: 0 }}>{c.d}</p>
            </div>
          ))}
        </div>
        <div className="container-narrow" style={{ marginTop: 34 }}>
          <p style={{ fontSize: 16.5, lineHeight: 1.75, color: "var(--muted)", margin: 0 }}>
            Pomiędzy tymi rynkami żyją miliony Polaków: pracownicy na umowach
            B2B, osoby ze stażem krótszym niż dwa lata, rodziny bez historii
            kredytowej. Ludzie, którzy zarabiają wystarczająco, żeby spłacać
            kredyt — ale bank im go nie da, bo nie spełniają formalnych kryteriów.
            To nie margines, lecz strukturalny problem, który pogłębia się z
            każdym rokiem wzrostu cen.
          </p>
        </div>
      </section>

      {/* POTENCJAŁ vs REALIZACJA */}
      <section className="sec-gray" style={{ padding: "84px 0" }}>
        <div className="container">
          <div style={{ maxWidth: 760, marginBottom: 40 }}>
            <h2 className="h2" style={{ fontSize: "clamp(26px,3.4vw,40px)", color: "var(--dark)", margin: "0 0 14px" }}>
              Potencjał ogromny, realizacja mizerna
            </h2>
            <p style={{ fontSize: 16.5, lineHeight: 1.7, color: "var(--muted)", margin: 0 }}>
              Pieniędzy jest więcej niż kiedykolwiek. Brakuje gotowych projektów,
              kompetencji operacyjnych i podmiotów, które potrafią spinać sektor
              publiczny z prywatnym. To jest dokładnie ta luka, którą wypełnia SLE
              PSA.
            </p>
          </div>
          <div className="grid-4" style={{ display: "grid", gridTemplateColumns: "repeat(4,1fr)", gap: 24 }}>
            {skala.map((sk) => (
              <div key={sk.l} style={{ background: "#fff", borderTop: "2px solid var(--brand)", borderRadius: "0 0 4px 4px", padding: "26px 24px" }}>
                <div className="serif" style={{ fontSize: "clamp(28px,2.8vw,38px)", fontWeight: 500, color: "var(--dark)", lineHeight: 1.05 }}>
                  {sk.v}
                </div>
                <div style={{ fontSize: 14, color: "var(--muted-2)", marginTop: 12, lineHeight: 1.55 }}>{sk.l}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* NASZ CEL */}
      <section style={{ padding: "96px 0" }}>
        <div className="container-narrow">
          <Eyebrow label="Nasz cel" />
          <h2 className="h2" style={{ fontSize: "clamp(28px,3.8vw,44px)", color: "var(--dark)", margin: "0 0 22px", lineHeight: 1.1 }}>
            Łączenie sektora publicznego i prywatnego
          </h2>
          <p style={{ fontSize: 16.5, lineHeight: 1.75, color: "var(--muted)", margin: "0 0 16px" }}>
            Budownictwo społeczne przez dekady funkcjonowało w jednym z dwóch
            modeli. Albo gmina buduje sama — powoli, drogo i bez skali. Albo
            prywatny inwestor buduje komercyjnie — szybko, ale poza zasięgiem
            klasy pracującej. Przekonanie, że te dwa światy nie mogą się spotkać,
            jest błędne.
          </p>
          <p style={{ fontSize: 16.5, lineHeight: 1.75, color: "var(--muted)", margin: 0 }}>
            W Wiedniu — światowym wzorcu budownictwa społecznego — dziesiątki
            prywatnych operatorów i spółdzielni buduje mieszkania społeczne nie z
            altruizmu, lecz dlatego, że model jest finansowo sensowny. System
            działa, bo łączy publiczne finansowanie z prywatną efektywnością
            operacyjną.
          </p>
        </div>
        <div className="container-narrow" style={{ margin: "34px auto 40px" }}>
          <Quote
            text="Spójrzmy prawdzie w oczy — Wiedeń tego nie robi tylko z miłości do ludzi, tylko dlatego że to się po prostu opłaca. A u nas mówi się, że nic się nie da, że nie wyjdzie. I dlatego dalej stoimy w miejscu."
            author="Prezes Krakowskiego TBS"
            variant="dark"
            markSize={60}
          />
          <p
            className="serif"
            style={{ fontWeight: 400, fontSize: "clamp(20px,2.2vw,27px)", lineHeight: 1.35, color: "var(--dark)", margin: "30px 0 0" }}
          >
            My wierzymy, że to się w Polsce da i opłaca. I robimy to.
          </p>
        </div>
        <div className="container">
          <div style={{ fontSize: 15, color: "var(--muted)", marginBottom: 22 }}>Budujemy projekty, w których:</div>
          <div className="grid-2" style={{ display: "grid", gridTemplateColumns: "repeat(2,1fr)", gap: 24 }}>
            {celCards.map((cl) => (
              <div
                key={cl.who}
                style={{ background: "#f1f6f2", borderLeft: "3px solid var(--pos)", borderRadius: "0 4px 4px 0", padding: "28px 30px" }}
              >
                <div className="serif" style={{ fontWeight: 600, fontSize: 20, color: "var(--dark)", marginBottom: 8 }}>
                  {cl.who}
                </div>
                <p style={{ fontSize: 15, lineHeight: 1.65, color: "#3f4f49", margin: 0 }}>{cl.d}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* NASZE KOMPETENCJE */}
      <section style={{ padding: "96px 0" }}>
        <div className="container">
          <h2 className="h2" style={{ fontSize: "clamp(28px,3.6vw,42px)", color: "var(--dark)", margin: "0 0 48px" }}>
            Nasze kompetencje
          </h2>
          <div className="grid-3" style={{ display: "grid", gridTemplateColumns: "repeat(3,1fr)", gap: "34px 40px" }}>
            {competencies.map((cp) => (
              <div key={cp.title} style={{ borderTop: "2px solid var(--brand)", paddingTop: 22 }}>
                <h3 className="serif" style={{ fontWeight: 500, fontSize: 21, color: "var(--dark)", margin: "0 0 10px", lineHeight: 1.25 }}>
                  {cp.title}
                </h3>
                <p style={{ fontSize: 15, lineHeight: 1.65, color: "var(--muted-2)", margin: 0 }}>{cp.desc}</p>
              </div>
            ))}
          </div>
          <div style={{ marginTop: 44 }}>
            <Link href="/kontakt" className="btn btn-brand btn-lg">
              Skonsultuj swój projekt
            </Link>
          </div>
        </div>
      </section>

      {/* MISJA I WARTOŚCI */}
      <section className="sec-gray" style={{ padding: "90px 0" }}>
        <div className="container">
          <h2 className="h2" style={{ fontSize: "clamp(28px,3.6vw,42px)", color: "var(--dark)", margin: "0 0 44px" }}>
            Misja i wartości
          </h2>
          <div className="grid-2" style={{ display: "grid", gridTemplateColumns: "repeat(2,1fr)", gap: 24 }}>
            {values.map((v) => (
              <div
                key={v.title}
                className="card-hover"
                style={{ background: "#fff", border: "1px solid var(--border)", borderTop: "3px solid var(--gold-dark)", borderRadius: 4, padding: "32px 30px" }}
              >
                <h3 className="serif" style={{ fontSize: 21, fontWeight: 600, color: "var(--dark)", margin: "0 0 12px", lineHeight: 1.25 }}>
                  {v.title}
                </h3>
                <p style={{ fontSize: 15, lineHeight: 1.68, color: "var(--muted-2)", margin: 0 }}>{v.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <CtaSection
        heading="Doradzimy na każdym etapie projektu"
        text="Od pierwszej analizy wykonalności po zarządzanie realizacją — sprawdź, jak możemy pomóc Twojej organizacji."
        buttonLabel="Porozmawiajmy o współpracy"
        image={photos.onasCta}
      />
    </div>
  );
}
