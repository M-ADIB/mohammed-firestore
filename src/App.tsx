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
    </div>
  );
}

export default App;
