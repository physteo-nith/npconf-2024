import React from 'react';
import { useInView } from 'react-intersection-observer';

const TimelineEvent = ({ date, events }) => {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.2
  });

  return (
    <div ref={ref} className="relative w-full md:w-1/2 lg:w-1/3 xl:w-1/6 px-4 mb-12 pl-8">
      <div className={`transform transition-all duration-1000 ${
        inView ? 'translate-y-0 opacity-100' : 'translate-y-8 opacity-0'
      }`}>
        <div className="text-lg font-bold mb-14 text-gray-200">
          {date}
        </div>

        {/* Timeline Line with Moving Dot */}
        <div className="absolute left-4 w-px bg-transparent top-0 mt-10 overflow-hidden h-full">
          <div className={`w-px bg-gray-600 h-full transform origin-top transition-transform duration-1000 ${
            inView ? 'scale-y-100' : 'scale-y-0'
          }`} />

          <div className={`w-4 h-4 rounded-full bg-white absolute left-1/2 transform -translate-x-1/2 
            transition-all duration-1000 ${
            inView ? 'scale-100 opacity-100' : 'scale-0 opacity-0'
          }`}>
            <div className="absolute w-full h-full rounded-full bg-white animate-ping opacity-75" />
          </div>

          <div className={`absolute left-1/2 transform -translate-x-1/2 transition-all duration-1000 ${
            inView ? 'opacity-100' : 'opacity-0'
          }`}>
            <div className={`w-4 h-4 rounded-full bg-white 
              shadow-[0_0_15px_rgba(255,255,255,0.8)] 
              animate-moveDown
              transition-colors duration-1000`}>
              <div className="absolute inset-0 rounded-full 
                bg-gradient-to-b from-white via-blue-400 to-blue-600 
                opacity-0 animate-colorChange" />
            </div>
          </div>

          <div className={`w-4 h-4 rounded-full bg-blue-500 absolute left-1/2 transform -translate-x-1/2 bottom-0
            transition-all duration-1000 ${
            inView ? 'scale-100 opacity-100' : 'scale-0 opacity-0'
          }`}>
            <div className="absolute w-full h-full rounded-full bg-blue-400 animate-pulse opacity-75" />
          </div>
        </div>

        {/* Events Container */}
        <div className="space-y-4 relative">
          {events.map((event, index) => (
            <div
              key={index}
              className={`relative p-4 rounded-lg shadow-lg transform transition-all duration-1000 
                group overflow-hidden
                ${inView ? 'translate-y-0 opacity-100' : 'translate-y-4 opacity-0'}`}
              style={{ 
                transitionDelay: `${index * 200}ms`,
                background: 'linear-gradient(to right, rgba(31, 41, 55, 0.8), rgba(31, 41, 55, 0.8))'
              }}
            >
              {/* Animated gradient overlay */}
              <div className="absolute inset-0 bg-gradient-to-r from-gray-800/80 via-purple-900/80 to-purple-800/80 
                translate-x-[-100%] group-hover:translate-x-0 transition-transform duration-500 ease-in-out" />
              
              {/* Content */}
              <div className="relative z-10">
                <div className="font-semibold text-gray-200 mb-1">
                  {event.date}: {event.title}
                </div>
                {event.subtitle && (
                  <div className="text-sm text-gray-400">{event.subtitle}</div>
                )}
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

const Timeline = () => {
  const timelineData = [
    {
      month: 'November 2024',
      events: [
        { date: '16', title: 'Sophomore Interviews' },
      ]
    },
    {
      month: 'December 2024',
      events: [
        { date: '28', title: 'Resume Buildiing Internal Workshop' },
      ]
    },
    {
      month: 'January 2025',
      events: [
        { date: '17', title: 'Nimbus Orientation', subtitle: 'Introducing Abraxas to Freshmen' },
        { date: '18 & 19', title: 'Freshmen Interviews' }
      ]
    },
    {
      month: 'February 2025',
      events: [
        { date: '15', title: 'Innovision' }
      ]
    },
    {
      month: 'March 2025',
      events: [
        { date: '10', title: 'National Science Day',subtitle: 'Departmental Celebration' },
        { date: '18', title: 'INSIDE AI: Workshop' },
        { date: '22', title: 'Physics Carnival',subtitle:'Abraxas Day' },
        { date: '24', title: 'Guest Lecture', subtitle: 'by Dr. R.C.Verma' }
      ]
    },
    {
      month: 'April 2025',
      events: [
        { date: '11', title: 'Locked In Time', subtitle: 'Physics Escape Room' },
        { date: '12', title: 'Aurora', subtitle: 'Archway To Future ' },
        { date: '13', title: 'Physics Arena' }
      ]
    }
  ];

  return (
    <div className="min-h-screen bg-gray-900 p-4 md:p-8">
      <style jsx global>{`
        @keyframes moveDown {
          0% { transform: translate(-50%, 0); }
          100% { transform: translate(-50%, 100%); }
        }

        @keyframes colorChange {
          0% { opacity: 0; }
          50% { opacity: 1; }
          100% { opacity: 0; }
        }

        .animate-moveDown {
          animation: moveDown 2s ease-in-out infinite;
        }

        .animate-colorChange {
          animation: colorChange 2s ease-in-out infinite;
        }

        @media (max-width: 1024px) {
          .timeline-container {
            height: calc(100vh - 8rem);
            overflow-y: auto;
            scrollbar-width: thin;
            scrollbar-color: rgba(156, 163, 175, 0.5) rgba(31, 41, 55, 0.5);
          }

          .timeline-container::-webkit-scrollbar {
            width: 6px;
          }

          .timeline-container::-webkit-scrollbar-track {
            background: rgba(31, 41, 55, 0.5);
            border-radius: 3px;
          }

          .timeline-container::-webkit-scrollbar-thumb {
            background-color: rgba(156, 163, 175, 0.5);
            border-radius: 3px;
          }
        }
      `}</style>
      <h1 className="text-4xl font-bold text-white mb-12 text-center font-serif">
        TIMELINE
      </h1>
      <div className="timeline-container">
        <div className="flex flex-col md:flex-row flex-wrap justify-center max-w-7xl mx-auto">
          {timelineData.map((month, index) => (
            <TimelineEvent
              key={index}
              date={month.month}
              events={month.events}
            />
          ))}
        </div>
      </div>
    </div>
  );
};

export default Timeline;