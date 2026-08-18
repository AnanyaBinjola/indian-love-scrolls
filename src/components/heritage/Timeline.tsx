import { cn } from "@/lib/utils";

export type TimelineItem = { year: string; label: string; note?: string };

export function Timeline({ items, className }: { items: TimelineItem[]; className?: string }) {
  return (
    <div className={cn("relative", className)}>
      {/* Vertical (mobile) */}
      <ol className="relative space-y-8 border-l border-gold/50 pl-6 md:hidden">
        {items.map((item) => (
          <li key={item.year + item.label} className="relative">
            <span className="absolute -left-[1.7rem] top-2 h-2.5 w-2.5 rounded-full border border-gold bg-parchment" />
            <p className="font-display text-sm tracking-[0.18em] text-terracotta">{item.year}</p>
            <p className="mt-1 text-charcoal">{item.label}</p>
            {item.note && <p className="mt-1 text-sm italic text-charcoal/65">{item.note}</p>}
          </li>
        ))}
      </ol>

      {/* Horizontal (desktop) */}
      <div className="hidden md:block">
        <div className="relative flex items-stretch">
          {items.map((item) => (
            <div key={item.year + item.label} className="relative flex-1 px-3 pt-10 text-center">
              <span className="absolute left-0 top-[1.1rem] h-px w-full bg-gold/45" />
              <span className="absolute left-1/2 top-[0.7rem] h-2.5 w-2.5 -translate-x-1/2 rounded-full border border-gold bg-parchment" />
              <p className="font-display text-sm tracking-[0.18em] text-terracotta">{item.year}</p>
              <p className="mt-2 text-[0.98rem] leading-snug text-charcoal">{item.label}</p>
              {item.note && (
                <p className="mt-1 text-sm italic leading-snug text-charcoal/65">{item.note}</p>
              )}
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
