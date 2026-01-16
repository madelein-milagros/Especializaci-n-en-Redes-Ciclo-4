
import React, { useState } from 'react';
import { COURSES, CHECKPOINT_TEXT } from './constants';
import { CourseNode } from './components/CourseNode';
import { Checkpoint } from './components/Checkpoint';
import { IconMap } from './components/Icons';
import { Course } from './types';

// Coordenadas seguras para evitar cortes en bordes
const ROAD_POINTS = [
  { x: 15, y: 15 }, // Paso 1
  { x: 85, y: 15 }, // Paso 2
  { x: 50, y: 50 }, // Paso 3
  { x: 15, y: 85 }, // Paso 4
];

const App: React.FC = () => {
  const [selectedCourse, setSelectedCourse] = useState<Course | null>(null);
  const [showTutorial, setShowTutorial] = useState(false);

  const closeModal = () => setSelectedCourse(null);

  const shareOnLinkedIn = (courseTitle: string) => {
    const careerTag = "Administración de Redes y Comunicaciones";
    // Corregido a Ciclo 4
    const text = encodeURIComponent(`¡Módulo "${courseTitle}" completado en @Tecsup! 🚀 #${careerTag.replace(/\s+/g, '')} #Redes #Ciclo4`);
    const url = `https://www.linkedin.com/feed/?shareActive=true&text=${text}`;
    window.open(url, '_blank');
  };

  return (
    <div className="h-screen w-full bg-[#FDFDFD] flex flex-col overflow-hidden font-sans select-none relative">
      {/* Header Minimalista */}
      <header className="px-6 py-3 flex items-center justify-between z-40 bg-white/80 backdrop-blur-md border-b border-gray-100 flex-shrink-0">
        <div className="flex items-center gap-3">
          <div className="w-8 h-8 bg-[#6a041a] rounded-lg flex items-center justify-center text-white text-lg font-black italic shadow-sm">R</div>
          <div>
            <h1 className="text-[10px] font-black text-[#6a041a] uppercase tracking-tighter leading-none">Roadmap Ciclo IV</h1>
            <p className="text-[7px] font-bold text-[#ab022f] uppercase tracking-widest leading-none mt-0.5">Administración de Redes y Comunicaciones</p>
          </div>
        </div>
        
        <div className="flex items-center gap-4">
          <div className="hidden md:block">
            <p className="text-[9px] font-black text-gray-400 uppercase tracking-widest">Explora tu progreso</p>
          </div>
          <div className="flex gap-1">
            {COURSES.map((_, i) => (
              <div key={i} className={`w-3 h-1 rounded-full transition-all duration-300 ${selectedCourse?.id === i + 1 ? 'bg-[#ab022f] w-6' : 'bg-gray-200'}`} />
            ))}
          </div>
        </div>
      </header>

      <main className="flex-1 relative overflow-hidden bg-[radial-gradient(#e5e7eb_1.5px,transparent_1.5px)] [background-size:45px_45px]">
        {/* LIENZO DEL MAPA */}
        <div className="absolute inset-0 flex items-center justify-center p-4 md:p-12">
          <div className="relative w-full h-full max-w-[1200px] max-h-[80vh]">
            
            {/* SVG de la Carretera con Animación */}
            <svg className="absolute inset-0 w-full h-full drop-shadow-2xl overflow-visible" viewBox="0 0 1000 600" preserveAspectRatio="none">
              <path 
                d="M 150 90 H 850 C 930 90, 930 300, 850 300 H 150 C 70 300, 70 510, 150 510 H 800" 
                fill="none" 
                stroke="#1a1a1a" 
                strokeWidth="38" 
                strokeLinecap="round"
              />
              <path 
                d="M 150 90 H 850 C 930 90, 930 300, 850 300 H 150 C 70 300, 70 510, 150 510 H 800" 
                fill="none" 
                stroke="white" 
                strokeWidth="2" 
                strokeDasharray="15, 25" 
                strokeLinecap="round" 
                className="opacity-40 animate-roadFlow"
              />
              <circle cx="150" cy="90" r="10" fill="#ab022f" className="animate-pulse" />
            </svg>

            {/* Renderizado de Nodos */}
            {COURSES.map((course, index) => (
              <div 
                key={course.id} 
                className="absolute transition-all duration-700 ease-out" 
                style={{ 
                  left: `${ROAD_POINTS[index].x}%`, 
                  top: `${ROAD_POINTS[index].y}%`,
                  transitionDelay: `${index * 150}ms`
                }}
              >
                <CourseNode 
                  course={course}
                  index={index}
                  isSelected={selectedCourse?.id === course.id}
                  onSelect={(id) => setSelectedCourse(COURSES.find(c => c.id === id) || null)}
                />
              </div>
            ))}

            {/* Meta Final */}
            <div className="absolute" style={{ left: '80%', top: '85%' }}>
               <Checkpoint text={CHECKPOINT_TEXT} />
            </div>
          </div>
        </div>
      </main>

      {/* MODAL DE CURSO */}
      {selectedCourse && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/60 backdrop-blur-md animate-fadeIn" onClick={closeModal}>
          <div 
            className="bg-white w-full max-w-lg rounded-[2.5rem] overflow-hidden shadow-2xl animate-scaleUp border border-gray-100"
            onClick={(e) => e.stopPropagation()}
          >
            <div className="bg-[#6a041a] p-8 text-white relative">
               <button 
                 onClick={closeModal} 
                 className="absolute top-6 right-6 w-10 h-10 flex items-center justify-center rounded-full bg-white/10 hover:bg-white/20 text-white z-[70] transition-colors"
               >✕</button>
               <div className="relative z-10">
                 <span className="text-[9px] font-black uppercase tracking-[0.4em] text-white/60 mb-1 block">Módulo 0{COURSES.indexOf(selectedCourse) + 1}</span>
                 <h2 className="text-2xl font-black uppercase italic tracking-tighter leading-tight drop-shadow-sm">{selectedCourse.title}</h2>
               </div>
            </div>
            <div className="p-8 space-y-7">
               <div>
                 <h4 className="text-[10px] font-black text-[#ab022f] uppercase tracking-widest mb-2">Descripción Técnica</h4>
                 <p className="text-sm text-gray-600 font-medium leading-relaxed italic">{selectedCourse.description}</p>
               </div>
               
               <div className="grid grid-cols-1 gap-3">
                  <div className="flex gap-3">
                    <button onClick={() => setShowTutorial(true)} className="flex-1 bg-red-50 hover:bg-red-100 text-[#ab022f] py-4 rounded-2xl font-black text-[10px] uppercase tracking-widest flex items-center justify-center gap-2 border border-red-100 transition-all">
                      Guía de Video {IconMap.Youtube}
                    </button>
                    <a href={selectedCourse.link} target="_blank" className="flex-1 bg-gray-50 hover:bg-gray-100 text-[#6a041a] py-4 rounded-2xl font-black text-[10px] uppercase tracking-widest flex items-center justify-center gap-2 border border-gray-100 transition-all">
                      Syllabus {IconMap.ExternalLink}
                    </a>
                  </div>
                  <button onClick={() => shareOnLinkedIn(selectedCourse.title)} className="w-full bg-[#0077b5] hover:bg-[#005c8d] text-white py-4 rounded-2xl font-black text-[10px] uppercase tracking-widest flex items-center justify-center gap-3 shadow-lg shadow-[#0077b5]/20 transition-all active:scale-[0.98]">
                    Publicar Logro {IconMap.ExternalLink}
                  </button>
               </div>
               <p className="text-center text-[8px] font-bold text-gray-400 uppercase tracking-widest">
                 Certificación Oficial: {selectedCourse.certification}
               </p>
            </div>
          </div>
        </div>
      )}

      {/* MODAL DE VIDEO */}
      {showTutorial && (
        <div className="fixed inset-0 z-[100] flex items-center justify-center p-4 bg-black/95 backdrop-blur-2xl animate-fadeIn" onClick={() => setShowTutorial(false)}>
          <div className="w-full max-w-4xl aspect-video bg-black rounded-3xl overflow-hidden shadow-2xl relative border border-white/10 animate-scaleUp">
            <button onClick={() => setShowTutorial(false)} className="absolute top-6 right-6 z-[110] bg-white/10 hover:bg-white/30 text-white w-12 h-12 rounded-full flex items-center justify-center backdrop-blur-md transition-all">✕</button>
            <iframe className="w-full h-full" src="https://www.youtube.com/embed/dQw4w9WgXcQ?autoplay=1" title="YouTube" frameBorder="0" allowFullScreen></iframe>
          </div>
        </div>
      )}

      <style>{`
        @keyframes fadeIn { from { opacity: 0; } to { opacity: 1; } }
        @keyframes scaleUp { from { opacity: 0; transform: scale(0.9) translateY(20px); } to { opacity: 1; transform: scale(1) translateY(0); } }
        @keyframes roadFlow { from { stroke-dashoffset: 40; } to { stroke-dashoffset: 0; } }
        
        .animate-fadeIn { animation: fadeIn 0.3s ease-out; }
        .animate-scaleUp { animation: scaleUp 0.4s cubic-bezier(0.16, 1, 0.3, 1); }
        .animate-roadFlow { animation: roadFlow 2s linear infinite; }
      `}</style>
    </div>
  );
};

export default App;
