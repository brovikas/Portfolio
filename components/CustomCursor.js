"use client";

import { useEffect, useRef, useState } from "react";
import anime from "animejs";

export default function CustomCursor() {
  const cursorRef = useRef(null);
  const [locked, setLocked] = useState(false);
  const pos = useRef({ x: 0, y: 0 });

  useEffect(() => {
    const move = (e) => {
      pos.current = { x: e.clientX, y: e.clientY };
      if (cursorRef.current) {
        cursorRef.current.style.transform = `translate(${e.clientX}px, ${e.clientY}px) translate(-50%, -50%)`;
      }
    };

    const onOver = (e) => {
      if (e.target.closest("a, button, [data-cursor-lock]")) {
        setLocked(true);
      }
    };
    const onOut = (e) => {
      if (e.target.closest("a, button, [data-cursor-lock]")) {
        setLocked(false);
      }
    };

    window.addEventListener("mousemove", move);
    document.addEventListener("mouseover", onOver);
    document.addEventListener("mouseout", onOut);
    return () => {
      window.removeEventListener("mousemove", move);
      document.removeEventListener("mouseover", onOver);
      document.removeEventListener("mouseout", onOut);
    };
  }, []);

  useEffect(() => {
    if (!cursorRef.current) return;
    anime({
      targets: cursorRef.current,
      scale: locked ? 1.6 : 1,
      rotate: locked ? 45 : 0,
      duration: 280,
      easing: "easeOutQuad",
    });
  }, [locked]);

  return (
    <div ref={cursorRef} className="custom-cursor">
      <svg viewBox="0 0 24 24" fill="none">
        {locked ? (
          <>
            <circle cx="12" cy="12" r="9" stroke="#e8e6df" strokeWidth="1.4" />
            <line x1="12" y1="1" x2="12" y2="6" stroke="#e8e6df" strokeWidth="1.4" />
            <line x1="12" y1="18" x2="12" y2="23" stroke="#e8e6df" strokeWidth="1.4" />
            <line x1="1" y1="12" x2="6" y2="12" stroke="#e8e6df" strokeWidth="1.4" />
            <line x1="18" y1="12" x2="23" y2="12" stroke="#e8e6df" strokeWidth="1.4" />
          </>
        ) : (
          <path d="M2 22 L20 4 L22 2 L20 6 L4 20 Z" fill="#e8e6df" />
        )}
      </svg>
    </div>
  );
}
