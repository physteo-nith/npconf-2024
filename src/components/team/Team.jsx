import React, { useState, useEffect } from 'react';
import { useAnimation, motion } from 'framer-motion';
import { InView } from 'react-intersection-observer';
import TeamCard from './TeamCard';
import teamData from './teamData.json';
import Starfield from '../star/Starfield'; // Adjust the path according to your folder structure

const Team = () => {
    const controls = useAnimation();

    const variants = {
        hidden: { opacity: 0, y: 100 },
        visible: { opacity: 1, y: 0 }
    };

    const renderTeamSection = (year) => (
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
                    >
                        {teamData[year].map((member, index) => (
                            <div key={index} className="flex-shrink-0 w-full md:w-64">
                                <TeamCard
                                    photo={member.photo}
                                    name={member.name}
                                    social={member.social}
                                />
                            </div>
                        ))}
                    </motion.div>
                </InView>
            </div>
        </div>
    );

    return (
        <div id='Team' className="relative min-h-screen bg-black flex flex-col items-center justify-center p-4 md:p-8 lg:p-12 mx-auto w-full max-w-6xl mt-[-30px]">
            <Starfield
                starCount={5000}
                starColor={[255, 255, 255]}
                speedFactor={0.15}
                backgroundColor="black"
            />
            <h1 className="text-4xl md:text-5xl font-bold text-white mb-10 md:mb-14">Our Team</h1>
            {renderTeamSection('Head Members')}
            {renderTeamSection('Coordinators')}
            {renderTeamSection('Excuatives')}
            {renderTeamSection('Volunteers')}
        </div>
    );
};

export default Team;
