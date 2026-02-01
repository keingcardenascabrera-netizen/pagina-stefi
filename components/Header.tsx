
import React, { useState } from 'react';
import { Menu, X, Heart, ShoppingCart } from 'lucide-react';

interface HeaderProps {
  scrolled: boolean;
}

const Header: React.FC<HeaderProps> = ({ scrolled }) => {
  const [isOpen, setIsOpen] = useState(false);

  const navLinks = [
    { name: 'Inicio', href: '#home' },
    { name: 'Filosofía', href: '#about' },
    { name: 'Sanación', href: '#services' },
    { name: 'Tienda', href: '#shop' },
    { name: 'Tu Camino', href: '#contact' },
  ];

  return (
    <nav className={`fixed w-full z-50 transition-all duration-500 ${scrolled ? 'py-4 glass shadow-sm' : 'py-6 bg-transparent'}`}>
      <div className="container mx-auto px-6 flex justify-between items-center">
        <a href="#home" className="flex items-center gap-2">
          <div className="w-10 h-10 bg-rose-200 rounded-full flex items-center justify-center">
            <Heart className="text-rose-500 w-5 h-5 fill-rose-500" />
          </div>
          <span className="text-2xl font-serif font-bold tracking-tight text-slate-800">SoulRise</span>
        </a>

        {/* Desktop Nav */}
        <div className="hidden md:flex items-center space-x-8">
          {navLinks.map((link) => (
            <a 
              key={link.name} 
              href={link.href}
              className="text-sm font-medium text-slate-600 hover:text-rose-500 transition-colors uppercase tracking-widest"
            >
              {link.name}
            </a>
          ))}
          <button className="p-2 hover:bg-rose-50 rounded-full transition-colors relative">
            <ShoppingCart className="w-5 h-5 text-slate-700" />
            <span className="absolute top-0 right-0 w-2 h-2 bg-rose-400 rounded-full"></span>
          </button>
        </div>

        {/* Mobile Menu Button */}
        <div className="md:hidden flex items-center gap-4">
          <button className="p-2 hover:bg-rose-50 rounded-full transition-colors">
            <ShoppingCart className="w-5 h-5 text-slate-700" />
          </button>
          <button onClick={() => setIsOpen(!isOpen)} className="text-slate-800">
            {isOpen ? <X size={28} /> : <Menu size={28} />}
          </button>
        </div>
      </div>

      {/* Mobile Sidebar */}
      <div className={`fixed inset-0 bg-white/95 backdrop-blur-md z-40 transform transition-transform duration-500 ease-in-out md:hidden ${isOpen ? 'translate-x-0' : 'translate-x-full'}`}>
        <div className="flex flex-col items-center justify-center h-full space-y-8">
          {navLinks.map((link) => (
            <a 
              key={link.name} 
              href={link.href} 
              onClick={() => setIsOpen(false)}
              className="text-2xl font-serif text-slate-800 hover:text-rose-500 transition-colors"
            >
              {link.name}
            </a>
          ))}
        </div>
      </div>
    </nav>
  );
};

export default Header;
