import Reveal from "./Reveal";
import { skills } from "@/data/content";

export default function Skills() {
  return (
    <section id="skills" className="relative py-32 px-6 bg-ink-soft/40">
      <div className="mx-auto max-w-5xl">
        <Reveal>
          <h2 className="dojo-heading text-3xl sm:text-4xl mb-3 text-blade">The Arsenal</h2>
        </Reveal>
        <Reveal delay={80}>
          <div className="blade-rule w-24 mb-14" />
        </Reveal>

        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-4">
          {skills.map((skill, i) => (
            <Reveal key={skill.name} delay={i * 40}>
              <div className="group relative border border-white/10 bg-ink-raised/60 px-4 py-5 hover:border-crimson/50 transition-colors">
                <p className="font-mono text-[10px] tracking-wider2 text-mist mb-2">
                  {skill.category}
                </p>
                <p className="text-blade text-sm sm:text-base">{skill.name}</p>
                <span className="absolute bottom-0 left-0 h-[2px] w-0 bg-gold group-hover:w-full transition-all duration-300" />
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
