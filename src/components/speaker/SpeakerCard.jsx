import React from 'react';

const SpeakerCard = ({ photo, name, position, description }) => {
    return (
        <div className="relative w-full sm:w-72 h-96 bg-white rounded-lg overflow-hidden shadow-lg flex-shrink-0">
            <div className="absolute inset-0 bg-cover bg-center" style={{ backgroundImage: `url(${photo})` }}></div>
            <div className="absolute inset-0 bg-black bg-opacity-40 flex flex-col justify-end p-4">
                <h2 className="text-lg font-bold text-indigo-50">{name}</h2>
                <p className="text-indigo-50 text-1xl">{position}</p>
            </div>
            <div className="absolute inset-0 bg-black bg-opacity-70 flex items-center justify-center p-4 opacity-0 hover:opacity-100 transition-opacity duration-300">
                <p className="text-white">{description}</p>
            </div>
        </div>
    );
};

export default SpeakerCard;
