import React from 'react';
import Seo from '../components/ui/Seo';
import Section from '../components/ui/Section';
import Button from '../components/ui/Button';

const NotFoundPage: React.FC = () => (
    <>
        <Seo title="Page not found" description="The requested page could not be found." path="/404" noIndex />
        <Section padding="py-[clamp(140px,24vh,240px)]">
            <div className="flex flex-col items-center gap-5 text-center">
                <span className="font-mono text-sm font-semibold tracking-[0.12em] text-acc">404</span>
                <h1 className="m-0 font-display text-[clamp(44px,7vw,84px)] font-bold tracking-[-0.04em] text-ink">
                    Lost in space<span className="text-acc">.</span>
                </h1>
                <p className="m-0 max-w-md text-[17px] leading-relaxed text-ink3">
                    The page you’re looking for doesn’t exist or may have moved. Let’s get you back home.
                </p>
                <div className="mt-2 flex flex-wrap justify-center gap-3">
                    <Button to="/" iconRight="arrow-right">Back home</Button>
                    <Button to="/projects" variant="outline">View projects</Button>
                </div>
            </div>
        </Section>
    </>
);

export default NotFoundPage;
