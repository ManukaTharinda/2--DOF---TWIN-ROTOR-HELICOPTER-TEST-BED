// Placeholder values — replace with your build's actual measurements.
const specs = [
  { label: "ESC", value: "20A Bidirectional ESC", unit: " " },
  { label: "Main rotor motor", value: "A2212/1000Kv BLDC MOTOR ", unit: "" },
  { label: "Tail rotor motor", value: "A2212/100Kv BLDC MOTOR", unit: "" },
  { label: "Pitch encoder.", value: "Incriment Encoder", unit: "" },
  { label: "Yaw encoder.", value: "Incriment Encorder", unit: "" },
  { label: "Controller", value: "PID control System", unit: "" },
  { label: "Control loop rate", value: "100 Hz", unit: "" },
  { label: "Interface", value: "Devloped GUI", unit: "" },
  { label: "Power Supply", value: "12 V DC", unit: "" },
  { label: "Micro Controller Unit", value: "STM 32 Board F407VET6", unit: "" },
  { label: "Propllers", value: "10x4.5 propellers", unit: "" },
];

export function Specs() {
  return (
    <section id="specs" className="mx-auto max-w-6xl px-6 py-20 md:py-28">
      <div className="flex items-end justify-between mb-10 flex-wrap gap-4">
        <div>
          <div className="eyebrow mb-4">03 · Specifications</div>
          <h2 className="font-display text-3xl font-semibold tracking-tight">
            Nameplate data.
          </h2>
        </div>
      
      </div>

      <div className="border border-[var(--panel-line)] divide-y divide-[var(--panel-line)]">
        {specs.map((s, i) => (
          <div
            key={s.label}
            className="grid grid-cols-[auto_1fr_auto] sm:grid-cols-[3rem_1fr_auto] items-center gap-4 px-5 py-3.5 hover:bg-[var(--panel)]/60 transition-colors"
          >
            <span className="font-mono text-[11px] text-[var(--text-dim)]">
              {String(i + 1).padStart(2, "0")}
            </span>
            <span className="text-[0.92rem] text-[var(--text-muted)]">{s.label}</span>
            <span className="readout text-[var(--teal)] text-right whitespace-nowrap">
              {s.value}
              <span className="text-[var(--text-dim)] ml-1.5 text-[0.8em]">{s.unit}</span>
            </span>
          </div>
        ))}
      </div>
    </section>
  );
}
