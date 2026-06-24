"use client";

import { useState, useRef } from "react";
import Link from "next/link";
import { Eyebrow } from "@/components/ui";
import { roleOptions } from "@/lib/data";

export default function Kontakt() {
  const [status, setStatus] = useState<"idle" | "sending" | "sent" | "error">("idle");
  const [error, setError] = useState("");
  const [role, setRole] = useState<string | null>(null);
  const loadedAt = useRef(Date.now());

  const submit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (status === "sending") return;
    const form = e.currentTarget;
    setStatus("sending");
    setError("");
    const payload: Record<string, string> = Object.fromEntries(
      new FormData(form).entries()
    ) as Record<string, string>;
    payload.role = role || "";
    payload.ts = String(loadedAt.current);
    try {
      const res = await fetch("/api/kontakt", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(payload),
      });
      const json = await res.json().catch(() => ({}));
      if (res.ok && json.ok) {
        setStatus("sent");
        form.reset();
        setRole(null);
      } else {
        setStatus("error");
        setError(json.error || "Nie udało się wysłać wiadomości.");
      }
    } catch {
      setStatus("error");
      setError("Brak połączenia. Spróbuj ponownie za chwilę.");
    }
  };

  return (
    <div>
      {/* HERO */}
      <section style={{ padding: "116px 0 64px", background: "var(--gray-bg)" }}>
        <div className="container">
          <div style={{ maxWidth: 820 }}>
            <Eyebrow label="Kontakt" hero />
            <h1 className="h1" style={{ fontSize: "clamp(36px,5vw,60px)", color: "var(--dark)", margin: "0 0 20px" }}>
              Sprawdźmy wykonalność Twojego projektu
            </h1>
            <p style={{ fontSize: 18, lineHeight: 1.7, color: "var(--muted)", margin: 0, maxWidth: 640 }}>
              Wypełnij krótką ankietę projektową lub napisz do nas — odezwiemy się
              ze wstępną oceną i propozycją modelu.
            </p>
          </div>
        </div>
      </section>

      {/* FORMULARZ + PANEL */}
      <section style={{ padding: "70px 0 110px" }}>
        <div
          className="container grid-2"
          style={{ display: "grid", gridTemplateColumns: "1.35fr 1fr", gap: 64, alignItems: "start" }}
        >
          <form onSubmit={submit} style={{ display: "flex", flexDirection: "column", gap: 22 }}>
            {/* honeypot antyspamowy — ukryty; nazwa spoza standardu autouzupełniania */}
            <input
              type="text"
              name="hp_field"
              tabIndex={-1}
              autoComplete="off"
              aria-hidden="true"
              style={{ position: "absolute", left: "-9999px", width: 1, height: 1, opacity: 0 }}
            />
            <div>
              <label style={{ display: "block", fontSize: 13, fontWeight: 600, color: "#3f4f49", marginBottom: 10 }}>
                Reprezentuję
              </label>
              <div style={{ display: "flex", gap: 10, flexWrap: "wrap" }}>
                {roleOptions.map((ro) => (
                  <span
                    key={ro}
                    className={`chip${role === ro ? " selected" : ""}`}
                    onClick={() => setRole(ro)}
                    role="button"
                    tabIndex={0}
                    onKeyDown={(e) => {
                      if (e.key === "Enter" || e.key === " ") {
                        e.preventDefault();
                        setRole(ro);
                      }
                    }}
                  >
                    {ro}
                  </span>
                ))}
              </div>
            </div>

            <div className="grid-2 grid-stack-sm field" style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: 22 }}>
              <div>
                <label>Imię i nazwisko</label>
                <input type="text" name="name" placeholder="Jan Kowalski" />
              </div>
              <div>
                <label>E-mail</label>
                <input type="email" name="email" placeholder="jan@firma.pl" required />
              </div>
            </div>

            <div style={{ borderTop: "1px solid #e2e6e0", paddingTop: 22 }}>
              <div style={{ fontSize: 13, letterSpacing: "1.5px", textTransform: "uppercase", color: "var(--subtle-2)", fontWeight: 700, marginBottom: 18 }}>
                Krótka ankieta projektowa
              </div>
              <div className="grid-2 grid-stack-sm field" style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: 22 }}>
                <div>
                  <label>Lokalizacja</label>
                  <input type="text" name="location" placeholder="Miasto / gmina" />
                </div>
                <div>
                  <label>Typ nieruchomości</label>
                  <input type="text" name="propertyType" placeholder="Grunt / budynek do adaptacji" />
                </div>
                <div>
                  <label>Liczba mieszkań</label>
                  <input type="text" name="units" placeholder="np. 60" />
                </div>
                <div>
                  <label>Szacowany koszt budowy / adaptacji</label>
                  <input type="text" name="cost" placeholder="np. 20 mln zł" />
                </div>
                <div>
                  <label>Status rozmów z gminą</label>
                  <select name="communeStatus" defaultValue="Brak rozmów">
                    <option>Brak rozmów</option>
                    <option>Wstępne rozmowy</option>
                    <option>Zaawansowane ustalenia</option>
                    <option>Nie dotyczy</option>
                  </select>
                </div>
                <div>
                  <label>Oczekiwany model</label>
                  <select name="model" defaultValue="SIM / TBS">
                    <option>SIM / TBS</option>
                    <option>Rent-to-buy</option>
                    <option>Pracowniczy</option>
                    <option>Senioralny</option>
                    <option>Jeszcze nie wiem</option>
                  </select>
                </div>
              </div>
            </div>

            <div className="field">
              <label>Dodatkowe informacje</label>
              <textarea name="message" rows={4} placeholder="Opisz krótko projekt i oczekiwania..." />
            </div>

            <label
              style={{
                display: "flex",
                gap: 11,
                alignItems: "flex-start",
                fontSize: 13,
                lineHeight: 1.55,
                color: "var(--muted)",
                cursor: "pointer",
              }}
            >
              <input
                type="checkbox"
                name="consent"
                required
                style={{ marginTop: 2, width: 17, height: 17, flex: "none", accentColor: "var(--brand)" }}
              />
              <span>
                Wyrażam zgodę na przetwarzanie moich danych osobowych przez
                Fundację DivideYou w celu obsługi przesłanego zapytania, zgodnie z{" "}
                <Link href="/polityka-prywatnosci" style={{ color: "var(--brand)", fontWeight: 600, textDecoration: "underline" }}>
                  Polityką prywatności
                </Link>
                . *
              </span>
            </label>

            <div style={{ display: "flex", alignItems: "center", gap: 18, flexWrap: "wrap" }}>
              <button
                type="submit"
                className="btn btn-brand"
                disabled={status === "sending"}
                style={{ padding: "16px 36px", fontSize: 15, opacity: status === "sending" ? 0.7 : 1 }}
              >
                {status === "sending" ? "Wysyłanie…" : "Wyślij zgłoszenie"}
              </button>
              {status === "sent" && (
                <span style={{ fontSize: 14.5, color: "var(--pos)", fontWeight: 600 }}>
                  ✓ Dziękujemy! Wiadomość została wysłana — odezwiemy się ze wstępną oceną.
                </span>
              )}
              {status === "error" && (
                <span style={{ fontSize: 14.5, color: "#b3261e", fontWeight: 600 }}>
                  {error}
                </span>
              )}
            </div>
            <p style={{ fontSize: 12.5, lineHeight: 1.6, color: "var(--subtle-2)", margin: "6px 0 0", maxWidth: 560 }}>
              Administratorem danych osobowych jest Fundacja DivideYou. Dane z
              formularza będą przetwarzane wyłącznie w celu obsługi przesłanego
              zapytania. Szczegóły dotyczące przetwarzania danych znajdują się w{" "}
              <Link href="/polityka-prywatnosci" style={{ color: "var(--brand)", fontWeight: 600, textDecoration: "underline" }}>
                Polityce Prywatności
              </Link>
              .
            </p>
          </form>

          <div style={{ background: "var(--gray-bg)", borderRadius: 6, padding: "40px 36px" }}>
            <h3 className="serif" style={{ fontWeight: 500, fontSize: 24, color: "var(--dark)", margin: "0 0 28px" }}>
              Konsorcjum Social Living Europe
            </h3>
            <div className="grid-2" style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: 26, marginBottom: 28 }}>
              <div>
                <div className="serif" style={{ fontSize: 17, fontWeight: 600, color: "var(--dark)", marginBottom: 10 }}>
                  Lider konsorcjum
                </div>
                <div style={{ fontSize: 14.5, color: "var(--muted)", lineHeight: 1.6 }}>
                  Fundacja Divideyou
                  <br />
                  ul. Szopena 27/1
                  <br />
                  35-055 Rzeszów
                </div>
              </div>
              <div>
                <div className="serif" style={{ fontSize: 17, fontWeight: 600, color: "var(--dark)", marginBottom: 10 }}>
                  Prosta spółka akcyjna
                </div>
                <div style={{ fontSize: 14.5, color: "var(--muted)", lineHeight: 1.6 }}>
                  Social Living Europe PSA
                  <br />
                  ul. Wrzesińska 12
                  <br />
                  03-713 Warszawa
                </div>
              </div>
            </div>
            <div style={{ borderTop: "1px solid #dde3dc", paddingTop: 26, display: "flex", flexDirection: "column", gap: 22 }}>
              {[
                { label: "Biuro zarządu", lines: ["office@sociallivingeurope.com", "+48 607 695 900"] },
                { label: "Dział prawny", lines: ["j.matuszak@sociallivingeurope.com", "+48 504 072 346"] },
                { label: "Dział rozwoju projektów", lines: ["p.nykiel@sociallivingeurope.com", "+48 570 001 011"] },
              ].map((d) => (
                <div key={d.label}>
                  <div style={{ fontSize: 12, letterSpacing: "1.5px", textTransform: "uppercase", color: "var(--subtle-2)", fontWeight: 600, marginBottom: 7 }}>
                    {d.label}
                  </div>
                  <div style={{ fontSize: 15, color: "var(--dark)", fontWeight: 500, lineHeight: 1.5 }}>
                    {d.lines[0]}
                    <br />
                    {d.lines[1]}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
