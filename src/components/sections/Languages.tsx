import React from 'react';
import Section from '../ui/Section';
import SectionHeading from '../ui/SectionHeading';
import Reveal from '../ui/Reveal';
import { Link } from 'react-router-dom';
import Icon from '../ui/Icon';
// @ts-ignore - data modules authored in JS
import { languages } from '../../data/skills';
// @ts-ignore
import { sections } from '../../data/home';

const languageCodes: Record<string, string> = {
    Kotlin: 'KT',
    Java: 'JV',
    TypeScript: 'TS',
    Swift: 'SW',
    JavaScript: 'JS',
    Ruby: 'RB',
};

const Languages: React.FC = () => (
    <Section
        bordered
        padding="py-[clamp(72px,9vw,112px)]"
        xPadding="px-[clamp(16px,3vw,32px)]"
        contentClassName="w-full"
    >
        <div className="grid items-start gap-12 lg:grid-cols-[minmax(240px,0.62fr)_minmax(0,1.5fr)] lg:gap-16">
            <div className="flex flex-col items-start gap-8 lg:sticky lg:top-28">
                <SectionHeading
                    eyebrow={sections.languages.eyebrow}
                    title={sections.languages.title}
                    description="A practical language stack shaped by production mobile apps, backend systems and developer tooling."
                />
                <div className="flex w-full items-center gap-5 border-y border-line10 py-5">
                    <span className="font-display text-[40px] font-bold leading-none tracking-[-0.05em] text-ink">
                        {String(languages.length).padStart(2, '0')}
                    </span>
                    <span className="max-w-[180px] font-mono text-[11px] uppercase leading-[1.55] tracking-[0.11em] text-ink2">
                        Core languages across my stack
                    </span>
                </div>
                <Link
                    to="/skills"
                    className="group inline-flex items-center gap-3 rounded-full bg-ink px-5 py-3 font-mono text-[11px] font-semibold uppercase tracking-[0.12em] text-bg no-underline transition-all hover:-translate-y-0.5 hover:bg-acc"
                >
                    Explore full toolbox
                    <Icon name="arrow-right" size={14} className="transition-transform group-hover:translate-x-1" />
                </Link>
            </div>

            <div className="grid auto-rows-[minmax(170px,auto)] grid-cols-1 gap-3 sm:grid-cols-2 xl:grid-cols-3">
                {languages.map((l: { name: string; role: string }, i: number) => (
                    <Reveal
                        key={l.name}
                        delay={i * 55}
                        className={`h-full ${i === 0 ? 'sm:col-span-2 sm:row-span-2' : ''} ${
                            i === languages.length - 1 ? 'sm:col-span-2 xl:col-span-1' : ''
                        }`}
                    >
                        {i === 0 ? (
                            <div className="group relative flex h-full min-h-[353px] overflow-hidden rounded-[28px] bg-[#14130F] p-8 text-[#F6F3EC] shadow-panel sm:p-10">
                                <span className="pointer-events-none absolute -bottom-16 -right-3 font-display text-[220px] font-bold leading-none tracking-[-0.08em] text-white/[0.045]">
                                    K
                                </span>
                                <div className="relative z-10 flex w-full flex-col justify-between gap-12">
                                    <div className="flex items-start justify-between gap-6">
                                        <div className="flex items-center gap-2 font-mono text-[10.5px] font-semibold uppercase tracking-[0.14em] text-[#F6F3EC]/65">
                                            <span className="h-2 w-2 rounded-full bg-acc" />
                                            Primary language
                                        </div>
                                        <span className="font-mono text-[11px] tracking-[0.12em] text-[#F6F3EC]/50">01 / 06</span>
                                    </div>
                                    <div>
                                        <span className="mb-4 block font-mono text-[11px] font-semibold uppercase tracking-[0.14em] text-acc">{l.role}</span>
                                        <h3 className="m-0 font-display text-[clamp(50px,5vw,76px)] font-bold leading-[0.94] tracking-[-0.055em]">
                                            {l.name}
                                        </h3>
                                    </div>
                                </div>
                            </div>
                        ) : (
                            <div className="group relative flex h-full min-h-[170px] flex-col justify-between overflow-hidden rounded-[22px] border border-line10 bg-paper p-7 transition-all duration-300 hover:-translate-y-1 hover:border-line25 hover:shadow-card">
                                <div className="flex items-start justify-between gap-5">
                                    <span className="font-mono text-[11px] font-semibold tracking-[0.12em] text-acc">
                                        {String(i + 1).padStart(2, '0')}
                                    </span>
                                    <span className="font-display text-[25px] font-bold tracking-[-0.04em] text-ink/15 transition-colors group-hover:text-acc/35">
                                        {languageCodes[l.name]}
                                    </span>
                                </div>
                                <div className="flex flex-col items-start gap-2">
                                    <h3 className="m-0 font-display text-[23px] font-semibold leading-tight tracking-[-0.025em] text-ink">{l.name}</h3>
                                    <span className="font-mono text-[10px] font-medium uppercase leading-[1.45] tracking-[0.1em] text-ink2">
                                        {l.role}
                                    </span>
                                </div>
                                <span className="absolute bottom-0 left-7 h-[3px] w-8 rounded-full bg-acc transition-all duration-300 group-hover:w-16" />
                            </div>
                        )}
                    </Reveal>
                ))}
            </div>
        </div>
    </Section>
);

export default Languages;
