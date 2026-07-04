import { useEffect } from 'react';
// @ts-ignore - data module authored in JS
import { seo } from '../../data/site';

interface SeoProps {
    title?: string;
    description?: string;
    /** Path only, e.g. "/projects" — combined with the site URL for canonical/OG */
    path?: string;
    image?: string;
    /** When true, use `title` verbatim instead of the "%s · Yazan Tarifi" template */
    exactTitle?: boolean;
}

/**
 * Dependency-free per-route head management. Each tag is found-or-created once
 * (by a stable selector) and updated in place, so navigation never appends
 * duplicate canonicals/OG tags. Static defaults live in index.html (crawler +
 * no-JS visible) and are updated here per route.
 */
function upsert(tag: 'meta' | 'link', attr: string, key: string, valueAttr: 'content' | 'href', value: string) {
    let el = document.head.querySelector<HTMLElement>(`${tag}[${attr}="${key}"]`);
    if (!el) {
        el = document.createElement(tag);
        el.setAttribute(attr, key);
        document.head.appendChild(el);
    }
    el.setAttribute(valueAttr, value);
}

const Seo: React.FC<SeoProps> = ({ title, description, path = '', image, exactTitle }) => {
    useEffect(() => {
        const fullTitle = title
            ? exactTitle
                ? title
                : seo.titleTemplate.replace('%s', title)
            : seo.defaultTitle;
        const desc = description || seo.description;
        const url = `${seo.siteUrl}${path}`;
        const img = image || seo.image;

        document.title = fullTitle;
        upsert('meta', 'name', 'description', 'content', desc);
        upsert('link', 'rel', 'canonical', 'href', url);

        upsert('meta', 'property', 'og:url', 'content', url);
        upsert('meta', 'property', 'og:title', 'content', fullTitle);
        upsert('meta', 'property', 'og:description', 'content', desc);
        upsert('meta', 'property', 'og:image', 'content', img);

        upsert('meta', 'name', 'twitter:title', 'content', fullTitle);
        upsert('meta', 'name', 'twitter:description', 'content', desc);
        upsert('meta', 'name', 'twitter:image', 'content', img);
    }, [title, description, path, image, exactTitle]);

    return null;
};

export default Seo;
