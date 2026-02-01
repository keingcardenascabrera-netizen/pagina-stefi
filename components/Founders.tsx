
import React from 'react';
import { Sparkles, Heart, Award } from 'lucide-react';

const founders = [
  {
    name: "Valentina Luna",
    role: "Fundadora y Guía Principal",
    bio: "Visionaria de SoulRise y canalizadora de energía. Valentina dedica su vida a recordar a otros que el amor propio es el pilar de toda sanación.",
    image: "https://images.unsplash.com/photo-1544005313-94ddf0286df2?auto=format&fit=crop&q=80&w=600",
    isMain: true
  },
  {
    name: "Mateo Rivera",
    role: "Co-Fundador y Guardián",
    bio: "Experto en consciencia colectiva y equilibrio energético. Mateo es el pilar que sostiene la estructura vibracional de nuestro espacio sagrado.",
    image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&q=80&w=600",
    isMain: false
  }
];

const Founders: React.FC = () => {
  return (
    <div className="py-24 relative overflow-hidden bg-white/50">
      <div className="container mx-auto px-6 relative z-10">
        <div className="text-center max-w-3xl mx-auto mb-20">
          <div className="flex justify-center mb-4">
            <div className="w-12 h-12 bg-rose-50 rounded-full flex items-center justify-center">
              <Heart className="text-rose-400 w-6 h-6 fill-rose-100" />
            </div>
          </div>
          <h2 className="text-4xl md:text-5xl font-serif text-slate-800 mb-6">
            Las Almas de <span className="italic text-rose-400">SoulRise</span>
          </h2>
          <p className="text-slate-600 text-lg">
            Unidos por un propósito: crear un mundo donde cada persona reconozca su propio valor sagrado.
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-12 lg:gap-24 max-w-6xl mx-auto">
          {founders.map((founder, index) => (
            <div key={index} className="group">
              <div className={`relative p-8 md:p-12 rounded-[4rem] transition-all duration-500 border ${founder.isMain ? 'bg-rose-50/40 border-rose-100 shadow-2xl shadow-rose-100/20' : 'bg-slate-50/50 border-slate-100'}`}>
                {founder.isMain && (
                  <div className="absolute -top-4 left-1/2 -translate-x-1/2 bg-rose-400 text-white px-6 py-1.5 rounded-full text-[10px] font-bold uppercase tracking-[0.2em] flex items-center gap-2 shadow-lg">
                    <Award size={14} /> Creadora Principal
                  </div>
                )}
                
                <div className="flex flex-col items-center text-center">
                  <div className="relative mb-10">
                    <div className={`absolute -inset-4 rounded-full blur-xl opacity-20 group-hover:opacity-40 transition-opacity ${founder.isMain ? 'bg-rose-400' : 'bg-slate-400'}`}></div>
                    <img 
                      src={founder.image} 
                      alt={founder.name}
                      className="relative w-52 h-52 rounded-full object-cover border-8 border-white shadow-xl transition-all duration-700 group-hover:scale-105"
                    />
                  </div>
                  
                  <div className="flex items-center gap-2 text-rose-400 mb-3">
                    <Sparkles size={16} />
                    <span className="text-xs font-bold uppercase tracking-[0.2em]">{founder.role}</span>
                  </div>
                  <h3 className="text-3xl font-serif text-slate-800 mb-4">{founder.name}</h3>
                  <p className="text-slate-600 leading-relaxed max-w-md italic">
                    "{founder.bio}"
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Founders;
