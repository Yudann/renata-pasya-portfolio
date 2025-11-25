import React from "react";
import { Leaf, Heart, Users } from "lucide-react";

export const About: React.FC = () => {
  return (
    <div className="bg-stone-50 min-h-screen">
      {/* Header Section */}
      <section className="pt-40 pb-20 px-6 md:px-12 container mx-auto text-center">
        <span className="text-xs uppercase tracking-[0.2em] text-stone-500 mb-4 block">
          Filosofi Kami
        </span>
        <h1 className="text-5xl md:text-7xl font-serif text-stone-900 mb-8 max-w-4xl mx-auto leading-tight">
          Lebih dari sekadar visual, kami merancang{" "}
          <span className="italic text-stone-500">perasaan</span>.
        </h1>
      </section>

      {/* Story Section */}
      <section className="px-6 md:px-12 container mx-auto mb-32">
        <div className="flex flex-col md:flex-row gap-16 items-center">
          <div className="w-full md:w-1/2">
            <div className="relative">
              <div className="aspect-[4/5] rounded-t-[10rem] rounded-b-xl overflow-hidden shadow-xl bg-stone-200">
                <img
                  src="https://picsum.photos/800/1200?grayscale&blur=1"
                  alt="Our Studio"
                  className="w-full h-full object-cover opacity-90 hover:opacity-100 transition-opacity duration-700"
                />
              </div>
              <div className="absolute -bottom-10 -left-10 w-48 h-48 bg-stone-100 rounded-full flex items-center justify-center p-8 hidden lg:flex">
                <p className="font-serif text-xl text-stone-800 text-center italic">
                  "Simplicity is the ultimate sophistication."
                </p>
              </div>
            </div>
          </div>

          <div className="w-full md:w-1/2 space-y-8">
            <h2 className="text-3xl md:text-4xl font-serif text-stone-900">
              Sebuah Perjalanan Menuju Esensi
            </h2>
            <div className="space-y-6 text-stone-600 font-light leading-relaxed text-lg">
              <p>
                Natura Studio lahir dari keinginan sederhana: mengembalikan
                desain ke akarnya. Di tengah kebisingan dunia digital yang serba
                cepat, kami memilih untuk melambat. Kami percaya bahwa desain
                terbaik tidak berteriak, melainkan berbisik—namun bisikannya
                terdengar hingga ke dalam hati.
              </p>
              <p>
                Sejak 2019, kami telah bermitra dengan visioner, seniman, dan
                pengusaha yang menghargai keindahan dalam ketidaksempurnaan dan
                kekuatan dalam keheningan. Pendekatan kami berakar pada prinsip
                alam: fungsional, seimbang, dan tumbuh secara organik.
              </p>
              <p>
                Kami bukan sekadar agensi desain. Kami adalah kurator cerita
                Anda, penerjemah nilai-nilai Anda menjadi bahasa visual yang
                abadi.
              </p>
            </div>

            <div className="pt-8 grid grid-cols-3 gap-4 text-center border-t border-stone-200">
              <div>
                <span className="block text-3xl font-serif font-bold text-stone-800">
                  50+
                </span>
                <span className="text-xs uppercase tracking-wider text-stone-500">
                  Proyek
                </span>
              </div>
              <div>
                <span className="block text-3xl font-serif font-bold text-stone-800">
                  12
                </span>
                <span className="text-xs uppercase tracking-wider text-stone-500">
                  Penghargaan
                </span>
              </div>
              <div>
                <span className="block text-3xl font-serif font-bold text-stone-800">
                  4
                </span>
                <span className="text-xs uppercase tracking-wider text-stone-500">
                  Negara
                </span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Values Section */}
      <section className="bg-stone-900 text-stone-100 py-24">
        <div className="container mx-auto px-6 md:px-12">
          <div className="mb-16 text-center">
            <h2 className="text-3xl md:text-4xl font-serif italic mb-4">
              Nilai Inti
            </h2>
            <p className="text-stone-400 font-light max-w-2xl mx-auto">
              Prinsip yang menjadi kompas dalam setiap goresan sketsa dan baris
              kode yang kami buat.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
            <div className="space-y-4 text-center p-6 hover:bg-stone-800 rounded-2xl transition-colors duration-300">
              <div className="w-16 h-16 bg-stone-800 mx-auto rounded-full flex items-center justify-center text-stone-300 mb-6">
                <Leaf size={28} />
              </div>
              <h3 className="text-xl font-serif text-stone-50">
                Berkelanjutan
              </h3>
              <p className="text-stone-400 text-sm leading-relaxed">
                Kami menciptakan desain digital yang efisien energi dan strategi
                branding yang bertahan lama, bukan sekadar tren sesaat yang
                cepat usang.
              </p>
            </div>

            <div className="space-y-4 text-center p-6 hover:bg-stone-800 rounded-2xl transition-colors duration-300">
              <div className="w-16 h-16 bg-stone-800 mx-auto rounded-full flex items-center justify-center text-stone-300 mb-6">
                <Heart size={28} />
              </div>
              <h3 className="text-xl font-serif text-stone-50">Empati</h3>
              <p className="text-stone-400 text-sm leading-relaxed">
                Desain dimulai dari memahami manusia. Kami mendalami psikologi
                audiens Anda untuk menciptakan koneksi emosional yang tulus.
              </p>
            </div>

            <div className="space-y-4 text-center p-6 hover:bg-stone-800 rounded-2xl transition-colors duration-300">
              <div className="w-16 h-16 bg-stone-800 mx-auto rounded-full flex items-center justify-center text-stone-300 mb-6">
                <Users size={28} />
              </div>
              <h3 className="text-xl font-serif text-stone-50">Kolaborasi</h3>
              <p className="text-stone-400 text-sm leading-relaxed">
                Tidak ada ego di sini. Kami bekerja berdampingan dengan Anda,
                menjadikan proses kreatif sebagai dialog yang terbuka dan
                transparan.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Team Snippet */}
      <section className="py-24 px-6 md:px-12 container mx-auto">
        <div className="flex flex-col items-center text-center">
          <div className="w-24 h-1 bg-stone-800 mb-8"></div>
          <p className="text-2xl md:text-3xl font-serif italic text-stone-800 max-w-3xl leading-normal">
            "Keindahan sejati muncul ketika fungsi bertemu dengan emosi dalam
            harmoni yang paling sederhana."
          </p>
          <p className="mt-6 text-sm font-bold uppercase tracking-widest text-stone-500">
            — Founder Natura
          </p>
        </div>
      </section>
    </div>
  );
};
