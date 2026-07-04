// ============================================================
// Projects — the single source of truth for the Projects grid,
// the featured home carousel and every project detail page.
// Add / edit a project here and it flows through the whole site.
//
// Schema per project:
//   id, slug, name, category, featured, badge, year
//   tagline      → hero paragraph on the detail page
//   summary      → short one-liner for cards / lists
//   overview     → [paragraph, paragraph] for the "About" block
//   facts        → { type, platforms, stack, focus } fact card
//   tags         → string[]
//   features     → [{ title, desc }]  (optional, may be [])
//   image        → cover / preview
//   banner       → wide banner (defaults to `image`)
//   screens      → string[] gallery (optional)
//   links        → { live?, github?, playStore?, appStore? }
// ============================================================

// Local image assets (kept colocated in components/images)
import RafeeqImage from '../components/images/rafeeq_landing.png';
import RafeeqImage1 from '../components/images/rafeeq_1.png';
import RafeeqImage2 from '../components/images/rafeeq_2.png';
import RafeeqImage3 from '../components/images/rafeeq_3.png';
import RafeeqImage4 from '../components/images/rafeeq_4.png';
import RafeeqImage5 from '../components/images/rafeeq_5.png';
import RafeeqImage6 from '../components/images/rafeeq_6.png';
import RafeeqImage7 from '../components/images/rafeeq_7.png';
import RafeeqImage8 from '../components/images/rafeeq_8.png';
import RafeeqImage9 from '../components/images/rafeeq_9.png';
import RafeeqImage10 from '../components/images/rafeeq_10.png';
import RafeeqImage11 from '../components/images/rafeeq_11.png';
import StoreImage1 from '../components/images/store_1.png';
import StoreImage2 from '../components/images/store_2.png';
import StoreImage3 from '../components/images/store_3.png';
import StoreImage4 from '../components/images/store_4.png';
import StoreImage5 from '../components/images/store_5.png';
import StoreImage6 from '../components/images/store_6.png';
import ExpenziaImage from '../components/images/expenzia.png';
import ExpenziaImage1 from '../components/images/expenzia_1.png';
import ExpenziaImage2 from '../components/images/expenzia_2.png';
import ExpenziaImage3 from '../components/images/expenzia_3.png';
import ExpenziaImage4 from '../components/images/expenzia_4.png';
import ExpenziaImage5 from '../components/images/expenzia_5.png';
import ExpenziaImage6 from '../components/images/expenzia_6.png';
import LegoraImage from '../components/images/legora.png';
import GitlyImage from '../components/images/gitly.png';

// Category filter values (kept stable for backwards-compatible links)
export const CATEGORY = {
  all: 'all',
  android: 'android',
  ios: 'ios',
  mobile: 'mobile',
  webApps: 'webApps',
  websites: 'Websites',
  macApps: 'macApps',
  tools: 'tools',
};

// Human labels for each category value
export const CATEGORY_LABELS = {
  all: 'All',
  android: 'Android',
  ios: 'iOS',
  mobile: 'Multiplatform',
  webApps: 'Backend',
  Websites: 'Websites',
  macApps: 'macOS',
  tools: 'Tools',
};

