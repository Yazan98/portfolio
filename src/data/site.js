// ============================================================
// Global site configuration - identity, navigation, socials,
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
    'I design and build polished mobile apps backed by reliable systems, turning product ideas into fast, intuitive experiences that scale.',
  intro:
    'Mobile-first engineer focused on shared logic, offline-first products and clean architecture. I ship one Kotlin codebase to both platforms and back it with reliable APIs.',
};

// Primary navigation (rendered in the navbar + footer)
export const navLinks = [
  { label: 'Home', to: '/' },
  { label: 'Projects', to: '/projects' },
  { label: 'Skills', to: '/skills' },
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
  siteName: 'Yazan Tarifi',
  language: 'en',
  locale: 'en_US',
  defaultTitle: 'Yazan Tarifi | Mobile and Kotlin Multiplatform Engineer',
  titleTemplate: '%s | Yazan Tarifi',
  description:
    'Portfolio of Yazan Tarifi, a senior mobile engineer building Android, iOS, Kotlin Multiplatform, Compose Multiplatform, and scalable Spring Boot backends.',
  image: 'https://www.yazantarifi.com/banner.png',
  imageAlt: 'Yazan Tarifi mobile software engineer portfolio',
  imageType: 'image/png',
  imageWidth: 1280,
  imageHeight: 720,
  twitter: '@YazanT98',
  sameAs: [
    'https://github.com/Yazan98',
    'https://linkedin.com/in/yazantarifi',
    'https://x.com/YazanT98',
    'https://medium.com/@yazantarifi98',
  ],
  knowsAbout: [
    'Android development',
    'Kotlin',
    'Jetpack Compose',
    'Kotlin Multiplatform',
    'Compose Multiplatform',
    'iOS development',
    'Swift',
    'SwiftUI',
    'Kotlin Coroutines',
    'Mobile architecture',
    'Spring Boot',
    'Spring Data JPA',
    'Ktor',
    'NestJS',
    'PostgreSQL',
    'Firebase',
    'Docker',
    'REST API design',
    'Developer tooling',
    'SaaS development',
  ],
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
