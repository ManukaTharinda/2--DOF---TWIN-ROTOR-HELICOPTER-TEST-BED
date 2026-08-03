import { docs } from "@/data/docs";

export function Documentation() {
  return (
    <section id="docs" className="mx-auto max-w-6xl px-6 py-20 md:py-28">
      <div className="eyebrow mb-4">05 · Documentation</div>
      <h2 className="font-display text-3xl font-semibold tracking-tight mb-2">
        Manual, reports & source.
      </h2>
      <p className="text-[var(--text-muted)] max-w-lg mb-12">
        Everything About Our Project{" "}
        <span className="font-mono text-[var(--teal)] text-[0.85em]"></span>.
      </p>

      <div className="grid sm:grid-cols-2 gap-4">
        {docs.map((d) => (
          <a
            key={d.code}
            href={d.href}
            download
            className="panel p-5 flex items-start gap-4 hover:border-[var(--teal)]/50 transition-colors"
          >
            <div className="shrink-0 h-11 w-11 border border-[var(--panel-line)] flex items-center justify-center font-mono text-[10px] text-[var(--teal)]">
              {d.kind}
            </div>
            <div className="min-w-0">
              <div className="flex items-center gap-2 mb-1">
                <span className="font-mono text-[10px] text-[var(--text-dim)]">{d.code}</span>
              </div>
              <h3 className="font-display text-[0.98rem] font-medium mb-1">{d.title}</h3>
              <p className="text-[var(--text-muted)] text-[0.85rem] leading-relaxed">
                {d.description}
              </p>
            </div>
            <span className="ml-auto shrink-0 font-mono text-[var(--text-dim)] group-hover:text-[var(--teal)]">
              ↓
            </span>
          </a>
        ))}
      </div>
    </section>
  );
}
