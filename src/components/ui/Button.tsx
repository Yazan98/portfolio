import React from 'react';
import { Link } from 'react-router-dom';
import Icon, { IconName } from './Icon';

type Variant = 'solid' | 'outline' | 'ghost';
type Size = 'sm' | 'md' | 'lg';

interface BaseProps {
    children: React.ReactNode;
    variant?: Variant;
    size?: Size;
    icon?: IconName;
    iconRight?: IconName;
    className?: string;
}

interface LinkProps extends BaseProps {
    to: string;
    href?: never;
    onClick?: never;
}
interface AnchorProps extends BaseProps {
    href: string;
    to?: never;
    download?: boolean | string;
    target?: string;
    onClick?: never;
}
interface ButtonProps extends BaseProps {
    onClick: () => void;
    to?: never;
    href?: never;
    type?: 'button' | 'submit';
}

type Props = LinkProps | AnchorProps | ButtonProps;

const sizes: Record<Size, string> = {
    sm: 'px-4 py-2 text-[13px]',
    md: 'px-[18px] py-[10px] text-sm',
    lg: 'px-6 py-3.5 text-sm',
};

const variants: Record<Variant, string> = {
    solid: 'bg-btn-bg text-btn-fg hover:-translate-y-0.5 hover:shadow-panel',
    outline: 'border border-line25 text-ink hover:border-ink hover:bg-paper',
    ghost: 'text-ink2 hover:text-ink',
};

function classesFor(variant: Variant, size: Size, className: string) {
    return [
        'group inline-flex items-center justify-center gap-2 rounded-full font-semibold no-underline',
        'transition-all duration-200 will-change-transform cursor-pointer select-none',
        sizes[size],
        variants[variant],
        className,
    ].join(' ');
}

const Inner: React.FC<{ icon?: IconName; iconRight?: IconName; children: React.ReactNode; size: Size }> = ({ icon, iconRight, children, size }) => {
    const s = size === 'lg' ? 18 : 16;
    return (
        <>
            {icon && <Icon name={icon} size={s} />}
            <span>{children}</span>
            {iconRight && (
                <Icon
                    name={iconRight}
                    size={s}
                    className="transition-transform duration-200 group-hover:translate-x-0.5"
                />
            )}
        </>
    );
};

const Button: React.FC<Props> = (props) => {
    const { children, variant = 'solid', size = 'md', icon, iconRight, className = '' } = props;
    const cls = classesFor(variant, size, className);
    const inner = <Inner icon={icon} iconRight={iconRight} size={size}>{children}</Inner>;

    if ('to' in props && props.to) {
        return <Link to={props.to} className={cls}>{inner}</Link>;
    }
    if ('href' in props && props.href) {
        const external = props.href.startsWith('http');
        return (
            <a
                href={props.href}
                className={cls}
                download={(props as AnchorProps).download}
                target={(props as AnchorProps).target ?? (external ? '_blank' : undefined)}
                rel={external ? 'noopener noreferrer' : undefined}
            >
                {inner}
            </a>
        );
    }
    return (
        <button type={(props as ButtonProps).type ?? 'button'} onClick={(props as ButtonProps).onClick} className={cls}>
            {inner}
        </button>
    );
};

export default Button;
