import React, { useRef } from 'react';
import { motion, useMotionValue, useTransform } from 'framer-motion';

const SpeakerCard = ({ photo, name, position, description }) => {
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
            className="border border-zinc-400 rounded-lg relative w-full md:w-80 h-auto md:h-96 bg-black hover:bg-black p-1 overflow-hidden shadow-lg flex flex-col items-center flex-shrink-0 transition-colors duration-300"
            style={{ perspective: 1000 }}
            onMouseMove={handleMouseMove}
            onMouseLeave={handleMouseLeave}
        >
            <motion.div
                className="w-32 h-32 md:w-48 md:h-48 rounded-full overflow-hidden mb-4 mt-3"
                style={{ rotateX, rotateY }}
            >
                <img src={photo} alt={name} className="w-full h-full object-cover" />
            </motion.div>
            <div className="text-center mb-4">
                <h2 className="text-lg font-semibold text-slate-100">{name}</h2>
                <p className="text-slate-100">{position}</p>
            </div>
            <div className="text-center px-3">
                <p className="text-slate-300">{description}</p>
            </div>
        </motion.div>
    );
};

export default SpeakerCard;
