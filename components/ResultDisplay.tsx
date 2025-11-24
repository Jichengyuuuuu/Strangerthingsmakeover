import React, { useState } from 'react';
import { Download, RefreshCw, ArrowLeft, Loader2 } from 'lucide-react';
import { Scenario } from '../types';

interface ResultDisplayProps {
  originalImage: string;
  generatedImage: string;
  scenario: Scenario;
  onReset: () => void;
  onRetry: () => void;
}

export const ResultDisplay: React.FC<ResultDisplayProps> = ({
  originalImage,
  generatedImage,
  scenario,
  onReset,
  onRetry
}) => {
  const [isDownloading, setIsDownloading] = useState(false);
  
  const handleDownload = async () => {
    setIsDownloading(true);
    try {
      // Direct download of the generated image (clean, no logo)
      const link = document.createElement('a');
      link.href = generatedImage;
      link.download = `stranger-things-transformation-${Date.now()}.png`;
      document.body.appendChild(link);
      link.click();
      document.body.removeChild(link);
    } catch (e) {
      console.error("Download failed", e);
      alert("Saving failed. Please try right-clicking the image to save.");
    } finally {
      setIsDownloading(false);
    }
  };

  return (
    <div className="w-full max-w-6xl mx-auto p-4 animate-fade-in pb-20">
      <div className="text-center mb-8">
        <h2 className="text-3xl font-serif text-stranger-red uppercase tracking-widest drop-shadow-[0_0_5px_rgba(231,29,54,0.8)]">
          {scenario.title}
        </h2>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-start">
        {/* Original */}
        <div className="relative group rounded-lg overflow-hidden border border-gray-800 bg-black h-full max-h-[600px] flex items-center justify-center">
          <div className="absolute top-0 left-0 bg-black/70 text-white text-xs font-mono px-3 py-1 z-10 rounded-br">
            ORIGINAL SUBJECT
          </div>
          <img 
            src={originalImage} 
            alt="Original" 
            className="max-w-full max-h-full object-contain opacity-60 group-hover:opacity-100 transition-opacity duration-500 grayscale group-hover:grayscale-0"
          />
        </div>

        {/* Generated */}
        <div className="relative rounded-lg overflow-hidden border-2 border-red-900 shadow-[0_0_30px_rgba(231,29,54,0.2)] bg-black group">
           <div className="absolute top-0 left-0 bg-red-900/90 text-white text-xs font-mono px-3 py-1 z-10 rounded-br">
            TRANSFORMED SUBJECT
          </div>
          
          <img 
            src={generatedImage} 
            alt="Generated" 
            className="w-full h-auto object-cover"
          />
          
          <div className="absolute inset-0 pointer-events-none bg-gradient-to-t from-black/20 to-transparent"></div>
        </div>
      </div>

      <div className="flex flex-col md:flex-row justify-center gap-4 mt-12">
         <button
          onClick={onReset}
          className="flex items-center justify-center gap-2 px-6 py-3 bg-transparent border border-gray-600 text-gray-300 hover:border-white hover:text-white font-mono uppercase tracking-wider transition-all"
        >
          <ArrowLeft size={18} />
          Start Over
        </button>
        
        <button
          onClick={onRetry}
          className="flex items-center justify-center gap-2 px-6 py-3 bg-gray-900 border border-gray-700 text-gray-200 hover:bg-gray-800 font-mono uppercase tracking-wider transition-all"
        >
          <RefreshCw size={18} />
          Try Again
        </button>

        <button
          onClick={handleDownload}
          disabled={isDownloading}
          className="flex items-center justify-center gap-2 px-8 py-3 bg-red-700 hover:bg-red-600 text-white border border-red-500 font-mono uppercase tracking-wider shadow-[0_0_15px_rgba(231,29,54,0.4)] hover:shadow-[0_0_25px_rgba(231,29,54,0.6)] transition-all disabled:opacity-50 disabled:cursor-not-allowed"
        >
          {isDownloading ? <Loader2 size={18} className="animate-spin" /> : <Download size={18} />}
          Save Photo
        </button>
      </div>
    </div>
  );
};