import React, { useMemo, useState } from 'react';
import Seo from '../components/ui/Seo';
import Section from '../components/ui/Section';
import Reveal from '../components/ui/Reveal';
import ProjectCard from '../components/cards/ProjectCard';
// @ts-ignore - data module authored in JS
import { getProjects, getActiveCategories, CATEGORY } from '../data/projects';

const ProjectsPage: React.FC = () => {
    const [filter, setFilter] = useState<string>(CATEGORY.all);
    const all = getProjects();
    const categories = useMemo(() => getActiveCategories(), []);

    const projects = useMemo(
        () => (filter === CATEGORY.all ? all : all.filter((p: any) => p.category === filter)),
        [filter, all],
    );

    return (
        <>
            <Seo
                title="Projects"
                description="Explore mobile apps, Kotlin Multiplatform products, Android and iOS projects, backend systems, developer tools, and websites built by Yazan Tarifi."
                path="/projects"
                schemaType="CollectionPage"
            />

            <header className="bg-bg px-[clamp(20px,5vw,48px)] pb-[clamp(32px,5vw,56px)] pt-[clamp(112px,16vh,150px)]">
                <div className="mx-auto flex max-w-content flex-col gap-5">
                    <span className="font-mono text-[12.5px] font-semibold tracking-[0.12em] text-acc" style={{ animation: 'fadeUp .6s cubic-bezier(.2,.7,.2,1) both' }}>
                        SELECTED WORK
                    </span>
                    <h1 className="m-0 font-display text-[clamp(40px,6vw,76px)] font-bold leading-[1.03] tracking-[-0.04em] text-ink" style={{ animation: 'fadeUp .6s .08s cubic-bezier(.2,.7,.2,1) both' }}>
                        Projects<span className="text-acc">.</span>
                    </h1>
                    <p className="m-0 max-w-2xl text-[18px] leading-[1.65] text-ink3" style={{ animation: 'fadeUp .6s .16s cubic-bezier(.2,.7,.2,1) both' }}>
                        Mobile apps, multiplatform products, backends and websites I’ve designed and built over the years.
                    </p>
                </div>
            </header>

            <Section padding="pt-8 pb-[clamp(64px,9vw,110px)]">
                {/* Filters */}
                <div className="mb-10 flex flex-wrap gap-2.5">
                    {categories.map((c: { value: string; label: string }) => {
                        const active = filter === c.value;
                        return (
                            <button
                                key={c.value}
                                type="button"
                                onClick={() => setFilter(c.value)}
                                className={`rounded-full px-[18px] py-2 text-[13.5px] font-medium transition-all ${
                                    active
                                        ? 'bg-btn-bg text-btn-fg'
                                        : 'border border-line14 text-ink2 hover:border-ink hover:text-ink'
                                }`}
                            >
                                {c.label}
                            </button>
                        );
                    })}
                </div>

                {/* Grid (re-keyed by filter so cards re-reveal on change) */}
                <div key={filter} className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
                    {projects.map((p: any, i: number) => (
                        <Reveal key={p.id} delay={(i % 3) * 70}>
                            <ProjectCard project={p} />
                        </Reveal>
                    ))}
                </div>
            </Section>
        </>
    );
};

export default ProjectsPage;
