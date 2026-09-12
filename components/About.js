import Reveal from "./Reveal";
import { about } from "@/data/content";

export default function About() {
  return (
    <section id="about" className="relative py-32 px-6">
      <div className="mx-auto max-w-3xl">
        <Reveal>
          <h2 className="dojo-heading text-3xl sm:text-4xl mb-3 text-blade">The Shinobi&apos;s Path</h2>
        </Reveal>
        <Reveal delay={80}>
          <div className="blade-rule w-24 mb-10" />
        </Reveal>
        <div className="space-y-6">
          {about.paragraphs.map((p, i) => (
            <Reveal key={i} delay={i * 90}>
              <p className="text-mist text-base sm:text-lg leading-relaxed max-w-xl">{p}</p>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
