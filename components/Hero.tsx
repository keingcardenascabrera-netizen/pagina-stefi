
import React from 'react';
// Added Heart to imports to fix the 'Cannot find name Heart' error
import { Sparkles, ArrowRight, Heart } from 'lucide-react';

const Hero: React.FC = () => {
  return (
    <div className="relative min-h-screen flex items-center overflow-hidden pt-20">
      {/* Elementos de fondo decorativos */}
      <div className="absolute top-20 -left-20 w-96 h-96 bg-rose-200/30 rounded-full blur-[100px]" />
      <div className="absolute bottom-20 -right-20 w-[500px] h-[500px] bg-purple-200/30 rounded-full blur-[100px]" />
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-emerald-100/20 rounded-full blur-[120px]" />

      <div className="container mx-auto px-6 relative z-10">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <div className="text-center lg:text-left order-2 lg:order-1">
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white/50 border border-rose-100 text-rose-600 text-xs font-semibold tracking-widest uppercase mb-8 animate-float">
              <Sparkles size={14} />
              Liderazgo Consciente y Sanación
            </div>
            
            <h1 className="text-5xl md:text-7xl xl:text-8xl font-serif leading-[1.1] text-slate-800 mb-8">
              Sana tu Alma, <br />
              <span className="text-rose-400 italic font-medium">Eleva tu Poder</span>
            </h1>
            
            <p className="text-lg md:text-xl text-slate-600 mb-12 max-w-2xl mx-auto lg:mx-0 leading-relaxed">
              Soy Valentina Luna, creadora de SoulRise. Mi misión es guiarte de regreso a tu esencia más pura a través del amor propio y la sanación energética.
            </p>
            
            <div className="flex flex-col sm:flex-row items-center justify-center lg:justify-start gap-4">
              <a 
                href="#services"
                className="w-full sm:w-auto px-8 py-4 bg-rose-400 hover:bg-rose-500 text-white rounded-full font-semibold transition-all shadow-lg shadow-rose-200 hover:shadow-xl hover:-translate-y-1 flex items-center justify-center gap-2 group"
              >
                Inicia tu Camino
                <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
              </a>
              <a 
                href="#founders"
                className="w-full sm:w-auto px-8 py-4 bg-white/80 hover:bg-white text-slate-800 border border-slate-200 rounded-full font-semibold transition-all hover:shadow-md flex items-center justify-center"
              >
                Conoce a los Guías
              </a>
            </div>
          </div>

          <div className="relative order-1 lg:order-2">
            <div className="relative z-10 animate-float" style={{ animationDuration: '8s' }}>
              {/* Efecto de Aura */}
              <div className="absolute -inset-10 bg-rose-200/40 rounded-full blur-3xl animate-pulse"></div>
              <div className="absolute -inset-4 bg-gradient-to-tr from-rose-200 to-purple-200 rounded-[4rem] opacity-30 blur-xl"></div>
              
              <div className="relative aspect-[4/5] max-w-md mx-auto">
                <img 
                  src="https://images.unsplash.com/photo-1544005313-94ddf0286df2?auto=format&fit=crop&q=80&w=800" 
                  alt="Valentina Luna - Fundadora de SoulRise" 
                  className="relative rounded-[4rem] w-full h-full object-cover shadow-2xl border-8 border-white/50 transition-transform duration-700 hover:scale-[1.02]"
                />
                
                {/* Floating Badge */}
                <div className="absolute -bottom-6 -right-6 glass p-6 rounded-3xl shadow-2xl hidden lg:block animate-float border border-white" style={{ animationDelay: '1s' }}>
                  <div className="flex items-center gap-3">
                    <div className="w-12 h-12 bg-rose-100 rounded-full flex items-center justify-center">
                      <Heart className="text-rose-400 fill-rose-400" size={20} />
                    </div>
                    <div>
                      <p className="text-[10px] font-bold text-rose-400 uppercase tracking-widest">Creadora Principal</p>
                      <p className="font-serif italic text-slate-800">"Amarse es Poder"</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      
      {/* Onda decorativa en el footer del hero */}
      <div className="absolute bottom-0 left-0 w-full opacity-30 select-none pointer-events-none">
        <svg viewBox="0 0 1440 320" xmlns="http://www.w3.org/2000/svg">
          <path fill="#FCE7F3" fillOpacity="1" d="M0,224L48,213.3C96,203,192,181,288,181.3C384,181,480,203,576,213.3C672,224,768,224,864,213.3C960,203,1056,181,1152,181.3C1248,181,1344,203,1392,213.3L1440,224L1440,320L1392,320C1344,320,1248,320,1152,320C1056,320,960,320,864,320C768,320,672,320,576,320C480,320,384,320,288,320C192,320,96,320,48,320L0,320Z"></path>
        </svg>
      </div>
    </div>
  );
};

export default Hero;
