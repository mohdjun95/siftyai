import { ImageResponse } from "next/og";

export const alt = "Nytcrew: your photo night crew";
export const size = { width: 1200, height: 630 };
export const contentType = "image/png";

// Share card. The mark uses the app's SiftyLogo geometry scaled from 32 px to 160 px.
export default function OpengraphImage() {
  const s = 160 / 32;
  return new ImageResponse(
    (
      <div
        style={{
          width: "100%",
          height: "100%",
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          justifyContent: "center",
          background: "#F0FDFA",
          fontFamily: "sans-serif",
        }}
      >
        <svg width={32 * s} height={32 * s} viewBox="0 0 32 32">
          <rect width="32" height="32" rx="8" fill="#0D9488" />
          <rect
            x="10"
            y="10"
            width="12"
            height="12"
            rx="1"
            fill="none"
            stroke="#FFFFFF"
            strokeWidth="2"
            strokeLinejoin="round"
            transform="rotate(45 16 16)"
          />
        </svg>
        <div style={{ marginTop: 40, fontSize: 88, fontWeight: 700, color: "#171717", letterSpacing: -2 }}>
          Nytcrew
        </div>
        <div style={{ marginTop: 12, fontSize: 40, color: "#0F766E" }}>
          Your photo night crew. Set it up once, forget it.
        </div>
      </div>
    ),
    size,
  );
}
