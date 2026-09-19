import { createFileRoute, Link } from "@tanstack/react-router";
import { useEffect, useRef } from "react";
import { ChevronDown, ChevronLeft, ChevronRight } from "lucide-react";
import { SiteLayout } from "@/components/SiteLayout";
import { FadeImage } from "@/components/FadeImage";
import portrait from "@/assets/samiksha.jpg";
import sketchNeural from "@/assets/sketch-neural.png";
import sketchChip from "@/assets/sketch-chip.png";
import sketchArm from "@/assets/sketch-arm.png";
import cacheCover from "@/assets/hit-rate-chart.png";
import transfusionCover from "@/assets/transfusion-hero.png";
import taskReceiptsCover from "@/assets/task-receipts-cover.png";
import animeRecommenderCover from "@/assets/anime-recommender-cover.png";
import agrioptimaCover from "@/assets/agrioptima-cover.jpg";
import birdSpeciesCover from "@/assets/bird-species-cover.jpg";

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
    slug: "bird-species-identification",
    title: "Bird Species\nIdentification.",
    image: birdSpeciesCover,
    alt: "A keel-billed toucan overlaid with a neural network graph, representing the Bird Species Identification project",
    github: "/projects#bird-species-identification",
  },
  {
    slug: "cache-management",
    title: "Cache Management\nStrategy Research.",
    image: cacheCover,
    alt: "Chart comparing hit rate vs cache size for LRU, LFU, and ML-based eviction policies",
    github: "https://github.com/Sam02i/Cache-Eviction-Analysis",
  },
  {
    slug: "transfusion-need",
    title: "Predictive Analytics for\nTransfusion Need.",
    image: transfusionCover,
    alt: "Live result screen from the trained Random Forest model estimating transfusion risk, showing a 68% elevated risk gauge",
    github: "https://github.com/Sam02i/Predictive-Analytics-for-Transfusion-Need",
  },
  {
    slug: "agrioptima-ai",
    title: "AgriOptima AI.",
    image: agrioptimaCover,
    alt: "AgriOptima AI, a rule-based crop recommendation backend",
    github: "https://github.com/Sam02i/agrioptima-ai",
  },
  {
    slug: "task-receipts",
    title: "Task Receipts.",
    image: taskReceiptsCover,
    alt: "Task Receipts, a retro receipt-printer styled session and task tracker",
    github: "https://github.com/Sam02i/Task-Receipts",
  },
  {
    slug: "anime-recommender",
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

      <div className="animate-rise-in flex flex-col items-center gap-1 pb-4 text-muted-foreground" style={{ animationDelay: "400ms" }}>
        <span className="text-xs font-semibold uppercase tracking-widest">Scroll to see projects</span>
        <ChevronDown className="animate-bounce" size={20} aria-hidden="true" />
      </div>

      <ProjectCarousel />
    </SiteLayout>
  );
}

// Auto-scroll speed in pixels per frame (~60fps). Small values keep the drift subtle.
const AUTO_SCROLL_SPEED = 0.5;
// How long a manual interaction (arrow click / touch) pauses auto-scroll before it resumes.
const RESUME_DELAY_MS = 2500;

