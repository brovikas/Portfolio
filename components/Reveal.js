"use client";

import { useEffect, useRef } from "react";
import anime from "animejs";

/**
 * Wraps children and animates them in once they scroll into view.
 * Keep animation choices consistent across sections so motion reads
 * as one system, not scattered effects.
 */
export default function Reveal({ children, className = "", delay = 0, as: Tag = "div" }) {
  const ref = useRef(null);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          anime({
            targets: el,
            translateY: [28, 0],
            opacity: [0, 1],
            duration: 700,
            delay,
            easing: "easeOutCubic",
          });
          observer.disconnect();
        }
      },
      { threshold: 0.2 }
    );

    observer.observe(el);
    return () => observer.disconnect();
  }, [delay]);

  return (
    <Tag ref={ref} className={className} style={{ opacity: 0 }}>
      {children}
    </Tag>
  );
}
