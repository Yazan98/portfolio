import React from 'react';
import Icon from '../ui/Icon';

export interface Article {
    title: string;
    description: string;
    date: string;
    readTime: string;
    link: string;
    tags: string[];
    image?: string;
}

const ArticleCard: React.FC<{ article: Article }> = ({ article }) => (
    <a
        href={article.link}
        target="_blank"
        rel="noopener noreferrer"
        className="group flex h-full flex-col overflow-hidden rounded-[22px] border border-line10 bg-paper no-underline transition-all duration-300 hover:-translate-y-1.5 hover:border-line14 hover:shadow-card"
    >
        {article.image && (
            <div className="relative aspect-[16/9] w-full overflow-hidden bg-chip">
                <img
                    src={article.image}
                    alt={article.title}
                    loading="lazy"
                    className="h-full w-full object-cover transition-transform duration-[700ms] group-hover:scale-105"
                />
            </div>
        )}
        <div className="flex flex-1 flex-col gap-3 p-6">
            <div className="flex flex-wrap gap-2">
                {article.tags.slice(0, 3).map((t) => (
                    <span key={t} className="chip">{t}</span>
                ))}
            </div>
            <h3 className="m-0 line-clamp-2 font-display text-[18px] font-semibold leading-snug tracking-[-0.01em] text-ink transition-colors group-hover:text-acc">
                {article.title}
            </h3>
            <p className="m-0 line-clamp-3 text-sm leading-relaxed text-ink2">{article.description}</p>
            <div className="mt-auto flex items-center justify-between border-t border-line08 pt-4 font-mono text-[11.5px] text-ink2">
                <span>{article.date}</span>
                <span className="inline-flex items-center gap-1.5">
                    {article.readTime}
                    <Icon name="arrow-up-right" size={13} className="text-acc" />
                </span>
            </div>
        </div>
    </a>
);

export default ArticleCard;
