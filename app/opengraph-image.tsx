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
          background: "#f6f7f2",
          padding: "64px 72px",
          color: "#14261a",
          fontFamily: "serif",
        }}
      >
        <div style={{ display: "flex", alignItems: "center", gap: 16 }}>
          <div
            style={{
              width: 56,
              height: 56,
              borderRadius: 999,
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              background: "#2f7a3e",
              color: "#c8e86a",
              fontSize: 22,
              fontWeight: 700,
            }}
          >
            JP
          </div>
          <div style={{ fontSize: 20, letterSpacing: 3, textTransform: "uppercase", color: "#5c6b62" }}>
            Vadodara, Gujarat
          </div>
        </div>
        <div style={{ display: "flex", flexDirection: "column" }}>
          <div style={{ fontSize: 64, fontWeight: 600, letterSpacing: -1.5, lineHeight: 1.05 }}>
            Precision in Steel,
          </div>
          <div style={{ fontSize: 64, fontWeight: 600, letterSpacing: -1.5, lineHeight: 1.05 }}>
            Strength in Every Cut.
          </div>
        </div>
        <div style={{ fontSize: 20, color: "#5c6b62" }}>
          Steel Plates · CNC Profile Cutting · Laser Cutting · CNC Drilling · UT
        </div>
      </div>
    ),
    { ...size }
  );
}
