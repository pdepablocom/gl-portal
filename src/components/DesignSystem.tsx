/* eslint-disable @next/next/no-img-element */

/* ═══════════════════════════════════════════════════════════════
   GenLayer Portal — Design System Reference
   For Figma import via html.to.design or similar tools.
   All values match globals.css tokens exactly.
   ═══════════════════════════════════════════════════════════════ */

/* ─── Color Data ──────────────────────────────────────────────── */

const neutrals = [
  { name: "White", token: "--color-background", hex: "#FFFFFF" },
  { name: "Surface", token: "--color-surface", hex: "#F5F5F5" },
  { name: "Chip BG", token: "--color-chip-bg", hex: "#F3F3F3" },
  { name: "Border Card", token: "--color-border-card", hex: "#F0F0F0" },
  { name: "Border", token: "--color-border", hex: "#E6E6E6" },
  { name: "Border Light", token: "--color-border-light", hex: "#E5E5E6" },
  { name: "Light Gray", token: "--color-light-gray", hex: "#E3E3E3" },
  { name: "Disabled", token: "--color-disabled", hex: "#BDBDBD" },
  { name: "Placeholder", token: "--color-placeholder", hex: "#ABABAB" },
  { name: "Mid Gray", token: "--color-mid-gray", hex: "#6B6B6B" },
  { name: "Gray", token: "--color-gray", hex: "#656567" },
  { name: "Mid Dark Gray", token: "--color-mid-dark-gray", hex: "#3F3F3F" },
  { name: "Dark Gray", token: "--color-dark-gray", hex: "#222222" },
  { name: "Dark Text", token: "--color-dark-text", hex: "#1B1B1B" },
  { name: "Near Black", token: "--color-near-black", hex: "#131214" },
  { name: "Black", token: "--color-foreground", hex: "#000000" },
];

const brandPurple = [
  { name: "Purple Alert BG", token: "--color-purple-alert-bg", hex: "#F3ECFC" },
  { name: "Gradient Start", token: "--color-purple-gradient-start", hex: "#BE8FF5" },
  { name: "Purple Progress", token: "--color-purple-progress", hex: "#A78AF8" },
  { name: "Gradient End", token: "--color-purple-gradient-end", hex: "#AC6DF3" },
  { name: "Brand Purple", token: "--color-brand-purple", hex: "#9E4BF6" },
  { name: "Purple Code", token: "--color-purple-code", hex: "#A456F7" },
  { name: "Purple Deep", token: "--color-purple-deep", hex: "#8D81E1" },
  { name: "Alert Border", token: "--color-purple-alert-border", hex: "#8F46E9" },
  { name: "Purple Dark", token: "--color-brand-purple-dark", hex: "#8A3AE0" },
];

const roleColors = [
  { name: "Builder", token: "--color-role-builder", hex: "#E99322", bg: "rgba(233,147,34,0.1)", bgHex: "#FDF3E7" },
  { name: "Validator", token: "--color-role-validator", hex: "#4F76F6", bg: "rgba(79,118,246,0.1)", bgHex: "#ECF0FE" },
  { name: "Community", token: "--color-role-community", hex: "#8D81E1", bg: "#F4F2FC", bgHex: "#F4F2FC" },
  { name: "Steward", token: "--color-role-steward", hex: "#3EB359", bg: "rgba(62,179,89,0.1)", bgHex: "#EBF8EE" },
];

const semanticColors = [
  { name: "Success", token: "--color-success", hex: "#3EB359" },
  { name: "Success Verified", token: "--color-success-verified", hex: "#169941" },
  { name: "Success BG", token: "--color-success-bg", hex: "#EEFDF2" },
  { name: "Error", token: "--color-error", hex: "#FF0000" },
  { name: "Error BG", token: "--color-error-bg", hex: "#FFEBEB" },
  { name: "Link / Active", token: "--color-link", hex: "#4083EA" },
  { name: "Blue Code", token: "--color-blue-code", hex: "#3779F5" },
];

/* ─── Typography Data ─────────────────────────────────────────── */

const headingStyles = [
  { name: "Display XL", size: "64px", weight: "500", lineHeight: "64px", tracking: "-1.28px", sample: "Welcome to GenLayer" },
  { name: "Page Title / H1", size: "48px", weight: "500", lineHeight: "56px", tracking: "-0.96px", sample: "Choose how you contribute" },
  { name: "Section Hero / H2", size: "32px", weight: "500", lineHeight: "48px", tracking: "-1.28px", sample: "Climb the ranks" },
  { name: "Stat Number", size: "32px", weight: "500", lineHeight: "25px", tracking: "-0.96px", sample: "12,467" },
  { name: "Card Title / H3", size: "24px", weight: "500", lineHeight: "40px", tracking: "-0.48px", sample: "Start as a Builder" },
];

