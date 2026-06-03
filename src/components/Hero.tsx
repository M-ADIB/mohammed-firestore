import React from 'react';
import { ArrowRight, ShieldCheck, Award, Flame } from 'lucide-react';
import type { TranslationDict } from '../utils/translations';

interface HeroProps {
  openCart: () => void;
  scrollToProducts: () => void;
  t: TranslationDict;
}

export const Hero: React.FC<HeroProps> = ({ openCart, scrollToProducts, t }) => {
  return (
    <section id="home" className="relative min-h-[85vh] flex items-center justify-center overflow-hidden py-20 px-4">
      {/* Background Image with Overlay */}
      <div className="absolute inset-0 z-0">
        <img
          src={`${import.meta.env.BASE_URL}adiga_hero_bg.png`}
          alt="ADIGA Fire &amp; Safety Warehouse"
          className="w-full h-full object-cover object-center scale-105"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-slate-950/95 via-slate-900/90 to-slate-950/85 dark:from-slate-950/95 dark:via-slate-950/90 dark:to-slate-950/85" />
      </div>

      {/* Hero Content */}
      <div className="relative z-10 max-w-7xl mx-auto w-full grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
        {/* Text Area */}
        <div className="lg:col-span-7 text-left rtl:text-right space-y-6">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-red-500/10 border border-red-500/30 text-red-500 dark:text-red-400 font-bold text-xs uppercase tracking-wider animate-pulse">
            <Flame className="w-3.5 h-3.5" /> {t.heroTag}
          </div>
          
          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold tracking-tight text-white leading-tight">
            {t.heroTitle} <span className="text-red-600">{t.heroTitleRed}</span>
          </h1>
          
          <p className="text-lg text-slate-300 max-w-2xl font-normal leading-relaxed">
            {t.heroDesc}
          </p>

          <div className="flex flex-col sm:flex-row gap-4 pt-4 justify-start">
            <button
              onClick={openCart}
              className="flex items-center justify-center gap-2 text-white px-8 py-4 rounded-xl text-base font-bold tracking-wide shadow-lg transform hover:-translate-y-0.5 group cursor-pointer btn-premium btn-red-premium"
            >
              {t.heroBtnQuote}
              <ArrowRight className="w-5 h-5 group-hover:translate-x-1 rtl:group-hover:-translate-x-1 rtl:rotate-180 transition-transform" />
            </button>
            <button
              onClick={scrollToProducts}
              className="flex items-center justify-center border border-slate-700 text-slate-100 px-8 py-4 rounded-xl text-base font-bold tracking-wide backdrop-blur-sm shadow-md transform hover:-translate-y-0.5 cursor-pointer btn-premium btn-dark-premium"
            >
              {t.heroBtnProducts}
            </button>
          </div>

          {/* Quick trust metrics */}
          <div className="grid grid-cols-3 gap-6 pt-10 border-t border-slate-800">
            <div>
              <p className="text-3xl font-extrabold text-white">{t.statOnTime}</p>
              <p className="text-xs text-slate-400 mt-1 uppercase tracking-wider font-semibold">{t.statOnTimeDesc}</p>
            </div>
            <div>
              <p className="text-3xl font-extrabold text-white">{t.statQC}</p>
              <p className="text-xs text-slate-400 mt-1 uppercase tracking-wider font-semibold">{t.statQCDesc}</p>
            </div>
            <div>
              <p className="text-3xl font-extrabold text-red-500">{t.statISO}</p>
              <p className="text-xs text-slate-400 mt-1 uppercase tracking-wider font-semibold">{t.statISODesc}</p>
            </div>
          </div>
        </div>

        {/* Dynamic Badge Display */}
        <div className="lg:col-span-5 flex flex-col gap-4 text-left rtl:text-right">
          {/* Badge 1 */}
          <div className="bg-slate-900/60 backdrop-blur-md border border-white/15 p-6 rounded-2xl flex items-start gap-4 hover:translate-x-2 rtl:hover:-translate-x-2 transition-transform duration-300 shadow-md">
            <div className="w-12 h-12 bg-red-600/10 border border-red-500/20 text-red-500 rounded-xl flex items-center justify-center shrink-0">
              <ShieldCheck className="w-6 h-6" />
            </div>
            <div>
              <h3 className="font-extrabold text-white text-base">{t.badge1Title}</h3>
              <p className="text-sm text-slate-300 mt-1">{t.badge1Desc}</p>
            </div>
          </div>

          {/* Badge 2 */}
          <div className="bg-slate-900/60 backdrop-blur-md border border-white/15 p-6 rounded-2xl flex items-start gap-4 hover:translate-x-2 rtl:hover:-translate-x-2 transition-transform duration-300 shadow-md">
            <div className="w-12 h-12 bg-red-600/10 border border-red-500/20 text-red-500 rounded-xl flex items-center justify-center shrink-0">
              <Award className="w-6 h-6" />
            </div>
            <div>
              <h3 className="font-extrabold text-white text-base">{t.badge2Title}</h3>
              <p className="text-sm text-slate-300 mt-1">{t.badge2Desc}</p>
            </div>
          </div>

          {/* Badge 3 */}
          <div className="bg-slate-900/60 backdrop-blur-md border border-white/15 p-6 rounded-2xl flex items-start gap-4 hover:translate-x-2 rtl:hover:-translate-x-2 transition-transform duration-300 shadow-md">
            <div className="w-12 h-12 bg-red-600/10 border border-red-500/20 text-red-500 rounded-xl flex items-center justify-center shrink-0">
              <Flame className="w-6 h-6" />
            </div>
            <div>
              <h3 className="font-extrabold text-white text-base">{t.badge3Title}</h3>
              <p className="text-sm text-slate-300 mt-1">{t.badge3Desc}</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
