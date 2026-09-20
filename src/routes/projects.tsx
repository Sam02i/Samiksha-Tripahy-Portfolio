import { createFileRoute } from "@tanstack/react-router";
import { ExternalLink } from "lucide-react";
import { SiGithub, SiJupyter } from "react-icons/si";
import type { ReactNode } from "react";
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
          "Machine learning and systems projects by Samiksha Tripathy: cache eviction policy analysis, transfusion risk prediction, a crop recommendation backend, and more.",
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

type WriteupProject = {
  kind: "writeup";
  slug: string;
  title: string;
  icons: IconLink[];
  intro: ReactNode;
  image: string;
  imageWidth: number;
  imageHeight: number;
  imageAlt: string;
  caption: string;
  body: ReactNode[];
};

type SimpleProject = {
  kind: "simple";
  slug: string;
  title: string;
  /** Set when the project is still being built: shows an "In Progress" badge instead of live links. */
  inProgress?: boolean;
  image: string;
  imageWidth: number;
  imageHeight: number;
  alt: string;
  description: ReactNode;
  links: IconLink[];
};

// Inline hyperlink for use inside project text, for calling out the specific
// dataset, API, or library a paragraph mentions (e.g. "PyTorch", "AGMARKNET").
function InlineLink({ href, children }: { href: string; children: ReactNode }) {
  return (
    <a
      href={href}
      target="_blank"
      rel="noreferrer noopener"
      className="font-medium text-blue-600 underline underline-offset-2 hover:text-blue-800 dark:text-blue-400 dark:hover:text-blue-300"
    >
      {children}
    </a>
  );
}

// Renders a single icon-link in a project's header, using the real brand
// mark for GitHub (badged in a solid circle) and Jupyter (its natural
// orange rings), and a plain external-link glyph for anything else
// (e.g. "Live Demo").
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
      className="shrink-0 transition-opacity hover:opacity-75"
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
    </a>
  );
}

