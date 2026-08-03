const points = [
  {
    tag: "THE PROBLEM",
    text: "Lack of a safe, affordable, and realistic laboratory platform for studying nonlinear, coupled pitch–yaw helicopter control."
  },
  {
    tag: "THE RIG",
    text: "A custom 2-DOF twin-rotor helicopter testbed with two BLDC motors, encoders, and STM32-based real-time control.",
  },
  {
    tag: "THE GOAL",
    text: "To achieve and maintain the desired pitch and yaw angles using PID control and independent motor thrust.",
  },
];

export function Overview() {
  return (
    <section id="overview" className="mx-auto max-w-6xl px-6 py-20 md:py-28">
      <div className="grid md:grid-cols-[0.6fr_1.4fr] gap-10 md:gap-16">
        <div>
          <div className="eyebrow mb-4">01 · Overview</div>
          <h2 className="font-display text-3xl font-semibold tracking-tight leading-tight">
            2 DOF Twin Rotor.
            <br />
            Helicopter Test Bed.
          </h2>
        </div>

        <div className="grid sm:grid-cols-3 gap-px bg-[var(--panel-line)] border border-[var(--panel-line)]">
          {points.map((p) => (
            <div key={p.tag} className="bg-[var(--bg)] p-6">
              <div className="font-mono text-[11px] tracking-wide text-[var(--amber)] mb-3">
                {p.tag}
              </div>
              <p className="text-[var(--text-muted)] text-[0.95rem] leading-relaxed">
                {p.text}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
