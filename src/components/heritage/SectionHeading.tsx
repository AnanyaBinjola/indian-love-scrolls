import type { ReactNode } from "react";
import { cn } from "@/lib/utils";
import { LotusMark } from "./Ornaments";

export function SectionHeading({
  eyebrow,
  title,
  intro,
  align = "center",
  tone = "light",
  className,
}: {
  eyebrow?: string;
  title: ReactNode;
  intro?: ReactNode;
  align?: "center" | "left";
  tone?: "light" | "dark";
  className?: string;
}) {
  return (
    <div
      className={cn(
        "max-w-3xl",
        align === "center" ? "mx-auto text-center" : "text-left",
        className,
      )}
    >
      {eyebrow && (
        <div
          className={cn(
            "flex items-center gap-3",
            align === "center" ? "justify-center" : "justify-start",
          )}
        >
          <LotusMark className={tone === "dark" ? "text-gold/80" : "text-gold"} />
          <span
            className={cn(
              "eyebrow",
              tone === "dark" ? "text-sand/75" : "text-terracotta",
            )}
          >
            {eyebrow}
          </span>
        </div>
      )}
      <h2
        className={cn(
          "mt-4 text-balance text-3xl leading-[1.2] sm:text-4xl",
          tone === "dark" ? "text-parchment" : "text-oxblood",
        )}
      >
        {title}
      </h2>
      {intro && (
        <p
          className={cn(
            "mt-5 text-lg leading-relaxed",
            tone === "dark" ? "text-parchment/80" : "text-charcoal/80",
          )}
        >
          {intro}
        </p>
      )}
    </div>
  );
}
