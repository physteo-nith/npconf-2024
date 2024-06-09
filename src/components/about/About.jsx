import React from 'react';
import { motion, useViewportScroll, useTransform } from 'framer-motion';

const About = () => {
    const { scrollY } = useViewportScroll();
    const textX = useTransform(scrollY, [0, 700], [-500, 0]);
    const textXOut = useTransform(scrollY, [300, 1000], [0, 500]);

    return (
        <div className="full-height relative flex flex-col justify-center items-center text-white">
            <motion.div
                className="absolute top-0 w-full flex justify-center mt-[595px] md:mt-[-115px] z-20"
                initial={{ y: 100, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                transition={{ type: 'spring', stiffness: 50, delay: 0.7 }}
            >
                <img
                    src="/mountains.png"
                    alt="Mountain"
                    className="w-full object-cover"
                />
            </motion.div>
            <motion.div
                className="z-10 flex flex-col mt-20 justify-center items-center text-center h-full"
                initial={{ x: -200, opacity: 0 }}
                animate={{ x: 0, opacity: 1 }}
                exit={{ x: 200, opacity: 0 }}
                transition={{ type: 'spring', stiffness: 50, delay: 0.7 }}
                style={{ x: textX }}
            >
                <h1 className="text-4xl md:text-5xl font-bold mb-4">National Physics Conference 2024</h1>
                <h2 className="text-lg md:text-4xl font-bold mx-4 md:mx-20 mt-6">
                    Registrations
                </h2>
                <h2 className="text-lg md:text-3xl font-medium mx-4 md:mx-20 mt-6">
                    NIT Hamirpur, 15th July-18th July
                </h2>
                <p className="text-lg md:text-2xl font-sans mx-4 md:mx-72 mt-6">
                    PyCon India 2024 is the premier conference for Python enthusiasts and professionals, offering an unparalleled opportunity to dive deep into the world of Python and explore its limitless potentials.
                </p>
            </motion.div>
        </div>
    );
};

export default About;
