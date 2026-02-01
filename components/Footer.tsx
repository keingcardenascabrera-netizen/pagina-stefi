
import React from 'react';
import { Heart, Instagram, Twitter, Facebook, ArrowRight } from 'lucide-react';

const Footer: React.FC = () => {
  return (
    <footer className="bg-slate-900 text-slate-300 pt-20 pb-10">
      <div className="container mx-auto px-6">
        <div className="grid md:grid-cols-4 gap-12 mb-20">
          <div className="col-span-1 md:col-span-2">
            <a href="#" className="flex items-center gap-2 mb-6">
              <div className="w-8 h-8 bg-rose-500 rounded-full flex items-center justify-center">
                <Heart className="text-white w-4 h-4 fill-white" />
              </div>
              <span className="text-2xl font-serif font-bold tracking-tight text-white">SoulRise</span>
            </a>
            <p className="max-w-xs mb-8 leading-relaxed italic text-slate-400">
              "Amarse es poder." <br />
              Empoderando almas mediante la sanación consciente y una vida de alta frecuencia.
            </p>
            <div className="flex gap-4">
              <a href="#" className="p-2 bg-slate-800 rounded-full hover:bg-rose-500 hover:text-white transition-all"><Instagram size={18} /></a>
              <a href="#" className="p-2 bg-slate-800 rounded-full hover:bg-rose-500 hover:text-white transition-all"><Twitter size={18} /></a>
              <a href="#" className="p-2 bg-slate-800 rounded-full hover:bg-rose-500 hover:text-white transition-all"><Facebook size={18} /></a>
            </div>
          </div>
          
          <div>
            <h4 className="text-white font-bold uppercase tracking-widest text-sm mb-6">Santuario</h4>
            <ul className="space-y-4 text-sm">
              <li><a href="#services" className="hover:text-rose-400 transition-colors">Sesiones</a></li>
              <li><a href="#services" className="hover:text-rose-400 transition-colors">Meditaciones Digitales</a></li>
              <li><a href="#shop" className="hover:text-rose-400 transition-colors">Tienda Holística</a></li>
              <li><a href="#" className="hover:text-rose-400 transition-colors">Biblioteca de Rituales</a></li>
            </ul>
          </div>
          
          <div>
            <h4 className="text-white font-bold uppercase tracking-widest text-sm mb-6">Boletín</h4>
            <p className="text-xs text-slate-400 mb-4">Suscríbete para recibir rituales lunares e inspiración espiritual.</p>
            <div className="flex bg-slate-800 rounded-full p-1 border border-slate-700 focus-within:border-rose-400 transition-colors">
              <input 
                type="email" 
                placeholder="Tu email" 
                className="bg-transparent border-none outline-none px-4 py-2 w-full text-sm"
              />
              <button className="bg-rose-500 p-2 rounded-full text-white hover:bg-rose-600 transition-colors">
                <ArrowRight size={18} />
              </button>
            </div>
          </div>
        </div>
        
        <div className="pt-10 border-t border-slate-800 flex flex-col md:flex-row justify-between items-center gap-4 text-[10px] uppercase font-bold tracking-[0.2em] text-slate-500">
          <p>&copy; 2024 SOULRISE SANACIÓN ESPIRITUAL. TODOS LOS DERECHOS RESERVADOS.</p>
          <div className="flex gap-8">
            <a href="#" className="hover:text-rose-400 transition-colors">Privacidad</a>
            <a href="#" className="hover:text-rose-400 transition-colors">Términos</a>
            <a href="#" className="hover:text-rose-400 transition-colors">Cookies</a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
