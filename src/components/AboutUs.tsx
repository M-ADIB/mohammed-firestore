import React from 'react';
import { ShieldCheck, Target, Award, CheckCircle } from 'lucide-react';
import type { TranslationDict } from '../utils/translations';

interface AboutUsProps {
  t: TranslationDict;
}

export const AboutUs: React.FC<AboutUsProps> = ({ t }) => {
  const highlights = [
    {
      icon: <ShieldCheck className="w-5 h-5 text-red-600 dark:text-red-400" />,
      title: t.highlight1Title,
      desc: t.highlight1Desc,
    },
    {
      icon: <Award className="w-5 h-5 text-red-600 dark:text-red-400" />,
      title: t.highlight2Title,
      desc: t.highlight2Desc,
    },
    {
      icon: <Target className="w-5 h-5 text-red-600 dark:text-red-400" />,
      title: t.highlight3Title,
      desc: t.highlight3Desc,
    },
  ];

  return (
    <section id="about" className="py-24 bg-white dark:bg-slate-950 transition-colors duration-300">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-16 items-center">
          
          {/* Left Text Block */}
          <div className="lg:col-span-6 space-y-6 text-left rtl:text-right">
            <span className="text-red-600 dark:text-red-500 font-extrabold text-sm uppercase tracking-wider block">
              {t.aboutTag}
            </span>
            <h2 className="text-3xl sm:text-4xl font-extrabold text-slate-900 dark:text-white leading-tight">
              {t.aboutTitle}
            </h2>
            
            <p className="text-base text-slate-600 dark:text-slate-400 leading-relaxed font-normal">
              {t.aboutDesc1}
            </p>

            <p className="text-base text-slate-600 dark:text-slate-400 leading-relaxed font-normal">
              {t.aboutDesc2}
            </p>

            {/* List Points */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 pt-4 border-t border-slate-100 dark:border-slate-800">
              <div className="flex items-center gap-2 text-sm font-semibold text-slate-700 dark:text-slate-300">
                <CheckCircle className="w-5 h-5 text-red-500 shrink-0" />
                <span>{t.segmentOffice}</span>
              </div>
              <div className="flex items-center gap-2 text-sm font-semibold text-slate-700 dark:text-slate-300">
                <CheckCircle className="w-5 h-5 text-red-500 shrink-0" />
                <span>{t.segmentWarehouse}</span>
              </div>
              <div className="flex items-center gap-2 text-sm font-semibold text-slate-700 dark:text-slate-300">
                <CheckCircle className="w-5 h-5 text-red-500 shrink-0" />
                <span>{t.segmentResidential}</span>
              </div>
              <div className="flex items-center gap-2 text-sm font-semibold text-slate-700 dark:text-slate-300">
                <CheckCircle className="w-5 h-5 text-red-500 shrink-0" />
                <span>{t.segmentFireDoors}</span>
              </div>
            </div>
          </div>

          {/* Right Cards Layout */}
          <div className="lg:col-span-6 flex flex-col gap-6">
            {highlights.map((item, idx) => (
              <div
                key={idx}
                className="flex items-start gap-4 p-6 bg-slate-50 dark:bg-slate-900/40 border border-slate-200/80 dark:border-slate-800/80 rounded-2xl shadow-sm hover:shadow-md transition-shadow"
              >
                <div className="w-10 h-10 rounded-lg bg-red-600/10 border border-red-500/20 text-red-500 flex items-center justify-center shrink-0">
                  {item.icon}
                </div>
                <div className="space-y-1 text-left rtl:text-right">
                  <h3 className="font-extrabold text-slate-900 dark:text-white text-base">
                    {item.title}
                  </h3>
                  <p className="text-sm text-slate-500 dark:text-slate-400 leading-relaxed">
                    {item.desc}
                  </p>
                </div>
              </div>
            ))}
          </div>

        </div>
      </div>
    </section>
  );
};
