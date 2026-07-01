"use client";

import dynamic from "next/dynamic";
import { useSyncExternalStore } from "react";
import { MoleculeResolve } from "@/components/MoleculeResolve";
import { useInView, useMediaQuery, useReducedMotion } from "@/lib/hooks";

const MoleculeScene = dynamic(
  () => import("@/components/MoleculeScene").then((m) => m.MoleculeScene),
  { ssr: false },
);

function hasWebGL() {
  try {
    const canvas = document.createElement("canvas");
    return !!(
      window.WebGLRenderingContext &&
      (canvas.getContext("webgl") || canvas.getContext("experimental-webgl"))
    );
  } catch {
    return false;
  }
}

const noopSubscribe = () => () => {};

function useHasWebGL() {
  return useSyncExternalStore(noopSubscribe, hasWebGL, () => false);
}

/**
 * The 3D signature moment is desktop-only and gated behind a WebGL check —
 * mobile (the stricter Lighthouse target) always gets the lightweight SVG
 * version in MoleculeResolve.tsx instead of the Three.js bundle.
 */
export function HeroVisual() {
  const reducedMotion = useReducedMotion();
  const isDesktop = useMediaQuery("(min-width: 768px)");
  const webgl = useHasWebGL();
  const { setRef, inView } = useInView<HTMLDivElement>(0.5);

  const useScene = isDesktop && webgl && !reducedMotion;

  return (
    <div
      ref={setRef}
      className="flex aspect-square w-full max-w-md items-center justify-center"
    >
      {useScene ? <MoleculeScene active={inView} /> : <MoleculeResolve />}
    </div>
  );
}
