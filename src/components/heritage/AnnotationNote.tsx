import type { ReactNode } from "react";
import { cn } from "@/lib/utils";

type Kind = "confirmed" | "folk" | "legend";

const config: Record<Kind, { label: string; dot: string; line: string; bg: string }> = {
  confirmed: { label: "Confirmed", dot: "bg-forest", line: "border-forest/50", bg: "bg-forest/[0.03]" },
  folk: { label: "Folk detail", dot: "bg-gold", line: "border-gold/60", bg: "bg-gold/[0.04]" },
  legend: { label: "Legend", dot: "bg-indigo", line: "border-indigo/45", bg: "bg-indigo/[0.03]" },
};

export function AnnotationNote({
  kind,
  title,
  label,
  children,
  className,
}: {
  kind: Kind;
  title?: string;
  label?: string;
  children: ReactNode;
  className?: string;
}) {
  const c = config[kind];
  return (
    <aside className={cn("border-l-2 pl-4 py-2.5 pr-3 rounded-r-md shadow-[0_1px_3px_rgba(0,0,0,0.02)]", c.line, c.bg, className)}>
      <p className="flex items-center gap-2 meta-label text-charcoal/60">
        <span className={cn("h-1.5 w-1.5 rounded-full", c.dot)} />
        {label || c.label}
      </p>
      {title && <p className="mt-1.5 font-display text-[0.95rem] text-oxblood">{title}</p>}
      <div className="mt-1.5 text-[1.05rem] leading-relaxed text-charcoal/75">{children}</div>
    </aside>
  );
}
