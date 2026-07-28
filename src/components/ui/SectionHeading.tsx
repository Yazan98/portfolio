import React from 'react';
import Reveal from './Reveal';

interface SectionHeadingProps {
    eyebrow?: string;
    title: string;
    description?: string;
    /** Show the accent "." after the title (design signature) */
    dot?: boolean;
    align?: 'left' | 'center';
    className?: string;
}

/**
 * The numbered-eyebrow + display-heading pattern used across the design
 * (e.g. "01 - OVERVIEW" / "About the app.").
 */
const SectionHeading: React.FC<SectionHeadingProps> = ({
    eyebrow,
    title,
    description,
    dot = true,
    align = 'left',
    className = '',
}) => (
    <Reveal className={`flex flex-col gap-3.5 ${align === 'center' ? 'items-center text-center' : ''} ${className}`}>
        {eyebrow && (
            <span className="font-mono text-[12.5px] font-semibold tracking-[0.12em] text-acc">{eyebrow}</span>
        )}
        <h2 className="m-0 font-display text-[clamp(30px,3vw,44px)] font-bold leading-[1.1] tracking-[-0.03em] text-ink">
            {title}
            {dot && <span className="text-acc">.</span>}
        </h2>
        {description && (
            <p className={`m-0 text-[17px] leading-[1.7] text-ink3 ${align === 'center' ? 'max-w-2xl' : 'max-w-2xl'}`}>
                {description}
            </p>
        )}
    </Reveal>
);

export default SectionHeading;
