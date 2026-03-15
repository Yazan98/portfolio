import React, { useEffect, useRef } from 'react';
import { gsap } from 'gsap';
import { Github, Linkedin, Mail, ArrowRight, Code2, Smartphone, Database, Server } from 'lucide-react';
import { Helmet } from 'react-helmet-async';
import InteractiveBackground from '../components/ui/InteractiveBackground';

const HomePage: React.FC = () => {
    const containerRef = useRef<HTMLDivElement>(null);

    useEffect(() => {
        // Complex GSAP Entrance Animation
        const ctx = gsap.context(() => {
            const tl = gsap.timeline({ delay: 0.2 });

            tl.from('.hero-badge', { y: 20, opacity: 0, duration: 0.6, ease: 'back.out(1.7)' })
                .from('.hero-title-line', { y: 40, opacity: 0, rotationX: -20, duration: 0.8, stagger: 0.15, ease: 'power3.out' }, "-=0.3")
                .from('.hero-desc', { y: 20, opacity: 0, duration: 0.6, ease: 'power2.out' }, "-=0.4")
                .from('.hero-metrics .metric-item', { scale: 0.8, opacity: 0, duration: 0.5, stagger: 0.1, ease: 'back.out(1.5)' }, "-=0.2")
                .from('.hero-buttons', { y: 20, opacity: 0, duration: 0.5, ease: 'power2.out' }, "-=0.3")
                .from('.hero-socials a', { scale: 0, opacity: 0, duration: 0.4, stagger: 0.1, ease: 'back.out(2)' }, "-=0.2");
        }, containerRef);

        return () => ctx.revert();
    }, []);

    return (
        <div className="relative min-h-[calc(100vh-4rem)] flex items-center bg-gray-50/50 dark:bg-dark-300/20 overflow-hidden">
            <Helmet>
                <title>Yazan Tarifi - Software Engineer</title>
                <meta name="description" content="Portfolio of Yazan Tarifi - Enterprise Mobile & Backend Developer" />
            </Helmet>

            {/* High-Performance Canvas Interactive Layer */}
            <InteractiveBackground />

            {/* Main Content Overlay */}
            <div ref={containerRef} className="container mx-auto px-4 py-20 relative z-10 w-full">
                <section className="max-w-5xl mx-auto flex flex-col items-center text-center">

                    {/* Badge */}
                    <div className="hero-badge inline-flex items-center gap-2 py-1.5 px-4 rounded-full bg-white dark:bg-dark-100 border border-gray-200 dark:border-gray-800 text-primary-600 dark:text-primary-400 text-sm font-semibold mb-8 shadow-sm">
                        <span className="relative flex h-2 w-2">
                            <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-primary-400 opacity-75"></span>
                            <span className="relative inline-flex rounded-full h-2 w-2 bg-primary-500"></span>
                        </span>
                        Available for Enterprise Projects
                    </div>

                    {/* Title Elements */}
                    <div className="perspective-1000 mb-6">
                        <h1 className="hero-title-line text-5xl md:text-7xl lg:text-8xl font-display font-extrabold tracking-tight text-gray-900 dark:text-white leading-[1.1]">
                            Hi, I'm <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary-600 to-purple-400 dark:from-primary-400 dark:to-cyan-400">Yazan Tarifi</span>
                        </h1>
                        <h2 className="hero-title-line text-3xl md:text-5xl font-display font-medium text-gray-600 dark:text-gray-300 mt-2">
                            Software Engineer & Architect
                        </h2>
                    </div>

                    {/* Description Details */}
                    <p className="hero-desc text-lg md:text-xl text-gray-600 dark:text-gray-400 max-w-3xl mb-12 leading-relaxed">
                        I specialize in building Native Mobile Applications (Android, iOS) with Kotlin Multiplatform and Jetpack Compose. I architect robust Backend services using NestJS and Kotlin/Ktor, focusing on scalable deployments, high-performance rendering, and seamless user experiences.
                    </p>

                    {/* Quick Metrics / Tech Stack */}
                    <div className="hero-metrics flex flex-wrap justify-center gap-4 md:gap-8 mb-12">
                        <div className="metric-item flex flex-col items-center p-4 bg-white/60 dark:bg-dark-200/60 backdrop-blur-md rounded-2xl border border-gray-100 dark:border-gray-800 shadow-sm min-w-[140px]">
                            <Smartphone className="text-primary-500 mb-2" size={28} />
                            <span className="font-bold text-gray-900 dark:text-white text-lg">Mobile Native</span>
                            <span className="text-xs text-gray-500 dark:text-gray-400">Kotlin & KMP</span>
                        </div>
                        <div className="metric-item flex flex-col items-center p-4 bg-white/60 dark:bg-dark-200/60 backdrop-blur-md rounded-2xl border border-gray-100 dark:border-gray-800 shadow-sm min-w-[140px]">
                            <Server className="text-cyan-500 mb-2" size={28} />
                            <span className="font-bold text-gray-900 dark:text-white text-lg">Backend API</span>
                            <span className="text-xs text-gray-500 dark:text-gray-400">NestJS & Spring</span>
                        </div>
                        <div className="metric-item flex flex-col items-center p-4 bg-white/60 dark:bg-dark-200/60 backdrop-blur-md rounded-2xl border border-gray-100 dark:border-gray-800 shadow-sm min-w-[140px]">
                            <Code2 className="text-purple-500 mb-2" size={28} />
                            <span className="font-bold text-gray-900 dark:text-white text-lg">Web Web</span>
                            <span className="text-xs text-gray-500 dark:text-gray-400">React & Next.js</span>
                        </div>
                    </div>

                    {/* Actions */}
                    <div className="hero-buttons flex flex-wrap items-center justify-center gap-4 mb-14">
                        <a href="/projects" className="flex items-center gap-2 px-8 py-4 rounded-full bg-gradient-to-r from-primary-600 to-primary-500 hover:from-primary-500 hover:to-primary-400 text-white font-bold transition-all shadow-lg shadow-primary-500/25 hover:shadow-primary-500/40 transform hover:-translate-y-1">
                            Explore My Work <ArrowRight size={20} />
                        </a>
                        <a href="mailto:yazantarifi98@gmail.com" className="flex items-center gap-2 px-8 py-4 rounded-full bg-white dark:bg-dark-100 border border-gray-200 dark:border-gray-800 hover:border-primary-500/50 text-gray-900 dark:text-white font-bold transition-all transform hover:-translate-y-1">
                            Contact Me
                        </a>
                    </div>

                    {/* Socials */}
                    <div className="hero-socials flex items-center gap-6 text-gray-500 dark:text-gray-400">
                        <a href="https://github.com/Yazan98" target="_blank" rel="noopener noreferrer" aria-label="Github" className="p-3 bg-white dark:bg-dark-200 rounded-full shadow-sm hover:text-gray-900 dark:hover:text-white hover:scale-110 transition-all border border-gray-100 dark:border-gray-800">
                            <Github size={22} />
                        </a>
                        <a href="https://linkedin.com/in/yazantarifi" target="_blank" rel="noopener noreferrer" aria-label="LinkedIn" className="p-3 bg-white dark:bg-dark-200 rounded-full shadow-sm hover:text-primary-600 hover:scale-110 transition-all border border-gray-100 dark:border-gray-800">
                            <Linkedin size={22} />
                        </a>
                        <a href="mailto:yazantarifi98@gmail.com" aria-label="Email" className="p-3 bg-white dark:bg-dark-200 rounded-full shadow-sm hover:text-red-500 hover:scale-110 transition-all border border-gray-100 dark:border-gray-800">
                            <Mail size={22} />
                        </a>
                    </div>

                </section>
            </div>

            {/* Ambient gradients to blend with canvas */}
            <div className="absolute top-0 left-0 w-full h-[500px] bg-gradient-to-b from-primary-900/10 to-transparent pointer-events-none z-0"></div>
            <div className="absolute bottom-0 right-0 w-[500px] h-[500px] bg-cyan-900/10 rounded-full blur-[100px] pointer-events-none z-0"></div>
        </div>
    );
};

export default HomePage;
