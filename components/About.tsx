
import React from 'react';

const About: React.FC = () => {
  return (
    <div className="py-24 bg-white overflow-hidden">
      <div className="container mx-auto px-6">
        <div className="grid md:grid-cols-2 gap-16 items-center">
          <div className="relative group">
            <div className="absolute -inset-4 bg-rose-100 rounded-[2rem] transform rotate-3 transition-transform group-hover:rotate-1" />
            <img 
              src="https://images.unsplash.com/photo-1528319725582-ddc096101511?auto=format&fit=crop&q=80&w=800" 
              alt="Meditación SoulRise" 
              className="relative rounded-[2rem] w-full h-[600px] object-cover shadow-2xl transition-transform duration-500 group-hover:scale-[1.01]"
            />
            <div className="absolute bottom-8 -right-8 glass p-6 rounded-2xl shadow-xl max-w-xs hidden lg:block">
              <p className="font-serif italic text-rose-600 text-lg">"La energía que buscas ya reside en tu interior."</p>
            </div>
          </div>
          
          <div>
            <span className="text-rose-500 font-bold uppercase tracking-widest text-sm mb-4 block font-sans">Nuestra Esencia Sagrada</span>
            <h2 className="text-4xl md:text-5xl font-serif text-slate-800 mb-8 leading-tight">
              Un Viaje de <span className="italic text-rose-400">Transformación Consciente</span>
            </h2>
            <p className="text-slate-600 text-lg mb-6 leading-relaxed">
              En SoulRise, creemos que la salud espiritual es la base de una vida vibrante. Nuestra filosofía se basa en la sabiduría ancestral de que el amor propio no es solo un sentimiento: es un poder inmenso capaz de sanar desequilibrios.
            </p>
            <p className="text-slate-600 text-lg mb-8 leading-relaxed font-sans font-light">
              Te guiamos por el camino del despertar, ayudándote a reconectar con el propósito de tu alma mediante medicina energética y prácticas centradas en el corazón.
            </p>
            
            <div className="grid grid-cols-2 gap-8 pt-8 border-t border-slate-100">
              <div>
                <h4 className="text-3xl font-serif text-rose-400 mb-2">98%</h4>
                <p className="text-xs text-slate-500 font-bold uppercase tracking-wider font-sans">Paz Interior</p>
              </div>
              <div>
                <h4 className="text-3xl font-serif text-emerald-400 mb-2">10k+</h4>
                <p className="text-xs text-slate-500 font-bold uppercase tracking-wider font-sans">Almas Sanadas</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