function ProjectCarousel() {
  const trackRef = useRef<HTMLDivElement>(null);
  const isPausedRef = useRef(false);
  const resumeTimeoutRef = useRef<ReturnType<typeof setTimeout>>();

  const pause = () => {
    isPausedRef.current = true;
    if (resumeTimeoutRef.current) clearTimeout(resumeTimeoutRef.current);
  };

  const resume = (delay = 0) => {
    if (resumeTimeoutRef.current) clearTimeout(resumeTimeoutRef.current);
    resumeTimeoutRef.current = setTimeout(() => {
      isPausedRef.current = false;
    }, delay);
  };

  const scrollByCard = (direction: 1 | -1) => {
    const track = trackRef.current;
    if (!track) return;
    const card = track.querySelector<HTMLElement>("[data-carousel-card]");
    const step = (card?.offsetWidth ?? 320) + 24; // card width + gap
    pause();
    track.scrollBy({ left: direction * step, behavior: "smooth" });
    resume(RESUME_DELAY_MS);
  };

  // Drift the carousel on its own, looping seamlessly, unless the user is
  // hovering, touching, or has just interacted with it.
  useEffect(() => {
    const track = trackRef.current;
    if (!track || projects.length <= 1) return;

    let rafId: number;

    const tick = () => {
      if (!isPausedRef.current) {
        const maxScroll = track.scrollWidth - track.clientWidth;
        if (maxScroll > 0) {
          track.scrollLeft =
            track.scrollLeft >= maxScroll - 1
              ? 0
              : track.scrollLeft + AUTO_SCROLL_SPEED;
        }
      }
      rafId = requestAnimationFrame(tick);
    };

    rafId = requestAnimationFrame(tick);
    return () => cancelAnimationFrame(rafId);
  }, []);

  return (
    <section className="relative mx-auto max-w-[1600px] px-8 pt-20 pb-24">
      {projects.length > 1 && (
        <>
          <button
            type="button"
            onClick={() => scrollByCard(-1)}
            onMouseEnter={pause}
            onMouseLeave={() => resume()}
            aria-label="Previous project"
            className="absolute left-2 top-[38%] z-10 hidden -translate-y-1/2 items-center justify-center rounded-full border border-border bg-background/90 p-2 shadow-sm backdrop-blur transition-colors hover:bg-secondary sm:flex"
          >
            <ChevronLeft size={20} />
          </button>
          <button
            type="button"
            onClick={() => scrollByCard(1)}
            onMouseEnter={pause}
            onMouseLeave={() => resume()}
            aria-label="Next project"
            className="absolute right-2 top-[38%] z-10 hidden -translate-y-1/2 items-center justify-center rounded-full border border-border bg-background/90 p-2 shadow-sm backdrop-blur transition-colors hover:bg-secondary sm:flex"
          >
            <ChevronRight size={20} />
          </button>
        </>
      )}

      <div
        ref={trackRef}
        onMouseEnter={pause}
        onMouseLeave={() => resume()}
        onTouchStart={pause}
        onTouchEnd={() => resume(RESUME_DELAY_MS)}
        onWheel={() => {
          pause();
          resume(RESUME_DELAY_MS);
        }}
        className="flex items-stretch gap-6 overflow-x-auto scroll-smooth pb-4 [scrollbar-width:none] [&::-webkit-scrollbar]:hidden"
      >
        {projects.map((project, i) => (
          <article
            key={project.title}
            data-carousel-card
            className="animate-rise-in flex w-[260px] shrink-0 flex-col sm:w-[320px] lg:w-[360px]"
            style={{ animationDelay: `${120 + i * 120}ms` }}
          >
            <a
              href={project.github}
              target="_blank"
              rel="noreferrer noopener"
              className="group block aspect-[4/3] w-full overflow-hidden rounded-2xl border border-border bg-card p-3"
            >
              <FadeImage
                src={project.image}
                alt={project.alt}
                loading="lazy"
                wrapperClassName="h-full w-full"
                className="h-full w-full object-contain transition-transform duration-700 ease-out group-hover:scale-[1.05]"
              />
            </a>
            <h3 className="mt-5 whitespace-pre-line text-2xl font-extrabold leading-tight tracking-tight sm:text-3xl">
              {project.title}
            </h3>
            <Link
              to="/projects"
              hash={project.slug}
              className="mt-auto inline-block w-fit rounded-full bg-primary px-6 py-2.5 text-xs font-semibold uppercase tracking-widest text-primary-foreground transition-opacity hover:opacity-90"
            >
              Learn More
            </Link>
          </article>
        ))}
      </div>
    </section>
  );
}