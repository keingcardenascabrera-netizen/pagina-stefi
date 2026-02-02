
import React from 'react';
import { Sparkles, ArrowRight, Heart } from 'lucide-react';

const Hero: React.FC = () => {
  return (
    <div className="relative min-h-screen flex items-center overflow-hidden pt-20">
      {/* Fondo con gradientes suaves */}
      <div className="absolute top-20 -left-20 w-96 h-96 bg-rose-200/30 rounded-full blur-[100px]" />
      <div className="absolute bottom-20 -right-20 w-[500px] h-[500px] bg-purple-200/30 rounded-full blur-[100px]" />

      <div className="container mx-auto px-6 relative z-10">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <div className="text-center lg:text-left">
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white/50 border border-rose-100 text-rose-600 text-xs font-semibold tracking-widest uppercase mb-8 animate-float">
              <Sparkles size={14} />
              Sanación Energética y Amor Propio
            </div>
            
            <h1 className="text-5xl md:text-7xl xl:text-8xl font-serif leading-[1.1] text-slate-800 mb-8">
              Sana tu Alma, <br />
              <span className="text-rose-400 italic font-medium">Eleva tu Poder</span>
            </h1>
            
            <p className="text-lg md:text-xl text-slate-600 mb-12 max-w-2xl mx-auto lg:mx-0 leading-relaxed">
              Descubre el camino hacia tu bienestar integral. SoulRise es un santuario diseñado para reconectar con tu esencia pura a través de la consciencia y la energía.
            </p>
            
            <div className="flex flex-col sm:flex-row items-center justify-center lg:justify-start gap-4">
              <a 
                href="#services"
                className="w-full sm:w-auto px-8 py-4 bg-rose-400 hover:bg-rose-500 text-white rounded-full font-semibold transition-all shadow-lg shadow-rose-200 hover:shadow-xl hover:-translate-y-1 flex items-center justify-center gap-2 group"
              >
                Inicia tu Camino
                <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
              </a>
              <button className="w-full sm:w-auto px-8 py-4 bg-white/80 hover:bg-white text-slate-800 border border-slate-200 rounded-full font-semibold transition-all hover:shadow-md">
                Explora el Poder
              </button>
            </div>
          </div>

          <div className="relative">
            <div className="relative z-10 animate-float" style={{ animationDuration: '8s' }}>
              <div className="absolute -inset-10 bg-rose-200/40 rounded-full blur-3xl animate-pulse"></div>
              <div className="relative aspect-square max-w-md mx-auto">
                <img 
                  src="https://images.unsplash.com/photo-1519817650390-64a93db51149?auto=format&fit=crop&q=80&w=1000" 
                  alt="Energía Espiritual" 
                  className="relative rounded-[4rem] w-full h-full object-cover shadow-2xl border-8 border-white/50"
                />
                
                <div className="absolute -bottom-6 -right-6 glass p-6 rounded-3xl shadow-2xl hidden lg:block border border-white">
                  <div className="flex items-center gap-3">
                    <div className="w-12 h-12 bg-rose-100 rounded-full flex items-center justify-center">
                      <Heart className="text-rose-400 fill-rose-400" size={20} />
                    </div>
                    <div>
                      <p className="text-[10px] font-bold text-rose-400 uppercase tracking-widest font-sans">Afirmación</p>
                      <p className="font-serif italic text-slate-800">"Amarse es Poder"</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hero;
