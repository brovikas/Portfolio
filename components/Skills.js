import Reveal from "./Reveal";
import { skills } from "@/data/content";

const CATEGORY_ICONS = {
  Language: (
    <path d="M4 4h16v16H4z M8 8l4 4-4 4 M13 16h4" stroke="currentColor" strokeWidth="1.4" fill="none" strokeLinecap="round" strokeLinejoin="round" />
  ),
  Frontend: (
    <path d="M3 5h18v14H3z M3 9h18 M7 5v18" stroke="currentColor" strokeWidth="1.4" fill="none" strokeLinecap="round" strokeLinejoin="round" />
  ),
  Backend: (
    <path d="M4 6h16v4H4z M4 14h16v4H4z M7 8h.01 M7 16h.01" stroke="currentColor" strokeWidth="1.4" fill="none" strokeLinecap="round" strokeLinejoin="round" />
  ),
  Database: (
    <path d="M4 6c0-1.7 3.6-3 8-3s8 1.3 8 3-3.6 3-8 3-8-1.3-8-3z M4 6v12c0 1.7 3.6 3 8 3s8-1.3 8-3V6 M4 12c0 1.7 3.6 3 8 3s8-1.3 8-3" stroke="currentColor" strokeWidth="1.4" fill="none" strokeLinecap="round" strokeLinejoin="round" />
  ),
  Networking: (
    <path d="M13 2 4 14h6l-1 8 9-12h-6l1-8z" stroke="currentColor" strokeWidth="1.4" fill="none" strokeLinecap="round" strokeLinejoin="round" />
  ),
  DevOps: (
    <path d="M7 18a4 4 0 0 1-.5-7.97A5.5 5.5 0 0 1 17 9.5a4.5 4.5 0 0 1-1 8.5H7z" stroke="currentColor" strokeWidth="1.4" fill="none" strokeLinecap="round" strokeLinejoin="round" />
  ),
  Tooling: (
    <path d="M14.7 6.3a1 1 0 0 0 0 1.4l1.6 1.6a1 1 0 0 0 1.4 0l3.5-3.5a5 5 0 0 1-6.2 6.2L6.4 20.6a2 2 0 0 1-2.8-2.8L12.2 9a5 5 0 0 1 6.2-6.2l-3.5 3.5z" stroke="currentColor" strokeWidth="1.4" fill="none" strokeLinecap="round" strokeLinejoin="round" />
  ),
};

function groupByCategory(list) {
  const groups = {};
  list.forEach((skill) => {
    if (!groups[skill.category]) groups[skill.category] = [];
    groups[skill.category].push(skill);
  });
  return Object.entries(groups);
}

export default function Skills() {
  const groups = groupByCategory(skills);

  return (
    <section id="skills" className="relative py-32 px-6 bg-ink-soft/40 overflow-hidden">
      {/* faint katana silhouette watermark for visual weight */}
      <svg
        className="absolute -right-24 top-1/2 -translate-y-1/2 w-[420px] h-[420px] opacity-[0.05] pointer-events-none"
        viewBox="0 0 200 200"
        fill="none"
        aria-hidden="true"
      >
        <path
          d="M20 180 L150 50 L165 35 Q170 30 165 25 Q160 20 155 25 L140 40 L10 170 Z"
          stroke="#e8e6df"
          strokeWidth="2"
        />
        <path d="M8 172 L20 184 L28 176" stroke="#b8933f" strokeWidth="2" />
      </svg>

      <div className="relative mx-auto max-w-5xl">
        <Reveal>
          <h2 className="dojo-heading text-3xl sm:text-4xl mb-3 text-blade">The Arsenal</h2>
        </Reveal>
        <Reveal delay={80}>
          <div className="blade-rule w-24 mb-14" />
        </Reveal>

        <div className="space-y-12">
          {groups.map(([category, items], gi) => (
            <Reveal key={category} delay={gi * 60}>
              <div className="flex flex-col sm:flex-row sm:items-start gap-4 sm:gap-10">
                <div className="flex items-center gap-3 sm:w-40 shrink-0">
                  <svg viewBox="0 0 24 24" className="w-5 h-5 text-gold shrink-0">
                    {CATEGORY_ICONS[category] ?? CATEGORY_ICONS.Tooling}
                  </svg>
                  <p className="font-mono text-[11px] tracking-wider2 text-mist">{category}</p>
                </div>
                <div className="flex flex-wrap gap-3 flex-1">
                  {items.map((skill) => (
                    <span
                      key={skill.name}
                      className="group relative border border-white/10 bg-ink-raised/60 px-4 py-2.5 text-blade text-sm hover:border-crimson/50 transition-colors"
                    >
                      {skill.name}
                      <span className="absolute bottom-0 left-0 h-[2px] w-0 bg-gold group-hover:w-full transition-all duration-300" />
                    </span>
                  ))}
                </div>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
} 