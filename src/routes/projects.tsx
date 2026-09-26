import type { ReactNode } from "react";
import { createFileRoute } from "@tanstack/react-router";
import { ExternalLink } from "lucide-react";
import { SiGithub, SiJupyter } from "react-icons/si";
import { SiteLayout } from "@/components/SiteLayout";
import { FadeImage } from "@/components/FadeImage";
import cacheChart from "@/assets/hit-rate-chart.png";
import transfusionResult from "@/assets/transfusion-hero.png";
import agrioptimaCover from "@/assets/agrioptima-cover.jpg";
import birdSpeciesCover from "@/assets/bird-species-cover.jpg";
import taskReceiptsCover from "@/assets/task-receipts-cover.png";
import animeRecommenderCover from "@/assets/anime-recommender-cover.png";

export const Route = createFileRoute("/projects")({
  head: () => ({
    meta: [
      { title: "Projects | Samiksha Tripathy" },
      {
        name: "description",
        content:
          "Stories behind my projects: the questions I explored, the decisions I made, and what the results taught me.",
      },
      { property: "og:title", content: "Projects | Samiksha Tripathy" },
      {
        property: "og:description",
        content: "Machine learning and systems projects by Samiksha Tripathy.",
      },
    ],
  }),
  component: Projects,
});

type IconLink = {
  href: string;
  label: string;
};

type Project = {
  slug: string;
  name: string;
  title: string;
  inProgress?: boolean;
  links: IconLink[];
  intro: string;
  image: string;
  imageWidth: number;
  imageHeight: number;
  imageAlt: string;
  caption: string;
  body: ReactNode[];
};

function ResearchLink({
  href,
  children,
}: {
  href: string;
  children: ReactNode;
}) {
  return (
    <a
      href={href}
      target="_blank"
      rel="noreferrer noopener"
      className="font-medium text-blue-600 underline decoration-blue-300 underline-offset-4 hover:text-blue-800 dark:text-blue-400 dark:hover:text-blue-300"
    >
      {children}
    </a>
  );
}

function ProjectIconLink({ href, label }: IconLink) {
  const isNotebook = label === "Notebook";
  const isGithub = label === "GitHub";

  return (
    <a
      href={href}
      target={isNotebook ? undefined : "_blank"}
      rel={isNotebook ? undefined : "noreferrer noopener"}
      aria-label={label}
      title={label}
      className="inline-flex h-10 shrink-0 items-center justify-center gap-2 whitespace-nowrap rounded-md px-2 text-xs font-medium transition-colors hover:bg-secondary focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-primary sm:text-sm"
    >
      {isGithub ? (
        <span className="flex h-6 w-6 items-center justify-center rounded-full bg-foreground text-background">
          <SiGithub size={14} />
        </span>
      ) : isNotebook ? (
        <SiJupyter size={22} />
      ) : (
        <ExternalLink size={22} className="text-muted-foreground" />
      )}
      <span>{label}</span>
    </a>
  );
}

