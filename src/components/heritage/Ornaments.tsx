import { cn } from "@/lib/utils";

/* ---------- Small motif icons ---------- */

export function LotusMark({ className }: { className?: string }) {
  return (
    <svg viewBox="0 0 48 32" fill="none" className={cn("h-4 w-6", className)} aria-hidden="true">
      <g stroke="currentColor" strokeWidth="1.1" strokeLinecap="round" fill="none">
        <path d="M24 29c-3-4-4.5-8-4.5-13 0-4 1.7-8 4.5-11 2.8 3 4.5 7 4.5 11 0 5-1.5 9-4.5 13Z" />
        <path d="M24 29c-4.6-1.6-8-4.4-10-8.6-1.3-2.7-1.7-5.6-1.2-8.3 3.2 1.3 6 3.5 8 6.6" />
        <path d="M24 29c4.6-1.6 8-4.4 10-8.6 1.3-2.7 1.7-5.6 1.2-8.3-3.2 1.3-6 3.5-8 6.6" />
        <path d="M24 29c-5.6.4-10.6-1-15-4.4 3.4-2 7-2.8 10.8-2.4" />
        <path d="M24 29c5.6.4 10.6-1 15-4.4-3.4-2-7-2.8-10.8-2.4" />
      </g>
    </svg>
  );
}

export function PaisleyMark({ className }: { className?: string }) {
  return (
    <svg viewBox="0 0 24 32" fill="none" className={cn("h-5 w-4", className)} aria-hidden="true">
      <g stroke="currentColor" strokeWidth="1.1" fill="none" strokeLinecap="round">
        <path d="M12 31c-6 0-10-4.3-10-10.2C2 12 8 4 16 1c-3.4 4.6-4.6 8.4-3.6 11.4C13.6 16 22 15 22 21.6 22 27 17.6 31 12 31Z" />
        <path d="M12 26.5c-2.8 0-5-2.2-5-5 0-3.4 3.4-5.8 6.6-4.6" />
      </g>
    </svg>
  );
}

/* ---------- Divider ---------- */

export function OrnamentalDivider({
  className,
  tone = "gold",
  motif = "lotus",
}: {
  className?: string;
  tone?: "gold" | "light";
  motif?: "lotus" | "paisley" | "diamond";
}) {
  const color = tone === "gold" ? "text-gold" : "text-sand";
  return (
    <div
      className={cn("flex w-full items-center justify-center gap-4", color, className)}
      aria-hidden="true"
    >
      <span className="h-px max-w-[16rem] flex-1 bg-current opacity-45" />
      <svg viewBox="0 0 120 20" className="h-5 w-28 shrink-0" fill="none">
        <g stroke="currentColor" strokeWidth="1" fill="none" strokeLinecap="round">
          <path d="M2 10h30" opacity=".5" />
          <path d="M88 10h30" opacity=".5" />
          <path d="M34 10c4-4 8-4 12 0-4 4-8 4-12 0Z" />
          <path d="M74 10c4-4 8-4 12 0-4 4-8 4-12 0Z" />
          {motif === "diamond" ? (
            <path d="M60 3l7 7-7 7-7-7 7-7Z" />
          ) : motif === "paisley" ? (
            <path d="M60 2c-6 3-9 7-9 11a5 5 0 0 0 9 3 5 5 0 0 0 9-3c0-4-3-8-9-11Z" />
          ) : (
            <>
              <path d="M60 2c2.4 2.6 3.6 5.2 3.6 8 0 3.2-1.2 6-3.6 8-2.4-2-3.6-4.8-3.6-8 0-2.8 1.2-5.4 3.6-8Z" />
              <path d="M60 18c-3.6-.6-6.4-2.2-8.4-5 2.6-1.2 5.4-1.4 8-.6" />
              <path d="M60 18c3.6-.6 6.4-2.2 8.4-5-2.6-1.2-5.4-1.4-8-.6" />
            </>
          )}
        </g>
      </svg>
      <span className="h-px max-w-[16rem] flex-1 bg-current opacity-45" />
    </div>
  );
}

