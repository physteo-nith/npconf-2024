import React from 'react';
import { motion } from 'framer-motion';
import { FaTwitter, FaLinkedin, FaGithub, FaInstagram } from 'react-icons/fa';

const TeamCard = ({ photo, name, social }) => {
    return (
        <motion.div
            className="group relative w-full sm:w-80 h-[400px] rounded-xl overflow-hidden"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
        >
            {/* Full-size background image */}
            <div className="absolute inset-0 w-full h-full">
                <img 
                    src={photo} 
                    alt={name} 
                    className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                />
                {/* Gradient overlay for better text visibility */}
                <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/50 to-transparent" />
            </div>

            {/* Content Container */}
            <div className="relative h-full flex flex-col justify-end p-6 ">
                {/* Name */}
                <motion.h2 
                    className="text-2xl font-bold text-white mb-4 text-center"
                    whileHover={{ scale: 1.05 }}
                >
                    {name}
                </motion.h2>

                {/* Social Links */}
                <div className="flex justify-center space-x-6">
                    {[
                        
                        { icon: FaLinkedin, link: social.linkedin, color: "hover:text-blue-600" },
                        { icon: FaGithub, link: social.github, color: "hover:text-purple-400" },
                        { icon: FaInstagram, link: social.instagram, color: "hover:text-pink-500" }
                    ].map((item, index) => (
                        <motion.a
                            key={index}
                            href={item.link}
                            target="_blank"
                            rel="noopener noreferrer"
                            className={`text-white/90 transition-colors duration-300 ${item.color}`}
                            whileHover={{ 
                                scale: 1.2,
                                rotate: 360,
                                transition: { duration: 0.3 }
                            }}
                        >
                            <item.icon size={28} />
                        </motion.a>
                    ))}
                </div>
            </div>
        </motion.div>
    );
};

export default TeamCard;