const projects: Project[] = [
  {
    slug: "echofeather",
    name: "EchoFeather",
    title: "You hear the bird. But what is it?",
    inProgress: true,
    image: birdSpeciesCover,
    imageWidth: 1456,
    imageHeight: 1091,
    imageAlt: "EchoFeather, a bird species identification project cover",
    intro:
      "A bird call can be the only clue you get. EchoFeather explores how a recorded call or a photograph can turn that fleeting encounter into a possible identification.",
    caption:
      "A visual cover for the bird-identification project, currently in development.",
    body: [
      <>
        A clear photograph is not always available, and a sound alone can be
        difficult to identify. I’m building EchoFeather around{" "}
        <strong>
          two ways to recognize the same bird: a photograph or a recorded call
        </strong>
        . Both paths lead to three possible species with confidence scores,
        making uncertainty part of the experience instead of forcing a single
        answer.
      </>,
      <>
        The project is still in development, with the next step focused on
        comparing its performance against{" "}
        <ResearchLink href="https://birdnet.cornell.edu/">BirdNET</ResearchLink>
        . I want to understand where each input helps and where it falls short.
        The goal is <strong>a useful identification someone can assess</strong>,
        with alternatives they can explore when the evidence is unclear.
      </>,
    ],
    links: [{ label: "GitHub", href: "https://github.com/Sam02i/EchoFeather" }],
  },
  {
    slug: "cache-management",
    name: "Cache Eviction Research",
    title: "When a simpler cache policy holds its own",
    links: [
      {
        href: "/notebooks/cache_eviction_analysis.html",
        label: "Notebook",
      },
      {
        href: "https://github.com/Sam02i/Cache-Eviction-Analysis",
        label: "GitHub",
      },
    ],
    intro:
      "When a cache fills up, what should it forget? I explored whether a learned policy could make better eviction decisions than simple rules. The most useful result was a tradeoff: on this workload, the extra complexity bought very little.",
    image: cacheChart,
    imageWidth: 1050,
    imageHeight: 675,
    imageAlt:
      "Chart comparing hit rate vs cache size for LRU, LFU, and ML-based eviction",
    caption:
      "The comparison that shaped the conclusion: frequency tracking and the learned policy achieved similar hit rates as cache size increased.",
    body: [
      <>
        I compared{" "}
        <ResearchLink href="https://redis.io/docs/latest/develop/reference/eviction/">
          recency-based and frequency-based eviction
        </ResearchLink>{" "}
        with a learned policy on a synthetic workload dominated by a small
        number of popular items. At a cache size of 10, the frequency-based
        policy achieved{" "}
        <strong>56.1% hit rate versus 55.9% for the model</strong>, while being
        roughly <strong>14,000 times faster per eviction decision</strong> in
        this experiment. A burst of sequential accesses also let me explore what
        happens when the usual access pattern is interrupted.
      </>,
      <>
        The result changed the emphasis of the project:{" "}
        <strong>extra model complexity needs to earn its place</strong>.
        Frequency tracking held up well when popularity stayed stable; shifting
        workloads remain a question for further testing. Because the learned
        policy uses oracle look-ahead features, this is an offline experiment
        rather than a deployable cache benchmark. That boundary matters as much
        as the score.
      </>,
    ],
  },
  {
    slug: "transfusion-need",
    name: "Transfusion Risk Checker",
    title: "Learning to question a promising prediction",
    links: [
      {
        href: "/notebooks/Pred_Analytics_for_Transfusion.html",
        label: "Notebook",
      },
      {
        href: "https://github.com/Sam02i/Predictive-Analytics-for-Transfusion-Need",
        label: "GitHub",
      },
      {
        href: "https://predictive-analytics-for-transfusion-need-2vz8ssdal.vercel.app",
        label: "Live Demo",
      },
    ],
    intro:
      "Could routine patient measurements help estimate transfusion need? Working with a demo dataset of 206 patients, I found that the harder problem was making the evaluation trustworthy. This project became a story about questioning the data before trusting the score.",
    image: transfusionResult,
    imageWidth: 1800,
    imageHeight: 1019,
    imageAlt:
      "Landing page for the Transfusion Risk Checker, a portfolio ML demo predicting transfusion risk from clinical vitals",
    caption:
      "The browser-based demo makes the model’s output explorable. It is a portfolio experiment, not a clinical decision tool.",
    body: [
      <>
        Working with <strong>206 patients and only 14 positive cases</strong>, I
        uncovered two rounds of{" "}
        <ResearchLink href="https://scikit-learn.org/stable/common_pitfalls.html#data-leakage">
          data leakage
        </ResearchLink>{" "}
        and a database join that multiplied rows. I traced the join to a missing
        row key, reduced the data to one row per patient stay, and excluded
        columns that defined the predicted outcome. The important work became{" "}
        <strong>making the evaluation trustworthy</strong> before comparing
        models.
      </>,
      <>
        I kept oversampling inside each validation fold and used{" "}
        <ResearchLink href="https://scikit-learn.org/stable/modules/cross_validation.html">
          stratified cross-validation
        </ResearchLink>
        . Average ROC-AUC scores of 0.791 and 0.812 did not justify a clear
        winner on such a small sample. I then exported the fitted model to run
        in the browser, where visitors can explore its predictions and
        limitations. The takeaway was to{" "}
        <strong>show uncertainty alongside the result</strong>, including
        unexpected changes as heart rate varies. This remains a portfolio
        experiment, not a clinical decision tool.
      </>,
    ],
  },
  {
    slug: "agrioptima-ai",
    name: "AgriOptima AI",
    title: "Making the journey from farm to buyer visible",
    links: [
      { label: "SIH brief", href: "https://www.sih.gov.in/sih2026PS" },
      {
        href: "https://github.com/Sam02i/agrioptima-ai",
        label: "GitHub",
      },
      {
        href: "https://agrioptima-ai.vercel.app/",
        label: "Live Demo",
      },
    ],
    intro:
      "For a farmer, preparing produce is only part of the journey. Our SIH 2026 team project takes on the uncertainty around what happens next: finding a buyer, following an order, and seeing its progress.",
    image: agrioptimaCover,
    imageWidth: 1800,
    imageHeight: 912,
    imageAlt:
      "AgriOptima AI landing page, a smart farming platform for crop recommendations",
    caption:
      "AgriOptima’s public-facing landing page, leading into farmer and buyer workspaces.",
    body: [
      <>
        The{" "}
        <ResearchLink href="https://www.sih.gov.in/sih2026PS">
          SIH 2026 problem statement, SIH26032
        </ResearchLink>
        , highlights farmers’ long waits, unclear procurement schedules, and
        uncertainty about procurement status. It calls for registration, arrival
        slots, live queues, notifications, and procurement and payment tracking.
        Our team’s work centres on{" "}
        <strong>
          making the journey from farmer to buyer easier to follow
        </strong>
        , connecting guidance, produce listings, buyer comparisons, and orders
        in one workflow.
      </>,
      <>
        Shared records help both sides see what has happened, while visible
        sources distinguish confirmed information from estimates. The current
        project includes{" "}
        <strong>
          farmer and buyer workspaces with order, shipment, inspection, and
          payment visibility
        </strong>
        . Slot booking, live queues, and notifications remain requirements of
        the brief rather than features claimed as complete here. The design
        question throughout is whether someone can understand the next step and
        the evidence behind it.
      </>,
    ],
  },
  {
    slug: "task-receipts",
    name: "Task Receipts",
    title: "A finished task deserves more than a disappearing checkbox.",
    image: taskReceiptsCover,
    imageWidth: 1800,
    imageHeight: 1019,
    imageAlt:
      "Task Receipts, a retro receipt-printer styled session and task tracker",
    intro:
      "A to-do list keeps your unfinished work in view. Task Receipts gives completed work a moment of its own: a focus session ends with a printable record of what you did.",
    caption:
      "The receipt-inspired interface turns a session summary into a keepsake.",
    body: [
      <>
        When a task list keeps the focus on what is left, completed work can be
        easy to overlook. I built the experience around{" "}
        <strong>a focus session that ends with a printable receipt</strong>:
        track tasks, run the timer, and leave with a record of what happened.
        The receipt-printer idea carries through paper colors, dot-matrix
        filters, and themes, giving the end of a session its own visual
        identity.
      </>,
      <>
        The live tool turns a routine summary into{" "}
        <strong>something you can keep after the session ends</strong>. Its
        value is in how those small interactions fit together: starting with a
        task, staying with a timed session, and finishing with a clear record of
        progress. The design makes completion a visible part of the experience
        rather than letting it disappear with a checked box.
      </>,
    ],
    links: [
      { label: "Live Demo", href: "https://task-receipts-phi.vercel.app/" },
      { label: "GitHub", href: "https://github.com/Sam02i/Task-Receipts" },
    ],
  },
  {
    slug: "anime-recommender",
    name: "Anime Recommender",
    title: "Less time choosing. More time watching.",
    image: animeRecommenderCover,
    imageWidth: 1200,
    imageHeight: 900,
    imageAlt:
      "Anime Recommender, a full-stack recommendation platform using AniList and MyAnimeList APIs",
    intro:
      "An endless catalog can make choosing the next anime feel like work. Anime Recommender starts with viewer preferences to help narrow that decision.",
    caption:
      "The recommendation interface brings preferences and anime catalog data together.",
    body: [
      <>
        A large catalog is only useful if someone can find a starting point. I
        connected viewer preferences with live information from{" "}
        <ResearchLink href="https://anilist.co/">AniList</ResearchLink> and{" "}
        <ResearchLink href="https://myanimelist.net/">MyAnimeList</ResearchLink>
        , bringing discovery into one interface. The aim is{" "}
        <strong>
          to turn a broad catalog into a more relevant next choice
        </strong>
        , without making the viewer piece together information across services.
      </>,
      <>
        The resulting platform offers{" "}
        <strong>personalized recommendations grounded in those catalogs</strong>
        . The repository shows how the interface and data integrations come
        together, with user preferences guiding the experience. There is no
        public demo linked yet, so the code is the available way to explore the
        project and the decisions behind it.
      </>,
    ],
    links: [
      { label: "GitHub", href: "https://github.com/Sam02i/Anime-Recommender" },
    ],
  },
];

