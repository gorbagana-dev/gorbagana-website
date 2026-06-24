import { ImageResponse } from "next/og";

export const alt = "Gorbagana";
export const size = {
  width: 1200,
  height: 630,
};
export const contentType = "image/png";

export default function Image() {
  return new ImageResponse(
    (
      <div
        style={{
          alignItems: "stretch",
          background: "#050505",
          color: "#ffffff",
          display: "flex",
          flexDirection: "column",
          fontFamily: "Arial, Helvetica, sans-serif",
          height: "100%",
          justifyContent: "space-between",
          padding: "64px",
          width: "100%",
        }}
      >
        <div
          style={{
            alignItems: "center",
            display: "flex",
            justifyContent: "space-between",
          }}
        >
          <div style={{ fontSize: 38, fontWeight: 900, letterSpacing: -2 }}>
            Gorbagana
          </div>
          <div
            style={{
              background: "#4dff91",
              borderRadius: 999,
              color: "#050505",
              fontSize: 20,
              fontWeight: 800,
              letterSpacing: 1,
              padding: "14px 24px",
              textTransform: "uppercase",
            }}
          >
            SVM network
          </div>
        </div>
        <div
          style={{
            display: "flex",
            flexDirection: "column",
            gap: 32,
            maxWidth: 980,
          }}
        >
          <div
            style={{
              fontSize: 104,
              fontWeight: 900,
              letterSpacing: -7,
              lineHeight: 0.9,
            }}
          >
            A Solana fork for internet-native apps
          </div>
          <div
            style={{
              color: "#a1a1aa",
              fontSize: 34,
              lineHeight: 1.35,
              maxWidth: 840,
            }}
          >
            Build and test Solana-style apps where transactions stay cheap
            enough for real experimentation.
          </div>
        </div>
        <div
          style={{
            alignItems: "center",
            borderTop: "1px solid rgba(255,255,255,0.12)",
            color: "#a1a1aa",
            display: "flex",
            fontSize: 22,
            justifyContent: "space-between",
            letterSpacing: 2,
            paddingTop: 28,
            textTransform: "uppercase",
          }}
        >
          <span>gorbagana.wtf</span>
          <span style={{ color: "#4dff91" }}>GOR</span>
        </div>
      </div>
    ),
    size,
  );
}
