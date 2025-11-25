import React, { useState, useEffect } from "react";
import { Menu, X } from "lucide-react";
import { Link, useLocation } from "react-router-dom";

export const Navbar: React.FC = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const location = useLocation();

  // Handle scroll effect for navbar background
  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Handle body scroll lock when mobile menu is open
  useEffect(() => {
    if (isMenuOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "unset";
    }
    return () => {
      document.body.style.overflow = "unset";
    };
  }, [isMenuOpen]);

  const isHomePage = location.pathname === "/";

  // Helper to determine link destination
  const getLinkHref = (anchor: string) => {
    return isHomePage ? anchor : `/${anchor}`;
  };

  const handleLinkClick = () => {
    setIsMenuOpen(false);
  };

  return (
    <nav
      className={`fixed top-0 w-full z-50 transition-all duration-500 border-b border-transparent ${
        isScrolled || isMenuOpen
          ? "bg-white/80 backdrop-blur-md shadow-sm py-4 border-stone-200/50"
          : "bg-transparent py-6"
      }`}
    >
      <div className="container mx-auto px-6 md:px-12 flex justify-between items-center">
        {/* Logo - High Z-Index to stay above mobile menu */}
        <Link
          to="/"
          className="text-2xl font-serif italic font-semibold text-stone-900 tracking-tight relative z-50"
          onClick={handleLinkClick}
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

        {/* Mobile Toggle Button - High Z-Index */}
        <button
          className="md:hidden relative z-50 text-stone-800 p-2 hover:bg-stone-100 rounded-full transition-colors"
          onClick={() => setIsMenuOpen(!isMenuOpen)}
          aria-label="Toggle Menu"
        >
          {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
        </button>

        {/* Mobile Menu Overlay */}
        <div
          className={`fixed inset-0 bg-stone-50 z-40 flex flex-col justify-center items-center h-[100dvh] transition-transform duration-500 ease-[cubic-bezier(0.32,0.72,0,1)] md:hidden ${
            isMenuOpen ? "translate-x-0" : "translate-x-full"
          }`}
        >
          <div className="flex flex-col space-y-8 text-center">
            <Link
              to="/"
              className="text-3xl font-serif text-stone-800 hover:text-stone-500 transition-colors"
              onClick={handleLinkClick}
            >
              Beranda
            </Link>
            <Link
              to="/about"
              className="text-3xl font-serif text-stone-800 hover:text-stone-500 transition-colors"
              onClick={handleLinkClick}
            >
              Tentang
            </Link>
            <a
              href={getLinkHref("#portfolio")}
              className="text-3xl font-serif text-stone-800 hover:text-stone-500 transition-colors"
              onClick={handleLinkClick}
            >
              Karya
            </a>
            <a
              href={getLinkHref("#services")}
              className="text-3xl font-serif text-stone-800 hover:text-stone-500 transition-colors"
              onClick={handleLinkClick}
            >
              Layanan
            </a>
            <a
              href={getLinkHref("#contact")}
              className="text-xl font-medium mt-4 px-8 py-3 bg-stone-900 text-white rounded-full hover:bg-stone-700 transition-colors inline-block"
              onClick={handleLinkClick}
            >
              Hubungi Saya
            </a>
          </div>

          {/* Decorative element for mobile menu */}
          <div className="absolute bottom-10 left-0 w-full text-center">
            <span className="text-stone-400 text-xs tracking-widest uppercase">
              Renata Pasya
            </span>
          </div>
        </div>
      </div>
    </nav>
  );
};