function Projects() {
  return (
    <SiteLayout>
      <section className="mx-auto max-w-5xl px-6 pb-24 pt-16 sm:px-8">
        <h1 className="animate-rise-in text-5xl font-extrabold tracking-tight sm:text-7xl">
          Projects.
        </h1>
        <div className="mt-16 space-y-20">
          {projects.map((project) => (
            <article
              key={project.slug}
              id={project.slug}
              className="scroll-mt-12 border-t border-border pt-8"
            >
              <div className="flex flex-col gap-3 sm:flex-row sm:items-center sm:justify-between sm:gap-6">
                <div className="flex min-w-0 flex-wrap items-center gap-3">
                  <h2 className="text-2xl font-bold tracking-tight sm:text-3xl">
                    {project.name}
                  </h2>
                  {project.inProgress && (
                    <span className="rounded-full border border-border px-3 py-1 text-xs text-muted-foreground">
                      In progress
                    </span>
                  )}
                </div>
                <nav
                  aria-label={`${project.name} resources`}
                  className="ml-auto flex shrink-0 flex-nowrap items-center justify-end gap-1 sm:gap-2"
                >
                  {project.links.map((link) => (
                    <ProjectIconLink key={link.label} {...link} />
                  ))}
                </nav>
              </div>
              <p className="mt-5 text-xl font-semibold leading-snug tracking-tight sm:text-2xl">
                {project.title}
              </p>
              <p className="mt-4 text-base leading-relaxed text-foreground/80 sm:text-lg">
                {project.intro}
              </p>
              <figure className="mt-7">
                <div className="overflow-hidden rounded-2xl border border-border bg-card p-3 sm:p-5">
                  <FadeImage
                    src={project.image}
                    alt={project.imageAlt}
                    width={project.imageWidth}
                    height={project.imageHeight}
                    loading="lazy"
                    wrapperClassName="aspect-[16/9] w-full"
                    className="h-full w-full object-contain"
                  />
                </div>
                <figcaption className="mt-3 text-sm leading-relaxed text-muted-foreground">
                  {project.caption}
                </figcaption>
              </figure>
              <div className="mt-7 space-y-5 text-base leading-8 text-foreground/80 [&_strong]:font-semibold [&_strong]:text-foreground">
                {project.body.map((paragraph, index) => (
                  <p key={index}>{paragraph}</p>
                ))}
              </div>
            </article>
          ))}
        </div>
      </section>
    </SiteLayout>
  );
}
