# Konsorcjum Social Living Europe — strona

Witryna doradczo-finansowo-zarządcza Konsorcjum **Social Living Europe**
(Fundacja DivideYou + Social Living Europe PSA). Konsorcjum pomaga
**sfinansować i zrealizować** projekty budownictwa społecznego — doradza,
montuje finansowanie, strukturyzuje i zarządza. Nie jest deweloperem ani
wykonawcą.

Zbudowana w **Next.js (App Router) + React + TypeScript** na podstawie
projektu z `design_handoff_social_living_europe`.

## Podstrony

| Route | Strona |
|---|---|
| `/` | Strona główna |
| `/o-nas` | O nas |
| `/finansowanie` | Finansowanie (6 źródeł) |
| `/modele` | Modele (5 modeli) |
| `/wspolpraca` | Współpraca (5 obszarów) |
| `/kontakt` | Kontakt (ankieta projektowa) |

## Uruchomienie

```bash
npm install
npm run dev      # serwer deweloperski na http://localhost:3000
npm run build    # produkcyjny build
npm start        # serwer produkcyjny
```

## Struktura

- `app/` — layout i podstrony (App Router, każda podstrona to natywny route).
- `components/` — `Header`, `Footer`, `FloatingContact` oraz współdzielone
  elementy UI (`Eyebrow`, `Quote`, `CtaSection`).
- `lib/data.ts` — całość treści (modele, źródła finansowania, statystyki,
  cytaty) jako dane — odwzorowane 1:1 z pliku źródłowego handoffu.
- `app/globals.css` — design tokens (kolory, typografia) i klasy wielokrotnego
  użytku; breakpointy responsywne (mobile: gridy → 1 kolumna, nav → hamburger).
- `public/assets/` — logo i zdjęcia własne (hero, senior).

## Typografia i kolory

- Serif/akcenty: **Newsreader**; UI/tekst: **Hanken Grotesk** (oba `next/font`).
- Zieleń brand `#003f2d`, zieleń ciemna `#012a1f`, złoto `#c9a24a` / `#b08a3e`,
  mięta `#9fd9bf`. Pełna paleta w `app/globals.css`.

## Uwagi produkcyjne

- Zdjęcia tematyczne pochodzą z Unsplash jako **placeholdery** — w produkcji
  zastąpić licencjonowanymi zdjęciami.
- Formularz kontaktowy wyświetla komunikat sukcesu po stronie klienta —
  do podłączenia backendu/endpointu wysyłki w produkcji.
