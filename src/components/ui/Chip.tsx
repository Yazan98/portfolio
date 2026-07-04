import React from 'react';

interface ChipProps {
    children: React.ReactNode;
    /** Accent-outlined variant (used for badges/eyebrows) */
    accent?: boolean;
    className?: string;
}

export const Chip: React.FC<ChipProps> = ({ children, accent = false, className = '' }) => (
    <span
        className={
            accent
                ? `inline-flex items-center gap-2 rounded-full border border-line25 px-3.5 py-1.5 font-mono text-[11.5px] font-medium uppercase tracking-[0.1em] text-acc ${className}`
                : `chip ${className}`
        }
    >
        {children}
    </span>
);

interface TagListProps {
    tags: string[];
    max?: number;
    className?: string;
}

/** Renders a wrapped list of chip tags, with an optional "+N" overflow chip. */
export const TagList: React.FC<TagListProps> = ({ tags, max, className = '' }) => {
    const shown = max ? tags.slice(0, max) : tags;
    const rest = max && tags.length > max ? tags.length - max : 0;
    return (
        <div className={`flex flex-wrap gap-2 ${className}`}>
            {shown.map((t) => (
                <span key={t} className="chip">{t}</span>
            ))}
            {rest > 0 && <span className="chip opacity-60">+{rest}</span>}
        </div>
    );
};

export default Chip;
