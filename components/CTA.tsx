
import React from 'react';
import { Sparkles } from 'lucide-react';

const CTA: React.FC = () => {
  return (
    <div className="py-24 relative overflow-hidden">
      <div className="absolute inset-0 bg-rose-400">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,_var(--tw-gradient-stops))] from-rose-300/50 via-rose-400 to-rose-500 opacity-80" />
      </div>
      
      <div className="container mx-auto px-6 relative z-10 text-center">
        <div className="max-w-3xl mx-auto">
          <Sparkles className="text-rose-100 w-12 h-12 mx-auto mb-8 animate-pulse" />
          <h2 className="text-4xl md:text-6xl font-serif text-white mb-8 leading-tight">
            El Mundo Despierta <br /> <span className="italic text-rose-100">Cuando Tú Comienzas.</span>
          </h2>
          <p className="text-rose-50 text-xl mb-12 opacity-90">
            Da el primer paso hacia una vida de sanación profunda y un amor propio inquebrantable. 
            Tu alma está lista. ¿Y tú?
          </p>
          <button className="px-10 py-5 bg-white text-rose-500 rounded-full font-bold text-lg hover:scale-105 transition-all shadow-2xl hover:shadow-rose-900/20 active:scale-95">
            Inicia tu Viaje Hoy
          </button>
        </div>
      </div>
    </div>
  );
};

export default CTA;
