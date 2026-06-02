import React, { useState } from 'react';
import { Phone, Mail, Clock, MapPin, Send, CheckCircle2 } from 'lucide-react';
import type { TranslationDict } from '../utils/translations';

interface ContactProps {
  t: TranslationDict;
}

export const Contact: React.FC<ContactProps> = ({ t }) => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    subject: 'General Inquiry',
    message: '',
  });
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setTimeout(() => {
      setSubmitted(true);
      setFormData({ name: '', email: '', phone: '', subject: 'General Inquiry', message: '' });
    }, 600);
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  return (
    <section id="contact" className="py-24 bg-slate-50 dark:bg-slate-900 transition-colors duration-300">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="space-y-4 max-w-3xl mx-auto text-center mb-16">
          <span className="text-red-600 dark:text-red-500 font-extrabold text-sm uppercase tracking-wider block">
            {t.contactTag}
          </span>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-slate-900 dark:text-white">
            {t.contactTitle}
          </h2>
          <p className="text-base text-slate-600 dark:text-slate-400">
            {t.contactDesc}
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12">
          {/* Info cards (Left Panel) */}
          <div className="lg:col-span-5 space-y-6">
            
            {/* Phone Card */}
            <div className="bg-white dark:bg-slate-950/40 border border-slate-200/80 dark:border-slate-800/80 p-6 rounded-2xl flex items-center gap-4 hover:border-red-500/25 transition-colors">
              <div className="w-12 h-12 rounded-xl bg-red-600/10 border border-red-500/20 text-red-500 flex items-center justify-center shrink-0">
                <Phone className="w-5 h-5" />
              </div>
              <div className="text-left rtl:text-right space-y-0.5">
                <p className="text-xs text-slate-400 font-bold uppercase tracking-wider">{t.contactPhoneLabel}</p>
                <a href="tel:+971503033789" className="text-base font-extrabold text-slate-800 dark:text-slate-100 hover:text-red-600 transition-colors" dir="ltr">
                  +971 50 303 3789
                </a>
              </div>
            </div>

            {/* Email Card */}
            <div className="bg-white dark:bg-slate-950/40 border border-slate-200/80 dark:border-slate-800/80 p-6 rounded-2xl flex items-center gap-4 hover:border-red-500/25 transition-colors">
              <div className="w-12 h-12 rounded-xl bg-red-600/10 border border-red-500/20 text-red-500 flex items-center justify-center shrink-0">
                <Mail className="w-5 h-5" />
              </div>
              <div className="text-left rtl:text-right space-y-0.5">
                <p className="text-xs text-slate-400 font-bold uppercase tracking-wider">{t.contactEmailLabel}</p>
                <a href="mailto:info@adigafire.com" className="text-base font-extrabold text-slate-800 dark:text-slate-100 hover:text-red-600 transition-colors">
                  info@adigafire.com
                </a>
              </div>
            </div>

            {/* Hours Card */}
            <div className="bg-white dark:bg-slate-950/40 border border-slate-200/80 dark:border-slate-800/80 p-6 rounded-2xl flex items-center gap-4 hover:border-red-500/25 transition-colors">
              <div className="w-12 h-12 rounded-xl bg-red-600/10 border border-red-500/20 text-red-500 flex items-center justify-center shrink-0">
                <Clock className="w-5 h-5" />
              </div>
              <div className="text-left rtl:text-right space-y-0.5">
                <p className="text-xs text-slate-400 font-bold uppercase tracking-wider">{t.contactHoursLabel}</p>
                <p className="text-base font-extrabold text-slate-800 dark:text-slate-100">
                  {t.monFriHours}
                </p>
              </div>
            </div>

            {/* Location Card */}
            <div className="bg-white dark:bg-slate-950/40 border border-slate-200/80 dark:border-slate-800/80 p-6 rounded-2xl flex items-center gap-4 hover:border-red-500/25 transition-colors">
              <div className="w-12 h-12 rounded-xl bg-red-600/10 border border-red-500/20 text-red-500 flex items-center justify-center shrink-0">
                <MapPin className="w-5 h-5" />
              </div>
              <div className="text-left rtl:text-right space-y-0.5">
                <p className="text-xs text-slate-400 font-bold uppercase tracking-wider">{t.contactLocationLabel}</p>
                <p className="text-sm font-extrabold text-slate-800 dark:text-slate-100">
                  Sheikh Khalifa Bin Zayed St, Ajman, UAE
                </p>
              </div>
            </div>

          </div>

          {/* Contact Form (Right Panel) */}
          <div className="lg:col-span-7 bg-white dark:bg-slate-950/40 border border-slate-200/80 dark:border-slate-800/80 p-8 rounded-3xl shadow-sm text-left rtl:text-right">
            {submitted ? (
              <div className="h-full flex flex-col items-center justify-center text-center space-y-4 py-12">
                <div className="w-16 h-16 bg-emerald-500/10 border border-emerald-500/20 text-emerald-500 rounded-full flex items-center justify-center animate-bounce">
                  <CheckCircle2 className="w-8 h-8" />
                </div>
                <h4 className="text-xl font-extrabold text-slate-900 dark:text-white">{t.contactSuccessTitle}</h4>
                <p className="text-sm text-slate-500 dark:text-slate-400 max-w-sm">
                  {t.contactSuccessDesc}
                </p>
                <button
                  onClick={() => setSubmitted(false)}
                  className="bg-red-600 hover:bg-red-700 text-white font-semibold py-2 px-5 rounded-lg text-sm transition-colors cursor-pointer"
                >
                  {t.contactSuccessBtn}
                </button>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-6">
                <h3 className="text-xl font-extrabold text-slate-900 dark:text-white">
                  {t.contactFormTitle}
                </h3>
                
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  {/* Name */}
                  <div className="space-y-1.5 text-left rtl:text-right">
                    <label className="text-xs font-bold text-slate-400 dark:text-slate-500 uppercase tracking-wider">{t.contactFormName}</label>
                    <input
                      type="text"
                      name="name"
                      required
                      placeholder="John Doe"
                      value={formData.name}
                      onChange={handleChange}
                      className="w-full px-4 py-2.5 bg-slate-50 dark:bg-slate-900 text-slate-900 dark:text-white border border-slate-200 dark:border-slate-800 focus:outline-none focus:ring-2 focus:ring-red-500/50 rounded-xl text-sm font-semibold"
                    />
                  </div>

                  {/* Phone */}
                  <div className="space-y-1.5 text-left rtl:text-right">
                    <label className="text-xs font-bold text-slate-400 dark:text-slate-500 uppercase tracking-wider">{t.contactFormPhone}</label>
                    <input
                      type="tel"
                      name="phone"
                      required
                      placeholder="+971 50 123 4567"
                      value={formData.phone}
                      onChange={handleChange}
                      className="w-full px-4 py-2.5 bg-slate-50 dark:bg-slate-900 text-slate-900 dark:text-white border border-slate-200 dark:border-slate-800 focus:outline-none focus:ring-2 focus:ring-red-500/50 rounded-xl text-sm font-semibold"
                    />
                  </div>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  {/* Email */}
                  <div className="space-y-1.5 text-left rtl:text-right">
                    <label className="text-xs font-bold text-slate-400 dark:text-slate-500 uppercase tracking-wider">{t.contactFormEmail}</label>
                    <input
                      type="email"
                      name="email"
                      required
                      placeholder="info@yourcompany.com"
                      value={formData.email}
                      onChange={handleChange}
                      className="w-full px-4 py-2.5 bg-slate-50 dark:bg-slate-900 text-slate-900 dark:text-white border border-slate-200 dark:border-slate-800 focus:outline-none focus:ring-2 focus:ring-red-500/50 rounded-xl text-sm font-semibold"
                    />
                  </div>

                  {/* Subject */}
                  <div className="space-y-1.5 text-left rtl:text-right">
                    <label className="text-xs font-bold text-slate-400 dark:text-slate-500 uppercase tracking-wider">{t.contactFormSubject}</label>
                    <select
                      name="subject"
                      value={formData.subject}
                      onChange={handleChange}
                      className="w-full px-4 py-2.5 bg-slate-50 dark:bg-slate-900 text-slate-900 dark:text-white border border-slate-200 dark:border-slate-800 focus:outline-none focus:ring-2 focus:ring-red-500/50 rounded-xl text-sm font-semibold cursor-pointer"
                    >
                      <option value="General Inquiry">General Inquiry</option>
                      <option value="Product Sizing">Product Sizing / Ordering</option>
                      <option value="Maintenance AMC">Maintenance (AMC) Request</option>
                      <option value="Civil Defense Approval">Civil Defense Inspections</option>
                    </select>
                  </div>
                </div>

                {/* Message */}
                <div className="space-y-1.5 text-left rtl:text-right">
                  <label className="text-xs font-bold text-slate-400 dark:text-slate-500 uppercase tracking-wider">{t.contactFormMessage}</label>
                  <textarea
                    name="message"
                    required
                    rows={4}
                    placeholder="Provide details about your project or general inquiries..."
                    value={formData.message}
                    onChange={handleChange}
                    className="w-full px-4 py-2.5 bg-slate-50 dark:bg-slate-900 text-slate-900 dark:text-white border border-slate-200 dark:border-slate-800 focus:outline-none focus:ring-2 focus:ring-red-500/50 rounded-xl text-sm font-semibold resize-none"
                  />
                </div>

                {/* Submit button */}
                <button
                  type="submit"
                  className="w-full text-white font-extrabold py-3.5 px-6 rounded-xl flex items-center justify-center gap-2 shadow-lg transition-all cursor-pointer btn-premium btn-red-premium"
                >
                  <Send className="w-4 h-4" /> {t.contactFormDispatch}
                </button>
              </form>
            )}
          </div>
        </div>

      </div>
    </section>
  );
};
