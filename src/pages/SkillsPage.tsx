import React, { useEffect, useRef } from 'react';
import { Helmet } from 'react-helmet-async';
import { gsap } from 'gsap';
import { Code2, Smartphone, Database, Layers, GitBranch, Terminal } from 'lucide-react';

const skillCategories = [
    {
        title: 'Mobile Development',
        icon: <Smartphone className="w-6 h-6 text-blue-500" />,
        skills: ['Kotlin', 'Java', 'Android SDK', 'Jetpack Compose', 'MVVM', 'Coroutines', 'Swift', 'iOS']
    },
    {
        title: 'Frontend Engineering',
        icon: <Code2 className="w-6 h-6 text-teal-500" />,
        skills: ['React.js', 'Next.js', 'TypeScript', 'Tailwind CSS', 'GSAP', 'Redux', 'Vite']
    },
    {
        title: 'Backend Systems',
        icon: <Database className="w-6 h-6 text-purple-500" />,
        skills: ['Nest.js', 'Spring Boot', 'Node.js', 'PostgreSQL', 'MongoDB', 'Redis', 'GraphQL']
    },
    {
        title: 'DevOps & Architecture',
        icon: <Layers className="w-6 h-6 text-orange-500" />,
        skills: ['Docker', 'AWS', 'CI/CD Pipelines', 'Microservices', 'System Design', 'Nginx']
    },
    {
        title: 'Tooling & CI',
        icon: <Terminal className="w-6 h-6 text-gray-500" />,
        skills: ['Bash', 'Git', 'Gradle', 'Fastlane', 'Webpack', 'CLI Engineering']
    }
];

const SkillsPage: React.FC = () => {
    const containerRef = useRef<HTMLDivElement>(null);

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
                <meta name="description" content="Technical skills and technology stack of Yazan Tarifi." />
            </Helmet>

            <div className="mb-16 text-center md:text-left max-w-3xl">
                <h1 className="text-4xl md:text-5xl font-display font-bold text-gray-900 dark:text-white mb-4">
                    Technical Arsenal
                </h1>
                <p className="text-lg text-gray-600 dark:text-gray-400">
                    I build robust and scalable systems across the entire technology stack, specializing in Mobile, Web, and Backend orchestration.
                </p>
            </div>

            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
                {skillCategories.map((category, idx) => (
                    <div key={idx} className="skill-category bg-white dark:bg-dark-200 rounded-2xl p-8 border border-gray-100 dark:border-gray-800 shadow-sm hover:shadow-lg transition-shadow duration-300">
                        <div className="flex items-center gap-4 mb-6">
                            <div className="p-3 bg-gray-50 dark:bg-dark-100 rounded-xl border border-gray-100 dark:border-gray-800">
                                {category.icon}
                            </div>
                            <h2 className="text-2xl font-bold text-gray-900 dark:text-white">{category.title}</h2>
                        </div>

                        <div className="flex flex-wrap gap-3">
                            {category.skills.map((skill) => (
                                <span
                                    key={skill}
                                    className="px-4 py-2 bg-gray-50 dark:bg-dark-300 border border-gray-200 dark:border-gray-700 rounded-lg text-sm font-medium text-gray-800 dark:text-gray-200 hover:border-primary-500 dark:hover:border-primary-500 hover:text-primary-600 dark:hover:text-primary-400 transition-colors cursor-default"
                                >
                                    {skill}
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
