
import React, { useState } from 'react';
import { COURSES, CHECKPOINT_TEXT } from './constants';
import { CourseNode } from './components/CourseNode';
import { Checkpoint } from './components/Checkpoint';
import { IconMap } from './components/Icons';
import { Course } from './types';

// Posiciones calculadas para visualización completa en una sola pantalla (Desktop/Laptop)
const ROAD_POINTS = [
  { x: 20, y: 22 }, // Paso 1
  { x: 80, y: 22 }, // Paso 2
  { x: 50, y: 50 }, // Paso 3
  { x: 20, y: 78 }, // Paso 4
];

const App: React.FC = () => {
  const [selectedCourse, setSelectedCourse] = useState<Course | null>(null);
  const [showTutorial, setShowTutorial] = useState(false);

  const closeModal = () => setSelectedCourse(null);

  const shareOnLinkedIn = (courseTitle: string) => {
    const careerTag = "Administración de Redes y Comunicaciones";
    // Formato exacto solicitado por el usuario
    const text = encodeURIComponent(`¡Módulo "${courseTitle}" completado en @Tecsup! 🚀 #${careerTag.replace(/\s+/g, '')} #Redes #Ciclo3`);
    const url = `https://www.linkedin.com/feed/?shareActive=true&text=${text}`;
    window.open(url, '_blank');
  };

  return (
    <div className="h-screen w-full bg-[#FDFDFD] flex flex-col overflow-hidden font-sans select-none relative">
      {/* Header Minimalista y Profesional */}
      <header className="px-6 py-3 flex items-center justify-between z-40 bg-white/80 backdrop-blur-md border-b border-gray-100 flex-shrink-0">
        <div className="flex items-center gap-3">
          <div className="w-8 h-8 bg-[#6a041a] rounded-lg flex items-center justify-center text-white text-lg font-black italic shadow-sm">R</div>
          <div>
            <h1 className="text-[10px] font-black text-[#6a041a] uppercase tracking-tighter leading-none">Roadmap Ciclo IV</h1>
            <p className="text-[7px] font-bold text-[#ab022f] uppercase tracking-widest">Administración de Redes y Comunicaciones</p>
          </div>
        </div>
        
        <div className="flex items-center gap-4">
          <div className="hidden md:block">
            <p className="text-[9px] font-black text-gray-400 uppercase tracking-widest">Explora tu ruta de aprendizaje</p>
          </div>
          <div className="flex gap-1">
            {COURSES.map((_, i) => (
              <div key={i} className={`w-3 h-1 rounded-full ${selectedCourse?.id === i + 1 ? 'bg-[#ab022f]' : 'bg-gray-200'}`} />
            ))}
          </div>
        </div>
      </header>

      <main className="flex-1 relative overflow-hidden bg-[radial-gradient(#e5e7eb_1px,transparent_1px)] [background-size:20px_20px]">
        {/* LIENZO DEL MAPA */}
        <div className="absolute inset-0 flex items-center justify-center p-4 md:p-12">
          <div className="relative w-full h-full max-w-6xl max-h-[500px]">
            
            {/* SVG de la Carretera */}
            <svg className="absolute inset-0 w-full h-full drop-shadow-xl" viewBox="0 0 1000 600" preserveAspectRatio="xMidYMid meet">
              <path 
                d="M 100 132 H 850 C 950 132, 950 300, 850 300 H 150 C 50 300, 50 468, 150 468 H 800" 
                fill="none" 
                stroke="#1a1a1a" 
                strokeWidth="28" 
                strokeLinecap="round"
              />
              <path 
                d="M 100 132 H 850 C 950 132, 950 300, 850 300 H 150 C 50 300, 50 468, 150 468 H 800" 
                fill="none" 
                stroke="white" 
                strokeWidth="1.2" 
                strokeDasharray="10, 15" 
                strokeLinecap="round" 
                className="opacity-30"
              />
              <circle cx="100" cy="132" r="6" fill="#ab022f" />
            </svg>

            {/* Renderizado de Nodos */}
            {COURSES.map((course, index) => (
              <div 
                key={course.id} 
                className="absolute" 
                style={{ left: `${ROAD_POINTS[index].x}%`, top: `${ROAD_POINTS[index].y}%` }}
              >
                <CourseNode 
                  course={course}
                  index={index}
                  isSelected={selectedCourse?.id === course.id}
                  onSelect={(id) => setSelectedCourse(COURSES.find(c => c.id === id) || null)}
                />
              </div>
            ))}

            {/* Checkpoint Final */}
            <div className="absolute" style={{ left: '80%', top: '78%' }}>
               <Checkpoint text={CHECKPOINT_TEXT} />
            </div>
          </div>
        </div>
      </main>

      {/* TARJETA DE INFORMACIÓN MODAL */}
      {selectedCourse && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/50 backdrop-blur-md animate-fadeIn" onClick={closeModal}>
          <div 
            className="bg-white w-full max-w-lg rounded-[2.5rem] overflow-hidden shadow-2xl animate-scaleUp border border-gray-100"
            onClick={(e) => e.stopPropagation()}
          >
            {/* Header de la Tarjeta */}
            <div className="bg-[#6a041a] p-8 text-white relative">
               <button 
                 onClick={(e) => {
                   e.stopPropagation();
                   closeModal();
                 }} 
                 className="absolute top-6 right-6 w-8 h-8 flex items-center justify-center rounded-full bg-white/10 hover:bg-white/20 text-white transition-all z-[60]"
                 aria-label="Cerrar"
               >✕</button>
               <div className="relative z-10">
                 <div className="flex items-center gap-2 mb-2">
                   <span className="text-[9px] font-black uppercase tracking-[0.4em] text-white/60">Paso 0{COURSES.indexOf(selectedCourse) + 1}</span>
                   <div className="h-px flex-1 bg-white/10"></div>
                 </div>
                 <h2 className="text-2xl font-black uppercase italic tracking-tighter leading-tight drop-shadow-md">
                   {selectedCourse.title}
                 </h2>
               </div>
               <div className="absolute -right-8 -bottom-8 opacity-[0.03] scale-[2.5] rotate-12">
                  {IconMap[selectedCourse.icon]}
               </div>
            </div>

            {/* Contenido de la Tarjeta */}
            <div className="p-8 space-y-7">
               <div>
                  <h4 className="text-[10px] font-black text-[#ab022f] uppercase tracking-widest mb-2 flex items-center gap-2">
                    <span className="w-1.5 h-1.5 bg-[#ab022f] rounded-full"></span> Resumen del Módulo
                  </h4>
                  <p className="text-sm text-gray-600 font-medium leading-relaxed italic">
                    {selectedCourse.description}
                  </p>
               </div>

               <div className="grid grid-cols-1 gap-3">
                  <div className="flex gap-3">
                    <button 
                      onClick={() => setShowTutorial(true)}
                      className="flex-1 bg-red-50 hover:bg-red-100 text-[#ab022f] py-3.5 rounded-2xl font-black text-[10px] uppercase tracking-widest flex items-center justify-center gap-2 transition-all border border-red-100"
                    >
                      Ver Guía de Módulo {IconMap.Youtube}
                    </button>
                    <a 
                      href={selectedCourse.link} 
                      target="_blank" 
                      rel="noopener noreferrer"
                      className="flex-1 bg-gray-50 hover:bg-gray-100 text-[#6a041a] py-3.5 rounded-2xl font-black text-[10px] uppercase tracking-widest flex items-center justify-center gap-2 transition-all border border-gray-100"
                    >
                      Syllabus {IconMap.ExternalLink}
                    </a>
                  </div>
                  
                  <button 
                    onClick={() => shareOnLinkedIn(selectedCourse.title)}
                    className="w-full bg-[#0077b5] hover:bg-[#005c8d] text-white py-3.5 rounded-2xl font-black text-[10px] uppercase tracking-widest flex items-center justify-center gap-3 transition-all shadow-lg shadow-[#0077b5]/20 active:scale-[0.98]"
                  >
                    Publicar Logro en LinkedIn {IconMap.ExternalLink}
                  </button>
               </div>
               
               <p className="text-center text-[8px] font-bold text-gray-400 uppercase tracking-widest">
                 Certificación: {selectedCourse.certification}
               </p>
            </div>
          </div>
        </div>
      )}

      {/* MODAL DE VIDEO TUTORIAL */}
      {showTutorial && (
        <div className="fixed inset-0 z-[100] flex items-center justify-center p-4 bg-black/90 backdrop-blur-xl animate-fadeIn" onClick={() => setShowTutorial(false)}>
          <div 
            className="w-full max-w-4xl aspect-video bg-black rounded-3xl overflow-hidden shadow-2xl relative border border-white/10"
            onClick={(e) => e.stopPropagation()}
          >
            <button 
              onClick={(e) => {
                e.stopPropagation();
                setShowTutorial(false);
              }}
              className="absolute top-4 right-4 z-[110] bg-white/10 hover:bg-white/20 text-white w-10 h-10 rounded-full flex items-center justify-center backdrop-blur-md"
              aria-label="Cerrar video"
            >✕</button>
            <iframe 
              className="w-full h-full"
              src="https://www.youtube.com/embed/dQw4w9WgXcQ?autoplay=1" 
              title="YouTube Tutorial" 
              frameBorder="0" 
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" 
              allowFullScreen
            ></iframe>
          </div>
        </div>
      )}

      <style>{`
        @keyframes fadeIn { from { opacity: 0; } to { opacity: 1; } }
        @keyframes scaleUp { from { opacity: 0; transform: scale(0.9) translateY(20px); } to { opacity: 1; transform: scale(1) translateY(0); } }
        .animate-fadeIn { animation: fadeIn 0.3s ease-out; }
        .animate-scaleUp { animation: scaleUp 0.4s cubic-bezier(0.16, 1, 0.3, 1); }
        
        @media (max-width: 768px) {
          .animate-scaleUp { 
            animation: slideUpMobile 0.4s ease-out;
            position: fixed;
            bottom: 0;
            border-radius: 2rem 2rem 0 0;
            max-width: 100%;
          }
        }
        @keyframes slideUpMobile { from { transform: translateY(100%); } to { transform: translateY(0); } }
      `}</style>
    </div>
  );
};

export default App;
