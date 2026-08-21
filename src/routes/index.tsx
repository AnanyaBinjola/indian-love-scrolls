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
      <section className="relative overflow-hidden hero-background text-parchment ink-grain py-24 sm:py-32">
        <div className="relative mx-auto max-w-6xl px-6">
          <div className="relative mx-auto max-w-3xl text-center">
            {/* Eyebrow with Stagger 1 */}
            <div className="flex items-center justify-center gap-3 animate-royal-stagger-1">
              <LotusMark className="text-gold/80" />
              <p className="eyebrow text-parchment/90 tracking-[0.25em]">Across India · Across Centuries</p>
              <LotusMark className="text-gold/80" />
            </div>
            
            {/* Main Title with Stagger 2 */}
            <h1 className="mt-7 text-balance text-4xl leading-[1.15] text-parchment/95 text-shadow-heritage font-display sm:text-6xl animate-royal-stagger-2">
              Eight Stories. Eight Kinds of Love. One India.
            </h1>
            
            {/* Increased Font Size Description with Stagger 3 (increased by ~4px) */}
            <p className="mx-auto mt-7 max-w-2xl text-xl leading-relaxed text-parchment/90 text-shadow-heritage sm:text-[1.38rem] animate-royal-stagger-3">
              From a Sultan who built a palace for a shepherdess to a princess who died without
              saying a word — these are the stories India has been telling itself for centuries,
              and the history hiding underneath them.
            </p>
            
            {/* Buttons with Stagger 4 */}
            <div className="mt-10 flex flex-col items-center justify-center gap-4 sm:flex-row animate-royal-stagger-4">
              <Link
                to="/stories"
                className="btn-editorial-primary"
              >
                Explore the Stories
              </Link>
              <Link
                to="/fact-legend"
                className="btn-editorial-secondary"
              >
                How We Fact-Checked This
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* ---------- 2. INTRO / MISSION ---------- */}
      <section className="relative bg-parchment paper-grain">
        <PatternBackground motif="lotus" opacity={0.20} />
        <div className="relative mx-auto max-w-3xl px-6 py-20 text-center lg:py-28">
          <p className="text-balance font-display text-2xl leading-[1.45] text-oxblood sm:text-3xl">
            Not every love story that survives for centuries survives intact.
          </p>
          <OrnamentalDivider className="my-10" />
          <p className="text-xl md:text-[1.35rem] leading-[1.8] text-charcoal/85">
            Some are recorded in royal chronicles. Some were first written down two hundred years
            after they happened. Some are still argued about today.
          </p>
          <p className="mt-6 text-xl md:text-[1.35rem] leading-[1.8] text-charcoal/85">
            This project traces eight of India's most enduring love stories — from Agra to Assam to
            Tamil Nadu — and is honest about where each one sits between fact and legend.
          </p>
        </div>
      </section>

      {/* ---------- 3. FACT VS LEGEND ---------- */}
      <section className="relative border-y border-gold/40 bg-sand/45 paper-grain">
        <PatternBackground motif="madhubani" opacity={0.22} />
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
        <PatternBackground motif="floral" opacity={0.18} />
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
        <PatternBackground motif="paisley" opacity={0.18} />
        <div className="relative mx-auto max-w-7xl px-6 py-20 lg:py-24">
          <SectionHeading eyebrow="The Collection" title="Eight Stories, Eight Ways to Love" />
          <div className="mt-14">
            <StoryGrid />
          </div>
        </div>
      </section>

      {/* ---------- 6. WHY THESE STORIES ---------- */}
      <section className="relative bg-parchment paper-grain">
        <PatternBackground motif="lotus" opacity={0.18} />
        <div className="relative mx-auto grid max-w-5xl gap-10 px-6 py-20 lg:grid-cols-[minmax(0,1fr)_auto] lg:items-center lg:py-24">
          <div>
            <SectionHeading align="left" eyebrow="Selection" title="Why These Eight" />
            <p className="mt-6 text-xl md:text-[1.35rem] leading-[1.8] text-charcoal/85">
              We didn't just pick the most famous names. We picked stories that show love wearing
              different faces across Indian history — political partnership, quiet sacrifice,
              devotion to the divine, defiance of family and caste, and the blurry space where
              legend and memory become almost impossible to separate.
            </p>
            <p className="mt-5 text-xl md:text-[1.35rem] leading-[1.8] text-charcoal/85">
              We also went looking beyond the usual Mughal-and-Rajasthan shortlist — which is how a
              17th-century Assamese princess and a 2,000-year-old Tamil epic ended up on the same
              page as the Taj Mahal.
            </p>
          </div>
          <div className="hidden shrink-0 items-center justify-center lg:flex">
            <div className="relative flex h-56 w-56 items-center justify-center border border-gold/40">
              <PatternBackground motif="jali" opacity={0.24} />
              <LotusMark className="relative h-16 w-24 text-gold" />
            </div>
          </div>
        </div>
      </section>

      {/* ---------- 7. HERO QUOTE BOX ---------- */}
      <section className="relative bg-parchment paper-grain py-16 sm:py-24">
        <PatternBackground motif="damask" opacity={0.14} />
        <div className="relative mx-auto max-w-4xl px-6">
          <div className="relative overflow-hidden border border-gold/30 bg-oxblood p-10 text-center text-parchment ink-grain sm:p-16">
            <PatternBackground motif="damask" color="ivory" opacity={0.10} />
            <div className="relative mx-auto max-w-2xl">
              <div className="flex items-center justify-center gap-3">
                <LotusMark className="text-gold/80" />
                <p className="eyebrow text-parchment/80">Memory & Monument</p>
                <LotusMark className="text-gold/80" />
              </div>
              <h2 className="mx-auto mt-6 max-w-2xl text-balance font-display text-3xl leading-[1.3] text-parchment sm:text-4xl">
                Some stories are carved in stone.
                <br />
                Others survive because we keep telling them.
              </h2>
              <div className="mt-10">
                <Link
                  to="/stories"
                  className="btn-editorial-primary"
                >
                  Explore All Stories →
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
