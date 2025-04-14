import React from 'react';

const Footer = () => {
    return (
        <footer className="bg-slate-900 py-8 px-4 sm:px-6 mt-64 lg:px-8">
            <div className="max-w-screen-xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-8">
                <div>
                    <div className="flex items-center mb-4">
                        <img src="/physteo.jpeg" alt="SRM NPC 2024 Logo" className="h-12 rounded-full" />
                        <h2 className="text-white ml-4 text-2xl">Physteo</h2>
                    </div>
                    <p className="text-slate-200">
                        National Physicists’ Conclave 2024, a prestigious gathering of physicists, physics enthusiasts,
                        researchers, and experts from across India. This event promises an exhilarating convergence of
                        brilliant minds, groundbreaking research, and inspiring talks. Prepare to journey to the cutting
                        edge of scientific discovery, connect with esteemed physicists, and kindle your passion for the
                        mysteries of the universe.
                    </p>
                </div>
                <div className="hidden md:block">
                    <h2 className="font-semibold text-lg mb-4">Quick links</h2>
                    <ul className="space-y-2 text-gray-700">
                        <li><a href="/#" className="hover:underline">Home</a></li>
                        <li><a href="/#About" className="hover:underline">About</a></li>
                        <li><a href="/#Speakers" className="hover:underline">Speakers</a></li>
                        <li><a href="/#Socialwall" className="hover:underline">Social Wall</a></li>
                        <li><a href="/Paper_call" className="hover:underline">Call for Papers</a></li>
                        <li><a href="/#Sponsors" className="hover:underline">Sponsors</a></li>
                        <li><a href="/Team" className="hover:underline">Team</a></li>
                        <li><a href="/#FAQ" className="hover:underline">FAQ</a></li>
                        <li><a href="/#FAQ" className="hover:underline">Contact</a></li>
                    </ul>
                </div>
                <div>
                    <h2 className="font-semibold text-lg mb-4">Contact Info</h2>
                    <p className="text-gray-300">
                        <strong>Department of Physics and Photonics science</strong><br />
                        NIT Hamirpur-177005, Hamirpur(H.P.)<br />
                        <iframe
                            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d4711.614329452839!2d76.5232916401509!3d31.707890413851345!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3904d414dbcbe5a9%3A0xc507ee79945d6bd6!2sPhysics%20Department!5e1!3m2!1sen!2sin!4v1720333486211!5m2!1sen!2sin"
                            width="100%"
                            height="250"
                            className="border-2 border-gray-300 rounded-lg"
                            allowFullScreen=""
                            loading="lazy"
                            referrerPolicy="no-referrer-when-downgrade">
                        </iframe>
                        <a href="tel:91-8757489128" className="hover:underline">+91-8757489128</a><br />
                        <a href="mailto:shabdpatel0@gmail.com" className="hover:underline">shabdpatel0@gmail.com</a>
                    </p>
                </div>
            </div>
        </footer>
    );
}

export default Footer;
