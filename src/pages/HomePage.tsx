import React, { useEffect, useRef } from 'react';
import { gsap } from 'gsap';
import { Github, Linkedin, Mail, ArrowRight } from 'lucide-react';
import { Helmet } from 'react-helmet-async';

const HomePage: React.FC = () => {
    const containerRef = useRef<HTMLDivElement>(null);

    useEffect(() => {
        // GSAP Animation for Hero
        const ctx = gsap.context(() => {
            gsap.from('.hero-element', {
                y: 40,
                opacity: 0,
                duration: 0.8,
                stagger: 0.15,
                ease: 'power3.out',
            });
        }, containerRef);

        return () => ctx.revert();
    }, []);

    return (
        <div ref={containerRef} className="container mx-auto px-4 pt-20 pb-16">
            <Helmet>
                <title>Yazan Tarifi - Home</title>
            </Helmet>

            <section className="max-w-4xl mx-auto flex flex-col items-center text-center">
                <div className="hero-element inline-block py-1 px-3 rounded-full bg-primary-100 dark:bg-primary-900/30 text-primary-600 dark:text-primary-400 text-sm font-semibold mb-6">
                    Mobile Developer & Software Engineer
                </div>

                <h1 className="hero-element text-5xl md:text-7xl font-display font-bold tracking-tight text-gray-900 dark:text-white leading-tight mb-6">
                    Building Digital <br className="hidden md:block" />
                    <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary-500 to-cyan-500">
                        Experiences
                    </span>
                </h1>

                <p className="hero-element text-lg md:text-xl text-gray-600 dark:text-gray-300 max-w-2xl mb-10 leading-relaxed">
                    A code-minded software engineer focused on building beautiful interfaces
                    and converting ideas into scalable systems on Android, iOS, and the Web.
                </p>

                <div className="hero-element flex flex-wrap items-center justify-center gap-4 mb-14">
                    <a href="#projects" className="flex items-center gap-2 px-6 py-3 rounded-full bg-primary-600 hover:bg-primary-700 text-white font-medium transition-colors shadow-lg shadow-primary-500/25">
                        View My Work <ArrowRight size={18} />
                    </a>
                    <a href="mailto:yazantarifi98@gmail.com" className="flex items-center gap-2 px-6 py-3 rounded-full border border-gray-300 dark:border-gray-700 hover:bg-gray-50 dark:hover:bg-dark-200 text-gray-900 dark:text-white font-medium transition-colors">
                        Contact Me
                    </a>
                </div>

                <div className="hero-element flex items-center gap-6 text-gray-500 dark:text-gray-400">
                    <a href="https://github.com/Yazan98" target="_blank" rel="noopener noreferrer" aria-label="Github pt-2" className="hover:text-gray-900 dark:hover:text-white transition-colors">
                        <Github size={24} />
                    </a>
                    <a href="https://linkedin.com/in/yazantarifi" target="_blank" rel="noopener noreferrer" aria-label="LinkedIn" className="hover:text-primary-600 transition-colors">
                        <Linkedin size={24} />
                    </a>
                    <a href="mailto:yazantarifi98@gmail.com" aria-label="Email" className="hover:text-red-500 transition-colors">
                        <Mail size={24} />
                    </a>
                </div>
            </section>
        </div>
    );
};

export default HomePage;
