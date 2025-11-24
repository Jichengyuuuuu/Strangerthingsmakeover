import React from 'react';

export const Header: React.FC = () => {
  return (
    <header className="w-full pt-16 pb-6 flex flex-col items-center justify-center sticky top-0 z-40 bg-gradient-to-b from-black via-black/90 to-transparent">
      <div className="relative group cursor-default text-center px-4">
        {/* Top Bar */}
        <div className="w-full h-[2px] bg-stranger-red shadow-[0_0_10px_#E71D36] mb-2 transform scale-x-0 animate-[zoom-in_3s_ease-out_forwards]"></div>
        
        {/* Title */}
        <h1 
          className="text-4xl md:text-6xl font-stranger text-transparent bg-clip-text bg-stranger-red text-center tracking-widest leading-[0.9] drop-shadow-[0_0_8px_rgba(231,29,54,0.6)] animate-[zoom-in_10s_ease-out_forwards] glitch-text"
          data-text="WELCOME TO HAWKINS TOWN"
        >
          WELCOME TO<br />
          <span className="text-5xl md:text-8xl">HAWKINS TOWN</span>
        </h1>
        
        {/* Bottom Bar */}
        <div className="w-full h-[2px] bg-stranger-red shadow-[0_0_10px_#E71D36] mt-4 transform scale-x-0 animate-[zoom-in_3s_ease-out_forwards] delay-75"></div>
        
        {/* Signal lost label */}
        <div className="absolute -right-4 -top-8 rotate-12 opacity-80 hidden md:block">
           <div className="bg-yellow-500 text-black font-bold px-2 py-1 text-xs font-mono border-2 border-yellow-600 shadow-[0_0_10px_yellow]">
             NO SIGNAL
           </div>
        </div>
      </div>
      
      <p className="mt-6 text-xs font-mono text-zinc-500 tracking-[0.2em] uppercase opacity-60">
        BROADCASTING LIVE FROM 1986
      </p>
    </header>
  );
};