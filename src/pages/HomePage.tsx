import React from 'react';
import Seo from '../components/ui/Seo';
import Hero from '../components/sections/Hero';
import TechMarquee from '../components/sections/TechMarquee';
import Services from '../components/sections/Services';
import Languages from '../components/sections/Languages';
import FeaturedProjects from '../components/sections/FeaturedProjects';
import Articles from '../components/sections/Articles';
import ContactCta from '../components/sections/ContactCta';

const HomePage: React.FC = () => (
    <>
        <Seo path="/" />
        <Hero />
        <div className="bg-bg px-[clamp(16px,3vw,32px)] pb-[clamp(44px,7vw,72px)] pt-[clamp(44px,7vw,72px)]">
            <TechMarquee />
        </div>
        <Services />
        <Languages />
        <FeaturedProjects />
        <Articles />
        <ContactCta />
    </>
);

export default HomePage;
