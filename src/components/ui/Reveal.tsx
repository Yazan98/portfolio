import React, { useEffect, useRef, useState } from 'react';

interface RevealProps {
    children: React.ReactNode;
    /** Stagger delay in ms */
    delay?: number;
    className?: string;
    as?: keyof JSX.IntrinsicElements;
}

/**
 * Fades + slides its children in when scrolled into view (IntersectionObserver).
 * Replaces the old GSAP scroll animations with a tiny, dependency-free primitive.
 */
const Reveal: React.FC<RevealProps> = ({ children, delay = 0, className = '', as = 'div' }) => {
    const ref = useRef<HTMLElement | null>(null);
    const [visible, setVisible] = useState(false);

    useEffect(() => {
        const el = ref.current;
        if (!el) return;

        if (typeof IntersectionObserver === 'undefined') {
            setVisible(true);
            return;
        }

        const observer = new IntersectionObserver(
            (entries) => {
                entries.forEach((entry) => {
                    if (entry.isIntersecting) {
                        setVisible(true);
                        observer.unobserve(entry.target);
                    }
                });
            },
            { threshold: 0.12, rootMargin: '0px 0px -40px 0px' },
        );

        observer.observe(el);
        return () => observer.disconnect();
    }, []);

    const Tag = as as React.ElementType;
    return (
        <Tag
            ref={ref}
            className={`reveal ${visible ? 'is-visible' : ''} ${className}`.trim()}
            style={delay ? { transitionDelay: `${delay}ms` } : undefined}
        >
            {children}
        </Tag>
    );
};

export default Reveal;
