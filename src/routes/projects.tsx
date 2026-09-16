import { createFileRoute } from "@tanstack/react-router";
import { Github, FileText, ExternalLink } from "lucide-react";
import { SiteLayout } from "@/components/SiteLayout";
import cacheChart from "@/assets/hit-rate-chart.png";
import transfusionResult from "@/assets/transfusion-hero.png";
import agrioptimaCover from "@/assets/agrioptima-cover.png";
import taskReceiptsCover from "@/assets/task-receipts-cover.png";
import animeRecommenderCover from "@/assets/anime-recommender-cover.png";

export const Route = createFileRoute("/projects")({
  head: () => ({
    meta: [
      { title: "Projects — Samiksha Tripathy" },
      {
        name: "description",
        content:
          "Machine learning and systems projects by Samiksha Tripathy: cache eviction policy analysis, transfusion risk prediction, a crop recommendation backend, and more.",
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

type IconLink = {
  icon: typeof Github;
  href: string;
  label: string;
};

type WriteupProject = {
  kind: "writeup";
  slug: string;
  title: string;
  icons: IconLink[];
  intro: string;
  image: string;
  imageWidth: number;
  imageHeight: number;
  imageAlt: string;
  caption: string;
  body: string[];
};

type SimpleProject = {
  kind: "simple";
  slug: string;
  title: string;
  image: string;
  imageWidth: number;
  imageHeight: number;
  alt: string;
  description: string;
  links: { label: string; href: string }[];
};

const projects: (WriteupProject | SimpleProject)[] = [
  {
    kind: "simple",
    slug: "bird-species-identification",
    title: "Bird Species Identification from Images and Audio",
    // TODO: add a real cover image — reusing cacheChart as a placeholder for now.
    image: cacheChart,
    imageWidth: 1050,
    imageHeight: 675,
    alt: "Bird Species Identification from Images and Audio project cover",
    description:
      "A multimodal deep learning system that identifies bird species from both photographs and recorded bird calls — a fine-tuned CNN for images, and a mel-spectrogram CNN for audio built from Xeno-Canto recordings, benchmarked against the open-source BirdNET baseline and deployed with a FastAPI inference endpoint returning top-3 predictions with confidence scores.",
    links: [
      // TODO: fill in your GitHub / Live Demo links here, e.g.:
      // { label: "GitHub", href: "https://github.com/Sam02i/..." },
      // { label: "Live Demo", href: "https://..." },
    ],
  },
  {
    kind: "writeup",
    slug: "cache-management",
    title: "Cache Eviction Policy Analysis: LRU vs LFU vs ML",
    icons: [
      {
        icon: FileText,
        href: "/notebooks/cache_eviction_analysis.html",
        label: "Notebook",
      },
      {
        icon: Github,
        href: "https://github.com/Sam02i/Cache-Eviction-Analysis",
        label: "GitHub",
      },
    ],
    intro:
      "A head-to-head comparison of classic cache eviction policies (LRU, LFU) against a learned policy — a Random Forest trained on oracle look-ahead features — benchmarked on a synthetic Zipfian access trace. The interesting question here isn't whether ML wins; it's exactly when the extra model complexity is worth paying for, and when it clearly isn't.",
    image: cacheChart,
    imageWidth: 1050,
    imageHeight: 675,
    imageAlt: "Chart comparing hit rate vs cache size for LRU, LFU, and ML-based eviction",
    caption:
      "Hit rate vs. cache size across all three policies. LRU trails throughout, while LFU and ML stay nearly tied — the ML model's small edge at tiny cache sizes fades away as the cache grows.",
    body: [
      "At cache size 10, LFU edges out a 200-tree Random Forest on hit rate (0.561 vs 0.559) while being roughly 14,000× faster per eviction decision — a frequency-count lookup versus a full model prediction. On a Zipf-distributed trace, a small number of items dominate traffic, so simple frequency tracking is already a strong signal; the learned model's advantage only shows up at very small cache sizes, where every eviction decision counts most.",
      "The trace was split 80/20 into train/test before any feature engineering to avoid leakage, with a synthetic sequential-scan burst injected specifically to test scan resistance, a known weak point for history-based ML eviction. The takeaway: frequency-based policies are hard to beat on stable, Zipf-like workloads — ML eviction becomes more interesting on non-stationary traces where popularity shifts over time.",
    ],
  },
  {
    kind: "writeup",
    slug: "transfusion-need",
    title: "Predictive Analytics for Transfusion Need",
    icons: [
      {
        icon: FileText,
        href: "/notebooks/Pred_Analytics_for_Transfusion.html",
        label: "Notebook",
      },
      {
        icon: Github,
        href: "https://github.com/Sam02i/Predictive-Analytics-for-Transfusion-Need",
        label: "GitHub",
      },
      {
        icon: ExternalLink,
        href: "https://predictive-analytics-for-transfusion-need-2vz8ssdal.vercel.app",
        label: "Live Demo",
      },
    ],
    intro:
      "A small-data ML pipeline predicting blood transfusion need from six routine patient vitals — heart rate, respiratory rate, oxygen saturation, blood pressure, and sex — built on a 206-patient demo dataset with only 14 positive cases. What makes this project worth a look isn't a headline accuracy number, it's the debugging journey: two separate rounds of data leakage found and fixed, a database join-explosion bug traced back to a missing row key, and every result reported with honest cross-validated uncertainty instead of one cherry-picked score.",
    image: transfusionResult,
    imageWidth: 1800,
    imageHeight: 1019,
    imageAlt: "Landing page for the Transfusion Risk Checker, a portfolio ML demo predicting transfusion risk from clinical vitals",
    caption:
      "The live Transfusion Risk Checker landing page — a Random Forest model predicting transfusion risk from clinical vitals, running entirely client-side in the browser.",
    body: [
      "Vitals were pulled from MySQL and aggregated to one row per patient stay, with label-defining columns explicitly excluded from the feature set to prevent leakage. Class imbalance (14 positives out of 206) was handled with SMOTE applied inside each cross-validation fold — never on the full dataset beforehand — and Random Forest and Logistic Regression were compared under stratified 5-fold CV, scoring 0.791 and 0.812 mean ROC-AUC respectively. With a sample this small, the gap between them isn't statistically decisive, and the project reports that honestly rather than declaring a winner.",
      "The final model was refit on the full dataset and exported via m2cgen to run entirely in the browser — the interactive demo above is the real model, not a mockup, and it openly discloses known quirks like non-monotonic behavior on heart rate rather than hiding them.",
    ],
  },
  {
    kind: "writeup",
    slug: "agrioptima-ai",
    title: "AgriOptima AI — Crop Recommendation Backend",
    icons: [
      {
        icon: Github,
        href: "https://github.com/Sam02i/agrioptima-ai",
        label: "GitHub",
      },
      {
        icon: ExternalLink,
        href: "https://agrioptima-ai.vercel.app/",
        label: "Live Demo",
      },
    ],
    intro:
      "A team project building a crop recommendation backend that helps a farmer choose a viable crop — deterministic agronomic eligibility first (season, soil pH, water, budget, crop rotation), then a transparent, source-labelled 0–100 scoring system layered on top. Live weather and market data can influence the ranking, but can never override a hard agronomic rejection.",
    image: agrioptimaCover,
    imageWidth: 1800,
    imageHeight: 912,
    imageAlt: "AgriOptima AI landing page, a smart farming platform for crop recommendations",
    caption: "The live AgriOptima AI landing page — the platform's public-facing frontend.",
    body: [
      "Given a farmer's soil, irrigation, season, budget, and location, the system runs six candidate crops through hard eligibility rules, rejects the ones that fail with plain-language reasons, then scores the remaining eligible crops using a fixed-weight formula covering soil fit, climate fit, water fit, and market factors. Live weather comes from Open-Meteo and mandi price data from data.gov.in/AGMARKNET — when either is unavailable, the system falls back to a clearly labelled neutral estimate instead of guessing.",
      "The backend — data models, the eligibility engine, the scoring formula, and both external data adapters — is built and covered by automated tests; the API endpoint and frontend are still in progress.",
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
    description:
      "A playful productivity tool styled like a retro receipt printer — track ongoing and completed tasks, run timed focus sessions, and print out a session summary receipt at the end, complete with customizable paper colors, dot-matrix filters, and app themes.",
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

        <div className="mt-14 space-y-24">
          {projects.map((project, i) =>
            project.kind === "writeup" ? (
              <article
                key={project.title}
                id={project.slug}
                className="animate-rise-in mx-auto max-w-4xl scroll-mt-24"
                style={{ animationDelay: `${120 + i * 120}ms` }}
              >
                <div className="flex flex-wrap items-start justify-between gap-4">
                  <h2 className="text-2xl font-bold tracking-tight sm:text-3xl">{project.title}</h2>
                  <div className="flex shrink-0 gap-3">
                    {project.icons.map(({ icon: Icon, href, label }) => (
                      <a
                        key={label}
                        href={href}
                        target={label === "Notebook" ? undefined : "_blank"}
                        rel={label === "Notebook" ? undefined : "noreferrer noopener"}
                        aria-label={label}
                        title={label}
                        className="text-muted-foreground transition-colors hover:text-foreground"
                      >
                        <Icon size={22} />
                      </a>
                    ))}
                  </div>
                </div>

                <p className="mt-4 text-sm leading-relaxed text-foreground/80">{project.intro}</p>

                <div className="mt-6 overflow-hidden rounded-2xl border border-border bg-card p-4">
                  <img
                    src={project.image}
                    alt={project.imageAlt}
                    width={project.imageWidth}
                    height={project.imageHeight}
                    loading="lazy"
                    className="w-full rounded-lg object-contain"
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
                <h2 className="text-center text-2xl font-semibold tracking-tight sm:text-3xl">
                  {project.title}
                </h2>
                <div className="group mt-6 overflow-hidden rounded-2xl border border-border bg-card shadow-sm">
                  <img
                    src={project.image}
                    alt={project.alt}
                    width={project.imageWidth}
                    height={project.imageHeight}
                    loading="lazy"
                    className="w-full object-cover transition-transform duration-700 ease-out group-hover:scale-[1.04]"
                  />
                </div>
                <p className="mx-auto mt-6 max-w-2xl text-center text-sm leading-relaxed text-muted-foreground">
                  {project.description}
                </p>
                <div className="mt-6 flex flex-wrap justify-center gap-3">
                  {project.links.map((link) => (
                    <a
                      key={link.href}
                      href={link.href}
                      target={link.label === "Notebook" ? undefined : "_blank"}
                      rel={link.label === "Notebook" ? undefined : "noreferrer noopener"}
                      className="rounded-full border border-border px-6 py-2.5 text-xs font-semibold uppercase tracking-widest transition-colors hover:bg-secondary"
                    >
                      {link.label}
                    </a>
                  ))}
                </div>
              </article>
            ),
          )}
        </div>
      </section>
    </SiteLayout>
  );
}