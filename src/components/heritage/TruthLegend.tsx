import { cn } from "@/lib/utils";
import { CornerFlourishes } from "./Ornaments";

const items = [
  {
    dot: "bg-forest",
    accent: "before:bg-forest",
    label: "Documented History",
    body: "Real people, dated events, recorded at the time.",
  },
  {
    dot: "bg-gold",
    accent: "before:bg-gold",
    label: "Historical Core, Folk Details",
    body: "A real person or place at the center, with romantic details added by later storytellers.",
  },
  {
    dot: "bg-indigo",
    accent: "before:bg-indigo",
    label: "Literary Legend",
    body: "First appears in a poem or epic, and historians are still divided on whether it really happened.",
  },
];

export function TruthLegend({ className }: { className?: string }) {
  return (
    <div className={cn("grid gap-6 md:grid-cols-3", className)}>
      {items.map((item) => (
        <div
          key={item.label}
          className={cn(
            "group relative border border-gold/40 bg-card p-7 paper-grain",
            "before:absolute before:left-0 before:top-0 before:h-full before:w-[3px] before:content-['']",
            item.accent,
            "transition-[border-color,transform] duration-500 hover:-translate-y-1 hover:border-gold/75",
          )}
          style={{ boxShadow: "var(--shadow-manuscript)" }}
        >
          <CornerFlourishes className="opacity-0 transition-opacity duration-500 group-hover:opacity-100" />
          <span className={cn("block h-2 w-2 rounded-full", item.dot)} />
          <h3 className="mt-4 font-display text-lg leading-snug text-oxblood">{item.label}</h3>
          <p className="mt-3 text-[1.02rem] leading-relaxed text-charcoal/80">{item.body}</p>
        </div>
      ))}
    </div>
  );
}
