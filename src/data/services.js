// ============================================================
// "What I do" — the service / focus areas shown on the home page.
// ============================================================

const services = [
  {
    num: '01',
    tag: 'Mobile',
    title: 'Android Development',
    description:
      'Android applications used by millions — clean architecture, MVVM, Kotlin, Jetpack Compose, Firebase, Hilt, Retrofit, Room, WorkManager and multi-modular apps.',
  },
  {
    num: '02',
    tag: 'Multiplatform',
    title: 'Compose Multiplatform',
    description:
      'One Kotlin codebase for Android and iOS. Shared UI and business logic with Compose Multiplatform and Kotlin Multiplatform, without compromising the native feel.',
  },
  {
    num: '03',
    tag: 'Backend',
    title: 'APIs & Backend',
    description:
      'Backend projects and APIs with NestJS, Spring Boot, PostgreSQL, Firebase, Socket.IO, JWT, TypeORM, Docker, deployments, SSH servers and Nginx configuration.',
  },
  {
    num: '04',
    tag: 'Web',
    title: 'Web Development',
    description:
      'Static sites and landing pages with React, TypeScript and Tailwind CSS — responsive, accessible and deployed on GitHub Pages, Firebase and Netlify.',
  },
];

export function getServices() {
  return services;
}

// Default export is the getter (pages import it as `getServices`).
export default getServices;

// Also expose the raw array for direct consumers.
export { services };
