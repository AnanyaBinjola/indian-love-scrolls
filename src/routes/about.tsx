import { createFileRoute } from "@tanstack/react-router";
import { PageHeader } from "@/components/heritage/PageHeader";
import { SectionHeading } from "@/components/heritage/SectionHeading";
import { OrnamentalDivider } from "@/components/heritage/Ornaments";
import { PatternBackground } from "@/components/heritage/PatternBackground";

export const Route = createFileRoute("/about")({
  head: () => ({
    meta: [
      { title: "About This Project - Historical Stories of Love" },
      {
        name: "description",
        content:
          "How this Human Values project was researched: eight Indian love stories, each marked for how much is documented history and how much is legend.",
      },
      { property: "og:title", content: "About This Project - Historical Stories of Love" },
      {
        property: "og:description",
        content: "How eight Indian love stories were selected, researched and rated for accuracy.",
      },
    ],
  }),
  component: AboutPage,
});

function AboutPage() {
  return (
    <>
      <PageHeader
        eyebrow="About This Project"
        title="A Human Values project about how India remembers love"
        intro="Eight stories, traced from royal chronicles, epics and folk ballads - and honest about the distance between them."
        motif="jali"
        tone="oxblood"
      />

      <section className="relative bg-parchment paper-grain">
        <PatternBackground motif="lotus" opacity={0.045} />
        <div className="relative mx-auto max-w-3xl px-6 py-16 lg:py-24">
          <p className="drop-cap text-[1.18rem] leading-[1.9] text-charcoal/90">
            Not every love story that survives for centuries survives intact. Some are recorded in
            royal chronicles. Some were first written down two hundred years after they happened.
            Some are still argued about today.
          </p>
          <p className="mt-6 text-[1.18rem] leading-[1.9] text-charcoal/90">
            This project traces eight of India's most enduring love stories - from Agra to Assam to
            Tamil Nadu - and is honest about where each one sits between fact and legend.
          </p>

          <OrnamentalDivider className="my-12" />

          <SectionHeading align="left" eyebrow="Method" title="How we worked" />
          <ul className="mt-6 space-y-4 text-[1.08rem] leading-relaxed text-charcoal/85">
            <li>
              Each story is given a truth rating that appears on its card and at the top of its
              page.
            </li>
            <li>
              Where an account comes from folklore, a ballad or an epic rather than a record, that
              is stated rather than smoothed over.
            </li>
            <li>
              Citations are added only where a source has actually been consulted. Placeholder
              entries remain visible until then.
            </li>
          </ul>

          <OrnamentalDivider className="my-12" motif="paisley" />

          <div className="mt-10 border-t border-gold/20 pt-6">
            <p className="font-display text-sm tracking-widest text-oxblood/90 font-semibold mb-3">
              A project by B.Tech CSE V Sem, Section-A, Group-4:
            </p>
            <ul className="grid grid-cols-1 gap-2 text-xs sm:grid-cols-2 text-left max-w-md meta-label text-charcoal/75 pl-4">
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
      </section>
    </>
  );
}
