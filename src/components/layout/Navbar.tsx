import React from 'react';
import { Link } from 'react-router-dom';
import { Menu } from 'lucide-react';

const Navbar: React.FC = () => {
    return (
        <header className="sticky top-0 z-50 w-full backdrop-blur-md bg-white/70 dark:bg-dark-200/70 border-b border-gray-200 dark:border-gray-800 transition-colors duration-300">
            <div className="container mx-auto px-4 h-16 flex items-center justify-between">
                <div className="flex items-center gap-2">
                    <Link to="/" className="flex items-center gap-3 text-xl font-display font-bold tracking-tight text-gray-900 dark:text-white group">
                        <img src="/logo.png" alt="Yazan Tarifi" className="w-10 h-10 object-contain group-hover:scale-105 transition-transform" />
                        <span className="hidden sm:inline-block">Yazan Tarifi<span className="text-primary-500">.</span></span>
                    </Link>
                </div>

                <nav className="hidden md:flex items-center gap-2 ml-auto mr-8">
                    <Link to="/" className="text-base font-medium px-4 py-2 rounded-full hover:bg-white/10 dark:hover:bg-white/5 hover:text-primary-400 transition-all duration-300">Home</Link>
                    <Link to="/projects" className="text-base font-medium px-4 py-2 rounded-full hover:bg-white/10 dark:hover:bg-white/5 hover:text-primary-400 transition-all duration-300">Projects</Link>
                    <Link to="/skills" className="text-base font-medium px-4 py-2 rounded-full hover:bg-white/10 dark:hover:bg-white/5 hover:text-primary-400 transition-all duration-300">Skills</Link>
                </nav>

                <div className="flex items-center gap-4">
                    <button className="md:hidden p-2 text-gray-900 dark:text-gray-100">
                        <Menu size={24} />
                    </button>
                </div>
            </div>
        </header>
    );
};

export default Navbar;
