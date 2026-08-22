import { cn } from "@/lib/utils";
import { truthRatings, type TruthKey } from "@/data/stories";

const dotClass: Record<string, string> = {
  documented: "bg-forest",
  folk: "bg-gold",
  legend: "bg-indigo",
  mixed: "bg-forest",
};

export function TruthBadge({
  truth,
  full = false,
  tone = "light",
  className,
}: {
  truth: TruthKey;
  full?: boolean;
  tone?: "light" | "dark";
  className?: string;
}) {
  const rating = truthRatings[truth];
  return (
    <span
      className={cn(
        "inline-flex items-center gap-2 border px-2.5 py-1 meta-label",
        tone === "dark"
          ? "border-sand/30 text-parchment/85"
          : "border-gold/45 text-charcoal/75",
        className,
      )}
    >
      <span className="relative flex items-center">
        <span className={cn("h-1.5 w-1.5 rounded-full", dotClass[rating.tone])} />
        {truth === "mixed" && <span className="ml-1 h-1.5 w-1.5 rounded-full bg-gold" />}
      </span>
      {full ? rating.label : rating.short}
    </span>
  );
}
