
import React from 'react';
import { ShoppingBag, Star } from 'lucide-react';

const products = [
  {
    name: "Amatista del Alma",
    price: 45,
    category: "Cristales",
    image: "https://images.unsplash.com/photo-1523350165414-082d792c9bd2?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&q=80"
  },
  {
    name: "Vela Sagrada de Rosas",
    price: 32,
    category: "Rituales",
    image: "https://images.unsplash.com/photo-1602872030219-0114a457497d?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&q=80"
  },
  {
    name: "Aceite de Limpieza Áurica",
    price: 28,
    category: "Aromaterapia",
    image: "https://images.unsplash.com/photo-1608571423902-eed4a5ad8108?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&q=80"
  },
  {
    name: "E-Book: El Viaje de Sanación",
    price: 19,
    category: "Digital",
    image: "https://images.unsplash.com/photo-1544716278-ca5e3f4abd8c?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&q=80"
  }
];

const Shop: React.FC = () => {
  return (
    <div className="py-24 bg-white">
      <div className="container mx-auto px-6">
        <div className="flex flex-col md:flex-row justify-between items-end gap-6 mb-16">
          <div className="max-w-xl">
            <h2 className="text-4xl font-serif text-slate-800 mb-4">La <span className="italic text-rose-400">Tienda del Alma</span></h2>
            <p className="text-slate-600">Herramientas de alta vibración para apoyar tus prácticas espirituales diarias y tu entorno de sanación.</p>
          </div>
          <a href="#" className="hidden md:inline-flex items-center gap-2 text-rose-400 font-bold uppercase tracking-widest text-xs hover:gap-4 transition-all">
            Ver todos los productos <ShoppingBag size={16} />
          </a>
        </div>
        
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
          {products.map((product, index) => (
            <div key={index} className="group">
              <div className="relative overflow-hidden rounded-3xl bg-slate-100 aspect-[4/5] mb-4">
                <img 
                  src={product.image} 
                  alt={product.name}
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                />
                <div className="absolute top-4 right-4 flex gap-1">
                  <span className="bg-white/90 backdrop-blur px-3 py-1 rounded-full text-[10px] font-bold uppercase tracking-wider text-slate-800 flex items-center gap-1 shadow-sm">
                    <Star size={10} className="fill-amber-400 text-amber-400" /> Más vendido
                  </span>
                </div>
                <button className="absolute bottom-4 inset-x-4 bg-white text-slate-800 py-3 rounded-2xl font-bold text-sm shadow-xl translate-y-20 group-hover:translate-y-0 transition-transform duration-300 flex items-center justify-center gap-2 hover:bg-rose-50 hover:text-rose-500">
                  <ShoppingBag size={16} /> Añadir al carrito
                </button>
              </div>
              <div>
                <span className="text-[10px] uppercase font-bold tracking-widest text-rose-400 mb-1 block">{product.category}</span>
                <h3 className="font-serif text-lg text-slate-800 group-hover:text-rose-500 transition-colors">{product.name}</h3>
                <p className="text-slate-500 font-medium">${product.price}.00</p>
              </div>
            </div>
          ))}
        </div>
        
        <div className="mt-12 text-center md:hidden">
           <a href="#" className="inline-flex items-center gap-2 text-rose-400 font-bold uppercase tracking-widest text-xs">
            Ver todos los productos <ShoppingBag size={16} />
          </a>
        </div>
      </div>
    </div>
  );
};

export default Shop;
