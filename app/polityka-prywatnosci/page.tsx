import type { Metadata } from "next";
import Link from "next/link";
import { Eyebrow } from "@/components/ui";

export const metadata: Metadata = {
  title: "Polityka prywatności — Konsorcjum Social Living Europe",
  description:
    "Zasady przetwarzania danych osobowych i wykorzystywania plików cookies w serwisie Konsorcjum Social Living Europe.",
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

export default function PolitykaPrywatnosci() {
  return (
    <div>
      <section style={{ padding: "112px 0 56px", background: "var(--gray-bg)" }}>
        <div className="container-narrow">
          <Eyebrow label="Dokumenty" hero />
          <h1 className="h1" style={{ fontSize: "clamp(34px,4.6vw,56px)", color: "var(--dark)", margin: "0 0 16px" }}>
            Polityka prywatności
          </h1>
          <p style={{ fontSize: 15, color: "var(--subtle-2)", margin: 0 }}>
            Ostatnia aktualizacja: 23 czerwca 2026 r.
          </p>
        </div>
      </section>

      <section style={{ padding: "56px 0 100px" }}>
        <div className="container-narrow">
          <p style={p}>
            Niniejsza Polityka prywatności określa zasady przetwarzania danych
            osobowych oraz wykorzystywania plików cookies w serwisie internetowym
            dostępnym pod adresem sociallivingeurope.com (dalej: „Serwis”),
            prowadzonym przez Konsorcjum Social Living Europe.
          </p>

          <h2 style={h2}>1. Administrator danych osobowych</h2>
          <p style={p}>
            Administratorem danych osobowych jest <strong>Fundacja DivideYou</strong>{" "}
            z siedzibą przy ul. Szopena 27/1, 35-055 Rzeszów — lider Konsorcjum
            Social Living Europe, w skład którego wchodzi również Social Living
            Europe PSA z siedzibą przy ul. Wrzesińskiej 12, 03-713 Warszawa.
          </p>
          <p style={p}>
            W sprawach związanych z ochroną danych osobowych można kontaktować się
            z administratorem pod adresem e-mail:{" "}
            <a href="mailto:j.matuszak@sociallivingeurope.com" style={{ color: "var(--brand)", fontWeight: 600 }}>
              j.matuszak@sociallivingeurope.com
            </a>{" "}
            lub pisemnie na adres siedziby.
          </p>

          <h2 style={h2}>2. Zakres przetwarzanych danych</h2>
          <p style={p}>W związku z korzystaniem z Serwisu przetwarzamy:</p>
          <ul style={{ paddingLeft: 22, margin: "0 0 14px" }}>
            <li style={li}>
              <strong>dane podane w formularzu kontaktowym</strong> — imię i
              nazwisko, adres e-mail oraz informacje o projekcie, które dobrowolnie
              przekazujesz (np. lokalizacja, typ nieruchomości, planowana liczba
              mieszkań, oczekiwany model, dodatkowe informacje);
            </li>
            <li style={li}>
              <strong>dane techniczne</strong> — adres IP, typ przeglądarki i
              urządzenia oraz dane zbierane automatycznie za pośrednictwem plików
              cookies i podobnych technologii.
            </li>
          </ul>

          <h2 style={h2}>3. Cele i podstawy prawne przetwarzania</h2>
          <ul style={{ paddingLeft: 22, margin: "0 0 14px" }}>
            <li style={li}>
              obsługa zapytania przesłanego przez formularz lub e-mail oraz
              prowadzenie korespondencji — na podstawie art. 6 ust. 1 lit. b oraz
              lit. f RODO (prawnie uzasadniony interes administratora polegający na
              udzieleniu odpowiedzi);
            </li>
            <li style={li}>
              podjęcie działań zmierzających do zawarcia i wykonania umowy o
              współpracy — art. 6 ust. 1 lit. b RODO;
            </li>
            <li style={li}>
              zapewnienie prawidłowego działania, bezpieczeństwa i statystyki
              Serwisu — art. 6 ust. 1 lit. f RODO;
            </li>
            <li style={li}>
              ustalenie, dochodzenie lub obrona ewentualnych roszczeń — art. 6 ust.
              1 lit. f RODO.
            </li>
          </ul>

          <h2 style={h2}>4. Okres przechowywania danych</h2>
          <p style={p}>
            Dane przetwarzamy przez czas niezbędny do obsługi zapytania, a następnie
            przez okres przedawnienia ewentualnych roszczeń. Dane przetwarzane na
            podstawie prawnie uzasadnionego interesu przechowujemy do czasu
            skutecznego wniesienia sprzeciwu.
          </p>

          <h2 style={h2}>5. Odbiorcy danych</h2>
          <p style={p}>
            Dane mogą być powierzane podmiotom wspierającym administratora w
            prowadzeniu działalności, w szczególności dostawcom usług hostingowych,
            informatycznych, poczty elektronicznej oraz doradcom prawnym — wyłącznie
            w zakresie niezbędnym do realizacji wskazanych celów i na podstawie
            stosownych umów. W ramach Konsorcjum dane mogą być przekazywane między
            Fundacją DivideYou a Social Living Europe PSA na potrzeby obsługi
            projektu.
          </p>

          <h2 style={h2}>6. Przekazywanie danych poza EOG</h2>
          <p style={p}>
            Administrator co do zasady nie przekazuje danych poza Europejski Obszar
            Gospodarczy. Jeśli przekazanie takie okaże się konieczne (np. przy
            korzystaniu z usług dostawców spoza EOG), nastąpi ono wyłącznie przy
            zastosowaniu odpowiednich zabezpieczeń przewidzianych w RODO.
          </p>

          <h2 style={h2}>7. Twoje prawa</h2>
          <p style={p}>Przysługuje Ci prawo do:</p>
          <ul style={{ paddingLeft: 22, margin: "0 0 14px" }}>
            <li style={li}>dostępu do swoich danych oraz otrzymania ich kopii;</li>
            <li style={li}>sprostowania (poprawiania) danych;</li>
            <li style={li}>usunięcia danych;</li>
            <li style={li}>ograniczenia przetwarzania;</li>
            <li style={li}>przenoszenia danych;</li>
            <li style={li}>
              wniesienia sprzeciwu wobec przetwarzania opartego na prawnie
              uzasadnionym interesie;
            </li>
            <li style={li}>
              wniesienia skargi do Prezesa Urzędu Ochrony Danych Osobowych (ul.
              Stawki 2, 00-193 Warszawa).
            </li>
          </ul>
          <p style={p}>
            Podanie danych jest dobrowolne, jednak niezbędne do obsługi przesłanego
            zapytania.
          </p>

          <h2 style={h2}>8. Pliki cookies</h2>
          <p style={p}>
            Serwis może wykorzystywać pliki cookies — niewielkie pliki tekstowe
            zapisywane na urządzeniu użytkownika. Wykorzystujemy cookies niezbędne do
            prawidłowego działania Serwisu oraz, za zgodą użytkownika, cookies
            analityczne służące do tworzenia anonimowych statystyk. Ustawienia
            cookies można zmienić w każdej chwili w opcjach przeglądarki; ograniczenie
            ich stosowania może wpłynąć na niektóre funkcje Serwisu.
          </p>

          <h2 style={h2}>9. Zmiany Polityki prywatności</h2>
          <p style={p}>
            Administrator może aktualizować niniejszą Politykę prywatności w związku
            ze zmianami przepisów lub funkcjonowania Serwisu. Aktualna wersja jest
            każdorazowo publikowana na tej stronie z podaną datą ostatniej
            aktualizacji.
          </p>

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
