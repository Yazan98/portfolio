import React from 'react';
// @ts-ignore - data modules authored in JS
import { technologies } from '../../data/home';

// Horizontal fade so pills dissolve into the black panel at each edge.
const FADE_X =
    'linear-gradient(90deg, transparent 0%, #000 7%, #000 93%, transparent 100%)';

const Pill: React.FC<{ label: string; variant: 'primary' | 'secondary' }> = ({ label, variant }) => (
    <span className="inline-flex flex-none items-center gap-2.5 rounded-full border border-white/[0.09] bg-white/[0.04] px-4 py-2.5 font-mono text-[13px] font-medium text-[#F6F3EC]/90">
        {variant === 'primary' ? (
            <span className="h-1.5 w-1.5 flex-none rounded-full bg-acc" />
        ) : (
            <span className="h-1.5 w-1.5 flex-none rounded-[2px] bg-[#F6F3EC]/35" />
        )}
        {label}
    </span>
);

const Row: React.FC<{
    items: string[];
    variant: 'primary' | 'secondary';
    reverse?: boolean;
    duration: number;
}> = ({ items, variant, reverse, duration }) => (
    <div
        className="marquee-viewport relative overflow-hidden"
        style={{ maskImage: FADE_X, WebkitMaskImage: FADE_X }}
    >
        <div
            className={`marquee-track flex w-max gap-3 ${reverse ? 'is-reverse' : ''}`}
            style={{ '--marquee-duration': `${duration}s` } as React.CSSProperties}
        >
            {items.map((t) => <Pill key={`a-${t}`} label={t} variant={variant} />)}
            {items.map((t) => <Pill key={`b-${t}`} label={t} variant={variant} />)}
        </div>
    </div>
);

/**
 * Black hero panel with two lanes of technology pills that auto-scroll in
 * opposite directions - the highlighted stack (green dot) above the
 * supporting tools (muted square).
 */
const TechMarquee: React.FC = () => (
    <div className="relative overflow-hidden rounded-[28px] bg-[#14130F] px-3 py-8 shadow-panel sm:px-6 sm:py-10">
        <div className="flex flex-col gap-4">
            <Row items={technologies.primary} variant="primary" duration={42} />
            <Row items={technologies.secondary} variant="secondary" reverse duration={48} />
        </div>
    </div>
);

export default TechMarquee;
