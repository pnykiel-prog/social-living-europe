import { NextResponse } from "next/server";
import nodemailer from "nodemailer";

export const runtime = "nodejs";
export const dynamic = "force-dynamic";

const FIELDS: { key: string; label: string }[] = [
  { key: "role", label: "Reprezentuję" },
  { key: "name", label: "Imię i nazwisko" },
  { key: "email", label: "E-mail" },
  { key: "location", label: "Lokalizacja" },
  { key: "propertyType", label: "Typ nieruchomości" },
  { key: "units", label: "Liczba mieszkań" },
  { key: "cost", label: "Szacowany koszt budowy / adaptacji" },
  { key: "communeStatus", label: "Status rozmów z gminą" },
  { key: "model", label: "Oczekiwany model" },
  { key: "message", label: "Dodatkowe informacje" },
];

const esc = (s: string) =>
  String(s).replace(/[&<>"']/g, (c) =>
    ({ "&": "&amp;", "<": "&lt;", ">": "&gt;", '"': "&quot;", "'": "&#39;" }[c] as string)
  );

export async function POST(req: Request) {
  try {
    const data = await req.json().catch(() => ({}));

    // Honeypot — boty wypełniają ukryte pole.
    if (data.company) return NextResponse.json({ ok: true });

    const email = String(data.email || "").trim();
    if (!/^[^@\s]+@[^@\s]+\.[^@\s]+$/.test(email)) {
      return NextResponse.json(
        { ok: false, error: "Podaj poprawny adres e-mail." },
        { status: 400 }
      );
    }

    const host = process.env.SMTP_HOST || "ssl0.ovh.net";
    const port = Number(process.env.SMTP_PORT || 465);
    const user = process.env.SMTP_USER || "office@sociallivingeurope.com";
    const pass = process.env.SMTP_PASSWORD;
    const to = process.env.CONTACT_TO || "office@sociallivingeurope.com";
    // SMTP_SECURE jawnie nadpisuje; domyślnie: 465 = SSL (true), 587 = STARTTLS (false).
    const secure =
      process.env.SMTP_SECURE != null
        ? process.env.SMTP_SECURE === "true"
        : port === 465;

    if (!pass) {
      console.error("SMTP_PASSWORD nie jest ustawione.");
      return NextResponse.json(
        {
          ok: false,
          error:
            "Wysyłka jest chwilowo niedostępna. Napisz bezpośrednio na office@sociallivingeurope.com.",
        },
        { status: 503 }
      );
    }

    const transporter = nodemailer.createTransport({
      host,
      port,
      secure,
      auth: { user, pass },
    });

    const rows = FIELDS.map(({ key, label }) => {
      const v = String(data[key] ?? "").trim() || "—";
      return { label, v };
    });

    const text = rows.map((r) => `${r.label}: ${r.v}`).join("\n");
    const html = `
      <div style="font-family:Arial,sans-serif;font-size:14px;color:#1c2b26">
        <h2 style="color:#003f2d;margin:0 0 16px">Nowe zgłoszenie z formularza kontaktowego</h2>
        <table style="border-collapse:collapse;width:100%;max-width:640px">
          ${rows
            .map(
              (r) =>
                `<tr><td style="padding:8px 12px;border:1px solid #e2e6e0;background:#f4f7f4;font-weight:600;width:220px;vertical-align:top">${esc(
                  r.label
                )}</td><td style="padding:8px 12px;border:1px solid #e2e6e0">${esc(
                  r.v
                ).replace(/\n/g, "<br/>")}</td></tr>`
            )
            .join("")}
        </table>
        <p style="color:#46554f;margin-top:18px">Wysłano z formularza na stronie sociallivingeurope.com</p>
      </div>`;

    const info = await transporter.sendMail({
      from: `"Formularz — Social Living Europe" <${user}>`,
      sender: user,
      to,
      replyTo: data.name ? `"${String(data.name)}" <${email}>` : email,
      subject: `Nowe zgłoszenie z formularza — ${String(data.name || email)}`,
      text,
      html,
    });

    console.log(
      "Formularz wysłany:",
      JSON.stringify({
        messageId: info.messageId,
        accepted: info.accepted,
        rejected: info.rejected,
        response: info.response,
      })
    );

    return NextResponse.json({ ok: true });
  } catch (err) {
    console.error("Błąd wysyłki formularza:", err);
    return NextResponse.json(
      {
        ok: false,
        error:
          "Nie udało się wysłać wiadomości. Spróbuj ponownie lub napisz na office@sociallivingeurope.com.",
      },
      { status: 500 }
    );
  }
}
