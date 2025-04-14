import React, { useEffect, useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { motion, AnimatePresence } from 'framer-motion';

const Navbar = () => {
    const [isVisible, setIsVisible] = useState(true);
    const [lastScrollTop, setLastScrollTop] = useState(0);
    const [activeSection, setActiveSection] = useState('Home');
    const [isMenuOpen, setIsMenuOpen] = useState(false);
    const [shouldShow, setShouldShow] = useState(false);
    const location = useLocation();

    // Delay the navbar appearance
    useEffect(() => {
        const timer = setTimeout(() => {
            setShouldShow(true);
        }, 4000); // 4 second delay to match hero animation

        return () => clearTimeout(timer);
    }, []);

    useEffect(() => {
        const handleScroll = () => {
            const scrollTop = window.pageYOffset || document.documentElement.scrollTop;
            if (scrollTop > lastScrollTop) {
                setIsVisible(false);
            } else {
                setIsVisible(true);
            }
            setLastScrollTop(scrollTop <= 0 ? 0 : scrollTop);

            const sections = document.querySelectorAll('section');
            sections.forEach(section => {
                const rect = section.getBoundingClientRect();
                if (rect.top <= 50 && rect.bottom >= 50) {
                    setActiveSection(section.id);
                }
            });
        };

        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, [lastScrollTop]);

    useEffect(() => {
        switch (location.pathname) {
            case '/':
                setActiveSection('Home');
                break;
            case '/Team':
                setActiveSection('Team');
                break;
            case '/Gallery':
                setActiveSection('Gallery');
                break;
            default:
                setActiveSection('');
        }
    }, [location]);

    const navigationItems = [
        { name: 'Home', path: '/' },
        { name: 'About', path: '/#About' },
        { name: 'Projects', path: '/#Projects' },
        { name: 'Events', path: '/#Events' },
        { name: 'Gallery', path: '/Gallery' },
        { name: 'Timeline', path: '/#Timeline' },
        { name: 'Team', path: '/Team' },
        { name: 'Contact', path: '/#Contact' }
    ];

    // Animation variants
    const navbarVariants = {
        hidden: {
            y: -100,
            opacity: 0
        },
        visible: {
            y: 0,
            opacity: 1,
            transition: {
                duration: 1.2,
                ease: [0.6, 0.05, 0.01, 0.9]
            }
        },
        exit: {
            y: -100,
            opacity: 0,
            transition: {
                duration: 0.3
            }
        }
    };

    return (
        <AnimatePresence>
            {shouldShow && (
                <motion.div 
                    id='Navbar' 
                    className="fixed top-0 z-50 w-full flex justify-center items-start px-2"
                    initial="hidden"
                    animate={isVisible ? "visible" : "exit"}
                    exit="exit"
                    variants={navbarVariants}
                >
                    <nav className={`w-full max-w-[95%] sm:max-w-[90%] lg:max-w-[85%] mt-2 sm:mt-3 lg:mt-4 
                        rounded-xl sm:rounded-2xl transition-all duration-300 
                        backdrop-blur-md bg-opacity-70 bg-gray-900 border border-gray-700/30
                        shadow-lg hover:bg-opacity-80`}>
                        <div className="px-2 sm:px-3 lg:px-4 py-2 sm:py-3">
                            <div className="flex items-center justify-between">
                                {/* Logo and Brand */}
                                <motion.div
                                    initial={{ opacity: 0, x: -20 }}
                                    animate={{ opacity: 1, x: 0 }}
                                    transition={{ delay: 0.2, duration: 0.8 }}
                                >
                                    <Link to="/" className="flex items-center space-x-3">
                                        <img src="/AbraxasLogo.png" className="h-7 sm:h-8 lg:h-10 rounded-full ring-blue-500/50" alt="Logo" />
                                        <h6 className="self-center text-xl sm:text-xl md:text-3xl font-bold bg-gradient-to-r from-white to-purple-600 text-transparent bg-clip-text">
                                            ABRAXAS
                                        </h6>
                                    </Link>
                                </motion.div>

                                {/* Mobile Menu Button */}
                                <motion.button
                                    initial={{ opacity: 0 }}
                                    animate={{ opacity: 1 }}
                                    transition={{ delay: 0.4, duration: 0.8 }}
                                    onClick={() => setIsMenuOpen(!isMenuOpen)}
                                    className="lg:hidden p-1.5 sm:p-2 text-gray-300 hover:text-white rounded-lg hover:bg-gray-800/50"
                                    aria-expanded={isMenuOpen}
                                    aria-label="Toggle navigation"
                                >
                                    {isMenuOpen ? (
                                        <svg className="w-5 h-5 sm:w-6 sm:h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12" />
                                        </svg>
                                    ) : (
                                        <svg className="w-5 h-5 sm:w-6 sm:h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16M4 18h16" />
                                        </svg>
                                    )}
                                </motion.button>

                                {/* Desktop Navigation */}
                                <div className="hidden lg:flex lg:items-center">
                                    <ul className="flex flex-wrap space-x-1">
                                        {navigationItems.map((item, index) => (
                                            <motion.li 
                                                key={item.name}
                                                initial={{ opacity: 0, y: -20 }}
                                                animate={{ opacity: 1, y: 0 }}
                                                transition={{ delay: 0.6 + (index * 0.1), duration: 0.8 }}
                                            >
                                                <Link
                                                    to={item.path}
                                                    className={`block px-3 py-1.5 lg:px-4 lg:py-2 rounded-lg text-sm font-medium transition-all duration-200
                                                        ${activeSection === item.name.replace(' ', '')
                                                            ? 'bg-blue-600/20 text-blue-400 border border-blue-500/30'
                                                            : 'text-gray-300 hover:bg-gray-800/50 hover:text-white'}`}
                                                >
                                                    {item.name}
                                                </Link>
                                            </motion.li>
                                        ))}
                                    </ul>
                                </div>
                            </div>

                            {/* Mobile Navigation */}
                            <motion.div 
                                initial={{ height: 0 }}
                                animate={{ height: isMenuOpen ? "auto" : 0 }}
                                transition={{ duration: 0.3 }}
                                className="lg:hidden overflow-hidden"
                            >
                                <ul className="flex flex-col space-y-1 mt-2 sm:mt-3">
                                    {navigationItems.map((item) => (
                                        <motion.li 
                                            key={item.name}
                                            initial={{ opacity: 0, x: -20 }}
                                            animate={{ opacity: 1, x: 0 }}
                                            transition={{ duration: 0.3 }}
                                        >
                                            <Link
                                                to={item.path}
                                                onClick={() => setIsMenuOpen(false)}
                                                className={`block px-3 py-2 rounded-lg text-xs sm:text-sm font-medium transition-all duration-200
                                                    ${activeSection === item.name.replace(' ', '')
                                                        ? 'bg-blue-600/20 text-blue-400 border border-blue-500/30'
                                                        : 'text-gray-300 hover:bg-gray-800/50 hover:text-white'}`}
                                            >
                                                {item.name}
                                            </Link>
                                        </motion.li>
                                    ))}
                                </ul>
                            </motion.div>
                        </div>
                    </nav>
                </motion.div>
            )}
        </AnimatePresence>
    );
};

export default Navbar;