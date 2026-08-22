import { cn } from "@/lib/utils";
import { PatternBackground } from "./PatternBackground";
import { CornerFlourishes, LotusMark } from "./Ornaments";

export function StoryMap({
  place,
  context,
  imageUrl,
  className,
}: {
  place: string;
  context?: string;
  imageUrl?: string | undefined;
  className?: string;
}) {
  return (
    <figure
      className={cn(
        "relative overflow-hidden border border-gold/45 bg-card paper-grain p-6 sm:p-8 rounded-none",
        className,
      )}
      style={{ boxShadow: "var(--shadow-manuscript)" }}
    >
      <CornerFlourishes className="opacity-90" />
      <PatternBackground motif="madhubani" opacity={0.08} />
      
      <div className="relative flex flex-col items-center gap-5 text-center">
        {imageUrl ? (
          /* Framed painting rendering */
          <div className="relative overflow-hidden h-56 w-full max-w-md border-2 border-gold/45 shadow-lg bg-walnut p-1 rounded-none">
            <div className="absolute inset-1 border border-gold/25 pointer-events-none z-30" />
            <img
              src={imageUrl}
              alt={place}
              className="h-full w-full object-cover relative z-10"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-oxblood/20 via-transparent to-transparent z-20 pointer-events-none" />
          </div>
        ) : (
          /* SVG map placeholder fallback */
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
        )}

        <LotusMark className="text-gold" />
        
        <figcaption className="relative z-10">
          <p className="font-display text-xl text-oxblood leading-snug">{place}</p>
          {context && (
            <p className="mx-auto mt-3 max-w-xl text-[1.05rem] leading-relaxed text-charcoal/85">
              {context}
            </p>
          )}
          <p className="mt-3.5 meta-label text-charcoal/50 text-xs tracking-wider">
            {imageUrl ? "Historical Location Painting" : "Illustrated Location Map Placeholder"}
          </p>
        </figcaption>
      </div>
    </figure>
  );
}
