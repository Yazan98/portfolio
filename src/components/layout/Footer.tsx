import React from 'react';

const Footer: React.FC = () => {
    return (
        <footer className="py-8 border-t border-gray-200 dark:border-gray-800 mt-12 transition-colors duration-300">
            <div className="container mx-auto px-4 text-center text-sm text-gray-500 dark:text-gray-400">
                <p>© {new Date().getFullYear()} Yazan Tarifi. All Rights Reserved.</p>
                <p className="mt-2">Software Engineer & Mobile Developer</p>
            </div>
        </footer>
    );
};

export default Footer;
