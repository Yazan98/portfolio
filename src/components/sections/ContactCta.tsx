import React from 'react';
import Section from '../ui/Section';
import Reveal from '../ui/Reveal';
import Icon from '../ui/Icon';
// @ts-ignore - data modules authored in JS
import { identity, socials } from '../../data/site';
// @ts-ignore
import { sections, contact } from '../../data/home';

const ContactCta: React.FC = () => (
    <Section
        id="contact"
        bordered
        padding="py-[clamp(72px,9vw,112px)]"
        xPadding="px-[clamp(16px,3vw,32px)]"
        contentClassName="w-full"
    >
        <Reveal>
            <div className="relative isolate overflow-hidden rounded-[32px] bg-[#14130F] px-6 py-16 text-[#F6F3EC] shadow-panel sm:px-10 sm:py-20 lg:px-16 lg:py-24">
                <span aria-hidden="true" className="contact-aura absolute -left-20 top-1/2 h-72 w-72 -translate-y-1/2 rounded-full bg-acc/25 blur-3xl" />
                <span aria-hidden="true" className="contact-aura contact-aura-delayed absolute -right-24 top-10 h-64 w-64 rounded-full bg-acc/15 blur-3xl" />

                <div className="relative z-10 mx-auto flex max-w-3xl flex-col items-center text-center">
                    <div className="flex items-center gap-2 font-mono text-[11px] font-semibold uppercase tracking-[0.14em] text-acc">
                        <span className="relative flex h-2 w-2">
                            <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-acc opacity-60" />
                            <span className="relative inline-flex h-2 w-2 rounded-full bg-acc" />
                        </span>
                        {sections.contact.eyebrow}
                    </div>

                    <h2
                        className="m-0 mt-7 font-display font-bold leading-[0.97] tracking-[-0.05em]"
                        style={{ fontSize: 'clamp(3rem, 6vw, 5.75rem)' }}
                    >
                        {contact.heading}
                    </h2>

                    <p className="mb-0 mt-6 max-w-2xl text-[16px] leading-[1.75] text-[#F6F3EC]/70 sm:text-[18px]">
                        {contact.body}
                    </p>

                    <a
                        href={`mailto:${identity.email}`}
                        className="group mt-10 inline-flex items-center gap-4 rounded-full bg-[#F6F3EC] px-5 py-3 text-[#14130F] no-underline transition-all duration-300 hover:-translate-y-1 hover:bg-acc hover:text-white sm:px-6 sm:py-4"
                    >
                        <span className="font-mono text-[11px] font-semibold uppercase tracking-[0.1em]">Start a conversation</span>
                        <span className="flex h-8 w-8 items-center justify-center rounded-full bg-[#14130F] text-[#F6F3EC] transition-transform duration-300 group-hover:translate-x-1 group-hover:-translate-y-1 group-hover:bg-white group-hover:text-acc">
                            <Icon name="arrow-up-right" size={16} />
                        </span>
                    </a>

                    <div className="mt-10 flex flex-wrap items-center justify-center gap-3">
                        {socials.slice(0, 4).map((social: { label: string; icon: string; href: string }) => (
                            <a
                                key={social.label}
                                href={social.href}
                                target="_blank"
                                rel="noopener noreferrer"
                                aria-label={social.label}
                                className="flex h-11 w-11 items-center justify-center rounded-full border border-white/15 text-[#F6F3EC]/70 transition-all duration-300 hover:-translate-y-1 hover:border-acc hover:bg-acc hover:text-white"
                            >
                                <Icon name={social.icon as never} size={17} />
                            </a>
                        ))}
                    </div>

                    <div className="mt-9 flex items-center gap-2 font-mono text-[10px] uppercase tracking-[0.12em] text-[#F6F3EC]/40">
                        <Icon name="globe" size={13} />
                        {identity.location}
                    </div>
                </div>
            </div>
        </Reveal>
    </Section>
);

export default ContactCta;
