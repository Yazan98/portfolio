// ============================================================
// Home page content — hero copy, quick stats and the eyebrow /
// title pairs for each section. Change copy here without
// touching the page markup.
// ============================================================

export const hero = {
  eyebrow: 'MOBILE SOFTWARE ENGINEER',
  greeting: 'Hi, I’m',
  name: 'Yazan Tarifi',
  headline: 'I build mobile products that feel native on every screen',
  tags: ['Compose Multiplatform', 'Kotlin', 'SwiftUI', 'NestJS', 'Spring Boot'],
  primaryCta: { label: 'View projects', to: '/projects' },
  secondaryCta: { label: 'Get in touch', href: 'mailto:yazantarifi989@gmail.com' },
};

// Small stat row under the hero.
export const stats = [
  { value: '8+', label: 'Shipped apps' },
  { value: '6', label: 'Languages' },
  { value: '30+', label: 'Open-source repos' },
  { value: 'Android · iOS', label: 'Platforms' },
];

// Eyebrow + title pairs for each home section (matches the design's
// numbered-eyebrow style).
export const sections = {
  services: { eyebrow: '01 — WHAT I DO', title: 'How I can help' },
  languages: { eyebrow: '02 — TOOLBOX', title: 'Core languages' },
  projects: { eyebrow: '03 — SELECTED WORK', title: 'Featured projects' },
  articles: { eyebrow: '04 — WRITING', title: 'Latest articles' },
  contact: { eyebrow: '05 — CONTACT', title: 'Let’s build something' },
};

export const contact = {
  heading: 'Let’s build something great.',
  body:
    'Have a mobile app idea, a backend to scale, or just want to talk architecture? I’ll get back to you as soon as I can.',
};
