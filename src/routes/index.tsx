import { createFileRoute, Link } from "@tanstack/react-router";
import { useRef } from "react";
import { ChevronLeft, ChevronRight } from "lucide-react";
import { SiteLayout } from "@/components/SiteLayout";
import portrait from "@/assets/samiksha.jpg";
import sketchNeural from "@/assets/sketch-neural.png";
import sketchChip from "@/assets/sketch-chip.png";
import sketchArm from "@/assets/sketch-arm.png";
import cacheCover from "@/assets/project-cache-eviction.png";
import transfusionCover from "@/assets/transfusion-demo.png";
import taskReceiptsCover from "@/assets/task-receipts-cover.png";
import animeRecommenderCover from "@/assets/anime-recommender-cover.png";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "Samiksha Tripathy — Machine Learning Engineer" },
      {
        name: "description",
        content:
          "Portfolio of Samiksha Tripathy, a machine learning engineer and CSE (AI & ML) undergraduate at SRM Institute of Science and Technology.",
      },
      { property: "og:title", content: "Samiksha Tripathy — Machine Learning Engineer" },
      {
        property: "og:description",
        content:
          "Machine learning engineer building intelligent automation and neural systems for human spaceflight.",
      },
    ],
  }),
  component: Index,
});

// Add more entries here as new projects are written up — the carousel and
// its arrow buttons already handle any number of cards.
const projects = [
  {
    title: "Cache Management\nStrategy Research.",
    image: cacheCover,
    alt: "Diagram showing CPU, cache memory and main memory transfers for cache eviction policy analysis",
    github: "https://github.com/Sam02i/Cache-Eviction-Analysis",
  },
  {
    title: "Predictive Analytics for\nTransfusion Need.",
    image: transfusionCover,
    alt: "Landing page for the Transfusion Risk Checker, a portfolio ML demo predicting transfusion risk from clinical vitals",
    github: "https://github.com/Sam02i/Predictive-Analytics-for-Transfusion-Need",
  },
  {
    title: "Task Receipts.",
    image: taskReceiptsCover,
    alt: "Task Receipts, a retro receipt-printer styled session and task tracker",
    github: "https://github.com/Sam02i/Task-Receipts",
  },
  {
    title: "Anime\nRecommender.",
    image: animeRecommenderCover,
    alt: "Anime Recommender, a full-stack recommendation platform using AniList and MyAnimeList APIs",
    github: "https://github.com/Sam02i/Anime-Recommender",
  },
];

function Index() {
  return (
    <SiteLayout>
      <section className="mx-auto grid max-w-[1600px] items-start gap-8 px-8 pb-20 pt-28 lg:grid-cols-2 lg:items-end lg:gap-16">
        <div
          className="group animate-rise-in mx-auto aspect-square w-full max-w-[36rem] overflow-hidden rounded-3xl shadow-lg"
          style={{ animationDelay: "0ms" }}
        >
          <img
            src={portrait}
            alt="Portrait of Samiksha Tripathy"
            className="h-full w-full object-cover transition-transform duration-500 ease-out group-hover:scale-105"
          />
        </div>

        <div className="relative text-center">
          <img
            src={sketchNeural}
            alt=""
            aria-hidden="true"
            loading="lazy"
            width={768}
            height={768}
            className="animate-float pointer-events-none absolute -top-14 right-0 hidden w-32 opacity-60 lg:block xl:w-40"
          />
          <img
            src={sketchChip}
            alt=""
            aria-hidden="true"
            loading="lazy"
            width={768}
            height={768}
            className="animate-float pointer-events-none absolute -left-20 top-40 hidden w-28 opacity-50 lg:block xl:w-32"
          />
          <img
            src={sketchArm}
            alt=""
            aria-hidden="true"
            loading="lazy"
            width={768}
            height={768}
            className="animate-float pointer-events-none absolute -bottom-8 right-0 hidden w-32 opacity-60 lg:block xl:w-40"
          />

          <h1
            className="animate-rise-in mt-6 text-3xl font-bold leading-[1.2] tracking-tight sm:text-5xl"
            style={{ animationDelay: "100ms" }}
          >
            I&rsquo;m Samiksha Tripathy,
            <br />a Machine Learning
            <br />Engineer.
          </h1>

          <p
            className="animate-rise-in mx-auto mt-4 max-w-xl text-sm leading-relaxed text-foreground/90"
            style={{ animationDelay: "200ms" }}
          >
            I&rsquo;m a Computer Science &amp; Engineering student at SRM University of Science and
            Technology, specializing in Artificial Intelligence and Machine Learning, looking to
            lower the barrier of entry to intelligent technology for all. I am primarily interested
            in machine learning model design, deep learning system optimization, and applied AI for
            real world problem solving.
          </p>

          <div
            className="animate-rise-in mx-auto mt-6 flex w-full max-w-xs flex-col gap-2"
            style={{ animationDelay: "300ms" }}
          >
            <a
              href="https://www.linkedin.com/in/samiksha-tripathy-399933328/"
              target="_blank"
              rel="noreferrer noopener"
              className="rounded-full bg-primary px-6 py-2.5 text-xs font-semibold uppercase tracking-widest text-primary-foreground transition-all duration-200 hover:-translate-y-0.5 hover:opacity-90 hover:shadow-md"
            >
              LinkedIn
            </a>
            <Link
              to="/projects"
              className="rounded-full bg-primary px-6 py-2.5 text-xs font-semibold uppercase tracking-widest text-primary-foreground transition-all duration-200 hover:-translate-y-0.5 hover:opacity-90 hover:shadow-md"
            >
              Projects
            </Link>
            <Link
              to="/resume"
              className="rounded-full bg-primary px-6 py-2.5 text-xs font-semibold uppercase tracking-widest text-primary-foreground transition-all duration-200 hover:-translate-y-0.5 hover:opacity-90 hover:shadow-md"
            >
              Resume
            </Link>
          </div>
        </div>
      </section>

      <ProjectCarousel />
    </SiteLayout>
  );
}

