import { Link } from "@tanstack/react-router";
import { OrnamentalDivider } from "./Ornaments";
import { PatternBackground } from "./PatternBackground";

const links = [
  { to: "/", label: "Home" },
  { to: "/stories", label: "All Stories" },
  { to: "/about", label: "About This Project" },
  { to: "/sources", label: "Sources & Further Reading" },
] as const;

export function Footer() {
  return (
    <footer className="relative overflow-hidden bg-indigo text-parchment ink-grain">
      <PatternBackground motif="damask" color="ivory" opacity={0.06} />
      <div className="relative mx-auto max-w-5xl px-6 py-14 text-center">
        {/* Sub-navigation links directly at the start of footer */}
        <nav className="flex flex-wrap items-center justify-center gap-x-8 gap-y-3">
          {links.map((l) => (
            <Link
              key={l.to}
              to={l.to}
              className="meta-label text-sand/80 transition-colors hover:text-gold"
            >
              {l.label}
            </Link>
          ))}
        </nav>

        <OrnamentalDivider tone="light" className="my-8 opacity-60" />

        <p className="mx-auto max-w-2xl text-balance font-display text-lg leading-relaxed text-sand/90">
          History remembers the monuments. Legend remembers the people.
        </p>

        <p className="mx-auto mt-6 max-w-3xl text-sm leading-relaxed text-parchment/65">
          Historical details on this site have been cross-checked against academic and archival
          sources where available. Where a story is folklore or literary legend rather than
          documented history, this is clearly marked on its page.
        </p>

        <p className="mt-8 meta-label text-sand/45">
          A project by [Your Group / Class Name] · [Year]
        </p>
      </div>
    </footer>
  );
}
