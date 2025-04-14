import React, { useEffect } from 'react';
import { TwitterTweetEmbed } from 'react-twitter-embed';

const Socialwall = () => {
    useEffect(() => {
        // Load Twitter widgets script
        const script = document.createElement('script');
        script.src = "https://platform.twitter.com/widgets.js";
        script.async = true;
        document.body.appendChild(script);
    }, []);

    return (
        <div className="max-w-screen-xl mx-auto py-4 px-4 sm:px-6 lg:px-8">
            <h2 className="text-3xl md:text-5xl font-bold text-white mb-4 md:mb-5 text-center">Our {" "}
                <span className="bg-gradient-to-r from-orange-500 to-orange-800 text-transparent bg-clip-text">
                    Social Wall
                </span></h2>
            <p className="text-center text-gray-300 text-xl md:text-2xl mb-6 md:mb-8">Get updated on our latest events and workshops</p>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4 md:gap-8">
                {/* <div className="bg-white shadow-md rounded-lg p-2 md:p-4">
                    <TwitterTweetEmbed tweetId="1806178714134176000" options={{ height: '250px' }} />
                </div>
                <div className="bg-white shadow-md rounded-lg p-2 md:p-4 hidden md:block">
                    <iframe
                        src="https://www.linkedin.com/embed/feed/update/urn:li:share:7211943110178684928"
                        className="w-full md:h-[900px] h-[300px]"
                        frameBorder="0"
                        allowFullScreen=""
                        title="Embedded LinkedIn post">
                    </iframe>
                </div> */}
            </div>
        </div>
    );
}

export default Socialwall;
