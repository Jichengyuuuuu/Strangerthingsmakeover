import React from 'react';
import { Scenario } from '../types';
import { SCENARIOS } from '../constants';
import { ShoppingBag, Skull, Bike, Zap } from 'lucide-react';

interface ScenarioSelectorProps {
  onSelect: (scenario: Scenario) => void;
}

const IconMap = {
  mall: ShoppingBag,
  monster: Skull,
  bike: Bike,
  lab: Zap,
};

export const ScenarioSelector: React.FC<ScenarioSelectorProps> = ({ onSelect }) => {
  return (
    <div className="w-full max-w-6xl mx-auto p-6 animate-fade-in relative z-20">
      <div className="text-center mb-12">
        <h2 className="text-xl font-mono text-red-500 mb-2 uppercase tracking-widest animate-pulse">
          Select Your Storyline
        </h2>
        <div className="w-24 h-1 bg-red-900 mx-auto"></div>
      </div>
      
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        {SCENARIOS.map((scenario, index) => {
          const Icon = IconMap[scenario.iconName];
          return (
            <button
              key={scenario.id}
              onClick={() => onSelect(scenario)}
              className={`group relative h-96 w-full perspective-1000 transition-all duration-500`}
            >
              <div className={`absolute inset-0 bg-zinc-900 border-2 ${scenario.color.replace('text-', 'border-')} rounded-lg transform transition-transform duration-300 group-hover:-translate-y-2 group-hover:shadow-[0_0_25px_rgba(0,0,0,0.6)] overflow-hidden flex flex-col`}>
                
                {/* VHS Top Label */}
                <div className="bg-zinc-800 p-2 border-b border-zinc-700 flex justify-between items-center">
                  <span className="text-[10px] font-mono text-zinc-500">VHS-HQ</span>
                  <span className="text-[10px] font-mono text-red-500 animate-pulse">REC ●</span>
                </div>

                {/* Main Content */}
                <div className="flex-1 p-6 flex flex-col items-center justify-center relative">
                  <div className={`absolute inset-0 opacity-10 ${scenario.color.replace('text-', 'bg-')}`}></div>
                  <Icon size={64} className={`mb-6 ${scenario.color} drop-shadow-lg group-hover:scale-110 transition-transform`} />
                  
                  <h3 className={`text-xl font-serif font-bold uppercase text-center leading-tight mb-2 ${scenario.color}`}>
                    {scenario.title}
                  </h3>
                  
                  <div className="w-full h-px bg-zinc-700 my-4"></div>
                  
                  <p className="text-xs font-mono text-gray-400 text-center leading-relaxed">
                    {scenario.description}
                  </p>
                </div>

                {/* Footer Stripe */}
                <div className={`h-2 w-full ${scenario.color.replace('text-', 'bg-')} opacity-50`}></div>
              </div>
            </button>
          );
        })}
      </div>
    </div>
  );
};