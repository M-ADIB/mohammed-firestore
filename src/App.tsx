import { useState, useEffect } from 'react';
import { Navbar } from './components/Navbar';
import { Hero } from './components/Hero';
import { TrustStats } from './components/TrustStats';
import { Catalog, type Product } from './components/Catalog';
import { Services } from './components/Services';
import { AboutUs } from './components/AboutUs';
import { Contact } from './components/Contact';
import { Footer } from './components/Footer';
import { QuoteBuilder } from './components/QuoteBuilder';
import { translations } from './utils/translations';

function App() {
  const [darkMode, setDarkMode] = useState(false);
  const [lang, setLang] = useState<'en' | 'ar'>('en');
  const [cart, setCart] = useState<Product[]>([]);
  const [isCartOpen, setIsCartOpen] = useState(false);
  const [activeSection, setActiveSection] = useState('home');
  const [isTransitioning, setIsTransitioning] = useState(false);

  const t = translations[lang];

  // Load theme and language preferences from localStorage on mount
  useEffect(() => {
    const isDark = localStorage.getItem('theme') === 'dark';
    setDarkMode(isDark);
    if (isDark) {
      document.documentElement.classList.add('dark');
    } else {
      document.documentElement.classList.remove('dark');
    }

    const savedLang = localStorage.getItem('lang') as 'en' | 'ar';
    if (savedLang === 'en' || savedLang === 'ar') {
      setLang(savedLang);
    }
  }, []);

  // Update HTML class on theme change
  const handleSetDarkMode = (val: boolean) => {
    setDarkMode(val);
    if (val) {
      document.documentElement.classList.add('dark');
      localStorage.setItem('theme', 'dark');
    } else {
      document.documentElement.classList.remove('dark');
      localStorage.setItem('theme', 'light');
    }
  };

  // Update language toggle with premium transition
  const handleSetLang = (val: 'en' | 'ar') => {
    setIsTransitioning(true);
    setTimeout(() => {
      setLang(val);
      localStorage.setItem('lang', val);
      setTimeout(() => {
        setIsTransitioning(false);
      }, 50);
    }, 150);
  };

  // Cart operations
  const addToCart = (product: Product) => {
    setCart((prevCart) => {
      const exists = prevCart.some((item) => item.id === product.id);
      if (exists) {
        // Remove if toggled again
        return prevCart.filter((item) => item.id !== product.id);
      }
      return [...prevCart, product];
    });
  };

  const removeFromCart = (id: string) => {
    setCart((prevCart) => prevCart.filter((item) => item.id !== id));
  };

  const clearCart = () => setCart([]);

  const scrollToProducts = () => {
    const element = document.getElementById('products');
    if (element) {
      const offset = 80;
      const bodyRect = document.body.getBoundingClientRect().top;
      const elementRect = element.getBoundingClientRect().top;
      const elementPosition = elementRect - bodyRect;
      const offsetPosition = elementPosition - offset;

      window.scrollTo({
        top: offsetPosition,
        behavior: 'smooth',
      });
      setActiveSection('products');
    }
  };

  return (
    <div
      className="min-h-screen bg-slate-50 text-slate-900 dark:bg-slate-950 dark:text-slate-100 flex flex-col font-sans transition-colors duration-300"
      dir={lang === 'ar' ? 'rtl' : 'ltr'}
    >
      <Navbar
        darkMode={darkMode}
        setDarkMode={handleSetDarkMode}
        lang={lang}
        setLang={handleSetLang}
        t={t}
        cartCount={cart.length}
        openCart={() => setIsCartOpen(true)}
        activeSection={activeSection}
        setActiveSection={setActiveSection}
      />

      <div className={`flex-1 flex flex-col transition-all duration-300 ${isTransitioning ? 'opacity-0 scale-[0.99] blur-[2px] translate-y-1' : 'opacity-100 scale-100 blur-0 translate-y-0'}`}>
        <main className="flex-1">
          <Hero
            openCart={() => setIsCartOpen(true)}
            scrollToProducts={scrollToProducts}
            t={t}
          />
          
          <TrustStats t={t} />

          <AboutUs t={t} />

          <Catalog
            addToCart={addToCart}
            cartIds={cart.map((item) => item.id)}
            t={t}
            lang={lang}
          />

          <Services t={t} />

          <Contact t={t} />
        </main>

        <Footer scrollToSection={setActiveSection} t={t} lang={lang} />
      </div>

      <QuoteBuilder
        isOpen={isCartOpen}
        onClose={() => setIsCartOpen(false)}
        cartItems={cart}
        removeFromCart={removeFromCart}
        clearCart={clearCart}
        t={t}
        lang={lang}
      />

      {/* Floating WhatsApp Widget */}
      <a
        href="https://wa.me/971503033789?text=Hello%20ADIGA%20Fire%20Safety,%20I'd%20like%20to%20get%20a%20quote."
        target="_blank"
        rel="noopener noreferrer"
        className="fixed bottom-6 right-6 rtl:left-6 rtl:right-auto z-40 flex items-center gap-2 group bg-[#25D366] hover:bg-[#20ba5a] text-white p-3.5 rounded-full shadow-2xl transition-all duration-300 hover:scale-110 active:scale-95 cursor-pointer"
        aria-label="Chat on WhatsApp"
      >
        <span className="absolute inset-0 rounded-full bg-[#25D366] opacity-40 animate-ping group-hover:animate-none -z-10" />
        <span className="max-w-0 overflow-hidden group-hover:max-w-xs transition-all duration-300 ease-out font-bold text-xs whitespace-nowrap px-0 group-hover:px-1.5">
          {lang === 'en' ? 'Chat on WhatsApp' : 'تواصل معنا عبر واتساب'}
        </span>
        <svg viewBox="0 0 24 24" className="w-6 h-6 fill-current">
          <path d="M.057 24l1.687-6.163c-1.041-1.804-1.588-3.849-1.587-5.946C.06 5.348 5.397.01 12.008.01c3.202.001 6.212 1.246 8.477 3.513 2.262 2.268 3.507 5.28 3.505 8.484-.004 6.657-5.34 11.997-11.953 11.997-2.005-.001-3.973-.502-5.724-1.457L0 24zm6.59-4.846c1.6.95 3.188 1.449 4.825 1.451 5.436.002 9.858-4.419 9.86-9.86.001-2.636-1.02-5.115-2.873-6.97S13.438 1.258 10.8 1.258C5.362 1.258.94 5.679.938 11.119c-.001 1.674.437 3.313 1.27 4.793L1.134 21.6l5.513-1.446zm11.36-5.477c-.318-.16-1.88-.927-2.17-.1.029-.079-.15-.22-.43-.36-.28-.14-1.2-.5-1.488-.5-.28 0-.48.14-.7.42-.22.28-.82.98-.98 1.18-.16.2-.32.22-.64.06-.32-.16-1.34-.49-2.55-1.57-.94-.84-1.58-1.88-1.76-2.2-.18-.32-.02-.49.14-.65.14-.14.32-.36.48-.54.16-.18.22-.3.32-.5.1-.2.05-.38-.03-.54-.08-.16-.7-1.7-.96-2.32-.26-.6-.52-.52-.7-.52-.18 0-.38-.02-.58-.02-.2 0-.53.08-.8.38-.28.3-.1.78.1 1.14.2.36.4.72.6.98.2.26 2.06 3.14 4.98 4.4.7.3 1.24.48 1.66.62.7.22 1.34.19 1.84.11.56-.08 1.88-.77 2.15-1.5.26-.74.26-1.38.18-1.52-.08-.14-.28-.22-.6-.38z"/>
        </svg>
      </a>
    </div>
  );
}

export default App;
