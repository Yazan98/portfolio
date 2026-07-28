import { useEffect } from 'react';
import { seo } from '../../data/site';

type OpenGraphType = 'website' | 'profile' | 'article';
type SchemaType = 'ProfilePage' | 'WebPage' | 'CollectionPage' | 'AboutPage' | 'CreativeWork';

interface SeoProps {
    title?: string;
    description?: string;
    path?: string;
    image?: string;
    imageAlt?: string;
    exactTitle?: boolean;
    noIndex?: boolean;
    ogType?: OpenGraphType;
    schemaType?: SchemaType;
    keywords?: string[];
    dateCreated?: string;
}

function upsertMeta(attribute: 'name' | 'property', key: string, value: string) {
    let element = document.head.querySelector<HTMLMetaElement>(`meta[${attribute}="${key}"]`);
    if (!element) {
        element = document.createElement('meta');
        element.setAttribute(attribute, key);
        document.head.appendChild(element);
    }
    element.content = value;
}

function removeMeta(attribute: 'name' | 'property', key: string) {
    document.head.querySelector(`meta[${attribute}="${key}"]`)?.remove();
}

function upsertLink(rel: string, href: string, attributes: Record<string, string> = {}) {
    const attributeSelector = Object.entries(attributes)
        .map(([key, value]) => `[${key}="${value}"]`)
        .join('');
    let element = document.head.querySelector<HTMLLinkElement>(`link[rel="${rel}"]${attributeSelector}`);
    if (!element) {
        element = document.createElement('link');
        element.rel = rel;
        Object.entries(attributes).forEach(([key, value]) => element?.setAttribute(key, value));
        document.head.appendChild(element);
    }
    element.href = href;
}

function absoluteUrl(value: string) {
    return new URL(value, `${seo.siteUrl}/`).toString();
}

function createStructuredData(
    url: string,
    title: string,
    description: string,
    image: string,
    imageAlt: string,
    schemaType: SchemaType,
    keywords?: string[],
    dateCreated?: string,
) {
    const websiteId = `${seo.siteUrl}/#website`;
    const personId = `${seo.siteUrl}/#person`;
    const imageId = `${url}#primaryimage`;
    const page: Record<string, unknown> = {
        '@type': schemaType,
        '@id': `${url}#webpage`,
        url,
        name: title,
        description,
        isPartOf: { '@id': websiteId },
        about: { '@id': personId },
        primaryImageOfPage: { '@id': imageId },
        inLanguage: seo.language,
    };

    if (schemaType === 'ProfilePage') {
        page.mainEntity = { '@id': personId };
        page.dateModified = '2026-07-29';
    }

    if (schemaType === 'CreativeWork') {
        page.creator = { '@id': personId };
        if (keywords?.length) page.keywords = keywords;
        if (dateCreated) page.dateCreated = dateCreated;
    }

    return {
        '@context': 'https://schema.org',
        '@graph': [
            {
                '@type': 'WebSite',
                '@id': websiteId,
                url: `${seo.siteUrl}/`,
                name: seo.siteName,
                alternateName: 'Yazan Tarifi Portfolio',
                description: seo.description,
                inLanguage: seo.language,
                publisher: { '@id': personId },
            },
            {
                '@type': 'Person',
                '@id': personId,
                name: 'Yazan Tarifi',
                alternateName: ['Yazan98', 'yazan.tarifi'],
                url: `${seo.siteUrl}/`,
                jobTitle: 'Senior Mobile Software Engineer',
                description:
                    'Mobile software engineer specializing in Android, Kotlin Multiplatform, Compose Multiplatform, iOS, developer tooling, and scalable backend systems.',
                homeLocation: {
                    '@type': 'Place',
                    name: 'Amman, Jordan',
                },
                sameAs: seo.sameAs,
                knowsAbout: seo.knowsAbout,
            },
            page,
            {
                '@type': 'ImageObject',
                '@id': imageId,
                url: image,
                contentUrl: image,
                caption: imageAlt,
                representativeOfPage: true,
            },
        ],
    };
}

