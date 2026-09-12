import Reveal from "./Reveal";
import { profile } from "@/data/content";

export default function Contact() {
  return (
    <section id="contact" className="relative py-32 px-6">
      <div className="mx-auto max-w-2xl text-center">
        <Reveal>
          <p className="font-mono text-xs tracking-wider2 text-crimson-bright mb-4">
            END OF TRANSMISSION
          </p>
        </Reveal>
        <Reveal delay={80}>
          <h2 className="dojo-heading text-3xl sm:text-5xl text-blade mb-8">Send a Signal</h2>
        </Reveal>
        <Reveal delay={140}>
          <p className="text-mist mb-12 max-w-md mx-auto">
            Open to full-stack roles and interesting builds. Reach out directly — no forms, no gatekeepers.
          </p>
        </Reveal>
        <Reveal delay={200} className="flex flex-wrap justify-center gap-4">
          <a href={`mailto:${profile.email}`} className="poly-btn" data-cursor-lock>
            <span>Email</span>
          </a>
          <a href={profile.github} target="_blank" rel="noopener noreferrer" className="poly-btn" data-cursor-lock>
            <span>GitHub</span>
          </a>
          <a href={profile.linkedin} target="_blank" rel="noopener noreferrer" className="poly-btn" data-cursor-lock>
            <span>LinkedIn</span>
          </a>
        </Reveal>
      </div>
    </section>
  );
}
