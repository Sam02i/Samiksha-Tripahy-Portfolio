import { createFileRoute, Link } from "@tanstack/react-router";
import { ChevronDown } from "lucide-react";
import { SiteLayout } from "@/components/SiteLayout";
import { FadeImage } from "@/components/FadeImage";
import portrait from "@/assets/samiksha.jpg";
import sketchNeural from "@/assets/sketch-neural.png";
import sketchChip from "@/assets/sketch-chip.png";
import sketchArm from "@/assets/sketch-arm.png";
import cacheCover from "@/assets/hit-rate-chart.webp";
import transfusionCover from "@/assets/transfusion-hero.webp";
import taskReceiptsCover from "@/assets/task-receipts-cover.webp";
import animeRecommenderCover from "@/assets/anime-recommender-cover.webp";
import agrioptimaCover from "@/assets/agrioptima-cover.webp";
import birdFinderCover from "@/assets/birdfinder-cover.webp";
import loreLabCover from "@/assets/lore-lab-cover.webp";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "Samiksha Tripathy — Machine Learning Engineer" },
      {
        name: "description",
        content:
          "Portfolio of Samiksha Tripathy, a machine learning engineer and CSE (AI & ML) undergraduate at SRM Institute of Science and Technology.",
      },
      {
        property: "og:title",
        content: "Samiksha Tripathy — Machine Learning Engineer",
      },
      {
        property: "og:description",
        content:
          "Machine learning projects with working demos, reproducible evaluations, and clear limits.",
      },
    ],
  }),
  component: Index,
});

// Keep this order aligned with the project stories.
const projects = [
  {
    slug: "lore-lab",
    story:
      "A 42% rain hit rate looked promising. Matching by month changed the comparison.",
    title: "Lore Lab.",
    image: loreLabCover,
    alt: "Lore Lab frontend, with a chalkboard-style interface for testing weather sayings",
    github: "https://github.com/Sam02i/Lore-Lab",
  },
  {
    slug: "echofeather",
    story:
      "Photo and audio identification, with five suggestions and an evaluated audio baseline.",
    title: "BirdFinder.",
    image: birdFinderCover,
    alt: "BirdFinder homepage with a mosaic bird and photo and sound identification navigation",
    github: "https://github.com/Sam02i/EchoFeather",
  },
  {
    slug: "agrioptima-ai",
    story:
      "Backend lead: I built the soil recommendation engine and integrated the models.",
    title: "AgriOptima AI.",
    image: agrioptimaCover,
    alt: "AgriOptima AI, a shared farmer and buyer application",
    github: "https://github.com/Sam02i/agrioptima-ai",
  },
  {
    slug: "cache-management",
    story: "56.1% versus 55.9% hit rate: the cheaper baseline held its own.",
    title: "When simple\nworks better.",
    image: cacheCover,
    alt: "Chart comparing hit rate vs cache size for LRU, LFU, and ML-based eviction policies",
    github: "https://github.com/Sam02i/Cache-Eviction-Analysis",
  },
  {
    slug: "transfusion-need",
    story: "What data leakage taught me about trusting a prediction.",
    title: "Can we trust\nthe prediction?",
    image: transfusionCover,
    alt: "Live result screen from the trained Random Forest model estimating transfusion risk, showing a 68% elevated risk gauge",
    github:
      "https://github.com/Sam02i/Predictive-Analytics-for-Transfusion-Need",
  },
  {
    slug: "task-receipts",
    story: "Turning completed work into a receipt worth keeping.",
    title: "Task Receipts.",
    image: taskReceiptsCover,
    alt: "Task Receipts, a retro receipt-printer styled session and task tracker",
    github: "https://github.com/Sam02i/Task-Receipts",
  },
  {
    slug: "anime-recommender",
    story: "Helping viewers narrow down what to watch next.",
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
          <FadeImage
            src={portrait}
            alt="Portrait of Samiksha Tripathy"
            wrapperClassName="h-full w-full"
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
            className="animate-float pointer-events-none absolute -top-14 right-0 hidden w-32 opacity-90 lg:block xl:w-40"
          />
          <img
            src={sketchChip}
            alt=""
            aria-hidden="true"
            loading="lazy"
            width={768}
            height={768}
            className="animate-float pointer-events-none absolute -left-20 top-40 hidden w-28 opacity-90 lg:block xl:w-32"
          />
          <img
            src={sketchArm}
            alt=""
            aria-hidden="true"
            loading="lazy"
            width={768}
            height={768}
            className="animate-float pointer-events-none absolute -bottom-8 right-0 hidden w-32 opacity-90 lg:block xl:w-40"
          />

          <h1
            className="animate-rise-in mt-6 text-3xl font-bold leading-[1.2] tracking-tight sm:text-5xl"
            style={{ animationDelay: "100ms" }}
          >
            I&rsquo;m Samiksha Tripathy,
            <br />a Machine Learning
            <br />
            Engineer.
          </h1>

          <p
            className="animate-rise-in mx-auto mt-4 max-w-xl text-sm leading-relaxed text-foreground/90"
            style={{ animationDelay: "200ms" }}
          >
            I&rsquo;m a Computer Science &amp; Engineering student at SRM
            University of Science and Technology, specializing in Artificial
            Intelligence and Machine Learning, looking to lower the barrier of
            entry to intelligent technology for all. I am primarily interested
            in machine learning model design, deep learning system optimization,
            and applied AI for real world problem solving.
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

      <div
        className="animate-rise-in -mt-6 flex flex-col items-center gap-1 pb-4 text-muted-foreground"
        style={{ animationDelay: "400ms" }}
      >
        <span className="text-xs font-semibold uppercase tracking-widest">
          Scroll to see projects
        </span>
        <ChevronDown className="animate-bounce" size={20} aria-hidden="true" />
      </div>

      <ProjectGrid />
    </SiteLayout>
  );
}

function ProjectGrid() {
  return (
    <section
      aria-label="Project stories"
      className="mx-auto max-w-7xl px-5 pb-24 pt-12 sm:px-8"
    >
      <div className="grid grid-cols-1 gap-x-8 gap-y-12 sm:grid-cols-2 xl:grid-cols-3">
        {projects.map((project) => (
          <article key={project.slug} className="flex min-w-0 flex-col">
            <Link
              to="/projects"
              hash={project.slug}
              aria-label={`Read ${project.title.replace(/\n/g, " ")} project story`}
              className="group block aspect-[16/10] overflow-hidden rounded-2xl border border-border bg-card p-3 focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-primary"
            >
              <FadeImage
                src={project.image}
                alt={project.alt}
                loading="lazy"
                decoding="async"
                wrapperClassName="h-full w-full"
                className="h-full w-full object-contain transition-transform duration-300 motion-reduce:transition-none group-hover:scale-[1.02]"
              />
            </Link>
            <h2 className="mt-5 text-2xl font-bold leading-tight tracking-tight">
              {project.title.replace(/\n/g, " ")}
            </h2>
            <p className="mb-6 mt-3 text-sm leading-7 text-muted-foreground">
              {project.story}
            </p>
            <Link
              to="/projects"
              hash={project.slug}
              className="mt-auto inline-flex min-h-11 w-fit items-center rounded-full bg-primary px-6 py-2.5 text-xs font-semibold uppercase tracking-widest text-primary-foreground transition-opacity hover:opacity-90 focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-primary"
            >
              Read the story
            </Link>
          </article>
        ))}
      </div>
    </section>
  );
}
