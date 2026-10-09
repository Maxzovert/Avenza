import { ImageResponse } from "next/og";
import { company, property } from "@/content/site";

export const alt = `${company.legalName} — land, set out plainly`;
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
          background: "#1c1b18",
          color: "#f3efe7",
          padding: "72px",
        }}
      >
        <div style={{ display: "flex", fontSize: 22, letterSpacing: 6 }}>
          AVENZA REALTECH
        </div>
        <div style={{ display: "flex", flexDirection: "column" }}>
          <div style={{ display: "flex", fontSize: 64, lineHeight: 1.05, maxWidth: 900 }}>
            {property.tagline}
          </div>
          <div style={{ display: "flex", marginTop: 28, fontSize: 24, color: "#cfc6b8" }}>
            {company.legalName}
          </div>
        </div>
      </div>
    ),
    size,
  );
}
