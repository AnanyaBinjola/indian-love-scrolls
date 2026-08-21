import { Link } from "@tanstack/react-router";
import { stories, truthRatings, type Story } from "@/data/stories";
import { PatternBackground } from "./PatternBackground";
import { DecorativeBorder, OrnamentalDivider, LotusMark, VineDivider } from "./Ornaments";
import { TruthBadge } from "./TruthBadge";
import { AnnotationNote } from "./AnnotationNote";
import { Timeline, type TimelineItem } from "./Timeline";
import { StoryMap } from "./StoryMap";
import { SectionHeading } from "./SectionHeading";
import { cn } from "@/lib/utils";

const parseMarkdown = (text: string) => {
  return text
    // Replace double asterisks with bold tag
    .replace(/\*\*(.*?)\*\*/g, "<strong class='font-semibold text-oxblood'>$1</strong>")
    // Replace single asterisks with italic tag
    .replace(/\*(.*?)\*/g, "<em class='italic text-charcoal/90'>$1</em>");
};

const placeholderTimeline = (story: Story): TimelineItem[] => [
  { year: "[Year]", label: "Opening event", note: "Placeholder — to be sourced." },
  { year: "[Year]", label: "The meeting", note: "Placeholder — to be sourced." },
  { year: "[Year]", label: "The turning point" },
  { year: "[Year]", label: `Legacy of ${story.title.replace(/^The /, "")}` },
];

