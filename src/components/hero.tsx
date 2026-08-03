"use client";

import { useEffect, useState } from "react";

function useTelemetry() {
  const [t, setT] = useState(0);
  const [pitch, setPitch] = useState(-3.2);
  const [yaw, setYaw] = useState(0);

  useEffect(() => {
    const id = setInterval(() => {
      setT((prev) => prev + 1);
    }, 220);
    return () => clearInterval(id);
  }, []);

  useEffect(() => {
    setPitch(6.5 * Math.sin(t / 6) - 2.1);
    setYaw((prev) => (prev + 1.3 * Math.sin(t / 9) + 0.4) % 360);
  }, [t]);

  return { pitch, yaw };
}

export function Hero() {
  const { pitch, yaw } = useTelemetry();

  return (
    <section id="top" className="relative overflow-hidden border-b border-[var(--panel-line)]">
      <div className="mx-auto max-w-6xl px-6 pt-16 pb-20 md:pt-24 md:pb-28 grid md:grid-cols-[1.1fr_0.9fr] gap-14 items-center">
        <div className="animate-rise">
          <div className="eyebrow mb-5 flex items-center gap-2">
            <span className="h-px w-6 bg-[var(--teal)]" />
            2 DOF Twin Rotor Helicopter Test Bed
          </div>
          <h1 className="font-display text-[2.6rem] leading-[1.05] sm:text-[3.4rem] font-semibold tracking-tight">
            2-DOF Twin Rotor
            <br />
            Helicopter Test Bed
          </h1>
          <p className="mt-6 text-[var(--text-muted)] text-[1.05rem] leading-relaxed max-w-lg">
          A custom-built 2-DOF twin-rotor helicopter testbed for studying nonlinear, 
          cross-coupled pitch and yaw control on real hardware. Two BLDC motors, encoder feedback, 
          and an STM32-based PID loop work together to overcome gravity, rotor interaction, and system instability in real time.
          </p>
          <div className="mt-9 flex flex-wrap items-center gap-4">
            <a
              href="#docs"
              className="font-mono text-[12px] uppercase tracking-wide bg-[var(--teal)] text-[#04120f] px-5 py-3 hover:brightness-110 transition"
            >
              Read the manual
            </a>
            <a
              href="#media"
              className="font-mono text-[12px] uppercase tracking-wide border border-[var(--panel-line)] px-5 py-3 hover:border-[var(--teal)]/50 transition"
            >
              Watch it fly
            </a>
          </div>
        </div>

        {/* Signature element: schematic rig + live telemetry HUD */}
        <div className="relative panel p-5 sm:p-7 animate-rise" style={{ animationDelay: "120ms" }}>
          <div className="flex items-center justify-between mb-3">
            <span className="eyebrow">VIEW · FRONT ELEVATION</span>
            <span className="flex items-center gap-1.5 font-mono text-[10px] text-[var(--amber)]">
              <span className="h-1.5 w-1.5 rounded-full bg-[var(--amber)]" style={{ animation: "blink 1.4s ease-in-out infinite" }} />
              
            </span>
          </div>

          <svg viewBox="0 0 420 300" className="w-full h-auto">
            {/* yaw reticle */}
            <ellipse cx="210" cy="256" rx="150" ry="20" fill="none" stroke="var(--panel-line)" strokeWidth="1" strokeDasharray="3 5" />
            <g style={{ transformOrigin: "210px 256px", transform: `rotate(${yaw}deg)` }}>
              <line x1="210" y1="256" x2="340" y2="256" stroke="var(--amber)" strokeWidth="1.5" opacity="0.7" />
              <circle cx="340" cy="256" r="2.5" fill="var(--amber)" />
            </g>

            {/* base column */}
            <rect x="200" y="150" width="20" height="106" fill="var(--bg-raised)" stroke="var(--panel-line)" />
            <circle cx="210" cy="150" r="9" fill="var(--bg-raised)" stroke="var(--teal)" strokeWidth="1.5" />

            {/* pivoting beam group (pitch axis) */}
            <g style={{ transformOrigin: "210px 150px", animation: "pitch-osc 5.5s ease-in-out infinite" }}>
              <line x1="70" y1="150" x2="350" y2="150" stroke="#c7d3da" strokeWidth="5" strokeLinecap="round" />

              {/* main rotor (left, larger) */}
              <g transform="translate(70 150)">
                <line x1="0" y1="0" x2="0" y2="-26" stroke="#c7d3da" strokeWidth="4" />
                <g style={{ transformOrigin: "0px -26px", animation: "prop-spin 0.6s linear infinite" }}>
                  <ellipse cx="0" cy="-26" rx="34" ry="4.5" fill="var(--teal)" opacity="0.85" />
                  <ellipse cx="0" cy="-26" rx="4.5" ry="34" fill="var(--teal)" opacity="0.55" />
                </g>
                <circle cx="0" cy="-26" r="4" fill="#0a0e13" stroke="var(--teal)" />
              </g>

              {/* tail rotor (right, smaller) */}
              <g transform="translate(350 150)">
                <line x1="0" y1="0" x2="0" y2="-16" stroke="#c7d3da" strokeWidth="3" />
                <g style={{ transformOrigin: "0px -16px", animation: "prop-spin 0.4s linear infinite" }}>
                  <ellipse cx="0" cy="-16" rx="20" ry="3" fill="var(--amber)" opacity="0.85" />
                  <ellipse cx="0" cy="-16" rx="3" ry="20" fill="var(--amber)" opacity="0.55" />
                </g>
                <circle cx="0" cy="-16" r="3" fill="#0a0e13" stroke="var(--amber)" />
              </g>

              {/* counterweight */}
              <line x1="210" y1="150" x2="210" y2="190" stroke="#7c8a96" strokeWidth="3" />
              <circle cx="210" cy="196" r="8" fill="var(--bg-raised)" stroke="#7c8a96" strokeWidth="1.5" />
            </g>

            {/* base pad */}
            <rect x="150" y="256" width="120" height="10" fill="var(--bg-raised)" stroke="var(--panel-line)" />
          </svg>

          <div className="mt-5 grid grid-cols-2 gap-3">
            <div className="border border-[var(--panel-line)] px-3 py-2.5">
              <div className="eyebrow mb-1">Pitch θ</div>
              <div className="readout text-xl text-[var(--teal)]">
                {pitch >= 0 ? "+" : ""}
                {pitch.toFixed(1)}°
              </div>
            </div>
            <div className="border border-[var(--panel-line)] px-3 py-2.5">
              <div className="eyebrow mb-1">Yaw ψ</div>
              <div className="readout text-xl text-[var(--amber)]">
                {yaw.toFixed(1)}°
              </div>
            </div>
          </div>
          <p className="mt-3 font-mono text-[10px] text-[var(--text-dim)]">
            
          </p>
        </div>
      </div>
    </section>
  );
}
