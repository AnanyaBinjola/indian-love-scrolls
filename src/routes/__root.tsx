import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import {
  Outlet,
  Link,
  createRootRouteWithContext,
  useRouter,
  HeadContent,
  Scripts,
  ScrollRestoration,
} from "@tanstack/react-router";
import { useEffect, type ReactNode } from "react";

import appCss from "../styles.css?url";
import { reportLovableError } from "../lib/lovable-error-reporting";
import { Navbar } from "@/components/heritage/Navbar";
import { Footer } from "@/components/heritage/Footer";
import { PatternBackground } from "@/components/heritage/PatternBackground";

function NotFoundComponent() {
  return (
    <div className="flex min-h-[70vh] items-center justify-center bg-parchment px-4 paper-grain">
      <div className="max-w-md text-center">
        <h1 className="font-display text-6xl text-oxblood">404</h1>
        <h2 className="mt-4 text-xl">This page isn't in the manuscript</h2>
        <p className="mt-2 text-charcoal/70">
          The page you're looking for doesn't exist or has been moved.
        </p>
        <div className="mt-8">
          <Link
            to="/"
            className="inline-flex items-center justify-center border border-gold/60 bg-oxblood px-6 py-3 meta-label text-parchment transition-colors hover:bg-wine"
          >
            Return home
          </Link>
        </div>
      </div>
    </div>
  );
}

function ErrorComponent({ error, reset }: { error: Error; reset: () => void }) {
  console.error(error);
  const router = useRouter();
  useEffect(() => {
    reportLovableError(error, { boundary: "tanstack_root_error_component" });
  }, [error]);

  return (
    <div className="flex min-h-[70vh] items-center justify-center bg-parchment px-4">
      <div className="max-w-md text-center">
        <h1 className="text-xl">This page didn't load</h1>
        <p className="mt-2 text-charcoal/70">
          Something went wrong on our end. You can try refreshing or head back home.
        </p>
        <div className="mt-6 flex flex-wrap justify-center gap-3">
          <button
            onClick={() => {
              router.invalidate();
              reset();
            }}
            className="border border-gold/60 bg-oxblood px-5 py-2.5 meta-label text-parchment"
          >
            Try again
          </button>
          <a href="/" className="border border-gold/60 px-5 py-2.5 meta-label text-charcoal">
            Go home
          </a>
        </div>
      </div>
    </div>
  );
}

export const Route = createRootRouteWithContext<{ queryClient: QueryClient }>()({
  head: () => ({
    meta: [
      { charSet: "utf-8" },
      { name: "viewport", content: "width=device-width, initial-scale=1" },
      { title: "Historical Stories of Love — Indian History & Legend" },
      {
        name: "description",
        content:
          "Eight enduring love stories from Indian history and legend, each marked for how much is documented and how much is folklore.",
      },
      { name: "author", content: "Historical Stories of Love" },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
    links: [
      { rel: "stylesheet", href: appCss },
      { rel: "preconnect", href: "https://fonts.googleapis.com" },
      { rel: "preconnect", href: "https://fonts.gstatic.com", crossOrigin: "anonymous" },
      {
        rel: "stylesheet",
        href: "https://fonts.googleapis.com/css2?family=Cinzel:wght@400;500;600&family=Cormorant+Garamond:ital,wght@0,300;0,400;0,500;0,600;1,300;1,400&family=Jost:wght@300;400;500&display=swap",
      },
      { rel: "icon", href: "/favicon.ico", type: "image/x-icon" },
    ],
  }),
  shellComponent: RootShell,
  component: RootComponent,
  notFoundComponent: NotFoundComponent,
  errorComponent: ErrorComponent,
});

function RootShell({ children }: { children: ReactNode }) {
  return (
    <html lang="en">
      <head>
        <HeadContent />
      </head>
      <body>
        {children}
        <Scripts />
      </body>
    </html>
  );
}

function RootComponent() {
  const { queryClient } = Route.useRouteContext();

  return (
    <QueryClientProvider client={queryClient}>
      <div className="flex min-h-screen flex-col bg-parchment relative overflow-hidden">
        <ScrollRestoration />
        {/* Global Watermark Pattern (insp. Image 1/5) */}
        <PatternBackground motif="paisley" color="gold" opacity={0.14} className="fixed inset-0 z-0 select-none pointer-events-none" />
        
        <div className="relative z-10 flex flex-col min-h-screen flex-1">
          <Navbar />
          <main className="flex-1">
            {/* Required: nested routes render here. */}
            <Outlet />
          </main>
          <Footer />
        </div>
      </div>
    </QueryClientProvider>
  );
}
