import React, { useState, useEffect } from 'react';
import { useAnimation, motion } from 'framer-motion';
import { InView } from 'react-intersection-observer';
import TeamCard from './TeamCard';
import teamData from './teamData.json';
import Starfield from '../star/Starfield'; // Adjust the path according to your folder structure

const Team = () => {
    const controls = useAnimation();
    const [isMobile, setIsMobile] = useState(window.innerWidth <= 768);
    const [visibleCards, setVisibleCards] = useState(window.innerWidth < 768 ? 1 : 3);

    useEffect(() => {
        const handleResize = () => {
            setIsMobile(window.innerWidth <= 768);
            setVisibleCards(window.innerWidth < 768 ? 1 : 3);
        };

        window.addEventListener('resize', handleResize);

        // Check initial window size
        handleResize();

        // Clean up event listener on component unmount
        return () => window.removeEventListener('resize', handleResize);
    }, []);

    const variants = {
        hidden: { opacity: 0, y: 100 },
        visible: { opacity: 1, y: 0 }
    };

    const renderTeamSection = (year) => {
        if (!teamData[year]) {
            console.error(`No data found for year: ${year}`);
            return null;
        }

        const cardWidth = window.innerWidth < 768 ? window.innerWidth - 32 : 320;
        const dragConstraintsRight = 0;
        const dragConstraintsLeft = -(teamData[year].length - visibleCards) * (cardWidth + 16);

        return (
            <div className="mb-12 w-full">
                <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">{year}</h2>
                <div className="w-full overflow-x-auto overflow-y-hidden rounded-lg hide-scrollbar">
                    <InView
                        as="div"
                        threshold={0.1}
                        onChange={(inView) => {
                            if (inView) {
                                controls.start("visible");
                            }
                        }}
                    >
                        <motion.div
                            className="flex space-x-4 md:space-x-6 lg:space-x-8 px-4 md:px-6 lg:px-8"
                            initial="hidden"
                            animate={controls}
                            variants={variants}
                            transition={{ duration: 0.5, ease: "easeOut" }}
                            drag="x"
                            dragConstraints={{ right: dragConstraintsRight, left: dragConstraintsLeft }}
                        >
                            {teamData[year].map((member, index) => (
                                <motion.div key={index} className="flex-shrink-0 w-full md:w-64" variants={variants}>
                                    <TeamCard
                                        photo={member.photo}
                                        name={member.name}
                                        social={member.social}
                                    />
                                </motion.div>
                            ))}
                        </motion.div>
                    </InView>
                </div>
            </div>
        );
    };

    return (
        <div
            id='Team'
            className={`relative bg-black flex flex-col items-center justify-center p-4 md:p-8 lg:p-12 mx-auto max-w-6xl mt-[-30px] ${isMobile ? 'ml-2' : ''}`}
            style={{
                width: isMobile ? '360px' : '100%',
                // minHeight: isMobile ? 'vh' : '100vh'  // Adjust the height for mobile view
            }}
        >
            <Starfield
                starCount={5000}
                starColor={[255, 255, 255]}
                speedFactor={0.15}
                backgroundColor="black"
            />
            <h1 className="text-4xl md:text-5xl font-bold text-white mb-10 md:mb-14">Our Team</h1>
            {renderTeamSection('Head Members')}
            {renderTeamSection('Coordinators')}
            {renderTeamSection('Executives')}
            {renderTeamSection('Volunteers')}
        </div>
    );
};

export default Team;
