import React from 'react';

export type IconName =
    | 'logo'
    | 'github'
    | 'linkedin'
    | 'x'
    | 'medium'
    | 'mail'
    | 'globe'
    | 'arrow-right'
    | 'arrow-left'
    | 'arrow-up-right'
    | 'download'
    | 'sun'
    | 'moon'
    | 'menu'
    | 'close'
    | 'external'
    | 'play-store'
    | 'apple'
    | 'chevron-right';

interface IconProps extends React.SVGProps<SVGSVGElement> {
    name: IconName;
    size?: number;
}

// Stroke-based UI glyphs (lucide-style) draw with currentColor.
const stroke = (children: React.ReactNode) => ({
    fill: 'none' as const,
    stroke: 'currentColor',
    strokeWidth: 1.75,
    strokeLinecap: 'round' as const,
    strokeLinejoin: 'round' as const,
    children,
});

// Filled brand glyphs.
const fill = (children: React.ReactNode) => ({
    fill: 'currentColor',
    stroke: 'none' as const,
    children,
});

const ICONS: Record<IconName, { fill?: string; stroke?: string; strokeWidth?: number; strokeLinecap?: 'round'; strokeLinejoin?: 'round'; children: React.ReactNode }> = {
    // The design's phone "</>" mark - sits on the dark logo tile, so it keeps
    // its own light + accent colors regardless of theme.
    logo: {
        fill: 'none',
        children: (
            <>
                <rect x="7" y="2.6" width="10" height="18.8" rx="2.8" stroke="#F6F3EC" strokeWidth="1.5" />
                <path d="M10.4 9.7 L8.7 12 L10.4 14.3" stroke="var(--acc)" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round" />
                <path d="M13.6 9.7 L15.3 12 L13.6 14.3" stroke="var(--acc)" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round" />
                <path d="M12.9 8.9 L11.1 15.1" stroke="var(--acc)" strokeWidth="1.6" strokeLinecap="round" />
                <path d="M10.6 18.4 L13.4 18.4" stroke="rgba(246,243,236,.55)" strokeWidth="1.5" strokeLinecap="round" />
            </>
        ),
    },
    github: fill(<path d="M12 .5C5.7.5.5 5.7.5 12c0 5.1 3.3 9.4 7.9 10.9.6.1.8-.2.8-.6v-2c-3.2.7-3.9-1.5-3.9-1.5-.5-1.3-1.3-1.7-1.3-1.7-1-.7.1-.7.1-.7 1.2.1 1.8 1.2 1.8 1.2 1 1.8 2.7 1.3 3.4 1 .1-.8.4-1.3.7-1.6-2.6-.3-5.3-1.3-5.3-5.8 0-1.3.5-2.3 1.2-3.1-.1-.3-.5-1.5.1-3.1 0 0 1-.3 3.3 1.2a11.5 11.5 0 0 1 6 0C17.3 4.9 18.3 5.2 18.3 5.2c.6 1.6.2 2.8.1 3.1.8.8 1.2 1.8 1.2 3.1 0 4.5-2.7 5.5-5.3 5.8.4.4.8 1.1.8 2.2v3.3c0 .4.2.7.8.6 4.6-1.5 7.9-5.8 7.9-10.9C23.5 5.7 18.3.5 12 .5Z" />),
    linkedin: fill(<path d="M20.45 20.45h-3.56v-5.57c0-1.33-.02-3.04-1.85-3.04-1.85 0-2.13 1.45-2.13 2.94v5.67H9.35V9h3.42v1.56h.05c.48-.9 1.64-1.85 3.37-1.85 3.6 0 4.27 2.37 4.27 5.46v6.28ZM5.34 7.43a2.06 2.06 0 1 1 0-4.13 2.06 2.06 0 0 1 0 4.13ZM7.12 20.45H3.55V9h3.57v11.45ZM22.23 0H1.77C.79 0 0 .77 0 1.73v20.54C0 23.22.79 24 1.77 24h20.46c.98 0 1.77-.78 1.77-1.73V1.73C24 .77 23.21 0 22.23 0Z" />),
    x: fill(<path d="M18.9 1.15h3.68l-8.04 9.19L24 22.85h-7.4l-5.8-7.58-6.64 7.58H.48l8.6-9.83L0 1.15h7.59l5.24 6.93 6.07-6.93Zm-1.29 19.5h2.04L6.48 3.24H4.29L17.61 20.65Z" />),
    medium: fill(<path d="M13.54 12a6.8 6.8 0 1 1-13.6 0 6.8 6.8 0 0 1 13.6 0Zm7.42 0c0 3.54-1.52 6.42-3.4 6.42-1.87 0-3.39-2.88-3.39-6.42s1.52-6.42 3.4-6.42S20.96 8.46 20.96 12ZM24 12c0 3.17-.53 5.75-1.19 5.75-.66 0-1.19-2.58-1.19-5.75s.53-5.75 1.19-5.75C23.47 6.25 24 8.83 24 12Z" />),
    mail: stroke(<><rect x="3" y="5" width="18" height="14" rx="2.5" /><path d="m4 7 8 6 8-6" /></>),
    globe: stroke(<><circle cx="12" cy="12" r="9" /><path d="M3 12h18M12 3c2.5 2.5 3.8 5.8 3.8 9S14.5 18.5 12 21c-2.5-2.5-3.8-5.8-3.8-9S9.5 5.5 12 3Z" /></>),
    'arrow-right': stroke(<><path d="M5 12h14M13 6l6 6-6 6" /></>),
    'arrow-left': stroke(<><path d="M19 12H5M11 6l-6 6 6 6" /></>),
    'arrow-up-right': stroke(<><path d="M7 17 17 7M8 7h9v9" /></>),
    download: stroke(<><path d="M12 3v12M7 11l5 5 5-5M5 20h14" /></>),
    sun: stroke(<><circle cx="12" cy="12" r="4.2" /><path d="M12 2v2.5M12 19.5V22M4.5 4.5l1.8 1.8M17.7 17.7l1.8 1.8M2 12h2.5M19.5 12H22M4.5 19.5l1.8-1.8M17.7 6.3l1.8-1.8" /></>),
    moon: stroke(<path d="M20 14.5A8.5 8.5 0 1 1 9.5 4a6.6 6.6 0 0 0 10.5 10.5Z" />),
    menu: stroke(<><path d="M4 7h16M4 12h16M4 17h16" /></>),
    close: stroke(<><path d="M6 6l12 12M18 6 6 18" /></>),
    external: stroke(<><path d="M14 4h6v6M20 4l-9 9M18 14v5a1 1 0 0 1-1 1H5a1 1 0 0 1-1-1V7a1 1 0 0 1 1-1h5" /></>),
    'play-store': fill(<path d="M3.6 1.9c-.3.2-.5.6-.5 1.1v18c0 .5.2.9.5 1.1l10.3-10.1L3.6 1.9Zm11.7 8.2 2.9-2.9-11-6.2 8.1 9.1Zm0 3.8-8.1 9.1 11-6.2-2.9-2.9Zm5.9-6-2.3-1.3-3.1 3.1 3.1 3.1 2.3-1.3c.9-.5.9-2 0-2.5l.1-.1Z" />),
    apple: fill(<path d="M17.05 12.54c-.03-2.6 2.12-3.85 2.22-3.91-1.21-1.77-3.1-2.01-3.77-2.04-1.6-.16-3.13.94-3.94.94-.81 0-2.07-.92-3.4-.9-1.75.03-3.36 1.02-4.26 2.58-1.82 3.16-.47 7.83 1.3 10.4.87 1.26 1.9 2.66 3.25 2.61 1.31-.05 1.8-.84 3.38-.84 1.58 0 2.02.84 3.4.82 1.4-.03 2.29-1.28 3.15-2.54.99-1.46 1.4-2.87 1.42-2.94-.03-.01-2.72-1.04-2.75-4.13-.03-.01 0-.34.02-.51ZM14.9 4.9c.72-.87 1.2-2.08 1.07-3.29-1.03.04-2.29.69-3.03 1.56-.66.77-1.24 2-1.09 3.18 1.15.09 2.33-.58 3.05-1.45Z" />),
    'chevron-right': stroke(<path d="m9 6 6 6-6 6" />),
};

const Icon: React.FC<IconProps> = ({ name, size = 20, ...rest }) => {
    const def = ICONS[name];
    const { children, ...attrs } = def;
    return (
        <svg
            width={size}
            height={size}
            viewBox="0 0 24 24"
            aria-hidden="true"
            focusable="false"
            {...attrs}
            {...rest}
        >
            {children}
        </svg>
    );
};

export default Icon;
