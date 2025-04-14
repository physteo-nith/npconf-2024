import React from 'react';
import { motion } from 'framer-motion';
import { FaTwitter, FaLinkedin, FaGithub, FaInstagram } from 'react-icons/fa';

const TeamCard = ({ photo, name, social }) => {
    return (
        <motion.div
            className="border border-zinc-400 rounded-lg relative w-full md:w-64 h-auto md:h-72 bg-black hover:bg-black p-1 overflow-hidden shadow-lg flex flex-col items-center flex-shrink-0 transition-colors duration-300"
            style={{ perspective: 1000 }}
        >
            <motion.div
                className="w-32 h-32 md:w-44 md:h-44 rounded-full overflow-hidden mb-4 mt-3 transition-all duration-300 transform hover:scale-105 hover:rounded-lg"
                whileHover={{ scale: 1.1 }}
            >
                <img src={photo} alt={name} className="w-full h-full object-cover" />
            </motion.div>
            <div className="text-center mb-4">
                <h2 className="text-lg md:text-xl font-bold text-slate-100">{name}</h2>
            </div>
            <div className="text-center px-3 flex space-x-4">
                <motion.a
                    href={social.twitter}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-slate-300"
                    whileHover={{ scale: 1.2 }}
                >
                    <FaTwitter size={24} />
                </motion.a>
                <motion.a
                    href={social.linkedin}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-slate-300"
                    whileHover={{ scale: 1.2 }}
                >
                    <FaLinkedin size={24} />
                </motion.a>
                <motion.a
                    href={social.github}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-slate-300"
                    whileHover={{ scale: 1.2 }}
                >
                    <FaGithub size={24} />
                </motion.a>
                <motion.a
                    href={social.instagram}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-slate-300"
                    whileHover={{ scale: 1.2 }}
                >
                    <FaInstagram size={24} />
                </motion.a>
            </div>
        </motion.div>
    );
};

export default TeamCard;
