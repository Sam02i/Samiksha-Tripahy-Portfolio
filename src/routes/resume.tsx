import { createFileRoute } from "@tanstack/react-router";
import { Reveal } from "@/components/Reveal";
import { SiteLayout } from "@/components/SiteLayout";
import { FadeImage } from "@/components/FadeImage";
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
        content:
          "Education, projects, skills and certifications of Samiksha Tripathy.",
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
      <div className="mx-auto max-w-[1600px] px-5 pb-10 pt-12 sm:px-8 sm:pt-20">
        <Reveal>
          <h1 className="mb-10 text-center text-6xl font-extrabold tracking-tight sm:text-8xl">
            Resume.
          </h1>
        </Reveal>
        <Reveal delay={80}>
          <p className="mx-auto max-w-[1400px] text-center text-sm leading-relaxed text-foreground">
            <span>
              I&apos;m a Computer Science &amp; Engineering student at SRM
              University of Science and Technology, specializing in Artificial
              Intelligence and Machine Learning,
            </span>
            <br />
            <span>
              looking to lower the barrier of entry to intelligent technology
              for all. I am primarily interested in machine learning model
              design, deep learning system optimization, and applied AI for real
              world problem solving.
            </span>
          </p>
        </Reveal>
      </div>

      <section className="mx-auto grid max-w-[1600px] gap-8 px-5 pb-16 sm:px-8 lg:grid-cols-[1.1fr_1fr]">
        <div className="flex min-w-0 flex-col gap-4">
          <Reveal className="" delay={70}>
            <img
              src={resumePage}
              alt="Resume of Samiksha Tripathy"
              width={1275}
              height={1650}
              className="h-auto w-full rounded-2xl border border-border bg-card"
            />
          </Reveal>
          <a
            href={resumeAsset}
            target="_blank"
            rel="noreferrer noopener"
            className="petal-button self-start bg-primary px-6 py-3 text-sm font-semibold uppercase tracking-widest text-primary-foreground transition-opacity hover:opacity-90"
          >
            Download PDF
          </a>
        </div>

        <div className="grid min-w-0 grid-cols-2 gap-4">
          <Reveal className="col-span-2" delay={140}>
            <FadeImage
              src={photoGroup}
              alt="Samiksha with her cohort at a tech event in New Delhi"
              loading="lazy"
              wrapperClassName="aspect-[4/3] w-full rounded-2xl"
              className="h-full w-full rounded-2xl object-cover"
            />
          </Reveal>
          <Reveal className="" delay={210}>
            <FadeImage
              src={photoRobotics}
              alt="Robotic arm workcell in a university robotics lab"
              loading="lazy"
              wrapperClassName="aspect-[3/4] w-full rounded-2xl"
              className="h-full w-full rounded-2xl object-cover"
            />
          </Reveal>
          <Reveal className="" delay={210}>
            <FadeImage
              src={photoWomenInTech}
              alt="Women in Tech global growth and policy breakfast event"
              loading="lazy"
              wrapperClassName="aspect-[3/4] w-full rounded-2xl"
              className="h-full w-full rounded-2xl object-cover"
            />
          </Reveal>
          <Reveal className="col-span-2" delay={210}>
            <FadeImage
              src={photoCode}
              alt="Python code for an anime dataset pipeline on a laptop screen"
              loading="lazy"
              wrapperClassName="aspect-[4/3] w-full rounded-2xl"
              className="h-full w-full rounded-2xl object-cover"
            />
          </Reveal>
        </div>
      </section>
    </SiteLayout>
  );
}
