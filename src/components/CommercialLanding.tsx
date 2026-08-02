"use client";

import Image from "next/image";
import Link from "next/link";
import { useEffect, useMemo, useRef, useState } from "react";

type Scene = {
  id: string;
  start: number;
  label: string;
  line: string;
  image: string;
  motion: "pan-right" | "pan-left" | "zoom-in" | "float" | "pulse";
};

const scenes: Scene[] = [
  {
    id: "broadcast",
    start: 0,
    label: "0:00",
    line: "Tomorrow’s Home presents…",
    image: "/images/commercial/commercial-00-broadcast.png",
    motion: "pulse",
  },
  {
    id: "working",
    start: 5.5,
    label: "0:05.5",
    line: "Is your home… working as hard as you are? Well, now it can!",
    image: "/images/commercial/commercial-01-home-working.png",
    motion: "pan-right",
  },
  {
    id: "introducing",
    start: 10.1,
    label: "0:10.1",
    line: "Introducing NIKI… the world’s first autonomous flying home assistant!",
    image: "/images/commercial/commercial-02-introducing.png",
    motion: "zoom-in",
  },
  {
    id: "no-smart",
    start: 14.9,
    label: "0:14.9",
    line: "No smart lights. No smart oven. No smart refrigerator. Because with NIKI… your home becomes smart.",
    image: "/images/commercial/commercial-03-no-smart.png",
    motion: "pan-left",
  },
  {
    id: "come-here",
    start: 23.9,
    label: "0:23.9",
    line: "Imagine this… “NIKI, come here.” And there it is!",
    image: "/images/commercial/commercial-04-come-here.png",
    motion: "float",
  },
  {
    id: "flies-there",
    start: 27.1,
    label: "0:27.1",
    line: "Need to check the garage? Find your glasses? Turn off the bedroom light? Read the oven timer? NIKI flies there for you!",
    image: "/images/commercial/commercial-05-flies-there.png",
    motion: "pan-right",
  },
  {
    id: "everyday",
    start: 41.5,
    label: "0:41.5",
    line: "Whether you’re cooking dinner… helping your family… living independently… or simply enjoying your day… NIKI handles the little interruptions… so you don’t have to.",
    image: "/images/commercial/commercial-06-everyday.png",
    motion: "zoom-in",
  },
  {
    id: "quaint",
    start: 52.4,
    label: "0:52.4",
    line: "Smart home? How quaint. This is a home that thinks with you.",
    image: "/images/commercial/commercial-07-quaint.png",
    motion: "pulse",
  },
  {
    id: "brings-home",
    start: 57.3,
    label: "0:57.3",
    line: "Powered by the next generation of autonomous intelligence… NIKI doesn’t wait for the future. It brings it home.",
    image: "/images/commercial/commercial-08-brings-home.png",
    motion: "pan-left",
  },
  {
    id: "available",
    start: 65.4,
    label: "1:05.4",
    line: "NIKI. The smart home… without smart appliances. “Available… tomorrow.”",
    image: "/images/commercial/commercial-09-available.png",
    motion: "float",
  },
];

const FALLBACK_DURATION = 74;

function formatTime(seconds: number) {
  const m = Math.floor(seconds / 60);
  const s = seconds % 60;
  const whole = Math.floor(s);
  const tenths = Math.round((s - whole) * 10);
  return `${m}:${String(whole).padStart(2, "0")}.${tenths}`;
}

function sceneIndexForTime(time: number) {
  let index = 0;
  for (let i = 0; i < scenes.length; i += 1) {
    if (time + 0.05 >= scenes[i].start) index = i;
  }
  return index;
}

