import React from 'react';

export interface Project {
  id: number;
  title: string;
  category: string;
  image: string;
}

export interface Service {
  id: number;
  title: string;
  description: string;
  icon: React.ReactNode;
}

export interface Testimonial {
  id: number;
  name: string;
  role: string;
  quote: string;
}