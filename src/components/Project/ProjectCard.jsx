import React, { useState, useRef } from 'react';
import { motion, useMotionValue, useTransform } from 'framer-motion';

const ProjectCard = ({ photo, name, position, description }) => {
    const [isFlipped, setIsFlipped] = useState(false);
    const cardRef = useRef(null);
    const x = useMotionValue(0);
    const y = useMotionValue(0);
    
    // Reduced rotation range from [-15, 15] to [-5, 5] for subtler movement
    const rotateX = useTransform(y, [-100, 100], [-5, 5]);
    const rotateY = useTransform(x, [-100, 100], [-5, 5]);

    const handleMouseMove = (e) => {
        if (!isFlipped) {
            const rect = cardRef.current.getBoundingClientRect();
            // Added damping factor of 0.3 to reduce movement sensitivity
            x.set((e.clientX - rect.left - rect.width / 2) * 0.3);
            y.set((e.clientY - rect.top - rect.height / 2) * 0.3);
        }
    };

    const handleMouseLeave = () => {
        // Smooth reset animation
        x.set(0, { duration: 0.5 });
        y.set(0, { duration: 0.5 });
    };

    return (
        <div className="relative w-2/3 md:w-80" style={{ perspective: '1000px', height: '400px' }}>
            <motion.div
                ref={cardRef}
                className="w-full h-full cursor-pointer"
                onMouseMove={handleMouseMove}
                onMouseLeave={handleMouseLeave}
                animate={{ rotateY: isFlipped ? 180 : 0 }}
                transition={{ duration: 0.6, type: "spring", stiffness: 100 }}
                style={{
                    position: 'relative',
                    transformStyle: 'preserve-3d',
                }}
            >
                {/* Front of card */}
                <motion.div
                    className={`absolute w-full h-full border border-zinc-400 rounded-lg bg-black p-3 flex flex-col items-center backface-hidden ${
                        isFlipped ? 'pointer-events-none' : ''
                    }`}
                    style={{
                        rotateX,
                        rotateY,
                        backfaceVisibility: 'hidden',
                        transition: 'transform 0.3s ease' // Smoother transition for hover effect
                    }}
                >
                    <div className="w-38 h-38 md:w-48 md:h-48 rounded overflow-hidden mb-3 mt-2 flex items-center justify-center">
                        {typeof photo === 'string' ? (
                            <img
                                src={photo}
                                alt={name}
                                className="w-full h-full object-cover"
                                onError={(e) => (e.target.src = "https://placehold.co/400x300/black/grey")}
                            />
                        ) : (
                            <div className="w-full h-full flex items-center justify-center">
                                {photo}
                            </div>
                        )}
                    </div>

                    <div className="text-center mb-2">
                        <h2 className="text-lg font-semibold text-slate-100">{name}</h2>
                        <p className="text-purple-400 text-sm">{position}</p>
                    </div>

                    <div className="text-center px-3">
                        <p className="text-slate-300 line-clamp-3">
                            {description}
                        </p>
                        <button
                            onClick={() => setIsFlipped(true)}
                            className="mt-2 text-xs px-2 py-1 bg-gradient-to-r from-purple-900 to-blue-700 text-white rounded hover:bg-blue-600 transition-all"
                        >
                            Read More
                        </button>
                    </div>
                </motion.div>

                {/* Back of card */}
                <motion.div
                    className={`absolute w-full h-full border border-zinc-400 rounded-lg bg-black p-6 flex flex-col backface-hidden ${
                        !isFlipped ? 'pointer-events-none' : ''
                    }`}
                    style={{
                        rotateY: 180,
                        backfaceVisibility: 'hidden',
                    }}
                >
                    <div className="flex flex-col h-full">
                        <h2 className="text-lg font-semibold text-slate-100 mb-2">{name}</h2>
                        <div className="flex-grow overflow-y-auto">
                            <p className="text-slate-300 text-sm">
                                {description}
                            </p>
                        </div>
                        <button
                            onClick={() => setIsFlipped(false)}
                            className="mt-4 text-xs px-2 py-1 bg-gradient-to-r from-purple-900 to-blue-700 text-white rounded hover:bg-blue-600 transition-all"
                        >
                            Back to Card
                        </button>
                    </div>
                </motion.div>
            </motion.div>

            <style jsx>{`
                .backface-hidden {
                    backface-visibility: hidden;
                    -webkit-backface-visibility: hidden;
                }
            `}</style>
        </div>
    );
};

export default ProjectCard;