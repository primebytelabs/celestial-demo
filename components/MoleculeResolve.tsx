"use client";

import { useEffect, useRef, useState } from "react";
import { useReducedMotion } from "@/lib/hooks";

/**
 * The site's one signature interaction. It is an illustrative model of
 * computational lead optimization — a candidate space of loose fragments
 * converging on a stable structure — not a depiction of a specific real
 * compound. The convergence easing is deliberately slow-in/no-overshoot:
 * the honest metaphor is a search settling on an answer, not a bouncy reveal.
 */

type Node = { id: string; sx: number; sy: number; rx: number; ry: number };

const NODES: Node[] = [
  { id: "n0", sx: 40, sy: 210, rx: 150, ry: 90 },
  { id: "n1", sx: 230, sy: 40, rx: 210, ry: 120 },
  { id: "n2", sx: 260, sy: 230, rx: 210, ry: 180 },
  { id: "n3", sx: 90, sy: 60, rx: 150, ry: 150 },
  { id: "n4", sx: 20, sy: 130, rx: 90, ry: 150 },
  { id: "n5", sx: 270, sy: 130, rx: 90, ry: 120 },
  { id: "n6", sx: 150, sy: 260, rx: 90, ry: 90 },
  { id: "n7", sx: 200, sy: 190, rx: 150, ry: 30 },
];

const EDGES: [string, string][] = [
  ["n0", "n4"],
  ["n4", "n3"],
  ["n3", "n1"],
  ["n1", "n5"],
  ["n5", "n2"],
  ["n2", "n6"],
  ["n6", "n0"],
  ["n7", "n1"],
  ["n7", "n0"],
];

const byId = Object.fromEntries(NODES.map((n) => [n.id, n]));

export function MoleculeResolve() {
  const ref = useRef<HTMLDivElement>(null);
  const [inView, setInView] = useState(false);
  const reducedMotion = useReducedMotion();
  const resolved = reducedMotion || inView;

  useEffect(() => {
    if (reducedMotion) return;
    const el = ref.current;
    if (!el) return;
    const io = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setInView(true);
          io.disconnect();
        }
      },
      { threshold: 0.5 },
    );
    io.observe(el);
    return () => io.disconnect();
  }, [reducedMotion]);

  return (
    <div ref={ref} aria-hidden="true" className="select-none">
      <svg
        viewBox="0 0 300 300"
        className="h-auto w-full max-w-md"
        role="presentation"
      >
        {EDGES.map(([a, b], i) => {
          const na = byId[a];
          const nb = byId[b];
          return (
            <line
              key={`${a}-${b}`}
              x1={na.rx}
              y1={na.ry}
              x2={nb.rx}
              y2={nb.ry}
              stroke="var(--color-ochre-strong)"
              strokeWidth={1.5}
              style={{
                opacity: resolved ? 0.55 : 0,
                transition: reducedMotion
                  ? "none"
                  : `opacity var(--duration-resolve) var(--ease-resolve) ${
                      120 + i * 60
                    }ms`,
              }}
            />
          );
        })}
        {NODES.map((n, i) => (
          <g
            key={n.id}
            style={{
              transform: `translate(${resolved ? n.rx : n.sx}px, ${
                resolved ? n.ry : n.sy
              }px)`,
              transition: reducedMotion
                ? "none"
                : `transform var(--duration-resolve) var(--ease-resolve) ${
                    i * 45
                  }ms`,
            }}
          >
            <circle
              r={i === 0 ? 8 : 5}
              fill={i === 0 ? "var(--color-terracotta)" : "var(--color-green)"}
            />
          </g>
        ))}
      </svg>
    </div>
  );
}
