// ============================================================
// Articles - fallback list used when the live Medium feed
// can't be fetched. The <Articles> section fetches the RSS
// feed first and falls back to these entries.
// ============================================================

const articles = [
  {
    title: 'Scaling Backend Architecture with NestJS & Microservices',
    description:
      'A guide to transitioning a monolithic backend into scalable microservices using NestJS, Redis and message queues.',
    date: 'Nov 15, 2025',
    readTime: '8 min read',
    link: 'https://medium.com/@yazantarifi98',
    tags: ['Backend', 'NestJS', 'Architecture'],
  },
  {
    title: 'Exploring Kotlin Multiplatform: The Future of Code Sharing',
    description:
      'How Kotlin Multiplatform lets you share business logic across Android, iOS and web without compromising performance.',
    date: 'Oct 02, 2025',
    readTime: '6 min read',
    link: 'https://medium.com/@yazantarifi98',
    tags: ['Mobile', 'KMP', 'Kotlin'],
  },
  {
    title: 'Mastering Database Design for High Concurrency',
    description:
      'Optimizing relational databases for high concurrency and large data volumes - indexing, partitioning and caching.',
    date: 'Aug 20, 2025',
    readTime: '12 min read',
    link: 'https://medium.com/@yazantarifi98',
    tags: ['Database', 'Architecture', 'SQL'],
  },
];

export default articles;

export function getArticles() {
  return articles;
}
