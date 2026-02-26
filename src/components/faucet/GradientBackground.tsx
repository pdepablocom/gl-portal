"use client";

import { useEffect, useRef } from "react";
import { useDialKit } from "dialkit";

/* ─────────────────────────────────────────────────────────────────────────────
 * HOLOGRAPHIC ASCII BACKGROUND
 *
 * Behaviour:
 *   - A dense grid of random symbols fills the screen at all times.
 *   - Cursor acts as an ERASER — it hides symbols in its radius, cutting
 *     empty holes into the field and revealing the white page behind.
 *   - Faster cursor movement = larger effective radius = bigger empty spot.
 *   - Symbols fade back in once the cursor has moved away.
 *   - No wave / no position displacement — symbols are stationary.
 *
 * DialKit panel (bottom-right) for live tuning.
 * ───────────────────────────────────────────────────────────────────────────── */

const SYMBOLS = "$#@%&+~^|!?;{}[]<>/\\*=".split("");

// Holographic pastel palette (matches reference image)
const PALETTE: [number, number, number][] = [
  [201, 184, 240], // lavender
  [168, 184, 240], // periwinkle
  [168, 212, 245], // sky blue
  [168, 240, 220], // mint
  [220, 240, 168], // yellow-green
  [240, 236, 168], // pale yellow
  [240, 200, 184], // peach
  [240, 168, 200], // pink
  [212, 168, 240], // violet
];

function holoColor(t: number, alpha: number): string {
  const n = PALETTE.length;
  const pos = (((t % 1) + 1) % 1) * n;
  const i = Math.floor(pos) % n;
  const j = (i + 1) % n;
  const f = pos - Math.floor(pos);
  const r = Math.round(PALETTE[i][0] + (PALETTE[j][0] - PALETTE[i][0]) * f);
  const g = Math.round(PALETTE[i][1] + (PALETTE[j][1] - PALETTE[i][1]) * f);
  const b = Math.round(PALETTE[i][2] + (PALETTE[j][2] - PALETTE[i][2]) * f);
  return `rgba(${r},${g},${b},${alpha.toFixed(3)})`;
}

