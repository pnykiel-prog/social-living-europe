import Link from "next/link";

export function Eyebrow({
  label,
  tone = "light",
  hero = false,
  center = false,
}: {
  label: string;
  tone?: "light" | "dark";
  hero?: boolean;
  center?: boolean;
}) {
  const dashColor = tone === "dark" ? "var(--gold)" : "var(--gold-dark)";
  const labelColor = tone === "dark" ? "var(--mint)" : "var(--subtle)";
  if (center) {
    return (
      <div style={{ textAlign: "center" }}>
        <div
          className="dash"
          style={{
            width: 48,
            height: 3,
            borderRadius: 2,
            background: dashColor,
            margin: "0 auto 18px",
          }}
        />
        <div
          className="label"
          style={{
            fontSize: 13,
            letterSpacing: "2.5px",
            textTransform: "uppercase",
            fontWeight: 600,
            color: labelColor,
            marginBottom: 16,
          }}
        >
          {label}
        </div>
      </div>
    );
  }
  return (
    <div className={`eyebrow${hero ? " hero" : ""}`}>
      <div className="dash" style={{ background: dashColor }} />
      <div className="label" style={{ color: labelColor }}>
        {label}
      </div>
    </div>
  );
}

export function Quote({
  text,
  author,
  variant = "dark",
  markSize = 64,
  textSize = "clamp(19px,2.1vw,26px)",
}: {
  text: string;
  author: string;
  variant?: "dark" | "light";
  markSize?: number;
  textSize?: string;
}) {
  return (
    <div className={`quote quote-${variant}`}>
      <div className="mark" style={{ fontSize: markSize }}>
        „
      </div>
      <div>
        <p className="text" style={{ fontSize: textSize }}>
          {text}
        </p>
        <div className="author">— {author}</div>
      </div>
    </div>
  );
}

export function CtaSection({
  heading,
  text,
  buttonLabel,
  href = "/kontakt",
  image,
  maxWidth = 620,
  imageWidth = "42%",
  imageOpacity = 0.5,
}: {
  heading: string;
  text: string;
  buttonLabel: string;
  href?: string;
  image: string;
  maxWidth?: number;
  imageWidth?: string;
  imageOpacity?: number;
}) {
  return (
    <section
      style={{
        position: "relative",
        background: "linear-gradient(120deg,#012a1f,#06513a)",
        overflow: "hidden",
      }}
    >
      {/* eslint-disable-next-line @next/next/no-img-element */}
      <img
        src={image}
        alt=""
        style={{
          position: "absolute",
          right: 0,
          top: 0,
          width: imageWidth,
          height: "100%",
          objectFit: "cover",
          opacity: imageOpacity,
        }}
      />
      <div
        style={{
          position: "absolute",
          inset: 0,
          background: "linear-gradient(90deg,#012a1f 52%,rgba(1,42,31,.2) 100%)",
        }}
      />
      <div className="container" style={{ position: "relative", padding: "80px 36px" }}>
        <div style={{ maxWidth }}>
          <div
            style={{ width: 48, height: 3, background: "var(--gold)", borderRadius: 2, marginBottom: 22 }}
          />
          <h2
            className="h2"
            style={{ fontSize: "clamp(28px,3.6vw,44px)", color: "#fff", margin: "0 0 18px" }}
          >
            {heading}
          </h2>
          <p
            style={{
              fontSize: 17,
              lineHeight: 1.7,
              color: "rgba(255,255,255,.82)",
              margin: "0 0 32px",
            }}
          >
            {text}
          </p>
          <Link href={href} className="btn btn-white btn-cta">
            {buttonLabel}
          </Link>
        </div>
      </div>
    </section>
  );
}

export function Img({
  src,
  rounded = 6,
}: {
  src: string;
  rounded?: number;
}) {
  return (
    // eslint-disable-next-line @next/next/no-img-element
    <img
      src={src}
      alt=""
      style={{
        position: "absolute",
        inset: 0,
        width: "100%",
        height: "100%",
        objectFit: "cover",
        borderRadius: rounded,
      }}
    />
  );
}
