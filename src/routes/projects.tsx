import { createFileRoute } from "@tanstack/react-router";
import { SiteLayout } from "@/components/SiteLayout";
import cacheCover from "@/assets/project-cache-eviction.png";

export const Route = createFileRoute("/projects")({
  head: () => ({
    meta: [
      { title: "Projects — Samiksha Tripathy" },
      {
        name: "description",
        content:
          "Machine learning and systems projects by Samiksha Tripathy, including cache eviction policy analysis with LRU, LFU and ML.",
      },
      { property: "og:title", content: "Projects — Samiksha Tripathy" },
      {
        property: "og:description",
        content: "Machine learning and systems projects by Samiksha Tripathy.",
      },
    ],
  }),
  component: Projects,
});

const projects = [
  {
    title: "Cache Eviction Policy Analysis: LRU vs LFU vs ML",
    image: cacheCover,
    alt: "Diagram showing CPU, cache memory and main memory transfers for cache eviction policy analysis",
  },
];

function Projects() {
  return (
    <SiteLayout>
      <section className="mx-auto max-w-[1400px] px-8 pb-24 pt-16">
        <h1 className="animate-rise-in text-center text-5xl font-extrabold tracking-tight sm:text-7xl">
          Projects.
        </h1>

        <div className="mt-14 space-y-20">
          {projects.map((project, i) => (
            <article
              key={project.title}
              className="animate-rise-in mx-auto max-w-4xl"
              style={{ animationDelay: `${120 + i * 120}ms` }}
            >
              <h2 className="text-center text-2xl font-semibold tracking-tight sm:text-3xl">
                {project.title}
              </h2>
              <div className="group mt-6 overflow-hidden rounded-2xl border border-border bg-card shadow-sm">
                <img
                  src={project.image}
                  alt={project.alt}
                  loading="lazy"
                  className="w-full object-cover transition-transform duration-700 ease-out group-hover:scale-[1.04]"
                />
              </div>
            </article>
          ))}
        </div>
      </section>
    </SiteLayout>
  );
}
