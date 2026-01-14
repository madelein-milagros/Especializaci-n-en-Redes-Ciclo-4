
import React from 'react';
import { COURSES, CHECKPOINT_TEXT } from './constants';
import { CourseCard } from './components/CourseCard';
import { Checkpoint } from './components/Checkpoint';

const App: React.FC = () => {
  return (
    <div className="min-h-screen flex flex-col items-center py-12 px-4 sm:px-6">
      {/* Header */}
      <header className="text-center mb-16 max-w-3xl">
        <div className="inline-block px-4 py-1.5 mb-4 bg-[#ab022f]/10 text-[#ab022f] rounded-full text-xs font-bold tracking-widest uppercase">
          Carrera de Redes
        </div>
        <h1 className="text-4xl md:text-5xl font-black text-[#6a041a] mb-4">
          Especialización Profesional: Ciclo 4
        </h1>
        <p className="text-gray-500 text-lg font-medium leading-relaxed">
          Domina la infraestructura física, seguridad y servicios avanzados para convertirte en un experto en telecomunicaciones.
        </p>
      </header>

      {/* Course Container */}
      <main className="w-full flex flex-col items-center pb-24">
        {COURSES.map((course, index) => (
          <CourseCard 
            key={course.id} 
            course={course} 
            isFirst={index === 0} 
            isLast={index === COURSES.length - 1}
          />
        ))}
        
        <Checkpoint text={CHECKPOINT_TEXT} />
      </main>

      {/* Footer */}
      <footer className="mt-auto pt-12 pb-6 border-t border-gray-100 w-full text-center">
        <p className="text-gray-400 text-sm font-medium">
          &copy; {new Date().getFullYear()} Especialización en Redes - Guía de Formación Académica
        </p>
      </footer>
    </div>
  );
};

export default App;
