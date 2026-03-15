import React, { useRef } from 'react';
import { ChevronLeft, ChevronRight, AppWindow, ArrowRight } from 'lucide-react';
import { Link } from 'react-router-dom';

// @ts-ignore
import getFeaturedProjectsList from '../../info/FeaturedProjectsList';

const FeaturedProjects: React.FC = () => {
    const projectsScrollRef = useRef<HTMLDivElement>(null);
    const featuredProjects = getFeaturedProjectsList();

    const scrollProjects = (direction: 'left' | 'right') => {
        if (projectsScrollRef.current) {
            const { clientWidth } = projectsScrollRef.current;
            projectsScrollRef.current.scrollBy({ left: direction === 'left' ? -clientWidth : clientWidth, behavior: 'smooth' });
        }
    };

    return (
        <section className="content-section w-full pt-16 pb-0 mb-0 bg-dark-200 border-t border-gray-800/40">
            <div className="w-full px-6 md:px-12 max-w-[1600px] mx-auto flex items-center justify-between mb-8">
                <h3 className="text-3xl font-display font-bold text-white flex items-center gap-3">
                    <AppWindow className="text-primary-500" /> Featured Projects
                </h3>
                <div className="flex gap-4">
                    <button onClick={() => scrollProjects('left')} className="p-4 rounded-full bg-dark-300 border border-gray-700 hover:bg-dark-100 hover:border-primary-500 transition-colors text-white z-20 hover:scale-110 transform flex items-center justify-center">
                        <ChevronLeft size={24} />
                    </button>
                    <button onClick={() => scrollProjects('right')} className="p-4 rounded-full bg-dark-300 border border-gray-700 hover:bg-dark-100 hover:border-primary-500 transition-colors text-white z-20 hover:scale-110 transform flex items-center justify-center">
                        <ChevronRight size={24} />
                    </button>
                </div>
            </div>

            <div
                ref={projectsScrollRef}
                className="flex overflow-x-auto snap-x snap-mandatory hide-scrollbar pb-12 mb-[-1px]"
                style={{ scrollbarWidth: 'none', msOverflowStyle: 'none' }}
            >
                {featuredProjects.map((project: any) => (
                    <div key={project.id} className="min-w-full w-full snap-center flex-shrink-0 px-6 md:px-12 max-w-[1600px] mx-auto">
                        <div className="relative min-h-[75vh] w-full flex flex-col md:flex-row bg-[#0B0B0E] rounded-[2rem] overflow-hidden shadow-[0_20px_60px_-15px_rgba(0,0,0,0.7)] border border-gray-800/60 group">

                            {/* Left Side: Content & Stats */}
                            <div className="w-full md:w-1/2 p-6 sm:p-8 md:p-12 lg:p-16 flex flex-col justify-center z-10 bg-dark-200/95 backdrop-blur-3xl relative">
                                {/* Subtle Background Accent */}
                                <div className="absolute top-0 right-0 w-64 h-64 bg-primary-900/10 rounded-full blur-[80px] pointer-events-none"></div>

                                <span className="inline-block self-start px-5 py-2 rounded-full bg-primary-500/10 text-primary-400 border border-primary-500/20 text-xs font-bold uppercase tracking-[0.15em] mb-6">
                                    {project.type === 'ANDROID_APP' ? 'Android Native' : project.type.replace('_', ' ')}
                                </span>

                                <h4 className="text-3xl sm:text-4xl lg:text-6xl font-display font-extrabold text-white mb-4 sm:mb-6 leading-tight tracking-tight drop-shadow-sm">
                                    {project.name}
                                </h4>

                                {/* Tech Stack Pills */}
                                <div className="flex flex-wrap gap-2 mb-8">
                                    {project.tags?.slice(0, 4).map((tag: string) => (
                                        <span key={tag} className="px-3 py-1.5 bg-dark-300 border border-gray-800 rounded-md text-xs font-medium text-gray-300 shadow-sm">
                                            {tag}
                                        </span>
                                    ))}
                                    {project.tags && project.tags.length > 4 && (
                                        <span className="px-3 py-1.5 bg-dark-300/50 border border-gray-800/50 rounded-md text-xs font-medium text-gray-500">
                                            +{project.tags.length - 4} more
                                        </span>
                                    )}
                                </div>

                                <p className="text-base sm:text-lg lg:text-xl text-gray-400 mb-6 sm:mb-10 line-clamp-4 sm:line-clamp-3 leading-relaxed font-normal">
                                    {project.description}
                                </p>

                                {/* Stats Row */}
                                <div className="flex flex-wrap gap-4 mb-10">
                                    <div className="bg-dark-300/40 border border-gray-800/40 p-4 sm:p-5 rounded-2xl flex-1 text-left min-w-[120px] transition-colors hover:bg-dark-300/80">
                                        <h5 className="text-2xl sm:text-3xl font-display font-bold text-white mb-1 drop-shadow-sm">Top</h5>
                                        <p className="text-primary-500/80 text-xs uppercase tracking-widest font-bold">Tier Project</p>
                                    </div>
                                    <div className="bg-dark-300/40 border border-gray-800/40 p-4 sm:p-5 rounded-2xl flex-1 text-left min-w-[120px] transition-colors hover:bg-dark-300/80">
                                        <h5 className="text-2xl sm:text-3xl font-display font-bold text-white mb-1 drop-shadow-sm">{project.tags?.length || 5}+</h5>
                                        <p className="text-primary-500/80 text-xs uppercase tracking-widest font-bold">Technologies</p>
                                    </div>
                                </div>

                                {/* CTA */}
                                <Link to={`/project/${project.id}`} className="mt-auto self-start sm:self-auto flex items-center justify-center gap-3 px-6 sm:px-8 py-3 sm:py-4 rounded-full bg-white text-black font-bold transition-all transform hover:-translate-y-1 hover:bg-gray-200 shadow-xl hover:shadow-white/20 w-full sm:w-auto text-sm sm:text-base">
                                    View The Project <ArrowRight size={18} className="group-hover:translate-x-1 transition-transform" />
                                </Link>
                            </div>

                            {/* Right Side: Image Mockup & Glow */}
                            <div className="w-full md:w-1/2 relative overflow-hidden flex items-center justify-center p-0 min-h-[400px] md:min-h-full bg-[#110e19]">
                                {/* Ambient Glow */}
                                <div className="absolute inset-0 bg-gradient-to-l from-transparent via-transparent to-dark-200/50 z-10 hidden md:block"></div>
                                <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[120%] h-[120%] bg-primary-500/20 blur-[120px] rounded-full pointer-events-none transition-opacity duration-700 group-hover:opacity-100 opacity-60"></div>

                                {project.image ? (
                                    <img src={project.image} alt={project.name} className="absolute inset-0 w-full h-full object-cover transition-all duration-[2s] ease-out group-hover:scale-[1.03]" />
                                ) : (
                                    <div className="absolute inset-0 w-full h-full bg-[#0a0a0d] flex items-center justify-center">
                                        <AppWindow size={80} className="text-gray-800/50" />
                                    </div>
                                )}
                            </div>

                        </div>
                    </div>
                ))}
            </div>
        </section>
    );
};

export default FeaturedProjects;
