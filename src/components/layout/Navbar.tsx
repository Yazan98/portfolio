import React from 'react';
import { Link } from 'react-router-dom';
import { Moon, Sun, Menu } from 'lucide-react';

interface NavbarProps {
    isDarkMode: boolean;
    toggleDarkMode: () => void;
}

const Navbar: React.FC<NavbarProps> = ({ isDarkMode, toggleDarkMode }) => {
    return (
        <header className="sticky top-0 z-50 w-full backdrop-blur-md bg-white/70 dark:bg-dark-200/70 border-b border-gray-200 dark:border-gray-800 transition-colors duration-300">
            <div className="container mx-auto px-4 h-16 flex items-center justify-between">
                <div className="flex items-center gap-2">
                    <Link to="/" className="text-xl font-display font-bold tracking-tight text-gray-900 dark:text-white">
                        Yazan Tarifi<span className="text-primary-500">.</span>
                    </Link>
                </div>

                <nav className="hidden md:flex items-center gap-8">
                    <Link to="/" className="text-sm font-medium hover:text-primary-500 transition-colors">Home</Link>
                    <Link to="/projects" className="text-sm font-medium hover:text-primary-500 transition-colors">Projects</Link>
                    <Link to="/skills" className="text-sm font-medium hover:text-primary-500 transition-colors">Skills</Link>
                </nav>

                <div className="flex items-center gap-4">
                    <button
                        onClick={toggleDarkMode}
                        className="p-2 rounded-full bg-gray-100 dark:bg-dark-100 hover:bg-gray-200 dark:hover:bg-gray-800 transition-colors"
                        aria-label="Toggle Dark Mode"
                    >
                        {isDarkMode ? <Sun size={18} className="text-yellow-400" /> : <Moon size={18} className="text-gray-600" />}
                    </button>

                    <button className="md:hidden p-2 text-gray-900 dark:text-gray-100">
                        <Menu size={24} />
                    </button>
                </div>
            </div>
        </header>
    );
};

export default Navbar;