const Seo: React.FC<SeoProps> = ({
    title,
    description,
    path = '/',
    image,
    imageAlt,
    exactTitle,
    noIndex = false,
    ogType,
    schemaType,
    keywords,
    dateCreated,
}) => {
    useEffect(() => {
        const normalizedPath = path.startsWith('/') ? path : `/${path}`;
        const fullTitle = title
            ? exactTitle
                ? title
                : seo.titleTemplate.replace('%s', title)
            : seo.defaultTitle;
        const pageDescription = description || seo.description;
        const url = absoluteUrl(normalizedPath);
        const pageImage = absoluteUrl(image || seo.image);
        const pageImageAlt = imageAlt || seo.imageAlt;
        const pageOgType = ogType || (normalizedPath === '/' ? 'profile' : 'website');
        const pageSchemaType = schemaType || (normalizedPath === '/' ? 'ProfilePage' : 'WebPage');
        const robots = noIndex
            ? 'noindex, nofollow, noarchive'
            : 'index, follow, max-image-preview:large, max-snippet:-1, max-video-preview:-1';

        document.documentElement.lang = seo.language;
        document.documentElement.dir = 'ltr';
        document.title = fullTitle;

        upsertMeta('name', 'description', pageDescription);
        upsertMeta('name', 'robots', robots);
        upsertMeta('name', 'googlebot', robots);
        upsertMeta('name', 'bingbot', robots);

        upsertLink('canonical', url);
        upsertLink('alternate', url, { hreflang: seo.language });
        upsertLink('alternate', url, { hreflang: 'x-default' });

        upsertMeta('property', 'og:type', pageOgType);
        upsertMeta('property', 'og:url', url);
        upsertMeta('property', 'og:site_name', seo.siteName);
        upsertMeta('property', 'og:locale', seo.locale);
        upsertMeta('property', 'og:title', fullTitle);
        upsertMeta('property', 'og:description', pageDescription);
        upsertMeta('property', 'og:image', pageImage);
        upsertMeta('property', 'og:image:secure_url', pageImage);
        upsertMeta('property', 'og:image:alt', pageImageAlt);

        if (pageImage === seo.image) {
            upsertMeta('property', 'og:image:type', seo.imageType);
            upsertMeta('property', 'og:image:width', String(seo.imageWidth));
            upsertMeta('property', 'og:image:height', String(seo.imageHeight));
        } else {
            removeMeta('property', 'og:image:type');
            removeMeta('property', 'og:image:width');
            removeMeta('property', 'og:image:height');
        }

        if (pageOgType === 'profile') {
            upsertMeta('property', 'profile:first_name', 'Yazan');
            upsertMeta('property', 'profile:last_name', 'Tarifi');
            upsertMeta('property', 'profile:username', 'YazanT98');
        } else {
            removeMeta('property', 'profile:first_name');
            removeMeta('property', 'profile:last_name');
            removeMeta('property', 'profile:username');
        }

        upsertMeta('name', 'twitter:card', 'summary_large_image');
        upsertMeta('name', 'twitter:site', seo.twitter);
        upsertMeta('name', 'twitter:creator', seo.twitter);
        upsertMeta('name', 'twitter:domain', new URL(seo.siteUrl).hostname);
        upsertMeta('name', 'twitter:url', url);
        upsertMeta('name', 'twitter:title', fullTitle);
        upsertMeta('name', 'twitter:description', pageDescription);
        upsertMeta('name', 'twitter:image', pageImage);
        upsertMeta('name', 'twitter:image:alt', pageImageAlt);

        const existingStructuredData = document.getElementById('seo-structured-data');
        if (noIndex) {
            existingStructuredData?.remove();
            return;
        }

        const structuredData =
            existingStructuredData ||
            Object.assign(document.createElement('script'), {
                id: 'seo-structured-data',
                type: 'application/ld+json',
            });
        structuredData.textContent = JSON.stringify(
            createStructuredData(
                url,
                fullTitle,
                pageDescription,
                pageImage,
                pageImageAlt,
                pageSchemaType,
                keywords,
                dateCreated,
            ),
        );
        if (!existingStructuredData) document.head.appendChild(structuredData);
    }, [
        title,
        description,
        path,
        image,
        imageAlt,
        exactTitle,
        noIndex,
        ogType,
        schemaType,
        keywords,
        dateCreated,
    ]);

    return null;
};

export default Seo;
