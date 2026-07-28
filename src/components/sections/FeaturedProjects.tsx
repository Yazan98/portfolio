import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import Section from '../ui/Section';
import SectionHeading from '../ui/SectionHeading';
import Icon from '../ui/Icon';
// @ts-ignore - data modules authored in JS
import { getFeaturedProjects } from '../../data/projects';
// @ts-ignore
import { sections } from '../../data/home';

interface FeaturedProject {
    id: number;
    slug: string;
    name: string;
    badge: string;
    year: string;
    tagline?: string;
    summary: string;
    tags: string[];
    image?: string;
}

type Direction = 'next' | 'previous';

const FeaturedProjects: React.FC = () => {
    const featured: FeaturedProject[] = getFeaturedProjects();
    const [active, setActive] = useState(0);
    const [direction, setDirection] = useState<Direction>('next');

    if (!featured.length) return null;

    const current = featured[active];
    const projectNumber = String(active + 1).padStart(2, '0');
    const projectCount = String(featured.length).padStart(2, '0');
    const badge = current.badge.split(' · ')[0];

    const move = (step: number) => {
        setDirection(step > 0 ? 'next' : 'previous');
        setActive((value) => (value + step + featured.length) % featured.length);
    };

    const select = (index: number) => {
        if (index === active) return;
        setDirection(index > active ? 'next' : 'previous');
        setActive(index);
    };

    return (
        <Section
            bordered
            tone="paper"
            padding="py-[clamp(72px,9vw,112px)]"
            xPadding="px-[clamp(16px,3vw,32px)]"
            contentClassName="w-full"
        >
            <div className="flex flex-col gap-12">
                <div className="flex flex-wrap items-end justify-between gap-6">
                    <SectionHeading
                        eyebrow={sections.projects.eyebrow}
                        title={sections.projects.title}
                        description="A selection of the products I've designed, built and shipped."
                    />
                    <Link
                        to="/projects"
                        className="group inline-flex items-center gap-2 rounded-full border border-line14 px-4 py-2.5 font-mono text-[11px] font-semibold uppercase tracking-[0.1em] text-ink no-underline transition-all hover:border-ink hover:bg-ink hover:text-bg"
                    >
                        View all projects
                        <Icon name="arrow-right" size={14} className="transition-transform group-hover:translate-x-1" />
                    </Link>
                </div>

                <div
                    className="relative overflow-hidden rounded-[32px] bg-[#14130F] p-3 shadow-panel"
                    aria-roledescription="carousel"
                    aria-label="Featured projects"
                >
                    <div className="grid min-h-[620px] gap-3 lg:grid-cols-[minmax(320px,0.78fr)_minmax(0,1.22fr)]">
                        <div
                            key={`copy-${current.id}`}
                            className={`flex min-h-[500px] flex-col justify-between rounded-[24px] px-7 py-8 text-[#F6F3EC] sm:px-10 sm:py-10 ${
                                direction === 'next' ? 'project-copy-next' : 'project-copy-previous'
                            }`}
                            aria-live="polite"
                        >
                            <div className="flex items-center justify-between gap-4">
                                <span className="inline-flex items-center gap-2 font-mono text-[10.5px] font-semibold uppercase tracking-[0.14em] text-[#F6F3EC]/60">
                                    <span className="h-2 w-2 rounded-full bg-acc" />
                                    {badge}
                                </span>
                                <span className="font-mono text-[11px] tracking-[0.12em] text-[#F6F3EC]/45">
                                    {projectNumber} / {projectCount}
                                </span>
                            </div>

                            <div className="my-12">
                                <span className="mb-4 block font-mono text-[11px] font-semibold uppercase tracking-[0.14em] text-acc">
                                    {current.year} / Selected work
                                </span>
                                <h3 className="m-0 font-display text-[clamp(48px,6vw,86px)] font-bold leading-[0.94] tracking-[-0.055em]">
                                    {current.name}
                                </h3>
                                <p className="mb-0 mt-6 max-w-xl text-[17px] leading-[1.7] text-[#F6F3EC]/70">
                                    {current.tagline || current.summary}
                                </p>
                                <div className="mt-7 flex flex-wrap gap-2">
                                    {current.tags.slice(0, 4).map((tag) => (
                                        <span
                                            key={tag}
                                            className="rounded-full border border-white/10 bg-white/[0.045] px-3 py-2 font-mono text-[10px] font-medium text-[#F6F3EC]/70"
                                        >
                                            {tag}
                                        </span>
                                    ))}
                                </div>
                            </div>

                            <div className="flex flex-wrap items-center justify-between gap-5 border-t border-white/10 pt-6">
                                <Link
                                    to={`/project/${current.slug}`}
                                    className="group inline-flex items-center gap-3 rounded-full bg-[#F6F3EC] px-5 py-3 text-sm font-semibold text-[#14130F] no-underline transition-all hover:-translate-y-0.5 hover:bg-acc hover:text-white"
                                >
                                    View project
                                    <Icon name="arrow-up-right" size={16} className="transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
                                </Link>

                                <div className="flex items-center gap-2">
                                    <button
                                        type="button"
                                        onClick={() => move(-1)}
                                        aria-label="Previous featured project"
                                        className="flex h-11 w-11 items-center justify-center rounded-full border border-white/15 text-[#F6F3EC]/75 transition-all hover:border-white/40 hover:bg-white/10 hover:text-white"
                                    >
                                        <Icon name="arrow-left" size={17} />
                                    </button>
                                    <button
                                        type="button"
                                        onClick={() => move(1)}
                                        aria-label="Next featured project"
                                        className="group flex h-11 items-center gap-3 rounded-full bg-acc px-5 font-mono text-[10px] font-semibold uppercase tracking-[0.12em] text-white transition-all hover:-translate-y-0.5 hover:bg-[#10A77A]"
                                    >
                                        Next
                                        <Icon name="arrow-right" size={16} className="transition-transform group-hover:translate-x-1" />
                                    </button>
                                </div>
                            </div>
                        </div>

                        <div className="relative min-h-[420px] overflow-hidden rounded-[24px] bg-[#EDE9DF] lg:min-h-full">
                            <span className="pointer-events-none absolute -bottom-8 right-4 z-0 font-display text-[clamp(110px,16vw,260px)] font-bold leading-none tracking-[-0.08em] text-[#14130F]/[0.035]">
                                {current.year}
                            </span>
                            <div
                                key={`visual-${current.id}`}
                                className={`absolute inset-0 z-10 flex items-center justify-center p-3 sm:p-6 ${
                                    direction === 'next' ? 'project-visual-next' : 'project-visual-previous'
                                }`}
                            >
                                {current.image ? (
                                    <img
                                        src={current.image}
                                        alt={current.name}
                                        loading={active === 0 ? 'eager' : 'lazy'}
                                        className="max-h-full max-w-full rounded-[18px] object-contain shadow-[0_28px_70px_rgba(20,19,15,0.22)]"
                                    />
                                ) : (
                                    <span className="font-display text-4xl font-bold text-ink">{current.name}</span>
                                )}
                            </div>
                        </div>
                    </div>

                    <div className="flex items-center gap-2 px-2 pb-1 pt-4">
                        {featured.map((project, index) => (
                            <button
                                key={project.id}
                                type="button"
                                onClick={() => select(index)}
                                aria-label={`Show ${project.name}`}
                                aria-current={index === active}
                                className={`h-1.5 rounded-full transition-all duration-500 ${
                                    index === active ? 'w-12 bg-acc' : 'w-5 bg-white/15 hover:bg-white/35'
                                }`}
                            />
                        ))}
                    </div>
                </div>
            </div>
        </Section>
    );
};

export default FeaturedProjects;
