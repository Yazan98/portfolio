import React from 'react';
import { Link } from 'react-router-dom';
import Section from '../ui/Section';
import SectionHeading from '../ui/SectionHeading';
import Reveal from '../ui/Reveal';
import Icon from '../ui/Icon';
import ProjectCard from '../cards/ProjectCard';
// @ts-ignore - data modules authored in JS
import { getFeaturedProjects } from '../../data/projects';
// @ts-ignore
import { sections } from '../../data/home';

const FeaturedProjects: React.FC = () => {
    const featured = getFeaturedProjects();
    return (
        <Section tone="paper" bordered>
            <div className="flex flex-col gap-12">
                <div className="flex flex-wrap items-end justify-between gap-6">
                    <SectionHeading
                        eyebrow={sections.projects.eyebrow}
                        title={sections.projects.title}
                        description="A selection of the mobile products I'm most proud of."
                    />
                    <Link
                        to="/projects"
                        className="inline-flex items-center gap-1.5 font-mono text-[13px] font-medium text-acc no-underline"
                    >
                        View all projects <Icon name="arrow-right" size={14} />
                    </Link>
                </div>
                <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
                    {featured.map((p: any, i: number) => (
                        <Reveal key={p.id} delay={(i % 3) * 80}>
                            <ProjectCard project={p} />
                        </Reveal>
                    ))}
                </div>
            </div>
        </Section>
    );
};

export default FeaturedProjects;
