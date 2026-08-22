import { useState } from "react";
import { Link } from "@tanstack/react-router";
import { cn } from "@/lib/utils";
import { LotusMark, PaisleyMark } from "./Ornaments";
import { PatternBackground } from "./PatternBackground";

const links = [
  { to: "/", label: "Home" },
  { to: "/stories", label: "Stories" },
  { to: "/fact-legend", label: "Fact & Legend" },
  { to: "/about", label: "About" },
] as const;

export function Navbar() {
  const [open, setOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50 border-b border-gold/40 bg-walnut/90 text-parchment backdrop-blur-sm">
      <PatternBackground motif="jali" color="ivory" opacity={0.06} />
      <div className="relative mx-auto flex max-w-7xl items-center justify-between gap-6 px-5 py-3.5 sm:px-8">
        <Link to="/" className="group flex items-center gap-3" onClick={() => setOpen(false)}>
          <LotusMark className="text-gold" />
          <span className="leading-tight">
            <span className="block font-display text-[0.78rem] tracking-[0.16em] text-parchment sm:text-[0.9rem] sm:tracking-[0.20em]">
              HISTORICAL STORIES OF LOVE
            </span>
            <span className="block meta-label text-[0.6rem] text-sand/60">
              Eight Stories Across Indian History &amp; Legend
            </span>
          </span>
        </Link>

        <nav className="hidden items-center gap-8 md:flex">
          {links.map((l) => (
            <Link
              key={l.to}
              to={l.to}
              className="meta-label text-sand/75 transition-colors hover:text-gold"
              activeProps={{ className: "text-gold" }}
              activeOptions={{ exact: l.to === "/" }}
            >
              {l.label}
            </Link>
          ))}
          <PaisleyMark className="text-gold/60" />
        </nav>

        <button
          type="button"
          aria-label={open ? "Close menu" : "Open menu"}
          aria-expanded={open}
          onClick={() => setOpen((v) => !v)}
          className="flex h-9 w-9 flex-col items-center justify-center gap-[5px] border border-gold/50 md:hidden"
        >
          <span
            className={cn(
              "h-px w-4 bg-gold transition-transform",
              open && "translate-y-[6px] rotate-45",
            )}
          />
          <span className={cn("h-px w-4 bg-gold transition-opacity", open && "opacity-0")} />
          <span
            className={cn(
              "h-px w-4 bg-gold transition-transform",
              open && "-translate-y-[6px] -rotate-45",
            )}
          />
        </button>
      </div>

      <div className="gold-rule" />

      {open && (
        <nav className="relative border-t border-gold/30 bg-walnut px-5 py-4 md:hidden">
          <ul className="flex flex-col divide-y divide-gold/20">
            {links.map((l) => (
              <li key={l.to}>
                <Link
                  to={l.to}
                  onClick={() => setOpen(false)}
                  className="block py-3 meta-label text-sand/80"
                  activeProps={{ className: "text-gold" }}
                  activeOptions={{ exact: l.to === "/" }}
                >
                  {l.label}
                </Link>
              </li>
            ))}
          </ul>
        </nav>
      )}
    </header>
  );
}
