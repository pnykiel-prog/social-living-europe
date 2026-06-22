import type { Metadata } from "next";
import { Eyebrow, CtaSection } from "@/components/ui";
import { coop, photos } from "@/lib/data";

export const metadata: Metadata = {
  title: "Współpraca — Konsorcjum Social Living Europe",
  description:
    "Właściwi partnerzy przy jednym stole. Pięć obszarów współpracy: sektor prywatny, samorządy, duzi pracodawcy, instytucje finansowe i organizacje pozarządowe.",
};

export default function Wspolpraca() {
  return (
    <div>
      {/* HERO — jasny, edytorski */}
      <section style={{ background: "#fff", padding: "64px 0 0" }}>
        <div className="container">
          <Eyebrow label="Współpraca" hero />
          <div
            className="grid-2"
            style={{ display: "grid", gridTemplateColumns: "1.05fr 1fr", gap: 56, alignItems: "end", marginBottom: 48 }}
          >
            <h1 className="h1" style={{ fontSize: "clamp(40px,5.4vw,72px)", lineHeight: 1.02, color: "var(--dark)" }}>
              Właściwi partnerzy przy jednym stole
            </h1>
            <p
              className="serif"
              style={{ fontWeight: 400, fontStyle: "italic", fontSize: "clamp(18px,1.9vw,23px)", lineHeight: 1.5, color: "var(--muted)", margin: "0 0 8px" }}
            >
              „Budownictwo społeczne działa tylko wtedy, gdy właściwi partnerzy
              siedzą przy jednym stole. SLE PSA jest łącznikiem między sektorem
              prywatnym, publicznym i finansowym.”
            </p>
          </div>
          <div
            style={{
              position: "relative",
              height: "clamp(320px,42vw,520px)",
              borderRadius: 6,
              overflow: "hidden",
              background: "linear-gradient(120deg,#0a4632,#0d6346)",
            }}
          >
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img
              src={photos.coopHero}
              alt=""
              style={{ position: "absolute", inset: 0, width: "100%", height: "100%", objectFit: "cover" }}
            />
            <div
              style={{
                position: "absolute",
                inset: 0,
                background: "linear-gradient(180deg,rgba(1,30,22,0) 55%,rgba(1,30,22,.4) 100%)",
              }}
            />
          </div>
        </div>
      </section>

      {/* INTRO */}
      <section style={{ padding: "84px 0 30px" }}>
        <div className="container-narrow">
          <Eyebrow label="Sekcja wstępna · Współpraca" />
          <p
            className="serif"
            style={{ fontWeight: 400, fontSize: "clamp(22px,2.7vw,31px)", lineHeight: 1.4, color: "var(--dark)", margin: "0 0 22px" }}
          >
            Budownictwo społeczne działa tylko wtedy, gdy właściwi partnerzy
            siedzą przy jednym stole.
          </p>
          <p style={{ fontSize: 16.5, lineHeight: 1.75, color: "var(--muted)", margin: "0 0 16px" }}>
            SLE PSA nie jest deweloperem, funduszem ani urzędem. Jesteśmy
            łącznikiem między sektorem prywatnym, publicznym i finansowym —
            operatorem, który rozumie język każdego z tych środowisk i potrafi
            zbudować strukturę, w której każda ze stron osiąga swój cel.
          </p>
          <p style={{ fontSize: 16.5, lineHeight: 1.75, color: "var(--muted)", margin: 0 }}>
            Oferujemy współpracę w pięciu głównych obszarach. Każdy z nich ma inną
            logikę, inną potrzebę i inny punkt wejścia. Wspólny jest efekt:
            gotowe, sfinansowane i działające projekty budownictwa społecznego.
          </p>
        </div>
      </section>

      {/* PIĘĆ OBSZARÓW */}
      <section style={{ padding: "40px 0 90px" }}>
        <div className="container" style={{ display: "flex", flexDirection: "column" }}>
          {coop.map((co) => (
            <div key={co.no} style={{ padding: "96px 0", borderTop: "1px solid var(--border-2)" }}>
              <div style={{ display: "flex", alignItems: "center", gap: 18, marginBottom: 36 }}>
                <div
                  className="serif"
                  style={{
                    fontSize: "clamp(15px,1.5vw,19px)",
                    fontWeight: 600,
                    color: "#fff",
                    background: "var(--brand)",
                    borderRadius: 100,
                    width: 46,
                    height: 46,
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                    flex: "none",
                  }}
                >
                  {co.no}
                </div>
                <div className="serif" style={{ fontWeight: 600, fontSize: "clamp(24px,3vw,36px)", color: "var(--dark)", lineHeight: 1.1 }}>
                  {co.kicker}
                </div>
                <div style={{ flex: 1, height: 3, background: "var(--gold)", borderRadius: 2, minWidth: 30 }} />
              </div>
              <div
                className="row-flex"
                style={{ display: "flex", flexDirection: co.dir, gap: 54, alignItems: "center", marginBottom: 34 }}
              >
                <div
                  style={{
                    flex: 1,
                    position: "relative",
                    height: 360,
                    borderRadius: 6,
                    overflow: "hidden",
                    background: "linear-gradient(120deg,#0a4632,#0d6346)",
                  }}
                >
                  {/* eslint-disable-next-line @next/next/no-img-element */}
                  <img
                    src={co.img}
                    alt=""
                    style={{ position: "absolute", inset: 0, width: "100%", height: "100%", objectFit: "cover" }}
                  />
                </div>
                <div style={{ flex: 1.12 }}>
                  <h2 className="h2" style={{ fontSize: "clamp(25px,2.9vw,37px)", lineHeight: 1.14, color: "var(--dark)", margin: "0 0 16px" }}>
                    {co.title}
                  </h2>
                  <div style={{ height: 2, width: 54, background: "var(--gold-dark)", margin: "0 0 18px" }} />
                  <p style={{ fontSize: 15.5, lineHeight: 1.72, color: "var(--muted)", margin: 0 }}>{co.intro}</p>
                </div>
              </div>
              <div className="grid-3" style={{ display: "grid", gridTemplateColumns: "repeat(3,1fr)", gap: 24 }}>
                {co.services.map((sv) => (
                  <div
                    key={sv.t}
                    className="card-hover"
                    style={{ background: "var(--gray-bg)", borderTop: "3px solid var(--gold-dark)", borderRadius: 4, padding: "30px 28px" }}
                  >
                    <h3 className="serif" style={{ fontWeight: 500, fontSize: 19, color: "var(--dark)", margin: "0 0 14px", lineHeight: 1.28 }}>
                      {sv.t}
                    </h3>
                    <p style={{ fontSize: 14.5, lineHeight: 1.65, color: "var(--muted-2)", margin: 0 }}>{sv.d}</p>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* STOPKA SEKCJI */}
      <CtaSection
        heading="Nie wiesz, od czego zacząć?"
        text="Większość rozmów, które prowadzimy, zaczyna się od jednego pytania: czy mój projekt lub moja sytuacja w ogóle nadaje się do budownictwa społecznego? Odpowiedź zajmuje nam jedną rozmowę."
        buttonLabel="Umów rozmowę"
        image={photos.ctaImg}
        maxWidth={640}
        imageOpacity={0.45}
      />
    </div>
  );
}
