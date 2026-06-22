import Link from "next/link";
import Image from "next/image";

export default function Footer() {
  return (
    <footer className="footer">
      <div className="container">
        <div className="footer-grid">
          <div>
            <div style={{ display: "flex", alignItems: "center", gap: 11, marginBottom: 18 }}>
              <Image
                src="/assets/logo-mark-icon.png"
                alt=""
                width={40}
                height={40}
                style={{
                  height: 40,
                  width: "auto",
                  display: "block",
                  filter: "brightness(0) invert(1)",
                  opacity: 0.92,
                }}
              />
              <div className="serif" style={{ fontSize: 18, fontWeight: 600 }}>
                Konsorcjum Social Living Europe
              </div>
            </div>
            <p
              style={{
                fontSize: 14.5,
                lineHeight: 1.7,
                color: "rgba(255,255,255,.66)",
                margin: 0,
                maxWidth: 360,
              }}
            >
              Konsorcjum (Fundacja DivideYou i Social Living Europe PSA) doradza,
              finansuje modelowo, strukturyzuje i zarządza projektami budownictwa
              społecznego — łącząc sektor prywatny, JST i kapitał finansowy.
            </p>
          </div>
          <div>
            <h4>Strona</h4>
            <div className="footer-links">
              <Link href="/">Strona główna</Link>
              <Link href="/o-nas">O nas</Link>
            </div>
          </div>
          <div>
            <h4>Oferta</h4>
            <div className="footer-links">
              <Link href="/finansowanie">Finansowanie</Link>
              <Link href="/modele">Modele</Link>
              <Link href="/wspolpraca">Współpraca</Link>
            </div>
          </div>
          <div>
            <h4>Kontakt</h4>
            <div className="footer-links">
              <span>office@sociallivingeurope.com</span>
              <span>+48 607 695 900</span>
              <span>ul. Wrzesińska 12, Warszawa</span>
            </div>
          </div>
        </div>
        <div className="footer-bottom">
          <div style={{ fontSize: 13, color: "rgba(255,255,255,.5)" }}>
            © 2026 Konsorcjum Social Living Europe — Fundacja DivideYou · Social
            Living Europe PSA. Wszelkie prawa zastrzeżone.
          </div>
          <div style={{ display: "flex", gap: 26 }}>
            <span style={{ fontSize: 13, color: "rgba(255,255,255,.6)", cursor: "pointer" }}>
              Polityka prywatności
            </span>
            <span style={{ fontSize: 13, color: "rgba(255,255,255,.6)", cursor: "pointer" }}>
              Regulamin
            </span>
          </div>
        </div>
      </div>
    </footer>
  );
}
