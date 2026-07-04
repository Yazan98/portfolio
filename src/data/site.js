// ============================================================
// Global site configuration — identity, navigation, socials,
// SEO defaults and theme options. Edit here to change the site
// everywhere; no component markup needs to change.
// ============================================================

export const identity = {
  name: 'Yazan Tarifi',
  handle: 'yazan.tarifi',
  role: 'Mobile Software Engineer',
  location: 'Amman, Jordan',
  email: 'yazantarifi989@gmail.com',
  resume: '/resume.pdf',
  tagline:
    'I build native Android & iOS apps with Kotlin, Compose Multiplatform and SwiftUI — plus scalable backends with NestJS and Spring Boot.',
  intro:
    'Mobile-first engineer focused on shared logic, offline-first products and clean architecture. I ship one Kotlin codebase to both platforms and back it with reliable APIs.',
  availability: 'Available for new projects',
};

// Primary navigation (rendered in the navbar + footer)
export const navLinks = [
  { label: 'Home', to: '/' },
  { label: 'Projects', to: '/projects' },
  { label: 'Skills', to: '/skills' },
  { label: 'Archive', to: '/archive' },
];

// Social / external links. `icon` maps to a key in the <Icon> component.
export const socials = [
  { label: 'GitHub', icon: 'github', href: 'https://github.com/Yazan98' },
  { label: 'LinkedIn', icon: 'linkedin', href: 'https://linkedin.com/in/yazantarifi' },
  { label: 'X', icon: 'x', href: 'https://x.com/YazanT98' },
  { label: 'Medium', icon: 'medium', href: 'https://medium.com/@yazantarifi98' },
  { label: 'Email', icon: 'mail', href: 'mailto:yazantarifi989@gmail.com' },
];

export const primaryLinks = {
  github: 'https://github.com/Yazan98',
  linkedin: 'https://linkedin.com/in/yazantarifi',
  medium: 'https://medium.com/@yazantarifi98',
  mediumFeed: 'https://medium.com/feed/@yazantarifi98',
  email: 'mailto:yazantarifi989@gmail.com',
};

// SEO defaults used by <Seo> / <Helmet>
export const seo = {
  siteUrl: 'https://www.yazantarifi.com',
  defaultTitle: 'Yazan Tarifi — Mobile Software Engineer',
  titleTemplate: '%s · Yazan Tarifi',
  description:
    "Yazan Tarifi's portfolio — native Android & iOS apps with Kotlin, Compose Multiplatform and SwiftUI, plus scalable backends with NestJS & Spring Boot.",
  image: 'https://www.yazantarifi.com/banner.png',
  twitter: '@YazanT98',
};

// Theme options exposed by the accent switcher (matches the design source).
export const accents = [
  { value: 'green', label: 'Green', color: '#0E8A66' },
  { value: 'blue', label: 'Blue', color: '#1F6FEB' },
  { value: 'cyan', label: 'Cyan', color: '#0E7490' },
];

export const footer = {
  copyright: `© ${new Date().getFullYear()} Yazan Tarifi. All rights reserved.`,
  note: 'Designed & built with React, Vite and Tailwind.',
};
