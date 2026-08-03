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
    <div className="relative h-20 w-20 shrink-0 overflow-hidden rounded-xl border border-[var(--panel-line)] bg-[var(--bg-raised)] shadow-sm">
      {showPhoto ? (
        // eslint-disable-next-line @next/next/no-img-element
        <img
          src={photo}
          alt={name}
          onError={() => setFailed(true)}
          className="h-full w-full object-cover object-center transition-transform duration-300 group-hover:scale-105"
        />
      ) : (
        <div className="flex h-full w-full items-center justify-center font-display text-xl font-semibold text-[var(--teal)]">
          {initials(name)}
        </div>
      )}
    </div>
  );
}

export function Team() {
  return (
    <section
      id="team"
      className="border-t border-[var(--panel-line)] bg-[var(--bg-raised)]/40"
    >
      <div className="mx-auto max-w-7xl px-5 py-20 sm:px-6 md:py-28 lg:px-8">
        <div className="mb-4 font-mono text-xs uppercase tracking-[0.22em] text-[var(--teal)]">
          06 · Team
        </div>

        <h2 className="mb-3 max-w-3xl font-display text-3xl font-semibold tracking-tight sm:text-4xl">
          Superviosor & Team Members.
        </h2>

        <p className="mb-12 max-w-2xl text-sm leading-relaxed text-[var(--text-muted)] sm:text-base">
          {" "}
        </p>

        <div className="grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-6">
          {team.map((m, i) => (
            <a
              key={m.name}
              href={m.link ?? "#"}
              className="group panel flex min-h-[285px] flex-col gap-7 rounded-xl border border-[var(--panel-line)] p-5 transition-all duration-300 hover:-translate-y-1 hover:border-[var(--teal)]/60 hover:shadow-lg sm:p-6"
            >
              <div className="flex items-start justify-between gap-4">
                <Avatar name={m.name} photo={m.photo} />

                <span className="rounded-md border border-[var(--panel-line)] px-2 py-1 font-mono text-[10px] text-[var(--text-dim)]">
                  {String(i + 1).padStart(2, "0")}
                </span>
              </div>

              <div className="mt-auto">
                <h3 className="font-display text-base font-medium leading-snug">
                  {m.name}
                </h3>

                <p className="mt-2 font-mono text-[10px] uppercase tracking-[0.12em] text-[var(--teal)]">
                  {m.role}
                </p>

                <p className="mt-3 text-[0.82rem] leading-relaxed text-[var(--text-muted)]">
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