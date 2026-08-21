import { createFileRoute } from "@tanstack/react-router";
import { PageHeader } from "@/components/heritage/PageHeader";
import { PatternBackground } from "@/components/heritage/PatternBackground";
import { stories } from "@/data/stories";
import { TruthBadge } from "@/components/heritage/TruthBadge";

export const Route = createFileRoute("/sources")({
  head: () => ({
    meta: [
      { title: "Sources & Further Reading — Historical Stories of Love" },
      {
        name: "description",
        content:
          "Citations and further reading for the eight Indian love stories in this project. Placeholder entries remain until each source is consulted.",
      },
      { property: "og:title", content: "Sources & Further Reading — Historical Stories of Love" },
      {
        property: "og:description",
        content: "Citations and further reading for the eight stories in this project.",
      },
    ],
  }),
  component: SourcesPage,
});

function SourcesPage() {
  return (
    <>
      <PageHeader
        eyebrow="Bibliography"
        title="Sources & Further Reading"
        intro="No sources have been invented. Entries below stay marked as placeholders until the material has actually been consulted."
        motif="jali"
        tone="indigo"
      />

      <section className="relative bg-parchment paper-grain">
        <PatternBackground motif="paisley" opacity={0.04} />
        <div className="relative mx-auto max-w-3xl px-6 py-16 lg:py-24">
          <ol className="space-y-10">
            {stories.map((story) => (
              <li key={story.slug} className="border-b border-gold/30 pb-8">
                <div className="flex flex-wrap items-center gap-3">
                  <span className="font-display text-sm tracking-[0.25em] text-terracotta">
                    {story.number}
                  </span>
                  <h2 className="text-xl text-oxblood">{story.title}</h2>
                  <TruthBadge truth={story.truth} />
                </div>
                <ul className="mt-4 space-y-2 text-[1.02rem] text-charcoal/75">
                  <li>[Primary source placeholder]</li>
                  <li>[Academic source placeholder]</li>
                  <li>[Further reading placeholder]</li>
                </ul>
              </li>
            ))}
          </ol>
        </div>
      </section>
    </>
  );
}
