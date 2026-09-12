"use client";

import { useEffect, useState } from "react";

const BELTS = [
  { threshold: 0, label: "White Belt" },
  { threshold: 0.2, label: "Yellow Belt" },
  { threshold: 0.4, label: "Orange Belt" },
  { threshold: 0.6, label: "Green Belt" },
  { threshold: 0.8, label: "Brown Belt" },
  { threshold: 0.95, label: "Black Belt" },
];

export default function ScrollProgress() {
  const [progress, setProgress] = useState(0);

  useEffect(() => {
    const onScroll = () => {
      const scrollTop = window.scrollY;
      const docHeight = document.documentElement.scrollHeight - window.innerHeight;
      setProgress(docHeight > 0 ? scrollTop / docHeight : 0);
    };
    window.addEventListener("scroll", onScroll, { passive: true });
    onScroll();
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const belt = [...BELTS].reverse().find((b) => progress >= b.threshold) ?? BELTS[0];

  return (
    <div className="fixed top-0 left-0 right-0 z-40 flex items-center gap-3 px-4 py-2 pointer-events-none">
      <div className="h-[2px] flex-1 bg-white/10 overflow-hidden">
        <div
          className="h-full bg-gradient-to-r from-crimson to-gold transition-[width] duration-150 ease-out"
          style={{ width: `${progress * 100}%` }}
        />
      </div>
      <span className="hidden sm:inline text-[10px] tracking-wider2 text-mist font-mono whitespace-nowrap">
        {belt.label}
      </span>
    </div>
  );
}
