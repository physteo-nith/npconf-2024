import React, { useState } from 'react';
import { FaLinkedin, FaGithub, FaInstagram, FaTwitter } from 'react-icons/fa';
import { IoIosArrowDown, IoIosArrowUp } from 'react-icons/io';
import { motion, useAnimation } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import emailjs from 'emailjs-com';
import ContactsData from './Contacts.json';

const Contact = () => {
    const [Contacts] = useState(ContactsData);
    const [activeIndex, setActiveIndex] = useState(null);
    const controls = useAnimation();
    const [ref, inView] = useInView({ triggerOnce: true });
    const [formData, setFormData] = useState({
        to_name: '',
        from_name: '',
        message: ''
    });
    const [loading, setLoading] = useState(false);

    const toggleContact = (index) => {
        setActiveIndex(activeIndex === index ? null : index);
    };

    const handleChange = (e) => {
        setFormData({ ...formData, [e.target.name]: e.target.value });
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        setLoading(true);

        emailjs.sendForm('service_ku5tyb3', 'template_6jqzaku', e.target, 'k0Pzk-CjxMe24DpZY')
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
                className="w-full max-w-5xl  bg-opacity-30 backdrop-filter backdrop-blur-lg p-4 md:p-6 rounded-lg shadow-md flex flex-col md:flex-row md:justify-center"
                initial="hidden"
                animate={controls}
                variants={containerVariants}
            >
                {/* Contact Us Section */}
                <motion.div
                    className="w-full md:w-1/2 md:pl-4 mt-6 md:mt-0 flex flex-col items-center justify-center"
                    variants={itemVariants}
                >
                    <h1 className="text-3xl md:text-4xl font-bold text-slate-300 text-center">
                        <span className="bg-gradient-to-r from-purple-900 to-blue-700 text-transparent bg-clip-text">
                            Contact Us
                        </span>
                    </h1>

                    <form className="w-full max-w-lg mt-4 bg-gray-700 p-4 md:p-6 rounded-lg" onSubmit={handleSubmit}>
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
                    <div className="flex space-x-6 md:space-x-8 mt-4">
                        <a href="https://www.linkedin.com/company/abraxas-nith/mycompany/" target="_blank" rel="noopener noreferrer" className="text-3xl md:text-4xl text-blue-600 hover:text-blue-800 transition-colors duration-300 icon-hover">
                            <FaLinkedin />
                        </a>
                        <a href="https://github.com/Team-Abraxas" target="_blank" rel="noopener noreferrer" className="text-3xl md:text-4xl text-blue hover:text-blue-800 transition-colors duration-300 icon-hover">
                            <FaGithub />
                        </a>
                        <a href="https://www.instagram.com/team_abraxas" target="_blank" rel="noopener noreferrer" className="text-3xl md:text-4xl text-blue hover:text-blue-800 transition-colors duration-300 icon-hover">
                            <FaInstagram />
                        </a>
                    </div>
                </motion.div>
            </motion.div>
            <style jsx>{`
                .icon-hover:hover {
                    transform: scale(1.3); /* Increase size on hover */
                }
            `}</style>
        </div>
    );
};

export default Contact;