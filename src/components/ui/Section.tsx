import React from 'react';

interface SectionProps {
    children: React.ReactNode;
    /** Background tone */
    tone?: 'bg' | 'paper';
    /** Top hairline border (section divider) */
    bordered?: boolean;
    id?: string;
    className?: string;
    /** Override the default vertical padding */
    padding?: string;
    /** Override the default horizontal padding */
    xPadding?: string;
    /** Override the inner content wrapper */
    contentClassName?: string;
}

/**
 * Standard section shell - 1180px container with the design's responsive
 * vertical rhythm. Keeps every page section perfectly consistent.
 */
const Section: React.FC<SectionProps> = ({
    children,
    tone = 'bg',
    bordered = false,
    id,
    className = '',
    padding = 'py-[clamp(64px,9vw,110px)]',
    xPadding = 'px-[clamp(20px,5vw,48px)]',
    contentClassName = 'mx-auto max-w-content',
}) => (
    <section
        id={id}
        className={`${xPadding} ${padding} ${tone === 'paper' ? 'bg-paper' : 'bg-bg'} ${bordered ? 'border-t border-line08' : ''} ${className}`}
    >
        <div className={contentClassName}>{children}</div>
    </section>
);

export default Section;
