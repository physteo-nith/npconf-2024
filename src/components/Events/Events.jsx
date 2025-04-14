import React from 'react';
import Eventscard from './Eventscard';
import { motion } from 'framer-motion';

const Events = () => {
    const containerVariants = {
        hidden: { opacity: 0 },
        visible: {
            opacity: 1,
            transition: {
                duration: 0.8,
                staggerChildren: 0.3
            }
        }
    };
    
    const itemVariants = {
        hidden: {
            opacity: 0,
            y: 100
        },
        visible: {
            opacity: 1,
            y: 0,
            transition: {
                type: "spring",
                stiffness: 50,
                damping: 10,
                duration: 0.8
            }
        }
    };
    
    return (
        <motion.div 
            className="max-w-screen-xl mx-auto pt-10 pb-4 px-4 sm:px-6 lg:px-8 mt-0 md:mt-8"
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.1 }}
        >
            <motion.h2
                className="text-2xl sm:text-3xl md:text-5xl font-bold text-white mb-2 md:mb-3 text-center px-4"
                variants={itemVariants}
            >
                Our{" "}
                <span className="bg-gradient-to-r from-purple-500 to-blue-800 text-transparent bg-clip-text">
                    Events and Workshops
                </span>
            </motion.h2>
            
            <motion.p
                className="text-center text-gray-300 text-lg sm:text-xl md:text-2xl mb-4 md:mb-6 px-4"
                variants={itemVariants}
            >
                Get updated on our latest events and workshops
            </motion.p>
            
            <motion.div
                variants={itemVariants}
                className="w-full"
            >
                <Eventscard />
            </motion.div>
        </motion.div>
    );
};

export default Events;