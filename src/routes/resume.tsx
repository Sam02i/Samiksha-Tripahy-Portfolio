import { createFileRoute } from "@tanstack/react-router";
import { SiteLayout } from "@/components/SiteLayout";
import resumeAsset from "@/assets/Samiksha_Tripathy_Resume.pdf";
import resumePage from "@/assets/resume-page.jpg";
import photoRobotics from "@/assets/photo-robotics.jpg";
import photoWomenInTech from "@/assets/photo-womenintech.jpg";
import photoGroup from "@/assets/photo-group.jpg";
import photoCode from "@/assets/photo-code.jpg";

export const Route = createFileRoute("/resume")({
  head: () => ({
    meta: [
      { title: "Resume — Samiksha Tripathy" },
      {
        name: "description",
        content:
          "Resume of Samiksha Tripathy: B.Tech CSE (AI & ML) at SRM IST, machine learning projects, skills and certifications.",
      },
      { property: "og:title", content: "Resume — Samiksha Tripathy" },
      {
        property: "og:description",
        content: "Education, projects, skills and certifications of Samiksha Tripathy.",
      },
      { property: "og:type", content: "profile" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
  }),
  component: Resume,
});

function Resume() {
  return (
    <SiteLayout>
      <div className="mx-auto max-w-[1600px] px-8 pb-10 pt-20">
        <h1 className="animate-rise-in mb-10 text-center text-6xl font-extrabold tracking-tight sm:text-8xl">
          Resume.
        </h1>
        <p
          className="animate-rise-in mx-auto max-w-[1400px] text-center text-sm leading-relaxed text-foreground"
          style={{ animationDelay: "100ms" }}
        >
          <span>
            I&apos;m a Computer Science &amp; Engineering student at SRM University of Science and Technology, specializing in Artificial Intelligence and Machine Learning,
          </span>
          <br />
          <span>
            looking to lower the barrier of entry to intelligent technology for all. I am primarily interested in machine learning model design, deep learning system optimization, and applied AI for real world problem solving.
          </span>
        </p>
      </div>

      <section className="mx-auto grid max-w-[1600px] gap-8 px-8 pb-16 lg:grid-cols-[1.1fr_1fr]">
        <div
          className="animate-rise-in flex min-w-0 flex-col gap-4"
          style={{ animationDelay: "180ms" }}
        >
          <img
            src={resumePage}
            alt="Resume of Samiksha Tripathy"
            className="w-full rounded-2xl border border-border bg-card"
          />
          <a
            href={resumeAsset}
            target="_blank"
            rel="noreferrer noopener"
            className="self-start rounded-full bg-primary px-6 py-3 text-sm font-semibold uppercase tracking-widest text-primary-foreground transition-opacity hover:opacity-90"
          >
            Download PDF
          </a>
        </div>

        <div
          className="animate-rise-in grid min-w-0 grid-cols-2 gap-4"
          style={{ animationDelay: "260ms" }}
        >
          <img
            src={photoGroup}
            alt="Samiksha with her cohort at a tech event in New Delhi"
            loading="lazy"
            className="col-span-2 aspect-[4/3] w-full rounded-2xl object-cover"
          />
          <img
            src={photoRobotics}
            alt="Robotic arm workcell in a university robotics lab"
            loading="lazy"
            className="aspect-[3/4] w-full rounded-2xl object-cover"
          />
          <img
            src={photoWomenInTech}
            alt="Women in Tech global growth and policy breakfast event"
            loading="lazy"
            className="aspect-[3/4] w-full rounded-2xl object-cover"
          />
          <img
            src={photoCode}
            alt="Python code for an anime dataset pipeline on a laptop screen"
            loading="lazy"
            className="col-span-2 aspect-[4/3] w-full rounded-2xl object-cover"
          />
        </div>
      </section>
    </SiteLayout>
  );
}