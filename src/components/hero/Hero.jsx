import React, { useEffect, useState } from 'react';
import { motion, useAnimation } from 'framer-motion';
import { Instagram, Linkedin } from 'lucide-react';
import Menu from '../hero/Menu';
import Atom from '../hero/Atom';

const fadeInUp = {
    initial: {
        y: 100,
        opacity: 0
    },
    animate: {
        y: 0,
        opacity: 1,
        transition: {
            duration: 2.5,
            ease: [0.6, 0.05, 0.01, 0.9]
        }
    }
};

const staggerChildren = {
    animate: {
        transition: {
            delayChildren: 0.8,
            staggerChildren: 1.2
        }
    }
};

// Slower animation for Atom
const atomAnimation = {
    initial: {
        y: 100,
        scale: 0.8,
        opacity: 0
    },
    animate: {
        y: 0,
        scale: 1,
        opacity: 1,
        transition: {
            duration: 2.8,
            ease: [0.6, 0.05, 0.01, 0.9]
        }
    }
};

// Slower animation for team name
const teamNameAnimation = {
    initial: {
        y: 100,
        opacity: 0
    },
    animate: {
        y: 0,
        opacity: 1,
        transition: {
            duration: 2.8,
            ease: [0.6, 0.05, 0.01, 0.9],
            delay: 1.6
        }
    }
};

// Slower animation for content
const contentAnimation = {
    initial: {
        y: 100,
        opacity: 0
    },
    animate: {
        y: 0,
        opacity: 1,
        transition: {
            duration: 2.8,
            ease: [0.6, 0.05, 0.01, 0.9],
            delay: 2.8
        }
    }
};

// Rest of the component remains the same
const Hero = () => {
    const controls = useAnimation();
    const [scrollY, setScrollY] = useState(0);

    useEffect(() => {
        controls.start('animate');
    }, [controls]);

    useEffect(() => {
        const handleScroll = () => {
            setScrollY(window.scrollY);
        };
        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    return (
        <div className="relative min-h-screen bg-black text-white overflow-hidden">
            <div className="absolute inset-0 overflow-hidden">
                <div className="stars"></div>
            </div>

            <motion.div 
                variants={staggerChildren}
                initial="initial"
                animate="animate"
                className="relative z-10 flex flex-col justify-center min-h-screen px-3 sm:px-4 md:px-6 lg:px-8"
            >
                <div className="w-full max-w-6xl mx-auto">
                    <div className="flex flex-col items-center">
                        {/* Atom Animation */}
                        <motion.div 
                            variants={atomAnimation}
                            className="max-w-[200px] sm:max-w-[250px] md:max-w-[300px] lg:max-w-[350px] mb-4 sm:mb-6 md:mb-8 lg:mb-10"
                        >
                            <Atom />
                        </motion.div>

                        {/* Team Name */}
                        <motion.div 
                            variants={teamNameAnimation}
                            className="mb-4 sm:mb-6 md:mb-8 lg:mb-12 text-center w-full"
                        >
                            <div className="inline-block">
                                <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold tracking-wider bg-clip-text text-transparent bg-gradient-to-r from-purple-500 to-blue-800 transition-all duration-300">
                                    TEAM ABRAXAS
                                </h2>
                                <div className="h-0.5 bg-gradient-to-r from-blue-400 to-purple-500 mt-2"></div>
                            </div>
                        </motion.div>

                        {/* Main Content */}
                        <motion.div 
                            variants={contentAnimation}
                            className="text-center w-full max-w-xs sm:max-w-sm md:max-w-xl lg:max-w-2xl px-4"
                        >
                            <p className="mb-10">"Life, much like physics, full of forces acting on you. It's not about avoiding them, but learning how to balance and use them to propel yourself forward."</p>

                            <div className="flex justify-center space-x-6 sm:space-x-8 md:space-x-10">
                                <motion.a
                                    href="https://www.instagram.com/team_abraxas"
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    whileHover={{ scale: 1.1, y: -5 }}
                                    whileTap={{ scale: 0.9 }}
                                    className="text-pink-500 hover:text-pink-400 transition-colors duration-300"
                                >
                                    <Instagram className="w-6 h-6 sm:w-7 sm:h-7 md:w-8 md:h-8" />
                                </motion.a>
                                <motion.a
                                    href="https://www.linkedin.com/company/abraxas-nith/"
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    whileHover={{ scale: 1.1, y: -5 }}
                                    whileTap={{ scale: 0.9 }}
                                    className="text-blue-500 hover:text-blue-400 transition-colors duration-300"
                                >
                                    <Linkedin className="w-6 h-6 sm:w-7 sm:h-7 md:w-8 md:h-8" />
                                </motion.a>
                            </div>
                        </motion.div>
                    </div>
                </div>
            </motion.div>

            <motion.div
                className="absolute bottom-0 left-0 w-full h-8 sm:h-12 md:h-16 lg:h-20 overflow-hidden"
                style={{
                    background: 'linear-gradient(to right, rgba(59, 130, 246, 0.1), rgba(147, 51, 234, 0.1))'
                }}
            >
                <motion.div
                    className="absolute top-0 left-0 w-[200%] h-full flex"
                    style={{ transform: `translateX(${-scrollY * 0.5}px)` }}
                >
                    <img src="/design2.png" alt="Decorative strip" className="w-1/2 h-full object-cover opacity-50" />
                    <img src="/design2.png" alt="Decorative strip" className="w-1/2 h-full object-cover opacity-50" />
                </motion.div>
            </motion.div>

            <style jsx>{`
                @keyframes animStar {
                    from { transform: translateY(0); }
                    to { transform: translateY(-2000px); }
                }

                .stars {
                    width: 1px;
                    height: 1px;
                    background: transparent;
                    box-shadow: ${generateStars(700)};
                    animation: animStar 50s linear infinite;
                }

                @media (max-width: 768px) {
                    .stars {
                        box-shadow: ${generateStars(500)};
                    }
                }

                @media (max-width: 640px) {
                    .stars {
                        box-shadow: ${generateStars(300)};
                    }
                }
            `}</style>
        </div>
    );
};

function generateStars(count) {
    let stars = '';
    for (let i = 0; i < count; i++) {
        const x = Math.floor(Math.random() * 2000);
        const y = Math.floor(Math.random() * 2000);
        stars += `${x}px ${y}px #FFF${i === count - 1 ? '' : ','} `;
    }
    return stars;
}

export default Hero;