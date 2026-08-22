import type { ReactNode } from "react";
import { LotusMark } from "./Ornaments";

export function PageHeader({
  eyebrow,
  title,
  intro,
}: {
  eyebrow: string;
  title: ReactNode;
  intro?: ReactNode;
  motif?: string;
  tone?: string;
}) {
  return (
    <header
      className="relative overflow-hidden bg-cover bg-center bg-no-repeat text-parchment ink-grain"
      style={{
        backgroundImage: "linear-gradient(to bottom, rgba(42, 22, 18, 0.15), rgba(42, 22, 18, 0.2)), url('/images/page-header-bg.jpg')"
      }}
    >
      <div className="relative mx-auto max-w-7xl px-6 py-20 sm:py-28 md:py-32 flex items-center justify-center">
        {/* Constrain to match the central gold box of the background image */}
        <div className="relative w-full max-w-[260px] sm:max-w-md md:max-w-xl text-center z-10 px-2 sm:px-6 py-4 sm:py-6">
          <div className="flex items-center justify-center gap-2.5">
            <LotusMark className="text-gold h-4 w-6" />
            <span className="eyebrow text-sand/90 tracking-[0.22em] text-xs uppercase font-medium">{eyebrow}</span>
            <LotusMark className="text-gold h-4 w-6" />
          </div>
          <h1 className="mt-4 sm:mt-5 text-balance font-display text-2xl sm:text-4xl md:text-5xl leading-tight text-parchment text-shadow-heritage font-semibold">
            {title}
          </h1>
          {intro && (
            <p className="mx-auto mt-4 sm:mt-5 max-w-lg text-[0.98rem] sm:text-lg leading-relaxed text-parchment/90 font-medium">
              {intro}
            </p>
          )}
        </div>
      </div>
    </header>
  );
}
