import { cn } from "@/lib/utils";

export type TimelineItem = { year: string; label: string; note?: string };

export function Timeline({ items, className }: { items: TimelineItem[]; className?: string }) {
  // Generate a beautiful bezier path for the horizontal wave
  let pathD = "M 0 50";
  items.forEach((_, idx) => {
    const startX = (idx / items.length) * 100;
    const endX = ((idx + 1) / items.length) * 100;
    const midX = (startX + endX) / 2;
    const isUp = idx % 2 === 0;
    const controlY = isUp ? 15 : 85;
    pathD += ` Q ${midX} ${controlY}, ${endX} 50`;
  });

  return (
    <div className={cn("relative w-full overflow-hidden select-none border border-gold/30 bg-card p-6 paper-grain", className)}>
      {/* Scroll cue helper */}
      <div className="absolute right-4 top-4 flex items-center gap-1.5 text-terracotta/75 animate-pulse text-xs meta-label">
        <span>Scroll Horizontally</span>
        <span>→</span>
      </div>

      <div className="overflow-x-auto pb-6 pt-4 scrollbar-thin scrollbar-thumb-gold/30">
        {/* Horizontal scroll container */}
        <div 
          className="relative h-[340px] px-6"
          style={{ width: `${Math.max(items.length * 200, 980)}px` }}
        >
          {/* Timeline Wavy Path Background SVG */}
          <div className="absolute inset-0 z-0 flex items-center">
            <svg 
              viewBox="0 0 100 100" 
              className="h-[120px] w-full text-gold/45" 
              preserveAspectRatio="none"
              fill="none"
            >
              {/* Secondary shadow line for depth */}
              <path
                d={pathD}
                stroke="currentColor"
                strokeWidth="1.2"
                strokeDasharray="4 4"
                className="opacity-40 translate-y-[1px]"
              />
              {/* Main golden sine wave path */}
              <path
                d={pathD}
                stroke="currentColor"
                strokeWidth="1.8"
                strokeLinecap="round"
              />
            </svg>
          </div>

          {/* Timeline Nodes & Text Blocks */}
          {items.map((item, idx) => {
            const isUp = idx % 2 === 0;
            const leftOffset = ((idx + 0.5) / items.length) * 100;
            
            // Marker position matching the curve peak/trough
            const markerY = isUp ? "calc(50% - 46px)" : "calc(50% + 46px)";
            
            // Text box positions
            const textStyle = isUp 
              ? { left: `${leftOffset}%`, top: "calc(50% + 15px)", transform: "translateX(-50%)" }
              : { left: `${leftOffset}%`, bottom: "calc(50% + 15px)", transform: "translateX(-50%)" };

            return (
              <div key={item.year + item.label}>
                {/* Node marker point on the wave line */}
                <div 
                  className="absolute z-10 -translate-x-1/2 -translate-y-1/2"
                  style={{ left: `${leftOffset}%`, top: markerY }}
                >
                  <div className="flex h-6 w-6 items-center justify-center rounded-full border-2 border-gold bg-parchment text-oxblood shadow-md">
                    <span className="h-2 w-2 rounded-full bg-terracotta" />
                  </div>
                </div>

                {/* Alternating Text box */}
                <div 
                  className="absolute z-10 w-[180px] text-center"
                  style={textStyle}
                >
                  <span className="font-display text-xs tracking-[0.25em] text-terracotta uppercase font-semibold">
                    {item.year}
                  </span>
                  <h4 className="mt-1 font-display font-medium text-[0.98rem] leading-snug text-oxblood max-h-[44px] overflow-hidden text-ellipsis">
                    {item.label}
                  </h4>
                  {item.note && (
                    <p className="mt-1 text-xs leading-relaxed text-charcoal/70 italic max-h-[60px] overflow-hidden text-ellipsis">
                      {item.note}
                    </p>
                  )}
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
}