const projects: (WriteupProject | SimpleProject)[] = [
  {
    kind: "simple",
    slug: "echofeather",
    title: "EchoFeather",
    inProgress: true,
    image: birdSpeciesCover,
    imageWidth: 1456,
    imageHeight: 1091,
    alt: "EchoFeather, a bird species identification project cover",
    description: (
      <>
        A multimodal deep learning system that identifies bird species from both photographs and
        recorded bird calls: a fine-tuned CNN for images, and a mel-spectrogram CNN for audio
        built on <InlineLink href="https://xeno-canto.org/">Xeno-Canto</InlineLink> recordings,
        benchmarked against the open-source{" "}
        <InlineLink href="https://birdnet.cornell.edu/">BirdNET</InlineLink> baseline. Built with{" "}
        <InlineLink href="https://pytorch.org/">PyTorch</InlineLink> and deployed behind a{" "}
        <strong className="font-semibold text-foreground">FastAPI</strong> inference endpoint that
        returns <strong className="font-semibold text-foreground">top-3 predictions</strong> with
        confidence scores.
      </>
    ),
    links: [
      { label: "GitHub", href: "https://github.com/Sam02i/EchoFeather" },
    ],
  },
  {
    kind: "writeup",
    slug: "cache-management",
    title: "Cache Eviction Policy Analysis: LRU vs LFU vs ML",
    icons: [
      {
        href: "/notebooks/cache_eviction_analysis.html",
        label: "Notebook",
      },
      {
        href: "https://github.com/Sam02i/Cache-Eviction-Analysis",
        label: "GitHub",
      },
    ],
    intro: (
      <>
        A head-to-head comparison of classic cache eviction policies (LRU, LFU) against a learned
        policy: a{" "}
        <strong className="font-semibold text-foreground">200-tree Random Forest</strong> trained
        on oracle look-ahead features as an offline approximation of{" "}
        <InlineLink href="https://en.wikipedia.org/wiki/Cache_replacement_policies#B%C3%A9l%C3%A1dy's_algorithm">
          Belady&rsquo;s algorithm
        </InlineLink>
        , benchmarked on a synthetic{" "}
        <InlineLink href="https://en.wikipedia.org/wiki/Zipf%27s_law">Zipfian</InlineLink> access
        trace. The interesting question here isn&rsquo;t whether ML wins; it&rsquo;s exactly when
        the extra model complexity is worth paying for, and when it clearly isn&rsquo;t.
      </>
    ),
    image: cacheChart,
    imageWidth: 1050,
    imageHeight: 675,
    imageAlt: "Chart comparing hit rate vs cache size for LRU, LFU, and ML-based eviction",
    caption:
      "Hit rate vs. cache size across all three policies. LRU trails throughout, while LFU and ML stay nearly tied; the ML model's small edge at tiny cache sizes fades away as the cache grows.",
    body: [
      <>
        At cache size 10, LFU edges out the model on hit rate (
        <strong className="font-semibold text-foreground">0.561 vs 0.559</strong>) while being
        roughly <strong className="font-semibold text-foreground">14,000× faster</strong> per
        eviction decision: a frequency-count lookup versus a full model prediction. On a
        Zipf-distributed trace, a small number of items dominate traffic, so simple frequency
        tracking is already a strong signal; the learned model&rsquo;s advantage only shows up at
        very small cache sizes, where every eviction decision counts most.
      </>,
      <>
        The trace was split{" "}
        <strong className="font-semibold text-foreground">80/20 into train/test</strong> before
        any feature engineering to avoid leakage, with a synthetic sequential-scan burst injected
        specifically to test scan resistance, a known weak point for history-based ML eviction.
        The takeaway: frequency-based policies are hard to beat on stable, Zipf-like workloads;
        ML eviction becomes more interesting on non-stationary traces where popularity shifts over
        time.
      </>,
    ],
  },
  {
    kind: "writeup",
    slug: "transfusion-need",
    title: "Predictive Analytics for Transfusion Need",
    icons: [
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
      "A small-data ML pipeline predicting blood transfusion need from six routine patient vitals (heart rate, respiratory rate, oxygen saturation, blood pressure, and sex), built on a 206-patient demo dataset with only 14 positive cases. What makes this project worth a look isn't a headline accuracy number, it's the debugging journey: two separate rounds of data leakage found and fixed, a database join-explosion bug traced back to a missing row key, and every result reported with honest cross-validated uncertainty instead of one cherry-picked score.",
    image: transfusionResult,
    imageWidth: 1800,
    imageHeight: 1019,
    imageAlt: "Landing page for the Transfusion Risk Checker, a portfolio ML demo predicting transfusion risk from clinical vitals",
    caption:
      "The live Transfusion Risk Checker landing page: a Random Forest model predicting transfusion risk from clinical vitals, running entirely client-side in the browser.",
    body: [
      <>
        Vitals were pulled from MySQL and aggregated to one row per patient stay, with
        label-defining columns explicitly excluded from the feature set to prevent leakage. Class
        imbalance (<strong className="font-semibold text-foreground">14 positives out of 206</strong>)
        was handled with{" "}
        <InlineLink href="https://imbalanced-learn.org/stable/references/generated/imblearn.over_sampling.SMOTE.html">
          SMOTE
        </InlineLink>{" "}
        applied inside each cross-validation fold (never on the full dataset beforehand), and{" "}
        <strong className="font-semibold text-foreground">Random Forest</strong> and{" "}
        <strong className="font-semibold text-foreground">Logistic Regression</strong> were
        compared under stratified 5-fold CV, scoring 0.791 and 0.812 mean ROC-AUC respectively.
        With a sample this small, the gap between them isn&rsquo;t statistically decisive, and the
        project reports that honestly rather than declaring a winner.
      </>,
      <>
        The final model was refit on the full dataset and exported via{" "}
        <InlineLink href="https://github.com/BayesWitnesses/m2cgen">m2cgen</InlineLink> to run
        entirely in the browser. The interactive demo above is the real model, not a mockup, and
        it openly discloses known quirks like non-monotonic behavior on heart rate rather than
        hiding them.
      </>,
    ],
  },
  {
    kind: "writeup",
    slug: "agrioptima-ai",
    title: "AgriOptima AI: Crop Recommendation Backend",
    icons: [
      {
        href: "https://github.com/Sam02i/agrioptima-ai",
        label: "GitHub",
      },
      {
        href: "https://agrioptima-ai.vercel.app/",
        label: "Live Demo",
      },
    ],
    intro: (
      <>
        A team project building a crop recommendation backend that helps a farmer choose a viable
        crop: deterministic agronomic eligibility first (season, soil pH, water, budget, crop
        rotation), then a transparent, source-labelled{" "}
        <strong className="font-semibold text-foreground">0–100 scoring system</strong> layered on
        top. Live weather and market data can influence the ranking, but can never override a hard
        agronomic rejection.
      </>
    ),
    image: agrioptimaCover,
    imageWidth: 1800,
    imageHeight: 912,
    imageAlt: "AgriOptima AI landing page, a smart farming platform for crop recommendations",
    caption: "The live AgriOptima AI landing page: the platform's public-facing frontend.",
    body: [
      <>
        Given a farmer&rsquo;s soil, irrigation, season, budget, and location, the system runs six
        candidate crops through{" "}
        <strong className="font-semibold text-foreground">hard eligibility rules</strong>, rejects
        the ones that fail with plain-language reasons, then scores the remaining eligible crops
        using a fixed-weight formula covering soil fit, climate fit, water fit, and market
        factors. Live weather comes from{" "}
        <InlineLink href="https://open-meteo.com/">Open-Meteo</InlineLink> and mandi price data
        from{" "}
        <InlineLink href="https://agmarknet.gov.in/">data.gov.in / AGMARKNET</InlineLink>, and
        when either is unavailable, the system falls back to a clearly labelled neutral estimate
        instead of guessing.
      </>,
      <>
        The backend (data models, the eligibility engine, the scoring formula, and both external
        data adapters) is built and covered by automated tests using a{" "}
        <strong className="font-semibold text-foreground">FastAPI</strong> service layer over a
        Dockerized PostgreSQL database; the API endpoint and frontend are still{" "}
        <strong className="font-semibold text-foreground">in progress</strong>.
      </>,
    ],
  },
  {
    kind: "simple",
    slug: "task-receipts",
    title: "Task Receipts",
    image: taskReceiptsCover,
    imageWidth: 1800,
    imageHeight: 1019,
    alt: "Task Receipts, a retro receipt-printer styled session and task tracker",
    description: (
      <>
        A playful productivity tool styled like a retro receipt printer: track ongoing and
        completed tasks, run{" "}
        <strong className="font-semibold text-foreground">timed focus sessions</strong>, and print
        out a session summary receipt at the end, complete with customizable paper colors,
        dot-matrix filters, and app themes.
      </>
    ),
    links: [
      { label: "Live Demo", href: "https://task-receipts-phi.vercel.app/" },
      { label: "GitHub", href: "https://github.com/Sam02i/Task-Receipts" },
    ],
  },
  {
    kind: "simple",
    slug: "anime-recommender",
    title: "Anime Recommender",
    image: animeRecommenderCover,
    imageWidth: 1200,
    imageHeight: 900,
    alt: "Anime Recommender, a full-stack recommendation platform using AniList and MyAnimeList APIs",
    description: (
      <>
        A full-stack anime recommendation platform with a{" "}
        <strong className="font-semibold text-foreground">React</strong> front end, integrating
        live data from the <InlineLink href="https://anilist.co/">AniList</InlineLink> and{" "}
        <InlineLink href="https://myanimelist.net/">MyAnimeList</InlineLink> (MAL) APIs to deliver
        personalized, real-time recommendations based on user preferences.
      </>
    ),
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

        <div className="mt-14 space-y-24">
          {projects.map((project, i) =>
            project.kind === "writeup" ? (
              <article
                key={project.title}
                id={project.slug}
                className="animate-rise-in mx-auto max-w-4xl scroll-mt-24"
                style={{ animationDelay: `${120 + i * 120}ms` }}
              >
                <div className="flex flex-wrap items-center justify-between gap-4">
                  <h2 className="text-2xl font-bold tracking-tight sm:text-3xl">{project.title}</h2>
                  <div className="flex shrink-0 items-center gap-3">
                    {project.icons.map((iconLink) => (
                      <ProjectIconLink key={iconLink.label} {...iconLink} />
                    ))}
                  </div>
                </div>

                <p className="mt-4 text-sm leading-relaxed text-foreground/80">{project.intro}</p>

                <div className="group mt-6 overflow-hidden rounded-2xl border border-border bg-card p-4">
                  <FadeImage
                    src={project.image}
                    alt={project.imageAlt}
                    width={project.imageWidth}
                    height={project.imageHeight}
                    loading="lazy"
                    wrapperClassName="aspect-[16/9] w-full rounded-lg"
                    className="h-full w-full rounded-lg object-contain transition-transform duration-700 ease-out group-hover:scale-[1.04]"
                  />
                </div>
                <p className="mt-3 text-center text-xs italic text-muted-foreground">
                  {project.caption}
                </p>

                {project.body.map((paragraph, pi) => (
                  <p key={pi} className="mt-4 text-sm leading-relaxed text-foreground/80">
                    {paragraph}
                  </p>
                ))}
              </article>
            ) : (
              <article
                key={project.title}
                id={project.slug}
                className="animate-rise-in mx-auto max-w-4xl scroll-mt-24"
                style={{ animationDelay: `${120 + i * 120}ms` }}
              >
                <div className="relative flex items-center justify-center gap-3">
                  <h2 className="text-center text-2xl font-semibold tracking-tight sm:text-3xl">
                    {project.title}
                  </h2>
                  {project.inProgress && (
                    <span className="rounded-full border border-border bg-secondary px-3 py-1 text-[10px] font-semibold uppercase tracking-widest text-muted-foreground">
                      In Progress
                    </span>
                  )}
                  {project.links.length > 0 && (
                    <div className="absolute right-0 flex items-center gap-3">
                      {project.links.map((link) => (
                        <ProjectIconLink key={link.label} {...link} />
                      ))}
                    </div>
                  )}
                </div>
                <div className="group mt-6 overflow-hidden rounded-2xl border border-border bg-card shadow-sm">
                  <FadeImage
                    src={project.image}
                    alt={project.alt}
                    width={project.imageWidth}
                    height={project.imageHeight}
                    loading="lazy"
                    wrapperClassName="aspect-[16/9] w-full"
                    className="h-full w-full object-cover transition-transform duration-700 ease-out group-hover:scale-[1.04]"
                  />
                </div>
                <p className="mt-6 text-sm leading-relaxed text-foreground/80">
                  {project.description}
                </p>
              </article>
            ),
          )}
        </div>
      </section>
    </SiteLayout>
  );
}