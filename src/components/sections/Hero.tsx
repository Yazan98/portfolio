import React from 'react';
import Button from '../ui/Button';
import Icon from '../ui/Icon';
import { TagList } from '../ui/Chip';
import ProjectMarquee from './ProjectMarquee';
// @ts-ignore - data modules authored in JS
import { identity, socials } from '../../data/site';
// @ts-ignore
import { hero, stats } from '../../data/home';
// @ts-ignore
import { getFeaturedProjects } from '../../data/projects';

const up = (delay: number): React.CSSProperties => ({
    animation: `fadeUp .6s ${delay}s cubic-bezier(.2,.7,.2,1) both`,
});

const Hero: React.FC = () => {
    const featured = getFeaturedProjects();
    return (
        <header className="grid-bg pb-[clamp(40px,7vw,72px)] pt-[clamp(120px,20vh,184px)]">
            <div className="mx-auto flex max-w-content flex-col gap-7 px-[clamp(20px,5vw,48px)]">
                <span
                    className="inline-flex w-max items-center gap-2.5 rounded-full border border-line25 px-3.5 py-2 font-mono text-[11.5px] font-medium uppercase tracking-[0.1em] text-ink2"
                    style={up(0)}
                >
                    <span className="relative flex h-2 w-2">
                        <span className="absolute inline-flex h-full w-full rounded-full bg-acc" style={{ animation: 'pulseDot 2s ease-in-out infinite' }} />
                        <span className="relative inline-flex h-2 w-2 rounded-full bg-acc" />
                    </span>
                    {identity.availability}
                </span>

                <div className="flex max-w-3xl flex-col gap-5">
                    <p className="m-0 font-mono text-sm text-ink2" style={up(0.08)}>
                        {hero.greeting} <span className="text-ink">{identity.name}</span> — {identity.role}.
                    </p>
                    <h1
                        className="m-0 font-display text-[clamp(42px,6.5vw,84px)] font-bold leading-[1.02] tracking-[-0.04em] text-ink"
                        style={up(0.16)}
                    >
                        {hero.headline}
                        <span className="text-acc">.</span>
                    </h1>
                    <p className="m-0 max-w-2xl text-[18px] leading-[1.65] text-ink3" style={up(0.24)}>
                        {identity.tagline}
                    </p>
                    <div style={up(0.32)}>
                        <TagList tags={hero.tags} />
                    </div>
                </div>

                <div className="flex flex-wrap items-center gap-3" style={up(0.4)}>
                    <Button to={hero.primaryCta.to} size="lg" iconRight="arrow-right">{hero.primaryCta.label}</Button>
                    <Button href={hero.secondaryCta.href} variant="outline" size="lg">{hero.secondaryCta.label}</Button>
                    <div className="ml-1 flex items-center gap-1.5">
                        {socials.slice(0, 4).map((s: { label: string; icon: string; href: string }) => (
                            <a
                                key={s.label}
                                href={s.href}
                                target="_blank"
                                rel="noopener noreferrer"
                                aria-label={s.label}
                                className="flex h-11 w-11 items-center justify-center rounded-full border border-line14 text-ink2 transition-all hover:-translate-y-0.5 hover:border-ink hover:text-ink"
                            >
                                <Icon name={s.icon as never} size={18} />
                            </a>
                        ))}
                    </div>
                </div>

                <dl className="mt-4 grid grid-cols-2 gap-x-6 gap-y-6 border-t border-line08 pt-8 sm:grid-cols-4" style={up(0.48)}>
                    {stats.map((s: { value: string; label: string }) => (
                        <div key={s.label} className="flex flex-col gap-1">
                            <dt className="font-display text-[clamp(22px,3vw,30px)] font-bold tracking-[-0.02em] text-ink">{s.value}</dt>
                            <dd className="m-0 font-mono text-[11.5px] uppercase tracking-[0.1em] text-ink2">{s.label}</dd>
                        </div>
                    ))}
                </dl>
            </div>

            {/* Sliding showcase of the premium (featured) projects */}
            <div className="mt-[clamp(40px,6vw,64px)]" style={up(0.56)}>
                <div className="mx-auto mb-5 flex max-w-content items-center gap-3 px-[clamp(20px,5vw,48px)]">
                    <span className="font-mono text-[11.5px] font-semibold uppercase tracking-[0.14em] text-acc">Premium projects</span>
                    <span className="h-px flex-1 bg-line08" />
                </div>
                <ProjectMarquee projects={featured} />
            </div>
        </header>
    );
};

export default Hero;
