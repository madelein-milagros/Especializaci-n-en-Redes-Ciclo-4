
import React from 'react';

interface CheckpointProps {
  text: string;
}

export const Checkpoint: React.FC<CheckpointProps> = ({ text }) => {
  return (
    <div className="w-full max-w-2xl mt-8">
      <div className="flex flex-col items-center">
        <div className="w-1 h-12 bg-[#ab022f] opacity-30"></div>
        <div className="bg-[#9a0526] text-white p-8 rounded-2xl shadow-xl border-4 border-[#ab022f] relative overflow-hidden group">
          {/* Subtle background decoration */}
          <div className="absolute -right-4 -top-4 w-24 h-24 bg-white/10 rounded-full blur-2xl group-hover:scale-150 transition-transform duration-700"></div>
          
          <div className="relative z-10 flex flex-col items-center text-center">
            <div className="mb-4 text-3xl">⬛</div>
            <h3 className="text-2xl font-black mb-4 tracking-tight">Checkpoint del Ciclo 4</h3>
            <p className="text-white/90 text-lg italic leading-relaxed font-light">
              “{text}”
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};
