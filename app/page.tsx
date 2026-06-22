import Link from "next/link";
import { Eyebrow, Quote, CtaSection } from "@/components/ui";
import {
  roles,
  whyNow,
  ustawa,
  finStats,
  forWhom,
  projectTypes,
  revenueSteps,
  quoteCzerniak,
  photos,
} from "@/lib/data";

export default function Home() {
  return (
    <div>
      {/* HERO */}
      <section
        style={{
          position: "relative",
          minHeight: "86vh",
          display: "flex",
          alignItems: "center",
          background: "linear-gradient(120deg,#012a1f,#06513a)",
          overflow: "hidden",
        }}
      >
        {/* eslint-disable-next-line @next/next/no-img-element */}
        <img
          src="/assets/hero-green.png"
          alt=""
          style={{
            position: "absolute",
            inset: 0,
            width: "100%",
            height: "100%",
            objectFit: "cover",
            opacity: 0.7,
          }}
        />
        <div
          style={{
            position: "absolute",
            inset: 0,
            background:
              "linear-gradient(90deg,rgba(1,30,22,.93) 0%,rgba(1,30,22,.62) 44%,rgba(1,30,22,.12) 100%)",
          }}
        />
        <div className="container" style={{ position: "relative" }}>
          <div style={{ maxWidth: 960 }}>
            <Eyebrow label="Doradztwo · Finansowanie · Zarządzanie" tone="dark" hero />
            <h1
              className="h1"
              style={{ fontSize: "clamp(34px,4.3vw,56px)", lineHeight: 1.08, color: "#fff", margin: "0 0 24px" }}
            >
              Pomagamy sfinansować i zrealizować projekty budownictwa społecznego
            </h1>
            <p
              style={{
                fontSize: 18,
                lineHeight: 1.65,
                color: "rgba(255,255,255,.84)",
                maxWidth: 640,
                margin: "0 0 36px",
              }}
            >
              Social Living Europe doradza, finansuje i zarządza projektami
              budownictwa społecznego — łącząc sektor prywatny, samorządy i
              kapitał finansowy, z finansowaniem nawet do 100% ze środków
              publicznych i prywatnych.
            </p>
            <div style={{ display: "flex", gap: 16, flexWrap: "wrap" }}>
              <Link href="/finansowanie" className="btn btn-white btn-lg">
                Sprawdź model finansowania
              </Link>
              <Link href="/kontakt" className="btn btn-outline-light btn-lg">
                Porozmawiajmy o współpracy
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* PASEK ROLI */}
      <section style={{ background: "var(--brand)" }}>
        <div
          className="container grid-4"
          style={{ padding: "36px", display: "grid", gridTemplateColumns: "repeat(4,1fr)", gap: 24 }}
        >
          {roles.map((r) => (
            <div key={r.title} style={{ borderLeft: "2px solid var(--gold)", paddingLeft: 18 }}>
              <div className="serif" style={{ fontSize: 21, fontWeight: 500, color: "#fff", lineHeight: 1.1 }}>
                {r.title}
              </div>
              <div style={{ fontSize: 13.5, color: "rgba(255,255,255,.72)", marginTop: 7, lineHeight: 1.45 }}>
                {r.desc}
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* CZYM JEST BUDOWNICTWO SPOŁECZNE */}
      <section className="sec">
        <div
          className="container grid-2"
          style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: 64, alignItems: "center" }}
        >
          <div>
            <Eyebrow label="Czym jest budownictwo społeczne" />
            <h2
              className="h2"
              style={{ fontSize: "clamp(30px,3.8vw,44px)", color: "var(--dark)", margin: "0 0 22px" }}
            >
              To znacznie więcej niż SIM i TBS
            </h2>
            <p style={{ fontSize: 17, lineHeight: 1.75, color: "var(--muted)", margin: "0 0 22px" }}>
              Budownictwo społeczne to mieszkania dostępne cenowo: czynszowe,
              pracownicze, senioralne, rent-to-buy oraz modele dojścia do
              zdolności kredytowej. Obejmuje rozwiązania zarówno ustawowe, jak i
              pozaustawowe.
            </p>
            <div style={{ marginTop: 4, display: "flex", gap: 14, flexWrap: "wrap" }}>
              <Link href="/modele" className="btn btn-brand btn-md">
                Poznaj nasze modele
              </Link>
              <Link href="/kontakt" className="btn btn-outline-dark btn-md">
                Skonsultuj projekt
              </Link>
            </div>
          </div>
          <div
            style={{
              position: "relative",
              height: 420,
              borderRadius: 6,
              overflow: "hidden",
              background: "linear-gradient(120deg,#0a4632,#0d6346)",
            }}
          >
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img
              src={photos.imgWhat}
              alt=""
              style={{ position: "absolute", inset: 0, width: "100%", height: "100%", objectFit: "cover" }}
            />
          </div>
        </div>
      </section>

      {/* DLACZEGO TERAZ */}
      <section className="sec-gray" style={{ padding: "96px 0" }}>
        <div className="container">
          <div style={{ maxWidth: 680, marginBottom: 46 }}>
            <Eyebrow label="Dlaczego teraz" />
            <h2
              className="h2"
              style={{ fontSize: "clamp(28px,3.6vw,42px)", color: "var(--dark)", margin: "0 0 14px" }}
            >
              Rynek społeczny buduje marginalnie. Pula publiczna jest rekordowa.
            </h2>
            <p style={{ fontSize: 16.5, lineHeight: 1.7, color: "var(--muted)", margin: 0 }}>
              Państwo odeszło od wspierania zakupów własności i kieruje środki na
              społeczne budownictwo czynszowe. To okno, które trwa — ale nie
              czeka.
            </p>
          </div>
          <div
            className="grid-3 grid-stack-sm"
            style={{
              display: "grid",
              gridTemplateColumns: "repeat(3,1fr)",
              gap: 1,
              background: "#dde3dc",
              border: "1px solid #dde3dc",
              borderRadius: 6,
              overflow: "hidden",
            }}
          >
            {whyNow.map((w) => (
              <div key={w.l} style={{ background: "#fff", padding: "34px 30px" }}>
                <div
                  className="serif"
                  style={{ fontSize: "clamp(34px,3.6vw,48px)", fontWeight: 500, color: "var(--brand)", lineHeight: 1 }}
                >
                  {w.v}
                </div>
                <div style={{ fontSize: 14, color: "var(--muted-2)", marginTop: 12, lineHeight: 1.55 }}>
                  {w.l}
                </div>
              </div>
            ))}
          </div>
          <div style={{ marginTop: 40 }}>
            <Quote text={quoteCzerniak.t} author={quoteCzerniak.a} variant="dark" />
          </div>
        </div>
      </section>

      {/* NADCHODZĄCA USTAWA */}
      <section className="sec-gray" style={{ padding: "84px 0" }}>
        <div className="container">
          <div style={{ maxWidth: 680, marginBottom: 44 }}>
            <div
              style={{
                fontSize: 13,
                letterSpacing: "2.5px",
                textTransform: "uppercase",
                color: "var(--subtle)",
                fontWeight: 600,
                marginBottom: 16,
              }}
            >
              Nadchodząca ustawa
            </div>
            <h2 className="h2" style={{ fontSize: "clamp(28px,3.6vw,42px)", color: "var(--dark)", margin: 0 }}>
              Nowe możliwości dla projektów mieszkaniowych
            </h2>
          </div>
          <div
            className="grid-4"
            style={{ display: "grid", gridTemplateColumns: "repeat(4,1fr)", gap: 24, marginBottom: 30 }}
          >
            {ustawa.map((u) => (
              <div
                key={u.title}
                className="card-hover"
                style={{
                  background: "#fff",
                  border: "1px solid var(--border)",
                  borderTop: "3px solid var(--gold-dark)",
                  borderRadius: 4,
                  padding: "28px 24px",
                }}
              >
                <div
                  className="serif"
                  style={{ fontSize: 18, fontWeight: 600, color: "var(--dark)", marginBottom: 10, lineHeight: 1.25 }}
                >
                  {u.title}
                </div>
                <p style={{ fontSize: 14.5, lineHeight: 1.6, color: "var(--muted-2)", margin: 0 }}>{u.desc}</p>
              </div>
            ))}
          </div>
          <div
            style={{
              display: "flex",
              gap: 12,
              alignItems: "flex-start",
              background: "var(--green-bg)",
              border: "1px solid #d8e4dd",
              borderRadius: 4,
              padding: "18px 22px",
            }}
          >
            <div
              style={{ width: 7, height: 7, borderRadius: "50%", background: "var(--gold-dark)", marginTop: 7, flex: "none" }}
            />
            <p style={{ fontSize: 14.5, lineHeight: 1.6, color: "#3f4f49", margin: 0 }}>
              Projekt ustawy jest wciąż na etapie legislacyjnym, ale wyraźnie
              wyznacza kierunek zmian — i już dziś warto przygotować projekt pod
              nowe zasady.
            </p>
          </div>
          <div style={{ marginTop: 30 }}>
            <Link href="/finansowanie" className="btn btn-brand btn-md">
              Sprawdź możliwości finansowania
            </Link>
          </div>
        </div>
      </section>

      {/* PASEK FINANSOWANIA */}
      <section className="sec-dark" style={{ padding: "74px 0" }}>
        <div className="container">
          <div
            style={{
              display: "flex",
              alignItems: "flex-end",
              justifyContent: "space-between",
              gap: 24,
              flexWrap: "wrap",
              marginBottom: 40,
            }}
          >
            <div style={{ maxWidth: 640 }}>
              <Eyebrow label="Finansowanie" tone="dark" />
              <h2 className="h2" style={{ fontSize: "clamp(28px,3.6vw,42px)", color: "#fff", margin: 0 }}>
                Do 100% inwestycji ze środków publicznych i prywatnych
              </h2>
            </div>
            <p style={{ fontSize: 16, lineHeight: 1.7, color: "rgba(255,255,255,.78)", margin: 0, maxWidth: 420 }}>
              Łączymy dotacje, kredyt preferencyjny BGK i kapitał prywatnych
              funduszy, który pozyskujemy lub wnosimy samodzielnie.
            </p>
          </div>
          <div className="grid-4" style={{ display: "grid", gridTemplateColumns: "repeat(4,1fr)", gap: 20 }}>
            {finStats.map((fs) => (
              <div
                key={fs.l}
                style={{
                  background: "rgba(255,255,255,.05)",
                  border: "1px solid rgba(255,255,255,.14)",
                  borderLeft: "3px solid var(--gold)",
                  borderRadius: 4,
                  padding: "28px 24px",
                }}
              >
                <div
                  className="serif"
                  style={{ fontSize: "clamp(30px,3.2vw,42px)", fontWeight: 500, color: "#fff", lineHeight: 1 }}
                >
                  {fs.v}
                </div>
                <div style={{ fontSize: 13.5, color: "rgba(255,255,255,.72)", marginTop: 12, lineHeight: 1.5 }}>
                  {fs.l}
                </div>
              </div>
            ))}
          </div>
          <div style={{ marginTop: 36 }}>
            <Link href="/finansowanie" className="btn btn-white btn-md">
              Poznaj sześć źródeł finansowania
            </Link>
          </div>
        </div>
      </section>

      {/* Z KIM PRACUJEMY */}
      <section className="sec">
        <div className="container">
          <div style={{ textAlign: "center", maxWidth: 640, margin: "0 auto 50px" }}>
            <Eyebrow label="Z kim pracujemy" center />
            <h2 className="h2" style={{ fontSize: "clamp(30px,4vw,46px)", color: "var(--dark)", margin: 0, lineHeight: 1.1 }}>
              Pięć grup partnerów przy jednym stole
            </h2>
          </div>
          <div className="grid-5" style={{ display: "grid", gridTemplateColumns: "repeat(5,1fr)", gap: 20 }}>
            {forWhom.map((f) => (
              <div
                key={f.title}
                className="photo-card"
                style={{
                  position: "relative",
                  minHeight: 340,
                  borderRadius: 4,
                  overflow: "hidden",
                  display: "flex",
                  flexDirection: "column",
                  justifyContent: "flex-end",
                }}
              >
                {/* eslint-disable-next-line @next/next/no-img-element */}
                <img
                  src={f.img}
                  alt=""
                  style={{ position: "absolute", inset: 0, width: "100%", height: "100%", objectFit: "cover" }}
                />
                <div
                  style={{
                    position: "absolute",
                    inset: 0,
                    background:
                      "linear-gradient(180deg,rgba(1,30,22,.15) 0%,rgba(1,30,22,.55) 40%,rgba(1,30,22,.94) 100%)",
                  }}
                />
                <div style={{ position: "relative", padding: "24px 22px" }}>
                  <h3 className="serif" style={{ fontWeight: 500, fontSize: 20, color: "#fff", margin: "0 0 8px", lineHeight: 1.15 }}>
                    {f.title}
                  </h3>
                  <p style={{ fontSize: 13, color: "rgba(255,255,255,.82)", margin: 0, lineHeight: 1.5 }}>{f.desc}</p>
                </div>
              </div>
            ))}
          </div>
          <div style={{ textAlign: "center", marginTop: 44 }}>
            <Link href="/wspolpraca" className="btn btn-brand btn-lg">
              Sprawdź formy współpracy
            </Link>
          </div>
        </div>
      </section>

      {/* PIĘĆ MODELI */}
      <section className="sec-dark" style={{ padding: "90px 0" }}>
        <div className="container">
          <div style={{ maxWidth: 680, marginBottom: 44 }}>
            <Eyebrow label="Modele" tone="dark" />
            <h2 className="h2" style={{ fontSize: "clamp(28px,3.6vw,42px)", color: "#fff", margin: 0 }}>
              Pięć gotowych modeli do wdrożenia
            </h2>
          </div>
          <div className="grid-5" style={{ display: "grid", gridTemplateColumns: "repeat(5,1fr)", gap: 18 }}>
            {projectTypes.map((pt) => (
              <div
                key={pt.num}
                style={{
                  background: "rgba(255,255,255,.05)",
                  border: "1px solid rgba(255,255,255,.14)",
                  borderLeft: "3px solid var(--gold)",
                  borderRadius: 4,
                  padding: "26px 22px",
                  minHeight: 190,
                }}
              >
                <div className="serif" style={{ fontSize: 30, color: "var(--gold)", lineHeight: 1, marginBottom: 14 }}>
                  {pt.num}
                </div>
                <div style={{ fontSize: 16, fontWeight: 600, color: "#fff", lineHeight: 1.3, marginBottom: 10 }}>
                  {pt.title}
                </div>
                <div style={{ fontSize: 13, color: "rgba(255,255,255,.72)", lineHeight: 1.5 }}>{pt.desc}</div>
              </div>
            ))}
          </div>
          <div style={{ marginTop: 40 }}>
            <Link href="/modele" className="btn btn-white btn-lg">
              Poznaj wszystkie modele
            </Link>
          </div>
        </div>
      </section>

      {/* JAK ZARABIA SIĘ W TYM MODELU */}
      <section className="sec">
        <div
          className="container grid-2"
          style={{ display: "grid", gridTemplateColumns: "1.05fr 1fr", gap: 64, alignItems: "center" }}
        >
          <div>
            <Eyebrow label="Jak zarabia się w tym modelu" />
            <h2 className="h2" style={{ fontSize: "clamp(28px,3.6vw,42px)", color: "var(--dark)", margin: "0 0 20px" }}>
              To nie model „zbuduj i sprzedaj”, lecz zarabianie na całym procesie
            </h2>
            <p style={{ fontSize: 16.5, lineHeight: 1.75, color: "var(--muted)", margin: "0 0 16px" }}>
              W budownictwie społecznym zysk nie musi powstawać dopiero przy
              sprzedaży mieszkań. Wartość można budować wcześniej i stabilniej —
              na przygotowaniu projektu, pozyskaniu finansowania, realizacji
              budowy, zarządzaniu inwestycją oraz obsłudze zasobu mieszkaniowego.
            </p>
            <p style={{ fontSize: 16.5, lineHeight: 1.75, color: "var(--muted)", margin: 0 }}>
              Dla partnera prywatnego oznacza to możliwość zarabiania na
              konkretnych etapach projektu, bez opierania całego modelu wyłącznie
              na sprzedaży lokali.
            </p>
          </div>
          <div
            style={{
              position: "relative",
              height: 440,
              borderRadius: 6,
              overflow: "hidden",
              background: "linear-gradient(120deg,#0a4632,#0d6346)",
            }}
          >
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img
              src={photos.imgRevenue}
              alt=""
              style={{ position: "absolute", inset: 0, width: "100%", height: "100%", objectFit: "cover" }}
            />
          </div>
        </div>
        <div className="container" style={{ marginTop: 56 }}>
          <div className="grid-5" style={{ display: "grid", gridTemplateColumns: "repeat(5,1fr)", gap: 20 }}>
            {revenueSteps.map((rs) => (
              <div key={rs.num} style={{ borderTop: "2px solid var(--gold-dark)", paddingTop: 22 }}>
                <div className="serif" style={{ fontSize: 26, color: "var(--gold-dark)", lineHeight: 1, marginBottom: 12 }}>
                  {rs.num}
                </div>
                <h3 className="serif" style={{ fontWeight: 500, fontSize: 18, color: "var(--dark)", margin: "0 0 10px", lineHeight: 1.25 }}>
                  {rs.title}
                </h3>
                <p style={{ fontSize: 14, lineHeight: 1.6, color: "var(--muted-2)", margin: 0 }}>{rs.desc}</p>
              </div>
            ))}
          </div>
          <div style={{ marginTop: 44 }}>
            <Link href="/kontakt" className="btn btn-brand btn-lg">
              Porozmawiajmy o współpracy
            </Link>
          </div>
        </div>
      </section>

      {/* MISJA */}
      <section className="sec-gray" style={{ padding: "96px 0" }}>
        <div className="container-980" style={{ textAlign: "center" }}>
          <Eyebrow label="Nasza misja" center />
          <p
            className="serif"
            style={{ fontWeight: 400, fontSize: "clamp(24px,3vw,36px)", lineHeight: 1.4, color: "var(--dark)", margin: 0 }}
          >
            Łączymy kapitał, samorządy i realne potrzeby społeczne — tworząc{" "}
            <span style={{ color: "#5e7269" }}>
              wykonalne modele mieszkaniowe, które są dostępne społecznie i
              racjonalne finansowo.
            </span>
          </p>
        </div>
      </section>

      {/* CTA */}
      <CtaSection
        heading="Masz projekt lub grunt? Sprawdźmy jego wykonalność"
        text="Pomożemy dobrać model, ułożyć finansowanie i zaplanować realizację — od pierwszej analizy po zarządzanie inwestycją."
        buttonLabel="Porozmawiajmy o współpracy"
        image={photos.ctaImg}
      />
    </div>
  );
}
