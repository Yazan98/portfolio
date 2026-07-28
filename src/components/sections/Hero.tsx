import React from 'react';
import Button from '../ui/Button';
import Icon from '../ui/Icon';
import { TagList } from '../ui/Chip';
import AppShowcase from './AppShowcase';
// @ts-ignore - data modules authored in JS
import { identity, socials } from '../../data/site';
// @ts-ignore
import { hero } from '../../data/home';

const up = (delay: number): React.CSSProperties => ({
    animation: `fadeUp .6s ${delay}s cubic-bezier(.2,.7,.2,1) both`,
});

const HOME_GUTTER = 'px-[clamp(16px,3vw,32px)]';

const Hero: React.FC = () => {
    return (
        <header className="min-h-screen bg-bg pb-[clamp(40px,7vw,72px)] pt-[clamp(88px,12vh,120px)]">
            <div className={`w-full ${HOME_GUTTER}`}>
                <div className="grid items-center gap-x-10 gap-y-12 lg:grid-cols-[minmax(0,1fr)_minmax(0,700px)]">
                    {/* Left - intro copy + actions */}
                    <div className="flex flex-col gap-7">
                        <div className="flex max-w-2xl flex-col gap-5">
                            <p className="m-0 font-mono text-sm leading-[1.8] text-ink2" style={up(0)}>
                                <span className="block">{hero.greeting} <span className="text-ink">{identity.name}</span></span>
                                <span className="block">{identity.role}.</span>
                            </p>
                            <h1
                                className="m-0 max-w-[900px] font-display text-[clamp(38px,5.2vw,72px)] font-bold leading-[1.04] tracking-[-0.04em] text-ink"
                                style={up(0.08)}
                            >
                                {hero.headline}
                                <span className="text-acc">.</span>
                            </h1>
                            <p className="m-0 max-w-2xl text-[18px] leading-[1.65] text-ink3" style={up(0.16)}>
                                {identity.tagline}
                            </p>
                            <div style={up(0.24)}>
                                <TagList tags={hero.tags} />
                            </div>
                        </div>

                        <div className="flex flex-wrap items-center gap-3" style={up(0.32)}>
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
                    </div>

                    {/* Right - auto-scrolling promoted apps */}
                    <div className="hidden lg:flex lg:justify-center" style={up(0.4)}>
                        <AppShowcase />
                    </div>
                </div>
            </div>

        </header>
    );
};

export default Hero;
