import React, { useEffect } from 'react';
import { motion, useAnimation } from 'framer-motion';

const starVariants = {
    initial: {
        opacity: 0,
        x: 0,
        y: 0,
    },
    animate: (custom) => ({
        opacity: 0.5,
        x: custom.x,
        y: custom.y,
        transition: {
            duration: 1,
            ease: 'easeInOut',
        },
    }),
    exit: {
        opacity: 0,
        transition: {
            duration: 1,
            ease: 'easeInOut',
        },
    },
};

const Star = ({ src }) => {
    const controls = useAnimation();

    useEffect(() => {
        const animateStar = () => {
            const x = Math.random() * window.innerWidth * 0.8 - window.innerWidth * 0.4;
            const y = Math.random() * window.innerHeight * 0.8 - window.innerHeight * 0.4;
            controls.start({
                x,
                y,
                opacity: [0, 1, 0],
                transition: {
                    duration: 2,
                    ease: 'easeInOut',
                },
            });
        };

        animateStar();
        const interval = setInterval(animateStar, 5000);
        return () => clearInterval(interval);
    }, [controls]);

    return (
        <motion.img
            src={src}
            alt="star"
            className="absolute"
            initial="initial"
            animate={controls}
            variants={starVariants}
        />
    );
};

export default Star;
