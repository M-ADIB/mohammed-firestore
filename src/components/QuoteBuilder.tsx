import { useState } from 'react';
import { X, Trash2, Mail, Phone, Building, User, MapPin, MessageSquare, Send, CheckCircle2 } from 'lucide-react';
import type { Product } from './Catalog';
import { getImageUrl } from './Catalog';
import type { TranslationDict } from '../utils/translations';

interface QuoteBuilderProps {
  isOpen: boolean;
  onClose: () => void;
  cartItems: Product[];
  removeFromCart: (id: string) => void;
  clearCart: () => void;
  t: TranslationDict;
  lang: 'en' | 'ar';
}

export const QuoteBuilder: React.FC<QuoteBuilderProps> = ({
  isOpen,
  onClose,
  cartItems,
  removeFromCart,
  clearCart,
  t,
  lang,
}) => {
  const [formData, setFormData] = useState({
    name: '',
    company: '',
    email: '',
    phone: '',
    city: lang === 'en' ? 'Ajman' : 'عجمان',
    facilityType: lang === 'en' ? 'Commercial Office' : 'مكتب تجاري',
    areaSize: '',
    message: '',
  });

  const [serviceRequirements, setServiceRequirements] = useState({
    installation: true,
    maintenance: false,
    inspection: true,
  });

  const [submitted, setSubmitted] = useState(false);

  const uaeCities = lang === 'en' 
    ? ['Ajman', 'Dubai', 'Abu Dhabi', 'Sharjah', 'Umm Al Quwain', 'Ras Al Khaimah', 'Fujairah']
    : ['عجمان', 'دبي', 'أبوظبي', 'الشارقة', 'أم القيوين', 'رأس الخيمة', 'الفجيرة'];
    
  const facilityTypes = lang === 'en'
    ? ['Commercial Office', 'Residential Apartment', 'Industrial Warehouse', 'Retail Mall', 'Hotel/Hospitality']
    : ['مكتب تجاري', 'شقة سكنية', 'مستودع صناعي', 'مركز تسوق', 'فندق / منشأة ضيافة'];

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleCheckboxChange = (name: 'installation' | 'maintenance' | 'inspection') => {
    setServiceRequirements({
      ...serviceRequirements,
      [name]: !serviceRequirements[name],
    });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setTimeout(() => {
      setSubmitted(true);
      clearCart();
    }, 800);
  };

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-50 flex justify-end bg-slate-950/70 backdrop-blur-sm animate-fade-in" dir={lang === 'ar' ? 'rtl' : 'ltr'}>
      {/* Backdrop tap to close */}
      <div className="absolute inset-0 z-0" onClick={onClose} />

      {/* Drawer Container */}
      <div className="relative z-10 w-full max-w-2xl bg-white dark:bg-slate-950 h-full shadow-2xl flex flex-col justify-between overflow-y-auto animate-slide-left border-l border-slate-200 dark:border-slate-800">
        
        {/* Header */}
        <div className="p-6 border-b border-slate-100 dark:border-slate-900 flex justify-between items-center bg-slate-50 dark:bg-slate-900/50">
          <div className="text-left rtl:text-right">
            <h3 className="text-lg font-extrabold text-slate-900 dark:text-white flex items-center gap-2">
              {t.quoteDrawerTitle}
            </h3>
            <p className="text-xs text-slate-500 mt-0.5">{t.quoteDrawerDesc}</p>
          </div>
          <button
            onClick={onClose}
            className="p-2 text-slate-400 hover:text-slate-600 dark:hover:text-slate-200 rounded-lg hover:bg-slate-100 dark:hover:bg-slate-800 transition-all cursor-pointer"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Content Body */}
        {submitted ? (
          <div className="flex-1 flex flex-col items-center justify-center p-8 text-center space-y-6">
            <div className="w-20 h-20 bg-emerald-500/10 border border-emerald-500/30 text-emerald-500 rounded-full flex items-center justify-center animate-bounce">
              <CheckCircle2 className="w-10 h-10" />
            </div>
            <div className="space-y-2 max-w-md">
              <h4 className="text-2xl font-extrabold text-slate-900 dark:text-white">{t.quoteSuccessTitle}</h4>
              <p className="text-sm text-slate-500 dark:text-slate-400 leading-relaxed">
                {t.quoteSuccessDesc}
              </p>
            </div>
            <button
              onClick={() => {
                setSubmitted(false);
                onClose();
              }}
              className="btn-premium btn-red-premium font-bold px-6 py-3 rounded-xl transition-all cursor-pointer"
            >
              {t.quoteSuccessBtn}
            </button>
          </div>
        ) : (
          <div className="flex-1 p-6 space-y-8 overflow-y-auto">
            {/* Selected Items Section */}
            <div className="space-y-4">
              <h4 className="text-xs uppercase tracking-widest text-slate-400 dark:text-slate-500 font-extrabold text-left rtl:text-right">
                {t.quoteSec1} ({cartItems.length})
              </h4>
              {cartItems.length === 0 ? (
                <div className="p-5 text-center bg-slate-50 dark:bg-slate-900/30 border border-dashed border-slate-200 dark:border-slate-800 rounded-xl">
                  <p className="text-sm text-slate-500 dark:text-slate-400">
                    {t.quoteEmptyCart}
                  </p>
                </div>
              ) : (
                <div className="space-y-2 max-h-48 overflow-y-auto pr-1">
                  {cartItems.map((item) => (
                    <div
                      key={item.id}
                      className="flex items-center justify-between p-3.5 bg-slate-50 dark:bg-slate-900/40 border border-slate-200 dark:border-slate-800/60 rounded-xl"
                    >
                      <div className="flex items-center gap-3">
                        <img
                          src={getImageUrl(item.imagePath)}
                          alt={item.name}
                          className="w-10 h-10 rounded-lg object-cover"
                        />
                        <span className="text-sm font-extrabold text-slate-800 dark:text-slate-200">
                          {item.name}
                        </span>
                      </div>
                      <button
                        onClick={() => removeFromCart(item.id)}
                        className="p-1.5 text-slate-400 hover:text-red-600 dark:hover:text-red-400 transition-colors cursor-pointer"
                        aria-label="Remove item"
                      >
                        <Trash2 className="w-4 h-4" />
                      </button>
                    </div>
                  ))}
                </div>
              )}
            </div>

            {/* Service Options */}
            <div className="space-y-4">
              <h4 className="text-xs uppercase tracking-widest text-slate-400 dark:text-slate-500 font-extrabold text-left rtl:text-right">
                {t.quoteSec2}
              </h4>
              <div className="grid grid-cols-3 gap-3">
                <button
                  type="button"
                  onClick={() => handleCheckboxChange('installation')}
                  className={`p-3 rounded-xl border font-bold text-xs text-center transition-all flex flex-col items-center gap-1.5 cursor-pointer ${
                    serviceRequirements.installation
                      ? 'border-red-500 bg-red-500/5 text-red-600 dark:text-red-400'
                      : 'border-slate-200 dark:border-slate-800 text-slate-500 hover:bg-slate-50 dark:hover:bg-slate-900'
                  }`}
                >
                  <span className="text-xs">{t.quoteInstallLabel}</span>
                  <span className="text-[10px] opacity-60">{t.quoteInstallSub}</span>
                </button>
                <button
                  type="button"
                  onClick={() => handleCheckboxChange('maintenance')}
                  className={`p-3 rounded-xl border font-bold text-xs text-center transition-all flex flex-col items-center gap-1.5 cursor-pointer ${
                    serviceRequirements.maintenance
                      ? 'border-red-500 bg-red-500/5 text-red-600 dark:text-red-400'
                      : 'border-slate-200 dark:border-slate-800 text-slate-500 hover:bg-slate-50 dark:hover:bg-slate-900'
                  }`}
                >
                  <span className="text-xs">{t.quoteMaintenanceLabel}</span>
                  <span className="text-[10px] opacity-60">{t.quoteMaintenanceSub}</span>
                </button>
                <button
                  type="button"
                  onClick={() => handleCheckboxChange('inspection')}
                  className={`p-3 rounded-xl border font-bold text-xs text-center transition-all flex flex-col items-center gap-1.5 cursor-pointer ${
                    serviceRequirements.inspection
                      ? 'border-red-500 bg-red-500/5 text-red-600 dark:text-red-400'
                      : 'border-slate-200 dark:border-slate-800 text-slate-500 hover:bg-slate-50 dark:hover:bg-slate-900'
                  }`}
                >
                  <span className="text-xs">{t.quoteInspectionLabel}</span>
                  <span className="text-[10px] opacity-60">{t.quoteInspectionSub}</span>
                </button>
              </div>
            </div>

            {/* Form Fields */}
            <form onSubmit={handleSubmit} className="space-y-4">
              <h4 className="text-xs uppercase tracking-widest text-slate-400 dark:text-slate-500 font-extrabold text-left rtl:text-right">
                {t.quoteSec3}
              </h4>
              
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                {/* Name */}
                <div className="relative">
                  <User className="absolute left-3 top-3 w-4 h-4 text-slate-400 rtl:right-3 rtl:left-auto" />
                  <input
                    type="text"
                    name="name"
                    required
                    placeholder={t.quoteFormName}
                    value={formData.name}
                    onChange={handleInputChange}
                    className="w-full pl-10 pr-4 rtl:pr-10 rtl:pl-4 py-2.5 bg-slate-50 dark:bg-slate-900 text-slate-900 dark:text-white border border-slate-200 dark:border-slate-800 focus:outline-none focus:ring-2 focus:ring-red-500/50 rounded-xl text-sm font-semibold"
                  />
                </div>

                {/* Company Name */}
                <div className="relative">
                  <Building className="absolute left-3 top-3 w-4 h-4 text-slate-400 rtl:right-3 rtl:left-auto" />
                  <input
                    type="text"
                    name="company"
                    placeholder={t.quoteFormCompany}
                    value={formData.company}
                    onChange={handleInputChange}
                    className="w-full pl-10 pr-4 rtl:pr-10 rtl:pl-4 py-2.5 bg-slate-50 dark:bg-slate-900 text-slate-900 dark:text-white border border-slate-200 dark:border-slate-800 focus:outline-none focus:ring-2 focus:ring-red-500/50 rounded-xl text-sm font-semibold"
                  />
                </div>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                {/* Email */}
                <div className="relative">
                  <Mail className="absolute left-3 top-3 w-4 h-4 text-slate-400 rtl:right-3 rtl:left-auto" />
                  <input
                    type="email"
                    name="email"
                    required
                    placeholder={t.quoteFormEmail}
                    value={formData.email}
                    onChange={handleInputChange}
                    className="w-full pl-10 pr-4 rtl:pr-10 rtl:pl-4 py-2.5 bg-slate-50 dark:bg-slate-900 text-slate-900 dark:text-white border border-slate-200 dark:border-slate-800 focus:outline-none focus:ring-2 focus:ring-red-500/50 rounded-xl text-sm font-semibold"
                  />
                </div>

                {/* Phone */}
                <div className="relative">
                  <Phone className="absolute left-3 top-3 w-4 h-4 text-slate-400 rtl:right-3 rtl:left-auto" />
                  <input
                    type="tel"
                    name="phone"
                    required
                    placeholder={t.quoteFormPhone}
                    value={formData.phone}
                    onChange={handleInputChange}
                    className="w-full pl-10 pr-4 rtl:pr-10 rtl:pl-4 py-2.5 bg-slate-50 dark:bg-slate-900 text-slate-900 dark:text-white border border-slate-200 dark:border-slate-800 focus:outline-none focus:ring-2 focus:ring-red-500/50 rounded-xl text-sm font-semibold"
                  />
                </div>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                {/* City Location */}
                <div className="relative flex items-center">
                  <MapPin className="absolute left-3 w-4 h-4 text-slate-400 z-10 pointer-events-none rtl:right-3 rtl:left-auto" />
                  <select
                    name="city"
                    value={formData.city}
                    onChange={handleInputChange}
                    className="w-full pl-10 pr-4 rtl:pr-10 rtl:pl-4 py-2.5 bg-slate-50 dark:bg-slate-900 text-slate-900 dark:text-white border border-slate-200 dark:border-slate-800 focus:outline-none focus:ring-2 focus:ring-red-500/50 rounded-xl text-sm font-semibold appearance-none cursor-pointer"
                  >
                    {uaeCities.map((city) => (
                      <option key={city} value={city}>
                        {city} {lang === 'en' ? '(UAE)' : '(الإمارات)'}
                      </option>
                    ))}
                  </select>
                </div>

                {/* Facility Type */}
                <div className="relative flex items-center">
                  <Building className="absolute left-3 w-4 h-4 text-slate-400 z-10 pointer-events-none rtl:right-3 rtl:left-auto" />
                  <select
                    name="facilityType"
                    value={formData.facilityType}
                    onChange={handleInputChange}
                    className="w-full pl-10 pr-4 rtl:pr-10 rtl:pl-4 py-2.5 bg-slate-50 dark:bg-slate-900 text-slate-900 dark:text-white border border-slate-200 dark:border-slate-800 focus:outline-none focus:ring-2 focus:ring-red-500/50 rounded-xl text-sm font-semibold appearance-none cursor-pointer"
                  >
                    {facilityTypes.map((type) => (
                      <option key={type} value={type}>
                        {type}
                      </option>
                    ))}
                  </select>
                </div>
              </div>

              {/* Area Size */}
              <div className="relative">
                <input
                  type="number"
                  name="areaSize"
                  placeholder={t.quoteFormSize}
                  value={formData.areaSize}
                  onChange={handleInputChange}
                  className="w-full pl-4 pr-4 py-2.5 bg-slate-50 dark:bg-slate-900 text-slate-900 dark:text-white border border-slate-200 dark:border-slate-800 focus:outline-none focus:ring-2 focus:ring-red-500/50 rounded-xl text-sm font-semibold text-left rtl:text-right"
                />
              </div>

              {/* Message */}
              <div className="relative">
                <MessageSquare className="absolute left-3 top-3.5 w-4 h-4 text-slate-400 rtl:right-3 rtl:left-auto" />
                <textarea
                  name="message"
                  rows={3}
                  placeholder={t.quoteFormMsg}
                  value={formData.message}
                  onChange={handleInputChange}
                  className="w-full pl-10 pr-4 rtl:pr-10 rtl:pl-4 py-2.5 bg-slate-50 dark:bg-slate-900 text-slate-900 dark:text-white border border-slate-200 dark:border-slate-800 focus:outline-none focus:ring-2 focus:ring-red-500/50 rounded-xl text-sm font-semibold resize-none"
                />
              </div>

              {/* Submit panel */}
              <div className="pt-4 border-t border-slate-100 dark:border-slate-900">
                <button
                  type="submit"
                  className="w-full btn-premium btn-red-premium font-extrabold py-3.5 px-6 rounded-xl flex items-center justify-center gap-2 transition-all cursor-pointer"
                >
                  <Send className="w-4 h-4" /> {t.quoteFormSubmit}
                </button>
              </div>
            </form>
          </div>
        )}
      </div>
    </div>
  );
};
