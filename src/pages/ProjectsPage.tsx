import React, { useEffect, useRef, useState } from 'react';
import { Helmet } from 'react-helmet-async';
import { gsap } from 'gsap';
import { Github } from 'lucide-react';

// @ts-ignore
import getProjectsList, {
    ALL_FILTER_TYPE,
    ANDROID_FILTER_TYPE,
    IOS_FILTER_TYPE,
    WEBSITES_FILTER_TYPE,
    WEB_APPS_FILTER_TYPE,
    MAC_APPS_FILTER_TYPE,
    TOOLS_FILTER_TYPE
} from '../info/ProjectsList';

interface Project {
    id: string;
    name: string;
    type: string;
    description: string;
    createdAt: string;
    image?: string;
    link?: string;
    tags?: string[];
}

const categories = [
    { label: 'All', value: ALL_FILTER_TYPE },
    { label: 'Android Apps', value: ANDROID_FILTER_TYPE },
    { label: 'iOS Apps', value: IOS_FILTER_TYPE },
    { label: 'Web Apps', value: WEB_APPS_FILTER_TYPE },
    { label: 'Websites', value: WEBSITES_FILTER_TYPE },
    { label: 'macOS Apps', value: MAC_APPS_FILTER_TYPE },
    { label: 'Tools', value: TOOLS_FILTER_TYPE },
];

const ProjectsPage: React.FC = () => {
    const [filter, setFilter] = useState(ALL_FILTER_TYPE);
    const containerRef = useRef<HTMLDivElement>(null);

    const allProjects = getProjectsList();

    const filteredProjects = filter === ALL_FILTER_TYPE
        ? allProjects
        : allProjects.filter((p: any) => p.type === filter);

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
                        key={cat.value}
                        onClick={() => setFilter(cat.value)}
                        className={`px-5 py-2 rounded-full text-sm font-medium transition-all ${filter === cat.value ? 'bg-primary-600 text-white shadow-md' : 'bg-gray-100 dark:bg-dark-100 text-gray-700 dark:text-gray-300 hover:bg-gray-200 dark:hover:bg-dark-200'}`}
                    >
                        {cat.label}
                    </button>
                ))}
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                {filteredProjects.map((project: any) => (
                    <div key={project.id} className="project-card group bg-white dark:bg-dark-200 border border-gray-100 dark:border-gray-800 rounded-2xl p-6 hover:shadow-xl hover:border-primary-500/30 transition-all duration-300 flex flex-col h-full overflow-hidden relative">

                        {/* Project Image Banner */}
                        {project.image && (
                            <div className="absolute inset-0 h-48 w-full overflow-hidden rounded-t-2xl z-0 opacity-20 group-hover:opacity-40 transition-opacity">
                                <img src={project.image} alt={project.name} className="w-full h-full object-cover" />
                                <div className="absolute inset-0 bg-gradient-to-t from-dark-200 to-transparent"></div>
                            </div>
                        )}

                        <div className="flex justify-between items-start mb-4 relative z-10 pt-32">
                            <span className="text-xs font-semibold uppercase tracking-wider text-primary-500 dark:text-primary-400">
                                {categories.find(c => c.value === project.type)?.label || project.type}
                            </span>
                            <div className="flex gap-2">
                                {project.link && (
                                    <a href={project.link} target="_blank" rel="noopener noreferrer" className="text-gray-500 hover:text-white transition-colors">
                                        <Github size={18} />
                                    </a>
                                )}
                            </div>
                        </div>

                        <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-2 relative z-10 group-hover:text-primary-500 transition-colors">
                            {project.name}
                        </h3>
                        <p className="text-xs text-primary-400 mb-4 relative z-10 font-medium">
                            {project.createdAt}
                        </p>

                        <p className="text-gray-600 dark:text-gray-400 text-sm mb-6 flex-grow leading-relaxed relative z-10">
                            {project.description}
                        </p>

                        <div className="flex flex-wrap gap-2 mt-auto pt-4 border-t border-gray-100 dark:border-gray-800/50 relative z-10">
                            {(project.tags || []).map((tech: any) => (
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
