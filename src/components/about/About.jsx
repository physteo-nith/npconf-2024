import React from "react";
import { motion, useViewportScroll, useTransform } from "framer-motion";
import CountUp from "react-countup";
import RoverCanvas from "./Rover";

const About = () => {
    const { scrollY } = useViewportScroll();
    const textX = useTransform(scrollY, [0, 700], [-500, 0]);
    const textXOut = useTransform(scrollY, [300, 1000], [0, 500]);

    return (
        <div className="min-h-screen relative flex flex-col justify-start items-center bg-black text-white py-8 sm:py-12 md:py-16 lg:py-24">
            {/* Main Content */}
            <motion.div
                className="z-10 flex flex-col w-full max-w-6xl px-4 sm:px-6 lg:px-8"
                initial={{ y: 100, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                transition={{ type: "spring", stiffness: 50, delay: 0.7 }}
            >
                <div className="flex flex-col lg:flex-row gap-6 md:gap-8 lg:gap-12">
                    {/* Text Section */}
                    <div className="flex flex-col w-full lg:w-1/2">
                        <h1 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl tracking-normal font-bold font-sans bg-gradient-to-r from-purple-500 to-blue-800 text-transparent bg-clip-text mb-3 sm:mb-4 md:mb-6">
                            Who we are
                        </h1>
                        <p className="text-sm sm:text-base md:text-lg max-w-prose tracking-normal text-gray-300 leading-relaxed">
                            Team Abraxas is the engineering physics branch's departmental club - a vibrant community driven by passion for technology and discovery. We explore diverse physics disciplines from quantum computing to particle physics, creating technological innovations while unraveling universal mysteries. As physics enthusiasts, we've built a space where curiosity thrives and knowledge grows. Through engaging discussions, demonstrations, and groundbreaking discoveries, we're building a legacy that combines scientific exploration with practical innovation, inviting fellow enthusiasts to join us in pushing the boundaries of what's possible.
                        </p>
                    </div>

                    {/* Rover Canvas */}
                    <div className="w-full lg:w-1/2 h-64 sm:h-72 md:h-80 lg:h-96">
                        <RoverCanvas />
                    </div>
                </div>

                {/* CountUp Section */}
                <motion.div
                    className="mt-8 sm:mt-12 md:mt-16 lg:mt-24 w-full"
                    initial={{ y: 100, opacity: 0 }}
                    animate={{ y: 0, opacity: 1 }}
                    transition={{ type: "spring", stiffness: 50, delay: 1 }}
                >
                    <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6 p-4 sm:p-6 md:p-8 bg-gradient-to-r from-blue-400 to-slate-900 rounded-xl">
                        <div className="text-center p-2 sm:p-3">
                            <h3 className="text-xl sm:text-2xl md:text-3xl lg:text-5xl font-bold mb-1 sm:mb-2">
                                <CountUp end={15} duration={5} />
                            </h3>
                            <p className="text-xs sm:text-sm md:text-base lg:text-xl font-medium text-gray-200">Projects</p>
                        </div>
                        <div className="text-center p-2 sm:p-3">
                            <h3 className="text-xl sm:text-2xl md:text-3xl lg:text-5xl font-bold mb-1 sm:mb-2">
                                <CountUp end={46} duration={5} />
                            </h3>
                            <p className="text-xs sm:text-sm md:text-base lg:text-xl font-medium text-gray-200">Members</p>
                        </div>
                        <div className="text-center p-2 sm:p-3">
                            <h3 className="text-xl sm:text-2xl md:text-3xl lg:text-5xl font-bold mb-1 sm:mb-2">
                                <CountUp end={1} duration={5} />
                            </h3>
                            <p className="text-xs sm:text-sm md:text-base lg:text-xl font-medium text-gray-200">Wins</p>
                        </div>
                        <div className="text-center p-2 sm:p-3">
                            <h3 className="text-xl sm:text-2xl md:text-3xl lg:text-5xl font-bold mb-1 sm:mb-2">
                                <CountUp end={2} duration={5} />
                            </h3>
                            <p className="text-xs sm:text-sm md:text-base lg:text-xl font-medium text-gray-200">Events</p>
                        </div>
                    </div>
                </motion.div>
            </motion.div>
        </div>
    );
};

export default About;