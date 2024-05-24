import React, { useEffect } from 'react';
import { motion, useAnimation } from 'framer-motion';

const textVariants = {
    initial: {
        y: 100,
        opacity: 0,
    },
    animate: {
        y: 0,
        opacity: 1,
        transition: {
            duration: 1,
            staggerChildren: 0.1,
        },
    },
};

const Hero = () => {
    const controls = useAnimation();

    useEffect(() => {
        controls.start('animate');
    }, [controls]);

    return (
        <div className="flex h-90vh">
            <div className="flex-1"></div> {/* Left side div */}
            <div className="flex-5 flex justify-center items-center"> {/* Center div with alignment */}
                <motion.div variants={textVariants} initial="initial" animate={controls} className="w-4/5 mx-auto text-center justify-center items-center">
                    <motion.a variants={textVariants}><img className='my-14 mx-auto ' src='/pycon.svg' alt='' /></motion.a>
                    <motion.h2 variants={textVariants} className='font-normal font-sans mb-8'>Immerse yourself in the world of physics at our Annual Physics Conference. Engage with leading experts, delve into cutting-edge research, and explore the vast mysteries of the universe. Connect with like-minded individuals, share insights, and ignite your passion for scientific discovery. From quantum mechanics to astrophysics, our conference covers diverse topics, offering a platform for groundbreaking discussions and innovative ideas. Join us as we push the boundaries of knowledge and shape the future of physics together.</motion.h2>
                    <div className="space-y-4 md:space-x-10 md:space-y-0 mt-12 md:mt-0 flex flex-col md:flex-row justify-center">
                        <motion.a variants={textVariants} href="#Speakers" className="bg-gray-700 text-white px-7 py-3 rounded hover:bg-gray-600 hover:text-white md:mr-4 mt-15 md:mt-0">SPEAKERS</motion.a>
                        <motion.a variants={textVariants} href="#" className="bg-gray-700 text-white px-7 py-3 rounded hover:bg-gray-600 hover:text-white mt-15 md:mt-0">BUY TICKETS</motion.a>
                    </div>
                </motion.div>
            </div>
            <div className="flex-1"></div> {/* Right side div */}
        </div>
    );
};

export default Hero;
