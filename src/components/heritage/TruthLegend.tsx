import { cn } from "@/lib/utils";
import { CornerFlourishes, LotusMark } from "./Ornaments";

const items = [
  {
    textColor: "text-forest",
    accent: "before:bg-forest",
    label: "Documented History",
    typeLabel: "Archival",
    watermark: "इ", // Itihaas
    body: "Real historical figures, dated events, and agreements recorded in contemporary court chronicles or state archives at the time.",
  },
  {
    textColor: "text-gold",
    accent: "before:bg-gold",
    label: "Historical Core, Folk Details",
    typeLabel: "Folklore",
    watermark: "लो", // Loka-katha
    body: "A real historical person or place at the center, with romantic, heroic, and legendary details embroidered by generations of later storytellers.",
  },
  {
    textColor: "text-indigo",
    accent: "before:bg-indigo-deep",
    label: "Literary Legend",
    typeLabel: "Kavya",
    watermark: "का", // Kavya
    body: "First appearing in classical poetry, epics, or traditional ballads. Historians remain divided on their literal existence.",
  },
];

export function TruthLegend({ className }: { className?: string }) {
  return (
    <div className={cn("grid gap-6 md:grid-cols-3", className)}>
      {items.map((item) => (
        <div
          key={item.label}
          className={cn(
            "group relative border border-gold/45 bg-card p-8 paper-grain rounded-none overflow-hidden select-none",
            "before:absolute before:left-0 before:top-0 before:h-full before:w-[4px] before:content-['']",
            item.accent,
            "transition-[border-color,transform] duration-500 hover:-translate-y-1 hover:border-gold/80",
          )}
          style={{ boxShadow: "var(--shadow-manuscript)" }}
        >
          {/* Double inner manuscript border */}
          <div className="absolute inset-1.5 border border-gold/20 pointer-events-none" />
          <div className="absolute inset-3 border border-gold/10 pointer-events-none" />

          {/* Corner flourishes that are always visible */}
          <CornerFlourishes className="opacity-80" />

          {/* Subtle antique Sanskrit watermark */}
          <div className="absolute inset-0 flex items-center justify-center pointer-events-none select-none overflow-hidden">
            <span className={cn("font-display text-[9.5rem] font-bold opacity-[0.06] translate-y-3", item.textColor)}>
              {item.watermark}
            </span>
          </div>

          <div className="relative z-10 flex flex-col h-full justify-between">
            <div>
              {/* Decorative rating tag */}
              <div className="flex items-center gap-2 mb-3">
                <LotusMark className={cn("h-4 w-6", item.textColor)} />
                <span className={cn("meta-label text-xs uppercase tracking-[0.2em] font-medium", item.textColor)}>
                  {item.typeLabel}
                </span>
              </div>

              <h3 className="mt-4 font-display text-xl leading-snug text-oxblood">{item.label}</h3>
              <p className="mt-4 text-[1.08rem] leading-relaxed text-charcoal/85">{item.body}</p>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
}
