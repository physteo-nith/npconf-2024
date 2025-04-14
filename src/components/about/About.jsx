import React from 'react';
import { motion, useViewportScroll, useTransform } from 'framer-motion';
import CountUp from 'react-countup';

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
                {/* <img
                    src="/mountains.png"
                    alt="Mountain"
                    className="w-full object-cover"
                /> */}
            </motion.div>
            <div className="z-10 flex flex-col mt-20 h-full w-full px-10 md:flex-row">
                <div className="flex flex-col justify-start items-start text-left w-full md:w-1/2">
                    <h1 className="text-4xl md:text-5xl font-bold mb-3">National Physics Conference 2024</h1>
                    <h2 className="text-lg md:text-4xl font-bold mx-4 md:mx-2 mt-4">
                        Registrations
                    </h2>
                    <h2 className="text-lg md:text-3xl font-medium mx-4 md:mx-2 mt-6">
                        NIT Hamirpur, 15th July-18th July
                    </h2>
                    <p className="text-lg md:text-2xl font-sans mx-4 md:mx-2 mt-2">
                        PyCon India 2024 is the premier conference for Python enthusiasts and professionals, offering an unparalleled opportunity to dive deep into the world of Python and explore its limitless potentials.
                    </p>
                </div>
                <div className="w-full md:w-1/2 flex justify-center items-center mt-10 md:mt-0">
                    <iframe
                        width="560"
                        height="315"
                        src="https://www.youtube.com/embed/H0iIuguAP9M?si=cjSxcadtbSrJT6TM"
                        title="YouTube video player"
                        frameBorder="0"

                        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                        referrerPolicy="strict-origin-when-cross-origin"
                        allowFullScreen
                        className="w-full h-60 rounded-lg md:h-96"
                    ></iframe>
                </div>
            </div>
            <motion.div
                className="flex justify-around w-full mt-10 py-10 bg-gradient-to-r from-blue-400 to-slate-900"
                initial={{ y: 100, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                transition={{ type: 'spring', stiffness: 50, delay: 1 }}
            >
                <div className="text-center">
                    <h3 className="text-4xl md:text-5xl font-bold">
                        <CountUp end={4} duration={5} />
                    </h3>
                    <p className="text-lg md:text-2xl font-medium">Days</p>
                </div>
                <div className="text-center">
                    <h3 className="text-4xl md:text-5xl font-bold">
                        <CountUp end={10} duration={5} />
                    </h3>
                    <p className="text-lg md:text-2xl font-medium">Speakers</p>
                </div>
                <div className="text-center">
                    <h3 className="text-4xl md:text-5xl font-bold">
                        <CountUp end={7} duration={5} />
                    </h3>
                    <p className="text-lg md:text-2xl font-medium">Awards</p>
                </div>
                <div className="text-center">
                    <h3 className="text-4xl md:text-5xl font-bold">
                        <CountUp end={10} duration={5} />
                    </h3>
                    <p className="text-lg md:text-2xl font-medium">Activities</p>
                </div>
            </motion.div>
        </div>
    );
};

export default About;
