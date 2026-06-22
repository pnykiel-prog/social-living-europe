"use client";

import Link from "next/link";
import Image from "next/image";
import { usePathname } from "next/navigation";
import { useState } from "react";
import { NAV } from "@/lib/data";

export default function Header() {
  const pathname = usePathname();
  const [open, setOpen] = useState(false);
  const isActive = (href: string) =>
    href === "/" ? pathname === "/" : pathname.startsWith(href);

  return (
    <>
      <div className="topbar">
        <div className="topbar-inner">
          <div className="topbar-left">Konsorcjum Social Living Europe</div>
          <div className="topbar-right">
            Fundacja DivideYou · Social Living Europe PSA
          </div>
        </div>
      </div>

      <header className="header">
        <div className="header-inner">
          <Link href="/" className="logo" aria-label="Social Living Europe — strona główna">
            <Image
              src="/assets/logo-mark-icon.png"
              alt="Social Living Europe"
              width={46}
              height={46}
              style={{ height: 46, width: "auto", display: "block" }}
              priority
            />
            <div>
              <div className="logo-word">Social Living</div>
              <div className="logo-sub">EUROPE</div>
            </div>
          </Link>

          <nav className="nav">
            {NAV.map((item) => (
              <Link
                key={item.href}
                href={item.href}
                className={`nav-item${isActive(item.href) ? " active" : ""}`}
              >
                <span>{item.label}</span>
                <div className="nav-underline" />
              </Link>
            ))}
            <Link href="/kontakt" className="btn btn-brand btn-nav">
              Kontakt
            </Link>
          </nav>

          <button
            className="nav-toggle"
            aria-label="Menu"
            aria-expanded={open}
            onClick={() => setOpen((v) => !v)}
          >
            <svg width="26" height="26" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
              {open ? (
                <path d="M6 6l12 12M18 6L6 18" strokeLinecap="round" />
              ) : (
                <path d="M3 6h18M3 12h18M3 18h18" strokeLinecap="round" />
              )}
            </svg>
          </button>
        </div>

        <div className={`mobile-menu${open ? " open" : ""}`}>
          {NAV.map((item) => (
            <Link
              key={item.href}
              href={item.href}
              className={isActive(item.href) ? "active" : ""}
              onClick={() => setOpen(false)}
            >
              {item.label}
            </Link>
          ))}
          <Link
            href="/kontakt"
            className={pathname.startsWith("/kontakt") ? "active" : ""}
            onClick={() => setOpen(false)}
          >
            Kontakt
          </Link>
        </div>
      </header>
    </>
  );
}
