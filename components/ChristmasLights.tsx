import React from 'react';

const ROWS = [
  "ABCDEFGH",
  "IJKLMNOPQ",
  "RSTUVWXYZ"
];

// Vibrant vintage bulb colors
const COLORS = [
  'bg-yellow-200 shadow-[0_0_20px_rgba(253,224,71,0.6)]', // Warm white/yellow
  'bg-blue-500 shadow-[0_0_20px_rgba(59,130,246,0.6)]',
  'bg-green-500 shadow-[0_0_20px_rgba(34,197,94,0.6)]',
  'bg-red-600 shadow-[0_0_20px_rgba(220,38,38,0.6)]',
  'bg-pink-500 shadow-[0_0_20px_rgba(236,72,153,0.6)]',
];

export const ChristmasLights: React.FC = () => {
  return (
    <div className="w-full max-w-5xl mx-auto my-6 px-4 relative z-20 select-none">
      {/* Wallpaper effect background patch behind lights */}
      <div className="absolute inset-0 bg-[#e3cdab] opacity-[0.05] -z-10 rounded-xl blur-3xl"></div>

      {/* Desktop/Tablet View */}
      <div className="hidden md:flex flex-col items-center gap-10 py-6">
        {ROWS.map((row, rowIndex) => (
          <div key={rowIndex} className="flex justify-center gap-8 relative">
             {/* Wire: Using a curved border on a pseudo element or div */}
             <div className="absolute -top-4 -left-4 -right-4 h-12 border-t-[3px] border-green-900/60 rounded-[100%] pointer-events-none z-0"></div>
             
             {row.split('').map((letter, i) => {
               const colorIndex = (letter.charCodeAt(0) + rowIndex * 3) % COLORS.length;
               const colorClass = COLORS[colorIndex];
               // Random animation delay to create chaotic flickering
               const delay = (letter.charCodeAt(0) % 7) * 0.7;
               const duration = 2 + (letter.charCodeAt(0) % 4);
               
               return (
                 <div key={letter} className="flex flex-col items-center relative group z-10">
                    {/* Socket */}
                    <div className="w-3 h-4 bg-green-900 rounded-sm mb-[-4px] shadow-sm z-10"></div>
                    
                    {/* Bulb */}
                    <div 
                      className={`w-6 h-9 rounded-full ${colorClass} animate-flicker transition-all duration-300 relative`}
                      style={{ 
                        animationDelay: `${delay}s`, 
                        animationDuration: `${duration}s` 
                      }}
                    >
                       {/* Bulb Reflection */}
                       <div className="w-1.5 h-3 bg-white/50 absolute top-2 left-1.5 rounded-full blur-[1px]"></div>
                    </div>
                    
                    {/* Letter */}
                    <span 
                      className="mt-4 text-5xl font-painted text-black/80 drop-shadow-[0_0_2px_rgba(255,255,255,0.1)] transform origin-center" 
                      style={{ 
                        transform: `rotate(${(i % 2 === 0 ? 1 : -1) * (5 + (letter.charCodeAt(0) % 10))}deg)`,
                      }}
                    >
                      {letter}
                    </span>
                 </div>
               );
             })}
          </div>
        ))}
      </div>
      
      {/* Mobile View: Simplified "RUN" message */}
      <div className="md:hidden flex justify-center gap-6 my-6">
         {"RUN".split('').map((letter, i) => (
            <div key={i} className="flex flex-col items-center relative">
                 <div className="absolute -top-3 -left-10 -right-10 h-8 border-t-2 border-green-900/50 rounded-[100%] pointer-events-none"></div>
                
                <div className="w-3 h-3 bg-green-900 rounded-sm mb-[-2px] z-10"></div>
                <div className={`w-5 h-8 rounded-full bg-red-600 shadow-[0_0_20px_red] animate-flicker z-10`} style={{ animationDelay: `${i * 0.5}s` }}>
                   <div className="w-1 h-2 bg-white/40 absolute top-1 left-1 rounded-full"></div>
                </div>
                <span className="mt-2 text-4xl font-painted text-zinc-500 transform rotate-2">{letter}</span>
            </div>
         ))}
      </div>
    </div>
  );
};