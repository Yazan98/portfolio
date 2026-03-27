import React, { useEffect, useRef, useState } from 'react';
import { Helmet } from 'react-helmet-async';
import { gsap } from 'gsap';
import { Github, Globe } from 'lucide-react';

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
        <div className="w-full px-6 md:px-12 lg:px-16 py-16 max-w-[1600px] mx-auto" ref={containerRef}>
            <Helmet>
                <title>Yazan Tarifi - Projects</title>
                <meta name="description" content="Browse all projects built by Yazan Tarifi — Android apps, iOS apps, backend systems, and web applications." />
                <link rel="canonical" href="https://www.yazantarifi.com/projects" />
                <meta property="og:title" content="Yazan Tarifi - Projects" />
                <meta property="og:description" content="Browse all projects built by Yazan Tarifi — Android apps, iOS apps, backend systems, and web applications." />
                <meta property="og:url" content="https://www.yazantarifi.com/projects" />
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

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 xl:grid-cols-4 gap-6 md:gap-8">
                {filteredProjects.map((project: any) => (
                    <div key={project.id} className="project-card group [perspective:1500px] h-[260px] sm:h-[280px]">
                        {/* 3D Flip Container wrapper */}
                        <div className="relative w-full h-full transition-all duration-700 [transform-style:preserve-3d] group-hover:[transform:rotateY(180deg)] shadow-xl hover:shadow-primary-500/20 rounded-2xl">

                            {/* Front Face: Image Cover */}
                            <div className="absolute inset-0 w-full h-full [backface-visibility:hidden] rounded-2xl overflow-hidden bg-dark-200 border border-gray-100 dark:border-gray-800">
                                {project.image ? (
                                    <>
                                        <img src={project.image} alt={project.name} className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110" />
                                        <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/30 to-transparent"></div>
                                    </>
                                ) : (
                                    <div className="w-full h-full flex items-center justify-center bg-dark-100">
                                        <span className="text-gray-500 font-medium">No Image Available</span>
                                    </div>
                                )}

                                {/* Overlay Title on Front */}
                                <div className="absolute bottom-6 left-6 right-6 flex items-end justify-between">
                                    <h3 className="text-2xl font-display font-bold text-white drop-shadow-md">
                                        {project.name}
                                    </h3>
                                    <span className="text-xs font-semibold px-3 py-1 bg-primary-500/20 text-primary-400 rounded-full border border-primary-500/30 backdrop-blur-sm">
                                        {categories.find(c => c.value === project.type)?.label || project.type}
                                    </span>
                                </div>
                            </div>

                            {/* Back Face: Content & CTA */}
                            <div className="absolute inset-0 w-full h-full [backface-visibility:hidden] [transform:rotateY(180deg)] rounded-2xl bg-white dark:bg-dark-200 border border-primary-500/40 p-6 sm:p-8 flex flex-col justify-between overflow-hidden">
                                {/* Ambient Background Glow */}
                                <div className="absolute top-0 right-0 w-48 h-48 bg-primary-900/10 rounded-full blur-3xl pointer-events-none -mr-10 -mt-10"></div>

                                <div>
                                    <div className="flex justify-between items-center mb-4 relative z-10">
                                        {project.link && (
                                            <a href={project.link} target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-2 text-gray-500 hover:text-white transition-colors bg-dark-100 px-3 py-1.5 rounded-md border border-gray-800 text-sm">
                                                {project.link.includes('github.com') ? <Github size={16} /> : <Globe size={16} />} 
                                                {project.link.includes('github.com') ? 'Repository' : 'Visit'}
                                            </a>
                                        )}
                                        <span className="text-xs text-primary-400 font-medium tracking-wide">
                                            {project.createdAt}
                                        </span>
                                    </div>
                                    <div className="relative z-10">
                                        <p className="text-gray-600 dark:text-gray-300 text-sm sm:text-base leading-relaxed mb-6 line-clamp-5">
                                            {project.description}
                                        </p>
                                    </div>
                                </div>

                                <div className="relative z-10 flex flex-col gap-6 mt-auto">
                                    {/* Tech Tags */}
                                    <div className="flex flex-wrap gap-2">
                                        {(project.tags || []).slice(0, 5).map((tech: any) => (
                                            <span key={tech} className="text-[11px] px-2.5 py-1 rounded bg-dark-300 text-gray-400 font-medium border border-gray-800">
                                                {tech}
                                            </span>
                                        ))}
                                        {(project.tags && project.tags.length > 5) && (
                                            <span className="text-[11px] px-2.5 py-1 rounded bg-dark-300/50 text-gray-500 border border-gray-800/50">
                                                +{project.tags.length - 5}
                                            </span>
                                        )}
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default ProjectsPage;
