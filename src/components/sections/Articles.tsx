import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import Section from '../ui/Section';
import SectionHeading from '../ui/SectionHeading';
import Reveal from '../ui/Reveal';
import Icon from '../ui/Icon';
import ArticleCard, { Article } from '../cards/ArticleCard';
// @ts-ignore - data modules authored in JS
import { getArticles } from '../../data/articles';
// @ts-ignore
import { primaryLinks } from '../../data/site';
// @ts-ignore
import { sections } from '../../data/home';

const Articles: React.FC = () => {
    const [articles, setArticles] = useState<Article[]>([]);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        let cancelled = false;
        const feed = encodeURIComponent(primaryLinks.mediumFeed);
        fetch(`https://api.rss2json.com/v1/api.json?rss_url=${feed}`, { cache: 'no-store' })
            .then((res) => res.json())
            .then((data) => {
                if (cancelled) return;
                if (data.status === 'ok' && Array.isArray(data.items) && data.items.length) {
                    const mapped: Article[] = data.items.slice(0, 3).map((item: any) => {
                        let image = item.thumbnail;
                        if (!image && item.description) {
                            const m = item.description.match(/<img[^>]+src="([^">]+)"/);
                            if (m) image = m[1];
                        }
                        const clean = (item.description || '')
                            .replace(/<[^>]*>?/gm, '')
                            .replace(/Continue reading on Medium.*/, '')
                            .trim();
                        return {
                            title: item.title,
                            description: clean.length > 150 ? `${clean.slice(0, 150)}…` : clean,
                            date: new Date(item.pubDate).toLocaleDateString('en-US', { year: 'numeric', month: 'short', day: 'numeric' }),
                            readTime: '5 min read',
                            link: item.link,
                            tags: item.categories?.length ? item.categories.slice(0, 3) : ['Article'],
                            image,
                        };
                    });
                    setArticles(mapped);
                } else {
                    setArticles(getArticles());
                }
            })
            .catch(() => { if (!cancelled) setArticles(getArticles()); })
            .finally(() => { if (!cancelled) setLoading(false); });
        return () => { cancelled = true; };
    }, []);

    const list = loading ? getArticles() : articles;

    return (
        <Section bordered xPadding="px-[clamp(16px,3vw,32px)]" contentClassName="w-full">
            <div className="flex flex-col gap-12">
                <div className="flex flex-wrap items-end justify-between gap-6">
                    <SectionHeading
                        eyebrow={sections.articles.eyebrow}
                        title={sections.articles.title}
                        description="Notes on mobile architecture, Kotlin Multiplatform and scalable backends."
                    />
                    <a
                        href={primaryLinks.medium}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex items-center gap-1.5 font-mono text-[13px] font-medium text-acc no-underline"
                    >
                        Read on Medium <Icon name="arrow-up-right" size={14} />
                    </a>
                </div>
                <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
                    {list.map((a: Article, i: number) => (
                        <Reveal key={`${a.link}-${i}`} delay={(i % 3) * 80}>
                            <ArticleCard article={a} />
                        </Reveal>
                    ))}
                </div>
            </div>
        </Section>
    );
};

export default Articles;
