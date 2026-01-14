
import React, { useState } from 'react';
import { Course } from '../types';
import { IconMap } from './Icons';

interface CourseCardProps {
  course: Course;
  isFirst?: boolean;
  isLast?: boolean;
}

export const CourseCard: React.FC<CourseCardProps> = ({ course, isFirst, isLast }) => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="relative flex flex-col items-center w-full max-w-2xl group">
      {/* Connecting line (vertical) */}
      {!isFirst && (
        <div className="w-1 h-8 bg-[#ab022f] opacity-30"></div>
      )}

      <button
        onClick={() => setIsOpen(!isOpen)}
        className={`w-full flex items-center justify-between p-5 rounded-xl shadow-md transition-all duration-300 hover:shadow-lg active:scale-[0.98] border-2 ${
          isOpen ? 'border-[#ab022f] bg-[#6a041a] text-white' : 'border-transparent bg-[#6a041a] text-white'
        }`}
      >
        <div className="flex items-center gap-4">
          <div className="p-2 bg-white/10 rounded-lg">
            {IconMap[course.icon]}
          </div>
          <span className="text-lg font-semibold text-left leading-tight">
            {course.title}
          </span>
        </div>
        <div className="ml-4 transition-transform duration-300">
          {isOpen ? IconMap.ChevronUp : IconMap.ChevronDown}
        </div>
      </button>

      {/* Expandable Content */}
      <div 
        className={`w-full overflow-hidden transition-all duration-500 ease-in-out ${
          isOpen ? 'max-h-[600px] opacity-100 mt-4' : 'max-h-0 opacity-0'
        }`}
      >
        <div className="bg-white border-2 border-[#ab022f] rounded-xl p-6 shadow-inner space-y-4">
          <div className="flex items-start gap-3">
            <span className="mt-1">{IconMap.Book}</span>
            <div>
              <h4 className="text-sm font-bold uppercase text-[#ab022f] mb-1">Curso Oficial</h4>
              <p className="text-gray-800 font-medium">{course.officialName}</p>
            </div>
          </div>

          <div className="flex items-start gap-3">
             <span className="mt-1">{IconMap.Wrench}</span>
            <div>
              <h4 className="text-sm font-bold uppercase text-[#ab022f] mb-1">Descripción</h4>
              <p className="text-gray-600 text-sm leading-relaxed">{course.description}</p>
            </div>
          </div>

          <div className="flex items-start gap-3">
             <span className="mt-1">{IconMap.Trophy}</span>
            <div>
              <h4 className="text-sm font-bold uppercase text-[#ab022f] mb-1">Certificación</h4>
              <p className="text-gray-800 text-sm font-semibold">{course.certification}</p>
            </div>
          </div>

          <div className="pt-2 border-t border-gray-100 flex justify-end">
            <a 
              href={course.link} 
              target="_blank" 
              rel="noopener noreferrer"
              className="flex items-center gap-2 text-[#ab022f] hover:text-[#6a041a] font-bold text-sm transition-colors"
            >
              Ver curso oficial {IconMap.ExternalLink}
            </a>
          </div>
        </div>
      </div>
      
      {/* Continuing line (vertical) */}
      {!isLast && (
        <div className="w-1 h-8 bg-[#ab022f] opacity-30"></div>
      )}
    </div>
  );
};
