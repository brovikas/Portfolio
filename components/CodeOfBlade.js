import Reveal from "./Reveal";

const PRINCIPLES = [
  { title: "Move with precision", body: "Every feature earns its place. No dead code, no bloated dependencies — ship what the product actually needs." },
  { title: "Read the terrain first", body: "Understand the data flow and edge cases before writing a line. Debugging blind is how projects die." },
  { title: "Leave no trace of friction", body: "Fast load times, clean UX, sensible error states. The user should never feel the machinery underneath." },
  { title: "Train daily", body: "100+ DSA problems solved isn't a finish line — it's upkeep. The craft dulls if you stop sharpening it." },
];

export default function CodeOfBlade() {
  return (
    <section className="relative py-32 px-6">
      <div className="mx-auto max-w-4xl">
        <Reveal>
          <h2 className="dojo-heading text-3xl sm:text-4xl mb-3 text-blade">Code of the Blade</h2>
        </Reveal>
        <Reveal delay={80}>
          <div className="blade-rule w-24 mb-14" />
        </Reveal>
        <div className="grid sm:grid-cols-2 gap-8">
          {PRINCIPLES.map((p, i) => (
            <Reveal key={p.title} delay={i * 90}>
              <div className="border-l-2 border-crimson/40 pl-6 py-1">
                <h3 className="text-blade text-lg mb-2">{p.title}</h3>
                <p className="text-mist text-sm leading-relaxed">{p.body}</p>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}