import React, { useEffect, useState } from 'react';
import { Link, useLocation } from 'react-router-dom';

const Navbar = () => {
    const [isVisible, setIsVisible] = useState(true);
    const [lastScrollTop, setLastScrollTop] = useState(0);
    const [activeSection, setActiveSection] = useState('Home');
    const [isMenuOpen, setIsMenuOpen] = useState(false);
    const location = useLocation();

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
        if (location.pathname === '/Team') {
            setActiveSection('Team');
        } else if (location.pathname === '/') {
            setActiveSection('Home');
        }
    }, [location]);

    useEffect(() => {
        const ticketImage = document.getElementById('ticketImage');
        if (ticketImage) {
            const handleMouseOver = () => {
                ticketImage.src = '/ticket.png';
            };
            const handleMouseOut = () => {
                ticketImage.src = '/ticket1.png';
            };

            ticketImage.addEventListener('mouseover', handleMouseOver);
            ticketImage.addEventListener('mouseout', handleMouseOut);

            return () => {
                ticketImage.removeEventListener('mouseover', handleMouseOver);
                ticketImage.removeEventListener('mouseout', handleMouseOut);
            };
        }
    }, []);

    const toggleMenu = () => {
        setIsMenuOpen(!isMenuOpen);
    };

    return (
        <div id='Navbar'>
            <nav
                className={`bg-white dark:bg-gray-900 fixed w-full z-20  top-0 start-0 border-b border-gray-200 dark:border-gray-600 transition-transform duration-300 ${isVisible ? 'transform translate-y-0' : 'transform -translate-y-full'
                    }`}
            >
                <div className="max-w-screen-xl flex flex-wrap items-center justify-around mx-auto p-4">
                    <Link to="/" className="flex items-center space-x-3 rtl:space-x-reverse">
                        <img src="/physteo.jpeg" className="h-12 rounded-full" alt="Physteo Logo" />
                        <span className="self-center text-2xl font-semibold whitespace-nowrap dark:text-white">
                            Physteo
                        </span>
                    </Link>
                    <div className="flex md:order-2 h-12 space-x-3 md:space-x-0 rtl:space-x-reverse ">
                        <Link to="/" className="hidden md:flex items-center space-x-3 rtl:space-x-reverse">
                            <img id="ticketImage" src="/ticket1.png" className="h-20 w-22" alt="Physteo Logo" />
                        </Link>
                        <button
                            data-collapse-toggle="navbar-sticky"
                            type="button"
                            className="inline-flex items-center p-2 w-10 h-10 justify-center text-sm text-gray-500 rounded-lg md:hidden hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200 dark:text-gray-400 dark:hover:bg-gray-700 dark:focus:ring-gray-600"
                            aria-controls="navbar-sticky"
                            aria-expanded={isMenuOpen}
                            onClick={toggleMenu}
                        >
                            <span className="sr-only">Open main menu</span>
                            {isMenuOpen ? (
                                <svg
                                    className="w-5 h-5"
                                    aria-hidden="true"
                                    xmlns="http://www.w3.org/2000/svg"
                                    fill="none"
                                    viewBox="0 0 24 24"
                                    stroke="currentColor"
                                >
                                    <path
                                        strokeLinecap="round"
                                        strokeLinejoin="round"
                                        strokeWidth="2"
                                        d="M6 18L18 6M6 6l12 12"
                                    />
                                </svg>
                            ) : (
                                <svg
                                    className="w-5 h-5"
                                    aria-hidden="true"
                                    xmlns="http://www.w3.org/2000/svg"
                                    fill="none"
                                    viewBox="0 0 17 14"
                                >
                                    <path
                                        stroke="currentColor"
                                        strokeLinecap="round"
                                        strokeLinejoin="round"
                                        strokeWidth="2"
                                        d="M1 1h15M1 7h15M1 13h15"
                                    />
                                </svg>
                            )}
                        </button>
                    </div>
                    <div
                        className={`items-center justify-between ${isMenuOpen ? 'block' : 'hidden'} w-full md:flex md:w-auto md:order-1`}
                        id="navbar-sticky"
                    >
                        <ul className="flex flex-col p-4 md:p-0 mt-4 font-medium border border-gray-100 rounded-lg bg-transparent md:space-x-8 rtl:space-x-reverse md:flex-row md:mt-0 md:border-0 md:bg-transparent dark:border-gray-700">
                            <li>
                                <Link
                                    to="/"
                                    className={`block py-3 px-4 rounded md:p-2 ${activeSection === 'Home' ? ' text-blue-700 border border-blue-300' : 'text-gray-900 hover:bg-gray-100 md:hover:bg-transparent md:hover:text-blue-700'} dark:text-white dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent dark:border-gray-700`}
                                    aria-current="page"
                                    onClick={() => setIsMenuOpen(false)}
                                >
                                    Home
                                </Link>
                            </li>
                            <li>
                                <Link
                                    to="/#About"
                                    className={`block py-3 px-4 rounded md:p-2 ${activeSection === 'About' ? ' text-blue-700 border border-blue-300' : 'text-gray-900 hover:bg-gray-100 md:hover:bg-transparent md:hover:text-blue-700'} dark:text-white dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent dark:border-gray-700`}
                                    onClick={() => setIsMenuOpen(false)}
                                >
                                    About
                                </Link>
                            </li>
                            <li>
                                <Link
                                    to="/#Speakers"
                                    className={`block py-3 px-4 rounded md:p-2 ${activeSection === 'Speakers' ? ' text-blue-700 border border-blue-300' : 'text-gray-900 hover:bg-gray-100 md:hover:bg-transparent md:hover:text-blue-700'} dark:text-white dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent dark:border-gray-700`}
                                    onClick={() => setIsMenuOpen(false)}
                                >
                                    Speakers
                                </Link>
                            </li>
                            <li>
                                <Link
                                    to="/#Sponsors"
                                    className={`block py-3 px-4 rounded md:p-2 ${activeSection === 'Sponsors' ? ' text-blue-700 border border-blue-300' : 'text-gray-900 hover:bg-gray-100 md:hover:bg-transparent md:hover:text-blue-700'} dark:text-white dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent dark:border-gray-700`}
                                    onClick={() => setIsMenuOpen(false)}
                                >
                                    Sponsors
                                </Link>
                            </li>
                            <li>
                                <Link
                                    to="/Team"
                                    className={`block py-3 px-4 rounded md:p-2 ${activeSection === 'Team' ? ' text-blue-700 border border-blue-300' : 'text-gray-900 hover:bg-gray-100 md:hover:bg-transparent md:hover:text-blue-700'} dark:text-white dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent dark:border-gray-700`}
                                    onClick={() => setIsMenuOpen(false)}
                                >
                                    Team
                                </Link>
                            </li>
                            <li>
                                <Link
                                    to="/#FAQ"
                                    className={`block py-3 px-4 rounded md:p-2 ${activeSection === 'FAQ' ? ' text-blue-700 border border-blue-300' : 'text-gray-900 hover:bg-gray-100 md:hover:bg-transparent md:hover:text-blue-700'} dark:text-white dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent dark:border-gray-700`}
                                    onClick={() => setIsMenuOpen(false)}
                                >
                                    FAQ
                                </Link>
                            </li>
                        </ul>
                    </div>
                </div>
            </nav>
        </div>
    );
};

export default Navbar;
