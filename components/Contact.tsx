import React, { useState } from "react";
import { Send, MapPin, Mail, Phone } from "lucide-react";

export const Contact: React.FC = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Simulate submission
    alert(`Terima kasih, ${formData.name}. Kami akan segera menghubungi Anda.`);
    setFormData({ name: "", email: "", message: "" });
  };

  return (
    <section id="contact" className="py-24 bg-stone-900 text-stone-100">
      <div className="container mx-auto px-6 md:px-12">
        <div className="flex flex-col lg:flex-row gap-16">
          <div className="lg:w-1/2">
            <h2 className="text-4xl md:text-5xl font-serif mb-6 leading-tight">
              Mari Menciptakan <br /> Sesuatu yang{" "}
              <span className="italic text-stone-400">Abadi</span>.
            </h2>
            <p className="text-stone-400 font-light mb-12 max-w-md">
              Apakah Anda memiliki proyek di pikiran? Atau sekadar ingin
              menyapa? Kami selalu terbuka untuk ide-ide baru dan kolaborasi
              yang bermakna.
            </p>

            <div className="space-y-6">
              <div className="flex items-center space-x-4">
                <div className="w-10 h-10 rounded-full bg-stone-800 flex items-center justify-center">
                  <Mail size={18} className="text-stone-300" />
                </div>
                <div>
                  <p className="text-xs text-stone-500 uppercase tracking-wide">
                    Email
                  </p>
                  <p className="text-stone-200">renatapasya783@gmail.com</p>
                </div>
              </div>
              <div className="flex items-center space-x-4">
                <div className="w-10 h-10 rounded-full bg-stone-800 flex items-center justify-center">
                  <Phone size={18} className="text-stone-300" />
                </div>
                <div>
                  <p className="text-xs text-stone-500 uppercase tracking-wide">
                    Telepon
                  </p>
                  <p className="text-stone-200">+62 81xxxxxxx</p>
                </div>
              </div>
              <div className="flex items-center space-x-4">
                <div className="w-10 h-10 rounded-full bg-stone-800 flex items-center justify-center">
                  <MapPin size={18} className="text-stone-300" />
                </div>
                <div>
                  <p className="text-xs text-stone-500 uppercase tracking-wide">
                    Studio
                  </p>
                  <p className="text-stone-200">Depok, Indonesia</p>
                </div>
              </div>
            </div>
          </div>

          <div className="lg:w-1/2 bg-stone-800/50 p-8 md:p-12 rounded-3xl backdrop-blur-sm">
            <form onSubmit={handleSubmit} className="space-y-8">
              <div>
                <label
                  htmlFor="name"
                  className="block text-sm text-stone-400 mb-2 ml-1"
                >
                  Nama
                </label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  required
                  className="w-full bg-transparent border-b border-stone-600 py-3 px-1 text-white focus:outline-none focus:border-stone-200 transition-colors placeholder-stone-700"
                  placeholder="Nama Lengkap"
                />
              </div>
              <div>
                <label
                  htmlFor="email"
                  className="block text-sm text-stone-400 mb-2 ml-1"
                >
                  Email
                </label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  required
                  className="w-full bg-transparent border-b border-stone-600 py-3 px-1 text-white focus:outline-none focus:border-stone-200 transition-colors placeholder-stone-700"
                  placeholder="hello@email.com"
                />
              </div>
              <div>
                <label
                  htmlFor="message"
                  className="block text-sm text-stone-400 mb-2 ml-1"
                >
                  Pesan
                </label>
                <textarea
                  id="message"
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  required
                  rows={4}
                  className="w-full bg-transparent border-b border-stone-600 py-3 px-1 text-white focus:outline-none focus:border-stone-200 transition-colors placeholder-stone-700 resize-none"
                  placeholder="Ceritakan tentang proyek Anda..."
                ></textarea>
              </div>

              <button
                type="submit"
                className="w-full bg-stone-100 text-stone-900 py-4 rounded-full font-medium hover:bg-stone-200 transition-colors flex justify-center items-center gap-2 group"
              >
                Kirim Pesan
                <Send
                  size={16}
                  className="group-hover:translate-x-1 transition-transform"
                />
              </button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};
