const subsystems = [
  {
    axis: "PITCH AXIS",
    title: "Main rotor & elevation",
    desc: "Larger rotor at the beam's front end lifts and lowers the nose against gravity and the counterweight. Driven independently of the tail rotor.",
    stat: { label: "Range", value: "+ 15 to -10°" },
  },
  {
    axis: "YAW AXIS",
    title: "Tail rotor & azimuth",
    desc: "Smaller rotor at the tail swings the beam left/right around the vertical pivot. Its thrust also leaks into pitch — the coupling the controller has to reject.",
    stat: { label: "Range", value: "Free 360°" },
  },
  {
    axis: "SENSING",
    title: "Position feedback",
    desc: "Rotary encoders on both pivot axes report angle back to the controller at loop rate, with no line-of-sight or vision system required.",
    stat: { label: "Encoders", value: "2× rotary" },
  },
  {
    axis: "CONTROL",
    title: "Real-time loop",
    desc: "A microcontroller reads both angles, runs the control law, and drives both motor channels through PWM every cycle.",
    stat: { label: "Loop rate", value: "100 Hz" },
  },
];

export function Subsystems() {
  return (
    <section id="subsystems" className="border-y border-[var(--panel-line)] bg-[var(--bg-raised)]/40">
      <div className="mx-auto max-w-6xl px-6 py-20 md:py-28">
        <div className="eyebrow mb-4">02 · Subsystems</div>
        <h2 className="font-display text-3xl font-semibold tracking-tight mb-12 max-w-lg">
          Four systems, one balance point.
        </h2>

        <div className="grid sm:grid-cols-2 gap-5">
          {subsystems.map((s) => (
            <div key={s.axis} className="panel p-6 flex flex-col">
              <div className="flex items-start justify-between mb-4">
                <span className="font-mono text-[11px] tracking-wide text-[var(--teal)]">
                  {s.axis}
                </span>
                <span className="readout text-right text-[11px] text-[var(--text-dim)]">
                  {s.stat.label}
                  <br />
                  <span className="text-[var(--amber)] text-sm">{s.stat.value}</span>
                </span>
              </div>
              <h3 className="font-display text-lg font-medium mb-2">{s.title}</h3>
              <p className="text-[var(--text-muted)] text-[0.92rem] leading-relaxed">
                {s.desc}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
