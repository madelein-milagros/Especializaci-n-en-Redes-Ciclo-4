
import React from 'react';

interface CheckpointProps {
  text: string;
}

export const Checkpoint: React.FC<CheckpointProps> = ({ text }) => {
  return (
    <div className="relative flex flex-col items-center group">
      {/* Sombra de la meta */}
      <div className="absolute -bottom-2 w-16 h-4 bg-black/10 rounded-[100%] blur-[4px]"></div>
      
      {/* Estructura de Meta (Arco o Bandera) */}
      <div className="z-20 w-16 h-16 bg-white rounded-xl flex items-center justify-center border-4 border-[#6a041a] shadow-xl group-hover:scale-110 transition-transform duration-300">
        <span className="text-3xl">🏁</span>
      </div>

      {/* Texto de meta estilo "Speech Bubble" */}
      <div className="absolute bottom-20 w-[200px] bg-[#6a041a] p-3 rounded-xl shadow-2xl opacity-0 group-hover:opacity-100 transition-opacity pointer-events-none">
        <p className="text-[10px] text-white font-bold leading-tight italic">
          "{text}"
        </p>
        {/* Triangulito del bubble */}
        <div className="absolute -bottom-2 left-1/2 -translate-x-1/2 w-0 h-0 border-l-8 border-l-transparent border-r-8 border-r-transparent border-t-8 border-t-[#6a041a]"></div>
      </div>
      
      <p className="mt-2 text-[10px] font-black text-[#6a041a] uppercase tracking-widest">Final de Ruta</p>
    </div>
  );
};
