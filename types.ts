import React from 'react';

export interface Service {
  id: string;
  title: string;
  description: string;
  // Fix: Added React import to resolve the namespace error for React.ReactNode
  icon: React.ReactNode;
}

export interface Product {
  id: string;
  name: string;
  price: number;
  image: string;
  category: string;
}

export interface Testimonial {
  id: string;
  name: string;
  text: string;
  role: string;
}