
import React from 'react';

export interface Service {
  title: string;
  description: string;
  icon: React.ReactNode;
  color: string;
}

export interface Product {
  name: string;
  price: number;
  category: string;
  image: string;
}

export interface Testimonial {
  name: string;
  role: string;
  text: string;
  image: string;
}
