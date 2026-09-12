"use client";

import { useEffect, useMemo, useRef, useState } from "react";
import anime from "animejs";
import { projects, profile } from "@/data/content";

export default function CommandPalette({ open, onClose, onOpenCLI }) {
  const [query, setQuery] = useState("");
  const [activeIndex, setActiveIndex] = useState(0);
  const panelRef = useRef(null);
  const inputRef = useRef(null);

  const items = useMemo(() => {
    const base = [
      { label: "Go to: The Shinobi's Path (About)", action: () => scrollTo("#about") },
      { label: "Go to: The Arsenal (Skills)", action: () => scrollTo("#skills") },
      { label: "Go to: Missions Completed (Projects)", action: () => scrollTo("#projects") },
      { label: "Go to: Training Grounds (Experience)", action: () => scrollTo("#experience") },
      { label: "Go to: Send a Signal (Contact)", action: () => scrollTo("#contact") },
      { label: "Open Shinobi Terminal", action: onOpenCLI },
      { label: "Open GitHub", action: () => window.open(profile.github, "_blank") },
      { label: "Open LinkedIn", action: () => window.open(profile.linkedin, "_blank") },
      { label: "Email me", action: () => (window.location.href = `mailto:${profile.email}`) },
      ...projects.map((p) => ({
        label: `Open project: ${p.codename}`,
        action: () => window.open(p.liveUrl, "_blank"),
      })),
    ];
    if (!query) return base;
    return base.filter((i) => i.label.toLowerCase().includes(query.toLowerCase()));
  }, [query, onOpenCLI]);

  const scrollTo = (hash) => {
    document.querySelector(hash)?.scrollIntoView({ behavior: "smooth" });
  };

  useEffect(() => {
    setActiveIndex(0);
  }, [query]);

  useEffect(() => {
    if (!panelRef.current) return;
    if (open) {
      anime({
        targets: panelRef.current,
        translateY: [-16, 0],
        opacity: [0, 1],
        duration: 260,
        easing: "easeOutCubic",
      });
      setTimeout(() => inputRef.current?.focus(), 50);
    } else {
      setQuery("");
    }
  }, [open]);

  const handleKeyDown = (e) => {
    if (e.key === "ArrowDown") {
      e.preventDefault();
      setActiveIndex((i) => Math.min(i + 1, items.length - 1));
    } else if (e.key === "ArrowUp") {
      e.preventDefault();
      setActiveIndex((i) => Math.max(i - 1, 0));
    } else if (e.key === "Enter") {
      items[activeIndex]?.action();
      onClose();
    } else if (e.key === "Escape") {
      onClose();
    }
  };

  if (!open) return null;

  return (
    <div className="fixed inset-0 z-50 bg-black/70 flex items-start justify-center pt-[15vh] px-4">
      <div
        ref={panelRef}
        className="w-full sm:w-[520px] bg-ink-raised border border-white/10 shadow-2xl"
      >
        <input
          ref={inputRef}
          value={query}
          onChange={(e) => setQuery(e.target.value)}
          onKeyDown={handleKeyDown}
          placeholder="summon a section, project, or link..."
          className="w-full bg-transparent px-5 py-4 outline-none text-blade placeholder:text-mist/50 border-b border-white/10 font-mono text-sm"
          autoComplete="off"
          spellCheck={false}
        />
        <ul className="max-h-72 overflow-y-auto py-2">
          {items.length === 0 && (
            <li className="px-5 py-3 text-sm text-mist">no matches found.</li>
          )}
          {items.map((item, i) => (
            <li key={item.label}>
              <button
                onClick={() => {
                  item.action();
                  onClose();
                }}
                onMouseEnter={() => setActiveIndex(i)}
                className={`w-full text-left px-5 py-2.5 text-sm transition-colors ${
                  i === activeIndex ? "bg-crimson/20 text-blade" : "text-mist"
                }`}
              >
                {item.label}
              </button>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}
