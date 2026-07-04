// ============================================================
// Archive — the full chronological list of shipped work.
// { year, name, madeAt, built, isOpenSource }
// ============================================================

const archive = [
  { year: '2024', name: 'Gitly', madeAt: 'GitHub', built: 'Apollo Client, iOS App, SwiftUI, GraphQL, Pagination, Nested Push Navigations', isOpenSource: true },
  { year: '2023', name: 'Link Loom', madeAt: 'GitHub', built: 'Chromecast SDK, Android TV App, Jetpack Compose TV SDK, Chromecast Push Events', isOpenSource: true },
  { year: '2023', name: 'Rick & Morty iOS App', madeAt: 'GitHub', built: 'UIKit, Swift, iOS App, Alamofire, RealmSwift, CollectionView, Permissions, Localizations', isOpenSource: true },
  { year: '2023', name: 'Markdown Compose', madeAt: 'GitHub', built: 'Jetpack Compose, Maven Central', isOpenSource: true },
  { year: '2023', name: 'KMM Sopy', madeAt: 'GitHub', built: 'Kotlin Multiplatform Mobile, iOS, Android, Maven Central', isOpenSource: true },
  { year: '2023', name: 'Compare Url', madeAt: 'GitHub', built: 'macOS App, SwiftUI', isOpenSource: true },
  { year: '2023', name: 'Coina', madeAt: 'GitHub', built: 'Kotlin Multiplatform Mobile, iOS, Android, Jetpack Compose, SwiftUI, MVVM, Ktor Client', isOpenSource: true },
  { year: '2022', name: 'Avalugg', madeAt: 'GitHub', built: 'Swift, Xcode, macOS Application, ADB, Shell Commands', isOpenSource: true },
  { year: '2022', name: 'Zeeva', madeAt: 'GitHub', built: 'Ruby, Fastlane, Gem', isOpenSource: true },
  { year: '2022', name: 'Mushroom', madeAt: 'GitHub', built: 'TypeScript, Nest.js, Discord Bot, Google Maven API, GitHub API v3, Cron Job', isOpenSource: true },
  { year: '2021', name: 'Legora', madeAt: 'GitHub', built: 'Riot API, Gson, Retrofit, Coroutines, Vanite, ViewBinding, Multi Modular App, Deeplinks', isOpenSource: false },
  { year: '2021', name: 'Zilon', madeAt: 'GitHub', built: 'TypeScript, Nest.js, Slack API, Google Maven API, GitHub API v3, Cron Job', isOpenSource: true },
  { year: '2021', name: 'Viper Idea', madeAt: 'GitHub', built: 'Android Studio Plugin, IntelliJ Plugin, Kotlin, Gradle API, Fragments, RecyclerViews', isOpenSource: true },
  { year: '2021', name: 'Shake Reporter', madeAt: 'GitHub', built: 'AndroidX, Kotlin, OkHttp, Retrofit, Crashes, Shake Sensor, Fragments', isOpenSource: true },
  { year: '2021', name: 'Palex Adapter', madeAt: 'GitHub', built: 'AndroidX, Kotlin, RecyclerViews, MultiViewHolder, SingleViewHolder', isOpenSource: true },
  { year: '2021', name: 'Issuer Kt', madeAt: 'GitHub', built: 'AndroidX, Fragments, Kotlin, Attach Images, Device Information, Material Design', isOpenSource: true },
  { year: '2021', name: 'Cloner Js', madeAt: 'GitHub', built: 'CLI, JavaScript, GitHub API v3, Files Library, JSON Configuration', isOpenSource: true },
  { year: '2021', name: 'Portfolio', madeAt: 'GitHub', built: 'Domain, CDN, React.js, React Hooks, SASS, Material UI, GitHub Pages, PWA', isOpenSource: true },
  { year: '2021', name: 'Android Template Kt', madeAt: 'GitHub', built: 'Gradle DSL, Gradle Kotlin Configuration, AndroidX, BuildSrc', isOpenSource: true },
  { year: '2021', name: 'Portfolio Next', madeAt: 'GitHub', built: 'React.js, React Hooks, SASS, Material UI, GitHub Pages, Next.js', isOpenSource: true },
  { year: '2021', name: 'Shop API', madeAt: 'GitHub', built: 'PHP, Laravel, MySQL, Table Migration, JWT Tokens, Routers', isOpenSource: true },
  { year: '2021', name: 'Commiter', madeAt: 'GitHub', built: 'Ruby, Git Hooks, Messages Validation, CLI, Gem', isOpenSource: true },
  { year: '2021', name: 'GitHub Clone', madeAt: 'GitHub', built: 'Desktop Design, Material UI, GitHub API v3, React.js, React Hooks', isOpenSource: true },
  { year: '2020', name: 'Denamo', madeAt: 'GitHub', built: 'VS Code Themes, VS Code Plugins, TypeScript, JSON Configuration', isOpenSource: true },
  { year: '2020', name: 'Netflix Clone', madeAt: 'GitHub', built: 'Desktop Design, Material UI, MovieDB API, React.js, React Hooks, Firebase Hosting', isOpenSource: true },
  { year: '2020', name: 'Vortex Gradle Plugins', madeAt: 'GitHub', built: 'Groovy, Gradle Plugins, Android Plugins, Multi Modular Apps Plugins', isOpenSource: true },
  { year: '2020', name: 'Groupy', madeAt: 'GitHub', built: 'Firebase, Firestore, Realtime Chat, Firebase Auth, MVP, AndroidX, Kotlin', isOpenSource: true },
  { year: '2020', name: 'Feature Flag Example', madeAt: 'GitHub', built: 'Kotlin, Spring Boot, REST API', isOpenSource: true },
  { year: '2020', name: 'GitHub Client', madeAt: 'GitHub', built: 'Vortex, Navigation Components, Kotlin, AndroidX, Retrofit, GitHub API v3', isOpenSource: true },
  { year: '2020', name: 'Exposer', madeAt: 'GitHub', built: 'Kotlin Multiplatform, Domain Layer, RxJava, Kotlin Coroutines', isOpenSource: true },
  { year: '2020', name: 'Actor', madeAt: 'GitHub', built: 'Postman Collections, Spring Boot, JSON Parser', isOpenSource: true },
  { year: '2020', name: 'Ktor Example', madeAt: 'GitHub', built: 'Ktor Framework, Netty Engine, REST API, Kotlin Extensions', isOpenSource: true },
  { year: '2020', name: 'Destiny API', madeAt: 'GitHub', built: 'Spring Boot, Kotlin, MySQL, Firebase Admin SDK, JWT Security, Spring JPA', isOpenSource: true },
  { year: '2020', name: 'Destiny App', madeAt: 'GitHub', built: 'Vortex, AndroidX, Multi Modular Application, Kotlin, Kotlin Coroutines', isOpenSource: true },
  { year: '2020', name: 'Thentrom', madeAt: 'GitHub', built: 'IntelliJ Theme, IntelliJ Plugin, Jar Files Build', isOpenSource: true },
  { year: '2020', name: 'Wintrop', madeAt: 'GitHub', built: 'Vortex, Kotlin, Fragments, MVVM, Retrofit, OkHttp, Coroutines, Open Weather API', isOpenSource: true },
  { year: '2020', name: 'Drasati', madeAt: 'Private', built: 'MVP, Kotlin, Firebase, Firebase Auth, Firestore, Realtime Chat', isOpenSource: false },
  { year: '2019', name: 'Vortex', madeAt: 'GitHub', built: 'Firebase, Kotlin, MVVM, AndroidX, Multi Modules, Loggers, UI Utils, RxJava', isOpenSource: true },
  { year: '2019', name: 'Atto', madeAt: 'GitHub', built: 'MVP, Kotlin, Base Code, Multi Modules, RxJava', isOpenSource: true },
];

export default archive;

export function getArchive() {
  return archive;
}

// Grouped by year (descending) for the timeline layout.
export function getArchiveByYear() {
  const groups = {};
  for (const item of archive) {
    (groups[item.year] = groups[item.year] || []).push(item);
  }
  return Object.keys(groups)
    .sort((a, b) => Number(b) - Number(a))
    .map((year) => ({ year, items: groups[year] }));
}
