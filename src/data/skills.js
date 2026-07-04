// ============================================================
// Skills, core languages and focus areas.
// Icons are imported locally (no external CDN) so they render
// instantly and work offline.
// ============================================================

import KotlinIcon from '../components/images/kotlin.webp';
import JsIcon from '../components/images/js.webp';
import JavaIcon from '../components/images/java.webp';
import RubyIcon from '../components/images/ruby.webp';
import TsIcon from '../components/images/ts.webp';
import GradleIcon from '../components/images/gradle.webp';
import GitIcon from '../components/images/git.webp';
import ReactIcon from '../components/images/react.webp';
import NestIcon from '../components/images/nest.webp';
import AndroidIcon from '../components/images/android.webp';

// Core languages — rendered as typographic chips on the home page.
export const languages = [
  { name: 'Kotlin', role: 'Mobile / Backend' },
  { name: 'Java', role: 'Enterprise' },
  { name: 'TypeScript', role: 'Frontend / APIs' },
  { name: 'Swift', role: 'iOS Native' },
  { name: 'JavaScript', role: 'Web / Full-Stack' },
  { name: 'Ruby', role: 'Scripting / CLIs' },
];

// Detailed skills — used on the Skills page.
const skills = [
  {
    icon: KotlinIcon,
    name: 'Kotlin',
    description:
      'My primary language as an Android developer — Android apps, libraries, Kotlin Multiplatform and Gradle plugins. Also powers backends with Ktor and Spring Boot.',
    tags: ['Android', 'Ktor Framework', 'Spring Boot', 'Gradle Plugins'],
  },
  {
    icon: AndroidIcon,
    name: 'Android Development',
    description:
      'Native Android apps with Kotlin and Gradle DSL using the latest technologies — Hilt, Jetpack Compose, Espresso, single-activity and multi-modular apps, offline caching, and MVVM / MVI / MVP.',
    tags: ['Jetpack Compose', 'Hilt', 'Multi Modular', 'MVVM · MVI'],
  },
  {
    icon: TsIcon,
    name: 'TypeScript',
    description:
      'Used for Node projects with an OOP style similar to Java. My main framework is Nest.js — building Socket.io implementations and MongoDB storage.',
    tags: ['Mongo', 'Socket.io', 'Nest.js', 'CLIs'],
  },
  {
    icon: NestIcon,
    name: 'Nest.js',
    description:
      'My main framework for building APIs in TypeScript. I reach for it when I need Socket.io, chat-room logic and MongoDB queries in a structured, scalable codebase.',
    tags: ['Nest.js', 'Socket.io', 'Node.js', 'TypeScript'],
  },
  {
    icon: ReactIcon,
    name: 'React.js',
    description:
      'Websites built as SPAs / PWAs — installable on mobile, with caching, offline experience via service workers and fully interactive UIs powered by React Hooks.',
    tags: ['PWA', 'React Hooks', 'Responsive', 'CSR'],
  },
  {
    icon: JsIcon,
    name: 'JavaScript',
    description:
      'The base for websites built on React.js and Next.js, mostly written with modern JSX (ES6+), plus Express.js on the backend for REST APIs.',
    tags: ['React.js', 'Next.js', 'Express.js'],
  },
  {
    icon: JavaIcon,
    name: 'Java',
    description:
      'My first language — where I learned OOP and design patterns. Used to build APIs with Spring Boot and native Android apps.',
    tags: ['Spring Boot', 'Android', 'Tomcat', 'OOP'],
  },
  {
    icon: GradleIcon,
    name: 'Gradle',
    description:
      'Groovy and Kotlin Gradle plugins to configure Android and Spring Boot projects, published on the Gradle Plugin Portal — mainly dynamic tasks and dependency plugins.',
    tags: ['Gradle Portal', 'Groovy', 'Dependency Plugins'],
  },
  {
    icon: RubyIcon,
    name: 'Ruby',
    description:
      'My go-to for command-line tools that need third-party API calls and multithreading, plus Fastlane plugins — mainly for Android release automation.',
    tags: ['CLIs', 'Fastlane Plugins', 'Gems'],
  },
  {
    icon: GitIcon,
    name: 'Version Control',
    description:
      'Git every day across GitHub, GitLab and Bitbucket — branches, releases, local Git hooks to manage the development phase, and CI wiring.',
    tags: ['GitHub', 'GitLab', 'Git Hooks', 'CI'],
  },
];

export default skills;

export function getSkills() {
  return skills;
}
