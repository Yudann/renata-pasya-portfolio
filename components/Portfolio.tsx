import React from 'react';
import { Project } from '../types';
import { ArrowUpRight } from 'lucide-react';

const projects: Project[] = [
  { id: 1, title: "Lumina Skin", category: "Brand Identity", image: "https://picsum.photos/600/800?random=1" },
  { id: 2, title: "Kopi Bumi", category: "Web Design", image: "https://picsum.photos/600/600?random=2" },
  { id: 3, title: "Studio Arsitek", category: "Photography", image: "https://picsum.photos/600/700?random=3" },
  { id: 4, title: "Cerita Rasa", category: "Social Media", image: "https://picsum.photos/600/900?random=4" },
  { id: 5, title: "Modern Living", category: "Web Development", image: "https://picsum.photos/600/600?random=5" },
  { id: 6, title: "Ethereal Fashion", category: "Art Direction", image: "https://picsum.photos/600/800?random=6" },
];

export const Portfolio: React.FC = () => {
  return (
    <section id="portfolio" className="py-24 bg-stone-50">
      <div className="container mx-auto px-6 md:px-12">
        <div className="text-center max-w-2xl mx-auto mb-16">
          <span className="text-xs uppercase tracking-widest text-stone-500 mb-2 block">Karya Terpilih</span>
          <h2 className="text-4xl md:text-5xl font-serif text-stone-900 mb-6">Kurasi Estetika</h2>
          <p className="text-stone-600 font-light">
            Setiap proyek adalah perjalanan unik. Berikut adalah beberapa kolaborasi favorit kami yang mencerminkan dedikasi terhadap detail.
          </p>
        </div>

        <div className="columns-1 md:columns-2 lg:columns-3 gap-8 space-y-8">
          {projects.map((project) => (
            <div key={project.id} className="group relative break-inside-avoid">
              <div className="overflow-hidden rounded-xl bg-stone-200">
                <img 
                  src={project.image} 
                  alt={project.title} 
                  className="w-full h-auto object-cover transition-transform duration-700 group-hover:scale-105 filter grayscale hover:grayscale-0"
                  loading="lazy"
                />
              </div>
              <div className="absolute inset-0 bg-stone-900/60 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex flex-col justify-end p-6 rounded-xl">
                <span className="text-stone-300 text-xs uppercase tracking-wider mb-1">{project.category}</span>
                <div className="flex justify-between items-end">
                  <h3 className="text-white text-2xl font-serif italic">{project.title}</h3>
                  <div className="bg-white p-2 rounded-full text-stone-900">
                    <ArrowUpRight size={16} />
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>

        <div className="text-center mt-16">
          <button className="px-8 py-3 border border-stone-800 text-stone-800 rounded-full hover:bg-stone-800 hover:text-white transition-all duration-300 text-sm tracking-wide">
            Lihat Arsip Lengkap
          </button>
        </div>
      </div>
    </section>
  );
};