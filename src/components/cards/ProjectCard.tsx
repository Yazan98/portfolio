import React from 'react';
import { Link } from 'react-router-dom';
import Icon from '../ui/Icon';
import { TagList } from '../ui/Chip';

export interface Project {
    id: number;
    slug: string;
    name: string;
    badge: string;
    year: string;
    summary: string;
    tags: string[];
    image?: string;
    featured?: boolean;
}

const ProjectCard: React.FC<{ project: Project }> = ({ project }) => (
    <Link
        to={`/project/${project.slug}`}
        className="group flex h-full flex-col overflow-hidden rounded-[22px] border border-line10 bg-paper no-underline transition-all duration-300 hover:-translate-y-1.5 hover:border-line14 hover:shadow-card"
    >
        <div className="relative aspect-[16/10] w-full overflow-hidden bg-panel">
            {project.image ? (
                <img
                    src={project.image}
                    alt={project.name}
                    loading="lazy"
                    className="h-full w-full object-cover transition-transform duration-[700ms] group-hover:scale-[1.04]"
                />
            ) : (
                <div className="flex h-full w-full items-center justify-center font-mono text-xs text-white/40">
                    {project.name}
                </div>
            )}
            <span className="absolute left-3.5 top-3.5 rounded-full bg-[rgba(14,138,102,0.9)] px-2.5 py-1 font-mono text-[10px] font-semibold uppercase tracking-[0.08em] text-[#F6F3EC] backdrop-blur-sm">
                {project.badge.split(' · ')[0]}
            </span>
        </div>

        <div className="flex flex-1 flex-col gap-3.5 p-6">
            <div className="flex items-baseline justify-between gap-3">
                <h3 className="m-0 font-display text-xl font-semibold tracking-[-0.01em] text-ink">{project.name}</h3>
                <span className="font-mono text-[12px] text-ink2">{project.year}</span>
            </div>
            <p className="m-0 line-clamp-2 text-sm leading-relaxed text-ink2">{project.summary}</p>
            <TagList tags={project.tags} max={3} className="mt-auto" />
            <span className="mt-1 inline-flex items-center gap-1.5 font-mono text-[12.5px] font-medium text-acc">
                View project
                <Icon name="arrow-right" size={14} className="transition-transform duration-200 group-hover:translate-x-1" />
            </span>
        </div>
    </Link>
);

export default ProjectCard;
