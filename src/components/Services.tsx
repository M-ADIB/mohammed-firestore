import React, { useState } from 'react';
import { Settings, ClipboardCheck, Bell, Shield, PenTool, Lightbulb, FileText, Check } from 'lucide-react';
import type { TranslationDict } from '../utils/translations';

interface ServicesProps {
  t: TranslationDict;
}

export const Services: React.FC<ServicesProps> = ({ t }) => {
  const [activeStep, setActiveStep] = useState(0);

  const services = [
    {
      icon: <Settings className="w-6 h-6 text-red-650 dark:text-red-450" />,
      title: t.installationTitle,
      desc: t.installationDesc,
    },
    {
      icon: <ClipboardCheck className="w-6 h-6 text-red-650 dark:text-red-450" />,
      title: t.inspectionTitle,
      desc: t.inspectionDesc,
    },
    {
      icon: <Bell className="w-6 h-6 text-red-650 dark:text-red-450" />,
      title: t.calibrationTitle,
      desc: t.calibrationDesc,
    },
    {
      icon: <Lightbulb className="w-6 h-6 text-red-650 dark:text-red-450" />,
      title: t.exitLightsTitle,
      desc: t.exitLightsDesc,
    },
    {
      icon: <PenTool className="w-6 h-6 text-red-650 dark:text-red-450" />,
      title: t.amcTitle,
      desc: t.amcDesc,
    },
    {
      icon: <Shield className="w-6 h-6 text-red-650 dark:text-red-450" />,
      title: t.defenseHelpTitle,
      desc: t.defenseHelpDesc,
    },
  ];

  // Dynamic survey steps translations
  const steps = [
    {
      label: t.installationTitle,
      title: t.installationTitle,
      desc: t.installationDesc,
    },
    {
      label: t.inspectionTitle,
      title: t.inspectionTitle,
      desc: t.inspectionDesc,
    },
    {
      label: t.amcTitle,
      title: t.amcTitle,
      desc: t.amcDesc,
    },
    {
      label: t.defenseHelpTitle,
      title: t.defenseHelpTitle,
      desc: t.defenseHelpDesc,
    },
  ];

  return (
    <section id="services" className="py-24 bg-slate-900 border-b border-slate-800 text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="space-y-4 max-w-3xl mx-auto text-center mb-20">
          <span className="text-red-500 font-extrabold text-sm uppercase tracking-wider block">
            {t.servicesTag}
          </span>
          <h2 className="text-3xl sm:text-4xl font-extrabold tracking-tight">
            {t.servicesTitle}
          </h2>
          <p className="text-base text-slate-400">
            {t.servicesDesc}
          </p>
        </div>

        {/* Services Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-24">
          {services.map((service, index) => (
            <div
              key={index}
              className="flex items-start gap-4 p-6 bg-slate-950/30 border border-slate-800/80 rounded-2xl hover:border-red-500/25 hover:bg-slate-950/50 transition-all duration-300"
            >
              <div className="w-12 h-12 rounded-xl bg-red-600/10 border border-red-500/20 text-red-500 flex items-center justify-center shrink-0">
                {service.icon}
              </div>
              <div className="space-y-1.5 text-left rtl:text-right">
                <h3 className="font-extrabold text-slate-200 text-base">{service.title}</h3>
                <p className="text-sm text-slate-400 leading-relaxed">{service.desc}</p>
              </div>
            </div>
          ))}
        </div>

        {/* Dynamic Testing & Log Workflow (Why Choose ADIGA) */}
        <div className="bg-slate-950/40 border border-slate-800 rounded-3xl p-8 lg:p-12 text-left rtl:text-right">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
            
            {/* Steps Left Panel */}
            <div className="lg:col-span-5 space-y-6">
              <h3 className="text-2xl font-extrabold text-white">
                {t.guaranteeTitle}
              </h3>
              <p className="text-slate-400 text-sm leading-relaxed">
                {t.guaranteeDesc}
              </p>
              
              <div className="flex flex-col gap-2 pt-2">
                {steps.map((step, idx) => (
                  <button
                    key={idx}
                    onClick={() => setActiveStep(idx)}
                    className={`w-full text-left rtl:text-right px-5 py-3.5 rounded-xl font-bold transition-all text-sm flex justify-between items-center cursor-pointer ${
                      activeStep === idx
                        ? 'bg-red-600 text-white shadow-md'
                        : 'bg-slate-900 text-slate-400 hover:bg-slate-800/70'
                    }`}
                  >
                    <span>{step.label}</span>
                    {activeStep === idx && <Check className="w-4 h-4" />}
                  </button>
                ))}
              </div>
            </div>

            {/* Steps Right Panel */}
            <div className="lg:col-span-7 bg-slate-900 border border-slate-800 p-8 rounded-2xl flex flex-col justify-center min-h-[280px] shadow-inner relative overflow-hidden">
              {/* Background Glow */}
              <div className="absolute -right-20 -bottom-20 w-60 h-60 bg-red-600/5 blur-[80px] rounded-full" />
              
              <div className="space-y-4 relative z-10">
                <div className="inline-flex items-center gap-2 text-xs uppercase font-extrabold tracking-widest text-red-500">
                  <FileText className="w-4 h-4" /> {t.workflowStandard}
                </div>
                <h4 className="text-xl font-extrabold text-white">
                  {steps[activeStep].title}
                </h4>
                <p className="text-sm text-slate-300 leading-relaxed font-semibold">
                  {steps[activeStep].desc}
                </p>
                <div className="pt-4 flex gap-6 items-center text-xs font-bold text-slate-400">
                  <span className="flex items-center gap-1.5 text-emerald-400">
                    <Check className="w-4 h-4" /> {t.annualCheckingLogs}
                  </span>
                  <span className="flex items-center gap-1.5 text-red-400">
                    <Check className="w-4 h-4" /> {t.civilDefenseCodes}
                  </span>
                </div>
              </div>
            </div>

          </div>
        </div>

      </div>
    </section>
  );
};
