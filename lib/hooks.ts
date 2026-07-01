"use client";

import { useEffect, useState, useSyncExternalStore } from "react";

function subscribeReducedMotion(callback: () => void) {
  const mq = window.matchMedia("(prefers-reduced-motion: reduce)");
  mq.addEventListener("change", callback);
  return () => mq.removeEventListener("change", callback);
}

function getReducedMotionSnapshot() {
  return window.matchMedia("(prefers-reduced-motion: reduce)").matches;
}

export function useReducedMotion() {
  return useSyncExternalStore(
    subscribeReducedMotion,
    getReducedMotionSnapshot,
    () => false,
  );
}

function subscribeMediaQuery(query: string) {
  return (callback: () => void) => {
    const mq = window.matchMedia(query);
    mq.addEventListener("change", callback);
    return () => mq.removeEventListener("change", callback);
  };
}

export function useMediaQuery(query: string) {
  return useSyncExternalStore(
    subscribeMediaQuery(query),
    () => window.matchMedia(query).matches,
    () => false,
  );
}

export function useInView<T extends Element>(threshold = 0.5) {
  const [ref, setRef] = useState<T | null>(null);
  const [inView, setInView] = useState(false);

  useEffect(() => {
    if (!ref) return;
    const io = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setInView(true);
          io.disconnect();
        }
      },
      { threshold },
    );
    io.observe(ref);
    return () => io.disconnect();
  }, [ref, threshold]);

  return { setRef, inView };
}
