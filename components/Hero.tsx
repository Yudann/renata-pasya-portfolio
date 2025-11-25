import React from 'react';
import { ArrowDown } from 'lucide-react';

export const Hero: React.FC = () => {
  return (
    <section id="hero" className="relative min-h-screen flex items-center pt-20 overflow-hidden">
      {/* Abstract Background Shapes */}
      <div className="absolute top-0 right-0 w-1/2 h-full bg-stone-100/50 -z-10 rounded-l-[100px] hidden md:block"></div>
      <div className="absolute bottom-20 left-10 w-64 h-64 bg-nature-sage/10 rounded-full blur-3xl -z-10"></div>

      <div className="container mx-auto px-6 md:px-12 flex flex-col md:flex-row items-center">
        <div className="w-full md:w-1/2 space-y-8 fade-in-up">
          <span className="inline-block px-3 py-1 border border-stone-300 rounded-full text-xs uppercase tracking-widest text-stone-500">
            Portfolio & Creative Studio
          </span>
          <h1 className="text-5xl md:text-7xl font-serif font-light text-stone-900 leading-[1.1]">
            Merangkai <span className="italic text-stone-500">Esensi</span> <br/>
            Menjadi Realitas Digital.
          </h1>
          <p className="text-lg text-stone-600 max-w-md font-light leading-relaxed">
            Kami membantu brand Anda berbicara melalui desain yang tenang, bermakna, dan abadi. Pendekatan minimalis untuk dampak maksimal.
          </p>
          <div className="flex space-x-4 pt-4">
            <a href="#portfolio" className="px-8 py-3 bg-stone-800 text-white rounded-full hover:bg-stone-700 transition-all duration-300 shadow-lg shadow-stone-200">
              Lihat Karya
            </a>
            <a href="#contact" className="px-8 py-3 border border-stone-300 text-stone-700 rounded-full hover:border-stone-800 hover:text-stone-900 transition-all duration-300">
              Diskusi
            </a>
          </div>
        </div>

        <div className="w-full md:w-1/2 mt-16 md:mt-0 relative fade-in-up delay-200">
          <div className="relative z-10">
             <div className="aspect-[4/5] md:aspect-[3/4] overflow-hidden rounded-t-[10rem] rounded-b-2xl shadow-2xl shadow-stone-200">
                <img 
                  src="https://picsum.photos/800/1000?grayscale" 
                  alt="Aesthetic Workspace" 
                  className="w-full h-full object-cover hover:scale-105 transition-transform duration-1000"
                />
             </div>
          </div>
          {/* Decorative element */}
          <div className="absolute -bottom-10 -right-10 w-40 h-40 border border-stone-300 rounded-full flex items-center justify-center bg-white/50 backdrop-blur-sm">
            <div className="text-center">
              <span className="block text-2xl font-serif font-bold text-stone-800">5+</span>
              <span className="text-xs uppercase tracking-wide text-stone-500">Tahun<br/>Pengalaman</span>
            </div>
          </div>
        </div>
      </div>

      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce text-stone-400">
        <ArrowDown size={20} />
      </div>
    </section>
  );
};