export function CommercialLanding() {
  const audioRef = useRef<HTMLAudioElement | null>(null);
  const previewOffsetRef = useRef(0);
  const playingRef = useRef(false);
  const triedAutoplayRef = useRef(false);
  const [currentTime, setCurrentTime] = useState(0);
  const [duration, setDuration] = useState(FALLBACK_DURATION);
  const [playing, setPlaying] = useState(false);
  const [hasAudio, setHasAudio] = useState(false);
  const [needsGesture, setNeedsGesture] = useState(false);
  const [ended, setEnded] = useState(false);

  const activeIndex = useMemo(() => sceneIndexForTime(currentTime), [currentTime]);
  const activeScene = scenes[activeIndex];

  useEffect(() => {
    playingRef.current = playing;
  }, [playing]);

  const play = async () => {
    const audio = audioRef.current;
    setEnded(false);

    if (audio && hasAudio) {
      try {
        await audio.play();
        setNeedsGesture(false);
        return;
      } catch {
        setNeedsGesture(true);
      }
    }

    previewOffsetRef.current = performance.now() - currentTime * 1000;
    playingRef.current = true;
    setPlaying(true);
    setNeedsGesture(false);
  };

  useEffect(() => {
    const audio = audioRef.current;
    if (!audio) return;

    const onTime = () => setCurrentTime(audio.currentTime);
    const onMeta = () => {
      if (Number.isFinite(audio.duration) && audio.duration > 0) {
        setDuration(audio.duration);
        setHasAudio(true);
      }
    };
    const onCanPlay = () => {
      setHasAudio(true);
      if (!triedAutoplayRef.current) {
        triedAutoplayRef.current = true;
        void audio.play().then(
          () => setNeedsGesture(false),
          () => setNeedsGesture(true),
        );
      }
    };
    const onPlay = () => {
      playingRef.current = true;
      setPlaying(true);
      setEnded(false);
    };
    const onPause = () => {
      playingRef.current = false;
      setPlaying(false);
    };
    const onEnded = () => {
      playingRef.current = false;
      setPlaying(false);
      setEnded(true);
    };
    const onError = () => setHasAudio(false);

    audio.addEventListener("timeupdate", onTime);
    audio.addEventListener("loadedmetadata", onMeta);
    audio.addEventListener("canplay", onCanPlay);
    audio.addEventListener("play", onPlay);
    audio.addEventListener("pause", onPause);
    audio.addEventListener("ended", onEnded);
    audio.addEventListener("error", onError);
    audio.load();

    return () => {
      audio.removeEventListener("timeupdate", onTime);
      audio.removeEventListener("loadedmetadata", onMeta);
      audio.removeEventListener("canplay", onCanPlay);
      audio.removeEventListener("play", onPlay);
      audio.removeEventListener("pause", onPause);
      audio.removeEventListener("ended", onEnded);
      audio.removeEventListener("error", onError);
    };
  }, []);

  useEffect(() => {
    if (hasAudio || !playing) return;

    const id = window.setInterval(() => {
      if (!playingRef.current) return;
      const next = (performance.now() - previewOffsetRef.current) / 1000;
      if (next >= duration) {
        playingRef.current = false;
        setPlaying(false);
        setEnded(true);
        return;
      }
      setCurrentTime(next);
    }, 100);

    return () => window.clearInterval(id);
  }, [hasAudio, playing, duration]);

  const pause = () => {
    const audio = audioRef.current;
    if (hasAudio && audio && !audio.paused) {
      audio.pause();
    }
    playingRef.current = false;
    setPlaying(false);
  };

  const togglePlay = () => {
    if (playing) pause();
    else void play();
  };

  const seekTo = (time: number) => {
    const clamped = Math.max(0, Math.min(duration, time));
    const audio = audioRef.current;
    if (hasAudio && audio) {
      audio.currentTime = clamped;
    }
    previewOffsetRef.current = performance.now() - clamped * 1000;
    setCurrentTime(clamped);
    setEnded(false);
  };

  return (
    <main className="commercial-stage relative flex min-h-[100svh] flex-col overflow-hidden">
      <div
        aria-hidden
        className="pointer-events-none absolute inset-0 opacity-40"
        style={{
          backgroundImage:
            "radial-gradient(circle at 20% 20%, rgba(240,180,60,0.18), transparent 40%), radial-gradient(circle at 80% 70%, rgba(60,140,120,0.16), transparent 45%)",
        }}
      />

      <header className="relative z-20 mx-auto flex w-full max-w-6xl items-center justify-between px-6 py-5 md:px-8">
        <p className="font-commercial text-xl tracking-[0.18em] text-[#f6e7c1] md:text-2xl">
          NIKI
        </p>
        <Link
          href="/discover"
          className="rounded-full border border-amber-200/40 bg-amber-100 px-5 py-2.5 font-commercial text-xs tracking-[0.18em] text-[#2a1f1c] uppercase transition-colors hover:bg-honey md:text-sm"
        >
          See NIKI Today!
        </Link>
      </header>

      <div className="relative z-10 mx-auto grid w-full max-w-6xl flex-1 items-center gap-8 px-4 pb-10 pt-2 lg:grid-cols-[minmax(0,1.35fr)_minmax(260px,0.8fr)] lg:px-8">
        <div className="min-w-0">
          <div className="commercial-tv-bezel mx-auto w-full rounded-[1.5rem] border border-[#6b5a3e] bg-gradient-to-b from-[#3a3224] to-[#1b1711] p-2.5 shadow-[0_30px_80px_-20px_rgba(0,0,0,0.8)] md:rounded-[2rem] md:p-4">
            <div className="relative aspect-[16/10] overflow-hidden rounded-[1rem] border border-[#2a2418] bg-black md:rounded-[1.25rem]">
              {scenes.map((scene, i) => (
                <div
                  key={scene.id}
                  className={`absolute inset-0 transition-opacity duration-700 ${
                    i === activeIndex ? "opacity-100" : "opacity-0"
                  }`}
                >
                  <div
                    className={`absolute inset-[-8%] ${
                      i === activeIndex && playing
                        ? `commercial-motion-${scene.motion}`
                        : ""
                    }`}
                  >
                    <Image
                      src={scene.image}
                      alt=""
                      fill
                      className="object-cover"
                      sizes="(max-width: 1024px) 100vw, 65vw"
                      priority={i === 0}
                    />
                  </div>
                </div>
              ))}

              <div className="commercial-scanlines pointer-events-none absolute inset-0" />
              <div className="commercial-vignette pointer-events-none absolute inset-0" />

              {/* Only title card stays on-screen */}
              {activeScene.id === "broadcast" && (
                <div className="commercial-title-card pointer-events-none absolute inset-0 flex items-center justify-center p-6">
                  <p className="font-commercial text-center text-2xl tracking-[0.08em] text-[#fff6d8] drop-shadow-[0_2px_18px_rgba(0,0,0,0.75)] md:text-4xl">
                    Tomorrow&apos;s Home presents…
                  </p>
                </div>
              )}

              <button
                type="button"
                onClick={togglePlay}
                className={`absolute inset-0 z-10 flex items-center justify-center transition-colors ${
                  playing && !needsGesture ? "bg-transparent" : "bg-black/30 hover:bg-black/20"
                }`}
                aria-label={playing ? "Pause commercial" : "Play commercial"}
              >
                {(!playing || needsGesture) && (
                  <span className="rounded-full border border-amber-200/40 bg-[#1d1810]/90 px-6 py-3 font-commercial text-sm tracking-[0.2em] text-amber-100 uppercase shadow-lg backdrop-blur-sm">
                    ▶ {needsGesture ? "Tune In" : ended ? "Play Again" : "Tune In"}
                  </span>
                )}
              </button>
            </div>

            <div className="mt-3 flex items-center gap-3 px-1">
              <button
                type="button"
                onClick={togglePlay}
                className="rounded-full border border-amber-200/30 bg-[#2a2318] px-4 py-2 font-commercial text-xs tracking-[0.16em] text-amber-100 uppercase transition-colors hover:bg-[#3a3122]"
              >
                {playing ? "Pause" : "Play"}
              </button>
              <div className="min-w-0 flex-1">
                <input
                  type="range"
                  min={0}
                  max={duration}
                  step={0.1}
                  value={Math.min(currentTime, duration)}
                  onChange={(e) => seekTo(Number(e.target.value))}
                  className="commercial-seek w-full"
                  aria-label="Seek commercial"
                />
                <div className="mt-1 flex justify-between font-mono text-[10px] tracking-wider text-[#b9a67d]">
                  <span>{formatTime(currentTime)}</span>
                  <span>{formatTime(duration)}</span>
                </div>
              </div>
            </div>
          </div>

          {/* Moving credits outside the TV */}
          <div className="relative mt-5 overflow-hidden border-y border-amber-200/15 py-4">
            <div
              key={activeScene.id}
              className="commercial-credits-line mx-auto max-w-3xl px-2 text-center"
            >
              <p className="font-commercial text-base leading-snug tracking-[0.04em] text-[#fff1c8] md:text-xl text-balance">
                {activeScene.line}
              </p>
            </div>
          </div>

          <div className="mt-7 flex flex-col items-center gap-3 text-center">
            <Link
              href="/discover"
              className="rounded-full bg-amber-100 px-8 py-3.5 font-commercial text-sm tracking-[0.2em] text-[#2a1f1c] uppercase transition-colors hover:bg-honey md:text-base"
            >
              See NIKI Today!
            </Link>
            <p className="font-mono text-[11px] tracking-[0.16em] text-[#9d8b63] uppercase">
              The smart home without smart appliances
            </p>
          </div>
        </div>

        {/* Script / cue sheet */}
        <aside className="rounded-[1.5rem] border border-[#5c4b2f] bg-[#17140f]/85 p-4 md:p-5">
          <p className="font-commercial text-xs tracking-[0.2em] text-amber-300/80 uppercase">
            Script
          </p>
          <p className="mt-1 text-sm text-[#b9a67d]">Click a line to jump ahead.</p>
          <ol className="mt-4 max-h-[28rem] space-y-2 overflow-y-auto pr-1">
            {scenes.map((scene, i) => {
              const active = i === activeIndex;
              return (
                <li key={scene.id}>
                  <button
                    type="button"
                    onClick={() => {
                      seekTo(scene.start);
                      if (!playingRef.current) void play();
                    }}
                    className={`w-full rounded-xl border px-3 py-3 text-left transition-all ${
                      active
                        ? "border-amber-300/50 bg-amber-200/10"
                        : "border-transparent bg-white/[0.02] hover:border-[#5c4b2f] hover:bg-white/[0.04]"
                    }`}
                  >
                    <span
                      className={`font-mono text-[11px] tracking-[0.16em] uppercase ${
                        active ? "text-amber-300" : "text-[#8f7d57]"
                      }`}
                    >
                      {scene.label}
                    </span>
                    <span
                      className={`mt-1 block text-sm leading-snug ${
                        active ? "text-[#fff1c8]" : "text-[#cbb992]"
                      }`}
                    >
                      {scene.line}
                    </span>
                  </button>
                </li>
              );
            })}
          </ol>
        </aside>
      </div>

      <audio ref={audioRef} src="/audio/niki_commercial_2.mp3" preload="auto" />
    </main>
  );
}
