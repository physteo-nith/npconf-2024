import React, { useState } from 'react';
import { FaLinkedin, FaGithub, FaInstagram, FaTwitter } from 'react-icons/fa';
import { IoIosArrowDown, IoIosArrowUp } from 'react-icons/io';
import { motion, useAnimation } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import emailjs from 'emailjs-com';
import faqsData from './faqs.json';

const FAQ = () => {
    const [faqs] = useState(faqsData);
    const [activeIndex, setActiveIndex] = useState(null);
    const controls = useAnimation();
    const [ref, inView] = useInView({ triggerOnce: true });
    const [formData, setFormData] = useState({
        to_name: '',
        from_name: '',
        message: ''
    });
    const [loading, setLoading] = useState(false);

    const toggleFAQ = (index) => {
        setActiveIndex(activeIndex === index ? null : index);
    };

    const handleChange = (e) => {
        setFormData({ ...formData, [e.target.name]: e.target.value });
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        setLoading(true);

        emailjs.sendForm('service_7wjwhjz', 'template_c4vix68', e.target, 'k0Pzk-CjxMe24DpZY')
            .then((result) => {
                setLoading(false);
                alert('Message sent successfully!');
                setFormData({
                    to_name: '',
                    from_name: '',
                    message: ''
                });
            }, (error) => {
                setLoading(false);
                console.error(error.text);
                alert('An error occurred, please try again.');
            });
    };

    const containerVariants = {
        hidden: { opacity: 0, y: 50 },
        visible: { opacity: 1, y: 0, transition: { staggerChildren: 0.05 } }
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
                    <h1 className="text-3xl font-bold mb-6 text-center text-slate-300 sticky top-0 bg-neutral-400 bg-opacity-30 backdrop-filter flex items-center justify-center backdrop-blur-lg rounded-lg py-4" style={{ zIndex: 10 }}>
                        <span className="bg-gradient-to-r from-orange-500 to-orange-800 text-transparent bg-clip-text">
                            Frequently Asked Questions
                        </span>
                    </h1>
                    {faqs.map((faq, index) => (
                        <motion.div
                            key={index}
                            className="mb-4"
                            variants={itemVariants}
                        >
                            <div
                                className="cursor-pointer bg-gray-700 p-3 rounded-lg flex justify-between items-center"
                                onClick={() => toggleFAQ(index)}
                            >
                                <h3 className="font-semibold">{faq.question}</h3>
                                <span>{activeIndex === index ? <IoIosArrowUp /> : <IoIosArrowDown />}</span>
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
                    <h1 className="text-4xl font-bold text-slate-300 text-center"> <span className="bg-gradient-to-r from-orange-500 to-orange-800 text-transparent bg-clip-text">
                        Contact Us
                    </span></h1>

                    <form className="w-full max-w-lg mt-4 bg-gray-700 p-6 rounded-lg" onSubmit={handleSubmit}>
                        <div className="mb-4">
                            <label className="block text-slate-300 text-sm font-bold mb-2" htmlFor="to_name">
                                Name
                            </label>
                            <input
                                className="w-full p-2 bg-slate-800 text-slate-50 rounded-lg focus:outline-none"
                                type="text"
                                id="to_name"
                                name="to_name"
                                value={formData.to_name}
                                onChange={handleChange}
                                placeholder="Your Name"
                                required
                            />
                        </div>
                        <div className="mb-4">
                            <label className="block text-slate-300 text-sm font-bold mb-2" htmlFor="from_name">
                                Email
                            </label>
                            <input
                                className="w-full p-2 bg-slate-800 text-slate-50 rounded-lg focus:outline-none"
                                type="email"
                                id="from_name"
                                name="from_name"
                                value={formData.from_name}
                                onChange={handleChange}
                                placeholder="Your Email"
                                required
                            />
                        </div>
                        <div className="mb-4">
                            <label className="block text-slate-300 text-sm font-bold mb-2" htmlFor="message">
                                Message
                            </label>
                            <textarea
                                className="w-full p-2 bg-slate-800 text-slate-50 rounded-lg focus:outline-none"
                                id="message"
                                name="message"
                                rows="4"
                                value={formData.message}
                                onChange={handleChange}
                                placeholder="Your Message"
                                required
                            ></textarea>
                        </div>
                        <div className="flex items-center justify-between">
                            <button
                                className="bg-blue-500 hover:bg-blue-600 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
                                type="submit"
                            >
                                {loading ? "Sending..." : "Send"}
                            </button>
                        </div>
                    </form>
                    <div className="flex space-x-8 mt-4">
                        <a href="https://www.linkedin.com/in/physteo-nith-34a405255/" target="_blank" rel="noopener noreferrer" className="text-4xl text-blue-600 hover:text-blue-800 transition-colors duration-300 icon-hover">
                            <FaLinkedin />
                        </a>
                        <a href="https://github.com/physteo-nith/" target="_blank" rel="noopener noreferrer" className="text-4xl text-blue hover:text-blue-800 transition-colors duration-300 icon-hover">
                            <FaGithub />
                        </a>
                        <a href="https://www.instagram.com/physteo?igsh=enh1NWFucDJ5NGc4/" target="_blank" rel="noopener noreferrer" className="text-4xl text-blue hover:text-blue-800 transition-colors duration-300 icon-hover">
                            <FaInstagram />
                        </a>
                        <a href="https://x.com/physteo?t=_nhVeLqYEwVic5EQpb4BvQ&s=09/" target="_blank" rel="noopener noreferrer" className="text-4xl text-blue-500 hover:text-blue-800 transition-colors duration-300 icon-hover">
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
