import React from 'react';
import { motion } from 'framer-motion';

const sponsors = [
    { logo: '/SBI.png', name: 'State Bank of India' },
    { logo: '/SBI.png', name: 'State Bank of India' },
    { logo: '/SBI.png', name: 'State Bank of India' },
];

const containerVariants = {
    hidden: { opacity: 0, y: 50 },
    visible: {
        opacity: 1,
        y: 0,
        transition: {
            type: 'spring',
            stiffness: 50,
            staggerChildren: 0.2,
        }
    }
};

const itemVariants = {
    hidden: { opacity: 0, y: 50 },
    visible: { opacity: 1, y: 0, transition: { type: 'spring', stiffness: 50 } }
};

const Sponsor = () => {
    return (
        <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            className="min-h-screen bg-black flex flex-col items-center p-8"
        >
            <motion.h1
                className="text-5xl font-bold text-white mb-14"
                variants={itemVariants}
            >
                Event Sponsors
            </motion.h1>
            <motion.div
                className="w-full max-w-4xl bg-neutral-400 bg-opacity-30 p-6 rounded-lg shadow-md mb-8"
                variants={containerVariants}
            >
                <div className="flex flex-col md:flex-row justify-between items-center">
                    <motion.div className="flex-1 mb-4 md:mb-0" variants={itemVariants}>
                        <p className="text-slate-100 text-1xl">
                            PyCon India is completely driven by volunteers. Sponsoring the event helps to sustain and grow the conference as well as the Community. Sponsors help in making the conference affordable and maintaining the inventory for the conference.
                        </p>
                    </motion.div>
                    <motion.div variants={itemVariants}>
                        <a href="#" className="bg-gray-700 text-white px-4 py-4 rounded hover:bg-gray-600 hover:text-white md:mr-4 mt-4 md:mt-0">
                            Download Prospectus
                        </a>
                    </motion.div>
                </div>
            </motion.div>
            <motion.div
                className="w-full max-w-4xl grid grid-cols-1 md:grid-cols-3 "
                variants={containerVariants}
            >
                {sponsors.map((sponsor, index) => (
                    <motion.div
                        key={index}
                        className="  p-6 rounded-lg shadow-md flex flex-col items-center"
                        variants={itemVariants}
                    >
                        <div className="w-40 h-40 rounded-full overflow-hidden mb-4">
                            <img src={sponsor.logo} alt={sponsor.name} className="w-full h-full object-cover " />
                        </div>
                        <h2 className="text-slate-100 font-bold text-1xl text-center">{sponsor.name}</h2>
                    </motion.div>
                ))}
            </motion.div>
        </motion.div>
    );
};

export default Sponsor;
