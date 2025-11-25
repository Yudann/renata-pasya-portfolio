import React from "react";
import { Instagram, Linkedin, Twitter } from "lucide-react";

export const Footer: React.FC = () => {
  return (
    <footer className="bg-stone-900 text-stone-500 py-12 border-t border-stone-800">
      <div className="container mx-auto px-6 md:px-12 flex flex-col md:flex-row justify-between items-center">
        <div className="mb-4 md:mb-0 text-center md:text-left">
          <h2 className="text-2xl font-serif text-stone-200 italic mb-1">
            Renata Pasya.
          </h2>
          <p className="text-xs">
            © 2024 Renata Pasya Studio. All rights reserved.
          </p>
        </div>

        <div className="flex space-x-6">
          <a href="#" className="hover:text-stone-200 transition-colors">
            <Instagram size={20} />
          </a>
          <a href="#" className="hover:text-stone-200 transition-colors">
            <Twitter size={20} />
          </a>
          <a href="#" className="hover:text-stone-200 transition-colors">
            <Linkedin size={20} />
          </a>
        </div>
      </div>
    </footer>
  );
};
