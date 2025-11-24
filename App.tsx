import React, { useState } from 'react';
import { Header } from './components/Header';
import { ScenarioSelector } from './components/ScenarioSelector';
import { ImageUploader } from './components/ImageUploader';
import { LoadingScreen } from './components/LoadingScreen';
import { ResultDisplay } from './components/ResultDisplay';
import { ChristmasLights } from './components/ChristmasLights';
import { AppStep, Scenario } from './types';
import { generateMakeover } from './services/geminiService';

const App: React.FC = () => {
  const [step, setStep] = useState<AppStep>(AppStep.SCENARIO_SELECTION);
  const [selectedScenario, setSelectedScenario] = useState<Scenario | null>(null);
  const [originalImage, setOriginalImage] = useState<string | null>(null);
  const [generatedImage, setGeneratedImage] = useState<string | null>(null);
  const [error, setError] = useState<string | null>(null);

  const handleScenarioSelect = (scenario: Scenario) => {
    setSelectedScenario(scenario);
    setStep(AppStep.IMAGE_UPLOAD);
    setError(null);
  };

  const handleImageUpload = async (base64: string) => {
    setOriginalImage(base64);
    setStep(AppStep.PROCESSING);
    setError(null);

    if (!selectedScenario) {
        setError("No scenario selected.");
        setStep(AppStep.SCENARIO_SELECTION);
        return;
    }

    try {
      const resultImage = await generateMakeover(base64, selectedScenario);
      setGeneratedImage(resultImage);
      setStep(AppStep.RESULT);
    } catch (err: any) {
      console.error(err);
      setError(err.message || "Connection to the Upside Down was severed. Please try again.");
      setStep(AppStep.IMAGE_UPLOAD);
    }
  };

  const handleReset = () => {
    setStep(AppStep.SCENARIO_SELECTION);
    setSelectedScenario(null);
    setOriginalImage(null);
    setGeneratedImage(null);
    setError(null);
  };

  const handleRetry = () => {
    if (originalImage) {
        handleImageUpload(originalImage);
    }
  };

  return (
    <div className="min-h-screen bg-stranger-black text-gray-200 font-sans selection:bg-red-900 selection:text-white flex flex-col relative overflow-hidden">
      {/* Global Atmospherics */}
      <div className="bg-grain"></div>
      <div className="scanlines"></div>
      
      {/* Red ambient glow at bottom */}
      <div className="fixed bottom-0 left-0 right-0 h-64 bg-gradient-to-t from-red-900/10 to-transparent pointer-events-none z-0"></div>

      <Header />

      <main className="flex-grow flex flex-col items-center justify-center p-4 relative z-10 w-full max-w-7xl mx-auto">
        {error && (
            <div className="w-full max-w-2xl mb-8 p-4 border border-red-600 bg-red-950/80 text-red-200 font-mono text-center break-words shadow-[0_0_15px_rgba(220,38,38,0.3)] animate-pulse">
                <span className="font-bold mr-2">ERROR CODE 11:</span> {error}
            </div>
        )}

        {step === AppStep.SCENARIO_SELECTION && (
          <>
            <ChristmasLights />
            <ScenarioSelector onSelect={handleScenarioSelect} />
          </>
        )}

        {step === AppStep.IMAGE_UPLOAD && (
          <ImageUploader 
            onUpload={handleImageUpload} 
            onBack={() => setStep(AppStep.SCENARIO_SELECTION)} 
          />
        )}

        {step === AppStep.PROCESSING && (
          <LoadingScreen />
        )}

        {step === AppStep.RESULT && selectedScenario && originalImage && generatedImage && (
          <ResultDisplay
            originalImage={originalImage}
            generatedImage={generatedImage}
            scenario={selectedScenario}
            onReset={handleReset}
            onRetry={handleRetry}
          />
        )}
      </main>

      <footer className="w-full py-8 text-center border-t border-zinc-900 mt-auto relative z-10 bg-black/80">
        <p className="text-zinc-600 text-[10px] font-mono uppercase tracking-[0.2em]">
          HAWKINS NATIONAL LABORATORY • RESTRICTED ACCESS • 1986
        </p>
      </footer>
    </div>
  );
};

export default App;