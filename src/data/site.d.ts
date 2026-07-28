export interface SeoConfig {
  siteUrl: string;
  siteName: string;
  language: string;
  locale: string;
  defaultTitle: string;
  titleTemplate: string;
  description: string;
  image: string;
  imageAlt: string;
  imageType: string;
  imageWidth: number;
  imageHeight: number;
  twitter: string;
  sameAs: string[];
  knowsAbout: string[];
}

export const seo: SeoConfig;
