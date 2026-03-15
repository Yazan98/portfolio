import React, { useEffect, useRef } from 'react';
import { gsap } from 'gsap';
import { Github, Linkedin, Mail, Twitter, ArrowRight, Layers, Smartphone, Server, ChevronLeft, ChevronRight, Code2, AppWindow } from 'lucide-react';
import { FaMediumM } from 'react-icons/fa';
import { Helmet } from 'react-helmet-async';
import { Link } from 'react-router-dom';
import InteractiveBackground from '../components/ui/InteractiveBackground';

// @ts-ignore
import getProjectsList from '../info/ProjectsList';

const languages = [
    { name: 'Kotlin', tag: 'Mobile / Backend', icon: <img src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/kotlin/kotlin-original.svg" alt="Kotlin" className="w-10 h-10 drop-shadow-md group-hover:drop-shadow-[0_0_12px_rgba(0,149,213,0.6)] transition-all duration-300" /> },
    { name: 'Java', tag: 'Enterprise', icon: <img src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/java/java-original.svg" alt="Java" className="w-10 h-10 drop-shadow-md group-hover:drop-shadow-[0_0_12px_rgba(237,139,0,0.6)] transition-all duration-300" /> },
    { name: 'TypeScript', tag: 'Frontend / APIs', icon: <img src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/typescript/typescript-original.svg" alt="TypeScript" className="w-10 h-10 drop-shadow-md group-hover:drop-shadow-[0_0_12px_rgba(49,120,198,0.6)] transition-all duration-300" /> },
    { name: 'Swift', tag: 'iOS Native', icon: <img src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/swift/swift-original.svg" alt="Swift" className="w-10 h-10 drop-shadow-md group-hover:drop-shadow-[0_0_12px_rgba(240,81,56,0.6)] transition-all duration-300" /> },
    { name: 'JavaScript', tag: 'Web / Full-Stack', icon: <img src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/javascript/javascript-original.svg" alt="JavaScript" className="w-10 h-10 drop-shadow-md group-hover:drop-shadow-[0_0_12px_rgba(247,223,30,0.6)] transition-all duration-300" /> },
    { name: 'Ruby', tag: 'Scripting', icon: <img src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/ruby/ruby-original.svg" alt="Ruby" className="w-10 h-10 drop-shadow-md group-hover:drop-shadow-[0_0_12px_rgba(204,52,45,0.6)] transition-all duration-300" /> },
];

const HomePage: React.FC = () => {
    const containerRef = useRef<HTMLDivElement>(null);
    const projectsScrollRef = useRef<HTMLDivElement>(null);

    // Fetch top 5 projects for the featured carousel
    const featuredProjects = getProjectsList().slice(0, 5);

    useEffect(() => {
        // Complex GSAP Entrance Animation
        const ctx = gsap.context(() => {
            const tl = gsap.timeline({ delay: 0.2 });

            tl.from('.hero-badge', { y: 20, opacity: 0, duration: 0.6, ease: 'back.out(1.7)' })
                .from('.hero-title-line', { y: 40, opacity: 0, rotationX: -20, duration: 0.8, stagger: 0.15, ease: 'power3.out' }, "-=0.3")
                .from('.hero-desc', { y: 20, opacity: 0, duration: 0.6, ease: 'power2.out' }, "-=0.4")
                .from('.hero-metrics .metric-item', { scale: 0.8, opacity: 0, duration: 0.5, stagger: 0.1, ease: 'back.out(1.5)' }, "-=0.2")
                .from('.hero-buttons', { y: 20, opacity: 0, duration: 0.5, ease: 'power2.out' }, "-=0.3")
                .fromTo('.hero-socials', { opacity: 0, y: 10 }, { opacity: 1, y: 0, duration: 0.5, ease: 'power2.out' }, "-=0.2")
                .from('.content-section', { y: 40, opacity: 0, duration: 0.8, stagger: 0.2, ease: 'power2.out' }, "-=0.2");
        }, containerRef);

        return () => ctx.revert();
    }, []);

    const scrollProjects = (direction: 'left' | 'right') => {
        if (projectsScrollRef.current) {
            const { clientWidth } = projectsScrollRef.current;
            projectsScrollRef.current.scrollBy({ left: direction === 'left' ? -clientWidth : clientWidth, behavior: 'smooth' });
        }
    };

    return (
        <div className="relative min-h-[calc(100vh-4rem)] bg-dark-300">
            <Helmet>
                <title>Yazan Tarifi - Software Engineer</title>
                <meta name="description" content="Portfolio of Yazan Tarifi - Enterprise Mobile & Backend Developer" />
            </Helmet>

            {/* High-Performance Canvas Interactive Layer */}
            <InteractiveBackground />

            {/* Animated Purple Gradient Background Setup (Alpha 0.3) */}
            <div className="fixed inset-0 z-0 animate-gradient-bg bg-[length:400%_400%] bg-gradient-to-br from-[#1a0532]/30 via-[#3a0b6e]/30 to-[#0f0022]/30 pointer-events-none opacity-100 mix-blend-screen"></div>

            {/* Main Content Overlay */}
            <div ref={containerRef} className="relative z-10 w-full pt-20">
                <section className="container mx-auto px-4 max-w-5xl flex flex-col items-center text-center mb-32">

                    {/* Badge */}
                    <div className="hero-badge inline-flex items-center gap-2 py-1.5 px-4 rounded-full bg-dark-100 border border-gray-800 text-primary-400 text-sm font-semibold mb-8 shadow-sm">
                        <span className="relative flex h-2 w-2">
                            <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-primary-400 opacity-75"></span>
                            <span className="relative inline-flex rounded-full h-2 w-2 bg-primary-500"></span>
                        </span>
                        Building Enterprise Projects
                    </div>

                    {/* Title Elements */}
                    <div className="perspective-1000 mb-6">
                        <h1 className="hero-title-line text-5xl md:text-7xl lg:text-8xl font-display font-extrabold tracking-tight text-white leading-[1.1]">
                            Hi, I'm <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary-400 to-cyan-400">Yazan Tarifi</span>
                        </h1>
                        <h2 className="hero-title-line text-3xl md:text-5xl font-display font-medium text-gray-300 mt-2">
                            Software Engineer
                        </h2>
                    </div>

                    {/* Description Details */}
                    <p className="hero-desc text-lg md:text-xl text-gray-400 max-w-4xl mb-12 leading-relaxed">
                        <span className="text-white font-semibold">Mobile App Maestro</span> Building Native Mobile Applications for Android & iOS. I build Solid, modern interfaces with <span className="text-primary-400">Jetpack Compose</span> and <span className="text-cyan-400">Compose Multiplatform</span>. Driven by performance, I build shared logic using <span className="text-purple-400">Kotlin Multiplatform</span> and building backend projects using <span className="text-red-400">NestJS & Spring Boot</span> to build (Full Stack, SAAS) solutions.
                    </p>

                    {/* Quick Metrics / Tech Stack */}
                    <div className="hero-metrics flex flex-wrap justify-center gap-4 md:gap-8 mb-12">
                        <div className="metric-item flex flex-col items-center p-4 bg-dark-200/60 backdrop-blur-md rounded-2xl border border-gray-800 shadow-sm min-w-[150px]">
                            <Smartphone className="text-primary-500 mb-2" size={28} />
                            <span className="font-bold text-white text-lg">Mobile Native</span>
                            <span className="text-xs text-gray-400">Android & iOS</span>
                        </div>
                        <div className="metric-item flex flex-col items-center p-4 bg-dark-200/60 backdrop-blur-md rounded-2xl border border-gray-800 shadow-sm min-w-[150px]">
                            <Layers className="text-purple-500 mb-2" size={28} />
                            <span className="font-bold text-white text-lg">Compose MP</span>
                            <span className="text-xs text-gray-400">KMP & UI Sharing</span>
                        </div>
                        <div className="metric-item flex flex-col items-center p-4 bg-dark-200/60 backdrop-blur-md rounded-2xl border border-gray-800 shadow-sm min-w-[150px]">
                            <Server className="text-cyan-500 mb-2" size={28} />
                            <span className="font-bold text-white text-lg">Backend API</span>
                            <span className="text-xs text-gray-400">NestJS & Spring Boot</span>
                        </div>
                    </div>

                    {/* Actions */}
                    <div className="hero-buttons flex flex-wrap items-center justify-center gap-4 mb-14">
                        <Link to="/projects" className="flex items-center gap-2 px-8 py-4 rounded-full bg-gradient-to-r from-primary-600 to-primary-500 hover:from-primary-500 hover:to-primary-400 text-white font-bold transition-all shadow-lg shadow-primary-500/25 hover:shadow-primary-500/40 transform hover:-translate-y-1">
                            Explore My Work <ArrowRight size={20} />
                        </Link>
                        <a href="mailto:yazantarifi98@gmail.com" className="flex items-center gap-2 px-8 py-4 rounded-full bg-dark-100 border border-gray-800 hover:border-primary-500/50 text-white font-bold transition-all transform hover:-translate-y-1">
                            Contact Me
                        </a>
                    </div>

                    {/* Socials */}
                    <div className="hero-socials flex items-center gap-6 text-gray-400">
                        <a href="https://x.com/YazanT98" target="_blank" rel="noopener noreferrer" aria-label="X (Twitter)" className="p-3 bg-dark-200 rounded-full shadow-sm hover:text-white hover:bg-black hover:scale-110 transition-all border border-gray-800 flex items-center justify-center">
                            <Twitter size={22} />
                        </a>
                        <a href="https://linkedin.com/in/yazantarifi" target="_blank" rel="noopener noreferrer" aria-label="LinkedIn" className="p-3 bg-dark-200 rounded-full shadow-sm hover:text-[#0a66c2] hover:bg-white hover:scale-110 transition-all border border-gray-800 flex items-center justify-center">
                            <Linkedin size={22} />
                        </a>
                        <a href="https://github.com/Yazan98" target="_blank" rel="noopener noreferrer" aria-label="Github" className="p-3 bg-dark-200 rounded-full shadow-sm hover:text-white hover:bg-gray-800 hover:scale-110 transition-all border border-gray-800 flex items-center justify-center">
                            <Github size={22} />
                        </a>
                        <a href="https://medium.com/@yazantarifi98" target="_blank" rel="noopener noreferrer" aria-label="Medium" className="p-3 bg-dark-200 rounded-full shadow-sm hover:text-black hover:bg-white hover:scale-110 transition-all border border-gray-800 flex items-center justify-center">
                            <FaMediumM size={22} />
                        </a>
                    </div>
                </section>

                {/* Programming Languages Section */}
                <section className="content-section container mx-auto px-4 max-w-5xl mb-32">
                    <div className="flex items-center justify-between mb-8">
                        <h3 className="text-3xl font-display font-bold text-white flex items-center gap-3">
                            <Code2 className="text-primary-500" /> Core Languages
                        </h3>
                    </div>
                    <div className="grid grid-cols-2 lg:grid-cols-3 gap-4">
                        {languages.map(lang => (
                            <div key={lang.name} className="flex items-center gap-5 bg-dark-200/80 border border-gray-800/80 hover:border-primary-500/50 p-6 rounded-2xl transition-all backdrop-blur-md group hover:shadow-lg hover:shadow-primary-500/10">
                                <div className="group-hover:scale-110 transition-transform bg-dark-100 p-3 rounded-xl border border-gray-800 shadow-inner">
                                    {lang.icon}
                                </div>
                                <div>
                                    <h4 className="font-bold text-lg text-white group-hover:text-primary-400 transition-colors">{lang.name}</h4>
                                    <p className="text-xs text-gray-400">{lang.tag}</p>
                                </div>
                            </div>
                        ))}
                    </div>
                </section>

                {/* Featured Projects Horizonal Carousel (Full Viewport Redesign) */}
                <section className="content-section w-full pt-16 pb-0 mb-0 bg-dark-200 border-t border-gray-800/40">
                    <div className="w-full px-6 md:px-12 max-w-[1600px] mx-auto flex items-center justify-between mb-8">
                        <h3 className="text-3xl font-display font-bold text-white flex items-center gap-3">
                            <AppWindow className="text-primary-500" /> Featured Projects
                        </h3>
                        <div className="flex gap-4">
                            <button onClick={() => scrollProjects('left')} className="p-4 rounded-full bg-dark-300 border border-gray-700 hover:bg-dark-100 hover:border-primary-500 transition-colors text-white z-20 hover:scale-110 transform flex items-center justify-center">
                                <ChevronLeft size={24} />
                            </button>
                            <button onClick={() => scrollProjects('right')} className="p-4 rounded-full bg-dark-300 border border-gray-700 hover:bg-dark-100 hover:border-primary-500 transition-colors text-white z-20 hover:scale-110 transform flex items-center justify-center">
                                <ChevronRight size={24} />
                            </button>
                        </div>
                    </div>

                    <div
                        ref={projectsScrollRef}
                        className="flex overflow-x-auto snap-x snap-mandatory hide-scrollbar pb-12 mb-[-1px]"
                        style={{ scrollbarWidth: 'none', msOverflowStyle: 'none' }}
                    >
                        {featuredProjects.map((project: any) => (
                            <div key={project.id} className="min-w-full w-full snap-center flex-shrink-0 px-6 md:px-12 max-w-[1600px] mx-auto">
                                <div className="relative min-h-[75vh] w-full flex flex-col md:flex-row bg-[#0B0B0E] rounded-[2rem] overflow-hidden shadow-[0_20px_60px_-15px_rgba(0,0,0,0.7)] border border-gray-800/60 group">

                                    {/* Left Side: Content & Stats */}
                                    <div className="w-full md:w-1/2 p-8 md:p-12 lg:p-16 flex flex-col justify-center z-10 bg-dark-200/95 backdrop-blur-3xl relative">
                                        {/* Subtle Background Accent */}
                                        <div className="absolute top-0 right-0 w-64 h-64 bg-primary-900/10 rounded-full blur-[80px] pointer-events-none"></div>

                                        <span className="inline-block self-start px-5 py-2 rounded-full bg-primary-500/10 text-primary-400 border border-primary-500/20 text-xs font-bold uppercase tracking-[0.15em] mb-6">
                                            {project.type === 'ANDROID_APP' ? 'Android Native' : project.type.replace('_', ' ')}
                                        </span>

                                        <h4 className="text-4xl lg:text-6xl font-display font-extrabold text-white mb-6 leading-tight tracking-tight drop-shadow-sm">
                                            {project.name}
                                        </h4>

                                        {/* Tech Stack Pills */}
                                        <div className="flex flex-wrap gap-2 mb-8">
                                            {project.tags?.slice(0, 4).map((tag: string) => (
                                                <span key={tag} className="px-3 py-1.5 bg-dark-300 border border-gray-800 rounded-md text-xs font-medium text-gray-300 shadow-sm">
                                                    {tag}
                                                </span>
                                            ))}
                                            {project.tags && project.tags.length > 4 && (
                                                <span className="px-3 py-1.5 bg-dark-300/50 border border-gray-800/50 rounded-md text-xs font-medium text-gray-500">
                                                    +{project.tags.length - 4} more
                                                </span>
                                            )}
                                        </div>

                                        <p className="text-lg lg:text-xl text-gray-400 mb-10 line-clamp-3 leading-relaxed font-normal">
                                            {project.description}
                                        </p>

                                        {/* Stats Row */}
                                        <div className="flex flex-wrap gap-4 mb-10">
                                            <div className="bg-dark-300/40 border border-gray-800/40 p-5 rounded-2xl flex-1 text-left min-w-[120px] transition-colors hover:bg-dark-300/80">
                                                <h5 className="text-3xl font-display font-bold text-white mb-1 drop-shadow-sm">Top</h5>
                                                <p className="text-primary-500/80 text-xs uppercase tracking-widest font-bold">Tier Project</p>
                                            </div>
                                            <div className="bg-dark-300/40 border border-gray-800/40 p-5 rounded-2xl flex-1 text-left min-w-[120px] transition-colors hover:bg-dark-300/80">
                                                <h5 className="text-3xl font-display font-bold text-white mb-1 drop-shadow-sm">{project.tags?.length || 5}+</h5>
                                                <p className="text-primary-500/80 text-xs uppercase tracking-widest font-bold">Technologies</p>
                                            </div>
                                        </div>

                                        {/* CTA */}
                                        <Link to={`/project/${project.id}`} className="mt-auto self-start flex items-center gap-3 px-8 py-4 rounded-full bg-white text-black font-bold transition-all transform hover:-translate-y-1 hover:bg-gray-200 shadow-xl hover:shadow-white/20">
                                            View The Project <ArrowRight size={20} className="group-hover:translate-x-1 transition-transform" />
                                        </Link>
                                    </div>

                                    {/* Right Side: Image Mockup & Glow */}
                                    <div className="w-full md:w-1/2 relative overflow-hidden flex items-center justify-center p-0 min-h-[400px] md:min-h-full bg-[#110e19]">
                                        {/* Ambient Glow */}
                                        <div className="absolute inset-0 bg-gradient-to-l from-transparent via-transparent to-dark-200/50 z-10 hidden md:block"></div>
                                        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[120%] h-[120%] bg-primary-500/20 blur-[120px] rounded-full pointer-events-none transition-opacity duration-700 group-hover:opacity-100 opacity-60"></div>

                                        {project.image ? (
                                            <img src={project.image} alt={project.name} className="absolute inset-0 w-full h-full object-cover transition-all duration-[2s] ease-out group-hover:scale-[1.03]" />
                                        ) : (
                                            <div className="absolute inset-0 w-full h-full bg-[#0a0a0d] flex items-center justify-center">
                                                <AppWindow size={80} className="text-gray-800/50" />
                                            </div>
                                        )}
                                    </div>

                                </div>
                            </div>
                        ))}
                    </div>
                </section>
            </div>

            {/* Ambient gradients to blend with canvas */}
            <div className="absolute top-0 left-0 w-full h-[500px] bg-gradient-to-b from-primary-900/10 to-transparent pointer-events-none z-0"></div>
            <div className="absolute bottom-0 right-0 w-[500px] h-[500px] bg-cyan-900/10 rounded-full blur-[100px] pointer-events-none z-0"></div>

            <style dangerouslySetInnerHTML={{
                __html: `
                .hide-scrollbar::-webkit-scrollbar { display: none; }
            `}} />
        </div>
    );
};

export default HomePage;
