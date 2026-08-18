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
        meta: [{ title: "Story not found — Love, Remembered" }, { name: "robots", content: "noindex" }],
      };
    }
    const { story } = loaderData;
    const description = `${story.figures} · ${story.region}. ${truthRatings[story.truth].label}.`;
    return {
      meta: [
        { title: `${story.title} — Love, Remembered` },
        { name: "description", content: description },
        { property: "og:title", content: `${story.title} — Love, Remembered` },
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

