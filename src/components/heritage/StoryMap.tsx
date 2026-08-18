import { cn } from "@/lib/utils";
import { PatternBackground } from "./PatternBackground";
import { CornerFlourishes, LotusMark } from "./Ornaments";

export function StoryMap({
  place,
  context,
  className,
}: {
  place: string;
  context?: string;
  className?: string;
}) {
  return (
    <figure
      className={cn(
        "relative overflow-hidden border border-gold/45 bg-card paper-grain p-6 sm:p-8",
        className,
      )}
    >
      <CornerFlourishes />
      <PatternBackground motif="madhubani" opacity={0.05} />
      <div className="relative flex flex-col items-center gap-4 text-center">
        <svg viewBox="0 0 240 120" className="h-32 w-full max-w-md" aria-hidden="true">
          <rect
            x="6"
            y="6"
            width="228"
            height="108"
            fill="color-mix(in oklab, var(--sand) 45%, transparent)"
            stroke="var(--gold)"
            strokeWidth="0.8"
          />
          <g stroke="var(--gold)" strokeWidth="0.6" opacity="0.55" fill="none">
            <path d="M6 44c40 10 70-8 110 2s70 20 118 6" />
            <path d="M6 82c50-6 76 10 120 4s70-14 108-6" />
            <path d="M70 6c8 30 2 52-10 108M170 6c-6 34 0 62 8 108" />
          </g>
          <g transform="translate(120 58)">
            <circle r="9" fill="none" stroke="var(--gold)" strokeWidth="0.7" />
            <circle r="3.2" fill="var(--oxblood)" />
          </g>
        </svg>
        <LotusMark className="text-gold" />
        <figcaption>
          <p className="font-display text-lg text-oxblood">{place}</p>
          {context && (
            <p className="mx-auto mt-2 max-w-md text-[1rem] leading-relaxed text-charcoal/75">
              {context}
            </p>
          )}
          <p className="mt-3 meta-label text-charcoal/50">Illustrated location placeholder</p>
        </figcaption>
      </div>
    </figure>
  );
}