function ProjectCarousel() {
  const trackRef = useRef<HTMLDivElement>(null);

  const scrollByCard = (direction: 1 | -1) => {
    const track = trackRef.current;
    if (!track) return;
    const card = track.querySelector<HTMLElement>("[data-carousel-card]");
    const step = (card?.offsetWidth ?? 380) + 24; // card width + gap
    track.scrollBy({ left: direction * step, behavior: "smooth" });
  };

  return (
    <section className="relative mx-auto max-w-[1600px] px-8 pt-20 pb-24">
      {projects.length > 1 && (
        <>
          <button
            type="button"
            onClick={() => scrollByCard(-1)}
            aria-label="Previous project"
            className="absolute left-2 top-[38%] z-10 hidden -translate-y-1/2 items-center justify-center rounded-full border border-border bg-background/90 p-2 shadow-sm backdrop-blur transition-colors hover:bg-secondary sm:flex"
          >
            <ChevronLeft size={20} />
          </button>
          <button
            type="button"
            onClick={() => scrollByCard(1)}
            aria-label="Next project"
            className="absolute right-2 top-[38%] z-10 hidden -translate-y-1/2 items-center justify-center rounded-full border border-border bg-background/90 p-2 shadow-sm backdrop-blur transition-colors hover:bg-secondary sm:flex"
          >
            <ChevronRight size={20} />
          </button>
        </>
      )}

      <div
        ref={trackRef}
        className="flex gap-6 overflow-x-auto scroll-smooth pb-4 [scrollbar-width:none] [&::-webkit-scrollbar]:hidden"
      >
        {projects.map((project, i) => (
          <article
            key={project.title}
            data-carousel-card
            className="animate-rise-in w-[260px] shrink-0 sm:w-[320px] lg:w-[360px]"
            style={{ animationDelay: `${120 + i * 120}ms` }}
          >
            <a
              href={project.github}
              target="_blank"
              rel="noreferrer noopener"
              className="group block aspect-[4/3] w-full overflow-hidden rounded-2xl border border-border bg-card"
            >
              <img
                src={project.image}
                alt={project.alt}
                loading="lazy"
                className="h-full w-full object-cover transition-transform duration-700 ease-out group-hover:scale-[1.05]"
              />
            </a>
            <h3 className="mt-5 whitespace-pre-line text-3xl font-extrabold leading-tight tracking-tight sm:text-4xl">
              {project.title}
            </h3>
            <Link
              to="/projects"
              className="mt-4 inline-block rounded-full bg-primary px-6 py-2.5 text-xs font-semibold uppercase tracking-widest text-primary-foreground transition-opacity hover:opacity-90"
            >
              Learn More
            </Link>
          </article>
        ))}
      </div>
    </section>
  );
}