import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import Icon from '../ui/Icon';
// @ts-ignore - data modules authored in JS
import { getFeaturedProjects } from '../../data/projects';

interface App {
    id: number;
    slug: string;
    name: string;
    category?: string;
    image?: string;
}

const AUTO_MS = 3800;

/**
 * Hero showcase - a single large device frame that slides through the
 * promoted apps one at a time (crossfade), with a name pill and clickable
 * pagination dots below. Auto-advances, pauses on hover and holds still
 * under prefers-reduced-motion.
 */
const AppShowcase: React.FC = () => {
    const apps: App[] = getFeaturedProjects();
    const count = apps.length;
    const [active, setActive] = useState(0);
    const [paused, setPaused] = useState(false);
    const [reduced] = useState(
        () => typeof window !== 'undefined' && window.matchMedia('(prefers-reduced-motion: reduce)').matches,
    );

    // Auto-advance; resets whenever `active` changes (e.g. after a dot click).
    useEffect(() => {
        if (!count || paused || reduced) return undefined;
        const id = window.setTimeout(() => setActive((a) => (a + 1) % count), AUTO_MS);
        return () => window.clearTimeout(id);
    }, [count, paused, reduced, active]);

    if (!count) return null;
    const current = apps[active];
    const projectNumber = String(active + 1).padStart(2, '0');
    const projectCount = String(count).padStart(2, '0');
    const move = (direction: number) => setActive((value) => (value + direction + count) % count);

    return (
        <div
            className="flex flex-col items-center gap-5"
            onMouseEnter={() => setPaused(true)}
            onMouseLeave={() => setPaused(false)}
            aria-roledescription="carousel"
            aria-label="Promoted apps"
        >
            {/* Device frame - a sliding filmstrip of the apps */}
            <div className="w-full rounded-[32px] bg-panel p-3 shadow-panel">
                <div className="relative aspect-[8/7] w-full overflow-hidden rounded-[22px] bg-[#0C0B09]">
                    <div
                        className="flex h-full w-full will-change-transform"
                        style={{ transform: `translateX(-${active * 100}%)`, transition: 'transform .7s cubic-bezier(.2,.7,.2,1)' }}
                    >
                        {apps.map((app, i) => (
                            <Link
                                key={app.id}
                                to={`/project/${app.slug}`}
                                aria-hidden={i !== active}
                                tabIndex={i !== active ? -1 : undefined}
                                className={`relative h-full w-full flex-none overflow-hidden ${i === active ? '' : 'pointer-events-none'}`}
                            >
                                {app.image ? (
                                    <img
                                        src={app.image}
                                        alt={app.name}
                                        loading={i === 0 ? 'eager' : 'lazy'}
                                        className="h-full w-full object-contain object-center"
                                    />
                                ) : (
                                    <div className="flex h-full w-full items-center justify-center px-6 text-center font-mono text-xs text-white/40">
                                        {app.name} - wide banner
                                    </div>
                                )}
                            </Link>
                        ))}
                    </div>
                </div>
            </div>

            <div className="flex w-full items-end justify-between gap-6 border-t border-line10 pt-4">
                <div className="min-w-0">
                    <div className="truncate font-display text-[22px] font-bold tracking-[-0.03em] text-ink">{current.name}</div>
                    <div className="mt-1 font-mono text-[10px] uppercase tracking-[0.12em] text-ink2">{current.category || 'Mobile product'}</div>
                </div>

                <div className="flex flex-none items-center gap-2">
                    <span className="mr-1 font-mono text-[11px] font-semibold text-ink2">{projectNumber} <span className="text-ink/25">/</span> {projectCount}</span>
                    <button
                        type="button"
                        aria-label="Previous project"
                        onClick={() => move(-1)}
                        className="flex h-9 w-9 items-center justify-center rounded-full border border-line14 text-ink2 transition-all hover:border-ink hover:bg-paper hover:text-ink"
                    >
                        <Icon name="arrow-left" size={15} />
                    </button>
                    <button
                        type="button"
                        aria-label="Next project"
                        onClick={() => move(1)}
                        className="flex h-9 w-9 items-center justify-center rounded-full bg-ink text-bg transition-all hover:-translate-y-0.5 hover:bg-acc"
                    >
                        <Icon name="arrow-right" size={15} />
                    </button>
                </div>
            </div>
        </div>
    );
};

export default AppShowcase;
