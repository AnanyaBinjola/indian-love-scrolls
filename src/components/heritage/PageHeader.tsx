import type { ReactNode } from "react";
import { PatternBackground, type Motif } from "./PatternBackground";
import { DecorativeBorder, LotusMark } from "./Ornaments";

export function PageHeader({
  eyebrow,
  title,
  intro,
  motif = "damask",
  tone = "oxblood",
}: {
  eyebrow: string;
  title: ReactNode;
  intro?: ReactNode;
  motif?: Motif;
  tone?: "oxblood" | "indigo";
}) {
  return (
    <header
      className={`relative overflow-hidden ink-grain ${
        tone === "indigo" ? "bg-indigo" : "bg-oxblood"
      } text-parchment`}
    >
      <PatternBackground motif={motif} color="ivory" opacity={0.075} />
      <div className="relative mx-auto max-w-5xl px-8 py-20 text-center sm:py-24">
        <DecorativeBorder />
        <div className="relative mx-auto max-w-3xl">
          <div className="flex items-center justify-center gap-3">
            <LotusMark className="text-gold" />
            <span className="eyebrow text-sand/70">{eyebrow}</span>
          </div>
          <h1 className="mt-5 text-balance text-3xl leading-[1.18] text-parchment sm:text-5xl">
            {title}
          </h1>
          {intro && (
            <p className="mx-auto mt-6 max-w-2xl text-lg leading-relaxed text-parchment/80">
              {intro}
            </p>
          )}
        </div>
      </div>
    </header>
  );
}
