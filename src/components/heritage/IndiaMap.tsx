import { useEffect, useRef, useState } from "react";
import { Link, useNavigate } from "@tanstack/react-router";
import { stories, type Story } from "@/data/stories";
import { cn } from "@/lib/utils";
import { CornerFlourishes, LotusMark, PaisleyMark } from "./Ornaments";
import { TruthBadge } from "./TruthBadge";

export function IndiaMap({ compact = false }: { compact?: boolean }) {
  const mapContainerRef = useRef<HTMLDivElement | null>(null);
  const mapInstanceRef = useRef<any>(null);
  const mapBoundsRef = useRef<any>(null);
  const [activeStory, setActiveStory] = useState<Story | null>(null);
  const [hoverPosition, setHoverPosition] = useState<{ x: number; y: number } | null>(null);
  const [isClient, setIsClient] = useState(false);
  const navigate = useNavigate();

  useEffect(() => {
    setIsClient(true);
  }, []);

  useEffect(() => {
    if (!isClient || !mapContainerRef.current) return;

    let isMounted = true;

    // Dynamically import leaflet to prevent SSR issues
    import("leaflet").then((L) => {
      if (!isMounted || !mapContainerRef.current) return;

      // Clean up previous instance if any
      if (mapInstanceRef.current) {
        mapInstanceRef.current.remove();
        mapInstanceRef.current = null;
      }

      // India center coordinates and bounding box
      const initialCenter: [number, number] = [22.8, 79.6];
      const initialZoom = compact ? 4 : 5;

      const map = L.map(mapContainerRef.current, {
        center: initialCenter,
        zoom: initialZoom,
        minZoom: 3,
        maxZoom: 9,
        maxBounds: [
          [5.0, 60.0], // Expanded South-West (Indian Ocean / Arabian Sea)
          [38.5, 102.0], // Expanded North-East (Himalayas / Assam)
        ],
        maxBoundsViscosity: 0.85,
        zoomControl: true,
        scrollWheelZoom: true, // Allow zoom with mouse scroll
        keyboard: false, // Prevent Leaflet from auto-focusing on creation
      });

      // CartoDB Positron / Voyager layer with heritage warmth
      L.tileLayer(
        "https://{s}.basemaps.cartocdn.com/rastertiles/voyager/{z}/{x}/{y}{r}.png",
        {
          attribution:
            '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors &copy; <a href="https://carto.com/attributions">CARTO</a>',
          subdomains: "abcd",
          maxZoom: 19,
        },
      ).addTo(map);

      // Custom colors mapping matching CSS custom properties
      const getColorConfig = (truth: string) => {
        switch (truth) {
          case "documented":
            return { colorVar: "forest", borderColor: "var(--parchment)" };
          case "folk":
            return { colorVar: "gold", borderColor: "var(--parchment)" };
          case "mixed":
            return { colorVar: "forest", borderColor: "var(--gold)" };
          case "legend":
          case "contested":
          default:
            return { colorVar: "indigo-deep", borderColor: "var(--parchment)" };
        }
      };

      const markers: any[] = [];

      // Create Custom Pins for each story
      stories.forEach((story) => {
        const { colorVar, borderColor } = getColorConfig(story.truth);
        const pinIcon = L.divIcon({
          className: "custom-leaflet-marker",
          html: `
            <div class="relative group cursor-pointer -translate-x-1/2 -translate-y-1/2 flex items-center justify-center">
              <div class="absolute w-8 h-8 rounded-full heritage-pin-pulse" style="background-color: var(--${colorVar}-pulse);"></div>
              <div class="relative flex items-center justify-center w-6 h-6 rounded-full text-parchment shadow-md transition-transform duration-300 hover:scale-125" style="background-color: var(--${colorVar}); border: 2px solid ${borderColor};">
                <span class="text-[9px] font-bold font-display leading-none">${story.number}</span>
              </div>
            </div>
          `,
          iconSize: [24, 24],
          iconAnchor: [12, 12],
        });

        const marker = L.marker([story.coordinates.lat, story.coordinates.lng], {
          icon: pinIcon,
          title: story.title,
          keyboard: true,
        }).addTo(map);

        // Marker interactions
        marker.on("mouseover", (e) => {
          setActiveStory(story);
          if (mapContainerRef.current) {
            const point = map.latLngToContainerPoint([
              story.coordinates.lat,
              story.coordinates.lng,
            ]);
            setHoverPosition({ x: point.x, y: point.y });
          }
        });

        marker.on("click", () => {
          navigate({ to: "/stories/$slug", params: { slug: story.slug } });
        });

        markers.push(marker);
      });

      // Fit bounds to show all markers
      const group = L.featureGroup(markers);
      mapBoundsRef.current = group.getBounds();
      map.fitBounds(mapBoundsRef.current, { padding: [45, 45] });

      // Update hover position on pan/zoom
      map.on("zoom pan move", () => {
        if (activeStory) {
          const point = map.latLngToContainerPoint([
            activeStory.coordinates.lat,
            activeStory.coordinates.lng,
          ]);
          setHoverPosition({ x: point.x, y: point.y });
        }
      });

      map.on("click", (e) => {
        // If clicking on empty map area, dismiss active hover
        const target = e.originalEvent.target as HTMLElement;
        if (!target.closest(".custom-leaflet-marker") && !target.closest(".story-hover-card")) {
          setActiveStory(null);
          setHoverPosition(null);
        }
      });

      mapInstanceRef.current = map;
    });

    return () => {
      isMounted = false;
      if (mapInstanceRef.current) {
        mapInstanceRef.current.remove();
        mapInstanceRef.current = null;
      }
    };
  }, [isClient, compact, navigate]);

  const resetView = () => {
    if (mapInstanceRef.current && mapBoundsRef.current) {
      mapInstanceRef.current.fitBounds(mapBoundsRef.current, {
        padding: [45, 45],
        animate: true,
      });
      setActiveStory(null);
      setHoverPosition(null);
    }
  };

  const selectStory = (story: Story) => {
    setActiveStory(story);
    if (mapInstanceRef.current) {
      mapInstanceRef.current.flyTo(
        [story.coordinates.lat, story.coordinates.lng],
        6,
        { animate: true, duration: 1.2 },
      );
      setTimeout(() => {
        if (mapContainerRef.current && mapInstanceRef.current) {
          const point = mapInstanceRef.current.latLngToContainerPoint([
            story.coordinates.lat,
            story.coordinates.lng,
          ]);
          setHoverPosition({ x: point.x, y: point.y });
        }
      }, 700);
    }
  };

  return (
    <div className="relative mx-auto w-full max-w-5xl border border-gold/45 bg-card paper-grain p-4 sm:p-8">
      <CornerFlourishes />

      {/* Map Header & Controls */}
      <div className="relative mb-6 flex flex-wrap items-center justify-between gap-4 border-b border-gold/30 pb-4">
        <div className="flex items-center gap-2">
          <LotusMark className="text-gold" />
          <span className="eyebrow text-charcoal/70">
            Geographic Index · 8 Historical Locations
          </span>
        </div>
        <div className="flex items-center gap-3">
          <button
            onClick={resetView}
            className="border border-gold/50 bg-parchment px-3 py-1.5 meta-label text-[0.7rem] text-charcoal transition-colors hover:border-gold hover:bg-gold/15 hover:text-oxblood"
          >
            Reset View
          </button>
          <span className="hidden text-xs text-charcoal/50 sm:inline">
            Use +/- to zoom · Drag to pan
          </span>
        </div>
      </div>

      {/* Main Leaflet Map Viewport */}
      <div className="heritage-map-container relative h-[480px] w-full overflow-hidden border border-gold/40 sm:h-[580px]">
        {/* Map Mount Target */}
        <div
          ref={mapContainerRef}
          className="h-full w-full bg-parchment"
          aria-label="Interactive Leaflet Map of India"
        />

        {/* Fallback Loading Skeleton */}
        {!isClient && (
          <div className="absolute inset-0 flex flex-col items-center justify-center bg-parchment/90">
            <PaisleyMark className="animate-spin text-gold" />
            <p className="mt-3 meta-label text-charcoal/70">
              Unrolling Map of India...
            </p>
          </div>
        )}

        {/* Hover Card Overlay (Requirement 1 & 3) */}
        {activeStory && hoverPosition && (
          <div
            className="story-hover-card pointer-events-auto absolute z-[1000] transition-all duration-200 ease-out"
            style={(() => {
              const containerHeight = mapContainerRef.current?.clientHeight || 580;
              const containerWidth = mapContainerRef.current?.clientWidth || 1000;
              const cardWidth = 280;
              const cardHeight = 310;

              let cardStyle: React.CSSProperties = {};
              const spaceAbove = hoverPosition.y;
              const isBelow = spaceAbove < cardHeight + 24;

              // Vertical positioning to keep within map container boundaries
              if (isBelow) {
                let topPos = hoverPosition.y + 18;
                if (topPos + cardHeight > containerHeight - 12) {
                  topPos = containerHeight - cardHeight - 12;
                }
                cardStyle.top = `${topPos}px`;
              } else {
                let topPos = hoverPosition.y - 18 - cardHeight;
                if (topPos < 12) {
                  topPos = 12;
                }
                cardStyle.top = `${topPos}px`;
              }

              // Horizontal positioning to keep within map container boundaries
              let leftPos = hoverPosition.x - cardWidth / 2;
              if (leftPos < 12) {
                leftPos = 12;
              } else if (leftPos + cardWidth > containerWidth - 12) {
                leftPos = containerWidth - cardWidth - 12;
              }

              cardStyle.left = `${leftPos}px`;
              cardStyle.width = `${cardWidth}px`;
              return cardStyle;
            })()}
            onMouseEnter={() => setActiveStory(activeStory)}
            onMouseLeave={() => setActiveStory(null)}
          >
            <div className="relative w-full overflow-hidden border border-gold/80 bg-parchment shadow-2xl transition-transform duration-300 hover:scale-[1.02]">
              <CornerFlourishes />

              {/* Story Thumbnail Image */}
              <div className="relative aspect-[16/10] w-full overflow-hidden border-b border-gold/40 bg-oxblood">
                <img
                  src={activeStory.image}
                  alt={activeStory.title}
                  className="h-full w-full object-cover transition-transform duration-500 hover:scale-105"
                  loading="eager"
                />
                <span className="absolute left-2.5 top-2.5 rounded bg-oxblood/85 px-1.5 py-0.5 font-display text-xs text-parchment shadow">
                  {activeStory.number}
                </span>
                <div className="absolute bottom-2 right-2">
                  <TruthBadge truth={activeStory.truth} />
                </div>
              </div>

              {/* Story Title Directly Below Thumbnail */}
              <div className="p-3.5 text-center">
                <h4 className="font-display text-base font-semibold leading-snug text-oxblood">
                  {activeStory.title}
                </h4>
                <p className="mt-1 meta-label text-[0.65rem] text-charcoal/65">
                  {activeStory.figures}
                </p>
                <p className="mt-0.5 text-xs italic text-terracotta">
                  {activeStory.coordinates.place}
                </p>

                <div className="mt-3 border-t border-gold/30 pt-2">
                  <Link
                    to="/stories/$slug"
                    params={{ slug: activeStory.slug }}
                    className="inline-flex items-center justify-center border border-gold/60 bg-oxblood px-4 py-1.5 meta-label text-[0.68rem] text-parchment transition-colors hover:bg-wine"
                  >
                    Read Story →
                  </Link>
                </div>
              </div>

              {/* Pointer Tip below or above card, matching marker X position */}
              {(() => {
                const cardHeight = 310;
                const spaceAbove = hoverPosition.y;
                const isBelow = spaceAbove < cardHeight + 24;
                const cardWidth = 280;
                let leftPos = hoverPosition.x - cardWidth / 2;
                if (leftPos < 12) {
                  leftPos = 12;
                } else if (leftPos + cardWidth > (mapContainerRef.current?.clientWidth || 1000) - 12) {
                  leftPos = (mapContainerRef.current?.clientWidth || 1000) - cardWidth - 12;
                }
                const pointerOffset = hoverPosition.x - leftPos;

                if (isBelow) {
                  return (
                    <div
                      className="absolute -top-2 h-4 w-4 -translate-x-1/2 rotate-45 border-t border-l border-gold/80 bg-parchment"
                      style={{ left: `${pointerOffset}px` }}
                    />
                  );
                } else {
                  return (
                    <div
                      className="absolute -bottom-2 h-4 w-4 -translate-x-1/2 rotate-45 border-b border-r border-gold/80 bg-parchment"
                      style={{ left: `${pointerOffset}px` }}
                    />
                  );
                }
              })()}
            </div>
          </div>
        )}
      </div>

      {/* Story Quick-Selector Chips */}
      <div className="relative mt-6">
        <p className="mb-2.5 meta-label text-[0.7rem] text-charcoal/60">
          Jump to story location:
        </p>
        <div className="flex flex-wrap gap-2">
          {stories.map((story) => {
            const isSelected = activeStory?.slug === story.slug;
            return (
              <button
                key={story.slug}
                onClick={() => selectStory(story)}
                className={cn(
                  "flex items-center gap-1.5 border px-3 py-1 text-xs transition-all",
                  isSelected
                    ? "border-gold bg-oxblood text-parchment shadow-sm"
                    : "border-gold/40 bg-card text-charcoal/80 hover:border-gold hover:text-oxblood",
                )}
              >
                <span className="font-display font-bold text-[0.75rem]">
                  {story.number}
                </span>
                <span>{story.title}</span>
                <span className="text-[0.65rem] opacity-60">
                  ({story.mapPin.place})
                </span>
              </button>
            );
          })}
        </div>
      </div>
    </div>
  );
}
