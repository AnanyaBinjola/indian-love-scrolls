import { stories } from "@/data/stories";
import { StoryCard } from "./StoryCard";

export function StoryGrid({ limit }: { limit?: number }) {
  const list = limit ? stories.slice(0, limit) : stories;
  return (
    <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
      {list.map((story) => (
        <StoryCard key={story.slug} story={story} />
      ))}
    </div>
  );
}
