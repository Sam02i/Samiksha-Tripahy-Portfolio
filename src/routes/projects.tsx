import { createFileRoute } from "@tanstack/react-router";
import { SiteLayout } from "@/components/SiteLayout";
import cacheCover from "@/assets/project-cache-eviction.png";
import transfusionCover from "@/assets/transfusion-demo.png";
import taskReceiptsCover from "@/assets/task-receipts-cover.png";
import animeRecommenderCover from "@/assets/anime-recommender-cover.png";

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
  {
    title: "Predictive Analytics for Transfusion Need",
    image: transfusionCover,
    alt: "Landing page for the Transfusion Risk Checker, a portfolio ML demo predicting transfusion risk from clinical vitals",
    description:
      "A small-data ML pipeline predicting blood transfusion need from routine patient vitals — heart rate, respiratory rate, oxygen saturation, and blood pressure. Built on a 206-patient demo dataset, with two rounds of data leakage found and fixed along the way, evaluated with cross-validation, and deployed as a client-side interactive wizard that runs the actual trained model in-browser.",
    links: [
      { label: "Live Demo", href: "https://predictive-analytics-for-transfusion-need-2vz8ssdal.vercel.app" },
      { label: "GitHub", href: "https://github.com/Sam02i/Predictive-Analytics-for-Transfusion-Need" },
    ],
  },
  {
    title: "Task Receipts",
    image: taskReceiptsCover,
    alt: "Task Receipts, a retro receipt-printer styled session and task tracker",
    description:
      "A playful productivity tool styled like a retro receipt printer — track ongoing and completed tasks, run timed focus sessions, and print out a session summary receipt at the end, complete with customizable paper colors, dot-matrix filters, and app themes.",
    links: [
      { label: "Live Demo", href: "https://sam02i.github.io/Task-Receipts/" },
      { label: "GitHub", href: "https://github.com/Sam02i/Task-Receipts" },
    ],
  },
  {
    title: "Anime Recommender",
    image: animeRecommenderCover,
    alt: "Anime Recommender, a full-stack recommendation platform using AniList and MyAnimeList APIs",
    description:
      "A full-stack anime recommendation platform with a React front end, integrating live data from the AniList and MyAnimeList (MAL) APIs to deliver personalized, real-time recommendations based on user preferences.",
    links: [{ label: "GitHub", href: "https://github.com/Sam02i/Anime-Recommender" }],
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
              {project.description && (
                <p className="mx-auto mt-6 max-w-2xl text-center text-sm leading-relaxed text-muted-foreground">
                  {project.description}
                </p>
              )}
              {project.links && (
                <div className="mt-6 flex flex-wrap justify-center gap-3">
                  {project.links.map((link) => (
                    <a
                      key={link.href}
                      href={link.href}
                      target="_blank"
                      rel="noreferrer noopener"
                      className="rounded-full border border-border px-6 py-2.5 text-xs font-semibold uppercase tracking-widest transition-colors hover:bg-secondary"
                    >
                      {link.label}
                    </a>
                  ))}
                </div>
              )}
            </article>
          ))}
        </div>
      </section>
    </SiteLayout>
  );
}