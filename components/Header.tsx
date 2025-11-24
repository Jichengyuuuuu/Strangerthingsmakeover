import React from 'react';

export const Header: React.FC = () => {
  return (
    <header className="w-full pt-12 pb-6 flex flex-col items-center justify-center sticky top-0 z-40 bg-gradient-to-b from-black via-black/90 to-transparent">
      <div className="relative group cursor-default">
        {/* Top Bar */}
        <div className="w-full h-[2px] bg-stranger-red shadow-[0_0_10px_#E71D36] mb-1 transform scale-x-0 animate-[zoom-in_3s_ease-out_forwards]"></div>
        
        {/* Title */}
        <h1 className="text-5xl md:text-7xl font-stranger text-transparent bg-clip-text bg-stranger-red text-center tracking-widest px-4 leading-[0.8] drop-shadow-[0_0_8px_rgba(231,29,54,0.6)] animate-[zoom-in_10s_ease-out_forwards]">
          STRANGER<br />
          <span className="text-4xl md:text-6xl">MAKEOVER</span>
        </h1>
        
        {/* Bottom Bar */}
        <div className="w-full h-[2px] bg-stranger-red shadow-[0_0_10px_#E71D36] mt-2 transform scale-x-0 animate-[zoom-in_3s_ease-out_forwards] delay-75"></div>
      </div>
      
      <p className="mt-4 text-xs font-mono text-gray-500 tracking-[0.2em] uppercase opacity-70">
        A Netflix Inspired Experience
      </p>
    </header>
  );
};