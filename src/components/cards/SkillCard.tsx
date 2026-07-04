import React from 'react';

interface SkillCardProps {
    icon: string;
    name: string;
    description: string;
    tags: string[];
}

const SkillCard: React.FC<SkillCardProps> = ({ icon, name, description, tags }) => (
    <div className="flex h-full flex-col gap-4 rounded-[22px] border border-line10 bg-paper p-7 transition-all duration-300 hover:-translate-y-1 hover:shadow-card">
        <div className="flex items-center gap-4">
            <div className="flex h-14 w-14 flex-none items-center justify-center overflow-hidden rounded-2xl border border-line08 bg-bg p-2.5">
                <img src={icon} alt={name} loading="lazy" className="max-h-full max-w-full object-contain" />
            </div>
            <h3 className="m-0 font-display text-[20px] font-semibold tracking-[-0.01em] text-ink">{name}</h3>
        </div>
        <p className="m-0 text-[14.5px] leading-[1.65] text-ink2">{description}</p>
        <div className="mt-auto flex flex-wrap gap-2 pt-1">
            {tags.map((t) => (
                <span key={t} className="chip">{t}</span>
            ))}
        </div>
    </div>
);

export default SkillCard;
