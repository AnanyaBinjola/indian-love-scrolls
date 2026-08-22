import { createFileRoute } from "@tanstack/react-router";
import { PageHeader } from "@/components/heritage/PageHeader";
import { TruthLegend } from "@/components/heritage/TruthLegend";
import { PatternBackground } from "@/components/heritage/PatternBackground";
import { OrnamentalDivider } from "@/components/heritage/Ornaments";
import { SectionHeading } from "@/components/heritage/SectionHeading";

export const Route = createFileRoute("/fact-legend")({
  head: () => ({
    meta: [
      { title: "Fact & Legend - Historical Stories of Love" },
      {
        name: "description",
        content:
          "Every story here comes with a truth rating: documented history, historical core with folk detail, or literary legend.",
      },
      { property: "og:title", content: "Fact & Legend - Historical Stories of Love" },
      {
        property: "og:description",
        content: "How each of the eight stories is rated between documented history and legend.",
      },
    ],
  }),
  component: FactLegendPage,
});

function FactLegendPage() {
  return (
    <>
      <PageHeader
        eyebrow="How We Fact-Checked This"
        title="Every Story Here Comes With a Truth Rating"
        intro="Before you dive in, here's what you'll see on every page."
        motif="madhubani"
      />

      <section className="relative bg-parchment paper-grain">
        <PatternBackground motif="floral" opacity={0.04} />
        <div className="relative mx-auto max-w-6xl px-6 py-16 lg:py-24">
          <TruthLegend />

          <OrnamentalDivider className="my-16" />

          <div className="mx-auto max-w-3xl">
            <SectionHeading
              align="left"
              eyebrow="A note on evidence"
              title="Where the ratings come from"
            />
            <p className="mt-6 text-[1.1rem] leading-[1.85] text-charcoal/85">
              A rating describes the evidence, not the worth of the story. A ballad sung for four
              hundred years tells us something real about the people who kept singing it, even
              where no chronicle confirms a single name in it.
            </p>
            <p className="mt-5 text-[1.1rem] leading-[1.85] text-charcoal/85">
              Where a claim is disputed among historians, the dispute is shown rather than
              resolved. Detailed source notes for each story will appear on its page.
            </p>
          </div>
        </div>
      </section>
    </>
  );
}
