import React, { useEffect, useState } from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { Helmet } from 'react-helmet-async';

import HomePage from './pages/HomePage';
import ProjectsPage from './pages/ProjectsPage';
import ProjectDetailsPage from './pages/ProjectDetailsPage';
import SkillsPage from './pages/SkillsPage';
import Navbar from './components/layout/Navbar';
import Footer from './components/layout/Footer';
import ScrollToTop from './components/layout/ScrollToTop';

function App() {
    useEffect(() => {
        // Enforce pure Dark Mode layout
        document.documentElement.classList.add('dark');
    }, []);

    return (
        <BrowserRouter>
            <ScrollToTop />

            <Helmet>
                {/* Maximum SEO Limits for CSR */}
                <title>Yazan Tarifi - Senior Software Engineer & Mobile Developer</title>
                <meta name="description" content="Yazan Tarifi's Premium Portfolio Site. Exploring advanced Android development, highly scalable backend systems, and beautiful frontend UI experiences." />
                <meta name="keywords" content="Yazan Tarifi, Software Engineer, Mobile Developer, Android Developer, Backend Developer, NestJS, Kotlin Config, iOS Developer, React Portfolio, Next.js Expert" />
                <meta name="author" content="Yazan Tarifi" />

                {/* Open Graph / Social Media Metatags */}
                <meta property="og:type" content="website" />
                <meta property="og:url" content="https://yazantarifi.com/" />
                <meta property="og:title" content="Yazan Tarifi - Software Engineer Portfolio" />
                <meta property="og:description" content="Explore Yazan's code-minded approach to building digital experiences." />
                <meta property="og:image" content="https://yazantarifi.com/banner.png" />

                {/* Twitter Card */}
                <meta name="twitter:card" content="summary_large_image" />
                <meta name="twitter:title" content="Yazan Tarifi - Senior Software Engineer" />
                <meta name="twitter:description" content="Premium portfolio showcasing enterprise-grade architecture and beautiful interfaces." />
                <meta name="twitter:image" content="https://yazantarifi.com/banner.png" />

                {/* JSON-LD Structured Data for Rich Snippets */}
                <script type="application/ld+json">
                    {`
            {
              "@context": "https://schema.org",
              "@type": "Person",
              "name": "Yazan Tarifi",
              "jobTitle": "Senior Software Engineer",
              "url": "https://yazantarifi.com/",
              "sameAs": [
                "https://github.com/Yazan98",
                "https://linkedin.com/in/yazantarifi"
              ],
              "knowsAbout": ["Android Development", "React", "Kotlin", "Swift", "Nest.js", "Backend Architecture"]
            }
          `}
                </script>
            </Helmet>

            <div className="flex flex-col min-h-screen bg-white dark:bg-dark-300 text-gray-900 dark:text-gray-100 transition-colors duration-300">
                <Navbar />
                <main className="flex-grow">
                    <Routes>
                        <Route path="/" element={<HomePage />} />
                        <Route path="/projects" element={<ProjectsPage />} />
                        <Route path="/project/:id" element={<ProjectDetailsPage />} />
                        <Route path="/skills" element={<SkillsPage />} />
                    </Routes>
                </main>
                <Footer />
            </div>
        </BrowserRouter>
    );
}

export default App;
