import React, { useState } from 'react';
import { Upload, AlertCircle, FileWarning } from 'lucide-react';

interface ImageUploaderProps {
  onUpload: (base64: string) => void;
  onBack: () => void;
}

export const ImageUploader: React.FC<ImageUploaderProps> = ({ onUpload, onBack }) => {
  const [error, setError] = useState<string | null>(null);

  const handleFileChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const file = event.target.files?.[0];
    if (file) {
      if (file.size > 5 * 1024 * 1024) {
        setError("SUBJECT FILE TOO LARGE. MAX 5MB.");
        return;
      }
      const reader = new FileReader();
      reader.onloadend = () => {
        onUpload(reader.result as string);
      };
      reader.readAsDataURL(file);
    }
  };

  return (
    <div className="w-full max-w-2xl mx-auto p-6 relative z-20 animate-fade-in">
      <div className="bg-[#111] border border-zinc-800 p-8 rounded-sm shadow-[0_0_50px_rgba(0,0,0,0.8)] relative overflow-hidden">
        {/* Classified Stamp */}
        <div className="absolute top-4 right-4 border-2 border-red-900 text-red-900 font-black uppercase text-xs px-2 py-1 transform rotate-12 opacity-50">
          Top Secret
        </div>

        <h2 className="text-2xl font-mono text-red-500 mb-2 uppercase tracking-widest flex items-center gap-2">
          <FileWarning size={24} />
          Subject Identification
        </h2>
        <p className="text-zinc-500 font-mono text-xs mb-8 uppercase tracking-wider">
          Upload subject photo for inter-dimensional transport.
        </p>

        <div className="relative group border-2 border-dashed border-zinc-700 bg-black/50 hover:border-red-600 hover:bg-red-900/5 transition-all duration-300 p-16 flex flex-col items-center justify-center cursor-pointer overflow-hidden">
          <input
            type="file"
            accept="image/*"
            onChange={handleFileChange}
            className="absolute inset-0 w-full h-full opacity-0 cursor-pointer z-10"
          />
          
          <div className="absolute inset-0 bg-[url('https://www.transparenttextures.com/patterns/diagmonds-light.png')] opacity-5 pointer-events-none"></div>

          <div className="mb-6 text-zinc-600 group-hover:text-red-500 transition-colors duration-500 group-hover:scale-110 transform">
            <Upload size={64} />
          </div>
          
          <p className="text-lg font-mono text-zinc-300 font-bold uppercase tracking-widest group-hover:text-red-400">
            Insert Evidence
          </p>
          <p className="text-xs text-zinc-600 mt-2 font-mono uppercase">
            Click or Drag Photo Here
          </p>
        </div>

        {error && (
          <div className="mt-6 p-4 bg-red-950/30 border border-red-900/50 flex items-center justify-center gap-2 text-red-400 animate-pulse">
            <AlertCircle size={16} />
            <span className="text-xs font-mono uppercase tracking-widest">{error}</span>
          </div>
        )}

        <div className="mt-8 flex justify-center">
          <button
            onClick={onBack}
            className="text-zinc-600 hover:text-white font-mono uppercase text-xs tracking-[0.2em] hover:underline transition-colors"
          >
            ← Abort Mission
          </button>
        </div>
      </div>
    </div>
  );
};