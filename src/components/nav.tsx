"use client";

import { useEffect, useState } from "react";

const links = [
  { href: "#overview", label: "Overview" },
  { href: "#subsystems", label: "Subsystems" },
  { href: "#specs", label: "Specs" },
  { href: "#media", label: "Media" },
  { href: "#docs", label: "Docs" },
  { href: "#team", label: "Team" },
];

export function Nav() {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 8);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header
      className={`sticky top-0 z-50 transition-colors duration-300 ${
        scrolled ? "bg-[var(--bg)]/90 backdrop-blur border-b border-[var(--panel-line)]" : "border-b border-transparent"
      }`}
    >
      <div className="mx-auto max-w-6xl px-6 h-16 flex items-center justify-between">
        <a href="#top" className="flex items-center gap-2.5 group">
          <span className="relative flex h-2 w-2">
            <span className="absolute inline-flex h-full w-full rounded-full bg-[var(--teal)] opacity-75" style={{ animation: "blink 2.4s ease-in-out infinite" }} />
            <span className="relative inline-flex rounded-full h-2 w-2 bg-[var(--teal)]" />
          </span>
          <span className="font-display font-semibold tracking-tight text-[15px]">
            TRT-01
          </span>
          <span className="hidden sm:inline text-[var(--text-dim)] font-mono text-[11px] tracking-wide">
            /2-DOF-TWIN-ROTOR
          </span>
        </a>

        <nav className="hidden md:flex items-center gap-7 font-mono text-[12px] tracking-wide text-[var(--text-muted)]">
          {links.map((l, i) => (
            <a
              key={l.href}
              href={l.href}
              className="hover:text-[var(--teal)] transition-colors"
            >
              <span className="text-[var(--text-dim)]">{String(i + 1).padStart(2, "0")}·</span> {l.label}
            </a>
          ))}
        </nav>

        <a
          href="#docs"
          className="font-mono text-[11px] tracking-wide uppercase border border-[var(--teal)]/40 text-[var(--teal)] px-3.5 py-1.5 hover:bg-[var(--teal-dim)] transition-colors"
        >
          Get Manual
        </a>
      </div>
    </header>
  );
}
