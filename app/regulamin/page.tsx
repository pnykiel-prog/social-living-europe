import type { Metadata } from "next";
import Link from "next/link";
import { Eyebrow } from "@/components/ui";

export const metadata: Metadata = {
  title: "Regulamin — Konsorcjum Social Living Europe",
  description:
    "Regulamin korzystania z serwisu internetowego Konsorcjum Social Living Europe.",
};

const h2: React.CSSProperties = {
  fontSize: "clamp(22px,2.6vw,30px)",
  color: "var(--dark)",
  margin: "44px 0 14px",
  lineHeight: 1.2,
};
const p: React.CSSProperties = {
  fontSize: 16,
  lineHeight: 1.75,
  color: "var(--muted)",
  margin: "0 0 14px",
};
const li: React.CSSProperties = {
  fontSize: 16,
  lineHeight: 1.7,
  color: "var(--muted)",
  margin: "0 0 8px",
};

export default function Regulamin() {
  return (
    <div>
      <section style={{ padding: "112px 0 56px", background: "var(--gray-bg)" }}>
        <div className="container-narrow">
          <Eyebrow label="Dokumenty" hero />
          <h1 className="h1" style={{ fontSize: "clamp(34px,4.6vw,56px)", color: "var(--dark)", margin: "0 0 16px" }}>
            Regulamin serwisu
          </h1>
          <p style={{ fontSize: 15, color: "var(--subtle-2)", margin: 0 }}>
            Ostatnia aktualizacja: 23 czerwca 2026 r.
          </p>
        </div>
      </section>

      <section style={{ padding: "56px 0 100px" }}>
        <div className="container-narrow">
          <h2 style={h2}>§ 1. Postanowienia ogólne</h2>
          <ul style={{ paddingLeft: 22, margin: "0 0 14px" }}>
            <li style={li}>
              Niniejszy Regulamin określa zasady korzystania z serwisu internetowego
              dostępnego pod adresem sociallivingeurope.com (dalej: „Serwis”).
            </li>
            <li style={li}>
              Usługodawcą i właścicielem Serwisu jest Konsorcjum Social Living
              Europe, którego liderem jest <strong>Fundacja DivideYou</strong> (ul.
              Szopena 27/1, 35-055 Rzeszów), działająca wspólnie z Social Living
              Europe PSA (ul. Wrzesińska 12, 03-713 Warszawa).
            </li>
            <li style={li}>
              Użytkownikiem jest każda osoba korzystająca z Serwisu.
            </li>
            <li style={li}>
              Korzystanie z Serwisu oznacza akceptację postanowień niniejszego
              Regulaminu.
            </li>
          </ul>

          <h2 style={h2}>§ 2. Rodzaj i zakres usług</h2>
          <ul style={{ paddingLeft: 22, margin: "0 0 14px" }}>
            <li style={li}>
              Serwis ma charakter <strong>informacyjny</strong> i służy prezentacji
              działalności Konsorcjum w obszarze doradztwa, finansowania i
              zarządzania projektami budownictwa społecznego.
            </li>
            <li style={li}>
              Za pośrednictwem Serwisu Użytkownik może skontaktować się z
              Usługodawcą oraz przesłać zapytanie przez formularz kontaktowy.
            </li>
            <li style={li}>
              Korzystanie z Serwisu jest nieodpłatne.
            </li>
          </ul>

          <h2 style={h2}>§ 3. Warunki techniczne</h2>
          <p style={p}>
            Do korzystania z Serwisu niezbędne jest urządzenie z dostępem do
            internetu, aktualna przeglądarka internetowa z obsługą JavaScript oraz —
            w przypadku korzystania z formularza — aktywne konto poczty
            elektronicznej.
          </p>

          <h2 style={h2}>§ 4. Charakter informacji i wyłączenie oferty</h2>
          <ul style={{ paddingLeft: 22, margin: "0 0 14px" }}>
            <li style={li}>
              Informacje zamieszczone w Serwisie, w tym dane dotyczące modeli,
              finansowania, oprocentowania, dotacji oraz wskaźniki liczbowe, mają
              charakter wyłącznie informacyjny i poglądowy.
            </li>
            <li style={li}>
              Treści te <strong>nie stanowią oferty</strong> w rozumieniu art. 66
              Kodeksu cywilnego, ani porady prawnej, podatkowej czy inwestycyjnej.
            </li>
            <li style={li}>
              Warunki ewentualnej współpracy każdorazowo ustalane są indywidualnie w
              odrębnej umowie.
            </li>
          </ul>

          <h2 style={h2}>§ 5. Prawa własności intelektualnej</h2>
          <p style={p}>
            Wszelkie treści Serwisu — w szczególności teksty, grafiki, logotypy,
            układ i szata graficzna — są chronione prawem autorskim i stanowią
            własność Usługodawcy lub są wykorzystywane na podstawie odpowiednich
            uprawnień. Kopiowanie, rozpowszechnianie lub inne wykorzystywanie treści
            bez zgody Usługodawcy jest niedozwolone, z wyjątkiem dozwolonego użytku
            przewidzianego przepisami prawa.
          </p>

          <h2 style={h2}>§ 6. Odpowiedzialność</h2>
          <ul style={{ paddingLeft: 22, margin: "0 0 14px" }}>
            <li style={li}>
              Usługodawca dokłada starań, aby informacje w Serwisie były aktualne i
              rzetelne, jednak nie gwarantuje ich kompletności ani przydatności do
              określonego celu.
            </li>
            <li style={li}>
              Usługodawca nie ponosi odpowiedzialności za decyzje podjęte wyłącznie
              na podstawie treści zamieszczonych w Serwisie ani za przerwy w
              działaniu Serwisu wynikające z przyczyn od niego niezależnych.
            </li>
            <li style={li}>
              Użytkownik zobowiązany jest korzystać z Serwisu zgodnie z prawem i
              dobrymi obyczajami oraz nie dostarczać treści o charakterze
              bezprawnym.
            </li>
          </ul>

          <h2 style={h2}>§ 7. Reklamacje</h2>
          <p style={p}>
            Uwagi i reklamacje dotyczące funkcjonowania Serwisu można zgłaszać na
            adres{" "}
            <a href="mailto:office@sociallivingeurope.com" style={{ color: "var(--brand)", fontWeight: 600 }}>
              office@sociallivingeurope.com
            </a>
            . Reklamacje rozpatrywane są w terminie do 14 dni od dnia ich otrzymania.
          </p>

          <h2 style={h2}>§ 8. Dane osobowe</h2>
          <p style={p}>
            Zasady przetwarzania danych osobowych oraz wykorzystywania plików cookies
            opisane są w{" "}
            <Link href="/polityka-prywatnosci" style={{ color: "var(--brand)", fontWeight: 600 }}>
              Polityce prywatności
            </Link>
            .
          </p>

          <h2 style={h2}>§ 9. Postanowienia końcowe</h2>
          <ul style={{ paddingLeft: 22, margin: "0 0 14px" }}>
            <li style={li}>
              Usługodawca zastrzega sobie prawo do zmiany Regulaminu z ważnych
              przyczyn; aktualna wersja jest każdorazowo publikowana w Serwisie.
            </li>
            <li style={li}>
              W sprawach nieuregulowanych Regulaminem zastosowanie mają przepisy
              prawa polskiego.
            </li>
          </ul>

          <div style={{ marginTop: 48 }}>
            <Link href="/kontakt" className="btn btn-brand btn-md">
              Masz pytania? Skontaktuj się
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}
