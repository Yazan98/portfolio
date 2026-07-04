import React, { useEffect, useRef, useState } from 'react';
import { Link } from 'react-router-dom';
import Button from '../ui/Button';
import Icon from '../ui/Icon';
import { TagList } from '../ui/Chip';
// @ts-ignore - data modules authored in JS
import { getFeaturedProjects } from '../../data/projects';
// @ts-ignore
import { sections } from '../../data/home';

interface FP {
    id: number; slug: string; name: string; badge: string; year: string;
    tagline: string; tags: string[]; image?: string; facts: { platforms: string };
}

const GUTTER = 'clamp(20px,5vw,48px)';

const BigCard: React.FC<{ project: FP; snap?: boolean }> = ({ project, snap }) => (
    <article
        className={`relative h-[62vh] max-h-[560px] w-[86vw] max-w-[980px] flex-none overflow-hidden rounded-[28px] border border-line10 bg-paper shadow-card ${snap ? 'snap-center' : ''}`}
    >
        <div className="grid h-full grid-cols-1 grid-rows-[42%_58%] md:grid-cols-2 md:grid-rows-1">
            <div className="order-2 flex flex-col justify-center gap-4 p-7 md:order-1 md:p-11">
                <span className="font-mono text-[11.5px] font-semibold uppercase tracking-[0.1em] text-acc">{project.badge}</span>
                <h3 className="m-0 font-display text-[clamp(28px,4vw,46px)] font-bold leading-[1.05] tracking-[-0.03em] text-ink">
                    {project.name}<span className="text-acc">.</span>
                </h3>
                <p className="m-0 line-clamp-3 text-[15px] leading-[1.6] text-ink3 md:text-[16px]">{project.tagline}</p>
                <div className="hidden sm:block"><TagList tags={project.tags} max={4} /></div>
                <div className="mt-1 flex items-center gap-3 font-mono text-[12px] text-ink2">
                    <span>{project.year}</span><span className="text-line25">·</span><span>{project.facts.platforms}</span>
                </div>
                <div className="mt-2">
                    <Button to={`/project/${project.slug}`} iconRight="arrow-right">View project</Button>
                </div>
            </div>
            <div className="relative order-1 overflow-hidden bg-panel md:order-2">
                {project.image ? (
                    <img src={project.image} alt={project.name} loading="lazy" className="h-full w-full object-cover" />
                ) : (
                    <div className="flex h-full w-full items-center justify-center font-mono text-xs text-white/40">{project.name}</div>
                )}
            </div>
        </div>
    </article>
);

const Header: React.FC<{ inContainer?: boolean; barRef?: React.RefObject<HTMLDivElement> }> = ({ inContainer, barRef }) => (
    <div className={inContainer ? 'mx-auto max-w-content' : 'mx-auto w-full max-w-content'} style={{ paddingInline: GUTTER }}>
        <div className="flex flex-wrap items-end justify-between gap-4">
            <div className="flex flex-col gap-2.5">
                <span className="font-mono text-[12.5px] font-semibold tracking-[0.12em] text-acc">{sections.projects.eyebrow}</span>
                <h2 className="m-0 font-display text-[clamp(30px,3.4vw,48px)] font-bold leading-[1.05] tracking-[-0.03em] text-ink">
                    {sections.projects.title}<span className="text-acc">.</span>
                </h2>
            </div>
            <div className="flex items-center gap-5">
                {barRef && (
                    <span className="hidden items-center gap-2 font-mono text-[11px] uppercase tracking-[0.12em] text-ink2 md:inline-flex">
                        Scroll <Icon name="arrow-right" size={13} />
                        <span className="relative block h-[3px] w-24 overflow-hidden rounded-full bg-line10">
                            <span ref={barRef} className="absolute inset-y-0 left-0 block w-0 rounded-full bg-acc" />
                        </span>
                    </span>
                )}
                <Link to="/projects" className="inline-flex items-center gap-1.5 font-mono text-[13px] font-medium text-acc no-underline">
                    View all <Icon name="arrow-right" size={14} />
                </Link>
            </div>
        </div>
    </div>
);

const FeaturedProjects: React.FC = () => {
    const featured: FP[] = getFeaturedProjects();
    const sectionRef = useRef<HTMLElement>(null);
    const trackRef = useRef<HTMLDivElement>(null);
    const barRef = useRef<HTMLDivElement>(null);
    const maxTranslate = useRef(0);
    const [pinned, setPinned] = useState(false);
    const [height, setHeight] = useState<string | undefined>(undefined);

    // Decide pin mode + measure the horizontal scroll distance.
    useEffect(() => {
        const decide = () => {
            const track = trackRef.current;
            if (!track) return;
            const canPin =
                window.matchMedia('(min-width: 768px) and (pointer: fine)').matches &&
                !window.matchMedia('(prefers-reduced-motion: reduce)').matches;
            // clientWidth excludes the scrollbar — stable because the tall
            // pinned section always shows a vertical scrollbar.
            const dist = Math.max(0, track.scrollWidth - document.documentElement.clientWidth);
            maxTranslate.current = dist;
            if (canPin && dist > 0) {
                setPinned(true);
                setHeight(`${Math.round(window.innerHeight + dist)}px`);
            } else {
                setPinned(false);
                setHeight(undefined);
                track.style.transform = '';
            }
        };
        decide();
        window.addEventListener('resize', decide);
        return () => window.removeEventListener('resize', decide);
    }, []);

    // Drive horizontal translate from vertical scroll while pinned.
    useEffect(() => {
        if (!pinned) return;
        let raf = 0;
        const onScroll = () => {
            if (raf) return;
            raf = requestAnimationFrame(() => {
                raf = 0;
                const section = sectionRef.current;
                const track = trackRef.current;
                if (!section || !track) return;
                const distance = section.offsetHeight - window.innerHeight;
                const progress = distance > 0 ? Math.min(1, Math.max(0, -section.getBoundingClientRect().top / distance)) : 0;
                track.style.transform = `translate3d(${-progress * maxTranslate.current}px,0,0)`;
                if (barRef.current) barRef.current.style.width = `${progress * 100}%`;
            });
        };
        onScroll();
        window.addEventListener('scroll', onScroll, { passive: true });
        return () => { window.removeEventListener('scroll', onScroll); if (raf) cancelAnimationFrame(raf); };
    }, [pinned]);

    if (pinned) {
        return (
            <section ref={sectionRef} className="relative border-t border-line08 bg-paper" style={{ height }} aria-label="Featured projects">
                <div className="sticky top-0 flex h-screen flex-col justify-center overflow-hidden pt-16">
                    <Header barRef={barRef} />
                    <div className="mt-9 overflow-hidden">
                        <div
                            ref={trackRef}
                            className="flex w-max gap-6 will-change-transform"
                            style={{ paddingInline: GUTTER }}
                        >
                            {featured.map((p) => <BigCard key={p.id} project={p} />)}
                        </div>
                    </div>
                </div>
            </section>
        );
    }

    // Fallback: native horizontal scroll-snap carousel (mobile / touch / reduced-motion).
    return (
        <section ref={sectionRef} className="border-t border-line08 bg-paper py-[clamp(56px,8vw,90px)]" aria-label="Featured projects">
            <Header inContainer />
            <div className="mt-10 overflow-x-auto snap-x snap-mandatory hide-scrollbar">
                <div ref={trackRef} className="flex w-max gap-5" style={{ paddingInline: GUTTER }}>
                    {featured.map((p) => <BigCard key={p.id} project={p} snap />)}
                </div>
            </div>
        </section>
    );
};

export default FeaturedProjects;
