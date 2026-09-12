"use client";

import { useRef } from "react";
import anime from "animejs";
import Reveal from "./Reveal";
import { projects } from "@/data/content";

function MissionCard({ project, index }) {
  const edgeRef = useRef(null);

  const unsheathe = () => {
    anime({
      targets: edgeRef.current,
      translateX: ["-100%", "0%"],
      duration: 380,
      easing: "easeOutQuint",
    });
  };
  const sheathe = () => {
    anime({
      targets: edgeRef.current,
      translateX: ["0%", "-100%"],
      duration: 260,
      easing: "easeInQuint",
    });
  };

  return (
    <Reveal delay={index * 100} className="relative">
      <div
        onMouseEnter={unsheathe}
        onMouseLeave={sheathe}
        className="relative overflow-hidden border border-white/10 bg-ink-raised/50 p-8"
      >
        <div
          ref={edgeRef}
          className="absolute inset-y-0 left-0 w-1.5 bg-gradient-to-b from-crimson-bright to-gold"
          style={{ transform: "translateX(-100%)" }}
        />
        <p className="font-mono text-[10px] tracking-wider2 text-crimson-bright mb-3">
          MISSION {String(index + 1).padStart(2, "0")}
        </p>
        <h3 className="dojo-heading text-2xl text-blade mb-3">{project.codename}</h3>
        <p className="text-mist text-sm sm:text-base mb-6 max-w-md">{project.objective}</p>
        <div className="flex flex-wrap gap-2 mb-6">
          {project.stack.map((s) => (
            <span key={s} className="font-mono text-[10px] text-mist border border-white/10 px-2 py-1">
              {s}
            </span>
          ))}
        </div>
        <div className="flex gap-6">
          <a
            href={project.liveUrl}
            target="_blank"
            rel="noopener noreferrer"
            data-cursor-lock
            className="text-sm text-gold hover:text-gold-soft transition-colors underline underline-offset-4 decoration-gold/30"
          >
            Live Demo
          </a>
          <a
            href={project.repoUrl}
            target="_blank"
            rel="noopener noreferrer"
            data-cursor-lock
            className="text-sm text-blade/80 hover:text-blade transition-colors underline underline-offset-4 decoration-white/20"
          >
            Source
          </a>
        </div>
      </div>
    </Reveal>
  );
}

export default function Projects() {
  return (
    <section id="projects" className="relative py-32 px-6">
      <div className="mx-auto max-w-4xl">
        <Reveal>
          <h2 className="dojo-heading text-3xl sm:text-4xl mb-3 text-blade">Missions Completed</h2>
        </Reveal>
        <Reveal delay={80}>
          <div className="blade-rule w-24 mb-14" />
        </Reveal>
        <div className="space-y-6">
          {projects.map((p, i) => (
            <MissionCard key={p.codename} project={p} index={i} />
          ))}
        </div>
      </div>
    </section>
  );
}