const projects = [
  {
    id: 1,
    slug: 'rafeeq',
    name: 'Rafeeq',
    category: CATEGORY.mobile,
    featured: true,
    badge: 'FLAGSHIP · COMPOSE MULTIPLATFORM',
    year: '2026',
    tagline:
      'A modern Islamic companion — Quran, prayer times, adhkar, duas, Qibla, names of Allah, tasbeeh and daily faith tools.',
    summary:
      'Compose Multiplatform app targeting Android & iOS with shared logic and UI.',
    overview: [
      'Rafeeq is built with a strong mobile-first experience: polished UI, offline-first thinking and a scalable product vision. One Kotlin codebase renders natively on both Android and iOS.',
      'The app is designed to feel fast and reliable in daily use — content is available offline, navigation is instant, and every screen follows a consistent, calm visual language.',
    ],
    facts: {
      type: 'Consumer mobile app',
      platforms: 'Android · iOS',
      stack: 'Compose Multiplatform',
      focus: 'Offline-first · Shared logic',
    },
    tags: ['Compose Multiplatform', 'Swift UI', 'Jetpack Compose', 'Shared Logic', 'Shared UI', 'Shared Database'],
    features: [
      { title: 'Quran & daily content', desc: 'Full Quran reading experience with adhkar, duas and names of Allah — structured for daily use.' },
      { title: 'Prayer times & Qibla', desc: 'Accurate location-based prayer times and Qibla direction, built to work reliably offline.' },
      { title: 'Tasbeeh & faith tools', desc: 'Daily tools like tasbeeh counting designed with a simple, focused mobile UX.' },
      { title: 'One codebase, two platforms', desc: 'Compose Multiplatform shares UI and business logic across Android and iOS without compromising feel.' },
    ],
    image: RafeeqImage,
    banner: RafeeqImage,
    screens: [StoreImage1, StoreImage2, StoreImage3, StoreImage4, StoreImage5, StoreImage6, RafeeqImage1, RafeeqImage2, RafeeqImage3, RafeeqImage4, RafeeqImage5, RafeeqImage6, RafeeqImage7, RafeeqImage8, RafeeqImage9, RafeeqImage10, RafeeqImage11],
    links: { live: 'https://rafeeq.club' },
  },
  {
    id: 2,
    slug: 'expenzia',
    name: 'Expenzia',
    category: CATEGORY.android,
    featured: true,
    badge: 'ANDROID · KOTLIN',
    year: '2025',
    tagline: 'Personal expense tracking — budgeting, transactions, reminders and financial insights.',
    summary: 'Native Android expense tracker built with Kotlin & Compose.',
    overview: [
      'Expenzia is designed for clean, mobile-first money management: track transactions, set budgets, get reminders and understand spending through clear visual insights.',
      'Built with Kotlin and Compose UI on a clean architecture foundation — local state, charts and reminders that stay fast as data grows. It was also a testbed for the latest Play Store deployment rules and AdMob configuration.',
    ],
    facts: {
      type: 'Personal finance app',
      platforms: 'Android',
      stack: 'Kotlin · Compose UI',
      focus: 'Clean architecture · Charts',
    },
    tags: ['Kotlin', 'Jetpack Compose', 'Room Database', 'Admob', 'Google Play', 'Clean architecture'],
    features: [
      { title: 'Budgeting & transactions', desc: 'Fast transaction entry with budgets that keep monthly spending visible at a glance.' },
      { title: 'Financial insights', desc: 'Charts and summaries that turn raw transactions into understandable spending patterns.' },
      { title: 'Reminders', desc: 'Scheduled reminders so recurring payments and budget check-ins never slip.' },
      { title: 'Clean architecture', desc: 'A maintainable Kotlin codebase with local state management that scales with features.' },
    ],
    image: ExpenziaImage,
    banner: ExpenziaImage,
    screens: [ExpenziaImage1, ExpenziaImage2, ExpenziaImage3, ExpenziaImage4, ExpenziaImage5, ExpenziaImage6],
    links: { playStore: 'https://play.google.com/store/apps/details?id=app.expenzia.android' },
  },
  {
    id: 4,
    slug: 'gitly',
    name: 'Gitly',
    category: CATEGORY.ios,
    featured: true,
    badge: 'IOS · GITHUB CLIENT',
    year: '2024',
    tagline: 'A GitHub client for mobile — repositories, starred projects, profile data and developer workflows.',
    summary: 'iOS GitHub client built with SwiftUI, GraphQL and Apollo.',
    overview: [
      'Gitly brings the core GitHub workflow to mobile: browse repositories, check starred projects and profile data — built on the GitHub GraphQL API with a clean SwiftUI interface.',
      'The focus is speed and clarity: efficient networking, dynamic GraphQL queries generated from the schema, sensible caching and screens designed around what developers actually check on the go.',
    ],
    facts: {
      type: 'Developer tool',
      platforms: 'iOS',
      stack: 'Swift · SwiftUI · GraphQL',
      focus: 'Developer workflows',
    },
    tags: ['Swift 5', 'Swift UI', 'GraphQL', 'Apollo Client', 'Dynamic Queries', 'Pagination'],
    features: [
      { title: 'Repository browsing', desc: 'Explore repositories with readme, metadata and activity in a mobile-optimized layout.' },
      { title: 'Starred projects', desc: 'Quick access to starred repos — the projects you actually come back to.' },
      { title: 'Profile data', desc: 'Developer profiles with contributions and public activity at a glance.' },
      { title: 'GraphQL networking', desc: 'A clean Apollo layer over the GitHub GraphQL API with generated, dynamic queries.' },
    ],
    image: GitlyImage,
    banner: GitlyImage,
    screens: [
      'https://raw.githubusercontent.com/Yazan98/Gitly/main/Screenshots/Simulator%20Screenshot%20-%20iPhone%2015%20Pro%20Max%20-%202024-01-19%20at%2013.45.32.png',
      'https://raw.githubusercontent.com/Yazan98/Gitly/main/Screenshots/Simulator%20Screenshot%20-%20iPhone%2015%20Pro%20Max%20-%202024-01-19%20at%2013.45.56.png',
      'https://raw.githubusercontent.com/Yazan98/Gitly/main/Screenshots/Simulator%20Screenshot%20-%20iPhone%2015%20Pro%20Max%20-%202024-01-19%20at%2013.46.35.png',
      'https://raw.githubusercontent.com/Yazan98/Gitly/main/Screenshots/Simulator%20Screenshot%20-%20iPhone%2015%20Pro%20Max%20-%202024-01-19%20at%2013.46.10.png',
    ],
    links: { github: 'https://github.com/Yazan98/Gitly' },
  },
  {
    id: 3,
    slug: 'legora',
    name: 'Legora',
    category: CATEGORY.mobile,
    featured: true,
    badge: 'MULTIPLATFORM · RIOT API',
    year: '2024',
    tagline: 'A League of Legends companion — summoner profiles, champions and match history powered by the Riot API.',
    summary: 'Kotlin Multiplatform companion app with a NodeJS/Express backend.',
    overview: [
      'Legora pairs a Kotlin Multiplatform mobile app with an Express backend to fetch summoner data, champion details and match history from the Riot API.',
      'Business logic is shared across platforms with KMP, while the backend handles API orchestration, routing and load balancing with Nginx — a full product spanning mobile and server.',
    ],
    facts: {
      type: 'Companion app',
      platforms: 'Android · iOS · Web API',
      stack: 'KMP · Express · Nginx',
      focus: 'Shared logic · Live data',
    },
    tags: ['Kotlin Multiplatform', 'Jetpack Compose', 'SwiftUI', 'Express', 'Nginx', 'Riot API'],
    features: [
      { title: 'Summoner profiles', desc: 'Look up any summoner with ranked stats and profile data from the Riot API.' },
      { title: 'Champion explorer', desc: 'Browse champions with details and builds in a fast mobile UI.' },
      { title: 'Match history', desc: 'Recent matches with performance breakdowns, fetched and cached efficiently.' },
      { title: 'KMP + Express', desc: 'Shared Kotlin logic on mobile, with an Express service handling API aggregation.' },
    ],
    image: LegoraImage,
    banner: LegoraImage,
    screens: [
      'https://github.com/Yazan98/legora/raw/main/images/android/Screenshot_20240706_191903.png?raw=true',
      'https://github.com/Yazan98/legora/raw/main/images/android/Screenshot_20240706_192011.png?raw=true',
      'https://github.com/Yazan98/legora/raw/main/images/android/Screenshot_20240706_192511.png?raw=true',
      'https://github.com/Yazan98/legora/raw/main/images/android/Screenshot_20240706_192524.png?raw=true',
      'https://github.com/Yazan98/legora/raw/main/images/ios/Simulator%20Screenshot%20-%20iPhone%2015%20Pro%20Max%20-%202024-07-06%20at%2019-portrait%202.png?raw=true',
      'https://github.com/Yazan98/legora/raw/main/images/ios/Simulator%20Screenshot%20-%20iPhone%2015%20Pro%20Max%20-%202024-07-06%20at%2019-portrait.png?raw=true',
    ],
    links: { github: 'https://github.com/Yazan98/legora' },
  },
  {
    id: 6,
    slug: 'coina',
    name: 'Coina',
    category: CATEGORY.mobile,
    featured: true,
    badge: 'MULTIPLATFORM · CRYPTO',
    year: '2023',
    tagline: 'A cryptocurrency tracker — market data, coin details and watchlists.',
    summary: 'Kotlin Multiplatform crypto tracker with a shared data layer.',
    overview: [
      'Coina is a Kotlin Multiplatform cryptocurrency tracker: live market data, detailed coin pages and personal watchlists in a clean mobile UI.',
      'Market APIs are wrapped in a shared data layer with Ktor Client and Realm caching, so both platforms get the same reliable prices, charts and offline behavior.',
    ],
    facts: {
      type: 'Market tracker',
      platforms: 'Android · iOS',
      stack: 'KMP · Compose · SwiftUI',
      focus: 'Live market data',
    },
    tags: ['Kotlin Multiplatform', 'Jetpack Compose', 'Swift UI', 'Ktor Client', 'Realm Kotlin SDK'],
    features: [
      { title: 'Live market data', desc: 'Current prices and movements across major coins, refreshed efficiently.' },
      { title: 'Coin details', desc: 'Per-coin pages with charts, stats and key metrics.' },
      { title: 'Watchlists', desc: 'Track the coins you care about with a personal, persistent watchlist.' },
      { title: 'Shared data layer', desc: 'One KMP networking and caching layer serving both Android and iOS.' },
    ],
    image: 'https://raw.githubusercontent.com/Yazan98/portfolio/v3.1.2/src/components/images/kmm_preview.webp',
    banner: 'https://raw.githubusercontent.com/Yazan98/portfolio/v3.1.2/src/components/images/kmm_preview.webp',
    screens: [],
    links: { github: 'https://github.com/Yazan98/KMM-Cryptocurrency' },
  },
  {
    id: 5,
    slug: 'rick-and-morty',
    name: 'Rick & Morty',
    category: CATEGORY.ios,
    featured: true,
    badge: 'IOS · SWIFT',
    year: '2023',
    tagline: 'An iOS app exploring characters, episodes and locations — built natively with Swift.',
    summary: 'Native iOS explorer built with UIKit, Alamofire and Realm.',
    overview: [
      'A native iOS application built with Swift, exploring the Rick & Morty universe through its public REST API — characters, episodes and locations.',
      'The project focuses on native iOS patterns: UIKit collection views, nested navigations, async networking with Alamofire and local caching with Realm.',
    ],
    facts: {
      type: 'Explorer app',
      platforms: 'iOS',
      stack: 'Swift · UIKit · Realm',
      focus: 'Native iOS',
    },
    tags: ['Swift 5', 'UIKit', 'Realm iOS', 'Alamofire', 'CollectionViews', 'Nested Navigations'],
    features: [
      { title: 'Character browser', desc: 'Searchable character list with detail pages and status info.' },
      { title: 'Episodes & locations', desc: 'Explore episodes and locations with linked character appearances.' },
      { title: 'Collection views', desc: 'Nested UIKit collection views with smooth navigation and transitions.' },
      { title: 'Async networking', desc: 'Alamofire networking with Realm caching for fast, reliable data.' },
    ],
    image: 'https://raw.githubusercontent.com/Yazan98/portfolio/v3.1.2/src/components/images/rick_morty_preview.webp',
    banner: 'https://raw.githubusercontent.com/Yazan98/portfolio/v3.1.2/src/components/images/rick_morty_preview.webp',
    screens: [],
    links: { github: 'https://github.com/Yazan98/rick-morty-ios-app' },
  },
  {
    id: 7,
    slug: 'autohub',
    name: 'Autohub',
    category: CATEGORY.android,
    featured: true,
    badge: 'ANDROID · KOTLIN',
    year: '2019',
    tagline: 'An Android GitHub client with profile pages, repositories and developer-focused browsing flows.',
    summary: 'Open-source Android GitHub client built on MVVM and the Vortex infrastructure.',
    overview: [
      'Autohub is a native Android app built with Kotlin around developer-focused browsing flows — profiles, repositories and clean navigation, powered by the GitHub API.',
      'It follows modern Android architecture with the Vortex infrastructure: separated layers, navigation components, testable logic and a UI that stays responsive.',
    ],
    facts: {
      type: 'Developer app',
      platforms: 'Android',
      stack: 'Kotlin · MVVM · Vortex',
      focus: 'Clean architecture',
    },
    tags: ['Kotlin', 'Multi Modular App', 'Vortex', 'MVVM', 'GitHub API', 'Retrofit'],
    features: [
      { title: 'Profile pages', desc: 'Structured GitHub profile screens with clear information hierarchy.' },
      { title: 'Repository views', desc: 'Browse repositories with fast, paginated lists.' },
      { title: 'Modern architecture', desc: 'Layered Kotlin codebase built on the Vortex infrastructure for maintainability.' },
      { title: 'Responsive UI', desc: 'Smooth scrolling and state handling across screens.' },
    ],
    image: 'https://raw.githubusercontent.com/Yazan98/portfolio/master/src/components/images/autohub_preview.webp',
    banner: 'https://github.com/Yazan98/portfolio/blob/master/src/components/images/autohub.png?raw=true',
    screens: [
      'https://github.com/Yazan98/portfolio/blob/master/src/components/images/autohub_1.png?raw=true',
      'https://github.com/Yazan98/portfolio/blob/master/src/components/images/autohub_2.png?raw=true',
      'https://github.com/Yazan98/portfolio/blob/master/src/components/images/autohub_3.png?raw=true',
      'https://github.com/Yazan98/portfolio/blob/master/src/components/images/autohub_4.png?raw=true',
    ],
    links: { github: 'https://github.com/Yazan98/Github-Client' },
  },
  {
    id: 8,
    slug: 'destiny',
    name: 'Destiny',
    category: CATEGORY.android,
    featured: true,
    badge: 'ANDROID · MATERIAL',
    year: '2019',
    tagline: 'A food discovery Android app — browse categories, explore recipes and curated picks.',
    summary: 'Food discovery Android app with a polished Material Design UI.',
    overview: [
      'Destiny is a food discovery app for Android: browse categories, explore recipes and find curated picks through a polished Material Design UI.',
      'The emphasis is on visual polish and smooth browsing — imagery-forward layouts built with Kotlin, MVVM and Material components, backed by a Spring Boot API.',
    ],
    facts: {
      type: 'Food discovery app',
      platforms: 'Android',
      stack: 'Kotlin · Material Design',
      focus: 'Polished UI',
    },
    tags: ['Kotlin', 'Multi Modular App', 'Vortex', 'MVVM', 'Retrofit'],
    features: [
      { title: 'Category browsing', desc: 'Explore food categories through clean, imagery-led layouts.' },
      { title: 'Recipe exploration', desc: 'Detailed recipe pages with structured, readable content.' },
      { title: 'Curated picks', desc: 'Highlighted selections that make discovery effortless.' },
      { title: 'Material Design', desc: 'Consistent Material components with polished motion.' },
    ],
    image: 'https://raw.githubusercontent.com/Yazan98/portfolio/master/src/components/images/destiny_preview.webp',
    banner: 'https://raw.githubusercontent.com/Yazan98/portfolio/master/src/components/images/destiny_preview.webp',
    screens: [
      'https://github.com/Yazan98/portfolio/blob/master/src/components/images/destiny_1.png?raw=true',
      'https://github.com/Yazan98/portfolio/blob/master/src/components/images/destiny_2.png?raw=true',
      'https://github.com/Yazan98/portfolio/blob/master/src/components/images/destiny_3.png?raw=true',
      'https://github.com/Yazan98/portfolio/blob/master/src/components/images/destiny_4.png?raw=true',
    ],
    links: { github: 'https://github.com/Yazan98/Destiny' },
  },
  {
    id: 9,
    slug: 'portfolio',
    name: 'Portfolio',
    category: CATEGORY.websites,
    featured: false,
    badge: 'WEB · REACT',
    year: '2020',
    tagline: 'My personal website — a React SPA with PWA support, SEO and dark / light modes.',
    summary: 'React + Vite personal website with PWA support and dark / light modes.',
    overview: [
      'My personal website built with React and TypeScript as a single page application, with PWA support and SEO techniques for Google Search Console.',
      'The project has evolved across several versions — from SASS + Material UI to Tailwind — always focused on responsive design, dark / light theming and a fast client-side experience.',
    ],
    facts: {
      type: 'Personal website',
      platforms: 'Web',
      stack: 'React · TypeScript · Tailwind',
      focus: 'PWA · SEO · Responsive',
    },
    tags: ['React.js', 'TypeScript', 'Tailwind CSS', 'React Hooks', 'Responsive Design', 'PWA'],
    features: [],
    image: 'https://raw.githubusercontent.com/Yazan98/portfolio/master/src/components/images/portfolio_preview.webp',
    banner: 'https://raw.githubusercontent.com/Yazan98/portfolio/master/src/components/images/portfolio_preview.webp',
    screens: [
      'https://github.com/Yazan98/portfolio/blob/master/src/components/images/portfolio_1.png?raw=true',
      'https://github.com/Yazan98/portfolio/blob/master/src/components/images/portfolio_2.png?raw=true',
      'https://github.com/Yazan98/portfolio/blob/master/src/components/images/portfolio_3.png?raw=true',
    ],
    links: { github: 'https://github.com/Yazan98/portfolio' },
  },
  {
    id: 10,
    slug: 'drasati',
    name: 'Drasati',
    category: CATEGORY.android,
    featured: false,
    badge: 'ANDROID · EDTECH',
    year: '2020',
    tagline: 'An organizing platform for school students, linking them with audible lessons and teachers.',
    summary: 'Closed-source Android EdTech app built with Kotlin/Java and MVP.',
    overview: [
      'Drasati is an organizing platform for school students that gathers students and links them with audible lessons through a structured tree plan.',
      'Students can reach teachers when a point needs clarification, with support across all classes. Built with Java / Kotlin on an MVP architecture and Firebase.',
    ],
    facts: {
      type: 'EdTech app',
      platforms: 'Android',
      stack: 'Kotlin · Java · MVP',
      focus: 'Firebase · Content',
    },
    tags: ['Kotlin', 'Java', 'MVP', 'Firebase', 'Retrofit', 'RxJava 2'],
    features: [],
    image: 'https://raw.githubusercontent.com/Yazan98/portfolio/master/src/components/images/drasati_preview.webp',
    banner: 'https://github.com/Yazan98/portfolio/blob/master/src/components/images/drasati_main.png?raw=true',
    screens: [
      'https://github.com/Yazan98/portfolio/blob/master/src/components/images/drasati_1.png?raw=true',
      'https://github.com/Yazan98/portfolio/blob/master/src/components/images/drasati_2.png?raw=true',
      'https://github.com/Yazan98/portfolio/blob/master/src/components/images/drasati_3.png?raw=true',
    ],
    links: {},
  },
  {
    id: 11,
    slug: 'wintrop',
    name: 'Wintrop',
    category: CATEGORY.android,
    featured: false,
    badge: 'ANDROID · WEATHER',
    year: '2019',
    tagline: 'An open-source weather app for Amman, Irbid and Aqaba powered by the Open Weather API.',
    summary: 'Open-source Android weather app built on the Vortex infrastructure.',
    overview: [
      'Wintrop is an open-source weather application built to communicate with the Open Weather API and present the weather status of the current country.',
      'Built with Kotlin and the Vortex infrastructure, with local caching in Realm, a multi-modular structure and MVVM.',
    ],
    facts: {
      type: 'Weather app',
      platforms: 'Android',
      stack: 'Kotlin · MVVM · Vortex',
      focus: 'Realm cache · APIs',
    },
    tags: ['Kotlin', 'Realm Database', 'Multi Modular App', 'Retrofit', 'Vortex'],
    features: [],
    image: 'https://raw.githubusercontent.com/Yazan98/portfolio/master/src/components/images/wintrop_preview.webp',
    banner: 'https://github.com/Yazan98/portfolio/blob/master/src/components/images/wintrop_main.png?raw=true',
    screens: [
      'https://github.com/Yazan98/portfolio/blob/master/src/components/images/wintrop_1.png?raw=true',
      'https://github.com/Yazan98/portfolio/blob/master/src/components/images/wintrop_2.png?raw=true',
      'https://github.com/Yazan98/portfolio/blob/master/src/components/images/wintrop_3.png?raw=true',
    ],
    links: { github: 'https://github.com/Yazan98/Wintrop' },
  },
  {
    id: 12,
    slug: 'shopie-api',
    name: 'Shopie API',
    category: CATEGORY.webApps,
    featured: false,
    badge: 'BACKEND · LARAVEL',
    year: '2021',
    tagline: 'An open-source shop API built with PHP & Laravel — accounts, tokens, orders and more.',
    summary: 'Laravel REST API handling accounts, tokens, addresses and categories.',
    overview: [
      'Shopie API is an open-source API built with PHP and Laravel to model the database relations and logic for a shop application and website.',
      'It manages accounts, recipes, restaurants, bearer tokens, phone-number verification, user addresses and categories — built to apply PHP skills in a real project.',
    ],
    facts: {
      type: 'REST API',
      platforms: 'Web',
      stack: 'PHP · Laravel · MySQL',
      focus: 'Auth · JSON API',
    },
    tags: ['PHP Laravel', 'MySQL Database', 'JWT Tokens', 'JSON Response'],
    features: [],
    image: 'https://raw.githubusercontent.com/Yazan98/portfolio/master/src/components/images/shopie_preview.webp',
    banner: 'https://raw.githubusercontent.com/Yazan98/portfolio/master/src/components/images/shopie_preview.webp',
    screens: [],
    links: { github: 'https://github.com/Yazan98/shop-api' },
  },
  {
    id: 13,
    slug: 'vortex',
    name: 'Vortex',
    category: CATEGORY.android,
    featured: false,
    badge: 'ANDROID · LIBRARY',
    year: '2019',
    tagline: 'An open-source Android infrastructure for building multi-modular apps with ready state handling.',
    summary: 'Android infrastructure library for multi-modular apps with generated base code.',
    overview: [
      'Vortex is an open-source Android infrastructure to build applications with the latest technologies, ready state handling and UI implementations for common cases.',
      "It's not just base code — it helps you reach the target as fast as possible with ready techniques, a multi-modular structure and an MVVM foundation.",
    ],
    facts: {
      type: 'Android library',
      platforms: 'Android',
      stack: 'Kotlin · MVVM',
      focus: 'Infrastructure · Base code',
    },
    tags: ['Android Library', 'Multi Modular', 'MVVM Structure', 'Utility Classes'],
    features: [],
    image: 'https://raw.githubusercontent.com/Yazan98/portfolio/master/src/components/images/vortex_preview.webp',
    banner: 'https://raw.githubusercontent.com/Yazan98/portfolio/master/src/components/images/vortex_preview.webp',
    screens: [],
    links: { github: 'https://github.com/Yazan98/vortex' },
  },
  {
    id: 14,
    slug: 'netflix-clone',
    name: 'Netflix Clone',
    category: CATEGORY.websites,
    featured: false,
    badge: 'WEB · REACT',
    year: '2021',
    tagline: 'A React project to browse movies powered by the MovieDB API, React Hooks and TypeScript.',
    summary: 'React + TypeScript movie browser built on the MovieDB API.',
    overview: [
      'A website built with React and React Router to browse movies, using the MovieDB database as a training ground for Material UI and Firebase deployment.',
      'It was an introduction to TypeScript and SASS styling, built as a single page application with a grid / flex layout system.',
    ],
    facts: {
      type: 'Website',
      platforms: 'Web',
      stack: 'React · TypeScript · SASS',
      focus: 'SPA · APIs',
    },
    tags: ['React.js', 'React Router', 'Movies DB API', 'SASS Styling', 'Material UI'],
    features: [],
    image: 'https://raw.githubusercontent.com/Yazan98/portfolio/master/src/components/images/netflex_preview.webp',
    banner: 'https://raw.githubusercontent.com/Yazan98/portfolio/master/src/components/images/netflex_preview.webp',
    screens: [
      'https://github.com/Yazan98/portfolio/blob/master/src/components/images/netflex_1.png?raw=true',
      'https://github.com/Yazan98/portfolio/blob/master/src/components/images/netflex_2.png?raw=true',
      'https://github.com/Yazan98/portfolio/blob/master/src/components/images/netflex_3.png?raw=true',
    ],
    links: { github: 'https://github.com/Yazan98/Netflix-Clone' },
  },
  {
    id: 15,
    slug: 'github-clone',
    name: 'GitHub Clone',
    category: CATEGORY.websites,
    featured: false,
    badge: 'WEB · REACT',
    year: '2021',
    tagline: 'A React project using the GitHub API to show popular repos and profile information.',
    summary: 'React PWA using the GitHub API with grid / list toggles.',
    overview: [
      'A website built with React and React Router as a single page application, using the GitHub API v3 to show popular repos and profile information.',
      'It supports viewing a profile by username, a grid / linear list toggle and PWA installation, built with React Hooks and Axios.',
    ],
    facts: {
      type: 'Website',
      platforms: 'Web',
      stack: 'React · Axios',
      focus: 'PWA · GitHub API',
    },
    tags: ['React.js', 'React Hooks', 'GitHub API v3', 'Axios', 'Firebase'],
    features: [],
    image: 'https://raw.githubusercontent.com/Yazan98/portfolio/master/src/components/images/github_preview.webp',
    banner: 'https://raw.githubusercontent.com/Yazan98/portfolio/master/src/components/images/github_preview.webp',
    screens: [
      'https://github.com/Yazan98/portfolio/blob/master/src/components/images/github_1.png?raw=true',
      'https://github.com/Yazan98/portfolio/blob/master/src/components/images/github_2.png?raw=true',
      'https://github.com/Yazan98/portfolio/blob/master/src/components/images/github_3.png?raw=true',
    ],
    links: { github: 'https://github.com/Yazan98/github-clone' },
  },
  {
    id: 16,
    slug: 'autohub-v2',
    name: 'Autohub V2',
    category: CATEGORY.android,
    featured: false,
    badge: 'ANDROID · COMPOSE',
    year: '2022',
    tagline: 'A closed-source multi-modular Android app rebuilt with Jetpack Compose.',
    summary: 'Multi-modular Android GitHub client rebuilt with Compose, Hilt and Navigation.',
    overview: [
      'Autohub V2 is a rebuild of the original GitHub client with Navigation Component and Jetpack Compose.',
      'It uses Hilt dependency injection, Firebase Crashlytics, module-to-module navigation, use cases and Retrofit with coroutines against the GitHub API.',
    ],
    facts: {
      type: 'Developer app',
      platforms: 'Android',
      stack: 'Kotlin · Compose · Hilt',
      focus: 'Multi-modular · DI',
    },
    tags: ['Kotlin Coroutines', 'Multi Modular App', 'Compose', 'Hilt', 'Navigation Component', 'GitHub API'],
    features: [],
    image: 'https://raw.githubusercontent.com/Yazan98/portfolio/master/src/components/images/projects/autohub_2.webp',
    banner: 'https://raw.githubusercontent.com/Yazan98/portfolio/master/src/components/images/projects/autohub_2.webp',
    screens: [
      'https://user-images.githubusercontent.com/29167110/176329704-ea3b64eb-d42f-4f1f-932a-45cce82caf3f.png',
      'https://user-images.githubusercontent.com/29167110/176329706-ff7efbe1-9b53-4134-96a1-4f12e0a0b89f.png',
      'https://user-images.githubusercontent.com/29167110/176329707-1042d0a4-df15-43e7-a5e6-51f7ec2ba7b6.png',
      'https://user-images.githubusercontent.com/29167110/176329708-78d3db2b-76bc-4e4b-b8bb-2e902be77363.png',
    ],
    links: {},
  },
  {
    id: 17,
    slug: 'destiny-api',
    name: 'Destiny API',
    category: CATEGORY.webApps,
    featured: false,
    badge: 'BACKEND · SPRING BOOT',
    year: '2021',
    tagline: 'An open-source Spring Boot API managing a food-ordering system with Firebase and MySQL.',
    summary: 'Spring Boot API with Firebase Admin, MySQL and JWT authentication.',
    overview: [
      'Destiny API is an open-source Spring Boot project to manage a food-ordering system, backing the Destiny mobile app.',
      'It integrates the Firebase Admin SDK, MySQL and JWT authentication with Kotlin, Firebase Realtime Database and structured exception handling.',
    ],
    facts: {
      type: 'REST API',
      platforms: 'Web',
      stack: 'Kotlin · Spring Boot · MySQL',
      focus: 'Auth · Firebase',
    },
    tags: ['Spring Boot', 'JWT Authentication', 'MySQL Database', 'Firebase Admin', 'JSON Response'],
    features: [],
    image: 'https://raw.githubusercontent.com/Yazan98/portfolio/master/src/components/images/destiny_api_preview.webp',
    banner: 'https://raw.githubusercontent.com/Yazan98/portfolio/master/src/components/images/destiny_api_preview.webp',
    screens: [],
    links: { github: 'https://github.com/Yazan98/destiny-api' },
  },
  {
    id: 18,
    slug: 'tapper',
    name: 'Tapper',
    category: CATEGORY.macApps,
    featured: false,
    badge: 'MACOS · SWIFTUI',
    year: '2024',
    tagline: 'A macOS desktop app to generate ADB commands, built with Swift & SwiftUI.',
    summary: 'macOS menu-bar app that builds ADB commands, backed by a NodeJS CLI.',
    overview: [
      'Tapper is a macOS application that provides a UI to generate ADB commands for Android emulators and devices.',
      'Built with SwiftUI and paired with a NodeJS CLI, it saves frequently used ADB commands in a Realm database for quick reuse.',
    ],
    facts: {
      type: 'Desktop app',
      platforms: 'macOS',
      stack: 'Swift · SwiftUI',
      focus: 'Developer tooling',
    },
    tags: ['Swift UI', 'macOS Apps', 'Realm Swift', 'NodeJS CLI'],
    features: [],
    image: 'https://github.com/tapper-app/assets/raw/main/Screenshot%202024-01-23%20at%208.21.27%E2%80%AFAM.png?raw=true',
    banner: 'https://github.com/tapper-app/assets/raw/main/Screenshot%202024-01-23%20at%208.21.27%E2%80%AFAM.png?raw=true',
    screens: [],
    links: { github: 'https://github.com/tapper-app' },
  },
  {
    id: 19,
    slug: 'legora-android',
    name: 'Legora (Android)',
    category: CATEGORY.android,
    featured: false,
    badge: 'ANDROID · RIOT API',
    year: '2021',
    tagline: 'A native Android League of Legends companion built to test the Vanite library.',
    summary: 'Native Android Riot API app built with Vanite and multi-modular architecture.',
    overview: [
      'The original native Android Legora — a training project to test the Vanite source-code library against the Riot API.',
      'Built with Navigation Components, ViewBinding, Vanite, coroutines, Retrofit and Moshi in a multi-modular structure showing summoners, champions, items, skins and deeplinks.',
    ],
    facts: {
      type: 'Companion app',
      platforms: 'Android',
      stack: 'Kotlin · Vanite · Retrofit',
      focus: 'Multi-modular · Riot API',
    },
    tags: ['Kotlin', 'View Binding', 'Coroutines', 'Vanite', 'Retrofit'],
    features: [],
    image: 'https://user-images.githubusercontent.com/29167110/202738494-ca1a57ed-6b1f-4ecf-b69f-026c1ec4da3f.png',
    banner: 'https://user-images.githubusercontent.com/29167110/202738494-ca1a57ed-6b1f-4ecf-b69f-026c1ec4da3f.png',
    screens: [
      'https://user-images.githubusercontent.com/29167110/202739048-0663af37-2394-4a2f-9fd4-173bc4f64aeb.png',
      'https://user-images.githubusercontent.com/29167110/202739066-614a7921-d53f-4ef2-a67f-ca8b3f884902.png',
      'https://user-images.githubusercontent.com/29167110/202739084-f6c93f09-cdff-4044-9c0d-de35d86f1277.png',
      'https://user-images.githubusercontent.com/29167110/202739101-406bb5a2-4448-404e-8c16-2e8cd55f4744.png',
    ],
    links: { playStore: 'https://play.google.com/store/apps/details?id=com.yazantarifi.league.client' },
  },
];

export default projects;

// ---- Selectors -------------------------------------------------

export function getProjects() {
  return projects;
}

export function getFeaturedProjects() {
  return projects.filter((p) => p.featured);
}

export function getProjectBySlug(slug) {
  return projects.find((p) => p.slug === slug || String(p.id) === String(slug)) || null;
}

export function getProjectsByCategory(category) {
  if (!category || category === CATEGORY.all) return projects;
  return projects.filter((p) => p.category === category);
}

// Categories that actually have projects, in a sensible display order.
export function getActiveCategories() {
  const order = ['android', 'ios', 'mobile', 'webApps', 'Websites', 'macApps', 'tools'];
  const present = new Set(projects.map((p) => p.category));
  return [
    { value: CATEGORY.all, label: CATEGORY_LABELS.all },
    ...order
      .filter((c) => present.has(c))
      .map((c) => ({ value: c, label: CATEGORY_LABELS[c] || c })),
  ];
}

// The "next project" (wraps around) for the detail page footer CTA.
export function getNextProject(slug) {
  const idx = projects.findIndex((p) => p.slug === slug || String(p.id) === String(slug));
  if (idx === -1) return projects[0];
  return projects[(idx + 1) % projects.length];
}
