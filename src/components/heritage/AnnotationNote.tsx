import type { ReactNode } from "react";
import { cn } from "@/lib/utils";

type Kind = "confirmed" | "folk" | "legend";

const config: Record<Kind, { label: string; dot: string; line: string }> = {
  confirmed: { label: "Confirmed", dot: "bg-forest", line: "border-forest/50" },
  folk: { label: "Folk detail", dot: "bg-gold", line: "border-gold/60" },
  legend: { label: "Legend", dot: "bg-indigo", line: "border-indigo/40" },
};

export function AnnotationNote({
  kind,
  title,
  children,
  className,
}: {
  kind: Kind;
  title?: string;
  children: ReactNode;
  className?: string;
}) {
  const c = config[kind];
  return (
    <aside className={cn("border-l pl-4", c.line, className)}>
      <p className="flex items-center gap-2 meta-label text-charcoal/60">
        <span className={cn("h-1.5 w-1.5 rounded-full", c.dot)} />
        {c.label}
      </p>
      {title && <p className="mt-1.5 font-display text-[0.95rem] text-oxblood">{title}</p>}
      <div className="mt-1.5 text-[0.98rem] leading-relaxed text-charcoal/75">{children}</div>
    </aside>
  );
}
