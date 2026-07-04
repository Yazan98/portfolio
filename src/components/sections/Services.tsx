import React from 'react';
import Section from '../ui/Section';
import SectionHeading from '../ui/SectionHeading';
import Reveal from '../ui/Reveal';
import ServiceCard from '../cards/ServiceCard';
// @ts-ignore - data modules authored in JS
import getServices from '../../data/services';
// @ts-ignore
import { sections } from '../../data/home';

const Services: React.FC = () => {
    const services = getServices();
    return (
        <Section tone="paper" bordered>
            <div className="flex flex-col gap-12">
                <SectionHeading
                    eyebrow={sections.services.eyebrow}
                    title={sections.services.title}
                    description="From native mobile apps to shared multiplatform logic and the backends behind them."
                />
                <div className="grid grid-cols-1 gap-[18px] sm:grid-cols-2 lg:grid-cols-4">
                    {services.map((s: { num: string; tag: string; title: string; description: string }, i: number) => (
                        <Reveal key={s.num} delay={i * 70}>
                            <ServiceCard {...s} />
                        </Reveal>
                    ))}
                </div>
            </div>
        </Section>
    );
};

export default Services;
