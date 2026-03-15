import React, { useEffect, useRef, useState } from 'react';
import { Helmet } from 'react-helmet-async';
import { gsap } from 'gsap';
import { ExternalLink, Github } from 'lucide-react';

const mockProjects = [
    { id: 1, title: 'Enterprise Banking App', category: 'Mobile App', tech: ['Kotlin', 'Android', 'MVVM'], desc: 'High-security banking platform serving 2M+ users.' },
    { id: 2, title: 'Defi Crypto Exchange', category: 'Web App', tech: ['React', 'Next.js', 'Web3'], desc: 'Real-time crypto trading interface with millisecond latency.' },
    { id: 3, title: 'Fitness Tracking Ecosystem', category: 'Mobile App', tech: ['Swift', 'iOS', 'HealthKit'], desc: 'Comprehensive health monitoring and workout planning.' },
    { id: 4, title: 'AI Code Assistant CLI', category: 'Tooling', tech: ['Go', 'OpenAI'], desc: 'Command line tool for rapid codebase scaffolding.' },
    { id: 5, title: 'E-commerce Backend', category: 'Backend', tech: ['Nest.js', 'PostgreSQL', 'Redis'], desc: 'Microservices architecture handling 10k RPS.' },
    { id: 6, title: 'Smart Home Hub', category: 'Web App', tech: ['React', 'Firebase'], desc: 'IoT dashboard for controlling smart home devices.' },
];

const categories = ['All', 'Mobile App', 'Web App', 'Backend', 'Tooling'];

const ProjectsPage: React.FC = () => {
    const [filter, setFilter] = useState('All');
    const containerRef = useRef<HTMLDivElement>(null);

    const filteredProjects = filter === 'All'
        ? mockProjects
        : mockProjects.filter(p => p.category === filter);

    useEffect(() => {
        const ctx = gsap.context(() => {
            gsap.fromTo('.project-card',
                { y: 30, opacity: 0 },
                { y: 0, opacity: 1, duration: 0.6, stagger: 0.1, ease: 'power2.out', clearProps: "all" }
            );
        }, containerRef);
        return () => ctx.revert();
    }, [filter]);

    return (
        <div className="container mx-auto px-4 py-16" ref={containerRef}>
            <Helmet>
                <title>Yazan Tarifi - Projects</title>
                <meta name="description" content="Explore Yazan Tarifi's premium software engineering portfolio." />
            </Helmet>

            <div className="mb-12 text-center md:text-left">
                <h1 className="text-4xl md:text-5xl font-display font-bold text-gray-900 dark:text-white mb-4">
                    Featured Work
                </h1>
                <p className="text-lg text-gray-600 dark:text-gray-400 max-w-2xl">
                    A selection of robust applications and complex systems I've architected and built over the years.
                </p>
            </div>

            <div className="flex flex-wrap gap-2 mb-10 justify-center md:justify-start">
                {categories.map(cat => (
                    <button
                        key={cat}
                        onClick={() => setFilter(cat)}
                        className={`px-5 py-2 rounded-full text-sm font-medium transition-all ${filter === cat ? 'bg-primary-600 text-white shadow-md' : 'bg-gray-100 dark:bg-dark-100 text-gray-700 dark:text-gray-300 hover:bg-gray-200 dark:hover:bg-dark-200'}`}
                    >
                        {cat}
                    </button>
                ))}
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                {filteredProjects.map(project => (
                    <div key={project.id} className="project-card group bg-white dark:bg-dark-200 border border-gray-100 dark:border-gray-800 rounded-2xl p-6 hover:shadow-xl hover:border-primary-500/30 transition-all duration-300 flex flex-col h-full">
                        <div className="flex justify-between items-start mb-4">
                            <span className="text-xs font-semibold uppercase tracking-wider text-primary-500 dark:text-primary-400">
                                {project.category}
                            </span>
                            <div className="flex gap-2">
                                <button className="text-gray-400 hover:text-gray-900 dark:hover:text-white transition-colors">
                                    <Github size={18} />
                                </button>
                                <button className="text-gray-400 hover:text-primary-500 transition-colors">
                                    <ExternalLink size={18} />
                                </button>
                            </div>
                        </div>

                        <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-3 group-hover:text-primary-500 transition-colors">
                            {project.title}
                        </h3>

                        <p className="text-gray-600 dark:text-gray-400 text-sm mb-6 flex-grow leading-relaxed">
                            {project.desc}
                        </p>

                        <div className="flex flex-wrap gap-2 mt-auto pt-4 border-t border-gray-100 dark:border-gray-800/50">
                            {project.tech.map(tech => (
                                <span key={tech} className="text-xs px-2 py-1 rounded bg-gray-50 dark:bg-dark-100 text-gray-600 dark:text-gray-400 font-medium border border-gray-100 dark:border-gray-800">
                                    {tech}
                                </span>
                            ))}
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default ProjectsPage;
