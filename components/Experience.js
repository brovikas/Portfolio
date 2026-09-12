import Reveal from "./Reveal";
import { experience, stats } from "@/data/content";

export default function Experience() {
  return (
    <section id="experience" className="relative py-32 px-6 bg-ink-soft/40">
      <div className="mx-auto max-w-3xl">
        <Reveal>
          <h2 className="dojo-heading text-3xl sm:text-4xl mb-3 text-blade">Training Grounds</h2>
        </Reveal>
        <Reveal delay={80}>
          <div className="blade-rule w-24 mb-14" />
        </Reveal>

        <div className="relative border-l border-white/10 pl-8 space-y-12">
          {experience.map((item, i) => (
            <Reveal key={item.title} delay={i * 100} className="relative">
              <span className="absolute -left-[41px] top-1 w-3 h-3 rotate-45 bg-crimson-bright" />
              <p className="font-mono text-[10px] tracking-wider2 text-gold mb-2">{item.rank}</p>
              <h3 className="text-xl text-blade mb-1">{item.title}</h3>
              <p className="text-sm text-mist mb-2">
                {item.org} &middot; {item.period}
              </p>
              <p className="text-sm text-mist/90 max-w-lg">{item.description}</p>
            </Reveal>
          ))}
        </div>

        <Reveal delay={200} className="mt-16 flex flex-wrap gap-8">
          <div className="border border-white/10 px-6 py-4">
            <p className="font-mono text-2xl text-blade">{stats.leetcode}</p>
            <p className="text-xs text-mist mt-1">LeetCode problems solved</p>
          </div>
          <a
            href={`https://github.com/${stats.githubHandle}`}
            target="_blank"
            rel="noopener noreferrer"
            data-cursor-lock
            className="border border-white/10 px-6 py-4 hover:border-gold/50 transition-colors"
          >
            <p className="font-mono text-2xl text-blade">@{stats.githubHandle}</p>
            <p className="text-xs text-mist mt-1">GitHub profile</p>
          </a>
        </Reveal>
      </div>
    </section>
  );
}
