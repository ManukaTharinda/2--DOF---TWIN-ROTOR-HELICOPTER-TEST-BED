"use client";

import { useState } from "react";
import { photos, demoVideo } from "@/data/media";

function PhotoTile({ src, caption, index }: { src: string; caption: string; index: number }) {
  const [failed, setFailed] = useState(false);

  return (
    <figure className="group relative aspect-[4/3] overflow-hidden border border-[var(--panel-line)] bg-[var(--bg-raised)]">
      {!failed ? (
        // eslint-disable-next-line @next/next/no-img-element
        <img
          src={src}
          alt={caption}
          onError={() => setFailed(true)}
          className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-105"
        />
      ) : (
        <div className="h-full w-full flex flex-col items-center justify-center gap-2 border border-dashed border-[var(--panel-line)]">
          <span className="font-mono text-[10px] text-[var(--text-dim)]">
            SLOT {String(index + 1).padStart(2, "0")}
          </span>
          <span className="font-mono text-[9px] text-[var(--text-dim)] px-4 text-center leading-relaxed">
            add image at
            <br />
            <span className="text-[var(--teal)]">{src}</span>
          </span>
        </div>
      )}
      <figcaption className="absolute inset-x-0 bottom-0 bg-gradient-to-t from-black/80 to-transparent px-3 py-2.5">
        <span className="font-mono text-[10px] text-white/90">{caption}</span>
      </figcaption>
    </figure>
  );
}

function VideoPlayer() {
  const [failed, setFailed] = useState(false);

  if (demoVideo.youtubeId) {
    return (
      <div className="aspect-video w-full border border-[var(--panel-line)]">
        <iframe
          className="h-full w-full"
          src={`https://www.youtube.com/embed/${demoVideo.youtubeId}`}
          title="TRT-01 demo video"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
          allowFullScreen
        />
      </div>
    );
  }

  return (
    <div className="aspect-video w-full border border-[var(--panel-line)] bg-[var(--bg-raised)] relative">
      {!failed ? (
        <video
          className="h-full w-full object-cover"
          controls
          poster={demoVideo.poster}
          onError={() => setFailed(true)}
        >
          <source src={demoVideo.localSrc} type="video/mp4" />
        </video>
      ) : (
        <div className="absolute inset-0 flex flex-col items-center justify-center gap-3 border border-dashed border-[var(--panel-line)] m-2">
          <div className="h-11 w-11 rounded-full border border-[var(--teal)]/50 flex items-center justify-center">
            <div className="h-0 w-0 border-y-[6px] border-y-transparent border-l-[10px] border-l-[var(--teal)] ml-0.5" />
          </div>
          <span className="font-mono text-[11px] text-[var(--text-dim)] text-center px-6">
            add your demo video at
            <br />
            <span className="text-[var(--teal)]">/public/media/video/demo.mp4</span>
            <br />
            or set a YouTube ID in
            <br />
            <span className="text-[var(--teal)]">src/data/media.ts</span>
          </span>
        </div>
      )}
    </div>
  );
}

export function Media() {
  return (
    <section id="media" className="border-y border-[var(--panel-line)] bg-[var(--bg-raised)]/40">
      <div className="mx-auto max-w-6xl px-6 py-20 md:py-28">
        <div className="eyebrow mb-4">04 · Media</div>
        <h2 className="font-display text-3xl font-semibold tracking-tight mb-2">
          Watch it fly, see it built.
        </h2>
        <p className="text-[var(--text-muted)] max-w-lg mb-12">
          Demo runs and build photos from the bench.
        </p>

        <div className="mb-14">
          <div className="flex items-center gap-2 mb-4">
            <span className="font-mono text-[11px] text-[var(--amber)]">▸</span>
            <span className="font-mono text-[11px] tracking-wide text-[var(--text-muted)]">
              DEMO RUN
            </span>
          </div>
          <VideoPlayer />
        </div>

        <div>
          <div className="flex items-center gap-2 mb-4">
            <span className="font-mono text-[11px] text-[var(--amber)]">▸</span>
            <span className="font-mono text-[11px] tracking-wide text-[var(--text-muted)]">
              BUILD PHOTOS
            </span>
          </div>
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4">
            {photos.map((p, i) => (
              <PhotoTile key={p.src} src={p.src} caption={p.caption} index={i} />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
