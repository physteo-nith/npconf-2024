import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import './Events.css';
import Escape_room from '../../assets/events/Escape_room.png';
import Abraxas_day from '../../assets/events/Abraxas_day.jpg';
import guest_lecture from '../../assets/events/guest_lecture.jpg';
import AI_workshop from '../../assets/events/AI_workshop.png';
import { ArrowLeft } from 'lucide-react';

const EventsCard = () => {
  const [activeTab, setActiveTab] = useState('workshops');

  const workshopCards = [
    {
      id: 'workshop1',
      title: "Physics Carnival",
      image: Abraxas_day,
      description: "Remember, physics isn't just about memorizing formulas. It's about understanding how the world works. It's about asking 'what if?' and then finding the answer.✨ Two years of 'What if?' answered! ✨ Team Abraxas celebrates its anniversary with a Physics Carnival explosion! 🎉⚡ Join us at the Students' Park for an anniversary bash full of physics fun, games, and demos! 🧪🔬🎯Come celebrate our journey—it's gonna be a blast! 🚀 See you there! 😃"
    },
    {
      id: 'workshop2',
      title: "Physics Escape Room",
      image: Escape_room,
      description: "🔬✨Surrounded by puzzles and wicked clues.The silence hums with questions of a mystery.This isn’t just a game — it’s a Scientific Showdown! ⚡Team Abraxas brings you the 🧩 Escape Room Extravaganza!🧠 A physics-fueled adventure at Nimbus 2025📍 On Ground | 🗓 11th April (Day 1)💰 Price Pool - ₹5000 cash!Get ready to decode riddles and crack a cryptic case, and escape the room in a race againsttime⏳!Science buffs to thrill-seekers, the lab awaits your next move💥Are you fast enough? Smart enough? Brave enough?Let’s find out. 🔍"
    }
  ];

  const eventCards = [
    {
      id: 'event1',
      title: "AI Workshop",
      image: AI_workshop,
      description: "🚀 Hands-on AI Workshop | Team Abraxas 🤖Ever wondered how AI generates text, creates stunning artwork, or even holds human-like conversations? How does it actually work? If you've ever been curious about the magic of AI, now's your chance to explore it allTeam Abraxas invites you to an immersive AI workshop—a journey into the heart of artificial intelligence. Dive into the fascinating process of how AI learns, interprets, and generates outputs, from recognizing patterns to crafting meaningful and creative responses. Through hands-on activities, you'll get to explore its capabilities, and even challenge them to think beyond their programmed boundaries!Whether you're an absolute beginner or a seasoned tech enthusiast, this workshop is designed to spark your creativity and enhance your problem-solving skills like never before."
    },
    {
      id: 'event2',
      title: "Guest Lecture Series",
      image: guest_lecture,
      description: "⚡ Ever wondered how ancient minds cracked the code of the universe? 🏺✨ From celestial calculations to groundbreaking physics, their wisdom still echoes today! 🌌📜Team Abraxas invites you to a fascinating session with Dr. R.C. Verma 👨‍🏫, former professor at Panjab University, Chandigarh. A renowned physicist and educator, Dr. Verma has dedicated his career to unraveling the mysteries of physics and exploring the scientific marvels of ancient civilizations. His work bridges the gap between modern science and the deep-rooted knowledge of our ancestors, making complex concepts accessible and intriguing."
    }
  ];

  const Card = ({ card }) => {
    const [isFlipped, setIsFlipped] = useState(false);

    const handleFlip = (e) => {
      e.stopPropagation();
      setIsFlipped(!isFlipped);
    };

    return (
      <motion.div 
        className="relative md:w-[360px] md:h-[470px] w-[300px] h-[400px] perspective-1000 mx-auto mb-12 md:mb-0"
        initial={{ opacity: 0, y: 50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
      >
        <motion.div
          className="w-full h-full relative preserve-3d"
          animate={{ rotateY: isFlipped ? 180 : 0 }}
          transition={{ duration: 0.6, type: "spring", damping: 20 }}
        >
          <div 
            className="absolute w-full h-full backface-hidden rounded-2xl overflow-hidden"
            style={{ background: 'linear-gradient(to bottom, rgba(0,0,0,0.2), rgba(0,0,0,0.8))' }}
          >
            <img
              src={card.image}
              alt={card.title}
              className="absolute w-full h-full object-contain" // Changed from object-cover to object-contain
            />
            <div className="absolute bottom-0 w-full p-4 text-white">
              <h2 className="text-xl font-bold mb-2">{card.title}</h2>
              <p className="text-sm mb-3 opacity-90 line-clamp-2">{card.description}</p>
              <button 
                onClick={handleFlip}
                className="px-4 py-2 bg-gradient-to-r from-indigo-700 to-purple-700 rounded-lg text-sm font-medium transition-colors"
              >
                Read More
              </button>
            </div>
          </div>

          <div 
            className="absolute w-full h-full backface-hidden rotate-y-180 bg-slate-900/95 rounded-2xl p-4"
          >
            <div className="text-white h-full flex flex-col">
              <h2 className="text-xl font-bold mb-2">{card.title}</h2>
              <p className="text-sm leading-relaxed flex-grow overflow-y-auto">{card.description}</p>
              <button 
                onClick={handleFlip}
                className="mt-3 px-4 py-2 bg-gradient-to-r from-indigo-700 to-purple-700 rounded-lg text-sm font-medium transition-colors flex items-center gap-2 w-fit"
              >
                <ArrowLeft size={16} />
                Back to Card
              </button>
            </div>
          </div>
        </motion.div>
      </motion.div>
    );
  };

  return (
    <div className="min-h-screen bg-[#0A0B1A] relative py-12 px-6 overflow-hidden">
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute inset-0" 
          style={{
            backgroundImage: `radial-gradient(2px 2px at calc(100% * var(--x)) calc(100% * var(--y)), white, transparent)`,
            backgroundSize: '200px 200px',
            transform: 'translate(0px, 0px)',
            '--x': 0.5,
            '--y': 0.5,
          }}
        />
      </div>

      <div className="relative z-10 max-w-7xl mx-auto">
        <div className="flex justify-center gap-6 mb-10">
          <button
            onClick={() => setActiveTab('workshops')}
            className={`px-8 py-3 rounded-xl text-lg font-medium transition-all duration-300 
              ${activeTab === 'workshops' 
                ? 'bg-gradient-to-r from-indigo-700 to-purple-700 text-white shadow-lg shadow-indigo-500/25' 
                : 'bg-slate-800/50 text-gray-300 hover:bg-slate-700/50'}`}
          >
            Workshops
          </button>
          <button
            onClick={() => setActiveTab('events')}
            className={`px-8 py-3 rounded-xl text-lg font-medium transition-all duration-300 
              ${activeTab === 'events' 
                ? 'bg-gradient-to-r from-indigo-700 to-purple-700 text-white shadow-lg shadow-indigo-500/25' 
                : 'bg-slate-800/50 text-gray-300 hover:bg-slate-700/50'}`}
          >
            Events
          </button>
        </div>

        <AnimatePresence mode="wait">
          <motion.div
            key={activeTab}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.3 }}
            className="grid grid-cols-1 md:grid-cols-2 gap-0 md:gap-8"
          >
            {(activeTab === 'workshops' ? workshopCards : eventCards).map(card => (
              <Card key={card.id} card={card} />
            ))}
          </motion.div>
        </AnimatePresence>
      </div>
    </div>
  );
};

export default EventsCard;