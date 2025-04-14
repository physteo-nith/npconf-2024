import React, { useState } from 'react';
import ProjectCard from './ProjectCard';
import { motion, AnimatePresence } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import projectsData from './Projectslist';

const Projects = () => {
    const [selectedYear, setSelectedYear] = useState('all');
    const { ref, inView } = useInView({ triggerOnce: true });

    const containerVariants = {
        hidden: { opacity: 0, y: 100 },
        visible: {
            opacity: 1,
            y: 0,
            transition: {
                type: 'spring',
                stiffness: 50,
                delayChildren: 0.3,
                staggerChildren: 0.2
            }
        }
    };

    const cardVariants = {
        hidden: {
            opacity: 0,
            y: 100,
        },
        visible: {
            opacity: 1,
            y: 0,
            transition: {
                type: 'spring',
                stiffness: 50,
            }
        }
    };

    const buttonVariants = {
        hover: {
            scale: 1.05,
            boxShadow: '0 0 25px rgba(138, 43, 226, 0.6)',
        },
        hidden: { opacity: 0, y: 100 },
        visible: {
            opacity: 1,
            y: 0,
            transition: {
                type: 'spring',
                stiffness: 50,
            }
        }
    };

    // Modified grouping logic with different card counts per year
    const groupedData = projectsData.reduce((acc, project) => {
        if (!acc[project.year]) {
            acc[project.year] = [];
        }
        const maxCards = project.year === '2025' ? 5 : 7;
        if (acc[project.year].length < maxCards) {
            acc[project.year].push(project);
        }
        return acc;
    }, {});

    // Ensure each year has the correct number of projects
    ['2025', '2024', '2023'].forEach(year => {
        if (!groupedData[year]) {
            groupedData[year] = [];
        }
        const maxCards = year === '2025' ? 5 : 7;
        while (groupedData[year].length < maxCards) {
            groupedData[year].push({
                name: `Project ${groupedData[year].length + 1}`,
                position: 'Coming Soon',
                description: 'Future project placeholder',
                photo: '/placeholder-image.jpg',
                year: year
            });
        }
    });

    // Modified filtering logic with sorting for 'all' view
    const getDisplayedProjects = () => {
        if (selectedYear === 'all') {
            return Object.entries(groupedData)
                .reduce((acc, [year, projects]) => {
                    return [...acc, ...projects.map(project => ({
                        ...project,
                        year: year
                    }))];
                }, [])
                .sort((a, b) => b.year.localeCompare(a.year));
        }
        return groupedData[selectedYear] || [];
    };

    const filteredData = getDisplayedProjects();

    return (
        <motion.div
            ref={ref}
            className="min-h-screen bg-black flex flex-col items-center md:items-center justify-start md:justify-center px-4 md:px-8 w-full max-w-screen-xl mx-auto py-8 md:py-16"
            initial="hidden"
            animate={inView ? "visible" : "hidden"}
            variants={containerVariants}
        >
            <motion.h1
                className="text-2xl md:text-5xl font-bold text-white mb-4 md:mb-14 text-left md:text-center"
                variants={cardVariants}
            >
                Our{" "}
                <span className="bg-gradient-to-r from-purple-500 to-blue-800 text-transparent bg-clip-text">
                    Projects
                </span>
            </motion.h1>

            <motion.p
                className="text-left md:text-center text-gray-300 text-base md:text-xl mb-4 md:mb-10"
                variants={cardVariants}
            >
                Check out our great projects from the last few years.
            </motion.p>

            <motion.div
                className="flex flex-wrap justify-center gap-2 md:gap-4 mb-6 md:mb-12 w-full"
                variants={cardVariants}
            >
                <motion.button
                    onClick={() => setSelectedYear('all')}
                    variants={buttonVariants}
                    whileHover="hover"
                    className={`px-4 md:px-8 py-2 md:py-3 rounded-xl text-sm md:text-lg font-medium transition-all duration-500 w-[calc(50%-4px)] md:w-auto
                        ${selectedYear === 'all'
                            ? 'bg-gradient-to-r from-purple-900 to-blue-700 shadow-lg shadow-purple-500/25 scale-105 transform'
                            : 'bg-gray-800/50 hover:bg-gray-700/50 hover:scale-105 transform'
                        }`}
                >
                    All Years
                </motion.button>
                {['2025', '2024', '2023'].map((year) => (
                    <motion.button
                        key={year}
                        onClick={() => setSelectedYear(year)}
                        variants={buttonVariants}
                        whileHover="hover"
                        className={`px-4 md:px-8 py-2 md:py-3 rounded-xl text-sm md:text-lg font-medium transition-all duration-500 w-[calc(50%-4px)] md:w-auto
                            ${selectedYear === year
                                ? "bg-gradient-to-r from-purple-900 to-blue-700 shadow-lg shadow-purple-500/25 scale-105 transform"
                                : 'bg-gray-800/50 hover:bg-gray-700/50 hover:scale-105 transform'
                            }`}
                    >
                        {year}
                    </motion.button>
                ))}
            </motion.div>

            <div className="w-full">
                <div className="relative">
                    <div className="overflow-x-auto scrollbar-thin scrollbar-thumb-purple-500 scrollbar-track-gray-700">
                        <div className="flex gap-4 md:gap-6 pb-4">
                            <div className="flex gap-4 md:gap-6 snap-x snap-mandatory">
                                {filteredData.map((project, index) => (
                                    <motion.div
                                        key={`${selectedYear}-${index}`}
                                        variants={cardVariants}
                                        className="snap-start flex-shrink-0 first:pl-0 last:pr-4
                                            w-[calc(100vw-32px)] 
                                            md:w-[calc(50vw-48px)] 
                                            lg:w-80"
                                    >
                                        <ProjectCard
                                            photo={project.photo}
                                            name={project.name}
                                            position={project.position}
                                            description={project.description}
                                            year={project.year}
                                        />
                                    </motion.div>
                                ))}
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </motion.div>
    );
};

export default Projects;