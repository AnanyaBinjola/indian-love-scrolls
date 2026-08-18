import { cn } from "@/lib/utils";

export type Motif = "damask" | "floral" | "paisley" | "madhubani" | "jali" | "lotus";

const patterns: Record<Motif, { svg: string; size: string }> = {
  damask: {
    size: "120px 120px",
    svg: `<svg xmlns='http://www.w3.org/2000/svg' width='120' height='120' viewBox='0 0 120 120'><g fill='none' stroke='%COLOR%' stroke-width='1.1'><path d='M60 12c8 10 12 20 12 30s-4 20-12 30c-8-10-12-20-12-30s4-20 12-30Z'/><path d='M60 72c10 6 16 14 18 24-12 2-22-2-30-10'/><path d='M60 72c-10 6-16 14-18 24 12 2 22-2 30-10'/><circle cx='60' cy='42' r='4'/><path d='M0 60c10-8 20-8 30 0-10 8-20 8-30 0Z'/><path d='M120 60c-10-8-20-8-30 0 10 8 20 8 30 0Z'/><path d='M0 0c10 6 16 14 18 24'/><path d='M120 0c-10 6-16 14-18 24'/><path d='M0 120c10-6 16-14 18-24'/><path d='M120 120c-10-6-16-14-18-24'/></g></svg>`,
  },
  floral: {
    size: "150px 150px",
    svg: `<svg xmlns='http://www.w3.org/2000/svg' width='150' height='150' viewBox='0 0 150 150'><g fill='none' stroke='%COLOR%' stroke-width='1'><path d='M10 140C40 110 40 70 75 60s35-40 65-50'/><path d='M75 60c-14 4-22 14-22 26 12 2 22-6 26-18'/><path d='M40 100c-12 2-20 10-22 22 12 2 22-6 26-18'/><circle cx='104' cy='34' r='6'/><path d='M104 22v-8M104 54v-8M92 34h-8M124 34h-8'/><path d='M140 140c-20-6-32-18-38-36'/></g></svg>`,
  },
  paisley: {
    size: "140px 140px",
    svg: `<svg xmlns='http://www.w3.org/2000/svg' width='140' height='140' viewBox='0 0 140 140'><g fill='none' stroke='%COLOR%' stroke-width='1'><path d='M40 130c-18 0-30-13-30-31 0-26 18-50 42-59-10 14-14 25-11 34 3 11 28 8 28 28 0 16-13 28-29 28Z'/><path d='M40 116c-8 0-14-6-14-14 0-10 10-17 19-13'/><path d='M110 60c-14 0-24-10-24-24 0-20 14-36 32-36-8 11-10 19-8 26'/></g></svg>`,
  },
  madhubani: {
    size: "90px 90px",
    svg: `<svg xmlns='http://www.w3.org/2000/svg' width='90' height='90' viewBox='0 0 90 90'><g fill='none' stroke='%COLOR%' stroke-width='1'><path d='M45 6c10 12 10 24 0 36-10-12-10-24 0-36Z'/><path d='M45 48c12 8 18 18 18 30M45 48c-12 8-18 18-18 30'/><path d='M0 45h18M72 45h18'/><path d='M18 30c8 6 12 12 12 20s-4 14-12 20'/><path d='M72 30c-8 6-12 12-12 20s4 14 12 20'/></g></svg>`,
  },
  jali: {
    size: "72px 72px",
    svg: `<svg xmlns='http://www.w3.org/2000/svg' width='72' height='72' viewBox='0 0 72 72'><g fill='none' stroke='%COLOR%' stroke-width='1'><path d='M36 0l36 36-36 36L0 36 36 0Z'/><path d='M36 14l22 22-22 22-22-22 22-22Z'/><circle cx='36' cy='36' r='6'/></g></svg>`,
  },
  lotus: {
    size: "110px 110px",
    svg: `<svg xmlns='http://www.w3.org/2000/svg' width='110' height='110' viewBox='0 0 110 110'><g fill='none' stroke='%COLOR%' stroke-width='1'><path d='M55 82c-8-10-12-20-12-30 0-9 4-18 12-26 8 8 12 17 12 26 0 10-4 20-12 30Z'/><path d='M55 82c-12-4-21-11-26-22 8-2 16 0 22 6'/><path d='M55 82c12-4 21-11 26-22-8-2-16 0-22 6'/><path d='M0 26c10 8 16 18 18 30M110 26c-10 8-16 18-18 30'/></g></svg>`,
  },
};

export function PatternBackground({
  motif = "floral",
  color = "gold",
  opacity = 0.09,
  className,
}: {
  motif?: Motif;
  color?: "gold" | "ivory" | "oxblood";
  opacity?: number;
  className?: string;
}) {
  const stroke =
    color === "ivory" ? "%23F5EEDB" : color === "oxblood" ? "%234A171B" : "%23B08A45";
  const { svg, size } = patterns[motif];
  const url = `url("data:image/svg+xml,${svg.replace(/%COLOR%/g, stroke).replace(/#/g, "%23")}")`;

  return (
    <div
      aria-hidden="true"
      className={cn("pointer-events-none absolute inset-0", className)}
      style={{ backgroundImage: url, backgroundSize: size, opacity }}
    />
  );
}
