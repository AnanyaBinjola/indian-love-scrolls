import { createFileRoute, notFound } from "@tanstack/react-router";
import { getStory, stories, truthRatings } from "@/data/stories";
import { StoryTemplate } from "@/components/heritage/StoryTemplate";

export const Route = createFileRoute("/stories/$slug")({
  loader: ({ params }) => {
    const story = getStory(params.slug);
    if (!story) throw notFound();
    return { story };
  },
  head: ({ loaderData }) => {
    if (!loaderData) {
      return {
        meta: [{ title: "Story not found — Historical Stories of Love" }, { name: "robots", content: "noindex" }],
      };
    }
    const { story } = loaderData;
    const description = `${story.figures} · ${story.region}. ${truthRatings[story.truth].label}.`;
    return {
      meta: [
        { title: `${story.title} — Historical Stories of Love` },
        { name: "description", content: description },
        { property: "og:title", content: `${story.title} — Historical Stories of Love` },
        { property: "og:description", content: description },
      ],
    };
  },
  component: StoryPage,
});

function StoryPage() {
  const { story } = Route.useLoaderData();
  return <StoryTemplate story={story} />;
}

