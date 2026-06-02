import React from 'react';
import { Truck, Cpu, Award, Users } from 'lucide-react';
import type { TranslationDict } from '../utils/translations';

interface TrustStatsProps {
  t: TranslationDict;
}

export const TrustStats: React.FC<TrustStatsProps> = ({ t }) => {
  const stats = [
    {
      icon: <Truck className="w-8 h-8 text-red-500" />,
      title: t.trustStatsTitle,
      metric: '99%',
      description: t.trustStatsOnTimeDesc,
    },
    {
      icon: <Cpu className="w-8 h-8 text-red-500" />,
      title: t.trustStatsEco,
      metric: t.trustStatsMetricEco,
      description: t.trustStatsEcoDesc,
    },
    {
      icon: <Users className="w-8 h-8 text-red-500" />,
      title: t.trustStatsQC,
      metric: '99%',
      description: t.trustStatsQCDesc,
    },
    {
      icon: <Award className="w-8 h-8 text-red-500" />,
      title: t.civilDefenseApproved,
      metric: t.trustStatsMetricCert,
      description: t.trustStatsCertDesc,
    },
  ];

  return (
    <section className="relative py-16 bg-slate-900 border-y border-slate-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {stats.map((stat, index) => (
            <div
              key={index}
              className="flex flex-col items-center text-center p-6 bg-slate-950/40 rounded-2xl border border-slate-800/80 hover:border-red-500/30 transition-all duration-300 transform hover:-translate-y-1 group"
            >
              <div className="w-16 h-16 rounded-2xl bg-slate-900 border border-slate-800 flex items-center justify-center mb-4 group-hover:scale-115 group-hover:border-red-500/20 transition-all">
                {stat.icon}
              </div>
              <span className="text-3xl font-extrabold text-white tracking-tight">
                {stat.metric}
              </span>
              <h3 className="text-base font-bold text-slate-300 mt-2">
                {stat.title}
              </h3>
              <p className="text-sm text-slate-400 mt-1 leading-relaxed">
                {stat.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
