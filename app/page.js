"use client";

import { useEffect, useRef, useState } from "react";
import anime from "animejs";
import Nav from "@/components/Nav";
import Hero from "@/components/Hero";
import About from "@/components/About";
import Skills from "@/components/Skills";
import Projects from "@/components/Projects";
import Experience from "@/components/Experience";
import Contact from "@/components/Contact";
import Footer from "@/components/Footer";
import CustomCursor from "@/components/CustomCursor";
import ScrollProgress from "@/components/ScrollProgress";
import CLITerminal from "@/components/CLITerminal";
import CommandPalette from "@/components/CommandPalette";
import CodeOfBlade from "@/components/CodeOfBlade";

const EASTER_EGG_WORD = "ninja";

export default function Home() {
  const [cliOpen, setCliOpen] = useState(false);
  const [paletteOpen, setPaletteOpen] = useState(false);
  const typedBuffer = useRef("");
  const eggRef = useRef(null);

  useEffect(() => {
    const onKeyDown = (e) => {
      const isTyping = ["INPUT", "TEXTAREA"].includes(document.activeElement?.tagName);

      if ((e.metaKey || e.ctrlKey) && e.key.toLowerCase() === "k") {
        e.preventDefault();
        setPaletteOpen((v) => !v);
        return;
      }

      if (e.key === "~" && !isTyping) {
        e.preventDefault();
        setCliOpen((v) => !v);
        return;
      }

      if (!isTyping) {
        typedBuffer.current = (typedBuffer.current + e.key).slice(-EASTER_EGG_WORD.length).toLowerCase();
        if (typedBuffer.current === EASTER_EGG_WORD) {
          triggerEasterEgg();
        }
      }
    };

    window.addEventListener("keydown", onKeyDown);
    return () => window.removeEventListener("keydown", onKeyDown);
  }, []);

  const triggerEasterEgg = () => {
    if (!eggRef.current) return;
    const burst = eggRef.current;
    burst.style.display = "block";
    const shards = burst.querySelectorAll("span");
    anime({
      targets: shards,
      translateX: () => anime.random(-260, 260),
      translateY: () => anime.random(-260, 260),
      rotate: () => anime.random(-180, 180),
      opacity: [1, 0],
      scale: [1, 0.2],
      duration: 900,
      easing: "easeOutExpo",
      complete: () => {
        burst.style.display = "none";
      },
    });
  };

  return (
    <>
      <CustomCursor />
      <ScrollProgress />
      <Nav onOpenPalette={() => setPaletteOpen(true)} />

      <main>
        <Hero />
        <About />
        <CodeOfBlade />
        <Skills />
        <Projects />
        <Experience />
        <Contact />
      </main>

      <Footer />

      <CLITerminal open={cliOpen} onClose={() => setCliOpen(false)} />
      <CommandPalette
        open={paletteOpen}
        onClose={() => setPaletteOpen(false)}
        onOpenCLI={() => setCliOpen(true)}
      />

      {/* Terminal launcher */}
      <button
        onClick={() => setCliOpen(true)}
        data-cursor-lock
        className="fixed bottom-6 right-6 z-30 font-mono text-xs border border-gold/40 text-gold bg-ink/80 backdrop-blur px-4 py-2 hover:bg-gold hover:text-ink transition-colors"
        aria-label="Open Shinobi terminal"
      >
        ~/terminal
      </button>

      {/* Easter egg smoke-bomb burst, hidden until triggered by typing "ninja" */}
      <div
        ref={eggRef}
        className="fixed inset-0 z-[60] pointer-events-none flex items-center justify-center"
        style={{ display: "none" }}
        aria-hidden="true"
      >
        {Array.from({ length: 24 }).map((_, i) => (
          <span
            key={i}
            className="absolute w-2 h-2 rounded-full bg-gold"
            style={{ left: "50%", top: "50%" }}
          />
        ))}
      </div>
    </>
  );
}
