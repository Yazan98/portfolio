import React from 'react';
import Section from '../ui/Section';
import Reveal from '../ui/Reveal';
import Icon from '../ui/Icon';
// @ts-ignore - data modules authored in JS
import { identity, socials } from '../../data/site';
// @ts-ignore
import { sections, contact } from '../../data/home';

const ContactCta: React.FC = () => (
    <Section id="contact" bordered>
        <Reveal>
            <div className="relative overflow-hidden rounded-[28px] bg-panel p-[clamp(32px,6vw,72px)] text-[#F6F3EC]">
                <div
                    aria-hidden="true"
                    className="pointer-events-none absolute -right-24 -top-28 h-[380px] w-[380px] rounded-full"
                    style={{ background: 'radial-gradient(circle, var(--acc-soft), transparent 65%)' }}
                />
                <div className="relative flex max-w-2xl flex-col gap-6">
                    <span className="font-mono text-xs font-semibold tracking-[0.12em] text-acc">{sections.contact.eyebrow}</span>
                    <h2 className="m-0 font-display text-[clamp(30px,4.5vw,56px)] font-bold leading-[1.05] tracking-[-0.03em]">
                        {contact.heading}
                    </h2>
                    <p className="m-0 text-[17px] leading-[1.7] text-white/70">{contact.body}</p>

                    <div className="mt-2 flex flex-wrap items-center gap-3">
                        <a
                            href={`mailto:${identity.email}`}
                            className="inline-flex items-center gap-2 rounded-full bg-[#F6F3EC] px-6 py-3.5 text-sm font-semibold text-[#14130F] no-underline transition-transform duration-200 hover:-translate-y-0.5"
                        >
                            <Icon name="mail" size={17} /> {identity.email}
                        </a>
                        <div className="flex items-center gap-1.5">
                            {socials.slice(0, 4).map((s: { label: string; icon: string; href: string }) => (
                                <a
                                    key={s.label}
                                    href={s.href}
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    aria-label={s.label}
                                    className="flex h-11 w-11 items-center justify-center rounded-full border border-white/15 text-white/75 transition-all hover:-translate-y-0.5 hover:border-white/40 hover:text-white"
                                >
                                    <Icon name={s.icon as never} size={18} />
                                </a>
                            ))}
                        </div>
                    </div>

                    <div className="mt-2 flex items-center gap-2 font-mono text-[12.5px] text-white/50">
                        <Icon name="globe" size={14} /> {identity.location}
                    </div>
                </div>
            </div>
        </Reveal>
    </Section>
);

export default ContactCta;
