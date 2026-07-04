import React from 'react';

interface ServiceCardProps {
    num: string;
    tag: string;
    title: string;
    description: string;
}

const ServiceCard: React.FC<ServiceCardProps> = ({ num, tag, title, description }) => (
    <div className="group flex h-full flex-col gap-4 rounded-[22px] border border-line10 bg-paper p-8 transition-all duration-300 hover:-translate-y-1 hover:shadow-card">
        <div className="flex items-center justify-between">
            <span className="font-mono text-[13px] font-semibold text-acc">{num}</span>
            <span className="chip">{tag}</span>
        </div>
        <h3 className="m-0 font-display text-[22px] font-semibold tracking-[-0.01em] text-ink">{title}</h3>
        <p className="m-0 text-[14.5px] leading-[1.65] text-ink2">{description}</p>
    </div>
);

export default ServiceCard;
