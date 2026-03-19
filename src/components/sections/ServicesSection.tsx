import React, { useEffect, useRef } from 'react';
import { gsap } from 'gsap';
import { Smartphone, Server, Monitor, Shield, Layers, Code } from 'lucide-react';

// @ts-ignore
import getServicesList from '../../info/ServicesList';

const ServicesSection: React.FC = () => {
    const containerRef = useRef<HTMLDivElement>(null);
    const services = getServicesList().slice(0, 3);

    const icons = [Smartphone, Server, Monitor, Shield, Layers, Code];

    useEffect(() => {
        const ctx = gsap.context(() => {
            gsap.from('.service-card', {
                y: 50,
                duration: 0.8,
                stagger: 0.15,
                ease: 'power3.out',
                scrollTrigger: {
                    trigger: containerRef.current,
                    start: 'top 80%',
                }
            });
        }, containerRef);
        return () => ctx.revert();
    }, []);

    return (
        <section ref={containerRef} className="content-section container mx-auto px-4 max-w-6xl py-24 relative">
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full max-w-[800px] h-[400px] bg-primary-600/5 blur-[120px] rounded-full pointer-events-none z-0"></div>

            <div className="relative z-10 mb-16 text-center">
                <h2 className="text-4xl md:text-5xl font-display font-black text-white mb-6">
                    What I <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary-400 to-cyan-400">Do</span>
                </h2>
                <p className="text-gray-400 text-lg max-w-2xl mx-auto leading-relaxed">
                    Building Mobile Applications with Api's and Backend Systems.
                </p>
            </div>

            <div className="relative z-10 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                {services.map((service: any, index: number) => {
                    // Cycle through icons
                    const Icon = icons[index % icons.length];
                    return (
                        <div key={index} className="service-card group relative p-8 rounded-3xl bg-dark-200/50 backdrop-blur-md border border-gray-800 hover:border-primary-500/50 transition-all duration-300 hover:shadow-[0_8px_30px_rgb(0,0,0,0.12)] hover:-translate-y-1 overflow-hidden">
                            <div className="absolute top-0 right-0 p-8 opacity-5 group-hover:opacity-10 group-hover:scale-110 transition-all duration-500 pointer-events-none">
                                <Icon size={120} />
                            </div>

                            <div className="inline-flex p-3 rounded-2xl bg-dark-100 border border-gray-800 text-primary-400 mb-6 group-hover:text-primary-300 group-hover:border-primary-500/30 transition-colors">
                                <Icon size={28} />
                            </div>

                            <div className="mb-4">
                                <span className="text-xs font-bold tracking-wider text-cyan-400 uppercase mb-2 block">{service.tag}</span>
                                <h3 className="text-2xl font-bold text-white group-hover:text-primary-400 transition-colors">{service.title}</h3>
                            </div>

                            <p className="text-gray-400 text-sm leading-relaxed">
                                {service.description}
                            </p>
                        </div>
                    );
                })}
            </div>
        </section>
    );
};

export default ServicesSection;