const bodyStyles = [
  { name: "Section Title", size: "20px", weight: "600", lineHeight: "25px", tracking: "0.4px", sample: "Monthly contributions" },
  { name: "Body Large", size: "17px", weight: "400", lineHeight: "28px", tracking: "0.34px", sample: "Earn points with every accepted contribution and rise through the leaderboard." },
  { name: "Body Regular", size: "14px", weight: "500", lineHeight: "21px", tracking: "0.28px", sample: "Submit a contribution" },
  { name: "Small Label", size: "12px", weight: "400", lineHeight: "20px", tracking: "0.24px", sample: "Contribute" },
  { name: "Nav Logo", size: "20px", weight: "500", lineHeight: "25px", tracking: "0.4px", sample: "Points" },
];

const monoStyles = [
  { name: "Code", size: "14.4px", weight: "400", lineHeight: "21.6px", tracking: "0", sample: "contract.deploy()" },
];

/* ─── Spacing Data ────────────────────────────────────────────── */

const spacingScale = [
  { name: "space-1", value: "4px", px: 4 },
  { name: "space-2", value: "8px", px: 8 },
  { name: "space-3", value: "12px", px: 12 },
  { name: "space-4", value: "16px", px: 16 },
  { name: "space-5", value: "20px", px: 20 },
  { name: "space-6", value: "24px", px: 24 },
  { name: "space-10", value: "40px", px: 40 },
];

/* ─── Radius Data ─────────────────────────────────────────────── */

const radiusScale = [
  { name: "radius-sm", value: "2px" },
  { name: "radius-md", value: "6px" },
  { name: "radius-lg", value: "8px" },
  { name: "radius-pill", value: "20px" },
  { name: "radius-xl", value: "24px" },
  { name: "Full", value: "9999px" },
];

/* ─── Shadow Data ─────────────────────────────────────────────── */

const shadows = [
  { name: "Card", token: "--shadow-card", value: "0px 4px 12px 0px rgba(0,0,0,0.05)" },
  { name: "Elevated", token: "card-elevated", value: "0 0 0 1px rgba(0,0,0,0.03), 0 1px 2px rgba(0,0,0,0.04), 0 4px 12px rgba(0,0,0,0.05), 0 8px 24px rgba(0,0,0,0.03)" },
  { name: "Button Glow", token: "btn-glow:hover", value: "0 4px 20px rgba(158,75,246,0.35)" },
  { name: "Input Focus", token: "input:focus", value: "0 0 0 2px rgba(158,75,246,0.25)" },
];

/* ─── Gradient Data ───────────────────────────────────────────── */

const gradients = [
  { name: "CTA Purple", from: "#BE8FF5", to: "#AC6DF3", css: "linear-gradient(to right, #BE8FF5, #AC6DF3)" },
  { name: "Progress", from: "#A78AF8", to: "#FA8736", css: "linear-gradient(to right, #A78AF8, #FA8736)" },
  { name: "Podium Gold", from: "#F8B93D", to: "#EE8D24", css: "linear-gradient(to bottom, #F8B93D, #EE8D24)" },
  { name: "Podium Purple", from: "#BE8FF5", to: "#9E4BF6", css: "linear-gradient(to bottom, #BE8FF5, #9E4BF6)" },
  { name: "Surface", from: "#F5F5F5", to: "#E6E6E6", css: "linear-gradient(to bottom, #F5F5F5, #E6E6E6)" },
];

/* ═══════════════════════════════════════════════════════════════
   Shared Inline Styles
   ═══════════════════════════════════════════════════════════════ */

const s = {
  sectionTitle: { fontFamily: "'F37 Lineca VF', sans-serif", fontSize: "32px", fontWeight: 500, lineHeight: "48px", letterSpacing: "-1.28px", color: "#000000", marginBottom: "8px" } as React.CSSProperties,
  sectionLabel: { fontFamily: "'Switzer Variable', sans-serif", fontSize: "12px", fontWeight: 400, lineHeight: "20px", letterSpacing: "0.24px", color: "#6B6B6B", marginBottom: "24px", textTransform: "uppercase" as const } as React.CSSProperties,
  sub: { fontFamily: "'Switzer Variable', sans-serif", fontSize: "14px", fontWeight: 600, letterSpacing: "0.28px", color: "#131214", marginBottom: "16px" } as React.CSSProperties,
  spec: { fontFamily: "Menlo, monospace", fontSize: "11px", color: "#6B6B6B" } as React.CSSProperties,
  name: { fontFamily: "'Switzer Variable', sans-serif", fontSize: "13px", fontWeight: 500, letterSpacing: "0.26px", color: "#131214" } as React.CSSProperties,
  divider: { width: "100%", height: "1px", backgroundColor: "#E6E6E6", margin: "64px 0" } as React.CSSProperties,
};

const lightHexes = ["#FFFFFF", "#F5F5F5", "#F3F3F3", "#F0F0F0", "#F3ECFC", "#EEFDF2", "#F4F2FC", "#FFEBEB"];

/* ═══════════════════════════════════════════════════════════════
   Main Component
   ═══════════════════════════════════════════════════════════════ */

