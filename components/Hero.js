"use client";

import { useEffect, useRef } from "react";
import anime from "animejs";
import { profile } from "@/data/content";
import ToriiSilhouette from "./ToriiSilhouette";

function ParticleField() {
  const canvasRef = useRef(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    const ctx = canvas.getContext("2d");
    let raf;
    let particles = [];

    const resize = () => {
      canvas.width = canvas.offsetWidth;
      canvas.height = canvas.offsetHeight;
      particles = Array.from({ length: 45 }, () => ({
        x: Math.random() * canvas.width,
        y: Math.random() * canvas.height,
        r: Math.random() * 1.6 + 0.4,
        speedY: Math.random() * 0.25 + 0.05,
        drift: Math.random() * 0.3 - 0.15,
        alpha: Math.random() * 0.4 + 0.1,
      }));
    };

    const draw = () => {
      ctx.clearRect(0, 0, canvas.width, canvas.height);
      particles.forEach((p) => {
        ctx.beginPath();
        ctx.arc(p.x, p.y, p.r, 0, Math.PI * 2);
        ctx.fillStyle = `rgba(184, 147, 63, ${p.alpha})`;
        ctx.fill();
        p.y -= p.speedY;
        p.x += p.drift;
        if (p.y < -10) {
          p.y = canvas.height + 10;
          p.x = Math.random() * canvas.width;
        }
      });
      raf = requestAnimationFrame(draw);
    };

    resize();
    draw();
    window.addEventListener("resize", resize);
    return () => {
      cancelAnimationFrame(raf);
      window.removeEventListener("resize", resize);
    };
  }, []);

  return <canvas ref={canvasRef} className="absolute inset-0 w-full h-full opacity-70" aria-hidden="true" />;
}

export default function Hero() {
  const nameRef = useRef(null);
  const lineRef = useRef(null);

  useEffect(() => {
    if (!nameRef.current) return;

    const letters = nameRef.current.querySelectorAll("[data-letter]");
    const tl = anime.timeline({ easing: "easeOutExpo" });

    tl.add({
      targets: lineRef.current,
      scaleX: [0, 1],
      duration: 500,
    })
      .add(
        {
          targets: letters,
          translateY: [60, 0],
          opacity: [0, 1],
          rotateZ: [8, 0],
          delay: anime.stagger(28),
          duration: 700,
        },
        "-=250"
      )
      .add(
        {
          targets: ".hero-sub",
          translateY: [16, 0],
          opacity: [0, 1],
          duration: 600,
        },
        "-=350"
      )
      .add(
        {
          targets: ".hero-cta",
          translateY: [12, 0],
          opacity: [0, 1],
          duration: 500,
        },
        "-=350"
      );
  }, []);

  return (
    <section id="top" className="relative min-h-screen flex items-center overflow-hidden">
      <ToriiSilhouette className="absolute bottom-0 left-0 w-full h-[55%] opacity-80" />
    <ParticleField />
      <div className="relative z-10 mx-auto max-w-6xl px-6 w-full">
        <p className="hero-sub font-mono text-xs tracking-wider2 text-crimson-bright mb-6 opacity-0">
          {profile.role}
        </p>
        <h1
          ref={nameRef}
          className="dojo-heading text-[13vw] sm:text-6xl md:text-8xl leading-[0.95] text-blade mb-8"
        >
          {profile.name.split("").map((char, i) => (
            <span
              key={i}
              data-letter
              className="inline-block opacity-0"
              style={{ willChange: "transform" }}
            >
              {char === " " ? "\u00A0" : char}
            </span>
          ))}
        </h1>
        <div ref={lineRef} className="blade-rule w-40 origin-left mb-8" style={{ transform: "scaleX(0)" }} />
        <p className="hero-sub max-w-lg text-mist text-base sm:text-lg mb-10 opacity-0">
          {profile.tagline}
        </p>
        <div className="hero-cta flex flex-wrap gap-4 opacity-0">
          <a href="#projects" className="poly-btn" data-cursor-lock>
            <span>View Missions</span>
          </a>
          <a
            href={profile.resumeUrl}
            className="poly-btn"
            data-cursor-lock
            download
            onClick={async (e) => {
            try {
            const res = await fetch(profile.resumeUrl, { method: "HEAD" });
            if (!res.ok) throw new Error("missing");
            } catch {
            e.preventDefault();
            alert("Resume isn't uploaded yet — add resume.pdf to the /public folder.");
        }
  }}
>
  <span>Download Resume</span>
</a>
        </div>
      </div>
    </section>
  );
}