export function StoryTemplate({ story }: { story: Story }) {
  const index = stories.findIndex((s) => s.slug === story.slug);
  const prev = stories[(index - 1 + stories.length) % stories.length]!;
  const next = stories[(index + 1) % stories.length]!;

  return (
    <article>
      {/* ---------- Story hero ---------- */}
      <header className="relative overflow-hidden bg-oxblood text-parchment py-14 sm:py-20 ink-grain">
        <PatternBackground motif={story.motif} color="ivory" opacity={0.18} />
        <div className="relative mx-auto max-w-5xl px-6 text-center select-none">
          <p className="eyebrow text-sand/75 tracking-[0.25em] animate-royal-stagger-1">
            Chapter {story.number} · {story.era}
          </p>
          <h1 className="mx-auto mt-4 max-w-3xl text-balance text-4xl leading-tight text-parchment font-display sm:text-6xl text-shadow-heritage animate-royal-stagger-2">
            {story.title}
          </h1>
          <p className="mt-4 font-display text-base tracking-[0.2em] text-sand/90 animate-royal-stagger-3">
            {story.figures}
          </p>
          <div className="mt-5 flex flex-wrap items-center justify-center gap-3 animate-royal-stagger-3">
            <span className="meta-label text-sand/70">{story.region}</span>
            <TruthBadge truth={story.truth} full tone="dark" />
          </div>

          {/* Arched palace window framing (matching Image 3) with Stagger 4 */}
          <div className="relative mx-auto mt-12 max-w-sm overflow-hidden border-t-[3px] border-x-[3px] border-gold/45 shadow-2xl rounded-t-[180px] animate-royal-stagger-4">
            <div className="relative aspect-[3/4] w-full bg-walnut">
              <img
                src={story.image}
                alt={story.title}
                className="absolute inset-0 h-full w-full object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-oxblood/85 via-transparent to-transparent" />
            </div>
          </div>
        </div>
      </header>

      <div className="animate-content-reveal">
        {/* ---------- Read this first ---------- */}
      <section className="relative border-y border-gold/40 bg-sand/60 paper-grain">
        <div className="relative mx-auto max-w-5xl px-6 py-8">
          <div className="flex flex-col gap-4 md:flex-row md:items-start md:gap-8">
            <span className="flex items-center gap-2 meta-label whitespace-nowrap text-terracotta mt-1">
              <LotusMark className="text-gold" /> Read this first
            </span>
            <div className="space-y-4 text-[1.15rem] leading-relaxed text-charcoal/85">
              {story.details ? (
                story.details.readThisFirst.map((p, i) => (
                  <p key={i} dangerouslySetInnerHTML={{ __html: parseMarkdown(p) }} />
                ))
              ) : (
                <p>
                  This story is rated <strong className="font-normal text-oxblood">
                    {truthRatings[story.truth].label}
                  </strong>
                  . Placeholder note — a short summary of what is documented and what was added by
                  later storytellers will appear here.
                </p>
              )}
            </div>
          </div>
        </div>
      </section>

      {/* ---------- Narrative + annotation sidebar ---------- */}
      <section className="relative bg-parchment paper-grain">
        <PatternBackground motif="floral" opacity={0.20} />
        <div className="relative mx-auto grid max-w-6xl gap-12 px-6 py-16 lg:grid-cols-[minmax(0,7fr)_minmax(0,3fr)] lg:gap-16 lg:py-24">
          <div className="max-w-[68ch]">
            {story.details ? (
              story.details.narrative.map((item, idx) => {
                const isFirstParagraph =
                  item.type === "paragraph" &&
                  story.details!.narrative.findIndex((n) => n.type === "paragraph") === idx;

                if (item.type === "heading") {
                  return (
                    <h2 key={idx} className={cn("text-2xl text-oxblood font-display mt-10 mb-5", idx > 0 && "mt-12")}>
                      {item.text}
                    </h2>
                  );
                } else if (item.type === "blockquote") {
                  return (
                    <blockquote
                      key={idx}
                      className="my-10 border-l-2 border-gold/70 pl-6 font-display text-xl italic leading-relaxed text-oxblood"
                      dangerouslySetInnerHTML={{ __html: `“${parseMarkdown(item.text)}”` }}
                    />
                  );
                } else if (item.type === "divider") {
                  return (
                    <VineDivider key={idx} className="my-10" />
                  );
                } else {
                  return (
                    <p
                      key={idx}
                      className={cn(
                        "text-[1.25rem] leading-[1.9] text-charcoal/90 mt-5",
                        isFirstParagraph && "drop-cap text-[1.28rem]"
                      )}
                      dangerouslySetInnerHTML={{ __html: parseMarkdown(item.text) }}
                    />
                  );
                }
              })
            ) : (
              <>
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
                <VineDivider className="my-10" />
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
              </>
            )}

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
        <PatternBackground motif="madhubani" opacity={0.18} />
        <div className="relative mx-auto max-w-5xl px-6 py-16 lg:py-20">
          <SectionHeading
            eyebrow="Chronology"
            title={story.truth === "documented" ? "Timeline" : "Story Beats"}
            intro={story.truth !== "documented" ? "Because this story relies on literary, oral or traditional chronology, this page uses Story Structure / beats instead of a dated historical timeline." : undefined}
          />
          <div className="mt-12">
            <Timeline items={story.details?.timeline || placeholderTimeline(story)} />
          </div>
        </div>
      </section>

      {/* ---------- Map ---------- */}
      <section className="relative bg-parchment paper-grain">
        <div className="relative mx-auto max-w-5xl px-6 py-16 lg:py-20">
          <SectionHeading eyebrow="Where it happened" title={story.details?.whereItHappened?.title || story.mapPin.place} />
          <StoryMap
            className="mt-10"
            place={story.details?.whereItHappened?.subtitle || story.region}
            context={story.details?.whereItHappened?.context || "Placeholder context about this location and what remains there today."}
          />
          {story.details?.whereItHappened?.otherPlaces && (
            <div className="mx-auto mt-10 max-w-2xl border-t border-gold/30 pt-8">
              <h4 className="font-display text-lg text-oxblood mb-4">Other Places in this Story</h4>
              <div className="grid gap-6 sm:grid-cols-2">
                {story.details.whereItHappened.otherPlaces.map((place, idx) => (
                  <div key={idx} className="border-l border-gold/45 pl-4">
                    <h5 className="font-display font-semibold text-oxblood text-[0.98rem]">{place.name}</h5>
                    <p className="mt-1 text-[0.95rem] leading-relaxed text-charcoal/75">{place.description}</p>
                  </div>
                ))}
              </div>
            </div>
          )}
        </div>
      </section>

      {/* ---------- Legacy ---------- */}
      <section className="relative border-y border-gold/40 bg-forest/5 paper-grain">
        <PatternBackground motif="paisley" opacity={0.18} />
        <div className="relative mx-auto max-w-3xl px-6 py-16 text-center lg:py-20">
          <SectionHeading eyebrow="Legacy today" title={story.details?.legacy?.title || "What survives"} />
          <div className="mt-6 space-y-4 text-[1.2rem] leading-[1.8] text-charcoal/85">
            {story.details ? (
              story.details.legacy.paragraphs.map((p, idx) => (
                <p key={idx} dangerouslySetInnerHTML={{ __html: parseMarkdown(p) }} />
              ))
            ) : (
              <p>
                Placeholder — monuments, songs, festivals, films and scholarship connected to this story will be summarised here.
              </p>
            )}
          </div>
        </div>
      </section>

      {/* ---------- Sources ---------- */}
      <section className="relative bg-parchment paper-grain">
        <div className="relative mx-auto max-w-3xl px-6 py-16 lg:py-20">
          <SectionHeading eyebrow="Bibliography" title="Sources" align="left" />
          <ul className="mt-8 space-y-4 border-t border-gold/30 pt-6 text-[1.1rem] text-charcoal/75">
            {story.details ? (
              story.details.sources.map((src, idx) => (
                <li key={idx} className="border-b border-gold/20 pb-4 last:border-b-0">
                  <p dangerouslySetInnerHTML={{ __html: parseMarkdown(src) }} />
                </li>
              ))
            ) : (
              [1, 2, 3].map((i) => (
                <li key={i} className="border-b border-gold/20 pb-4">
                  [Source {i} placeholder — citation to be added. No sources have been fabricated.]
                </li>
              ))
            )}
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
      </div>
    </article>
  );
}

function Annotations({ story }: { story: Story }) {
  if (story.details?.annotations) {
    return (
      <>
        {story.details.annotations.map((ann, idx) => (
          <AnnotationNote
            key={idx}
            kind={ann.kind}
            label={ann.label}
            title={ann.title}
          >
            {ann.body}
          </AnnotationNote>
        ))}
      </>
    );
  }
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
