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
    <footer className="relative overflow-hidden bg-walnut text-parchment ink-grain">
      <PatternBackground motif="damask" color="ivory" opacity={0.12} />
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

        <div className="mt-10 max-w-xl mx-auto border-t border-gold/25 pt-6 text-center text-parchment/70">
          <p className="font-display text-sm tracking-widest text-gold/90">
            A project by B.Tech CSE V Sem, Section-A, Group-4:
          </p>
          <ul className="mt-4 grid grid-cols-1 gap-2 text-xs sm:grid-cols-2 text-left max-w-md mx-auto meta-label text-sand/80 pl-4 sm:pl-8">
            <li>Roll No. 14: Aishwarya Pathak</li>
            <li>Roll No. 15: Aishwarya Saksena</li>
            <li>Roll No. 16: Akanksha Yadav</li>
            <li>Roll No. 24: Ananya Binjola</li>
            <li>Roll No. 44: Arpita Parul</li>
            <li>Roll No. 46: Arya Rai</li>
            <li>Roll No. 53: Bhumi Agarwal</li>
          </ul>
        </div>
      </div>
    </footer>
  );
}
