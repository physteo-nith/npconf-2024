import React from 'react';

const Footer = () => {
    return (
        <footer className="bg-slate-900 py-6 sm:py-8 px-3 sm:px-6  lg:px-8">
            <div className="max-w-screen-xl mx-auto grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
                {/* About */}
                <div>
                    <div className="flex items-center mb-3">
                        <img 
                            src="/abraxas.jpeg" 
                            alt="SRM NPC 2024 Logo" 
                            className="h-10 w-10 sm:h-12 sm:w-12 rounded-full object-cover" 
                        />
                        <h2 className="text-white ml-3 sm:ml-4 text-xl sm:text-2xl">Abraxas</h2>
                    </div>
                    <p className="text-slate-200 text-sm sm:text-base line-clamp-4 sm:line-clamp-none">
                        The engineering physics branch's departmental club is Team Abraxas - a vibrant community of individuals fueled by passion, creativity, and technology. Let's ignite your curiosity, spark new ideas and demonstrate your expertise.
                    </p>
                </div>

                {/* Quick Links */}
                <div className="mt-2 sm:mt-0">
                    <h2 className="font-semibold text-base sm:text-lg mb-3 sm:mb-4 text-white">Quick Links</h2>
                    <div className="grid grid-cols-2 gap-2 sm:gap-4">
                        <ul className="space-y-2 text-gray-300 text-sm sm:text-base">
                            <li><a href="/#" className="hover:underline">Home</a></li>
                            <li><a href="/#About" className="hover:underline">About</a></li>
                            <li><a href="/#Projects" className="hover:underline">Projects</a></li>
                            <li><a href="/#Events" className="hover:underline">Events</a></li>
                        </ul>
                        <ul className="space-y-2 text-gray-300 text-sm sm:text-base">
                            <li><a href="/Gallery" className="hover:underline">Gallery</a></li>
                            <li><a href="/#Timeline" className="hover:underline">Timeline</a></li>
                            <li><a href="/Team" className="hover:underline">Team</a></li>
                            <li><a href="/#Contact" className="hover:underline">Contact</a></li>
                        </ul>
                    </div>
                </div>

                {/* Contact Info */}
                <div className="mt-2 sm:mt-0">
                    <h2 className="font-semibold text-base sm:text-lg mb-3 sm:mb-4 text-white">Contact Info</h2>
                    <div className="text-gray-300 text-sm sm:text-base">
                        <strong className="block text-sm sm:text-base">Department of Physics and Photonics Science</strong>
                        <p className="mt-2">NIT Hamirpur-177005, Hamirpur(H.P.)</p>
                        <div className="mt-3 sm:mt-4 w-full">
                            <iframe
                                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d4711.614329452839!2d76.5232916401509!3d31.707890413851345!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3904d414dbcbe5a9%3A0xc507ee79945d6bd6!2sPhysics%20Department!5e1!3m2!1sen!2sin!4v1720333486211!5m2!1sen!2sin"
                                className="w-full h-32 sm:h-48 border-2 border-gray-300 rounded-lg"
                                allowFullScreen=""
                                loading="lazy"
                                referrerPolicy="no-referrer-when-downgrade"
                            ></iframe>
                        </div>
                    </div>
                </div>
            </div>

            {/* Copyright */}
            <div className="mt-6 sm:mt-8 pt-4 sm:pt-6 border-t border-gray-700 text-center">
                <p className="text-gray-400 text-xs sm:text-sm">
                    © {new Date().getFullYear()} Abraxas. All Rights Reserved.
                </p>
            </div>
        </footer>
    );
}

export default Footer;