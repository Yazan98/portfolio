import React from 'react';

interface FeatureCardProps {
    num: string;
    title: string;
    desc: string;
}

const FeatureCard: React.FC<FeatureCardProps> = ({ num, title, desc }) => (
    <div className="flex h-full flex-col gap-3 rounded-[20px] border border-line08 bg-bg p-7 transition-all duration-200 hover:-translate-y-1 hover:shadow-card">
        <span className="font-mono text-sm font-semibold text-acc">{num}</span>
        <h3 className="m-0 font-display text-[19px] font-semibold tracking-[-0.01em] text-ink">{title}</h3>
        <p className="m-0 text-sm leading-[1.65] text-ink2">{desc}</p>
    </div>
);

export default FeatureCard;
