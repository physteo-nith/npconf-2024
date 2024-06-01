import React, { useState, useEffect, useRef } from 'react';
import { motion, useMotionValue, useTransform } from 'framer-motion';
import { FaTwitter, FaInstagram, FaLinkedin, FaGithub } from 'react-icons/fa';
import teamData from './teamData.json';

const variants = {
    hidden: { opacity: 0, y: 50 },
    visible: { opacity: 1, y: 0 }
};

const containerVariants = {
    hidden: { opacity: 0 },
    visible: { opacity: 1, transition: { staggerChildren: 0.3 } }
};

const Team = () => {
    const [selectedYear, setSelectedYear] = useState('Final Year');
    const [teamMembers, setTeamMembers] = useState([]);

    useEffect(() => {
        setTeamMembers(teamData[selectedYear] || []);
    }, [selectedYear]);

    const handleYearChange = (e) => {
        setSelectedYear(e.target.value);
    };

    // Adjust drag constraints dynamically
    const cardWidth = window.innerWidth < 768 ? window.innerWidth - 32 : 320;
    const dragConstraintsRight = 0;
    const dragConstraintsLeft = -(teamMembers.length - 3) * (cardWidth + 16); // Adjusted for spacing

    return (
        <motion.div
            className="min-h-screen bg-black text-white flex flex-col items-center p-8"
            initial="hidden"
            animate="visible"
            variants={containerVariants}
        >
            <motion.h1 className="text-5xl font-bold mb-8 text-center" variants={variants}>Our Team</motion.h1>
            <div className="w-full flex justify-center mb-8">
                <motion.select
                    value={selectedYear}
                    onChange={handleYearChange}
                    className="w-40 p-2 bg-gray-800 text-white rounded-md"
                    variants={variants}
                >
                    <option>1st Year</option>
                    <option>2nd Year</option>
                    <option>3rd Year</option>
                    <option>Final Year</option>
                </motion.select>
            </div>
            <div className="w-full overflow-x-auto py-4">
                <motion.div
                    className="flex justify-center space-x-4 px-4" // Center the cards and add padding for better alignment
                    drag="x"
                    dragConstraints={{ right: dragConstraintsRight, left: dragConstraintsLeft }}
                    variants={containerVariants}
                >
                    {teamMembers.map((member, index) => (
                        <motion.div key={index} variants={variants} className="flex-shrink-0 min-w-[250px] max-w-[300px] bg-gray-800 p-6 rounded-lg shadow-md relative">
                            <Card member={member} />
                        </motion.div>
                    ))}
                </motion.div>
            </div>
        </motion.div>
    );
};

const Card = ({ member }) => {
    const cardRef = useRef(null);
    const x = useMotionValue(0);
    const y = useMotionValue(0);
    const rotateX = useTransform(y, [-100, 100], [-15, 15]);
    const rotateY = useTransform(x, [-100, 100], [-15, 15]);

    const handleMouseMove = (e) => {
        const rect = cardRef.current.getBoundingClientRect();
        const cardX = e.clientX - rect.left;
        const cardY = e.clientY - rect.top;
        x.set(cardX - rect.width / 2);
        y.set(cardY - rect.height / 2);
    };

    const handleMouseLeave = () => {
        x.set(0);
        y.set(0);
    };

    return (
        <motion.div
            ref={cardRef}
            className="w-full h-full"
            style={{ perspective: 1000 }}
            onMouseMove={handleMouseMove}
            onMouseLeave={handleMouseLeave}
            whileHover={{ scale: 1.07 }}
        >
            <motion.div
                className="w-full h-48 rounded-md overflow-hidden mb-4"
                style={{ rotateX, rotateY }}
            >
                <motion.img
                    src={member.photo}
                    alt={member.name}
                    className="w-full h-full object-cover"
                    whileHover={{ scale: 1.1 }}
                    transition={{
                        type: "spring",
                        stiffness: 300,
                        damping: 20
                    }}
                />
            </motion.div>
            <h2 className="text-2xl font-bold mb-2 text-center">{member.name}</h2>
            <p className="text-center mb-4">{member.position}</p>
            <p className="text-center mb-4">{member.description}</p>
            <div className="flex justify-center space-x-4">
                {member.social.twitter && (
                    <a href={member.social.twitter} className="text-blue-500 hover:text-blue-400">
                        <FaTwitter className="text-2xl" />
                    </a>
                )}
                {member.social.instagram && (
                    <a href={member.social.instagram} className="text-pink-500 hover:text-pink-400">
                        <FaInstagram className="text-2xl" />
                    </a>
                )}
                {member.social.linkedin && (
                    <a href={member.social.linkedin} className="text-blue-700 hover:text-blue-600">
                        <FaLinkedin className="text-2xl" />
                    </a>
                )}
                {member.social.github && (
                    <a href={member.social.github} className="text-gray-500 hover:text-gray-400">
                        <FaGithub className="text-2xl" />
                    </a>
                )}
            </div>
        </motion.div>
    );
};

export default Team;
