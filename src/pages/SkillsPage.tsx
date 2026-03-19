import React, { useEffect, useRef } from 'react';
import { Helmet } from 'react-helmet-async';
import { gsap } from 'gsap';
// @ts-ignore
import getSkillsList from '../info/SkillsList';

const SkillsPage: React.FC = () => {
    const containerRef = useRef<HTMLDivElement>(null);

    const originalSkills = getSkillsList();

    useEffect(() => {
        const ctx = gsap.context(() => {
            gsap.fromTo('.skill-category',
                { opacity: 0, y: 40 },
                { opacity: 1, y: 0, duration: 0.8, stagger: 0.15, ease: 'power3.out' }
            );
        }, containerRef);
        return () => ctx.revert();
    }, []);

    return (
        <div className="container mx-auto px-4 py-16" ref={containerRef}>
            <Helmet>
                <title>Yazan Tarifi - Skills & Expertise</title>
                <meta name="description" content="Technical skills and technology stack of Yazan Tarifi — Kotlin, Java, TypeScript, Swift, and more." />
                <link rel="canonical" href="https://yazantarifi.com/skills" />
                <meta property="og:title" content="Yazan Tarifi - Skills & Expertise" />
                <meta property="og:description" content="Technical skills and technology stack of Yazan Tarifi — Kotlin, Java, TypeScript, Swift, and more." />
                <meta property="og:url" content="https://yazantarifi.com/skills" />
            </Helmet>

            <div className="mb-16 text-center md:text-left max-w-3xl">
                <h1 className="text-4xl md:text-5xl font-display font-bold text-gray-900 dark:text-white mb-4">
                    Technical Arsenal
                </h1>
                <p className="text-lg text-gray-600 dark:text-gray-400">
                    I build robust and scalable systems across the entire technology stack, using these world-class tools and languages.
                </p>
            </div>

            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
                {originalSkills.map((skill: any, idx: number) => (
                    <div key={idx} className="skill-category bg-white dark:bg-dark-200 rounded-2xl p-8 border border-gray-100 dark:border-gray-800 shadow-sm hover:shadow-lg hover:border-primary-500/50 transition-all duration-300">
                        <div className="flex items-center gap-4 mb-6">
                            <div className="w-16 h-16 p-2 bg-gray-50 dark:bg-dark-100 rounded-xl border border-gray-100 dark:border-gray-800 flex items-center justify-center overflow-hidden">
                                <img src={skill.icon} alt={skill.name} className="max-w-full max-h-full object-contain" />
                            </div>
                            <h2 className="text-2xl font-bold text-gray-900 dark:text-white">{skill.name}</h2>
                        </div>

                        <p className="text-sm text-gray-600 dark:text-gray-400 mb-6 leading-relaxed">
                            {skill.description}
                        </p>

                        <div className="flex flex-wrap gap-2">
                            {skill.tags.split(' . ').map((tag: string) => (
                                <span
                                    key={tag}
                                    className="px-3 py-1.5 bg-primary-50 dark:bg-primary-900/10 border border-primary-200 dark:border-primary-800/30 rounded-lg text-xs font-semibold text-primary-700 dark:text-primary-400 hover:bg-primary-100 dark:hover:bg-primary-900/30 transition-colors cursor-default"
                                >
                                    {tag}
                                </span>
                            ))}
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default SkillsPage;
