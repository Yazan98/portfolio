import React, { useEffect, useRef } from 'react';
import { gsap } from 'gsap';

interface SplashScreenProps {
    onComplete: () => void;
}

const SplashScreen: React.FC<SplashScreenProps> = ({ onComplete }) => {
    const containerRef = useRef<HTMLDivElement>(null);

    useEffect(() => {
        // Lock scroll
        document.body.style.overflow = 'hidden';

        const ctx = gsap.context(() => {
            const tl = gsap.timeline({
                onComplete: () => {
                    document.body.style.overflow = 'auto';
                    onComplete();
                }
            });

            // 1. Initial logo glow & reveal
            tl.fromTo('.logo-container',
                { autoAlpha: 0, scale: 0.8 },
                { autoAlpha: 1, scale: 1, duration: 1, ease: 'power3.out' }
            )
                // 2. Pulse effect
                .to('.logo-container', {
                    scale: 1.1,
                    duration: 0.8,
                    yoyo: true,
                    repeat: 1,
                    ease: 'power2.inOut'
                })
                // 3. Slide text up
                .fromTo('.splash-text',
                    { autoAlpha: 0, y: 20 },
                    { autoAlpha: 1, y: 0, duration: 0.6, ease: 'power2.out' },
                    "-=0.6" // overlaps pulse
                )
                // 4. Fade everything out
                .to('.splash-overlay', {
                    autoAlpha: 0,
                    duration: 0.8,
                    delay: 0.5,
                    ease: 'power2.inOut'
                });
        }, containerRef);

        return () => ctx.revert();
    }, [onComplete]);

    return (
        <div
            ref={containerRef}
            className="splash-overlay fixed inset-0 z-[100] flex flex-col items-center justify-center bg-dark-300 pointer-events-none"
        >
            <div className="logo-container relative flex items-center justify-center">
                {/* Glowing background blob */}
                <div className="absolute inset-0 bg-primary-500 rounded-full blur-3xl opacity-20"></div>

                {/* The Text Logo Representation */}
                <div className="relative text-5xl md:text-7xl font-display font-extrabold text-white tracking-widest z-10">
                    YT<span className="text-primary-500">.</span>
                </div>
            </div>

            <p className="splash-text mt-8 text-primary-300 font-medium tracking-widest uppercase text-sm">
                Initializing Portfolio
            </p>
        </div>
    );
};

export default SplashScreen;
