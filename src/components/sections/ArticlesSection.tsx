import React, { useEffect, useRef, useState } from 'react';
import { gsap } from 'gsap';
import { ExternalLink, BookOpen, Clock } from 'lucide-react';
import { FaMediumM } from 'react-icons/fa';

// @ts-ignore
import getArticlesList from '../../info/ArticlesList';

const ArticlesSection: React.FC = () => {
    const containerRef = useRef<HTMLElement>(null);
    const [articles, setArticles] = useState<any[]>([]);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        fetch(`https://api.rss2json.com/v1/api.json?rss_url=https://medium.com/feed/@yazantarifi98?t=${new Date().getTime()}`, { cache: 'no-store' })
            .then(res => res.json())
            .then(data => {
                if (data.status === 'ok' && data.items) {
                    const fetchedArticles = data.items.slice(0, 6).map((item: any) => {
                        let image = item.thumbnail;
                        if (!image && item.description) {
                            const match = item.description.match(/<img[^>]+src="([^">]+)"/);
                            if (match) image = match[1];
                        }
                        if (!image) image = 'https://images.unsplash.com/photo-1555066931-4365d14bab8c?q=80&w=2670&auto=format&fit=crop';

                        // Parse description safely without DOM element if possible (for SSR safety) or using regex
                        const cleanDescription = item.description.replace(/<[^>]*>?/gm, '').replace(/Continue reading on Medium.*/, '').trim();

                        return {
                            title: item.title,
                            description: cleanDescription.length > 150 ? cleanDescription.substring(0, 150) + '...' : cleanDescription,
                            date: new Date(item.pubDate).toLocaleDateString('en-US', { year: 'numeric', month: 'short', day: 'numeric' }),
                            readTime: '5 min read',
                            link: item.link,
                            tags: item.categories && item.categories.length > 0 ? item.categories.slice(0, 3) : ['Article'],
                            image: image
                        };
                    });
                    setArticles(fetchedArticles);
                } else {
                    setArticles(getArticlesList());
                }
            })
            .catch(err => {
                console.error('Failed to fetch Medium articles:', err);
                setArticles(getArticlesList());
            })
            .finally(() => {
                setLoading(false);
            });
    }, []);

    useEffect(() => {
        if (loading) return;

        const ctx = gsap.context(() => {
            gsap.from('.article-card', {
                y: 20,
                duration: 0.8,
                stagger: 0.15,
                ease: 'power3.out'
            });
        }, containerRef);
        return () => ctx.revert();
    }, [loading]);

    return (
        <section ref={containerRef} className="container mx-auto px-4 max-w-6xl py-24 relative">
            <div className="absolute top-1/2 left-0 w-[400px] h-[400px] bg-purple-600/10 blur-[120px] rounded-full mix-blend-screen pointer-events-none"></div>

            <div className="relative z-10 flex flex-col md:flex-row items-center justify-between gap-6 mb-16">
                <div>
                    <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-dark-100 border border-gray-800 text-purple-400 text-sm font-semibold mb-4 shadow-sm">
                        <BookOpen size={16} /> Technical Writing
                    </div>
                    <h2 className="text-4xl md:text-5xl font-display font-black text-white">
                        Latest <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-pink-400">Articles</span>
                    </h2>
                </div>

                <a
                    href="https://medium.com/@yazantarifi98"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-2 px-6 py-3 rounded-full bg-dark-200 border border-gray-800 hover:border-purple-500/50 text-white font-semibold transition-all hover:bg-white hover:text-black group"
                >
                    <FaMediumM size={20} className="text-white group-hover:text-black transition-colors" />
                    Read More on Medium
                </a>
            </div>

            <div className="relative z-10 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                {articles.map((article: any, index: number) => (
                    <a
                        key={index}
                        href={article.link}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="article-card group flex flex-col h-full bg-dark-200/40 border border-gray-800 rounded-3xl overflow-hidden hover:border-purple-500/30 transition-all duration-300 hover:shadow-[0_8px_30px_rgb(0,0,0,0.2)] hover:-translate-y-2"
                    >
                        <div className="relative h-48 w-full shrink-0 overflow-hidden">
                            <div className="absolute inset-0 bg-dark-300/20 group-hover:bg-transparent transition-colors z-10"></div>
                            <img
                                src={article.image}
                                alt={article.title}
                                className="w-full h-full object-cover transform group-hover:scale-110 transition-transform duration-700"
                            />
                            <div className="absolute top-4 right-4 z-20 bg-dark-300/80 backdrop-blur-md p-2 rounded-full border border-gray-700 opacity-0 group-hover:opacity-100 transition-opacity transform translate-y-2 group-hover:translate-y-0 duration-300">
                                <ExternalLink size={18} className="text-purple-400" />
                            </div>
                        </div>

                        <div className="p-6 flex-1 flex flex-col">
                            <div className="flex gap-2 mb-4 flex-wrap">
                                {article.tags.map((tag: string) => (
                                    <span key={tag} className="text-xs font-bold px-2 py-1 rounded-md bg-dark-100 border border-gray-700 text-purple-300 uppercase tracking-wider">
                                        {tag}
                                    </span>
                                ))}
                            </div>

                            <h3 className="text-xl font-bold text-white mb-3 group-hover:text-purple-400 transition-colors line-clamp-2">
                                {article.title}
                            </h3>

                            <p className="text-gray-400 text-sm mb-6 flex-1 line-clamp-3 leading-relaxed">
                                {article.description}
                            </p>

                            <div className="flex items-center justify-between text-xs font-medium text-gray-500 border-t border-gray-800 pt-4 mt-auto">
                                <span>{article.date}</span>
                                <span className="flex items-center gap-1"><Clock size={14} /> {article.readTime}</span>
                            </div>
                        </div>
                    </a>
                ))}
            </div>
        </section>
    );
};

export default ArticlesSection;
