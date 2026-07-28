import React from 'react';
import { Link } from 'react-router-dom';

interface NextProjectCardProps {
    name: string;
    slug: string;
    label?: string;
}

/** The dark "NEXT PROJECT" panel CTA at the bottom of a detail page. */
const NextProjectCard: React.FC<NextProjectCardProps> = ({ name, slug, label = 'NEXT PROJECT' }) => (
    <Link
        to={`/project/${slug}`}
        className="group relative flex flex-wrap items-center justify-between gap-6 overflow-hidden rounded-[26px] bg-panel p-[clamp(28px,5vw,52px)] text-[#F6F3EC] no-underline transition-all duration-300 hover:-translate-y-1 hover:shadow-panel"
    >
        <div
            aria-hidden="true"
            className="pointer-events-none absolute -right-20 -top-[120px] h-[340px] w-[340px] rounded-full"
            style={{ background: 'radial-gradient(circle, var(--acc-soft), transparent 65%)' }}
        />
        <div className="relative flex flex-col gap-2.5">
            <span className="font-mono text-xs font-semibold tracking-[0.12em] text-acc">{label}</span>
            <span className="font-display text-[clamp(28px,3.4vw,44px)] font-bold tracking-[-0.03em]">{name}</span>
        </div>
        <span className="relative flex h-16 w-16 flex-none items-center justify-center rounded-full bg-[#F6F3EC] text-2xl text-[#14130F] transition-transform duration-300 group-hover:translate-x-1">
            →
        </span>
    </Link>
);

export default NextProjectCard;
