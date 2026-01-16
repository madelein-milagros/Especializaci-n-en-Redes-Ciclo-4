
import React from 'react';
import { Course } from '../types';
import { IconMap } from './Icons';

interface CourseNodeProps {
  course: Course;
  index: number;
  isSelected: boolean;
  onSelect: (id: number) => void;
}

export const CourseNode: React.FC<CourseNodeProps> = ({ course, index, isSelected, onSelect }) => {
  return (
    <div className="relative flex flex-col items-center group -translate-y-1/2 -translate-x-1/2">
      {/* Etiqueta Superior - Ajuste para no cortarse */}
      <div className={`mb-4 px-4 py-2 rounded-xl shadow-xl border transition-all duration-500 pointer-events-none z-30
        ${isSelected 
          ? 'bg-[#ab022f] border-[#ab022f] text-white scale-100 md:scale-110 -translate-y-2' 
          : 'bg-white border-gray-100 text-[#6a041a] opacity-0 group-hover:opacity-100'}`}>
        <p className="text-[9px] md:text-[10px] font-black uppercase tracking-widest whitespace-nowrap">
          {course.title.length > 20 ? course.title.substring(0, 20) + '...' : course.title}
        </p>
      </div>

      {/* Pin de la Carretera */}
      <button
        onClick={() => onSelect(course.id)}
        className="relative transition-all duration-300 transform hover:scale-110 active:scale-95 z-20"
      >
        <div className={`w-12 h-12 md:w-16 md:h-16 rounded-2xl flex items-center justify-center border-[4px] shadow-2xl transition-all
          ${isSelected 
            ? 'bg-[#ab022f] border-white text-white' 
            : 'bg-[#FFB800] border-white text-white'}`}>
          <div className="scale-110 md:scale-125">
            {IconMap[course.icon]}
          </div>
        </div>

        {/* Punta Inferior */}
        <div className={`mx-auto w-0 h-0 border-l-[8px] border-l-transparent border-r-[8px] border-r-transparent border-t-[10px] -mt-1 transition-all
          ${isSelected ? 'border-t-[#ab022f]' : 'border-t-[#FFB800]'}`}>
        </div>

        {/* Número */}
        <div className="absolute -top-2 -right-2 w-5 h-5 md:w-6 md:h-6 bg-white text-[#6a041a] rounded-full text-[9px] md:text-[10px] font-black flex items-center justify-center shadow-md border border-gray-100">
          {index + 1}
        </div>
      </button>

      {/* Sombra */}
      <div className="absolute -bottom-2 w-8 h-2 bg-black/10 rounded-full blur-[2px]"></div>
    </div>
  );
};
