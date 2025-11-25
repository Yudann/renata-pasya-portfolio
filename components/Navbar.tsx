import React, { useState, useEffect } from "react";
import { Menu, X } from "lucide-react";
import { Link, useLocation } from "react-router-dom";

export const Navbar: React.FC = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const isHomePage = location.pathname === "/";

  // Helper to determine link destination
  const getLinkHref = (anchor: string) => {
    return isHomePage ? anchor : `/${anchor}`;
  };

  return (
    <nav
      className={`fixed top-0 w-full z-50 transition-all duration-500 ${
        isScrolled || isMenuOpen
          ? "bg-white/80 backdrop-blur-md shadow-sm py-4"
          : "bg-transparent py-6"
      }`}
    >
      <div className="container mx-auto px-6 md:px-12 flex justify-between items-center">
        <Link
          to="/"
          className="text-2xl font-serif italic font-semibold text-stone-900 tracking-tight z-50"
        >
          Renata Pasya.
        </Link>

        {/* Desktop Menu */}
        <div className="hidden md:flex space-x-8 items-center">
          <Link
            to="/"
            className="text-stone-600 hover:text-stone-900 text-sm tracking-wide transition-colors"
          >
            Beranda
          </Link>
          <Link
            to="/about"
            className="text-stone-600 hover:text-stone-900 text-sm tracking-wide transition-colors"
          >
            Tentang
          </Link>
          <a
            href={getLinkHref("#portfolio")}
            className="text-stone-600 hover:text-stone-900 text-sm tracking-wide transition-colors"
          >
            Karya
          </a>
          <a
            href={getLinkHref("#services")}
            className="text-stone-600 hover:text-stone-900 text-sm tracking-wide transition-colors"
          >
            Layanan
          </a>
          <a
            href={getLinkHref("#contact")}
            className="px-5 py-2 bg-stone-900 text-white rounded-full text-xs hover:bg-stone-700 transition-colors"
          >
            Hubungi Saya
          </a>
        </div>

        {/* Mobile Toggle */}
        <button
          className="md:hidden z-50 text-stone-800"
          onClick={() => setIsMenuOpen(!isMenuOpen)}
        >
          {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
        </button>

        {/* Mobile Menu Overlay */}
        <div
          className={`fixed inset-0 bg-stone-50 flex flex-col justify-center items-center transition-transform duration-500 ease-in-out md:hidden ${
            isMenuOpen ? "translate-x-0" : "translate-x-full"
          }`}
        >
          <div className="flex flex-col space-y-8 text-center">
            <Link
              to="/"
              className="text-2xl font-serif text-stone-800 hover:text-stone-500"
              onClick={() => setIsMenuOpen(false)}
            >
              Beranda
            </Link>
            <Link
              to="/about"
              className="text-2xl font-serif text-stone-800 hover:text-stone-500"
              onClick={() => setIsMenuOpen(false)}
            >
              Tentang
            </Link>
            <a
              href={getLinkHref("#portfolio")}
              className="text-2xl font-serif text-stone-800 hover:text-stone-500"
              onClick={() => setIsMenuOpen(false)}
            >
              Karya
            </a>
            <a
              href={getLinkHref("#services")}
              className="text-2xl font-serif text-stone-800 hover:text-stone-500"
              onClick={() => setIsMenuOpen(false)}
            >
              Layanan
            </a>
            <a
              href={getLinkHref("#contact")}
              className="text-2xl font-serif text-stone-800 hover:text-stone-500"
              onClick={() => setIsMenuOpen(false)}
            >
              Kontak
            </a>
          </div>
        </div>
      </div>
    </nav>
  );
};
