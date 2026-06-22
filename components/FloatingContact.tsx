import Link from "next/link";

export default function FloatingContact() {
  return (
    <Link href="/kontakt" className="floating" aria-label="Skontaktuj się">
      <span style={{ fontSize: 17, lineHeight: 1 }}>✉</span>
      Skontaktuj się
    </Link>
  );
}
