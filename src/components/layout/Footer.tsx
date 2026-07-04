import React from 'react';
import { Link } from 'react-router-dom';
import Icon from '../ui/Icon';
// @ts-ignore - data module authored in JS
import { identity, navLinks, socials, footer } from '../../data/site';

const Footer: React.FC = () => (
    <footer className="bg-panel px-[clamp(20px,5vw,48px)] py-14 text-[#F6F3EC]">
        <div className="mx-auto max-w-content">
            <div className="flex flex-col gap-10 border-b border-white/10 pb-10 md:flex-row md:items-start md:justify-between">
                <div className="max-w-sm">
                    <span className="font-display text-2xl font-bold tracking-[-0.02em]">
                        {identity.handle}<span className="text-acc">_</span>
                    </span>
                    <p className="mt-3 text-sm leading-relaxed text-white/60">{identity.tagline}</p>
                </div>

                <div className="flex flex-col gap-8 sm:flex-row sm:gap-16">
                    <nav className="flex flex-col gap-3">
                        <span className="font-mono text-[11px] uppercase tracking-[0.14em] text-white/40">Navigate</span>
                        {navLinks.map((l: { label: string; to: string }) => (
                            <Link key={l.to} to={l.to} className="text-sm text-white/75 no-underline transition-colors hover:text-white">
                                {l.label}
                            </Link>
                        ))}
                    </nav>

                    <div className="flex flex-col gap-3">
                        <span className="font-mono text-[11px] uppercase tracking-[0.14em] text-white/40">Elsewhere</span>
                        <div className="flex gap-2">
                            {socials.map((s: { label: string; icon: string; href: string }) => (
                                <a
                                    key={s.label}
                                    href={s.href}
                                    target={s.href.startsWith('http') ? '_blank' : undefined}
                                    rel="noopener noreferrer"
                                    aria-label={s.label}
                                    className="flex h-10 w-10 items-center justify-center rounded-full border border-white/15 text-white/75 transition-all hover:-translate-y-0.5 hover:border-white/40 hover:text-white"
                                >
                                    <Icon name={s.icon as never} size={18} />
                                </a>
                            ))}
                        </div>
                    </div>
                </div>
            </div>

            <div className="flex flex-col gap-2 pt-6 text-[13px] text-white/45 sm:flex-row sm:items-center sm:justify-between">
                <span>{footer.copyright}</span>
                <span>{footer.note}</span>
            </div>
        </div>
    </footer>
);

export default Footer;
