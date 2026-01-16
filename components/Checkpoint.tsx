
import React from 'react';

interface CheckpointProps {
  text: string;
}

export const Checkpoint: React.FC<CheckpointProps> = ({ text }) => {
  return (
    <div className="relative flex flex-col items-center group -translate-x-1/2 -translate-y-1/2">
      {/* Sombra de la meta */}
      <div className="absolute -bottom-2 w-16 h-4 bg-black/10 rounded-[100%] blur-[4px]"></div>
      
      {/* Icono de Meta */}
      <div className="z-20 w-16 h-16 bg-white rounded-xl flex items-center justify-center border-4 border-[#6a041a] shadow-xl group-hover:scale-110 transition-transform duration-300">
        <span className="text-3xl">🏁</span>
      </div>

      {/* Texto de meta - Ajustado para móvil: No centrado forzoso, max-width flexible */}
      <div className="absolute bottom-20 right-0 md:left-1/2 md:-translate-x-1/2 w-[180px] md:w-[220px] bg-[#6a041a] p-4 rounded-2xl shadow-2xl opacity-0 group-hover:opacity-100 transition-opacity pointer-events-none z-30 border border-white/10">
        <p className="text-[10px] md:text-[11px] text-white font-bold leading-tight italic">
          "{text}"
        </p>
        {/* Triangulito del bubble alineado a la derecha en móvil */}
        <div className="absolute -bottom-2 right-6 md:left-1/2 md:right-auto md:-translate-x-1/2 w-0 h-0 border-l-8 border-l-transparent border-r-8 border-r-transparent border-t-8 border-t-[#6a041a]"></div>
      </div>
      
      <p className="mt-2 text-[10px] font-black text-[#6a041a] uppercase tracking-widest whitespace-nowrap">Final de Ruta</p>
    </div>
  );
};
