export const SOCIAL_LINKS = {
  github: "https://github.com/muglu-ai",
  linkedin: "https://www.linkedin.com/in/manishsharma98",
  email: "mailto:manishk_sharma@outlook.com",
} as const;

export const NAV_SOCIALS = [
  {
    name: "Linkedin",
    src: "/linkedin.svg",
    href: SOCIAL_LINKS.linkedin,
  },
  {
    name: "Github",
    src: "/github.svg",
    href: SOCIAL_LINKS.github,
  },
] as const;
