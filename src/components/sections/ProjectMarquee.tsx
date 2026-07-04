import React from 'react';
import { Link } from 'react-router-dom';
import { Project } from '../cards/ProjectCard';

interface ProjectMarqueeProps {
    projects: Project[];
    /** Seconds for one full loop */
    duration?: number;
}

const Slide: React.FC<{ project: Project; ariaHidden?: boolean }> = ({ project, ariaHidden }) => (
    <Link
        to={`/project/${project.slug}`}
        aria-hidden={ariaHidden}
        tabIndex={ariaHidden ? -1 : undefined}
        className="group/slide relative block w-[230px] flex-none overflow-hidden rounded-[20px] border border-line10 bg-panel no-underline sm:w-[280px]"
    >
        <div className="aspect-[16/10] w-full overflow-hidden">
            {project.image ? (
                <img
                    src={project.image}
                    alt={project.name}
                    loading="lazy"
                    className="h-full w-full object-cover transition-transform duration-700 group-hover/slide:scale-105"
                />
            ) : (
                <div className="flex h-full w-full items-center justify-center font-mono text-xs text-white/40">
                    {project.name}
                </div>
            )}
        </div>
        <div className="absolute inset-x-0 bottom-0 flex items-end justify-between gap-2 bg-gradient-to-t from-black/80 via-black/30 to-transparent p-4">
            <span className="font-display text-base font-semibold text-[#F6F3EC]">{project.name}</span>
            <span className="rounded-full bg-[rgba(14,138,102,0.9)] px-2 py-0.5 font-mono text-[9.5px] font-semibold uppercase tracking-[0.08em] text-[#F6F3EC]">
                {project.badge.split(' · ')[0]}
            </span>
        </div>
    </Link>
);

/**
 * Full-bleed, infinitely sliding strip of the premium (featured) projects.
 * Two identical copies scroll as one track (-50% loop); pauses on hover and
 * stops entirely under prefers-reduced-motion (handled globally in index.css).
 */
const ProjectMarquee: React.FC<ProjectMarqueeProps> = ({ projects, duration = 46 }) => {
    if (!projects.length) return null;
    return (
        <div className="marquee-viewport relative overflow-hidden py-1" aria-label="Featured projects">
            {/* Edge fades */}
            <div className="pointer-events-none absolute inset-y-0 left-0 z-10 w-16 bg-gradient-to-r from-bg to-transparent sm:w-28" />
            <div className="pointer-events-none absolute inset-y-0 right-0 z-10 w-16 bg-gradient-to-l from-bg to-transparent sm:w-28" />

            <div className="marquee-track flex w-max gap-4 sm:gap-5" style={{ '--marquee-duration': `${duration}s` } as React.CSSProperties}>
                {projects.map((p) => <Slide key={`a-${p.id}`} project={p} />)}
                {projects.map((p) => <Slide key={`b-${p.id}`} project={p} ariaHidden />)}
            </div>
        </div>
    );
};

export default ProjectMarquee;
