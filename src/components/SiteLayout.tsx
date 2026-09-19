import { Link } from "@tanstack/react-router";
import { Linkedin, Github, Instagram } from "lucide-react";
import type { ReactNode } from "react";

const navLinks = [
  { to: "/", label: "Home" },
  { to: "/resume", label: "Resume" },
  { to: "/projects", label: "Projects" },
] as const;

export function SiteLayout({ children }: { children: ReactNode }) {
  return (
    <div className="min-h-screen bg-background text-foreground">
      <header className="relative w-full px-5 pb-6 pt-9">
        <div className="grid grid-cols-1 place-items-center gap-3 sm:block">
          <nav className="flex items-center justify-center gap-7 text-sm font-medium sm:absolute sm:left-6 sm:top-1/2 sm:-translate-y-1/2">
            {navLinks.map((link) => (
              <Link
                key={link.to}
                to={link.to}
                className="text-foreground/70 transition-colors hover:text-foreground [&.active]:text-foreground [&.active]:underline [&.active]:underline-offset-8"
              >
                {link.label}
              </Link>
            ))}
          </nav>

          <Link
            to="/"
            className="text-center text-base font-bold tracking-tight sm:absolute sm:left-1/2 sm:top-1/2 sm:-translate-x-1/2 sm:-translate-y-1/2"
          >
            Samiksha Tripathy&apos;s Portfolio
          </Link>

          <div className="flex items-center justify-center gap-6 sm:absolute sm:right-6 sm:top-1/2 sm:-translate-y-1/2">
            <a
              href="https://www.linkedin.com/in/samiksha-tripathy-399933328/"
              target="_blank"
              rel="noreferrer noopener"
              aria-label="LinkedIn profile"
              className="text-foreground transition-opacity hover:opacity-70"
            >
              <Linkedin size={24} />
            </a>
            <a
              href="https://www.instagram.com/s4m1ksha/"
              target="_blank"
              rel="noreferrer noopener"
              aria-label="Instagram profile"
              className="text-foreground transition-opacity hover:opacity-70"
            >
              <Instagram size={24} />
            </a>
            <a
              href="https://github.com/Sam02i"
              target="_blank"
              rel="noreferrer noopener"
              aria-label="GitHub profile"
              className="text-foreground transition-opacity hover:opacity-70"
            >
              <Github size={24} />
            </a>
          </div>
        </div>
      </header>

      <main>{children}</main>

      <footer className="mx-auto max-w-7xl px-6 py-16 text-center text-xs text-muted-foreground">
        © {new Date().getFullYear()} Samiksha Tripathy
      </footer>
    </div>
  );
}