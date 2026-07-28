// ============================================================
// "What I do" - the service / focus areas shown on the home page.
// ============================================================

const services = [
  {
    num: '01',
    tag: 'Mobile',
    title: 'Android Development',
    description:
      'Native Android apps built with Kotlin and Jetpack Compose on a clean, multi-modular architecture - Hilt, Coroutines, Room and WorkManager - and shipped to Google Play.',
  },
  {
    num: '02',
    tag: 'Mobile',
    title: 'iOS Development',
    description:
      'Native iOS apps with Swift and SwiftUI - Kotlin Multiplatform libraries integrated across iOS and Android, GraphQL and REST clients with Alamofire, plus local persistence with Realm.',
  },
  {
    num: '03',
    tag: 'Multiplatform',
    title: 'Compose & Kotlin Multiplatform',
    description:
      'Shared UI, business logic and data layers for Android and iOS with Compose Multiplatform and Kotlin Multiplatform, using Ktor, Coroutines and offline-first architecture with platform-specific integrations where they add real value.',
  },
  {
    num: '04',
    tag: 'Backend',
    title: 'APIs & Backend',
    description:
      'Production APIs with NestJS, Spring Boot and Ktor - REST and real-time Socket.IO services, JWT auth and TypeORM in clean, testable service layers.',
  },
  {
    num: '05',
    tag: 'Tooling',
    title: 'Developer Tools & CLIs',
    description:
      'Developer tools built with scripts, custom commands, Fastlane plugins and JavaScript CLIs to automate repetitive workflows, improve release pipelines and make teams more productive.',
  },
];

export function getServices() {
  return services;
}

// Default export is the getter (pages import it as `getServices`).
export default getServices;

// Also expose the raw array for direct consumers.
export { services };
