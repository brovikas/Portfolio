"use client";

import { useEffect, useRef, useState } from "react";
import anime from "animejs";
import { cliCommands, profile, projects, skills } from "@/data/content";

const BOOT_LINES = [
  `shinobi-os v1.0 — booting ${profile.alias}'s terminal...`,
  "type 'help' to see available commands.",
];

export default function CLITerminal({ open, onClose }) {
  const [lines, setLines] = useState(BOOT_LINES);
  const [input, setInput] = useState("");
  const panelRef = useRef(null);
  const inputRef = useRef(null);
  const scrollRef = useRef(null);

  useEffect(() => {
    if (!panelRef.current) return;
    if (open) {
      anime({
        targets: panelRef.current,
        translateY: ["100%", "0%"],
        duration: 420,
        easing: "easeOutQuint",
      });
      setTimeout(() => inputRef.current?.focus(), 300);
    }
  }, [open]);

  useEffect(() => {
    scrollRef.current?.scrollTo({ top: scrollRef.current.scrollHeight });
  }, [lines]);

  const runCommand = (raw) => {
    const cmd = raw.trim().toLowerCase();
    let output;

    if (cmd === "") return;
    if (cmd === "clear") {
      setLines([]);
      return;
    }
    if (cmd === "help") output = cliCommands.help;
    else if (cmd === "whoami") output = cliCommands.whoami;
    else if (cmd === "contact") output = cliCommands.contact;
    else if (cmd === "skills") output = skills.map((s) => `- ${s.name} (${s.category})`);
    else if (cmd === "projects") output = projects.map((p) => `- ${p.codename}: ${p.objective}`);
    else if (cmd === "sensei") output = ["\"the sharpest tool is the one you actually ship.\""];
    else if (cmd === "sudo hire-me")
      output = ["access granted.", `redirecting to: ${profile.email}`, "...just kidding, go ahead and email me for real."];
    else output = [`command not found: ${cmd}`, "type 'help' for a list of commands."];

    setLines((prev) => [...prev, `$ ${raw}`, ...output]);
  };

  const handleKeyDown = (e) => {
    if (e.key === "Enter") {
      runCommand(input);
      setInput("");
    } else if (e.key === "Escape") {
      onClose();
    }
  };

  if (!open) return null;

  return (
    <div className="fixed inset-0 z-50 bg-black/70 flex items-end sm:items-center sm:justify-center">
      <div
        ref={panelRef}
        className="w-full sm:w-[640px] sm:max-h-[70vh] bg-ink border border-gold/30 font-mono text-sm shadow-2xl"
        style={{ transform: "translateY(100%)" }}
      >
        <div className="flex items-center justify-between px-4 py-2 border-b border-white/10">
          <span className="text-[11px] tracking-wider2 text-gold">shinobi-terminal</span>
          <button onClick={onClose} className="text-mist hover:text-blade text-xs" data-cursor-lock>
            close [esc]
          </button>
        </div>
        <div ref={scrollRef} className="p-4 h-64 overflow-y-auto space-y-1 text-blade/90">
          {lines.map((line, i) => (
            <p key={i} className={line.startsWith("$") ? "text-gold" : "text-blade/80"}>
              {line}
            </p>
          ))}
        </div>
        <div className="flex items-center gap-2 px-4 py-3 border-t border-white/10">
          <span className="text-crimson-bright">$</span>
          <input
            ref={inputRef}
            value={input}
            onChange={(e) => setInput(e.target.value)}
            onKeyDown={handleKeyDown}
            className="flex-1 bg-transparent outline-none text-blade placeholder:text-mist/50"
            placeholder="type a command..."
            autoComplete="off"
            spellCheck={false}
          />
          <span className="terminal-caret text-blade">▌</span>
        </div>
      </div>
    </div>
  );
}
