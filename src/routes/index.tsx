import { createFileRoute, Link } from "@tanstack/react-router";
import { PatternBackground } from "@/components/heritage/PatternBackground";
import {
  DecorativeBorder,
  LotusMark,
  OrnamentalDivider,
  PaisleyMark,
} from "@/components/heritage/Ornaments";
import { SectionHeading } from "@/components/heritage/SectionHeading";
import { TruthLegend } from "@/components/heritage/TruthLegend";
import { IndiaMap } from "@/components/heritage/IndiaMap";
import { StoryGrid } from "@/components/heritage/StoryGrid";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "Love, Remembered — Eight Indian Love Stories" },
      {
        name: "description",
        content:
          "Eight love stories across Indian history and legend, from Agra to Assam to Tamil Nadu — with the history hiding underneath each one.",
      },
      { property: "og:title", content: "Love, Remembered — Eight Indian Love Stories" },
      {
        property: "og:description",
        content:
          "Eight stories. Eight kinds of love. One India — and an honest account of what is history and what is legend.",
      },
    ],
  }),
  component: Home,
});

function Home() {
  return (
    <>
      {/* ---------- 1. HERO ---------- */}
      <section className="relative overflow-hidden bg-oxblood text-parchment ink-grain">
        <PatternBackground motif="damask" color="ivory" opacity={0.09} />
        <div className="relative mx-auto max-w-6xl px-6 py-24 sm:px-10 sm:py-32">
          <DecorativeBorder />
          <div className="relative mx-auto max-w-3xl text-center reveal">
            <div className="flex items-center justify-center gap-3">
              <LotusMark className="text-gold" />
              <p className="eyebrow text-sand/75">Across India · Across Centuries</p>
              <LotusMark className="text-gold" />
            </div>
            <h1 className="mt-7 text-balance text-4xl leading-[1.15] text-parchment sm:text-6xl">
              Eight Stories. Eight Kinds of Love. One India.
            </h1>
            <p className="mx-auto mt-7 max-w-2xl text-lg leading-relaxed text-parchment/80">
              From a Sultan who built a palace for a shepherdess to a princess who died without
              saying a word — these are the stories India has been telling itself for centuries,
              and the history hiding underneath them.
            </p>
            <div className="mt-10 flex flex-col items-center justify-center gap-4 sm:flex-row">
              <Link
                to="/stories"
                className="border border-gold/70 bg-gold/15 px-8 py-3.5 meta-label text-parchment transition-colors hover:bg-gold/30"
              >
                Explore the Stories
              </Link>
              <Link
                to="/fact-legend"
                className="border border-sand/35 px-8 py-3.5 meta-label text-sand/85 transition-colors hover:border-gold/70 hover:text-gold"
              >
                How We Fact-Checked This
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* ---------- 2. INTRO / MISSION ---------- */}
      <section className="relative bg-parchment paper-grain">
        <PatternBackground motif="lotus" opacity={0.05} />
        <div className="relative mx-auto max-w-3xl px-6 py-20 text-center lg:py-28">
          <p className="text-balance font-display text-2xl leading-[1.45] text-oxblood sm:text-3xl">
            Not every love story that survives for centuries survives intact.
          </p>
          <OrnamentalDivider className="my-10" />
          <p className="text-[1.12rem] leading-[1.9] text-charcoal/85">
            Some are recorded in royal chronicles. Some were first written down two hundred years
            after they happened. Some are still argued about today.
          </p>
          <p className="mt-6 text-[1.12rem] leading-[1.9] text-charcoal/85">
            This project traces eight of India's most enduring love stories — from Agra to Assam to
            Tamil Nadu — and is honest about where each one sits between fact and legend.
          </p>
        </div>
      </section>

      {/* ---------- 3. FACT VS LEGEND ---------- */}
      <section className="relative border-y border-gold/40 bg-sand/45 paper-grain">
        <PatternBackground motif="madhubani" opacity={0.05} />
        <div className="relative mx-auto max-w-6xl px-6 py-20 lg:py-24">
          <SectionHeading
            eyebrow="Fact & Legend"
            title="Every Story Here Comes With a Truth Rating"
            intro="Before you dive in, here's what you'll see on every page:"
          />
          <TruthLegend className="mt-14" />
        </div>
      </section>

      {/* ---------- 4. MAP ---------- */}
      <section className="relative bg-parchment paper-grain">
        <PatternBackground motif="floral" opacity={0.04} />
        <div className="relative mx-auto max-w-6xl px-6 py-20 lg:py-24">
          <SectionHeading
            eyebrow="Geography"
            title="A Map of India's Love Stories"
            intro="Click a pin to step into the story."
          />
          <div className="mt-14">
            <IndiaMap />
          </div>
        </div>
      </section>

      {/* ---------- 5. STORY COLLECTION ---------- */}
      <section className="relative border-y border-gold/40 bg-card paper-grain">
        <PatternBackground motif="paisley" opacity={0.04} />
        <div className="relative mx-auto max-w-7xl px-6 py-20 lg:py-24">
          <SectionHeading eyebrow="The Collection" title="Eight Stories, Eight Ways to Love" />
          <div className="mt-14">
            <StoryGrid />
          </div>
        </div>
      </section>

      {/* ---------- 6. WHY THESE STORIES ---------- */}
      <section className="relative bg-parchment paper-grain">
        <PatternBackground motif="lotus" opacity={0.04} />
        <div className="relative mx-auto grid max-w-5xl gap-10 px-6 py-20 lg:grid-cols-[minmax(0,1fr)_auto] lg:items-center lg:py-24">
          <div>
            <SectionHeading align="left" eyebrow="Selection" title="Why These Eight" />
            <p className="mt-6 text-[1.12rem] leading-[1.9] text-charcoal/85">
              We didn't just pick the most famous names. We picked stories that show love wearing
              different faces across Indian history — political partnership, quiet sacrifice,
              devotion to the divine, defiance of family and caste, and the blurry space where
              legend and memory become almost impossible to separate.
            </p>
            <p className="mt-5 text-[1.12rem] leading-[1.9] text-charcoal/85">
              We also went looking beyond the usual Mughal-and-Rajasthan shortlist — which is how a
              17th-century Assamese princess and a 2,000-year-old Tamil epic ended up on the same
              page as the Taj Mahal.
            </p>
          </div>
          <div className="hidden shrink-0 items-center justify-center lg:flex">
            <div className="relative flex h-56 w-56 items-center justify-center border border-gold/40">
              <PatternBackground motif="jali" opacity={0.14} />
              <LotusMark className="relative h-16 w-24 text-gold" />
            </div>
          </div>
        </div>
      </section>

      {/* ---------- 7. FINAL CTA ---------- */}
      <section className="relative overflow-hidden bg-indigo text-parchment ink-grain">
        <PatternBackground motif="damask" color="ivory" opacity={0.07} />
        <div className="relative mx-auto max-w-4xl px-8 py-24 text-center">
          <DecorativeBorder tone="light" />
          <div className="relative">
            <PaisleyMark className="mx-auto text-gold" />
            <h2 className="mx-auto mt-6 max-w-2xl text-balance text-3xl leading-[1.3] text-parchment sm:text-4xl">
              Some stories are carved in stone.
              <br />
              Others survive because we keep telling them.
            </h2>
            <div className="mt-10">
              <Link
                to="/stories"
                className="inline-block border border-gold/70 bg-gold/15 px-9 py-3.5 meta-label text-parchment transition-colors hover:bg-gold/30"
              >
                Explore All Stories →
              </Link>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
