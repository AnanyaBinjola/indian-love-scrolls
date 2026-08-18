import { Link } from "@tanstack/react-router";
import { stories, truthRatings, type Story } from "@/data/stories";
import { PatternBackground } from "./PatternBackground";
import { DecorativeBorder, OrnamentalDivider, LotusMark } from "./Ornaments";
import { TruthBadge } from "./TruthBadge";
import { AnnotationNote } from "./AnnotationNote";
import { Timeline, type TimelineItem } from "./Timeline";
import { StoryMap } from "./StoryMap";
import { SectionHeading } from "./SectionHeading";

const placeholderTimeline = (story: Story): TimelineItem[] => [
  { year: "[Year]", label: "Opening event", note: "Placeholder — to be sourced." },
  { year: "[Year]", label: "The meeting", note: "Placeholder — to be sourced." },
  { year: "[Year]", label: "The turning point" },
  { year: "[Year]", label: `Legacy of ${story.title.replace(/^The /, "")}` },
];

export function StoryTemplate({ story }: { story: Story }) {
  const index = stories.findIndex((s) => s.slug === story.slug);
  const prev = stories[(index - 1 + stories.length) % stories.length];
  const next = stories[(index + 1) % stories.length];

  return (
    <article>
      {/* ---------- Story hero ---------- */}
      <header className="relative overflow-hidden bg-oxblood text-parchment ink-grain">
        <PatternBackground motif={story.motif} color="ivory" opacity={0.08} />
        <div className="relative mx-auto max-w-6xl px-5 sm:px-8">
          <div className="relative aspect-[16/10] w-full sm:aspect-[21/9]">
            <DecorativeBorder />
            <div className="absolute inset-0 flex items-center justify-center">
              <span className="meta-label text-sand/45">
                Historical image placeholder · 21:9
              </span>
            </div>
            <div className="absolute inset-0 bg-gradient-to-t from-oxblood via-oxblood/40 to-transparent" />
            <div className="absolute inset-x-0 bottom-0 px-6 pb-8 text-center sm:px-16 sm:pb-12">
              <p className="eyebrow text-sand/70">
                Story {story.number} · {story.era}
              </p>
              <h1 className="mx-auto mt-4 max-w-3xl text-balance text-3xl leading-tight text-parchment sm:text-5xl">
                {story.title}
              </h1>
              <p className="mt-4 font-display text-sm tracking-[0.2em] text-sand/85">
                {story.figures}
              </p>
              <div className="mt-5 flex flex-wrap items-center justify-center gap-3">
                <span className="meta-label text-sand/60">{story.region}</span>
                <TruthBadge truth={story.truth} full tone="dark" />
              </div>
            </div>
          </div>
        </div>
      </header>

      {/* ---------- Read this first ---------- */}
      <section className="relative border-y border-gold/40 bg-sand/60 paper-grain">
        <div className="relative mx-auto max-w-5xl px-6 py-7">
          <div className="flex flex-col gap-3 sm:flex-row sm:items-center sm:gap-6">
            <span className="flex items-center gap-2 meta-label whitespace-nowrap text-terracotta">
              <LotusMark className="text-gold" /> Read this first
            </span>
            <p className="text-[1.02rem] leading-relaxed text-charcoal/80">
              This story is rated <strong className="font-normal text-oxblood">
                {truthRatings[story.truth].label}
              </strong>
              . Placeholder note — a short summary of what is documented and what was added by
              later storytellers will appear here.
            </p>
          </div>
        </div>
      </section>

      {/* ---------- Narrative + annotation sidebar ---------- */}
      <section className="relative bg-parchment paper-grain">
        <PatternBackground motif="floral" opacity={0.045} />
        <div className="relative mx-auto grid max-w-6xl gap-12 px-6 py-16 lg:grid-cols-[minmax(0,7fr)_minmax(0,3fr)] lg:gap-16 lg:py-24">
          <div className="max-w-[68ch]">
            <p className="drop-cap text-[1.18rem] leading-[1.9] text-charcoal/90">
              Placeholder narrative. This is where the researched account of {story.title} will be
              written, in the same typographic voice used across all eight chapters — long-form
              serif text, generous line-height and wide margins, designed to be read slowly.
            </p>
            <p className="mt-6 text-[1.18rem] leading-[1.9] text-charcoal/90">
              Further placeholder paragraphs sit here. No historical claims have been written yet;
              the final text will cite archival and academic sources, and any detail that comes
              from folklore rather than record will be marked in the margin alongside it.
            </p>

            <OrnamentalDivider className="my-10" motif="diamond" />

            <h2 className="text-2xl text-oxblood">A section heading</h2>
            <p className="mt-4 text-[1.18rem] leading-[1.9] text-charcoal/90">
              Placeholder body copy for the second movement of the story. Sub-sections use the same
              rhythm: heading, body, occasional pull-quote, gold divider.
            </p>

            <blockquote className="my-10 border-l-2 border-gold/70 pl-6 font-display text-xl italic leading-relaxed text-oxblood">
              “{story.hook}”
            </blockquote>

            <p className="text-[1.18rem] leading-[1.9] text-charcoal/90">
              Closing placeholder paragraph. The narrative ends by handing the reader to the
              timeline, the location and the legacy sections below.
            </p>

            {/* Mobile annotations follow the narrative */}
            <div className="mt-10 space-y-6 lg:hidden">
              <Annotations story={story} />
            </div>
          </div>

          <aside className="hidden lg:block">
            <div className="sticky top-28 space-y-7 border-l border-gold/30 pl-6">
              <p className="meta-label text-charcoal/50">Margin notes</p>
              <Annotations story={story} />
            </div>
          </aside>
        </div>
      </section>

      {/* ---------- Timeline ---------- */}
      <section className="relative border-t border-gold/40 bg-card paper-grain">
        <PatternBackground motif="madhubani" opacity={0.04} />
        <div className="relative mx-auto max-w-5xl px-6 py-16 lg:py-20">
          <SectionHeading eyebrow="Chronology" title="Timeline" />
          <div className="mt-12">
            <Timeline items={placeholderTimeline(story)} />
          </div>
        </div>
      </section>

      {/* ---------- Map ---------- */}
      <section className="relative bg-parchment paper-grain">
        <div className="relative mx-auto max-w-5xl px-6 py-16 lg:py-20">
          <SectionHeading eyebrow="Where it happened" title={story.mapPin.place} />
          <StoryMap
            className="mt-10"
            place={story.region}
            context="Placeholder context about this location and what remains there today."
          />
        </div>
      </section>

      {/* ---------- Legacy ---------- */}
      <section className="relative border-y border-gold/40 bg-forest/10 paper-grain">
        <PatternBackground motif="paisley" opacity={0.05} />
        <div className="relative mx-auto max-w-3xl px-6 py-16 text-center lg:py-20">
          <SectionHeading
            eyebrow="Legacy today"
            title="What survives"
            intro="Placeholder — monuments, songs, festivals, films and scholarship connected to this story will be summarised here."
          />
        </div>
      </section>

      {/* ---------- Sources ---------- */}
      <section className="relative bg-parchment paper-grain">
        <div className="relative mx-auto max-w-3xl px-6 py-16 lg:py-20">
          <SectionHeading eyebrow="Bibliography" title="Sources" align="left" />
          <ul className="mt-8 space-y-4 border-t border-gold/30 pt-6 text-[1.02rem] text-charcoal/75">
            {[1, 2, 3].map((i) => (
              <li key={i} className="border-b border-gold/20 pb-4">
                [Source {i} placeholder — citation to be added. No sources have been fabricated.]
              </li>
            ))}
          </ul>
        </div>
      </section>

      {/* ---------- Prev / Next ---------- */}
      <nav className="relative border-t border-gold/40 bg-card paper-grain">
        <div className="relative mx-auto grid max-w-6xl gap-px px-6 py-10 sm:grid-cols-2">
          <Link
            to="/stories/$slug"
            params={{ slug: prev.slug }}
            className="group border border-gold/30 p-6 transition-colors hover:border-gold/70"
          >
            <p className="meta-label text-terracotta">← Previous story</p>
            <p className="mt-2 font-display text-lg text-oxblood">{prev.title}</p>
            <p className="mt-1 meta-label text-charcoal/55">{prev.figures}</p>
          </Link>
          <Link
            to="/stories/$slug"
            params={{ slug: next.slug }}
            className="group border border-gold/30 p-6 text-right transition-colors hover:border-gold/70"
          >
            <p className="meta-label text-terracotta">Next story →</p>
            <p className="mt-2 font-display text-lg text-oxblood">{next.title}</p>
            <p className="mt-1 meta-label text-charcoal/55">{next.figures}</p>
          </Link>
        </div>
      </nav>
    </article>
  );
}

function Annotations({ story }: { story: Story }) {
  return (
    <>
      <AnnotationNote kind="confirmed" title="Recorded in the chronicles">
        Placeholder margin note for documented evidence relating to {story.figures}.
      </AnnotationNote>
      <AnnotationNote kind="folk" title="Added by later storytellers">
        Placeholder margin note for romantic detail that entered the story later.
      </AnnotationNote>
      <AnnotationNote kind="legend" title="Without firm evidence">
        Placeholder margin note for literary or traditional accounts historians dispute.
      </AnnotationNote>
    </>
  );
}
