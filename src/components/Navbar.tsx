import React, { useState, useEffect } from 'react';
import { Menu, X, ShieldAlert, Sun, Moon, ShoppingBag, Languages } from 'lucide-react';
import type { TranslationDict } from '../utils/translations';

interface NavbarProps {
  darkMode: boolean;
  setDarkMode: (val: boolean) => void;
  lang: 'en' | 'ar';
  setLang: (val: 'en' | 'ar') => void;
  t: TranslationDict;
  cartCount: number;
  openCart: () => void;
  activeSection: string;
  setActiveSection: (sec: string) => void;
}

export const Navbar: React.FC<NavbarProps> = ({
  darkMode,
  setDarkMode,
  lang,
  setLang,
  t,
  cartCount,
  openCart,
  activeSection,
  setActiveSection,
}) => {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 20) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navItems = [
    { label: t.home, href: 'home' },
    { label: t.aboutUs, href: 'about' },
    { label: t.products, href: 'products' },
    { label: t.services, href: 'services' },
    { label: t.contact, href: 'contact' },
  ];

  const handleNavClick = (href: string) => {
    setActiveSection(href);
    setIsOpen(false);
    const element = document.getElementById(href);
    if (element) {
      const offset = 80;
      const bodyRect = document.body.getBoundingClientRect().top;
      const elementRect = element.getBoundingClientRect().top;
      const elementPosition = elementRect - bodyRect;
      const offsetPosition = elementPosition - offset;

      window.scrollTo({
        top: offsetPosition,
        behavior: 'smooth'
      });
    }
  };

  return (
    <>
      {/* Top Banner Info Bar */}
      <div className="w-full bg-slate-950 text-slate-300 text-xs py-2.5 px-4 md:px-8 flex justify-center items-center border-b border-slate-900 z-50 relative">
        <span className="bg-red-500/10 text-red-400 border border-red-500/25 px-3 py-1 rounded text-[10px] uppercase font-extrabold tracking-wider animate-pulse flex items-center gap-1.5">
          <ShieldAlert className="w-3.5 h-3.5" />
          {t.civilDefenseApproved}
        </span>
      </div>

      {/* Main Navbar */}
      <header
        className={`sticky top-0 w-full z-40 transition-all duration-300 ${
          scrolled
            ? 'glass shadow-lg border-b border-slate-200/55 dark:border-slate-800/55 py-3'
            : 'bg-transparent py-5'
        }`}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex justify-between items-center">
          {/* Logo */}
          <div
            className="flex items-center gap-2 cursor-pointer group"
            onClick={() => handleNavClick('home')}
          >
            <div className="w-10 h-10 bg-red-600 rounded-lg flex items-center justify-center text-white glow-red transition-transform duration-300 group-hover:rotate-6">
              <ShieldAlert className="w-6 h-6" />
            </div>
            <div className="text-left">
              <span className="font-extrabold text-xl tracking-tight text-slate-900 dark:text-white flex items-center gap-1">
                ADIGA <span className="text-red-600">FIRE</span>
              </span>
              <p className="text-[9px] uppercase tracking-widest text-slate-500 dark:text-slate-400 font-medium">
                &amp; Safety Equipment
              </p>
            </div>
          </div>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center gap-8">
            {navItems.map((item) => (
              <button
                key={item.href}
                onClick={() => handleNavClick(item.href)}
                className={`text-sm font-bold tracking-wide transition-colors relative py-1.5 ${
                  activeSection === item.href
                    ? 'text-red-600 dark:text-red-500 font-extrabold'
                    : 'text-slate-600 dark:text-slate-300 hover:text-red-500 dark:hover:text-red-400'
                }`}
              >
                {item.label}
                {activeSection === item.href && (
                  <span className="absolute bottom-0 left-0 w-full h-0.5 bg-red-600 dark:bg-red-500 rounded-full animate-fade-in" />
                )}
              </button>
            ))}
          </nav>

          {/* Actions Menu */}
          <div className="flex items-center gap-3">
            {/* Language Switcher */}
            <button
              onClick={() => setLang(lang === 'en' ? 'ar' : 'en')}
              className="flex items-center gap-1.5 px-3 py-1.5 rounded-lg border border-slate-200 dark:border-slate-800 text-xs font-bold text-slate-700 dark:text-slate-300 hover:bg-slate-100 dark:hover:bg-slate-900 transition-colors"
              aria-label="Toggle Language"
            >
              <Languages className="w-4 h-4 text-red-500" />
              <span>{lang === 'en' ? 'العربية' : 'English'}</span>
            </button>

            {/* Theme Toggle */}
            <button
              onClick={() => setDarkMode(!darkMode)}
              className="p-2 rounded-full hover:bg-slate-200/50 dark:hover:bg-slate-800/50 transition-colors text-slate-700 dark:text-slate-300"
              aria-label="Toggle Theme"
            >
              {darkMode ? <Sun className="w-5 h-5" /> : <Moon className="w-5 h-5" />}
            </button>

            {/* Cart Button */}
            <button
              onClick={openCart}
              className="p-2.5 rounded-full hover:bg-slate-200/50 dark:hover:bg-slate-800/50 transition-colors text-slate-700 dark:text-slate-300 relative group"
              aria-label="Quote Request List"
            >
              <ShoppingBag className="w-5 h-5 group-hover:scale-110 transition-transform" />
              {cartCount > 0 && (
                <span className="absolute -top-1.5 -right-1.5 bg-red-600 text-white text-[10px] font-bold w-5.5 h-5.5 rounded-full flex items-center justify-center border-2 border-slate-50 dark:border-slate-900 animate-bounce">
                  {cartCount}
                </span>
              )}
            </button>

            {/* Request Quote Button */}
            <button
              onClick={openCart}
              className="hidden lg:flex items-center justify-center text-white px-5 py-2.5 rounded-lg text-sm font-extrabold tracking-wide shadow-md transform hover:-translate-y-0.5 btn-premium btn-red-premium cursor-pointer"
            >
              {t.getQuote}
            </button>

            {/* Mobile Menu Toggle */}
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="md:hidden p-2 rounded-lg hover:bg-slate-200/50 dark:hover:bg-slate-800/50 transition-colors text-slate-700 dark:text-slate-300"
            >
              {isOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>

        {/* Mobile Navigation Drawer */}
        {isOpen && (
          <div className="md:hidden absolute top-full left-0 w-full bg-white dark:bg-slate-950 border-b border-slate-200 dark:border-slate-800 shadow-xl transition-all duration-300 overflow-hidden animate-slide-in">
            <div className="px-4 pt-2 pb-6 space-y-2">
              {navItems.map((item) => (
                <button
                  key={item.href}
                  onClick={() => handleNavClick(item.href)}
                  className={`block w-full text-left px-4 py-3 rounded-lg text-base font-bold tracking-wide ${
                    activeSection === item.href
                      ? 'bg-red-50 text-red-600 dark:bg-red-950/30 dark:text-red-400'
                      : 'text-slate-700 dark:text-slate-300 hover:bg-slate-100 dark:hover:bg-slate-900'
                  }`}
                >
                  {item.label}
                </button>
              ))}
              <div className="pt-4 border-t border-slate-200 dark:border-slate-800">
                <button
                  onClick={() => {
                    setIsOpen(false);
                    openCart();
                  }}
                  className="w-full text-white py-3 rounded-lg font-bold shadow-md flex items-center justify-center gap-2 btn-premium btn-red-premium cursor-pointer"
                >
                  <ShoppingBag className="w-5 h-5" />
                  {t.getQuote} ({cartCount} {t.quoteCartItems})
                </button>
              </div>
            </div>
          </div>
        )}
      </header>
    </>
  );
};
