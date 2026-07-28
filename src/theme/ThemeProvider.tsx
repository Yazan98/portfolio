import React, { createContext, useCallback, useContext, useEffect, useMemo, useState } from 'react';

type Theme = 'light' | 'dark';
type Accent = 'green' | 'blue' | 'cyan';

interface ThemeContextValue {
    theme: Theme;
    accent: Accent;
    toggleTheme: () => void;
    setTheme: (t: Theme) => void;
    setAccent: (a: Accent) => void;
}

const ThemeContext = createContext<ThemeContextValue | null>(null);

const THEME_KEY = 'yt-theme';
const ACCENT_KEY = 'yt-accent';

function readInitialTheme(): Theme {
    if (typeof document !== 'undefined') {
        const attr = document.documentElement.getAttribute('data-theme');
        if (attr === 'dark' || attr === 'light') return attr;
    }
    try {
        const saved = localStorage.getItem(THEME_KEY);
        if (saved === 'dark' || saved === 'light') return saved;
    } catch { /* ignore */ }
    return 'light';
}

function readInitialAccent(): Accent {
    try {
        const saved = localStorage.getItem(ACCENT_KEY) as Accent | null;
        if (saved === 'green' || saved === 'blue' || saved === 'cyan') return saved;
    } catch { /* ignore */ }
    return 'green';
}

export const ThemeProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
    const [theme, setThemeState] = useState<Theme>(readInitialTheme);
    const [accent, setAccentState] = useState<Accent>(readInitialAccent);

    useEffect(() => {
        document.documentElement.setAttribute('data-theme', theme);
        // Keep the browser-chrome color in sync with the *applied* theme
        // (not the OS preference), so the address bar matches the page.
        const meta = document.querySelector('meta[name="theme-color"]');
        if (meta) meta.setAttribute('content', theme === 'dark' ? '#0F0E0A' : '#F6F3EC');
        try { localStorage.setItem(THEME_KEY, theme); } catch { /* ignore */ }
    }, [theme]);

    useEffect(() => {
        // Green is the default token value; only set the attribute for variants.
        if (accent === 'green') {
            document.documentElement.removeAttribute('data-accent');
        } else {
            document.documentElement.setAttribute('data-accent', accent);
        }
        try { localStorage.setItem(ACCENT_KEY, accent); } catch { /* ignore */ }
    }, [accent]);

    const toggleTheme = useCallback(() => {
        setThemeState((t) => (t === 'dark' ? 'light' : 'dark'));
    }, []);

    const value = useMemo<ThemeContextValue>(
        () => ({ theme, accent, toggleTheme, setTheme: setThemeState, setAccent: setAccentState }),
        [theme, accent, toggleTheme],
    );

    return <ThemeContext.Provider value={value}>{children}</ThemeContext.Provider>;
};

export function useTheme(): ThemeContextValue {
    const ctx = useContext(ThemeContext);
    if (!ctx) throw new Error('useTheme must be used within a ThemeProvider');
    return ctx;
}
