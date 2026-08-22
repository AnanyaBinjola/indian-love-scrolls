import { cn } from "@/lib/utils";

export type Motif = "damask" | "floral" | "paisley" | "madhubani" | "jali" | "lotus";

const patterns: Record<Motif, { svg: string; size: string }> = {
  damask: {
    size: "140px 140px",
    svg: `<svg xmlns='http://www.w3.org/2000/svg' width='140' height='140' viewBox='0 0 140 140'><g fill='none' stroke='%COLOR%' stroke-width='0.85' stroke-linecap='round' stroke-linejoin='round'><path d='M70 15c6 8 10 18 10 28s-4 18-10 28c-6-10-10-18-10-28s4-20 10-28Z'/><path d='M70 71c12 5 20 12 22 22-10 2-18-1-24-8'/><path d='M70 71c-12 5-20 12-22 22 10 2 18-1 24-8'/><circle cx='70' cy='43' r='3.5'/><path d='M10 70c8-6 16-6 24 0-8 6-16 6-24 0Z'/><path d='M130 70c-8-6-16-6-24 0 8 6 16 6 24 0Z'/><path d='M0 10c8 5 12 12 14 20'/><path d='M140 10c-8 5-12 12-14 20'/><path d='M0 130c8-5 12-12 14-20'/><path d='M140 130c-8-5-12-12-14-20'/><path d='M70 43c12-15 24-10 32-2M70 43c-12-15-24-10-32-2'/><path d='M70 98c0 14-8 22-18 24M70 98c0 14 8 22 18 24'/></g></svg>`,
  },
  floral: {
    size: "160px 160px",
    svg: `<svg xmlns='http://www.w3.org/2000/svg' width='160' height='160' viewBox='0 0 160 160'><g fill='none' stroke='%COLOR%' stroke-width='0.8' stroke-linecap='round' stroke-linejoin='round'><path d='M15 145C45 115 45 75 80 65s35-40 65-50'/><path d='M80 65c-14 4-22 14-22 26 12 2 22-6 26-18'/><path d='M45 105c-12 2-20 10-22 22 12 2 22-6 26-18'/><circle cx='109' cy='39' r='5'/><path d='M109 27v-6M109 51v-6M97 39h-6M121 39h-6'/><path d='M145 145c-20-6-32-18-38-36'/><path d='M30 60c10-5 18 2 22 10'/><path d='M120 110c-5-10-15-12-22-8'/></g></svg>`,
  },
  paisley: {
    size: "180px 180px",
    svg: `<svg xmlns='http://www.w3.org/2000/svg' width='180' height='180' viewBox='0 0 180 180'><g fill='none' stroke='%COLOR%' stroke-width='0.8' stroke-linecap='round' stroke-linejoin='round'><path d='M35 155c-16 0-27-11-27-28 0-24 16-45 38-54-9 13-13 23-10 31 3 10 25 7 25 25 0 15-12 26-26 26Z'/><path d='M35 142c-7 0-13-5-13-12 0-9 9-15 17-12'/><path d='M125 65c-16 0-27-11-27-28 0-24 16-45 38-54-9 13-13 23-10 31 3 10 25 7 25 25 0 15-12 26-26 26Z'/><path d='M125 52c-7 0-13-5-13-12 0-9 9-15 17-12'/><path d='M115 135c16 0 27 11 27 28 0 24-16 45-38 54 9-13 13-23 10-31-3-10-25-7-25-25 0-15 12-26 26-26Z'/><path d='M115 148c7 0 13 5 13 12 0 9-9 15-17 11'/><path d='M25 45c16 0 27 11 27 28 0 24-16 45-38 54 9-13 13-23 10-31-3-10-25-7-25-25 0-15 12-26 26-26Z'/><path d='M25 58c7 0 13 5 13 12 0 9-9 15-17 11'/><path d='M10 10c25 0 45 25 55 25s25-25 45-25 45 25 55 25 25-25 45-25' opacity='0.4'/><path d='M10 100c25 0 45 25 55 25s25-25 45-25 45 25 55 25 25-25 45-25' opacity='0.4'/></g></svg>`,
  },
  madhubani: {
    size: "160px 160px",
    svg: `<svg xmlns='http://www.w3.org/2000/svg' width='160' height='160' viewBox='0 0 160 160'><g fill='none' stroke='%COLOR%' stroke-width='0.85' stroke-linecap='round' stroke-linejoin='round'><circle cx='80' cy='80' r='36'/><circle cx='80' cy='80' r='25'/><circle cx='80' cy='80' r='14'/><path d='M80 40v8M80 112v8M40 80h8M112 80h8'/><path d='M52 52l6 6M108 108l6 6M52 108l6-6M108 52l6-6'/><path d='M80 80 m-19 0 a 19 19 0 1 0 38 0 a 19 19 0 1 0 -38 0' stroke-dasharray='3 3'/><path d='M0 80 Q 40 40, 80 80 T 160 80' stroke-dasharray='3 3' opacity='0.6'/><path d='M80 0 Q 40 40, 80 80 T 80 160' stroke-dasharray='3 3' opacity='0.6'/><circle cx='80' cy='80' r='4' fill='%COLOR%'/><circle cx='0' cy='0' r='6'/><circle cx='160' cy='0' r='6'/><circle cx='0' cy='160' r='6'/><circle cx='160' cy='160' r='6'/></g></svg>`,
  },
  jali: {
    size: "80px 80px",
    svg: `<svg xmlns='http://www.w3.org/2000/svg' width='80' height='80' viewBox='0 0 80 80'><g fill='none' stroke='%COLOR%' stroke-width='0.8'><path d='M40 0l40 40-40 40L0 40 40 0Z'/><path d='M40 12l28 28-28 28-28-28 28-28Z' stroke-dasharray='2 2'/><circle cx='40' cy='40' r='5'/><circle cx='0' cy='0' r='2'/><circle cx='80' cy='0' r='2'/><circle cx='0' cy='80' r='2'/><circle cx='80' cy='80' r='2'/></g></svg>`,
  },
  lotus: {
    size: "140px 140px",
    svg: `<svg xmlns='http://www.w3.org/2000/svg' width='140' height='140' viewBox='0 0 140 140'><g fill='none' stroke='%COLOR%' stroke-width='0.85' stroke-linecap='round' stroke-linejoin='round'><path d='M70 102c-10-12-15-25-15-38 0-11 5-22 15-32 10 10 15 21 15 32 0 13-5 26-15 38Z'/><path d='M70 102c-15-5-26-14-32-28 10-2 20 0 28 8'/><path d='M70 102c15-5 26-14 32-28-10-2-20 0-28 8'/><path d='M70 102c-20-1-36-7-44-18 12-1 22 2 30 10'/><path d='M70 102c20-1 36-7 44-18-12-1-22 2-30 10'/><circle cx='70' cy='64' r='3'/><path d='M0 35c12 10 20 22 22 38M140 35c-12 10-20 22-22 38' opacity='0.5'/></g></svg>`,
  },
};

export function PatternBackground({
  motif = "floral",
  color = "gold",
  opacity = 0.18,
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
