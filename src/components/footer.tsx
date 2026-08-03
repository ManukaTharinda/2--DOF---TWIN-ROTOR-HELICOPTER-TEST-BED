export function Footer() {
  return (
    <footer className="mt-auto border-t border-[var(--panel-line)]">
      <div className="mx-auto max-w-6xl px-6 py-10 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4">
        <div className="flex items-center gap-2.5">
          <span className="h-1.5 w-1.5 rounded-full bg-[var(--teal)]" />
          <span className="font-mono text-[11px] text-[var(--text-dim)]">
            TRT-01 · 2-DOF Twin Rotor Helicopter Test Bed
          </span>
        </div>
        <p className="font-mono text-[11px] text-[var(--text-dim)]">
          Final Year Project Group No : 05.
        </p>
      </div>
    </footer>
  );
}
