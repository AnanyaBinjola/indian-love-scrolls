import { Link } from "@tanstack/react-router";
import { cn } from "@/lib/utils";
import type { Story } from "@/data/stories";
import { TruthBadge } from "./TruthBadge";
import { CornerFlourishes, PaisleyMark } from "./Ornaments";
import { PatternBackground } from "./PatternBackground";

export function StoryCard({ story, className }: { story: Story; className?: string }) {
  return (
    <Link
      to="/stories/$slug"
      params={{ slug: story.slug }}
      className={cn(
        "group relative flex flex-col overflow-hidden border border-gold/45 bg-card paper-grain rounded-none",
        "transition-[transform,box-shadow,border-color] duration-500 ease-out",
        "hover:-translate-y-1 hover:border-gold/80 hover:shadow-[var(--shadow-raised)]",
        className,
      )}
      style={{ boxShadow: "var(--shadow-manuscript)" }}
    >
      {/* Story Image */}
      <div className="relative aspect-[4/3] overflow-hidden border-b border-gold/40 bg-oxblood/90">
        <img
          src={story.image}
          alt={story.title}
          className="h-full w-full object-cover transition-transform duration-700 ease-out group-hover:scale-[1.04]"
        />
        <span className="absolute left-4 top-3 font-display text-sm tracking-[0.3em] text-parchment text-shadow-heritage">
          {story.number}
        </span>
        <div className="absolute inset-0 bg-gradient-to-t from-oxblood/80 via-transparent to-transparent" />
      </div>

      <div className="relative flex flex-1 flex-col gap-3 p-6">
        <CornerFlourishes className="opacity-0 transition-opacity duration-500 group-hover:opacity-100" />
        <TruthBadge truth={story.truth} className="self-start" />
        <h3 className="text-2xl leading-tight text-oxblood">{story.title}</h3>
        <p className="meta-label text-charcoal/60">
          {story.figures} · {story.region}
        </p>
        <p className="text-[1.05rem] italic leading-relaxed text-charcoal/85">“{story.hook}”</p>
        <div className="mt-auto flex items-center justify-between pt-4">
          <span className="meta-label text-terracotta transition-transform duration-500 group-hover:translate-x-1">
            Read the story →
          </span>
          <PaisleyMark className="text-gold/70" />
        </div>
      </div>
    </Link>
  );
}
