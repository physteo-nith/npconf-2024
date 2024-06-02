import React, { useState, useEffect } from 'react';
import SpeakerCard from './SpeakerCard';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';

const speakers = [
    {
        photo: '/shabd.jpeg',
        name: 'Shabd Patel',
        position: 'Research Scientist',
        description: 'Shabd specializes in quantum mechanics and has published numerous papers.'
    },
    {
        photo: '/shabd.jpeg',
        name: 'Shabd Patel',
        position: 'Research Scientist',
        description: 'Shabd specializes in quantum mechanics and has published numerous papers.'
    },
    {
        photo: '/shabd.jpeg',
        name: 'Shabd Patel',
        position: 'Research Scientist',
        description: 'Shabd specializes in quantum mechanics and has published numerous papers.'
    },
    {
        photo: '/shabd.jpeg',
        name: 'Shabd Patel',
        position: 'Research Scientist',
        description: 'Shabd specializes in quantum mechanics and has published numerous papers.'
    },
    {
        photo: '/shabd.jpeg',
        name: 'Shabd Patel',
        position: 'Research Scientist',
        description: 'Shabd specializes in quantum mechanics and has published numerous papers.'
    },
    {
        photo: '/shabd.jpeg',
        name: 'Shabd Patel',
        position: 'Research Scientist',
        description: 'Shabd specializes in quantum mechanics and has published numerous papers.'
    },
    {
        photo: '/shabd.jpeg',
        name: 'Shabd Patel',
        position: 'Research Scientist',
        description: 'Shabd specializes in quantum mechanics and has published numerous papers.'
    },
    // Add more speaker data as needed
];

const Speakers = () => {
    const [visibleCards, setVisibleCards] = useState(3);
    const { ref, inView } = useInView({ triggerOnce: true });

    useEffect(() => {
        const updateVisibleCards = () => {
            if (window.innerWidth < 768) {
                setVisibleCards(1);
            } else {
                setVisibleCards(3);
            }
        };

        updateVisibleCards();
        window.addEventListener('resize', updateVisibleCards);
        return () => {
            window.removeEventListener('resize', updateVisibleCards);
        };
    }, []);

    const containerVariants = {
        hidden: { opacity: 0, y: 50 },
        visible: {
            opacity: 1,
            y: 0,
            transition: {
                type: 'spring',
                stiffness: 50,
                delay: 0.5,
                staggerChildren: 0.3
            }
        }
    };

    const cardVariants = {
        hidden: { opacity: 0, y: 50 },
        visible: { opacity: 1, y: 0, transition: { type: 'spring', stiffness: 50 } }
    };

    const cardWidth = window.innerWidth < 768 ? window.innerWidth - 32 : 320;
    const dragConstraintsRight = 0;
    const dragConstraintsLeft = -(speakers.length - visibleCards) * (cardWidth + 16);

    return (
        <motion.div
            ref={ref}
            className="min-h-screen bg-black flex flex-col items-center justify-center px-4 md:px-8 lg:px-12 w-full max-w-xs md:max-w-screen-md lg:max-w-screen-lg mx-auto" // Adjusted width for mobile view
            initial="hidden"
            animate={inView ? "visible" : "hidden"}
            variants={containerVariants}
        >
            <motion.h1 className="text-4xl md:text-5xl font-bold text-white mb-10 md:mb-14" variants={cardVariants}>
                Our Speakers
            </motion.h1>
            <div className="w-full overflow-x-auto overflow-y-hidden rounded-lg hide-scrollbar">
                <motion.div
                    className="flex space-x-4 md:space-x-3 lg:space-x-4"
                    drag="x"
                    dragConstraints={{ right: dragConstraintsRight, left: dragConstraintsLeft }}
                    variants={containerVariants}
                >
                    {speakers.map((speaker, index) => (
                        <motion.div key={index} variants={cardVariants} className="flex-shrink-0 w-64 md:w-80">
                            <SpeakerCard
                                photo={speaker.photo}
                                name={speaker.name}
                                position={speaker.position}
                                description={speaker.description}
                            />
                        </motion.div>
                    ))}
                </motion.div>
            </div>
        </motion.div>
    );
};

export default Speakers;
