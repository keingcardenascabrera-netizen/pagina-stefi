
import React from 'react';
import { Sun, Wind, Heart, Zap } from 'lucide-react';

const services = [
  {
    title: "Sesiones Energéticas",
    description: "Alineación de frecuencia profunda para equilibrar tus chakras y liberar bloqueos emocionales.",
    icon: <Zap className="w-8 h-8 text-rose-400" />,
    color: "bg-rose-50"
  },
  {
    title: "Terapias Holísticas",
    description: "Sanación integral del cuerpo y alma mediante medicina natural, baños de sonido y tacto intuitivo.",
    icon: <Sun className="w-8 h-8 text-amber-400" />,
    color: "bg-amber-50"
  },
  {
    title: "Acompañamiento Espiritual",
    description: "Mentoría personalizada para navegar tu despertar y encontrar la verdadera misión de tu alma.",
    icon: <Heart className="w-8 h-8 text-emerald-400" />,
    color: "bg-emerald-50"
  },
  {
    title: "Meditaciones Guiadas",
    description: "Viajes de mindfulness curados para llevarte a un estado de presencia profunda y claridad.",
    icon: <Wind className="w-8 h-8 text-indigo-400" />,
    color: "bg-indigo-50"
  }
];

const Services: React.FC = () => {
  return (
    <div className="py-24 bg-slate-50">
      <div className="container mx-auto px-6">
        <div className="text-center max-w-2xl mx-auto mb-16">
          <h2 className="text-4xl font-serif text-slate-800 mb-4">Sana tu <span className="italic text-rose-400">Espíritu</span></h2>
          <p className="text-slate-600">Modalidades sagradas diseñadas para devolverte a tu estado natural de plenitud y amor.</p>
        </div>
        
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-8">
          {services.map((service, index) => (
            <div 
              key={index}
              className="group p-8 bg-white rounded-3xl border border-slate-100 hover:border-rose-100 transition-all duration-300 hover:shadow-xl hover:-translate-y-2 text-center"
            >
              <div className={`w-16 h-16 ${service.color} rounded-2xl flex items-center justify-center mx-auto mb-6 group-hover:scale-110 transition-transform`}>
                {service.icon}
              </div>
              <h3 className="text-xl font-serif text-slate-800 mb-4">{service.title}</h3>
              <p className="text-slate-600 leading-relaxed text-sm">
                {service.description}
              </p>
              <button className="mt-6 text-rose-400 text-xs font-bold uppercase tracking-widest hover:text-rose-600 transition-colors">
                Saber más
              </button>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Services;
