import { ImageResponse } from "next/og";

export const runtime = "nodejs";
export const size = {
  width: 1200,
  height: 630,
};
export const contentType = "image/png";

export default function OGImage() {
  return new ImageResponse(
    (
      <div
        style={{
          fontSize: 48,
          background: "#0A0A0B",
          width: "100%",
          height: "100%",
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          justifyContent: "center",
          color: "#C9A96E",
          fontFamily: "system-ui, -apple-system, sans-serif",
          fontWeight: "bold",
          position: "relative",
          overflow: "hidden",
        }}
      >
        {/* Accent lines */}
        <div
          style={{
            position: "absolute",
            top: 0,
            left: 0,
            right: 0,
            height: 4,
            background: "linear-gradient(to right, transparent, #C9A96E, transparent)",
          }}
        />
        <div
          style={{
            position: "absolute",
            bottom: 0,
            left: 0,
            right: 0,
            height: 2,
            background: "linear-gradient(to right, #C9A96E, transparent)",
          }}
        />

        {/* Main content */}
        <div style={{ textAlign: "center", zIndex: 10 }}>
          <div
            style={{
              fontSize: 72,
              fontWeight: "900",
              marginBottom: 24,
              color: "#E8C87A",
            }}
          >
            Ruyaki Systems
          </div>

          <div
            style={{
              fontSize: 48,
              color: "#FFFFFF",
              marginBottom: 32,
              lineHeight: 1.2,
              maxWidth: 900,
              fontWeight: "700",
            }}
          >
            Software Development & Digital Solutions
          </div>

          <div
            style={{
              fontSize: 32,
              color: "#9A9A9C",
              fontWeight: "400",
            }}
          >
            Nairobi, Kenya
          </div>
        </div>

        {/* Corner accent */}
        <div
          style={{
            position: "absolute",
            bottom: 40,
            right: 60,
            width: 250,
            height: 250,
            borderRadius: "50%",
            background: "radial-gradient(circle, rgba(201,169,110,0.08) 0%, transparent 70%)",
            filter: "blur(60px)",
          }}
        />
      </div>
    ),
    size
  );
}
