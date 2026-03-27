import React, { useEffect, useState, useRef } from 'react';
import { useParams, Link } from 'react-router-dom';
import { Helmet } from 'react-helmet-async';
import { ArrowLeft, Github, Globe, Layers, ListChecks, Smartphone, Server } from 'lucide-react';
import { gsap } from 'gsap';

// @ts-ignore
import getProjectsList from '../info/ProjectsList';

const ProjectDetailsPage: React.FC = () => {
    const { id } = useParams<{ id: string }>();
    const [project, setProject] = useState<any | null>(null);
    const containerRef = useRef<HTMLDivElement>(null);

    useEffect(() => {
        const projects = getProjectsList();
        const found = projects.find((p: any) => p.id === Number(id) || p.id === id);
        if (found) {
            setProject(found);
        }
    }, [id]);

    useEffect(() => {
        if (!project) return;
        const ctx = gsap.context(() => {
            const tl = gsap.timeline({ delay: 0.1 });
            tl.from('.header-fade', { y: 20, opacity: 0, duration: 0.6, stagger: 0.1, ease: 'power2.out' })
                .from('.content-fade', { y: 30, opacity: 0, duration: 0.8, stagger: 0.15, ease: 'power3.out' }, "-=0.3");
        }, containerRef);
        return () => ctx.revert();
    }, [project]);

    if (!project) {
        return (
            <div className="min-h-screen bg-dark-300 flex items-center justify-center">
                <p className="text-white text-2xl font-display">Project Not Found...</p>
                <Link to="/" className="ml-4 text-primary-500 hover:underline">Go Back</Link>
            </div>
        );
    }

    return (
        <div className="min-h-screen bg-dark-300 overflow-x-hidden pt-12">
            <Helmet>
                <title>{project.name} - Yazan Tarifi</title>
                <meta name="description" content={`Detailed case study and overview of the ${project.name} project.`} />
                <link rel="canonical" href={`https://www.yazantarifi.com/project/${project.id || id}`} />
            </Helmet>

            <div ref={containerRef} className="container mx-auto px-4 max-w-6xl py-12">
                {/* Back Link */}
                <Link to="/" className="header-fade inline-flex items-center gap-2 text-gray-400 hover:text-white transition-colors mb-10 group">
                    <ArrowLeft size={20} className="group-hover:-translate-x-1 transition-transform" /> Back to Home
                </Link>

                {/* Header Section */}
                <header className="mb-16">
                    <span className="header-fade inline-block px-3 py-1.5 rounded-lg bg-primary-600/20 text-primary-400 border border-primary-500/30 text-sm font-bold uppercase tracking-wider mb-6">
                        {project.type === 'ANDROID_APP' || project.type === 'android' ? 'Android Native' : project.type.replace('_', ' ')}
                    </span>
                    <h1 className="header-fade text-5xl md:text-7xl font-display font-bold text-white mb-6">
                        {project.name}
                    </h1>
                    <p className="header-fade text-xl md:text-2xl text-gray-400 leading-relaxed max-w-4xl">
                        {project.description}
                    </p>
                </header>

                {/* Big Hero Image */}
                {project.image && (
                    <div className="content-fade w-full rounded-[2rem] overflow-hidden bg-dark-200 border border-gray-800 shadow-2xl shadow-primary-900/20 mb-20 relative flex items-center justify-center min-h-[60vh] md:min-h-[75vh] xl:min-h-[100vh]">
                        <img src={project.image} alt={project.name} className="absolute inset-0 w-full h-full object-cover" />
                    </div>
                )}

                {/* Main Content Split Layout */}
                <div className="content-fade grid grid-cols-1 lg:grid-cols-3 gap-12 mb-20">

                    {/* Left Column: Context & Tech Stack */}
                    <div className="lg:col-span-1 space-y-12">
                        {/* Technologies */}
                        <div className="p-8 bg-dark-200/50 rounded-3xl border border-gray-800">
                            <h3 className="text-xl font-display font-bold text-white mb-6 flex items-center gap-2">
                                <Layers className="text-primary-500" size={24} /> Technologies
                            </h3>
                            <div className="flex flex-wrap gap-2">
                                {(project.tags || []).map((tech: string) => (
                                    <span key={tech} className="px-4 py-2 bg-dark-100 border border-gray-700/50 text-gray-300 text-sm rounded-xl">
                                        {tech}
                                    </span>
                                ))}
                            </div>
                        </div>

                        {/* Links */}
                        <div className="p-8 bg-dark-200/50 rounded-3xl border border-gray-800">
                            <h3 className="text-xl font-display font-bold text-white mb-6 flex items-center gap-2">
                                <Globe className="text-primary-500" size={24} /> Links
                            </h3>
                            <div className="flex flex-col gap-4">
                                {project.link && (
                                    <a href={project.link} target="_blank" rel="noopener noreferrer" className="flex items-center gap-3 p-4 bg-dark-100 hover:bg-white hover:text-dark-300 text-gray-300 rounded-xl transition-colors font-medium">
                                        {project.link.includes('github.com') ? <Github size={20} /> : <Globe size={20} />}
                                        {project.link.includes('github.com') ? 'View Source Code' : 'Visit Project'}
                                    </a>
                                )}
                                {!project.link && (
                                    <p className="text-gray-500 italic">Project link not available publicly.</p>
                                )}
                            </div>
                        </div>
                    </div>

                    {/* Right Column: About & Learnings */}
                    <div className="lg:col-span-2 space-y-12">
                        <section className="prose prose-invert prose-lg max-w-none">
                            <h2 className="text-3xl font-display font-bold text-white mb-6">About the Project</h2>
                            <p className="text-gray-300 leading-relaxed">
                                {project.description}
                                <br /><br />
                                {project.longDescription}
                            </p>
                        </section>

                        <div className="w-full h-px bg-gradient-to-r from-gray-800 via-gray-700 to-gray-800 my-12 hidden md:block"></div>

                        {/* <section className="prose prose-invert prose-lg max-w-none">
                            <h2 className="text-3xl font-display font-bold text-white mb-6 flex items-center gap-3">
                                <ListChecks className="text-primary-500" size={28} /> What I Learned
                            </h2>
                            <ul className="list-disc pl-6 space-y-4 text-gray-300 leading-relaxed">
                                <li>Architecting scalable application states using single source of truth paradigms.</li>
                                <li>Optimizing rendering passes for heavily nested dynamic views.</li>
                                <li>Building robust, resilient data-fetching layers with retry logic and offline caching.</li>
                                <li>Implementing cutting-edge Native design systems and animations.</li>
                            </ul>
                        </section> */}
                    </div>
                </div>

                {/* Screenshots Gallery Component */}
                {project.images && project.images.length > 0 && (
                    <section className="content-fade mb-20">
                        <h2 className="text-3xl font-display font-bold text-white mb-8">Screenshots Gallery</h2>
                        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8">
                            {project.images.map((img: string, index: number) => (
                                <div key={index} className="aspect-[9/16] bg-dark-200 border border-gray-800 rounded-3xl overflow-hidden flex items-center justify-center relative group p-4 xl:p-6 transition-all duration-300 hover:border-primary-500/50 hover:shadow-[0_0_30px_-5px_var(--primary-500-alpha-20)] hover:-translate-y-2">
                                    <div className="absolute inset-0 bg-primary-900/5 mix-blend-overlay z-10 transition-opacity duration-300 group-hover:opacity-0"></div>
                                    <img src={img} alt={`${project.name} Screenshot ${index + 1}`} className="w-full h-full object-contain filter group-hover:brightness-110 transition-all duration-500" />
                                </div>
                            ))}
                        </div>
                    </section>
                )}
            </div>
        </div>
    );
};

export default ProjectDetailsPage;
