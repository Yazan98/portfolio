import React from 'react';
import { Link, useParams } from 'react-router-dom';
import Seo from '../components/ui/Seo';
import Section from '../components/ui/Section';
import Reveal from '../components/ui/Reveal';
import SectionHeading from '../components/ui/SectionHeading';
import Button from '../components/ui/Button';
import Icon, { IconName } from '../components/ui/Icon';
import { TagList } from '../components/ui/Chip';
import { BannerFrame, PhoneMockup } from '../components/ui/Frames';
import FeatureCard from '../components/cards/FeatureCard';
import NextProjectCard from '../components/cards/NextProjectCard';
// @ts-ignore - data module authored in JS
import { getProjectBySlug, getNextProject } from '../data/projects';
// @ts-ignore
import { identity } from '../data/site';

type Links = { github?: string; live?: string; playStore?: string; appStore?: string };

function linkButtons(links: Links): { href: string; label: string; icon: IconName }[] {
    const out: { href: string; label: string; icon: IconName }[] = [];
    if (links.github) out.push({ href: links.github, label: 'GitHub', icon: 'github' });
    if (links.live) out.push({ href: links.live, label: 'Visit site', icon: 'globe' });
    if (links.playStore) out.push({ href: links.playStore, label: 'Google Play', icon: 'play-store' });
    if (links.appStore) out.push({ href: links.appStore, label: 'App Store', icon: 'apple' });
    return out;
}

const FactRow: React.FC<{ label: string; value: string; accent?: boolean; last?: boolean }> = ({ label, value, accent, last }) => (
    <div className={`flex items-center justify-between gap-3.5 py-3.5 ${last ? '' : 'border-b border-line08'}`}>
        <span className="text-sm text-ink2">{label}</span>
        <span className={`text-right font-mono text-[13px] font-semibold ${accent ? 'text-acc' : 'text-ink'}`}>{value}</span>
    </div>
);

const NotFound: React.FC = () => (
    <Section padding="py-[clamp(140px,22vh,220px)]">
        <div className="flex flex-col items-center gap-5 text-center">
            <span className="font-mono text-sm text-acc">404</span>
            <h1 className="m-0 font-display text-4xl font-bold tracking-[-0.03em] text-ink">Project not found.</h1>
            <p className="m-0 max-w-md text-ink2">The project you’re looking for doesn’t exist or may have moved.</p>
            <Button to="/projects" iconRight="arrow-right">Browse all projects</Button>
        </div>
    </Section>
);

