import React, { useState, useEffect } from 'react';  

const IntroAnimation = ({ onComplete }) => {   
  const [textOpacity, setTextOpacity] = useState(0);   
  const [textBlur, setTextBlur] = useState(20); // Start with maximum blur
  const [fadeOut, setFadeOut] = useState(false);    

  useEffect(() => {     
    // Stage 1 (0-2 seconds): Fade in and stay blurred
    const initialStageTimer = setTimeout(() => {       
      setTextOpacity(1);
    }, 500);      

    // Stage 2 (2-4 seconds): Gradually reduce blur from left to right
    const blurReductionTimer = setInterval(() => {
      setTextBlur(prevBlur => Math.max(0, prevBlur - 1));
    }, 100); // Slower blur reduction

    // Stage 3 (4-6 seconds): Prepare to land on landing page
    const fadeTimer = setTimeout(() => {       
      setFadeOut(true);     
    }, 5000);      

    // Complete animation and transition to landing page
    const completeTimer = setTimeout(() => {       
      onComplete();     
    }, 4400);      

    return () => {       
      clearTimeout(initialStageTimer);
      clearInterval(blurReductionTimer);       
      clearTimeout(fadeTimer);       
      clearTimeout(completeTimer);     
    };   
  }, [onComplete]);    

  return (     
    <div        
      className={`fixed inset-0 z-50 bg-black         
        ${fadeOut ? 'opacity-0' : 'opacity-100'}         
        transition-opacity duration-1000`}     
    >       
      {/* Text container */}       
      <div          
        className={`absolute inset-0 flex items-center justify-center`}       
      >         
        <div            
          className={`text-center transition-opacity duration-1000`}           
          style={{ 
            opacity: textOpacity,
            filter: `blur(${textBlur}px)`,
            transition: 'filter 2s ease-out'
          }}         
        >           
          <p 
            className="text-3xl md:text-3xl font-thin font-mono text-white
              tracking-widest "           
          >             
            Just a moment
          </p>         
        </div>       
      </div>     
    </div>   
  ); 
};  

export default IntroAnimation;