/* ---------- Corner flourishes for cards / frames ---------- */

function Corner({ className }: { className?: string }) {
  return (
    <svg viewBox="0 0 40 40" fill="none" className={cn("h-6 w-6", className)} aria-hidden="true">
      <g stroke="currentColor" strokeWidth="1.1" fill="none" strokeLinecap="round">
        <path d="M1 14V1h13" />
        <path d="M6 20c0-8 6-14 14-14" opacity=".8" />
        <path d="M9 9c3.4-.6 6 .8 7 4-3.4.6-6-.8-7-4Z" />
      </g>
    </svg>
  );
}

export function CornerFlourishes({ className }: { className?: string }) {
  return (
    <div className={cn("pointer-events-none absolute inset-0 text-gold/60", className)} aria-hidden="true">
      <Corner className="absolute left-1.5 top-1.5" />
      <Corner className="absolute right-1.5 top-1.5 rotate-90" />
      <Corner className="absolute bottom-1.5 right-1.5 rotate-180" />
      <Corner className="absolute bottom-1.5 left-1.5 -rotate-90" />
    </div>
  );
}

/* ---------- Framed border (manuscript double rule) ---------- */

export function DecorativeBorder({
  className,
  tone = "gold",
}: {
  className?: string;
  tone?: "gold" | "light";
}) {
  return (
    <div
      className={cn(
        "pointer-events-none absolute inset-0",
        tone === "gold" ? "text-gold/45" : "text-sand/40",
        className,
      )}
      aria-hidden="true"
    >
      <div className="absolute inset-3 border border-current sm:inset-5" />
      <div className="absolute inset-[0.9rem] border border-current opacity-45 sm:inset-[1.55rem]" />
      <CornerFlourishes className="inset-2 sm:inset-4" />
    </div>
  );
}

export function VineDivider({ className }: { className?: string }) {
  return (
    <div className={cn("flex items-center justify-center gap-2 text-gold/70 my-8 select-none", className)} aria-hidden="true">
      <svg viewBox="0 0 300 24" className="w-full max-w-sm h-6 text-gold" fill="none">
        <path
          d="M10 12 C 50 2, 80 22, 120 12 C 140 7, 145 12, 150 12 C 155 12, 160 7, 180 12 C 220 22, 250 2, 290 12"
          stroke="currentColor"
          strokeWidth="1.2"
          strokeLinecap="round"
        />
        {/* Center Lotus in Terracotta */}
        <path
          d="M150 4 C 147 8, 145 12, 150 18 C 155 12, 153 8, 150 4 Z"
          fill="var(--terracotta)"
          stroke="currentColor"
          strokeWidth="0.8"
        />
        <path
          d="M150 18 C 143 14, 140 10, 138 6 C 144 8, 147 12, 150 18 Z"
          fill="var(--terracotta)"
          stroke="currentColor"
          strokeWidth="0.8"
        />
        <path
          d="M150 18 C 157 14, 160 10, 162 6 C 156 8, 153 12, 150 18 Z"
          fill="var(--terracotta)"
          stroke="currentColor"
          strokeWidth="0.8"
        />
        {/* Small leaves along the vine */}
        <path d="M40 9 C 38 4, 30 6, 30 11 C 36 12, 38 10, 40 9 Z" fill="currentColor" opacity="0.85" />
        <path d="M90 15 C 92 20, 100 18, 100 13 C 94 12, 92 14, 90 15 Z" fill="currentColor" opacity="0.85" />
        <path d="M210 15 C 208 20, 200 18, 200 13 C 206 12, 208 14, 210 15 Z" fill="currentColor" opacity="0.85" />
        <path d="M260 9 C 262 4, 270 6, 270 11 C 264 12, 262 10, 260 9 Z" fill="currentColor" opacity="0.85" />
      </svg>
    </div>
  );
}
