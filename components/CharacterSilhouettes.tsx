import React from 'react';

export const CharacterSilhouettes: React.FC = () => {
  return (
    <div className="fixed bottom-0 left-0 w-full h-[40vh] pointer-events-none z-0 overflow-hidden">
       {/* Fog at bottom */}
       <div className="absolute bottom-0 w-full h-full bg-gradient-to-t from-black via-transparent to-transparent z-10"></div>
       
       <svg 
         viewBox="0 0 1000 300" 
         preserveAspectRatio="xMidYMax meet" 
         className="w-full h-full opacity-90 absolute bottom-0"
       >
         <defs>
            <filter id="static-glow">
              <feGaussianBlur stdDeviation="1.5" result="coloredBlur"/>
              <feMerge>
                <feMergeNode in="coloredBlur"/>
                <feMergeNode in="SourceGraphic"/>
              </feMerge>
            </filter>
         </defs>

         {/* Ground */}
         <path d="M0 280 Q 200 270 500 280 T 1000 280 L 1000 300 L 0 300 Z" fill="#080808" />
         
         {/* --- Characters (Silhouettes) --- */}
         
         {/* Lucas on Bike */}
         <g transform="translate(150, 210) scale(0.6)">
            <path d="M40 0 L50 20 L30 40 L60 40 L60 60 L40 60 L30 80 L50 80" stroke="black" strokeWidth="8" fill="none" />
            <circle cx="45" cy="10" r="10" fill="black" /> {/* Head */}
            <circle cx="20" cy="80" r="25" stroke="black" strokeWidth="4" fill="none" /> {/* Wheel */}
            <circle cx="80" cy="80" r="25" stroke="black" strokeWidth="4" fill="none" /> {/* Wheel */}
            <path d="M45 40 L70 50" stroke="black" strokeWidth="3" /> {/* Handlebars */}
         </g>

         {/* Mike on Bike */}
         <g transform="translate(300, 200) scale(0.65)">
            <path d="M40 0 L50 25 L30 45 L60 45 L60 65 L40 65 L30 85 L50 85" stroke="black" strokeWidth="8" fill="none" />
            <circle cx="45" cy="10" r="10" fill="black" />
            <circle cx="20" cy="85" r="25" stroke="black" strokeWidth="4" fill="none" />
            <circle cx="80" cy="85" r="25" stroke="black" strokeWidth="4" fill="none" />
         </g>
         
         {/* Eleven Standing (Center) using powers */}
         <g transform="translate(500, 180) scale(0.7)">
            {/* Body */}
            <path d="M-10 120 L-15 40 L-25 40 L-20 10 L20 10 L25 40 L15 40 L10 120 Z" fill="black" />
            {/* Head */}
            <circle cx="0" cy="0" r="15" fill="black" />
            {/* Arm extended */}
            <path d="M15 40 L50 35" stroke="black" strokeWidth="6" strokeLinecap="round" />
            {/* Shadow/Aura */}
            <ellipse cx="0" cy="125" rx="30" ry="5" fill="rgba(0,0,0,0.5)" />
         </g>

         {/* Dustin on Bike */}
         <g transform="translate(680, 205) scale(0.6)">
            <path d="M40 0 L50 20 L30 40 L60 40 L60 60 L40 60 L30 80 L50 80" stroke="black" strokeWidth="9" fill="none" />
            <circle cx="45" cy="10" r="11" fill="black" /> {/* Hat implied by slightly larger head */}
            <circle cx="20" cy="80" r="25" stroke="black" strokeWidth="4" fill="none" />
            <circle cx="80" cy="80" r="25" stroke="black" strokeWidth="4" fill="none" />
         </g>
         
         {/* Will on Bike */}
         <g transform="translate(820, 215) scale(0.58)">
            <path d="M40 0 L50 20 L30 40 L60 40 L60 60 L40 60 L30 80 L50 80" stroke="black" strokeWidth="8" fill="none" />
            <circle cx="45" cy="10" r="10" fill="black" />
            <circle cx="20" cy="80" r="25" stroke="black" strokeWidth="4" fill="none" />
            <circle cx="80" cy="80" r="25" stroke="black" strokeWidth="4" fill="none" />
         </g>

       </svg>
    </div>
  );
};