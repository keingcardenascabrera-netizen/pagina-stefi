
import React from 'react';

const testimonials = [
  {
    name: "Elena Thorne",
    role: "Guía Intuitiva",
    text: "SoulRise cambió por completo mi perspectiva sobre el poder. Antes lo buscaba fuera, ahora lo encuentro en mi meditación matutina.",
    image: "https://i.pravatar.cc/150?u=elena"
  },
  {
    name: "Marco Aurelio",
    role: "Artista",
    text: "Las sesiones energéticas liberaron bloqueos que arrastré por años. Mi creatividad fluye como nunca antes. Un trabajo transformador.",
    image: "https://i.pravatar.cc/150?u=marcus"
  },
  {
    name: "Sara Jenkins",
    role: "Profesora de Yoga",
    text: "Las velas sagradas y los cristales de la tienda han transformado mi hogar en un santuario de paz y amor propio.",
    image: "https://i.pravatar.cc/150?u=sarah"
  }
];

const Testimonials: React.FC = () => {
  return (
    <div className="py-24 bg-rose-50/50">
      <div className="container mx-auto px-6">
        <h2 className="text-center text-4xl font-serif text-slate-800 mb-16">Historias de <span className="italic text-rose-400">Resplandor</span></h2>
        
        <div className="grid md:grid-cols-3 gap-8">
          {testimonials.map((t, i) => (
            <div key={i} className="bg-white p-10 rounded-[2.5rem] shadow-sm hover:shadow-lg transition-shadow border border-rose-100/50 relative">
              <div className="absolute -top-6 left-10">
                <img src={t.image} alt={t.name} className="w-12 h-12 rounded-full border-4 border-white shadow-md object-cover" />
              </div>
              <p className="text-slate-600 italic leading-relaxed mb-6">"{t.text}"</p>
              <div>
                <h4 className="font-bold text-slate-800">{t.name}</h4>
                <p className="text-xs text-slate-400 uppercase tracking-widest">{t.role}</p>
              </div>
              <div className="absolute bottom-6 right-8 opacity-10">
                <svg width="40" height="40" viewBox="0 0 24 24" fill="currentColor">
                  <path d="M14.017 21L14.017 18C14.017 16.8954 14.9124 16 16.017 16H19.017C19.5693 16 20.017 15.5523 20.017 15V9C20.017 8.44772 19.5693 8 19.017 8H14.017C13.4647 8 13.017 8.44772 13.017 9V15C13.017 15.3129 13.1118 15.6186 13.292 15.8743L14.017 21ZM5.01699 21L5.01699 18C5.01699 16.8954 5.91243 16 7.01699 16H10.017C10.5693 16 11.017 15.5523 11.017 15V9C11.017 8.44772 10.5693 8 10.017 8H5.01699C4.46471 8 4.01699 8.44772 4.01699 9V15C4.01699 15.3129 4.11183 15.6186 4.29202 15.8743L5.01699 21Z" />
                </svg>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Testimonials;
