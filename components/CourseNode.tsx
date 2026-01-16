
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
      {/* Etiqueta Superior */}
      <div className={`mb-3 px-3 py-1.5 rounded-xl shadow-xl border transition-all duration-500 pointer-events-none whitespace-nowrap
        ${isSelected 
          ? 'bg-[#ab022f] border-[#ab022f] text-white scale-110 -translate-y-1' 
          : 'bg-white border-gray-100 text-[#6a041a] opacity-0 group-hover:opacity-100'}`}>
        <p className="text-[8px] font-black uppercase tracking-widest">{course.title.substring(0, 20)}...</p>
      </div>

      {/* Pin de la Carretera */}
      <button
        onClick={() => onSelect(course.id)}
        className="relative transition-all duration-300 transform hover:scale-110 active:scale-90"
      >
        <div className={`w-10 h-10 md:w-11 md:h-11 rounded-xl flex items-center justify-center border-[3px] shadow-lg transition-all
          ${isSelected 
            ? 'bg-[#ab022f] border-white text-white' 
            : 'bg-[#FFB800] border-white text-white'}`}>
          {IconMap[course.icon]}
        </div>

        {/* Punta Inferior */}
        <div className={`mx-auto w-0 h-0 border-l-[6px] border-l-transparent border-r-[6px] border-r-transparent border-t-[8px] -mt-0.5 transition-all
          ${isSelected ? 'border-t-[#ab022f]' : 'border-t-[#FFB800]'}`}>
        </div>

        {/* Número */}
        <div className="absolute -top-1.5 -right-1.5 w-4 h-4 bg-white text-[#6a041a] rounded-full text-[8px] font-black flex items-center justify-center shadow-md border border-gray-100">
          {index + 1}
        </div>
      </button>

      {/* Sombra de contacto */}
      <div className="absolute -bottom-1 w-5 h-1 bg-black/20 rounded-full blur-[1px]"></div>
    </div>
  );
};
