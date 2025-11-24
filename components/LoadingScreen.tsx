import React, { useEffect, useState } from 'react';
import { LOADING_MESSAGES } from '../constants';

export const LoadingScreen: React.FC = () => {
  const [messageIndex, setMessageIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setMessageIndex((prev) => (prev + 1) % LOADING_MESSAGES.length);
    }, 2500);
    return () => clearInterval(interval);
  }, []);

  return (
    <div className="flex flex-col items-center justify-center min-h-[50vh] relative z-20">
      {/* Christmas Lights Effect Container */}
      <div className="flex gap-4 mb-12">
        <div className="w-4 h-4 rounded-full bg-red-600 shadow-[0_0_15px_red] animate-flicker"></div>
        <div className="w-4 h-4 rounded-full bg-blue-600 shadow-[0_0_15px_blue] animate-flicker delay-75"></div>
        <div className="w-4 h-4 rounded-full bg-yellow-500 shadow-[0_0_15px_yellow] animate-flicker delay-150"></div>
        <div className="w-4 h-4 rounded-full bg-green-600 shadow-[0_0_15px_green] animate-flicker delay-300"></div>
      </div>
      
      <div className="relative mb-8">
        <div className="absolute inset-0 blur-xl bg-red-900/20 rounded-full animate-pulse"></div>
        <h3 className="relative text-2xl md:text-4xl font-serif text-red-600 tracking-widest uppercase animate-flicker text-center px-4 leading-normal drop-shadow-[0_0_5px_rgba(220,38,38,0.8)]">
          {LOADING_MESSAGES[messageIndex]}
        </h3>
      </div>
      
      <div className="w-64 h-1 bg-zinc-900 rounded-full overflow-hidden">
         <div className="h-full bg-red-800 animate-[width_2s_ease-in-out_infinite] w-1/3"></div>
      </div>

      <p className="mt-8 text-[10px] font-mono text-zinc-600 uppercase tracking-[0.3em] animate-pulse">
        Establishing Mind Link...
      </p>
    </div>
  );
};