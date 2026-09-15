import { ImageResponse } from "next/og";

export const alt = "Jagdamba Procut Pvt. Ltd. — Precision in Steel. Strength in Every Cut.";
export const size = { width: 1200, height: 630 };
export const contentType = "image/png";

export default function OpenGraphImage() {
  return new ImageResponse(
    (
      <div
        style={{
          width: "100%",
          height: "100%",
          display: "flex",
          flexDirection: "column",
          justifyContent: "space-between",
          background: "linear-gradient(135deg, #07111F 0%, #0D47A1 70%, #17365D 100%)",
          padding: "64px 72px",
          color: "white",
          fontFamily: "sans-serif",
        }}
      >
        <div style={{ display: "flex", alignItems: "center", gap: 16 }}>
          <div
            style={{
              width: 64,
              height: 64,
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              background: "#F97316",
              fontSize: 28,
              fontWeight: 800,
            }}
          >
            JP
          </div>
          <div style={{ fontSize: 22, letterSpacing: 4, textTransform: "uppercase", opacity: 0.8 }}>
            Vadodara, Gujarat
          </div>
        </div>
        <div style={{ display: "flex", flexDirection: "column" }}>
          <div style={{ fontSize: 64, fontWeight: 800, letterSpacing: -1.5, lineHeight: 1.05 }}>
            JAGDAMBA PROCUT
          </div>
          <div style={{ marginTop: 12, fontSize: 28, fontWeight: 600, color: "#FDBA74" }}>
            Precision in Steel. Strength in Every Cut.
          </div>
        </div>
        <div style={{ fontSize: 20, opacity: 0.7 }}>
          Steel Plates · CNC Profile Cutting · Laser Cutting · CNC Drilling · UT
        </div>
      </div>
    ),
    { ...size }
  );
}
