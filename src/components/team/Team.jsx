import React, { useState, useEffect } from 'react';
import { useAnimation, motion } from 'framer-motion';
import { InView } from 'react-intersection-observer';
import TeamCard from './TeamCard';
import teamData from './teamData.json';

const Team = () => {
    const [selectedYear, setSelectedYear] = useState(Object.keys(teamData)[3]);
    const [teamMembers, setTeamMembers] = useState(teamData[selectedYear]);
    const controls = useAnimation();

    useEffect(() => {
        setTeamMembers(teamData[selectedYear]);
    }, [selectedYear]);

    const variants = {
        hidden: { opacity: 0, y: 100 },
        visible: { opacity: 1, y: 0 }
    };

    return (
        <div className="min-h-screen bg-black flex flex-col items-center justify-center px-4 md:px-8 lg:px-12 w-full max-w-xs md:max-w-screen-md lg:max-w-screen-lg mx-auto mt-[-30px]">
            <h1 className="text-4xl md:text-5xl font-bold text-white mb-10 md:mb-14">Our Team</h1>
            <select
                value={selectedYear}
                onChange={(e) => setSelectedYear(e.target.value)}
                className="mb-6 p-2 rounded bg-gray-800 text-white"
            >
                {Object.keys(teamData).map((year, index) => (
                    <option key={index} value={year}>
                        {year}
                    </option>
                ))}
            </select>
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
                        className="flex space-x-4 md:space-x-4 lg:space-x-4"
                        initial="hidden"
                        animate={controls}
                        variants={variants}
                        transition={{ duration: 0.5, ease: "easeOut" }}
                    >
                        {teamMembers.map((member, index) => (
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
};

export default Team;