const ProjectDetailsPage: React.FC = () => {
    const { slug } = useParams<{ slug: string }>();
    const project = getProjectBySlug(slug);

    if (!project) return <NotFound />;

    const next = getNextProject(project.slug);
    const buttons = linkButtons(project.links || {});
    const ogImage = typeof project.image === 'string' && project.image.startsWith('http') ? project.image : undefined;
    const screens: string[] = (project.screens || []).slice(0, 3);

    return (
        <>
            <Seo title={project.name} description={project.summary} path={`/project/${project.slug}`} image={ogImage} />

            {/* Hero */}
            <header className="grid-bg px-[clamp(20px,5vw,48px)] pb-6 pt-[clamp(120px,18vh,160px)]">
                <div className="mx-auto flex max-w-content flex-col gap-6">
                    <Link
                        to="/projects"
                        className="inline-flex w-max items-center gap-2 font-mono text-[13px] font-medium text-ink2 no-underline transition-colors hover:text-ink"
                        style={{ animation: 'fadeUp .6s cubic-bezier(.2,.7,.2,1) both' }}
                    >
                        <Icon name="arrow-left" size={15} /> ALL PROJECTS
                    </Link>

                    <div className="flex flex-wrap items-end justify-between gap-7">
                        <div className="flex max-w-2xl flex-col gap-[18px]">
                            <span
                                className="w-max rounded-full border border-line25 px-3.5 py-[7px] font-mono text-[11.5px] font-medium uppercase tracking-[0.1em] text-acc"
                                style={{ animation: 'fadeUp .6s .08s cubic-bezier(.2,.7,.2,1) both' }}
                            >
                                {project.badge}
                            </span>
                            <h1
                                className="m-0 font-display text-[clamp(44px,6vw,84px)] font-bold leading-[1.02] tracking-[-0.04em] text-ink"
                                style={{ animation: 'fadeUp .6s .16s cubic-bezier(.2,.7,.2,1) both' }}
                            >
                                {project.name}<span className="text-acc">.</span>
                            </h1>
                            <p
                                className="m-0 text-[18px] leading-[1.65] text-ink3"
                                style={{ animation: 'fadeUp .6s .24s cubic-bezier(.2,.7,.2,1) both' }}
                            >
                                {project.tagline}
                            </p>
                            <div style={{ animation: 'fadeUp .6s .32s cubic-bezier(.2,.7,.2,1) both' }}>
                                <TagList tags={project.tags} />
                            </div>
                        </div>

                        <div
                            className="flex flex-wrap gap-3"
                            style={{ animation: 'fadeUp .6s .4s cubic-bezier(.2,.7,.2,1) both' }}
                        >
                            {buttons.map((b, i) => (
                                <Button
                                    key={b.href}
                                    href={b.href}
                                    variant={i === 0 ? 'solid' : 'outline'}
                                    size="lg"
                                    icon={b.icon}
                                    iconRight="arrow-up-right"
                                >
                                    {b.label}
                                </Button>
                            ))}
                            <Button href={`mailto:${identity.email}?subject=${encodeURIComponent(project.name)}`} variant="outline" size="lg">
                                Ask about it
                            </Button>
                        </div>
                    </div>
                </div>
            </header>

            {/* Banner */}
            <section className="bg-bg px-[clamp(20px,5vw,48px)] pt-7">
                <div className="mx-auto max-w-content">
                    <Reveal>
                        <BannerFrame src={project.banner || project.image} alt={`${project.name} — banner`} eager fit="cover" />
                    </Reveal>
                </div>
            </section>

            {/* Overview + facts */}
            <Section>
                <div className="grid grid-cols-1 items-start gap-[clamp(32px,5vw,64px)] lg:grid-cols-2">
                    <Reveal className="flex flex-col gap-[18px]">
                        <SectionHeading eyebrow="01 — OVERVIEW" title={`About ${project.name}`} />
                        {(project.overview || []).map((p: string, i: number) => (
                            <p key={i} className="m-0 text-[17px] leading-[1.7] text-ink3">{p}</p>
                        ))}
                    </Reveal>

                    <Reveal className="flex flex-col gap-3.5 rounded-[22px] border border-line10 bg-paper p-[30px]">
                        <span className="font-mono text-xs font-semibold uppercase tracking-[0.12em] text-ink2">Facts</span>
                        <FactRow label="Type" value={project.facts.type} />
                        <FactRow label="Platforms" value={project.facts.platforms} />
                        <FactRow label="Core stack" value={project.facts.stack} />
                        <FactRow label="Focus" value={project.facts.focus} accent last />
                    </Reveal>
                </div>
            </Section>

            {/* Features */}
            {project.features?.length > 0 && (
                <Section tone="paper" bordered>
                    <div className="flex flex-col gap-12">
                        <SectionHeading eyebrow="02 — WHAT’S INSIDE" title="Key features" />
                        <div className="grid grid-cols-1 gap-[18px] sm:grid-cols-2 lg:grid-cols-4">
                            {project.features.map((f: { title: string; desc: string }, i: number) => (
                                <Reveal key={f.title} delay={(i % 4) * 70}>
                                    <FeatureCard num={`0${i + 1}`} title={f.title} desc={f.desc} />
                                </Reveal>
                            ))}
                        </div>
                    </div>
                </Section>
            )}

            {/* Screens */}
            {screens.length > 0 && (
                <Section bordered>
                    <div className="flex flex-col gap-12">
                        <SectionHeading eyebrow="03 — SCREENS" title="Inside the product" />
                        <div
                            className="grid justify-items-center gap-[26px]"
                            style={{ gridTemplateColumns: 'repeat(auto-fit, minmax(200px, 1fr))' }}
                        >
                            {screens.map((src, i) => (
                                <Reveal
                                    key={i}
                                    delay={(i % 3) * 70}
                                    className={`w-full max-w-[280px] ${i % 2 === 1 ? 'sm:mt-[clamp(0px,3vw,36px)]' : ''}`}
                                >
                                    <PhoneMockup src={src} alt={`${project.name} — screen ${i + 1}`} />
                                </Reveal>
                            ))}
                        </div>
                    </div>
                </Section>
            )}

            {/* Next project */}
            <Section bordered>
                <Reveal>
                    <NextProjectCard name={next.name} slug={next.slug} />
                </Reveal>
            </Section>
        </>
    );
};

export default ProjectDetailsPage;