export default function GradientBackground() {
  // ── DialKit ────────────────────────────────────────────────────────────────
  const p = useDialKit("Faucet BG", {
    cursor: {
      hideRadius:      [40,   10, 120],  // px — base erase radius
      speedMultiplier: [2.5,   0,  12],  // how much cursor speed grows the hole
    },
    fade: {
      fadeOutSpeed:    [0.18, 0.02, 0.6], // how fast symbols hide
      fadeInSpeed:     [0.04, 0.01, 0.3], // how fast symbols reappear
    },
    symbols: {
      gridSpacing:     [20,   12,  20],   // px — max 20, dense grid
      symbolSize:      [12,    8,  16],   // px — font size
      baseOpacity:     [0.72, 0.2,   1],  // resting symbol opacity
      colorSpeed:      [0.06,   0, 0.5],  // holographic drift speed
    },
  });

  const canvasRef     = useRef<HTMLCanvasElement>(null);
  const mouseRef      = useRef({ x: -9999, y: -9999 });
  const prevMouseRef  = useRef({ x: -9999, y: -9999 });
  const speedRef      = useRef(0);
  const opacitiesRef  = useRef<Float32Array | null>(null);
  const symbolsRef    = useRef<Uint8Array | null>(null);
  const dimsRef       = useRef({ cols: 0, rows: 0, spacing: 0 });
  const rafRef        = useRef<number | null>(null);
  const pRef          = useRef(p);
  pRef.current = p;

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext("2d");
    if (!ctx) return;

    // Build a fixed random symbol + full-opacity grid
    const initGrid = (spacing: number) => {
      const cols = Math.ceil(canvas.width  / spacing) + 1;
      const rows = Math.ceil(canvas.height / spacing) + 1;
      const total = cols * rows;
      dimsRef.current = { cols, rows, spacing };
      opacitiesRef.current = new Float32Array(total).fill(pRef.current.symbols.baseOpacity);
      symbolsRef.current   = new Uint8Array(total).map(
        () => Math.floor(Math.random() * SYMBOLS.length)
      );
    };

    const resize = () => {
      canvas.width  = window.innerWidth;
      canvas.height = window.innerHeight;
      initGrid(pRef.current.symbols.gridSpacing);
    };
    resize();
    window.addEventListener("resize", resize);

    const onMouseMove = (e: MouseEvent) => {
      prevMouseRef.current = { ...mouseRef.current };
      mouseRef.current     = { x: e.clientX, y: e.clientY };
      const dx = e.clientX - prevMouseRef.current.x;
      const dy = e.clientY - prevMouseRef.current.y;
      // Speed in px/frame — will decay each RAF tick
      speedRef.current = Math.sqrt(dx * dx + dy * dy);
    };
    window.addEventListener("mousemove", onMouseMove);

    let lastSpacing = pRef.current.symbols.gridSpacing;

    const draw = (time: number) => {
      const t  = time * 0.001;
      const pp = pRef.current;

      // Re-init if spacing changed via dial
      if (pp.symbols.gridSpacing !== lastSpacing) {
        lastSpacing = pp.symbols.gridSpacing;
        initGrid(lastSpacing);
      }

      const { cols, rows, spacing } = dimsRef.current;
      const opacities = opacitiesRef.current;
      const syms      = symbolsRef.current;
      if (!opacities || !syms) { rafRef.current = requestAnimationFrame(draw); return; }

      const hideRadius   = pp.cursor.hideRadius;
      const speedMult    = pp.cursor.speedMultiplier;
      const fadeOut      = pp.fade.fadeOutSpeed;
      const fadeIn       = pp.fade.fadeInSpeed;
      const fontSize     = pp.symbols.symbolSize;
      const baseOpacity  = pp.symbols.baseOpacity;
      const colorSpeed   = pp.symbols.colorSpeed;

      // Effective erase radius grows with cursor speed
      const effectiveR = hideRadius + speedRef.current * speedMult;
      speedRef.current *= 0.8; // decay speed each frame

      const cx = mouseRef.current.x;
      const cy = mouseRef.current.y;

      ctx.clearRect(0, 0, canvas.width, canvas.height);
      ctx.textAlign    = "center";
      ctx.textBaseline = "middle";
      ctx.font         = `${fontSize}px 'Menlo','SF Mono',monospace`;

      for (let row = 0; row < rows; row++) {
        for (let col = 0; col < cols; col++) {
          const idx = row * cols + col;
          const sx  = col * spacing;
          const sy  = row * spacing;

          const dx   = sx - cx;
          const dy   = sy - cy;
          const dist = Math.sqrt(dx * dx + dy * dy);

          // Update opacity — erase near cursor, restore when away
          if (dist < effectiveR) {
            // Smooth quadratic falloff: centre = fully hidden, edge = partial
            const ratio  = dist / effectiveR;
            const target = ratio * ratio * baseOpacity;
            opacities[idx] += (target - opacities[idx]) * fadeOut;
          } else {
            opacities[idx] += (baseOpacity - opacities[idx]) * fadeIn;
          }

          const alpha = opacities[idx];
          if (alpha < 0.005) continue;

          // Smooth holographic color — large-scale position gradient + slow drift
          const colorT =
            0.35 * Math.sin(col * 0.09 + t * colorSpeed) +
            0.35 * Math.cos(row * 0.07 + t * colorSpeed * 0.8) +
            0.5;

          ctx.fillStyle = holoColor(colorT, alpha);
          ctx.fillText(SYMBOLS[syms[idx]], sx, sy);
        }
      }

      rafRef.current = requestAnimationFrame(draw);
    };

    rafRef.current = requestAnimationFrame(draw);

    return () => {
      window.removeEventListener("mousemove", onMouseMove);
      window.removeEventListener("resize", resize);
      if (rafRef.current) cancelAnimationFrame(rafRef.current);
    };
  }, []); // eslint-disable-line react-hooks/exhaustive-deps

  return (
    <canvas
      ref={canvasRef}
      className="pointer-events-none fixed inset-0 z-0"
      aria-hidden="true"
    />
  );
}
