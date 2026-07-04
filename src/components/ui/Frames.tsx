import React from 'react';

interface FrameProps {
    src?: string;
    alt: string;
    className?: string;
    style?: React.CSSProperties;
    fit?: 'cover' | 'contain';
    eager?: boolean;
}

const Placeholder: React.FC<{ label: string }> = ({ label }) => (
    <div className="flex h-full w-full items-center justify-center bg-[#0C0B09] p-6 text-center font-mono text-xs text-white/40">
        {label}
    </div>
);

/** Wide device/banner frame — dark panel with an inset 21:9 image. */
export const BannerFrame: React.FC<FrameProps> = ({ src, alt, className = '', style, fit = 'cover', eager }) => (
    <div
        className={`relative rounded-[30px] bg-panel p-3 shadow-panel ${className}`}
        style={style}
    >
        <div className="aspect-[21/9] w-full overflow-hidden rounded-[20px] bg-[#0C0B09]">
            {src ? (
                <img
                    src={src}
                    alt={alt}
                    loading={eager ? 'eager' : 'lazy'}
                    className={`h-full w-full ${fit === 'cover' ? 'object-cover' : 'object-contain'}`}
                />
            ) : (
                <Placeholder label={alt} />
            )}
        </div>
    </div>
);

/** Phone frame — dark panel with an inset 9:19 image. */
export const PhoneMockup: React.FC<FrameProps> = ({ src, alt, className = '', style, fit = 'cover', eager }) => (
    <div
        className={`w-full max-w-[280px] rounded-[38px] bg-panel p-[11px] shadow-panel ${className}`}
        style={style}
    >
        <div className="aspect-[9/19] w-full overflow-hidden rounded-[29px] bg-[#0C0B09]">
            {src ? (
                <img
                    src={src}
                    alt={alt}
                    loading={eager ? 'eager' : 'lazy'}
                    className={`h-full w-full ${fit === 'cover' ? 'object-cover' : 'object-contain'}`}
                />
            ) : (
                <Placeholder label={alt} />
            )}
        </div>
    </div>
);
