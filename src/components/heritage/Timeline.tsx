import { cn } from "@/lib/utils";
import { LotusMark } from "./Ornaments";

export type TimelineItem = { year: string; label: string; note?: string };

export function Timeline({ items, className }: { items: TimelineItem[]; className?: string }) {
  return (
    <div className={cn("relative w-full select-none py-10", className)}>
      
      {/* ==================== DESKTOP LAYOUT (Horizontal Grid, No Scrollbar) ==================== */}
      <div className="hidden md:block relative w-full">
        {/* Horizontal gold timeline track line across the full width */}
        <div className="absolute left-[5%] right-[5%] top-2.5 h-[2px] bg-gradient-to-r from-gold/10 via-gold/60 to-gold/10 pointer-events-none" />

        <div 
          className="relative grid gap-6"
          style={{ gridTemplateColumns: `repeat(${items.length}, minmax(0, 1fr))` }}
        >
          {items.map((item, idx) => (
            <div key={item.year + item.label} className="relative flex flex-col items-center text-center">
              
              {/* Dot centered on the track line */}
              <div className="flex h-5 w-5 items-center justify-center rounded-full border border-gold/65 bg-parchment shadow-md z-10 relative">
                <span className="h-1.5 w-1.5 rounded-full bg-terracotta" />
              </div>

              {/* Float Card content placed below the dot */}
              <div 
                className="mt-6 w-full max-w-[220px] bg-card/85 backdrop-blur-[2.5px] p-5 shadow-md hover:shadow-xl transition-all duration-300 border border-gold/15 border-t-[3px] border-t-gold/55 select-text rounded-none paper-grain group animate-dynamic-float"
                style={{
                  animationDelay: `${idx * 0.8}s`,
                  boxShadow: "var(--shadow-manuscript)"
                }}
              >
                {/* Subtle inner card border */}
                <div className="absolute inset-1 border border-gold/10 pointer-events-none" />

                {/* Year marker */}
                <span className="inline-flex items-center gap-1 font-display text-[0.7rem] tracking-[0.25em] text-terracotta uppercase font-bold">
                  <LotusMark className="h-2.5 w-3.5 text-gold/60 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                  {item.year}
                </span>
                
                {/* Event Label */}
                <h4 className="mt-1.5 font-display font-medium text-[0.98rem] leading-snug text-oxblood group-hover:text-terracotta transition-colors duration-300">
                  {item.label}
                </h4>
                
                {/* Explanatory Note */}
                {item.note && (
                  <p className="mt-2 text-xs leading-relaxed text-charcoal/80 italic border-t border-gold/10 pt-1.5">
                    {item.note}
                  </p>
                )}
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* ==================== MOBILE LAYOUT (Vertical List for Readability) ==================== */}
      <div className="block md:hidden relative w-full px-4">
        {/* Vertical gold timeline track line */}
        <div className="absolute left-4 top-0 h-full w-[2px] -translate-x-1/2 bg-gradient-to-b from-gold/10 via-gold/60 to-gold/10 pointer-events-none" />

        <div className="relative space-y-10">
          {items.map((item, idx) => (
            <div key={item.year + item.label} className="relative flex items-start w-full">
              
              {/* Dot on the track line */}
              <div className="absolute left-4 top-2 -translate-x-1/2 z-25 flex h-5 w-5 items-center justify-center rounded-full border border-gold/60 bg-parchment shadow-md">
                <span className="h-1.5 w-1.5 rounded-full bg-terracotta animate-pulse" />
              </div>

              {/* Floating Content Card stacked to the right of the track line */}
              <div className="ml-10 w-full">
                <div 
                  className="relative bg-card/85 backdrop-blur-[2.5px] p-5 shadow-md hover:shadow-xl transition-all duration-300 border border-gold/15 border-l-[3px] border-l-gold/55 select-text rounded-none paper-grain group animate-dynamic-float"
                  style={{
                    animationDelay: `${idx * 0.8}s`,
                    boxShadow: "var(--shadow-manuscript)"
                  }}
                >
                  {/* Subtle inner card border */}
                  <div className="absolute inset-1 border border-gold/10 pointer-events-none" />

                  {/* Year marker */}
                  <span className="inline-flex items-center gap-1.5 font-display text-[0.7rem] tracking-[0.25em] text-terracotta uppercase font-bold">
                    <LotusMark className="h-2.5 w-3.5 text-gold/60 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                    {item.year}
                  </span>
                  
                  {/* Event Label */}
                  <h4 className="mt-1.5 font-display font-medium text-[0.98rem] leading-snug text-oxblood group-hover:text-terracotta transition-colors duration-300">
                    {item.label}
                  </h4>
                  
                  {/* Explanatory Note */}
                  {item.note && (
                    <p className="mt-2 text-xs leading-relaxed text-charcoal/80 italic border-t border-gold/10 pt-1.5">
                      {item.note}
                    </p>
                  )}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

    </div>
  );
}
