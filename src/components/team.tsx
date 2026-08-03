"use client";

import { useState } from "react";
import { team } from "@/data/team";

function initials(name: string) {
  return name
    .split(" ")
    .map((w) => w[0])
    .slice(0, 2)
    .join("")
    .toUpperCase();
}

function Avatar({ name, photo }: { name: string; photo: string | null }) {
  const [failed, setFailed] = useState(false);
  const showPhoto = photo && !failed;

  return (
    <div className="relative h-16 w-16 shrink-0 border border-[var(--panel-line)] bg-[var(--bg-raised)] overflow-hidden">
      {showPhoto ? (
        // eslint-disable-next-line @next/next/no-img-element
        <img
          src={photo}
          alt={name}
          onError={() => setFailed(true)}
          className="h-full w-full object-cover object-center"
        />
      ) : (
        <div className="h-full w-full flex items-center justify-center font-display text-lg text-[var(--teal)]">
          {initials(name)}
        </div>
      )}
    </div>
  );
}

export function Team() {
  return (
    <section id="team" className="border-t border-[var(--panel-line)] bg-[var(--bg-raised)]/40">
      <div className="mx-auto max-w-6xl px-6 py-20 md:py-28">
        <div className="eyebrow mb-4">06 · Team</div>
        <h2 className="font-display text-3xl font-semibold tracking-tight mb-2">
          Five people, one rig.
        </h2>
        <p className="text-[var(--text-muted)] max-w-lg mb-12">{" "}

        </p>

        <div className="grid sm:grid-cols-2 lg:grid-cols-5 gap-5">
          {team.map((m, i) => (
            <a
              key={m.name}
              href={m.link ?? "#"}
              className="panel p-5 flex flex-col gap-4 hover:border-[var(--teal)]/50 transition-colors"
            >
              <div className="flex items-start justify-between">
                <Avatar name={m.name} photo={m.photo} />
                <span className="font-mono text-[10px] text-[var(--text-dim)]">
                  {String(i + 1).padStart(2, "0")}
                </span>
              </div>
              <div>
                <h3 className="font-display text-[0.98rem] font-medium">{m.name}</h3>
                <p className="font-mono text-[10px] tracking-wide text-[var(--teal)] mt-1">
                  {m.role}
                </p>
                <p className="text-[var(--text-muted)] text-[0.82rem] leading-relaxed mt-2.5">
                  {m.focus}
                </p>
              </div>
            </a>
          ))}
        </div>
      </div>
    </section>
  );
}
