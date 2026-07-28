import React from 'react';
import Seo from '../components/ui/Seo';
import Section from '../components/ui/Section';
import Reveal from '../components/ui/Reveal';
import SectionHeading from '../components/ui/SectionHeading';
import SkillCard from '../components/cards/SkillCard';
// @ts-ignore - data modules authored in JS
import { getSkills, languages } from '../data/skills';
// @ts-ignore
import getServices from '../data/services';

const SkillsPage: React.FC = () => {
    const skills = getSkills();
    const services = getServices();

    return (
        <>
            <Seo
                title="Skills"
                description="Explore Yazan Tarifi's expertise in Kotlin, Android, Jetpack Compose, Kotlin Multiplatform, iOS, Spring Boot, backend systems, and developer tooling."
                path="/skills"
                schemaType="AboutPage"
            />

            <header className="bg-bg px-[clamp(20px,5vw,48px)] pb-[clamp(32px,5vw,56px)] pt-[clamp(112px,16vh,150px)]">
                <div className="mx-auto flex max-w-content flex-col gap-5">
                    <span className="font-mono text-[12.5px] font-semibold tracking-[0.12em] text-acc" style={{ animation: 'fadeUp .6s cubic-bezier(.2,.7,.2,1) both' }}>
                        TOOLBOX
                    </span>
                    <h1 className="m-0 font-display text-[clamp(40px,6vw,76px)] font-bold leading-[1.03] tracking-[-0.04em] text-ink" style={{ animation: 'fadeUp .6s .08s cubic-bezier(.2,.7,.2,1) both' }}>
                        Skills<span className="text-acc">.</span>
                    </h1>
                    <p className="m-0 max-w-2xl text-[18px] leading-[1.65] text-ink3" style={{ animation: 'fadeUp .6s .16s cubic-bezier(.2,.7,.2,1) both' }}>
                        The languages, frameworks and tools I use to build robust mobile products and the systems behind them.
                    </p>
                </div>
            </header>

            {/* Core languages */}
            <Section padding="pt-8 pb-[clamp(48px,7vw,80px)]">
                <div className="flex flex-col gap-8">
                    <SectionHeading eyebrow="01 - LANGUAGES" title="Core languages" />
                    <div className="grid grid-cols-2 gap-3 sm:grid-cols-3">
                        {languages.map((l: { name: string; role: string }, i: number) => (
                            <Reveal key={l.name} delay={(i % 3) * 50}>
                                <div className="flex items-center justify-between gap-3 rounded-2xl border border-line10 bg-paper px-5 py-4 transition-all duration-200 hover:-translate-y-0.5 hover:shadow-card">
                                    <span className="font-display text-lg font-semibold tracking-[-0.01em] text-ink">{l.name}</span>
                                    <span className="font-mono text-[10.5px] uppercase tracking-[0.08em] text-ink2">{l.role}</span>
                                </div>
                            </Reveal>
                        ))}
                    </div>
                </div>
            </Section>

            {/* Detailed skills */}
            <Section tone="paper" bordered>
                <div className="flex flex-col gap-12">
                    <SectionHeading eyebrow="02 - EXPERTISE" title="Frameworks & platforms" />
                    <div className="grid grid-cols-1 gap-6 md:grid-cols-2">
                        {skills.map((s: { icon: string; name: string; description: string; tags: string[] }, i: number) => (
                            <Reveal key={s.name} delay={(i % 2) * 80}>
                                <SkillCard {...s} />
                            </Reveal>
                        ))}
                    </div>
                </div>
            </Section>

            {/* What I do */}
            <Section bordered>
                <div className="flex flex-col gap-12">
                    <SectionHeading eyebrow="03 - WHAT I DO" title="How I can help" />
                    <div className="grid grid-cols-1 gap-[18px] sm:grid-cols-2 lg:grid-cols-4">
                        {services.map((s: { num: string; tag: string; title: string; description: string }, i: number) => (
                            <Reveal key={s.num} delay={(i % 4) * 70}>
                                <div className="flex h-full flex-col gap-3 rounded-[20px] border border-line08 bg-bg p-7">
                                    <span className="font-mono text-sm font-semibold text-acc">{s.num}</span>
                                    <h3 className="m-0 font-display text-[19px] font-semibold tracking-[-0.01em] text-ink">{s.title}</h3>
                                    <p className="m-0 text-sm leading-[1.65] text-ink2">{s.description}</p>
                                </div>
                            </Reveal>
                        ))}
                    </div>
                </div>
            </Section>
        </>
    );
};

export default SkillsPage;
