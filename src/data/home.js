// ============================================================
// Home page content - hero copy, the technology marquee lanes and
// the eyebrow / title pairs for each section. Change copy here
// without touching the page markup.
// ============================================================

export const hero = {
  eyebrow: 'MOBILE SOFTWARE ENGINEER',
  greeting: 'Hi, I’m',
  name: 'Yazan Tarifi',
  headline: 'I build fast, polished mobile products people love to use from idea to launch',
  tags: ['Compose Multiplatform', 'Kotlin', 'SwiftUI', 'NestJS', 'Spring Boot'],
  primaryCta: { label: 'View projects', to: '/projects' },
  secondaryCta: { label: 'Get in touch', href: 'mailto:yazantarifi989@gmail.com' },
};

// Auto-scrolling technology lanes shown in the hero's black marquee.
// `primary` = highlighted stack (green dot), `secondary` = supporting
// tools (muted square). Order controls the on-screen sequence.
export const technologies = {
  primary: [
    'Kotlin',
    'Java',
    'Jetpack Compose',
    'Compose Multiplatform',
    'Kotlin Multiplatform',
    'Swift',
    'SwiftUI',
    'iOS',
    'Android',
    'UIKit',
    'Android SDK',
    'Material 3',
    'Coroutines',
    'Flow',
    'Ktor Client',
    'Retrofit',
    'Room',
    'Hilt',
    'Koin',
    'Gradle',
    'Clean Architecture',
    'MVVM',
    'MVI',
    'Navigation Compose',
    'Coil',
    'Firebase',
    'Firebase Cloud Messaging',
  ],
  secondary: [
    'Spring Boot',
    'Spring Security',
    'Spring Data JPA',
    'Hibernate',
    'Spring Boot Actuator',
    'Ktor',
    'REST API Design',
    'Building APIs',
    'JWT Authentication',
    'Refresh Tokens',
    'OAuth 2.0',
    'OpenAPI',
    'Swagger',
    'Git',
    'NestJS',
    'TypeScript',
    'Node.js',
    'React',
    'Next.js',
    'PostgreSQL',
    'MySQL',
    'MongoDB',
    'Redis',
    'Supabase',
    'Firebase Admin',
    'Docker',
    'Docker Compose',
    'Linux',
    'VPS',
    'Nginx',
    'CI/CD',
    'GitHub Actions',
    'WebSockets',
    'Webhooks',
  ],
};

// Eyebrow + title pairs for each home section (matches the design's
// numbered-eyebrow style).
export const sections = {
  services: { eyebrow: 'WHAT I DO', title: 'How I can help' },
  languages: { eyebrow: 'TOOLBOX', title: 'Core languages' },
  projects: { eyebrow: 'SELECTED WORK', title: 'Featured projects' },
  articles: { eyebrow: 'WRITING', title: 'Latest articles' },
  contact: { eyebrow: 'CONTACT', title: 'Let’s build something' },
};

export const contact = {
  heading: 'Let’s build something great.',
  body:
    'Have a mobile app idea, a backend to scale, or just want to talk architecture? I’ll get back to you as soon as I can.',
};
