import React from 'react';
import Seo from '../components/ui/Seo';
import Hero from '../components/sections/Hero';
import Services from '../components/sections/Services';
import Languages from '../components/sections/Languages';
import FeaturedProjects from '../components/sections/FeaturedProjects';
import Articles from '../components/sections/Articles';
import ContactCta from '../components/sections/ContactCta';

const HomePage: React.FC = () => (
    <>
        <Seo path="/" />
        <Hero />
        <Services />
        <Languages />
        <FeaturedProjects />
        <Articles />
        <ContactCta />
    </>
);

export default HomePage;
