import React from 'react';
import { PenTool, Monitor, Camera, Palette } from 'lucide-react';
import { Service } from '../types';

const services: Service[] = [
  {
    id: 1,
    title: "Brand Identity",
    description: "Membangun identitas visual yang kohesif dan berkarakter untuk merepresentasikan nilai inti bisnis Anda.",
    icon: <Palette className="w-6 h-6" />
  },
  {
    id: 2,
    title: "Web Development",
    description: "Website responsif dan performa tinggi dengan sentuhan estetika yang memanjakan pengalaman pengguna.",
    icon: <Monitor className="w-6 h-6" />
  },
  {
    id: 3,
    title: "Content Creation",
    description: "Strategi konten visual dan tekstual yang bercerita dan membangun koneksi emosional dengan audiens.",
    icon: <PenTool className="w-6 h-6" />
  },
  {
    id: 4,
    title: "Photography Direction",
    description: "Arahan artistik untuk fotografi produk dan editorial yang selaras dengan nuansa brand Anda.",
    icon: <Camera className="w-6 h-6" />
  }
];

export const Services: React.FC = () => {
  return (
    <section id="services" className="py-24 bg-stone-100">
      <div className="container mx-auto px-6 md:px-12">
        <div className="flex flex-col md:flex-row justify-between items-end mb-16">
          <div className="max-w-xl">
            <h2 className="text-3xl md:text-4xl font-serif text-stone-900 mb-4">Layanan Eksklusif</h2>
            <p className="text-stone-500 font-light">
              Kami menawarkan pendekatan holistik dalam desain dan strategi digital, memastikan setiap aspek brand Anda terintegrasi dengan harmonis.
            </p>
          </div>
          <a href="#contact" className="hidden md:block text-stone-800 border-b border-stone-800 pb-1 text-sm hover:text-stone-500 hover:border-stone-500 transition-colors">
            Lihat semua layanan
          </a>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {services.map((service) => (
            <div key={service.id} className="bg-white p-8 rounded-2xl shadow-sm hover:shadow-md transition-shadow duration-300 group">
              <div className="w-12 h-12 bg-stone-50 rounded-full flex items-center justify-center text-stone-700 mb-6 group-hover:bg-stone-800 group-hover:text-white transition-colors duration-300">
                {service.icon}
              </div>
              <h3 className="text-xl font-serif text-stone-900 mb-3">{service.title}</h3>
              <p className="text-stone-500 text-sm leading-relaxed">{service.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};