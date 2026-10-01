"use client";

import { useEffect, useRef, useState } from "react";

// Runs `cb` once the element scrolls into view.
function useInView<T extends Element>(cb: () => void) {
  const ref = useRef<T>(null);
  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    const io = new IntersectionObserver(
      ([e]) => {
        if (e.isIntersecting) {
          cb();
          io.disconnect();
        }
      },
      { threshold: 0.2 },
    );
    io.observe(el);
    return () => io.disconnect();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);
  return ref;
}

export function Reveal({ children, delay = 0, className = "" }: { children: React.ReactNode; delay?: number; className?: string }) {
  const [on, setOn] = useState(false);
  const ref = useInView<HTMLDivElement>(() => setOn(true));
  return (
    <div ref={ref} className={`reveal ${on ? "in" : ""} ${className}`} style={{ transitionDelay: `${delay}ms` }}>
      {children}
    </div>
  );
}

export function Counter({ to, prefix = "", suffix = "" }: { to: number; prefix?: string; suffix?: string }) {
  const [n, setN] = useState(0);
  const ref = useInView<HTMLSpanElement>(() => {
    const t0 = performance.now();
    const tick = (t: number) => {
      const p = Math.min(1, (t - t0) / 1400);
      setN(Math.round(to * (1 - Math.pow(1 - p, 4))));
      if (p < 1) requestAnimationFrame(tick);
    };
    requestAnimationFrame(tick);
  });
  return (
    <span ref={ref}>
      {prefix}
      {n.toLocaleString("en-US")}
      {suffix}
    </span>
  );
}

const FILMS = [
  { id: "swaparoo", label: "Swaparoo", file: "swaparoo-v2" },
  { id: "boomerang", label: "Boomerang", file: "transformation-v2" },
];

// Hero film window: tabs switch films, sound is opt-in, plays through the list.
// Phones get the 9:16 cut of each film.
export function FilmPlayer() {
  const [i, setI] = useState(0);
  const [muted, setMuted] = useState(true);
  const [progress, setProgress] = useState(0);
  const [vertical, setVertical] = useState(false);
  const video = useRef<HTMLVideoElement>(null);
  const file = `/videos/${FILMS[i].file}${vertical ? "-vertical" : ""}`;

  useEffect(() => {
    const mq = matchMedia("(max-width: 720px)");
    const sync = () => setVertical(mq.matches);
    sync();
    mq.addEventListener("change", sync);
    return () => mq.removeEventListener("change", sync);
  }, []);

  useEffect(() => {
    const v = video.current;
    if (!v) return;
    v.load();
    v.play().catch(() => {});
  }, [file]);

  return (
    <div className="window">
      <div className="window-bar">
        <span className="dots"><i /><i /><i /></span>
        <span className="url">felipepsh.github.io/{FILMS[i].id}</span>
        <button className="sound" onClick={() => setMuted((m) => !m)} aria-pressed={!muted}>
          {muted ? "Sound off" : "Sound on"}
        </button>
      </div>
      <div className="tabs" role="tablist">
        {FILMS.map((f, k) => (
          <button key={f.id} role="tab" aria-selected={k === i} className={k === i ? "on" : ""} onClick={() => setI(k)}>
            {f.label}
          </button>
        ))}
      </div>
      <div className={`film ${vertical ? "vertical" : ""}`}>
        <video
          ref={video}
          src={`${file}.mp4`}
          poster={`${file}.jpg`}
          muted={muted}
          playsInline
          autoPlay
          preload="metadata"
          onTimeUpdate={(e) => setProgress(e.currentTarget.currentTime / (e.currentTarget.duration || 1))}
          onEnded={() => setI((k) => (k + 1) % FILMS.length)}
        />
        <div className="film-progress" style={{ transform: `scaleX(${progress})` }} />
      </div>
    </div>
  );
}
