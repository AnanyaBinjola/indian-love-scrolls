import { createFileRoute } from "@tanstack/react-router";
import { PageHeader } from "@/components/heritage/PageHeader";
import { StoryGrid } from "@/components/heritage/StoryGrid";
import { PatternBackground } from "@/components/heritage/PatternBackground";

export const Route = createFileRoute("/stories/")({
  head: () => ({
    meta: [
      { title: "All Stories - Historical Stories of Love" },
      {
        name: "description",
        content:
          "Eight love stories from across Indian history and legend - Agra to Assam to Tamil Nadu - each with a truth rating.",
      },
      { property: "og:title", content: "All Stories - Historical Stories of Love" },
      {
        property: "og:description",
        content: "Eight love stories from across Indian history and legend, each with a truth rating.",
      },
    ],
  }),
  component: StoriesPage,
});

function StoriesPage() {
  return (
    <>
      <PageHeader
        eyebrow="The Collection"
        title="Eight Stories, Eight Ways to Love"
        intro="Political partnership, quiet sacrifice, devotion to the divine, defiance of family and caste - and the blurry space where legend and memory become impossible to separate."
        motif="damask"
      />
      <section className="relative bg-parchment paper-grain">
        <PatternBackground motif="floral" opacity={0.04} />
        <div className="relative mx-auto max-w-7xl px-6 py-16 lg:py-24">
          <StoryGrid />
        </div>
      </section>
    </>
  );
}
