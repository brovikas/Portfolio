"use client";

import { useRef } from "react";
import anime from "animejs";
import { profile } from "@/data/content";

const LINKS = [
  { href: "#about", label: "Path" },
  { href: "#skills", label: "Arsenal" },
  { href: "#projects", label: "Missions" },
  { href: "#experience", label: "Training" },
  { href: "#contact", label: "Signal" },
];

function NavLink({ href, label }) {
  const underlineRef = useRef(null);

  const play = () => {
    anime({
      targets: underlineRef.current,
      scaleX: [0, 1],
      duration: 320,
      easing: "easeOutCubic",
    });
  };
  const reverse = () => {
    anime({
      targets: underlineRef.current,
      scaleX: [1, 0],
      duration: 220,
      easing: "easeInCubic",
    });
  };

  return (
    <a
      href={href}
      onMouseEnter={play}
      onMouseLeave={reverse}
      className="relative text-sm text-blade/80 hover:text-blade transition-colors py-1"
    >
      {label}
      <span
        ref={underlineRef}
        className="absolute left-0 -bottom-0.5 h-[2px] w-full origin-left bg-crimson-bright"
        style={{ transform: "scaleX(0)" }}
      />
    </a>
  );
}

export default function Nav({ onOpenPalette }) {
  return (
    <header className="fixed top-6 left-0 right-0 z-30">
      <nav className="mx-auto max-w-6xl px-6 flex items-center justify-between">
        <a href="#top" className="dojo-heading text-lg tracking-wide text-blade">
          {profile.alias}
        </a>
        <div className="hidden md:flex items-center gap-8">
          {LINKS.map((l) => (
            <NavLink key={l.href} {...l} />
          ))}
        </div>
        <button
          onClick={onOpenPalette}
          data-cursor-lock
          className="text-xs font-mono text-mist border border-white/10 px-3 py-1.5 hover:border-gold/50 hover:text-gold transition-colors"
        >
          ⌘K
        </button>
      </nav>
    </header>
  );
}
