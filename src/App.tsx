import React, { Suspense, lazy } from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';

import { ThemeProvider } from './theme/ThemeProvider';
import Navbar from './components/layout/Navbar';
import Footer from './components/layout/Footer';
import ScrollToTop from './components/layout/ScrollToTop';
import ErrorBoundary from './components/ui/ErrorBoundary';

// Home is eager (landing route); the rest are split into their own chunks.
import HomePage from './pages/HomePage';
const ProjectsPage = lazy(() => import('./pages/ProjectsPage'));
const ProjectDetailsPage = lazy(() => import('./pages/ProjectDetailsPage'));
const SkillsPage = lazy(() => import('./pages/SkillsPage'));
const NotFoundPage = lazy(() => import('./pages/NotFoundPage'));

const App: React.FC = () => (
    <ThemeProvider>
        <BrowserRouter>
            <ScrollToTop />
            <div className="flex min-h-screen flex-col bg-bg text-ink">
                <Navbar />
                <main className="flex-grow">
                    <ErrorBoundary>
                        <Suspense fallback={<div className="min-h-[70vh]" aria-hidden="true" />}>
                            <Routes>
                                <Route path="/" element={<HomePage />} />
                                <Route path="/projects" element={<ProjectsPage />} />
                                <Route path="/project/:slug" element={<ProjectDetailsPage />} />
                                <Route path="/skills" element={<SkillsPage />} />
                                <Route path="*" element={<NotFoundPage />} />
                            </Routes>
                        </Suspense>
                    </ErrorBoundary>
                </main>
                <Footer />
            </div>
        </BrowserRouter>
    </ThemeProvider>
);

export default App;