export default function DesignSystem() {
  return (
    <div style={{ minHeight: "100vh", backgroundColor: "#FFFFFF", padding: "80px", maxWidth: "1440px", margin: "0 auto" }}>

      {/* ─── HEADER ─────────────────────────────────────────── */}
      <div style={{ marginBottom: "64px" }}>
        <div style={{ display: "flex", alignItems: "center", gap: "12px", marginBottom: "16px" }}>
<img src="/assets/gl-logo-black.svg" alt="GenLayer" style={{ height: "32px", width: "auto" }} />
        </div>
        <h1 style={{ fontFamily: "'F37 Lineca VF', sans-serif", fontSize: "64px", fontWeight: 500, lineHeight: "64px", letterSpacing: "-1.28px", color: "#000000", marginBottom: "16px" }}>
          Design System
        </h1>
        <p style={{ fontFamily: "'Switzer Variable', sans-serif", fontSize: "17px", fontWeight: 400, lineHeight: "28px", letterSpacing: "0.34px", color: "#6B6B6B", maxWidth: "600px" }}>
          Complete token reference for the GenLayer Points Portal. Colors, typography, spacing, radii, shadows, gradients, and component patterns.
        </p>
      </div>

      {/* ═══════════ 1. COLORS ═══════════════════════════════════ */}
      <h2 style={s.sectionTitle}>Colors</h2>
      <p style={s.sectionLabel}>All color tokens defined in globals.css</p>

      <h3 style={s.sub}>Neutrals</h3>
      <div style={{ display: "flex", flexWrap: "wrap", gap: "16px", marginBottom: "48px" }}>
        {neutrals.map((c) => (
          <div key={c.token} style={{ display: "flex", flexDirection: "column", gap: "8px", width: "96px" }}>
            <div style={{ width: "100%", height: "64px", borderRadius: "8px", backgroundColor: c.hex, border: lightHexes.includes(c.hex) ? "1px solid #E6E6E6" : "none" }} />
            <span style={s.name}>{c.name}</span>
            <span style={s.spec}>{c.hex}</span>
            <span style={{ fontFamily: "Menlo, monospace", fontSize: "10px", color: "#ABABAB" }}>{c.token}</span>
          </div>
        ))}
      </div>

      <h3 style={s.sub}>Brand Purple</h3>
      <div style={{ display: "flex", flexWrap: "wrap", gap: "16px", marginBottom: "48px" }}>
        {brandPurple.map((c) => (
          <div key={c.token} style={{ display: "flex", flexDirection: "column", gap: "8px", width: "120px" }}>
            <div style={{ width: "100%", height: "80px", borderRadius: "8px", backgroundColor: c.hex, border: lightHexes.includes(c.hex) ? "1px solid #E6E6E6" : "none" }} />
            <span style={s.name}>{c.name}</span>
            <span style={s.spec}>{c.hex}</span>
            <span style={{ fontFamily: "Menlo, monospace", fontSize: "10px", color: "#ABABAB" }}>{c.token}</span>
          </div>
        ))}
      </div>

      <h3 style={s.sub}>Role Colors</h3>
      <div style={{ display: "flex", gap: "24px", marginBottom: "48px" }}>
        {roleColors.map((c) => (
          <div key={c.name} style={{ display: "flex", flexDirection: "column", gap: "12px", flex: 1 }}>
            <div style={{ display: "flex", gap: "8px" }}>
              <div style={{ width: "64px", height: "64px", borderRadius: "8px", backgroundColor: c.hex }} />
              <div style={{ width: "64px", height: "64px", borderRadius: "8px", backgroundColor: c.bg, border: "1px solid #E6E6E6" }} />
            </div>
            <span style={{ fontFamily: "'Switzer Variable', sans-serif", fontSize: "14px", fontWeight: 500, letterSpacing: "0.28px", color: "#131214" }}>{c.name}</span>
            <span style={s.spec}>Text: {c.hex}</span>
            <span style={s.spec}>BG: {c.bgHex}</span>
          </div>
        ))}
      </div>

      <h3 style={s.sub}>Semantic / Status</h3>
      <div style={{ display: "flex", flexWrap: "wrap", gap: "16px" }}>
        {semanticColors.map((c) => (
          <div key={c.token} style={{ display: "flex", flexDirection: "column", gap: "8px", width: "96px" }}>
            <div style={{ width: "100%", height: "64px", borderRadius: "8px", backgroundColor: c.hex, border: lightHexes.includes(c.hex) ? "1px solid #E6E6E6" : "none" }} />
            <span style={s.name}>{c.name}</span>
            <span style={s.spec}>{c.hex}</span>
          </div>
        ))}
      </div>

      <div style={s.divider} />

      {/* ═══════════ 2. GRADIENTS ════════════════════════════════ */}
      <h2 style={s.sectionTitle}>Gradients</h2>
      <p style={s.sectionLabel}>Linear gradients used across the portal</p>
      <div style={{ display: "flex", gap: "24px", flexWrap: "wrap" }}>
        {gradients.map((g) => (
          <div key={g.name} style={{ display: "flex", flexDirection: "column", gap: "8px", width: "200px" }}>
            <div style={{ width: "100%", height: "80px", borderRadius: "8px", background: g.css }} />
            <span style={s.name}>{g.name}</span>
            <span style={s.spec}>{g.from} → {g.to}</span>
          </div>
        ))}
      </div>

      <div style={s.divider} />

      {/* ═══════════ 3. TYPOGRAPHY ═══════════════════════════════ */}
      <h2 style={s.sectionTitle}>Typography</h2>
      <p style={s.sectionLabel}>F37 Lineca VF (headings) · Switzer Variable (body) · Menlo (code)</p>

      <h3 style={{ ...s.sub, marginBottom: "24px" }}>Headings — F37 Lineca VF</h3>
      <div style={{ display: "flex", flexDirection: "column", gap: "32px", marginBottom: "48px" }}>
        {headingStyles.map((t) => (
          <div key={t.name} style={{ display: "flex", gap: "40px", alignItems: "baseline" }}>
            <div style={{ width: "200px", flexShrink: 0 }}>
              <span style={{ ...s.name, display: "block", marginBottom: "4px" }}>{t.name}</span>
              <span style={{ ...s.spec, display: "block" }}>{t.size} / {t.lineHeight}</span>
              <span style={{ fontFamily: "Menlo, monospace", fontSize: "11px", color: "#ABABAB", display: "block" }}>
                Weight {t.weight} · Tracking {t.tracking}
              </span>
            </div>
            <span style={{ fontFamily: "'F37 Lineca VF', sans-serif", fontSize: t.size, fontWeight: Number(t.weight), lineHeight: t.lineHeight, letterSpacing: t.tracking, color: "#000000" }}>
              {t.sample}
            </span>
          </div>
        ))}
      </div>

      <h3 style={{ ...s.sub, marginBottom: "24px" }}>Body — Switzer Variable</h3>
      <div style={{ display: "flex", flexDirection: "column", gap: "28px", marginBottom: "48px" }}>
        {bodyStyles.map((t) => (
          <div key={t.name} style={{ display: "flex", gap: "40px", alignItems: "baseline" }}>
            <div style={{ width: "200px", flexShrink: 0 }}>
              <span style={{ ...s.name, display: "block", marginBottom: "4px" }}>{t.name}</span>
              <span style={{ ...s.spec, display: "block" }}>{t.size} / {t.lineHeight}</span>
              <span style={{ fontFamily: "Menlo, monospace", fontSize: "11px", color: "#ABABAB", display: "block" }}>
                Weight {t.weight} · Tracking {t.tracking}
              </span>
            </div>
            <span style={{ fontFamily: "'Switzer Variable', sans-serif", fontSize: t.size, fontWeight: Number(t.weight), lineHeight: t.lineHeight, letterSpacing: t.tracking, color: "#000000", maxWidth: "600px" }}>
              {t.sample}
            </span>
          </div>
        ))}
      </div>

      <h3 style={{ ...s.sub, marginBottom: "24px" }}>Code — Menlo</h3>
      <div style={{ display: "flex", flexDirection: "column", gap: "28px" }}>
        {monoStyles.map((t) => (
          <div key={t.name} style={{ display: "flex", gap: "40px", alignItems: "baseline" }}>
            <div style={{ width: "200px", flexShrink: 0 }}>
              <span style={{ ...s.name, display: "block", marginBottom: "4px" }}>{t.name}</span>
              <span style={{ ...s.spec, display: "block" }}>{t.size} / {t.lineHeight}</span>
            </div>
            <span style={{ fontFamily: "Menlo, monospace", fontSize: t.size, fontWeight: Number(t.weight), lineHeight: t.lineHeight, color: "#A456F7", backgroundColor: "#F5F5F5", padding: "8px 16px", borderRadius: "6px" }}>
              {t.sample}
            </span>
          </div>
        ))}
      </div>

      <div style={s.divider} />

      {/* ═══════════ 4. SPACING ═════════════════════════════════ */}
      <h2 style={s.sectionTitle}>Spacing</h2>
      <p style={s.sectionLabel}>4px base grid</p>
      <div style={{ display: "flex", flexDirection: "column", gap: "16px" }}>
        {spacingScale.map((sp) => (
          <div key={sp.name} style={{ display: "flex", alignItems: "center", gap: "24px" }}>
            <span style={{ fontFamily: "Menlo, monospace", fontSize: "12px", color: "#6B6B6B", width: "100px" }}>{sp.name}</span>
            <span style={{ fontFamily: "Menlo, monospace", fontSize: "12px", color: "#131214", width: "48px" }}>{sp.value}</span>
            <div style={{ width: `${sp.px}px`, height: "24px", backgroundColor: "#9E4BF6", borderRadius: "4px", opacity: 0.8 }} />
          </div>
        ))}
      </div>

      <div style={s.divider} />

      {/* ═══════════ 5. BORDER RADIUS ═══════════════════════════ */}
      <h2 style={s.sectionTitle}>Border Radius</h2>
      <p style={s.sectionLabel}>Radius tokens for cards, buttons, badges</p>
      <div style={{ display: "flex", gap: "32px", flexWrap: "wrap" }}>
        {radiusScale.map((r) => (
          <div key={r.name} style={{ display: "flex", flexDirection: "column", alignItems: "center", gap: "8px" }}>
            <div style={{ width: "80px", height: "80px", border: "2px solid #131214", borderRadius: r.value }} />
            <span style={s.name}>{r.name}</span>
            <span style={s.spec}>{r.value}</span>
          </div>
        ))}
      </div>

      <div style={s.divider} />

      {/* ═══════════ 6. SHADOWS ═════════════════════════════════ */}
      <h2 style={s.sectionTitle}>Shadows</h2>
      <p style={s.sectionLabel}>Elevation levels for cards and interactive elements</p>
      <div style={{ display: "flex", gap: "32px", flexWrap: "wrap" }}>
        {shadows.map((sh) => (
          <div key={sh.name} style={{ display: "flex", flexDirection: "column", gap: "12px", width: "240px" }}>
            <div style={{ width: "100%", height: "120px", backgroundColor: "#FFFFFF", borderRadius: "8px", boxShadow: sh.value }} />
            <span style={s.name}>{sh.name}</span>
            <span style={{ fontFamily: "Menlo, monospace", fontSize: "10px", color: "#6B6B6B", wordBreak: "break-all" as const }}>{sh.token}</span>
          </div>
        ))}
      </div>

      <div style={s.divider} />

      {/* ═══════════ 7. LOGO ═════════════════════════════════════ */}
      <h2 style={s.sectionTitle}>Logo</h2>
      <p style={s.sectionLabel}>GenLayer wordmark and mark variations</p>

      <div style={{ display: "flex", gap: "48px", marginBottom: "32px", flexWrap: "wrap" }}>
        {/* Full logo - black */}
        <div style={{ display: "flex", flexDirection: "column", gap: "12px" }}>
          <div style={{ width: "320px", height: "120px", backgroundColor: "#FFFFFF", borderRadius: "8px", border: "1px solid #E6E6E6", display: "flex", alignItems: "center", justifyContent: "center", padding: "24px" }}>
<img src="/assets/gl-logo-black.svg" alt="GenLayer Logo Black" style={{ height: "40px", width: "auto" }} />
          </div>
          <span style={s.name}>Full Logo — Black</span>
          <span style={s.spec}>logo/SVG/GenLayer_Logo_Black.svg</span>
        </div>

        {/* Full logo - white on dark */}
        <div style={{ display: "flex", flexDirection: "column", gap: "12px" }}>
          <div style={{ width: "320px", height: "120px", backgroundColor: "#131214", borderRadius: "8px", display: "flex", alignItems: "center", justifyContent: "center", padding: "24px" }}>
<img src="/assets/gl-logo-black.svg" alt="GenLayer Logo White" style={{ height: "40px", width: "auto", filter: "invert(1)" }} />
          </div>
          <span style={s.name}>Full Logo — White</span>
          <span style={s.spec}>logo/SVG/GenLayer_Logo_White_Cropped.svg</span>
        </div>

        {/* Mark only - black */}
        <div style={{ display: "flex", flexDirection: "column", gap: "12px" }}>
          <div style={{ width: "120px", height: "120px", backgroundColor: "#FFFFFF", borderRadius: "8px", border: "1px solid #E6E6E6", display: "flex", alignItems: "center", justifyContent: "center", padding: "24px" }}>
<img src="/assets/genlayer-mark-black.svg" alt="GenLayer Mark" style={{ height: "48px", width: "auto" }} />
          </div>
          <span style={s.name}>Mark — Black</span>
          <span style={s.spec}>logo/SVG/GenLayer_Mark_Black.svg</span>
        </div>

        {/* Mark only - white on dark */}
        <div style={{ display: "flex", flexDirection: "column", gap: "12px" }}>
          <div style={{ width: "120px", height: "120px", backgroundColor: "#131214", borderRadius: "8px", display: "flex", alignItems: "center", justifyContent: "center", padding: "24px" }}>
<img src="/assets/genlayer-mark-black.svg" alt="GenLayer Mark White" style={{ height: "48px", width: "auto", filter: "invert(1)" }} />
          </div>
          <span style={s.name}>Mark — White</span>
          <span style={s.spec}>logo/SVG/GenLayer_Mark_White.svg</span>
        </div>
      </div>

      <div style={s.divider} />

      {/* ═══════════ 8. ICONS & BADGES ═════════════════════════ */}
      <h2 style={s.sectionTitle}>Icons & Badges</h2>
      <p style={s.sectionLabel}>Role badges, labels, and icon variants</p>

      {/* Badges 24x24 */}
      <h3 style={{ ...s.sub, marginBottom: "24px" }}>Role Badges — 24x24</h3>
      <div style={{ display: "flex", gap: "32px", marginBottom: "48px" }}>
        {[
          { name: "Builder", file: "builder-badge.svg", color: "#E99322" },
          { name: "Validator", file: "validator-badge.svg", color: "#266FE5" },
          { name: "Community", file: "community-badge.svg", color: "#8F46E9" },
          { name: "Steward", file: "steward-badge.svg", color: "#19A663" },
          { name: "GenLayer", file: "genlayer-badge.svg", color: "#131214" },
        ].map((b) => (
          <div key={b.name} style={{ display: "flex", flexDirection: "column", alignItems: "center", gap: "12px" }}>
            <div style={{ width: "64px", height: "64px", backgroundColor: "#FFFFFF", borderRadius: "8px", border: "1px solid #E6E6E6", display: "flex", alignItems: "center", justifyContent: "center" }}>
    <img src={`/assets/${b.file}`} alt={b.name} width={24} height={24} />
            </div>
            <span style={s.name}>{b.name}</span>
            <span style={s.spec}>24×24</span>
            <div style={{ width: "12px", height: "12px", borderRadius: "3px", backgroundColor: b.color }} />
          </div>
        ))}
      </div>

      {/* Main Labels 48x48 */}
      <h3 style={{ ...s.sub, marginBottom: "24px" }}>Main Labels — 48x48</h3>
      <div style={{ display: "flex", gap: "32px", marginBottom: "48px" }}>
        {[
          { name: "Builder", file: "label-builder.svg" },
          { name: "Validator", file: "label-validator.svg" },
          { name: "Community", file: "label-community.svg" },
          { name: "Steward", file: "label-steward.svg" },
          { name: "GenLayer", file: "label-genlayer.svg" },
        ].map((b) => (
          <div key={b.name} style={{ display: "flex", flexDirection: "column", alignItems: "center", gap: "12px" }}>
            <div style={{ width: "80px", height: "80px", backgroundColor: "#FFFFFF", borderRadius: "8px", border: "1px solid #E6E6E6", display: "flex", alignItems: "center", justifyContent: "center" }}>
    <img src={`/assets/${b.file}`} alt={b.name} width={48} height={48} />
            </div>
            <span style={s.name}>{b.name}</span>
            <span style={s.spec}>48×48 · gradient fill</span>
          </div>
        ))}
      </div>

      {/* Plain Labels 48x48 */}
      <h3 style={{ ...s.sub, marginBottom: "24px" }}>Plain Labels — 48x48</h3>
      <div style={{ display: "flex", gap: "32px", marginBottom: "48px" }}>
        {[
          { name: "Builder", file: "label-plain-builder.svg" },
          { name: "Validator", file: "label-plain-validator.svg" },
          { name: "Community", file: "label-plain-community.svg" },
          { name: "Steward", file: "label-plain-steward.svg" },
          { name: "GenLayer", file: "label-plain-genlayer.svg" },
        ].map((b) => (
          <div key={b.name} style={{ display: "flex", flexDirection: "column", alignItems: "center", gap: "12px" }}>
            <div style={{ width: "80px", height: "80px", backgroundColor: "#FFFFFF", borderRadius: "8px", border: "1px solid #E6E6E6", display: "flex", alignItems: "center", justifyContent: "center" }}>
    <img src={`/assets/${b.file}`} alt={b.name} width={48} height={48} />
            </div>
            <span style={s.name}>{b.name}</span>
            <span style={s.spec}>48×48 · flat fill</span>
          </div>
        ))}
      </div>

      <div style={s.divider} />

      {/* ═══════════ 9. COMPONENTS ══════════════════════════════ */}
      <h2 style={s.sectionTitle}>Components</h2>
      <p style={s.sectionLabel}>Core UI patterns used across the portal</p>

      {/* Buttons */}
      <h3 style={{ ...s.sub, marginBottom: "24px" }}>Buttons</h3>
      <div style={{ display: "flex", gap: "16px", alignItems: "center", marginBottom: "12px" }}>
        <button style={{ display: "flex", height: "40px", alignItems: "center", justifyContent: "center", gap: "8px", borderRadius: "9999px", backgroundColor: "#131214", padding: "0 16px", border: "none", cursor: "pointer" }}>
          <span style={{ fontFamily: "'Switzer Variable', sans-serif", fontSize: "14px", fontWeight: 500, letterSpacing: "0.28px", color: "#FFFFFF" }}>Start building</span>
          <svg width="16" height="16" viewBox="0 0 24 24" fill="none"><path d="M13.172 12l-4.95-4.95 1.414-1.414L16 12l-6.364 6.364-1.414-1.414L13.172 12z" fill="white"/></svg>
        </button>
        <button style={{ display: "flex", height: "40px", alignItems: "center", justifyContent: "center", borderRadius: "9999px", backgroundColor: "#F5F5F5", padding: "0 16px", border: "none", cursor: "pointer" }}>
          <span style={{ fontFamily: "'Switzer Variable', sans-serif", fontSize: "14px", fontWeight: 500, letterSpacing: "0.28px", color: "#131214" }}>Contact</span>
        </button>
        <button style={{ display: "flex", height: "40px", alignItems: "center", justifyContent: "center", gap: "8px", borderRadius: "9999px", background: "linear-gradient(to right, #BE8FF5, #AC6DF3)", padding: "0 16px", border: "none", cursor: "pointer" }}>
          <span style={{ fontFamily: "'Switzer Variable', sans-serif", fontSize: "14px", fontWeight: 500, letterSpacing: "0.28px", color: "#FFFFFF" }}>Submit a contribution</span>
          <svg width="16" height="16" viewBox="0 0 24 24" fill="none"><path d="M11 11V5h2v6h6v2h-6v6h-2v-6H5v-2h6z" fill="white"/></svg>
        </button>
      </div>
      <div style={{ display: "flex", gap: "48px", marginBottom: "48px" }}>
        <span style={s.spec}>Primary: bg #131214, text #FFF, pill, h-40</span>
        <span style={s.spec}>Secondary: bg #F5F5F5, text #131214</span>
        <span style={s.spec}>CTA: gradient #BE8FF5→#AC6DF3</span>
      </div>

      {/* Cards */}
      <h3 style={{ ...s.sub, marginBottom: "24px" }}>Cards</h3>
      <div style={{ display: "flex", gap: "24px", marginBottom: "48px" }}>
        <div style={{ display: "flex", flexDirection: "column", gap: "12px" }}>
          <div style={{ width: "280px", height: "160px", backgroundColor: "#FFFFFF", borderRadius: "8px", border: "1px solid #F5F5F5", boxShadow: "0px 4px 12px 0px rgba(0,0,0,0.05)", padding: "24px", display: "flex", flexDirection: "column", justifyContent: "center" }}>
            <span style={{ fontFamily: "'F37 Lineca VF', sans-serif", fontSize: "24px", fontWeight: 500, letterSpacing: "-0.48px", color: "#000", marginBottom: "8px" }}>Card Title</span>
            <span style={{ fontFamily: "'Switzer Variable', sans-serif", fontSize: "14px", fontWeight: 400, lineHeight: "21px", letterSpacing: "0.28px", color: "#6B6B6B" }}>Body text goes here with description.</span>
          </div>
          <span style={s.spec}>Standard: border #F5F5F5, shadow-card</span>
        </div>
        <div style={{ display: "flex", flexDirection: "column", gap: "12px" }}>
          <div style={{ width: "280px", height: "160px", backgroundColor: "#FFFFFF", borderRadius: "8px", boxShadow: "0 0 0 1px rgba(0,0,0,0.03), 0 1px 2px rgba(0,0,0,0.04), 0 4px 12px rgba(0,0,0,0.05), 0 8px 24px rgba(0,0,0,0.03)", padding: "24px", display: "flex", flexDirection: "column", justifyContent: "center" }}>
            <span style={{ fontFamily: "'F37 Lineca VF', sans-serif", fontSize: "24px", fontWeight: 500, letterSpacing: "-0.48px", color: "#000", marginBottom: "8px" }}>Elevated Card</span>
            <span style={{ fontFamily: "'Switzer Variable', sans-serif", fontSize: "14px", fontWeight: 400, lineHeight: "21px", letterSpacing: "0.28px", color: "#6B6B6B" }}>Higher elevation for modals.</span>
          </div>
          <span style={s.spec}>Elevated: card-elevated shadow</span>
        </div>
        <div style={{ display: "flex", flexDirection: "column", gap: "12px" }}>
          <div style={{ width: "280px", height: "160px", backgroundColor: "#F5F5F5", borderRadius: "8px", padding: "24px", display: "flex", flexDirection: "column", justifyContent: "center" }}>
            <span style={{ fontFamily: "'F37 Lineca VF', sans-serif", fontSize: "24px", fontWeight: 500, letterSpacing: "-0.48px", color: "#000", marginBottom: "8px" }}>Surface Card</span>
            <span style={{ fontFamily: "'Switzer Variable', sans-serif", fontSize: "14px", fontWeight: 400, lineHeight: "21px", letterSpacing: "0.28px", color: "#6B6B6B" }}>Flat surface for sections.</span>
          </div>
          <span style={s.spec}>Surface: bg #F5F5F5, no shadow</span>
        </div>
      </div>

      {/* Role Pill Badges */}
      <h3 style={{ ...s.sub, marginBottom: "24px" }}>Role Pill Badges</h3>
      <div style={{ display: "flex", gap: "12px", marginBottom: "12px" }}>
        {roleColors.map((r) => (
          <div key={r.name} style={{ display: "flex", alignItems: "center", justifyContent: "center", gap: "6px", backgroundColor: r.bg, borderRadius: "20px", padding: "6px 12px" }}>
<img src={`/assets/${r.name.toLowerCase()}-badge.svg`} alt="" width={16} height={16} />
            <span style={{ fontFamily: "'Switzer Variable', sans-serif", fontSize: "12px", fontWeight: 500, letterSpacing: "0.24px", color: r.hex }}>{r.name}</span>
          </div>
        ))}
      </div>
      <span style={s.spec}>Pill badges: radius 20px, padding 6px 12px, role bg + icon + role text</span>

      <div style={s.divider} />

      {/* ═══════════ 10. INPUTS ═════════════════════════════════ */}
      <h2 style={s.sectionTitle}>Inputs</h2>
      <p style={s.sectionLabel}>Form field patterns</p>
      <div style={{ display: "flex", gap: "24px", marginBottom: "12px" }}>
        <div style={{ display: "flex", height: "40px", alignItems: "center", gap: "8px", borderRadius: "9999px", border: "1px solid #E6E6E6", backgroundColor: "#F5F5F5", padding: "0 16px", width: "280px" }}>
          <svg width="16" height="16" viewBox="0 0 24 24" fill="none"><path d="M18.031 16.617l4.283 4.282-1.415 1.415-4.282-4.283A8.96 8.96 0 0111 20c-4.968 0-9-4.032-9-9s4.032-9 9-9 9 4.032 9 9a8.96 8.96 0 01-1.969 5.617zM16.025 15.87A6.981 6.981 0 0018 11c0-3.868-3.133-7-7-7-3.868 0-7 3.132-7 7 0 3.867 3.132 7 7 7a6.981 6.981 0 004.875-1.975l.15-.155z" fill="#ABABAB"/></svg>
          <span style={{ fontFamily: "'Switzer Variable', sans-serif", fontSize: "14px", fontWeight: 500, letterSpacing: "0.28px", color: "#ABABAB" }}>Search Participants...</span>
        </div>
        <div style={{ display: "flex", height: "40px", alignItems: "center", gap: "8px", borderRadius: "8px", border: "1px solid #E6E6E6", backgroundColor: "#FFFFFF", padding: "0 16px", width: "280px" }}>
          <span style={{ fontFamily: "'Switzer Variable', sans-serif", fontSize: "14px", fontWeight: 400, letterSpacing: "0.28px", color: "#ABABAB" }}>Enter wallet address</span>
        </div>
        <div style={{ display: "flex", height: "40px", alignItems: "center", gap: "8px", borderRadius: "8px", border: "1px solid #9E4BF6", backgroundColor: "#FFFFFF", padding: "0 16px", width: "280px", boxShadow: "0 0 0 2px rgba(158,75,246,0.25)" }}>
          <span style={{ fontFamily: "'Switzer Variable', sans-serif", fontSize: "14px", fontWeight: 400, letterSpacing: "0.28px", color: "#131214" }}>0x1234...abcd</span>
        </div>
      </div>
      <div style={{ display: "flex", gap: "48px", marginBottom: "48px" }}>
        <span style={s.spec}>Search: pill, bg #F5F5F5, border #E6E6E6</span>
        <span style={s.spec}>Default: radius 8px, border #E6E6E6</span>
        <span style={s.spec}>Focus: border #9E4BF6, ring purple/25%</span>
      </div>

      {/* Avatars */}
      <h3 style={{ ...s.sub, marginBottom: "24px" }}>Avatars</h3>
      <div style={{ display: "flex", gap: "32px", alignItems: "end" }}>
        <div style={{ display: "flex", flexDirection: "column", alignItems: "center", gap: "8px" }}>
          <div style={{ width: "40px", height: "40px", borderRadius: "9999px", backgroundColor: "#131214" }} />
          <span style={s.name}>Navbar</span>
          <span style={s.spec}>40px</span>
        </div>
        <div style={{ display: "flex", flexDirection: "column", alignItems: "center", gap: "8px" }}>
          <div style={{ width: "32px", height: "32px", borderRadius: "9999px", backgroundColor: "#6B6B6B" }} />
          <span style={s.name}>Sidebar</span>
          <span style={s.spec}>32px</span>
        </div>
        <div style={{ display: "flex", flexDirection: "column", alignItems: "center", gap: "8px" }}>
          <div style={{ width: "52px", height: "52px", borderRadius: "9999px", background: "linear-gradient(to bottom, #BE8FF5, #9E4BF6)", padding: "2px", display: "flex", alignItems: "center", justifyContent: "center" }}>
            <div style={{ width: "48px", height: "48px", borderRadius: "9999px", backgroundColor: "#131214" }} />
          </div>
          <span style={s.name}>Podium Ring</span>
          <span style={s.spec}>48px + 2px ring</span>
        </div>
        <div style={{ display: "flex", flexDirection: "column", alignItems: "center", gap: "8px" }}>
          <div style={{ width: "40px", height: "40px", borderRadius: "9999px", backgroundColor: "#131214", display: "flex", alignItems: "center", justifyContent: "center" }}>
            <span style={{ fontFamily: "'F37 Lineca VF', sans-serif", fontSize: "14px", fontWeight: 500, color: "#FFFFFF" }}>BH</span>
          </div>
          <span style={s.name}>Initials</span>
          <span style={s.spec}>bg #131214</span>
        </div>
      </div>

      <div style={{ height: "120px" }} />
    </div>
  );
}
