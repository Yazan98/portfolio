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

            // 1. Initial logo 3D flip & reveal
            tl.fromTo('.logo-img',
                { autoAlpha: 0, scale: 0.5, rotationY: -90, z: -500 },
                { autoAlpha: 1, scale: 1, rotationY: 0, z: 0, duration: 1.5, ease: 'expo.out' }
            )
                // 2. Float effect
                .to('.logo-img', {
                    y: -15,
                    duration: 1.2,
                    yoyo: true,
                    repeat: -1,
                    ease: 'sine.inOut'
                }, "-=0.5")
                // 3. Slide text up
                .fromTo('.splash-text',
                    { autoAlpha: 0, y: 30, letterSpacing: '0px' },
                    { autoAlpha: 1, y: 0, letterSpacing: '4px', duration: 1, ease: 'power3.out' },
                    "-=1"
                )
                // 4. Fade everything out to start app
                .to('.splash-overlay', {
                    opacity: 0,
                    duration: 1,
                    delay: 1.5,
                    ease: 'power2.inOut',
                    onComplete: () => {
                        // Kill float animation
                        gsap.killTweensOf('.logo-img');
                    }
                });
        }, containerRef);

        return () => ctx.revert();
    }, [onComplete]);

    return (
        <div
            ref={containerRef}
            className="splash-overlay fixed inset-0 z-[100] flex flex-col items-center justify-center bg-[#050505] pointer-events-none"
        >
            <div className="logo-container relative flex flex-col items-center justify-center perspective-1000">
                {/* Glowing background blob */}
                <div className="absolute inset-0 bg-primary-600 rounded-full blur-[80px] opacity-20 transform scale-150"></div>

                {/* The Logo Image */}
                <div className="relative z-10 perspective-1000">
                    <img src="/logo.png" alt="Yazan Tarifi Logo" className="logo-img w-32 h-32 md:w-48 md:h-48 object-contain drop-shadow-[0_0_25px_rgba(168,85,247,0.4)]" />
                </div>
            </div>

            <p className="splash-text mt-12 text-primary-300/80 font-medium tracking-widest uppercase text-sm drop-shadow-md">
                Yazan Tarifi Portfolio
            </p>
        </div>
    );
};

export default SplashScreen;
