import type { ReactNode } from "react";
import { createFileRoute } from "@tanstack/react-router";
import { ExternalLink } from "lucide-react";
import { SiGithub, SiJupyter } from "react-icons/si";
import { SiteLayout } from "@/components/SiteLayout";
import { FadeImage } from "@/components/FadeImage";
import cacheChart from "@/assets/hit-rate-chart.webp";
import transfusionResult from "@/assets/transfusion-hero.webp";
import agrioptimaCover from "@/assets/agrioptima-cover.webp";
import birdFinderCover from "@/assets/birdfinder-cover.webp";
import taskReceiptsCover from "@/assets/task-receipts-cover.webp";
import animeRecommenderCover from "@/assets/anime-recommender-cover.webp";
import loreLabCover from "@/assets/lore-lab-cover.webp";

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
      className="inline-flex min-h-11 shrink-0 items-center justify-center gap-2 whitespace-nowrap rounded-md px-1.5 text-xs font-medium transition-colors hover:bg-secondary focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-primary sm:text-sm"
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
    slug: "lore-lab",
    name: "Lore Lab",
    title: "A weather saying looked convincing. Then I checked the monsoon.",
    image: loreLabCover,
    imageWidth: 1657,
    imageHeight: 949,
    imageAlt:
      "Lore Lab frontend, with a chalkboard-style interface for testing weather sayings",
    intro:
      "I built Lore Lab to turn weather folklore into testable claims. The harder part was deciding whether a saying added information beyond the weather that was likely anyway.",
    caption:
      "The Lore Lab homepage, where visitors can enter a weather saying or try an example.",
    body: [
      <>
        I separated interpretation from evaluation:{" "}
        <strong>
          the language model proposes a hypothesis, the user approves its
          thresholds, and code scores it
        </strong>
        . Ten years of weather data provide the comparison; signs that weather
        instruments cannot observe go into a separate field notebook. That keeps
        an appealing explanation from becoming its own evidence.
      </>,
      <>
        In the Delhi south-wind test, rain followed{" "}
        <strong>128 of 303 sign-present days: a 42% hit rate</strong>. The
        overall rain baseline was 19%, but rose to 30% when matched by month.
        Accounting for season reduced the apparent lift from about{" "}
        <strong>2.2× to 1.4×</strong>. The result stayed promising, with limits:
        one city, a rough proxy, modelled weather, and correlated days. The
        original scorecard and season check are documented in the repository.
      </>,
    ],
    links: [
      { label: "Live Demo", href: "https://lore-lab.onrender.com/" },
      { label: "GitHub", href: "https://github.com/Sam02i/Lore-Lab" },
    ],
  },
  {
    slug: "echofeather",
    name: "BirdFinder",
    title: "From a photo or a call to five possible birds.",
    image: birdFinderCover,
    imageWidth: 2902,
    imageHeight: 1674,
    imageAlt:
      "BirdFinder homepage with a mosaic bird and photo and sound identification navigation",
    intro:
      "I built BirdFinder’s photo and audio identification experience around a practical question: how do you present a useful suggestion when a model can still be wrong?",
    caption:
      "The live BirdFinder homepage, with photo and sound identification paths.",
    body: [
      <>
        The app connects photo uploads and recorded calls to separate models,
        with previews, playback, and{" "}
        <strong>five ranked species suggestions</strong>. The photo model
        supports 20 species and the audio model 19. For audio training,
        recordings were split before spectrogram generation, keeping chunks of
        the same recording out of different splits.
      </>,
      <>
        On <strong>80 readable test recordings</strong>, audio achieved{" "}
        <strong>30% top-1 and 66.25% top-5 accuracy</strong>; one short
        recording was skipped. These are experimental results, not field
        reliability. The scores are uncalibrated model outputs, and an
        unsupported species can still receive a confident match. A{" "}
        <ResearchLink href="https://birdnet.cornell.edu/">BirdNET</ResearchLink>{" "}
        comparison has not yet been run. The live demo makes the interface
        explorable while the local evaluation gives its performance a concrete
        boundary.
      </>,
    ],
    links: [
      { label: "GitHub", href: "https://github.com/Sam02i/EchoFeather" },
      { label: "Live Demo", href: "https://birdfinder-aohu.onrender.com/" },
    ],
  },
  {
    slug: "agrioptima-ai",
    name: "AgriOptima AI",
    title: "Connecting soil advice to the rest of a farmer’s workflow.",
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
      "As backend lead for our SIH 2026 team, I built the soil recommendation engine and connected the models into the wider AgriOptima application.",
    image: agrioptimaCover,
    imageWidth: 1800,
    imageHeight: 912,
    imageAlt:
      "AgriOptima AI landing page, a smart farming platform for crop recommendations",
    caption:
      "AgriOptima’s public-facing landing page, leading into farmer and buyer workspaces.",
    body: [
      <>
        My responsibility was{" "}
        <strong>the soil recommendation engine and model integration</strong>.
        The backend brings that work into a shared farmer-and-buyer workflow
        with guidance, listings, orders, and delivery records. A key design
        choice is to distinguish confirmed information, external data, model
        predictions, and estimates so users can understand the evidence behind
        the advice.
      </>,
      <>
        Our{" "}
        <ResearchLink href="https://www.sih.gov.in/sih2026PS">
          SIH26032 brief
        </ResearchLink>{" "}
        addresses long waits and unclear procurement status. The current
        application provides{" "}
        <strong>order, shipment, inspection, and payment visibility</strong>;
        the soil engine supports the broader farmer workflow. Arrival-slot
        booking, live queues, and notifications are separate brief requirements,
        not completed features claimed here. This makes the connection to the
        challenge—and the remaining work—explicit.
      </>,
    ],
  },
  {
    slug: "cache-management",
    name: "Cache Eviction Research",
    title: "A simpler policy matched the model—and made decisions faster.",
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
      "I tested whether learned cache eviction earned its extra complexity. On this synthetic workload, frequency tracking was both competitive and much cheaper per decision.",
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
        with a learned policy on a trace dominated by a few popular items. At
        cache size 10, frequency tracking achieved{" "}
        <strong>56.1% hit rate versus 55.9% for the model</strong>, with roughly{" "}
        <strong>14,000× faster eviction decisions</strong> in this experiment. I
        also introduced a sequential-access burst to examine how the policies
        handled an interruption.
      </>,
      <>
        The result supports a specific engineering choice:{" "}
        <strong>
          start with the inexpensive baseline when popularity is stable
        </strong>
        . It does not establish performance on shifting real-world traffic. The
        learned policy uses oracle look-ahead features, making this an offline
        comparison rather than a production-ready benchmark. The notebook and
        chart expose both the result and the scope of that conclusion.
      </>,
    ],
  },
  {
    slug: "transfusion-need",
    name: "Transfusion Risk Checker",
    title: "The most important result was finding the leakage.",
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
      "I built a transfusion-risk experiment from routine patient measurements, then traced misleading results back to the data pipeline before trusting the model comparison.",
    image: transfusionResult,
    imageWidth: 1800,
    imageHeight: 1019,
    imageAlt:
      "Landing page for the Transfusion Risk Checker, a portfolio ML demo predicting transfusion risk from clinical vitals",
    caption:
      "The browser-based demo makes the model’s output explorable. It is a portfolio experiment, not a clinical decision tool.",
    body: [
      <>
        The demo dataset contained{" "}
        <strong>206 patients, with only 14 positive cases</strong>. I found two
        rounds of{" "}
        <ResearchLink href="https://scikit-learn.org/stable/common_pitfalls.html#data-leakage">
          data leakage
        </ResearchLink>{" "}
        and a join that multiplied rows. Fixing the missing row key, aggregating
        to one row per stay, and excluding outcome-defining columns made the
        evaluation more defensible.
      </>,
      <>
        I kept oversampling inside each fold of{" "}
        <ResearchLink href="https://scikit-learn.org/stable/modules/cross_validation.html">
          stratified cross-validation
        </ResearchLink>
        . Mean ROC-AUC scores of 0.791 and 0.812 were too close to declare a
        winner on this small sample. I exported the fitted model to JavaScript
        for a <strong>working browser demo</strong>, with its uncertainty and
        unexpected heart-rate behaviour disclosed. It demonstrates the pipeline;
        it is not a clinical decision tool.
      </>,
    ],
  },
  {
    slug: "task-receipts",
    name: "Task Receipts",
    title: "Make completed work visible.",
    image: taskReceiptsCover,
    imageWidth: 1800,
    imageHeight: 1019,
    imageAlt:
      "Task Receipts, a retro receipt-printer styled session and task tracker",
    intro:
      "I built Task Receipts around the end of a focus session: a timer stops, completed tasks become a receipt, and the user leaves with a record of their work.",
    caption:
      "The receipt-inspired interface turns a session summary into a keepsake.",
    body: [
      <>
        I connected{" "}
        <strong>task tracking, timed sessions, and a printable summary</strong>{" "}
        in a single flow. The receipt-printer styling carries through paper
        colors, dot-matrix filters, and themes, so the visual idea follows the
        interaction rather than stopping at a landing page.
      </>,
      <>
        The live demo shows the full journey from a task to its session receipt.
        It is a finished interaction someone can try, rather than a claim of
        measured productivity gains. The project demonstrates{" "}
        <strong>
          turning a small product idea into a coherent working experience
        </strong>
        .
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
    title: "Turn a large catalog into a manageable next choice.",
    image: animeRecommenderCover,
    imageWidth: 1200,
    imageHeight: 900,
    imageAlt:
      "Anime Recommender, a full-stack recommendation platform using AniList and MyAnimeList APIs",
    intro:
      "I built a recommendation interface that starts with viewer preferences and brings anime catalog information into one place.",
    caption:
      "The recommendation interface brings preferences and anime catalog data together.",
    body: [
      <>
        I integrated{" "}
        <ResearchLink href="https://anilist.co/">AniList</ResearchLink> and{" "}
        <ResearchLink href="https://myanimelist.net/">MyAnimeList</ResearchLink>{" "}
        data with the interface to support{" "}
        <strong>preference-based discovery</strong>. The task was to connect
        those sources into a usable browsing experience so viewers could explore
        recommendations without assembling the information themselves.
      </>,
      <>
        The repository is the available evidence for the implementation; there
        is no public demo linked yet. This project shows{" "}
        <strong>interface development and API integration</strong>.
        Recommendation quality has not been quantified here, so the story stays
        focused on what was built.
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
      <section className="mx-auto max-w-5xl px-4 pb-24 pt-12 sm:px-8 sm:pt-16">
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
              <div className="flex flex-col gap-3 lg:flex-row lg:items-center lg:justify-between lg:gap-6">
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
                    decoding="async"
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
