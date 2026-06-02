import React from 'react';
import { ShieldAlert, Phone, Mail, MapPin } from 'lucide-react';
import type { TranslationDict } from '../utils/translations';

interface FooterProps {
  scrollToSection: (sec: string) => void;
  t: TranslationDict;
  lang: 'en' | 'ar';
}

export const Footer: React.FC<FooterProps> = ({ scrollToSection, t, lang }) => {
  const currentYear = new Date().getFullYear();

  const handleNavClick = (sectionId: string) => {
    scrollToSection(sectionId);
    const element = document.getElementById(sectionId);
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
    <footer className="bg-slate-950 text-slate-400 text-left rtl:text-right border-t border-slate-905">
      
      {/* Top Footer */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12">
        {/* Info Column */}
        <div className="space-y-6">
          <div
            className="flex items-center gap-2 cursor-pointer group"
            onClick={() => handleNavClick('home')}
          >
            <div className="w-10 h-10 bg-red-600 rounded-lg flex items-center justify-center text-white glow-red">
              <ShieldAlert className="w-5 h-5" />
            </div>
            <div className="text-left rtl:text-right">
              <span className="font-extrabold text-lg tracking-tight text-white flex items-center gap-1">
                ADIGA <span className="text-red-600">FIRE</span>
              </span>
              <p className="text-[9px] uppercase tracking-widest text-slate-500 font-medium">
                &amp; Safety Equipment
              </p>
            </div>
          </div>
          <p className="text-sm text-slate-450 leading-relaxed font-semibold">
            {t.footerDesc}
          </p>
          <div className="text-xs uppercase font-extrabold tracking-widest text-red-500 bg-red-500/10 border border-red-500/20 px-3 py-1 rounded inline-block">
            ISO 9001:2008 CERTIFIED
          </div>
        </div>

        {/* Quick Links Column */}
        <div className="space-y-4">
          <h4 className="text-white font-extrabold text-sm uppercase tracking-widest border-b border-slate-900 pb-2">
            {t.aboutUs}
          </h4>
          <ul className="space-y-2.5 text-sm font-bold">
            <li>
              <button onClick={() => handleNavClick('home')} className="hover:text-red-500 transition-colors cursor-pointer">
                {t.home}
              </button>
            </li>
            <li>
              <button onClick={() => handleNavClick('about')} className="hover:text-red-500 transition-colors cursor-pointer">
                {t.aboutUs}
              </button>
            </li>
            <li>
              <button onClick={() => handleNavClick('products')} className="hover:text-red-500 transition-colors cursor-pointer">
                {t.products}
              </button>
            </li>
            <li>
              <button onClick={() => handleNavClick('services')} className="hover:text-red-500 transition-colors cursor-pointer">
                {t.services}
              </button>
            </li>
            <li>
              <button onClick={() => handleNavClick('contact')} className="hover:text-red-500 transition-colors cursor-pointer">
                {t.contact}
              </button>
            </li>
          </ul>
        </div>

        {/* Our Products Column */}
        <div className="space-y-4">
          <h4 className="text-white font-extrabold text-sm uppercase tracking-widest border-b border-slate-900 pb-2">
            {t.products}
          </h4>
          <ul className="space-y-2.5 text-sm font-bold">
            <li>
              <button onClick={() => handleNavClick('products')} className="hover:text-red-500 transition-colors cursor-pointer">
                {lang === 'en' ? 'Fire Protection System' : 'أنظمة الحماية من الحرائق'}
              </button>
            </li>
            <li>
              <button onClick={() => handleNavClick('products')} className="hover:text-red-500 transition-colors cursor-pointer">
                {lang === 'en' ? 'Fire Fighting Equipment' : 'معدات مكافحة الحرائق'}
              </button>
            </li>
            <li>
              <button onClick={() => handleNavClick('products')} className="hover:text-red-500 transition-colors cursor-pointer">
                {lang === 'en' ? 'Fire Detection Control' : 'لوحات كشف الحرائق'}
              </button>
            </li>
            <li>
              <button onClick={() => handleNavClick('products')} className="hover:text-red-500 transition-colors cursor-pointer">
                {lang === 'en' ? 'Certified Fire Doors' : 'أبواب الحريق المعتمدة'}
              </button>
            </li>
            <li>
              <button onClick={() => handleNavClick('products')} className="hover:text-red-500 transition-colors cursor-pointer">
                {lang === 'en' ? 'Passive Fire Protection' : 'الحماية السلبية للحريق'}
              </button>
            </li>
            <li>
              <button onClick={() => handleNavClick('products')} className="hover:text-red-500 transition-colors cursor-pointer">
                {lang === 'en' ? 'Industrial Fire Pumps' : 'مضخات الحريق الصناعية'}
              </button>
            </li>
          </ul>
        </div>

        {/* Contact Info Column */}
        <div className="space-y-4">
          <h4 className="text-white font-extrabold text-sm uppercase tracking-widest border-b border-slate-900 pb-2">
            {t.contact}
          </h4>
          <ul className="space-y-3.5 text-sm font-semibold">
            <li className="flex items-start gap-2.5">
              <MapPin className="w-4 h-4 text-red-500 shrink-0 mt-0.5" />
              <span>Sheikh Khalifa Bin Zayed St, Ajman, UAE.</span>
            </li>
            <li className="flex items-center gap-2.5">
              <Phone className="w-4 h-4 text-red-500 shrink-0" />
              <a href="tel:+971503033789" className="hover:text-red-500 transition-colors" dir="ltr">
                +971 50 303 3789
              </a>
            </li>
            <li className="flex items-center gap-2.5">
              <Mail className="w-4 h-4 text-red-500 shrink-0" />
              <a href="mailto:info@adigafire.com" className="hover:text-red-500 transition-colors">
                info@adigafire.com
              </a>
            </li>
          </ul>
        </div>
      </div>

      {/* Bottom Copyright Strip */}
      <div className="border-t border-slate-900 bg-slate-950 py-6 px-4 md:px-8">
        <div className="max-w-7xl mx-auto flex flex-col md:flex-row justify-between items-center gap-4 text-xs font-semibold">
          <p>
            &copy; {currentYear} {t.footerRights}
          </p>
          <p className="text-slate-500">
            {t.footerAuthor}
          </p>
        </div>
      </div>
    </footer>
  );
};
