import React from 'react';
import Seo from '../components/ui/Seo';
import Section from '../components/ui/Section';
import Reveal from '../components/ui/Reveal';
// @ts-ignore - data module authored in JS
import { getArchiveByYear } from '../data/archive';

interface ArchiveItem { year: string; name: string; madeAt: string; built: string; isOpenSource: boolean; }

const ArchivePage: React.FC = () => {
    const groups: { year: string; items: ArchiveItem[] }[] = getArchiveByYear();
    const total = groups.reduce((n, g) => n + g.items.length, 0);

    return (
        <>
            <Seo
                title="Archive"
                description="A complete chronological archive of everything Yazan Tarifi has shipped — apps, libraries, APIs and tools."
                path="/archive"
            />

            <header className="grid-bg px-[clamp(20px,5vw,48px)] pb-[clamp(32px,5vw,56px)] pt-[clamp(112px,16vh,150px)]">
                <div className="mx-auto flex max-w-content flex-col gap-5">
                    <span className="font-mono text-[12.5px] font-semibold tracking-[0.12em] text-acc" style={{ animation: 'fadeUp .6s cubic-bezier(.2,.7,.2,1) both' }}>
                        {total} PROJECTS · SINCE 2019
                    </span>
                    <h1 className="m-0 font-display text-[clamp(40px,6vw,76px)] font-bold leading-[1.03] tracking-[-0.04em] text-ink" style={{ animation: 'fadeUp .6s .08s cubic-bezier(.2,.7,.2,1) both' }}>
                        Archive<span className="text-acc">.</span>
                    </h1>
                    <p className="m-0 max-w-2xl text-[18px] leading-[1.65] text-ink3" style={{ animation: 'fadeUp .6s .16s cubic-bezier(.2,.7,.2,1) both' }}>
                        Everything I’ve built — apps, libraries, APIs, plugins and CLIs — in one chronological list.
                    </p>
                </div>
            </header>

            <Section padding="pt-6 pb-[clamp(64px,9vw,110px)]">
                {groups.map((g, gi) => (
                    <Reveal key={g.year} delay={gi * 40}>
                        <div className="grid grid-cols-1 gap-2 border-t border-line08 py-8 md:grid-cols-[110px_1fr] md:gap-8">
                            <h2 className="m-0 font-mono text-base font-semibold text-acc">{g.year}</h2>
                            <div className="flex flex-col">
                                {g.items.map((item, ii) => (
                                    <div
                                        key={`${item.name}-${ii}`}
                                        className={`flex flex-col gap-1.5 py-4 sm:flex-row sm:items-baseline sm:justify-between sm:gap-6 ${ii === 0 ? '' : 'border-t border-line08'}`}
                                    >
                                        <div className="min-w-0">
                                            <h3 className="m-0 font-display text-lg font-semibold tracking-[-0.01em] text-ink">{item.name}</h3>
                                            <p className="m-0 mt-1 font-mono text-[12px] leading-relaxed text-ink2">{item.built}</p>
                                        </div>
                                        <span className={`chip h-max shrink-0 ${item.isOpenSource ? 'text-acc' : ''}`}>
                                            {item.isOpenSource ? 'Open source' : 'Private'}
                                        </span>
                                    </div>
                                ))}
                            </div>
                        </div>
                    </Reveal>
                ))}
            </Section>
        </>
    );
};

export default ArchivePage;
