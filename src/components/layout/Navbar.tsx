import React, { useEffect, useState } from 'react';
import { NavLink, Link } from 'react-router-dom';
import Icon from '../ui/Icon';
import { useTheme } from '../../theme/ThemeProvider';
// @ts-ignore - data module authored in JS
import { identity, navLinks } from '../../data/site';

const Logo: React.FC = () => (
    <Link to="/" className="flex items-center gap-[11px] no-underline text-ink" aria-label={`${identity.name} — home`}>
        <span className="flex h-[38px] w-[38px] items-center justify-center rounded-xl bg-[#14130F] shadow-[inset_0_0_0_1.5px_rgba(246,243,236,0.08)] transition-transform duration-300 hover:-rotate-6 hover:scale-105">
            <Icon name="logo" size={22} />
        </span>
        <span className="flex flex-col leading-[1.15]">
            <span className="font-display text-[16px] font-bold tracking-[-0.02em]">
                {identity.handle}
                <span className="text-acc" style={{ animation: 'blink 1.2s step-end infinite' }}>_</span>
            </span>
            <span className="hidden min-[360px]:block font-mono text-[10px] font-medium uppercase tracking-[0.14em] text-ink2">
                {identity.role}
            </span>
        </span>
    </Link>
);

const ThemeToggle: React.FC = () => {
    const { theme, toggleTheme } = useTheme();
    return (
        <button
            type="button"
            onClick={toggleTheme}
            aria-label={`Switch to ${theme === 'dark' ? 'light' : 'dark'} mode`}
            className="flex h-[38px] w-[38px] items-center justify-center rounded-full border border-line25 bg-transparent text-ink transition-all duration-200 hover:-translate-y-0.5 hover:border-ink"
        >
            <Icon name={theme === 'dark' ? 'sun' : 'moon'} size={17} />
        </button>
    );
};

const Navbar: React.FC = () => {
    const [open, setOpen] = useState(false);

    // Lock body scroll while the mobile menu is open.
    useEffect(() => {
        document.body.style.overflow = open ? 'hidden' : '';
        return () => { document.body.style.overflow = ''; };
    }, [open]);

    const linkBase = 'text-[14.5px] font-medium no-underline transition-colors';

    return (
        <nav className="fixed inset-x-0 top-0 z-50 border-b border-line08 bg-[var(--navbg)] backdrop-blur-[14px]">
            <div className="mx-auto flex max-w-content flex-wrap items-center justify-between gap-y-2.5 px-[clamp(16px,4vw,48px)] py-3.5">
                <Logo />

                {/* Desktop nav */}
                <div className="hidden items-center gap-7 md:flex">
                    {navLinks.map((l: { label: string; to: string }) => (
                        <NavLink
                            key={l.to}
                            to={l.to}
                            end={l.to === '/'}
                            className={({ isActive }) =>
                                `${linkBase} ${isActive ? 'border-b-2 border-acc pb-0.5 text-ink' : 'text-ink2 hover:text-ink'}`
                            }
                        >
                            {l.label}
                        </NavLink>
                    ))}
                    <ThemeToggle />
                    <a
                        href={identity.resume}
                        download
                        className="flex items-center gap-2 rounded-full bg-btn-bg px-[18px] py-[9px] text-[13.5px] font-semibold text-btn-fg no-underline transition-transform duration-200 hover:-translate-y-0.5"
                    >
                        Resume <Icon name="download" size={15} />
                    </a>
                </div>

                {/* Mobile controls */}
                <div className="flex items-center gap-2.5 md:hidden">
                    <ThemeToggle />
                    <button
                        type="button"
                        onClick={() => setOpen((v) => !v)}
                        aria-label={open ? 'Close menu' : 'Open menu'}
                        aria-expanded={open}
                        className="flex h-[38px] w-[38px] items-center justify-center rounded-full border border-line25 text-ink"
                    >
                        <Icon name={open ? 'close' : 'menu'} size={18} />
                    </button>
                </div>
            </div>

            {/* Mobile dropdown */}
            {open && (
                <div className="border-t border-line08 bg-[var(--navbg)] backdrop-blur-[14px] md:hidden">
                    <div className="mx-auto flex max-w-content flex-col gap-1 px-[clamp(16px,4vw,48px)] py-4">
                        {navLinks.map((l: { label: string; to: string }) => (
                            <NavLink
                                key={l.to}
                                to={l.to}
                                end={l.to === '/'}
                                onClick={() => setOpen(false)}
                                className={({ isActive }) =>
                                    `rounded-xl px-4 py-3 text-[15px] font-medium no-underline transition-colors ${isActive ? 'bg-chip text-ink' : 'text-ink2 hover:bg-chip hover:text-ink'}`
                                }
                            >
                                {l.label}
                            </NavLink>
                        ))}
                        <a
                            href={identity.resume}
                            download
                            onClick={() => setOpen(false)}
                            className="mt-1 flex items-center justify-center gap-2 rounded-full bg-btn-bg px-5 py-3 text-sm font-semibold text-btn-fg no-underline"
                        >
                            Resume <Icon name="download" size={15} />
                        </a>
                    </div>
                </div>
            )}
        </nav>
    );
};

export default Navbar;
