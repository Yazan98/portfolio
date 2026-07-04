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

const Languages: React.FC = () => (
    <Section bordered>
        <div className="flex flex-col gap-12">
            <div className="flex flex-wrap items-end justify-between gap-6">
                <SectionHeading
                    eyebrow={sections.languages.eyebrow}
                    title={sections.languages.title}
                    description="The languages I reach for across mobile, backend and tooling."
                />
                <Link
                    to="/skills"
                    className="inline-flex items-center gap-1.5 font-mono text-[13px] font-medium text-acc no-underline"
                >
                    All skills <Icon name="arrow-right" size={14} />
                </Link>
            </div>
            <div className="grid grid-cols-2 gap-3 sm:grid-cols-3">
                {languages.map((l: { name: string; role: string }, i: number) => (
                    <Reveal key={l.name} delay={i * 50}>
                        <div className="flex items-center justify-between gap-3 rounded-2xl border border-line10 bg-paper px-5 py-4 transition-all duration-200 hover:-translate-y-0.5 hover:shadow-card">
                            <span className="font-display text-lg font-semibold tracking-[-0.01em] text-ink">{l.name}</span>
                            <span className="font-mono text-[10.5px] uppercase tracking-[0.08em] text-ink2">{l.role}</span>
                        </div>
                    </Reveal>
                ))}
            </div>
        </div>
    </Section>
);

export default Languages;
