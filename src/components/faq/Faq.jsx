import React, { useState } from 'react';
import { FaLinkedin, FaGithub, FaInstagram, FaTwitter } from 'react-icons/fa';
import { motion, useAnimation } from 'framer-motion';
import { useInView } from 'react-intersection-observer';

const FAQ = () => {
    const [activeIndex, setActiveIndex] = useState(null);
    const controls = useAnimation();
    const [ref, inView] = useInView({ triggerOnce: true });

    const toggleFAQ = (index) => {
        setActiveIndex(activeIndex === index ? null : index);
    };

    const faqs = [
        {
            question: "What is the purpose of physics conference?",
            answer: "The purpose of a physics conference is to bring together scientists, researchers, and students to share their latest research findings, discuss current issues in the field, and network with peers."
        },
        {
            question: "How often are physics conferences held?",
            answer: "Physics conferences are typically held annually or biannually, depending on the organizing body and the specific field of study."
        },
        {
            question: "Who can attend physics conferences?",
            answer: "Physics conferences are generally open to scientists, researchers, students, and sometimes the general public, depending on the conference's scope and objectives."
        },
        {
            question: "What are the benefits of attending a physics conference?",
            answer: "Attending a physics conference provides opportunities for networking, professional development, staying updated with the latest research, and sharing your own work with the community."
        },
        {
            question: "How can I submit my research to a physics conference?",
            answer: "Research submissions are typically handled through the conference's official website, where you can find guidelines and deadlines for abstract or full paper submissions."
        },
        {
            question: "Are there any virtual physics conferences?",
            answer: "Yes, many organizations have started hosting virtual physics conferences to accommodate participants who cannot travel, offering the same benefits as in-person events."
        },
        {
            question: "What should I prepare before attending a physics conference?",
            answer: "Before attending a physics conference, you should prepare your research presentation, bring business cards, and review the conference schedule to plan which sessions to attend."
        },
        {
            question: "Can I network effectively at virtual conferences?",
            answer: "Yes, virtual conferences often provide networking opportunities through chat rooms, discussion forums, and virtual meeting spaces."
        },
        {
            question: "How do I find upcoming physics conferences?",
            answer: "You can find upcoming physics conferences by searching online, checking with professional organizations, and subscribing to academic journals and newsletters."
        },
        {
            question: "Are there any costs associated with attending physics conferences?",
            answer: "Yes, attending physics conferences typically involves registration fees, and if the conference is in-person, travel and accommodation costs as well."
        }
    ];

    const containerVariants = {
        hidden: { opacity: 0, y: 50 },
        visible: { opacity: 1, y: 0, transition: { staggerChildren: 0.2 } }
    };

    const itemVariants = {
        hidden: { opacity: 0, y: 50 },
        visible: { opacity: 1, y: 0 }
    };

    if (inView) {
        controls.start('visible');
    }

    return (
        <div className="min-h-screen bg-black flex items-center justify-center p-4">
            <motion.div
                ref={ref}
                className="w-full h-fit max-w-5xl bg-neutral-400 bg-opacity-30 backdrop-filter backdrop-blur-lg p-6 rounded-lg shadow-md flex flex-col md:flex-row"
                initial="hidden"
                animate={controls}
                variants={containerVariants}
            >
                {/* FAQ Section */}
                <div className="md:w-1/2 md:pr-4 h-112 overflow-y-auto">
                    <h1 className="text-3xl font-bold mb-6 text-slate-300 sticky top-0 bg-neutral-400 bg-opacity-30 backdrop-filter flex items-center justify-center backdrop-blur-lg rounded-lg py-4">
                        Frequently asked questions
                    </h1>
                    {faqs.map((faq, index) => (
                        <motion.div
                            key={index}
                            className="mb-4"
                            variants={itemVariants}
                        >
                            <div
                                className="cursor-pointer bg-gray-700 p-4 rounded-lg flex justify-between items-center"
                                onClick={() => toggleFAQ(index)}
                            >
                                <h3 className="font-semibold">{faq.question}</h3>
                                <span>{activeIndex === index ? '-' : '+'}</span>
                            </div>
                            {activeIndex === index && (
                                <div className="bg-gray-600 p-4 rounded-lg mt-2">
                                    <p>{faq.answer}</p>
                                </div>
                            )}
                        </motion.div>
                    ))}
                </div>

                {/* Contact Us Section */}
                <motion.div
                    className="md:w-1/2 md:pl-4 mt-6 md:mt-0 flex flex-col items-center justify-center"
                    variants={itemVariants}
                >
                    <h1 className="text-4xl font-bold mb-8 text-slate-300 text-center">Contact Us</h1>
                    <div className="flex space-x-8">
                        <a href="https://www.linkedin.com/in/physteo-nith-34a405255/" className="text-4xl text-blue-600 hover:text-blue-800 transition-colors duration-300 icon-hover">
                            <FaLinkedin />
                        </a>
                        <a href="https://github.com/physteo-nith" className="text-4xl text-blue hover:text-gray-700 transition-colors duration-300 icon-hover">
                            <FaGithub />
                        </a>
                        <a href="https://www.instagram.com/physteo?igsh=enh1NWFucDJ5NGc4" className="text-4xl text-blue hover:text-pink-800 transition-colors duration-300 icon-hover">
                            <FaInstagram />
                        </a>
                        <a href="https://x.com/physteo?t=_nhVeLqYEwVic5EQpb4BvQ&s=09" className="text-4xl text-blue-500 hover:text-blue-700 transition-colors duration-300 icon-hover">
                            <FaTwitter />
                        </a>
                    </div>
                </motion.div>
            </motion.div>
            <style jsx>{`
                .icon-hover:hover {
                    transform: scale(1.3); /* Increase size on hover */
                }
                .h-112 {
                    height: 28rem; /* Custom height */
                }
            `}</style>
        </div>
    );
};

export default FAQ;
