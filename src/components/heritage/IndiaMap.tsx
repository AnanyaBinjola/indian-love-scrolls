import { useState } from "react";
import { Link } from "@tanstack/react-router";
import { stories } from "@/data/stories";
import { cn } from "@/lib/utils";
import { PatternBackground } from "./PatternBackground";
import { CornerFlourishes } from "./Ornaments";

/** Stylised, hand-drawn style outline of India — editorial placeholder, not a survey map. */
const INDIA_PATH =
  "M30 8 C38 6 46 10 52 8 C58 6 64 10 68 14 C74 12 80 16 84 22 C88 28 84 34 78 36 C74 42 70 40 66 44 C62 50 58 48 56 54 C58 62 56 70 52 78 C48 88 44 96 42 100 C38 96 34 88 32 78 C30 68 26 62 22 56 C18 50 14 44 12 36 C10 28 14 20 20 16 C24 12 26 10 30 8 Z";

export function IndiaMap({ compact = false }: { compact?: boolean }) {
  const [active, setActive] = useState<string | null>(null);

  return (
    <div className="relative mx-auto w-full max-w-3xl border border-gold/45 bg-card paper-grain p-6 sm:p-10">
      <CornerFlourishes />
      <PatternBackground motif="floral" opacity={0.05} />
      <div className="relative aspect-[4/5] w-full sm:aspect-[5/5]">
        <svg viewBox="0 0 100 108" className="h-full w-full" role="img" aria-label="Illustrated map of India with story locations">
          <path
            d={INDIA_PATH}
            fill="color-mix(in oklab, var(--sand) 55%, transparent)"
            stroke="var(--gold)"
            strokeWidth="0.5"
          />
          <path
            d={INDIA_PATH}
            fill="none"
            stroke="var(--gold)"
            strokeWidth="0.25"
            opacity="0.6"
            transform="translate(1.4 1.4)"
          />
          {stories.map((s) => {
            const isActive = active === s.slug;
            return (
              <g
                key={s.slug}
                transform={`translate(${s.mapPin.x} ${s.mapPin.y})`}
                onMouseEnter={() => setActive(s.slug)}
                onMouseLeave={() => setActive(null)}
                className="cursor-pointer"
              >
                <circle r="3.4" fill="transparent" />
                <circle
                  r={isActive ? 1.9 : 1.3}
                  fill="var(--oxblood)"
                  stroke="var(--gold)"
                  strokeWidth="0.4"
                  className="transition-all duration-300"
                />
                {isActive && (
                  <circle r="3.2" fill="none" stroke="var(--gold)" strokeWidth="0.3" opacity="0.8" />
                )}
              </g>
            );
          })}
        </svg>

        {stories.map((s) => (
          <Link
            key={s.slug}
            to="/stories/$slug"
            params={{ slug: s.slug }}
            onMouseEnter={() => setActive(s.slug)}
            onMouseLeave={() => setActive(null)}
            onFocus={() => setActive(s.slug)}
            onBlur={() => setActive(null)}
            aria-label={`${s.title} — ${s.mapPin.place}`}
            style={{ left: `${s.mapPin.x}%`, top: `${(s.mapPin.y / 108) * 100}%` }}
            className="absolute -translate-x-1/2 -translate-y-1/2"
          >
            <span className="block h-6 w-6" />
            <span
              className={cn(
                "pointer-events-none absolute left-1/2 top-6 w-44 -translate-x-1/2 border border-gold/50 bg-parchment px-3 py-2 text-center transition-opacity duration-300",
                active === s.slug ? "opacity-100" : "opacity-0",
              )}
            >
              <span className="block meta-label text-terracotta">{s.mapPin.place}</span>
              <span className="mt-1 block font-display text-[0.8rem] leading-tight text-oxblood">
                {s.title}
              </span>
            </span>
          </Link>
        ))}
      </div>

      {!compact && (
        <p className="relative mt-6 text-center meta-label text-charcoal/55">
          Illustrated placeholder map · locations shown approximately
        </p>
      )}
    </div>
  );
}
