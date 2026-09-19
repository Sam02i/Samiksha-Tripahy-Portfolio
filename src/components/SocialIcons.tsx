import { Linkedin, Instagram, Twitter } from "lucide-react";

// TODO: swap "#" for your real Instagram and Twitter/X profile URLs.
const SOCIAL_LINKS = [
  {
    icon: Linkedin,
    href: "https://www.linkedin.com/in/samiksha-tripathy-399933328/",
    label: "LinkedIn",
  },
  {
    icon: Instagram,
    href: "#",
    label: "Instagram",
  },
  {
    icon: Twitter,
    href: "#",
    label: "Twitter",
  },
];

/**
 * Row of social icon links, matched to the plain black-icon style in the
 * reference screenshot. Drop this at the bottom of any page, or render it
 * once inside SiteLayout so it shows up on every page automatically.
 */
export function SocialIcons({ className }: { className?: string }) {
  return (
    <div className={`flex items-center justify-center gap-8 ${className ?? ""}`}>
      {SOCIAL_LINKS.map(({ icon: Icon, href, label }) => (
        <a
          key={label}
          href={href}
          target="_blank"
          rel="noreferrer noopener"
          aria-label={label}
          title={label}
          className="text-foreground transition-transform duration-200 hover:-translate-y-0.5 hover:opacity-80"
        >
          <Icon size={26} strokeWidth={1.75} />
        </a>
      ))}
    </div>
  );
}
