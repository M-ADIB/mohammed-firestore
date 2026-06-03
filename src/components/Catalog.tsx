import React, { useState } from 'react';
import { Search, Plus, Check, ShieldCheck, HelpCircle, Layers, Flame, Wind, Eye, CheckCircle2 } from 'lucide-react';
import type { TranslationDict } from '../utils/translations';

export interface Product {
  id: string;
  name: string;
  category: string;
  shortDesc: string;
  longDesc: string;
  specs: string[];
  applications: string[];
  certifications: string[];
  imagePath: string;
  icon: React.ReactNode;
  bgGradient: string;
}

interface CatalogProps {
  addToCart: (product: Product) => void;
  cartIds: string[];
  t: TranslationDict;
  lang: 'en' | 'ar';
}

export const getImageUrl = (path: string) => {
  const cleanPath = path.startsWith('/') ? path.slice(1) : path;
  return `${import.meta.env.BASE_URL}${cleanPath}`;
};

export const Catalog: React.FC<CatalogProps> = ({ addToCart, cartIds, t, lang }) => {
  const [activeTab, setActiveTab] = useState('ALL');
  const [searchQuery, setSearchQuery] = useState('');
  const [selectedProduct, setSelectedProduct] = useState<Product | null>(null);

  const categories = [
    { key: 'ALL', label: lang === 'en' ? 'All Products' : 'جميع المنتجات' },
    { key: 'EQUIPMENT', label: lang === 'en' ? 'Fighting Equipment' : 'معدات المكافحة' },
    { key: 'SYSTEMS', label: lang === 'en' ? 'Protection Systems' : 'أنظمة الحماية' },
    { key: 'DETECTION', label: lang === 'en' ? 'Fire Detection' : 'الكشف عن الحرائق' },
    { key: 'DOORS', label: lang === 'en' ? 'Fire Doors' : 'أبواب الحريق' },
    { key: 'PASSIVE', label: lang === 'en' ? 'Passive Protection' : 'الحماية السلبية' },
    { key: 'PUMPS', label: lang === 'en' ? 'Fire Pumps' : 'مضخات الحريق' },
  ];

  // Dynamic products list utilizing current translation strings
  const products: Product[] = [
    {
      id: 'eq-1',
      name: lang === 'en' ? 'Portable Fire Extinguishers' : 'طفايات الحريق المحمولة',
      category: 'EQUIPMENT',
      shortDesc: lang === 'en' ? 'Certified CO2, Dry Powder, and Water/Foam extinguishers.' : 'طفايات معتمدة لثاني أكسيد الكربون، والمسحوق الجاف، والماء/الرغوة.',
      longDesc: lang === 'en' 
        ? 'Our extinguishers are built to combat specific fire classes (A, B, C, D, E). Engineered with high-strength steel cylinders, safety valves, and heavy-duty pressure gauges. Fully certified to international standards.'
        : 'تم تصميم طفايات الحريق لدينا لمكافحة فئات حرائق معينة (A، B، C، D، E). مصممة بأسطوانات فولاذية عالية القوة، وصمامات أمان، ومقاييس ضغط شديدة التحمل. معتمدة بالكامل وفقاً للمعايير الدولية.',
      specs: lang === 'en' 
        ? ['Sizes: 2kg, 4kg, 6kg, 9kg, 12kg', 'Extinguishing Agent: CO2, ABC Dry Powder, Foam', 'Operating Pressure: 15 bar (217 psi)', 'Cylinder Material: High-grade steel or aluminum']
        : ['الأحجام: ٢ كجم، ٤ كجم، ٦ كجم، ٩ كجم، ١٢ كجم', 'عامل الإطفاء: ثاني أكسيد الكربون، مسحوق ABC الجاف، الرغوة', 'ضغط التشغيل: ١٥ بار (٢١٧ رطل/بوصة مربعة)', 'مادة الأسطوانة: فولاذ أو ألومنيوم عالي الجودة'],
      applications: lang === 'en'
        ? ['Offices', 'Residential buildings', 'Warehouses', 'Vehicles & marine vessels']
        : ['المكاتب والمباني الإدارية', 'المباني والمنشآت السكنية', 'المستودعات والورش', 'المركبات والسفن البحرية'],
      certifications: ['ISO 9001:2008', 'UAE Civil Defense Approved', 'EN3 Compliant'],
      imagePath: '/products/extinguisher.png',
      icon: <Flame className="w-5 h-5 text-white" />,
      bgGradient: 'from-red-600 to-rose-700',
    },
    {
      id: 'eq-2',
      name: lang === 'en' ? 'Fire Hose Reels & Cabinets' : 'خزائن وبكرات خراطيم الحريق',
      category: 'EQUIPMENT',
      shortDesc: lang === 'en' ? 'Recessed and surface-mounted manual/automatic hose reels.' : 'بكرات خراطيم حريق يدوية وتلقائية مثبتة داخل الجدران أو خارجها.',
      longDesc: lang === 'en'
        ? 'ADIGA high-quality hose reels provide an immediate and continuous supply of water. Fitted inside heavy-duty electro-galvanized steel cabinets with safety locks and glass fronts.'
        : 'توفر بكرات خراطيم الحريق عالية الجودة من أديكا إمداداً فورياً ومستمراً بالمياه. مجهزة داخل خزائن فولاذية مجلفنة شديدة التحمل مع أقفال أمان وواجهات زجاجية.',
      specs: lang === 'en'
        ? ['Hose Length: 30 meters', 'Hose Diameter: 1 inch (25mm)', 'Working Pressure: 12 bar', 'Cabinet Finish: Red epoxy powder coated']
        : ['طول الخرطوم: ٣٠ متراً', 'قطر الخرطوم: ١ بوصة (٢٥ ملم)', 'ضغط العمل: ١٢ بار', 'طلاء الخزانة: طلاء مسحوق إيبوكسي أحمر'],
      applications: lang === 'en'
        ? ['Commercial hallways', 'Industrial factories', 'Parking structures', 'Multi-story offices']
        : ['الممرات التجارية', 'المصانع والمناطق الصناعية', 'مواقف السيارات المغطاة', 'المكاتب متعددة الطوابق'],
      certifications: ['UAE Civil Defense Approved', 'BS EN 671-1 Approved'],
      imagePath: '/products/hose_reel.png',
      icon: <Layers className="w-5 h-5 text-white" />,
      bgGradient: 'from-rose-600 to-red-700',
    },
    {
      id: 'sys-1',
      name: lang === 'en' ? 'Automatic Sprinkler Systems' : 'أنظمة رشاشات المياه التلقائية',
      category: 'SYSTEMS',
      shortDesc: lang === 'en' ? 'Wet, dry, and deluge sprinkler configurations.' : 'تجهيزات رشاشات المياه الرطبة والجافة والغمر الكلي.',
      longDesc: lang === 'en'
        ? 'Designed to automatically detect and suppress fires in their early stages. Integrates fast-response glass bulbs that shatter at preset temperatures to release pressurized water directly onto the hazard zone.'
        : 'مصممة لاكتشاف الحرائق وإخمادها تلقائياً في مراحلها المبكرة. تدمج بصيلات زجاجية سريعة الاستجابة تتحطم عند درجات حرارة محددة مسبقاً لإطلاق المياه المضغوطة مباشرة على منطقة الخطر.',
      specs: lang === 'en'
        ? ['Response types: Quick Response (QR), Standard Response (SR)', 'Thread Sizes: 1/2" NPT, 3/4" NPT', 'Temperature Ratings: 57°C, 68°C, 79°C, 93°C', 'K-Factor: 5.6, 8.0, 11.2']
        : ['نوع الاستجابة: استجابة سريعة (QR)، استجابة قياسية (SR)', 'أحجام الخيوط: ١/٢ بوصة، ٣/٤ بوصة NPT', 'درجات الحرارة: ٥٧°م، ٦٨°م، ٧٩°م، ٩٣°م', 'معامل التدفق K-Factor: 5.6, 8.0, 11.2'],
      applications: lang === 'en'
        ? ['High-rise offices', 'Large warehouses', 'Retail malls', 'Hospitals']
        : ['المكاتب شاهقة الارتفاع', 'المستودعات الكبيرة', 'مراكز التسوق والتجزئة', 'المستشفيات والمنشآت الصحية'],
      certifications: ['UL Listed', 'FM Approved', 'UAE Civil Defense'],
      imagePath: '/products/sprinkler.png',
      icon: <Wind className="w-5 h-5 text-white" />,
      bgGradient: 'from-blue-600 to-indigo-700',
    },
    {
      id: 'sys-2',
      name: lang === 'en' ? 'Clean Agent Suppression Systems' : 'أنظمة الإطفاء بالغاز النظيف',
      category: 'SYSTEMS',
      shortDesc: lang === 'en' ? 'FM-200 and Novec 1230 gas fire suppression systems.' : 'أنظمة مكافحة الحرائق بالغاز النظيف FM-200 و Novec 1230.',
      longDesc: lang === 'en'
        ? 'Waterless fire protection designed for sensitive electronic environments. Discharges gas within 10 seconds to extinguish fires safely without leaving residue or causing electrical short circuits.'
        : 'حماية خالية من المياه للبيئات الإلكترونية الحساسة. تطلق الغاز في غضون ١٠ ثوانٍ لإخماد الحرائق بأمان دون ترك أي بقايا أو التسبب في ماس كهربائي.',
      specs: lang === 'en'
        ? ['Agents: FM-200 (HFC-227ea), Novec 1230', 'Discharge Time: < 10 seconds', 'Zero Ozone Depletion Potential (ODP)', 'Cylinder Capacities: 8L to 360L']
        : ['الغازات: FM-200 (HFC-227ea)، Novec 1230', 'وقت التفريغ: أقل من ١٠ ثوانٍ', 'صفر احتمالية استنفاد الأوزون (ODP)', 'سعة الأسطوانة: من ٨ لتر إلى ٣٦٠ لتر'],
      applications: lang === 'en'
        ? ['Data centers', 'Server rooms', 'Telecommunication facilities', 'Museums & archives']
        : ['مراكز البيانات', 'غرف الخوادم والشبكات', 'مرافق الاتصالات', 'المتاحف والمحفوظات التاريخية'],
      certifications: ['UL Listed', 'FM Approved', 'Civil Defense Approved'],
      imagePath: '/products/suppression.png',
      icon: <ShieldCheck className="w-5 h-5 text-white" />,
      bgGradient: 'from-cyan-600 to-blue-700',
    },
    {
      id: 'det-1',
      name: lang === 'en' ? 'Addressable Fire Alarm Panels' : 'لوحات إنذار الحريق المعنونة',
      category: 'DETECTION',
      shortDesc: lang === 'en' ? 'Intelligent multi-loop addressable control systems.' : 'لوحات تحكم ذكية معنونة تدعم حلقات متعددة للأجهزة.',
      longDesc: lang === 'en'
        ? 'State-of-the-art micro-processor control panel displaying the exact location of triggered smoke or heat sensors. Highly scalable and supports connection with fire department emergency dispatch networks.'
        : 'لوحة تحكم بمعالج دقيق تعرض الموقع الدقيق لأجهزة استشعار الدخان أو الحرارة التي تم تفعيلها. قابلة للتطوير وتدعم الاتصال بشبكات الدفاع المدني لحالات الطوارئ.',
      specs: lang === 'en'
        ? ['Loops: 1 to 8 loops support', 'Capacity: Up to 250 devices per loop', 'Display: Backlit color LCD touch interface', 'Battery Backup: 24-hour standby capability']
        : ['الحلقات: دعم من ١ إلى ٨ حلقات', 'السعة: حتى ٢٥٠ جهازاً لكل حلقة', 'الشاشة: شاشة LCD ملونة تعمل باللمس وذات إضاءة خلفية', 'البطارية الاحتياطية: تشغيل لمدة ٢٤ ساعة في وضع الاستعداد'],
      applications: lang === 'en'
        ? ['Medium to large commercial structures', 'Airports', 'Industrial estates', 'University campuses']
        : ['الهياكل التجارية المتوسطة والكبيرة', 'المطارات ومحطات النقل', 'المناطق والمدن الصناعية', 'الحرم الجامعي والمدارس'],
      certifications: ['EN 54 Compliant', 'UL Listed', 'UAE Civil Defense Approved'],
      imagePath: '/products/alarm_panel.png',
      icon: <HelpCircle className="w-5 h-5 text-white" />,
      bgGradient: 'from-amber-500 to-orange-600',
    },
    {
      id: 'det-2',
      name: lang === 'en' ? 'Smoke & Heat Detectors' : 'كواشف الدخان والحرارة',
      category: 'DETECTION',
      shortDesc: lang === 'en' ? 'Photoelectric smoke sensors and rate-of-rise heat sensors.' : 'كواشف الدخان الضوئية وحساسات الحرارة ومعدل الارتفاع.',
      longDesc: lang === 'en'
        ? 'High-sensitivity sensors utilizing optical scattering technologies to identify smoldering fires rapidly. Micro-fine insect screens minimize false alarms.'
        : 'أجهزة استشعار عالية الحساسية تستخدم تقنيات تشتيت الضوء لتحديد الحرائق المشتعلة بسرعة. تقلل شبكات الحشرات الدقيقة من الإنذارات الكاذبة.',
      specs: lang === 'en'
        ? ['Operating Voltage: 15V - 30V DC', 'Detection Method: Photoelectric / Thermal', 'Current Draw: 45µA standby', 'Working Temperature: -10°C to 50°C']
        : ['جهد التشغيل: ١٥ فولت - ٣٠ فولت تيار مستمر', 'طريقة الكشف: ضوئي (Photoelectric) / حراري', 'سحب التيار: ٤٥ ميكرو أمبير في وضع الاستعداد', 'درجة حرارة العمل: -١٠°م إلى ٥٠°م'],
      applications: lang === 'en'
        ? ['Hotel bedrooms', 'Residential apartments', 'Server racks', 'General workspaces']
        : ['غرف الفنادق', 'الشقق السكنية', 'خزائن الخوادم والشبكات', 'مساحات العمل العامة والمكاتب'],
      certifications: ['UL 268', 'EN 54-7 Approved', 'UAE Civil Defense'],
      imagePath: '/products/detector.png',
      icon: <Search className="w-5 h-5 text-white" />,
      bgGradient: 'from-orange-500 to-amber-600',
    },
    {
      id: 'door-1',
      name: lang === 'en' ? 'Fire Rated Steel Doors' : 'أبواب الفولاذ المقاومة للحريق',
      category: 'DOORS',
      shortDesc: lang === 'en' ? 'Certified steel doors with 60 to 180 min fire rating.' : 'أبواب فولاذية معتمدة ومقاومة للنار والحرارة من ٦٠ إلى ١٨٠ دقيقة.',
      longDesc: lang === 'en'
        ? 'Heavy-duty insulated steel doors designed to segment buildings into thermal zones, preventing smoke and heat transfer. Configured with fire-grade panic bars and self-closing hinges.'
        : 'أبواب فولاذية معزولة شديدة التحمل مصممة لتقسيم المباني إلى مناطق حرارية، مما يمنع انتقال الدخان والحرارة. مجهزة بقضبان دفع للهروب السريع ومفصلات ذاتية الإغلاق.',
      specs: lang === 'en'
        ? ['Fire Ratings: 60, 90, 120, 180 minutes', 'Material: Galvanized steel leaf & frame', 'Core: Rockwool or honeycomb insulation', 'Hardware: Heavy-duty hinge, locksets, panic bar']
        : ['معدلات مقاومة الحريق: ٦٠، ٩٠، ١٢٠، ١٨٠ دقيقة', 'المادة: درفة وإطار من الصلب المجلفن', 'الحشو الداخلي: صوف صخري أو عازل خلايا النحل', 'الملحقات: مفصلات شديدة التحمل، أقفال، شريط دفع للهروب'],
      applications: lang === 'en'
        ? ['Stairwells & escape routes', 'Electrical generator rooms', 'Basement exits', 'Factory dividing walls']
        : ['بيت الدرج وممرات الهروب', 'غرف المولدات والمحولات الكهربائية', 'مخارج الطوابق السفلية', 'الجدران الفاصلة للمصانع'],
      certifications: ['Civil Defense Certified', 'BS 476 Part 22 / UL 10C Approved'],
      imagePath: '/products/fire_door.png',
      icon: <Layers className="w-5 h-5 text-white" />,
      bgGradient: 'from-emerald-600 to-teal-700',
    },
    {
      id: 'pas-1',
      name: lang === 'en' ? 'Fire Retardant Paint & Coatings' : 'الطلاءات والدهانات المقاومة للحريق',
      category: 'PASSIVE',
      shortDesc: lang === 'en' ? 'Intumescent coatings for structural steel columns & beams.' : 'دهانات مقاومة للحرارة لتغطية الهياكل المعدنية والأعمدة الفولاذية.',
      longDesc: lang === 'en'
        ? 'Water-based intumescent paint that expands into a thick insulating char layer when exposed to fire heat. Delays core steel failure for up to 120 minutes to prevent structural collapses.'
        : 'طلاء منتفخ مقاوم للحريق ذو أساس مائي يتمدد إلى طبقة تفحم عازلة سميكة عند تعرضه لحرارة النار. يؤخر فشل الفولاذ الهيكلي لمدة تصل إلى ١٢٠ دقيقة لمنع انهيار المنشآت.',
      specs: lang === 'en'
        ? ['Expansion Factor: Up to 50 times dry film thickness', 'Fire resistance: R30, R60, R90, R120', 'VOC Level: Very low, water-based formulation', 'Applicable substrate: Structural carbon steel']
        : ['عامل التمدد: حتى ٥٠ ضعف سمك الفيلم الجاف', 'مقاومة الحريق: R30, R60, R90, R120', 'مستوى المركبات العضوية المتطايرة (VOC): منخفض جداً، أساس مائي', 'الركيزة المعنية: الفولاذ الكربوني الهيكلي'],
      applications: lang === 'en'
        ? ['Warehouse steel frames', 'Exposed architectural columns', 'Oil & gas processing pipes']
        : ['هياكل الصلب للمستودعات', 'الأعمدة المعمارية المكشوفة', 'أنابيب معالجة النفط والغاز'],
      certifications: ['BS 476 Approved', 'Civil Defense Approved'],
      imagePath: '/products/fire_paint.png',
      icon: <Layers className="w-5 h-5 text-white" />,
      bgGradient: 'from-violet-600 to-purple-700',
    },
    {
      id: 'pump-1',
      name: lang === 'en' ? 'Fire Pump Skid Packages' : 'مجموعات مضخات الحريق المتكاملة',
      category: 'PUMPS',
      shortDesc: lang === 'en' ? 'Diesel & electric split-case and end-suction fire pump skids.' : 'مضخات حريق تعمل بالديزل والكهرباء مثبتة على قواعد حديدية.',
      longDesc: lang === 'en'
        ? 'Complete integrated assemblies consisting of electric motor-driven pumps, diesel engine-driven backup pumps, jockey pumps, and automated controller panels. Ensures constant pressure across dry risers and sprinklers.'
        : 'تجميعات متكاملة تتكون من مضخات تعمل بمحركات كهربائية، ومضخات احتياطية تعمل بمحركات ديزل، ومضخات جوكي المساعدة، ولوحات تحكم مؤتمتة بالكامل. تضمن ضغطاً ثابتاً عبر الأنابيب الرطبة والجافة والرشاشات.',
      specs: lang === 'en'
        ? ['Flow Rate: 100 GPM to 3500 GPM', 'Pressure range: 50 PSI to 350 PSI', 'Controllers: NFPA 20 compliant controllers', 'Valves: OS&Y gate valves, check valves included']
        : ['معدل التدفق: من ١٠٠ إلى ٣٥٠٠ جالون في الدقيقة', 'نطاق الضغط: من ٥٠ إلى ٣٥٠ رطل/بوصة مربعة', 'لوحات التحكم: لوحات تحكم متوافقة مع معيار NFPA 20', 'الصمامات: تشمل صمامات بوابة OS&Y وصمامات عدم الرجوع'],
      applications: lang === 'en'
        ? ['Warehouse wet pipelines', 'Industrial factories', 'High-rise residential complexes']
        : ['خطوط المياه الرطبة والجافة للمستودعات', 'المصانع والورش الكبيرة', 'المجمعات السكنية عالية الارتفاع'],
      certifications: ['NFPA 20 Standard', 'UL Listed', 'FM Approved', 'UAE Civil Defense'],
      imagePath: '/products/fire_pump.png',
      icon: <Wind className="w-5 h-5 text-white" />,
      bgGradient: 'from-teal-600 to-emerald-700',
    },
  ];

  const filteredProducts = products.filter((p) => {
    const matchesTab = activeTab === 'ALL' || p.category === activeTab;
    const matchesSearch =
      p.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
      p.shortDesc.toLowerCase().includes(searchQuery.toLowerCase()) ||
      p.longDesc.toLowerCase().includes(searchQuery.toLowerCase());
    return matchesTab && matchesSearch;
  });

  return (
    <section id="products" className="py-24 bg-slate-50 dark:bg-slate-900 transition-colors duration-300">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        {/* Section Header */}
        <div className="space-y-4 max-w-3xl mx-auto mb-16">
          <span className="text-red-600 dark:text-red-500 font-extrabold text-sm uppercase tracking-wider block">
            {t.catalogTag}
          </span>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-slate-900 dark:text-white">
            {t.catalogTitle}
          </h2>
          <p className="text-base text-slate-600 dark:text-slate-400">
            {t.catalogDesc}
          </p>
        </div>

        {/* Filter & Search Bar */}
        <div className="flex flex-col md:flex-row gap-4 items-center justify-between mb-10 border-b border-slate-200 dark:border-slate-800 pb-6">
          {/* Tabs */}
          <div className="flex items-center gap-1.5 flex-wrap justify-center md:justify-start">
            {categories.map((cat) => (
              <button
                key={cat.key}
                onClick={() => setActiveTab(cat.key)}
                className={`px-4 py-2 rounded-lg text-xs sm:text-sm font-bold tracking-wide transition-all cursor-pointer ${
                  activeTab === cat.key
                    ? 'bg-red-600 text-white shadow-md'
                    : 'bg-white dark:bg-slate-800 text-slate-700 dark:text-slate-300 border border-slate-200 dark:border-slate-700/60 hover:bg-slate-100 dark:hover:bg-slate-700'
                }`}
              >
                {cat.label}
              </button>
            ))}
          </div>

          {/* Search Box */}
          <div className="relative w-full md:max-w-xs shrink-0">
            <Search className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-slate-400 rtl:right-3 rtl:left-auto" />
            <input
              type="text"
              placeholder={t.searchPlaceholder}
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="w-full pl-10 pr-4 rtl:pr-10 rtl:pl-4 py-2 rounded-lg bg-white dark:bg-slate-850 text-slate-900 dark:text-white placeholder-slate-400 border border-slate-200 dark:border-slate-800 focus:outline-none focus:ring-2 focus:ring-red-500/50 text-sm font-medium"
            />
          </div>
        </div>

        {/* Product Grid */}
        {filteredProducts.length === 0 ? (
          <div className="py-20 text-center bg-white dark:bg-slate-950/40 rounded-2xl border border-dashed border-slate-200 dark:border-slate-800">
            <HelpCircle className="w-12 h-12 text-slate-300 dark:text-slate-700 mx-auto mb-3" />
            <h3 className="text-lg font-bold text-slate-800 dark:text-slate-200">{t.noProducts}</h3>
            <p className="text-sm text-slate-500 mt-1">{t.tryModifying}</p>
          </div>
        ) : (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {filteredProducts.map((p) => {
              const inCart = cartIds.includes(p.id);
              return (
                <div
                  key={p.id}
                  className="bg-white dark:bg-slate-950/40 border border-slate-200/80 dark:border-slate-800/80 hover:border-red-500/20 dark:hover:border-red-500/30 rounded-2xl overflow-hidden shadow-sm hover:shadow-xl transition-all duration-300 group flex flex-col justify-between"
                >
                  {/* Photo Panel */}
                  <div className="h-56 relative overflow-hidden bg-slate-100 dark:bg-slate-900 border-b border-slate-200 dark:border-slate-800 flex items-center justify-center">
                    <img
                      src={getImageUrl(p.imagePath)}
                      alt={p.name}
                      className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                    />
                    {/* SVG background grid decoration */}
                    <div className="absolute inset-0 opacity-10 bg-[radial-gradient(#000_1px,transparent_1px)] dark:bg-[radial-gradient(#fff_1px,transparent_1px)] [background-size:16px_16px] pointer-events-none" />
                    
                    {/* Small category indicator */}
                    <span className="absolute top-4 left-4 rtl:right-4 rtl:left-auto text-[10px] uppercase font-bold tracking-widest bg-slate-900/85 backdrop-blur-md text-white border border-white/20 px-2 py-0.5 rounded">
                      {p.category}
                    </span>
                  </div>

                  {/* Details */}
                  <div className="p-6 text-left rtl:text-right flex-1 flex flex-col justify-between space-y-4">
                    <div>
                      <h3 className="text-lg font-extrabold text-slate-900 dark:text-white group-hover:text-red-600 dark:group-hover:text-red-500 transition-colors">
                        {p.name}
                      </h3>
                      <p className="text-sm text-slate-500 dark:text-slate-400 mt-2 line-clamp-2 leading-relaxed">
                        {p.shortDesc}
                      </p>
                    </div>

                    {/* Actions */}
                    <div className="flex gap-2 pt-2">
                      <button
                        onClick={() => setSelectedProduct(p)}
                        className="flex items-center justify-center gap-1.5 flex-1 bg-slate-100 hover:bg-slate-200 dark:bg-slate-850 dark:hover:bg-slate-800 text-slate-700 dark:text-slate-250 py-2 px-3 rounded-lg text-xs font-bold transition-colors cursor-pointer"
                      >
                        <Eye className="w-3.5 h-3.5" /> {t.technicalSpecs}
                      </button>
                      <button
                        onClick={() => addToCart(p)}
                        className={`flex items-center justify-center gap-1.5 flex-1 py-2 px-3 rounded-lg text-xs font-bold shadow-sm cursor-pointer transition-all btn-premium ${
                          inCart
                            ? 'bg-emerald-600 hover:bg-emerald-700 text-white'
                            : 'btn-red-premium'
                        }`}
                      >
                        {inCart ? (
                          <>
                            <Check className="w-3.5 h-3.5" /> {t.selected}
                          </>
                        ) : (
                          <>
                            <Plus className="w-3.5 h-3.5" /> {t.addToQuote}
                          </>
                        )}
                      </button>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        )}
      </div>

      {/* Specifications Details Modal */}
      {selectedProduct && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-slate-950/70 backdrop-blur-sm animate-fade-in" dir={lang === 'ar' ? 'rtl' : 'ltr'}>
          <div className="bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 w-full max-w-2xl rounded-2xl overflow-hidden shadow-2xl animate-zoom-in max-h-[90vh] flex flex-col">
            {/* Header */}
            <div className={`p-6 bg-gradient-to-r ${selectedProduct.bgGradient} text-white flex justify-between items-center`}>
              <div className="flex items-center gap-3">
                <div className="p-2 rounded-lg bg-white/10 border border-white/20">
                  {selectedProduct.icon}
                </div>
                <div className="text-left rtl:text-right">
                  <span className="text-[10px] uppercase font-bold tracking-widest bg-white/20 border border-white/20 px-2 py-0.5 rounded">
                    {selectedProduct.category}
                  </span>
                  <h3 className="font-extrabold text-xl mt-1">{selectedProduct.name}</h3>
                </div>
              </div>
              <button
                onClick={() => setSelectedProduct(null)}
                className="text-white/80 hover:text-white hover:bg-white/10 p-2 rounded-lg transition-colors cursor-pointer text-xs font-bold"
              >
                {t.close}
              </button>
            </div>

            {/* Content */}
            <div className="p-6 overflow-y-auto space-y-6 text-left rtl:text-right">
              {/* Product Photo inside Modal */}
              <div className="w-full h-48 rounded-xl overflow-hidden bg-slate-100 dark:bg-slate-950">
                <img
                  src={getImageUrl(selectedProduct.imagePath)}
                  alt={selectedProduct.name}
                  className="w-full h-full object-cover"
                />
              </div>

              <div>
                <h4 className="text-xs uppercase tracking-widest text-slate-400 dark:text-slate-500 font-extrabold mb-1.5">{lang === 'en' ? 'Description' : 'الوصف'}</h4>
                <p className="text-sm text-slate-700 dark:text-slate-350 leading-relaxed font-medium">
                  {selectedProduct.longDesc}
                </p>
              </div>

              {/* Specs Grid */}
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <h4 className="text-xs uppercase tracking-widest text-slate-400 dark:text-slate-500 font-extrabold mb-2.5">{t.specsTitle}</h4>
                  <ul className="space-y-1.5">
                    {selectedProduct.specs.map((spec, i) => (
                      <li key={i} className="text-xs font-semibold text-slate-700 dark:text-slate-300 flex items-start gap-2">
                        <CheckCircle2 className="w-4 h-4 text-red-500 shrink-0 mt-0.5" />
                        <span>{spec}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                <div>
                  <h4 className="text-xs uppercase tracking-widest text-slate-400 dark:text-slate-500 font-extrabold mb-2.5">{t.appsTitle}</h4>
                  <ul className="space-y-1.5">
                    {selectedProduct.applications.map((app, i) => (
                      <li key={i} className="text-xs font-semibold text-slate-700 dark:text-slate-300 flex items-start gap-2">
                        <CheckCircle2 className="w-4 h-4 text-slate-400 dark:text-slate-650 shrink-0 mt-0.5" />
                        <span>{app}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>

              {/* Certification tags */}
              <div className="pt-4 border-t border-slate-105 dark:border-slate-800">
                <h4 className="text-xs uppercase tracking-widest text-slate-400 dark:text-slate-500 font-extrabold mb-2">{t.certsTitle}</h4>
                <div className="flex flex-wrap gap-2">
                  {selectedProduct.certifications.map((cert, i) => (
                    <span key={i} className="inline-flex items-center gap-1 text-[11px] font-bold text-red-650 dark:text-red-400 bg-red-500/5 dark:bg-red-500/10 border border-red-500/20 px-2.5 py-1 rounded-full">
                      <ShieldCheck className="w-3.5 h-3.5" /> {cert}
                    </span>
                  ))}
                </div>
              </div>
            </div>

            {/* Footer */}
            <div className="p-4 bg-slate-50 dark:bg-slate-900 border-t border-slate-100 dark:border-slate-800 flex justify-end gap-3 rtl:flex-row-reverse">
              <button
                onClick={() => setSelectedProduct(null)}
                className="bg-white dark:bg-slate-800 border border-slate-200 dark:border-slate-700 hover:bg-slate-100 dark:hover:bg-slate-700 text-slate-700 dark:text-slate-200 py-2.5 px-5 rounded-xl text-sm font-bold transition-colors cursor-pointer"
              >
                {t.closeBtn}
              </button>
              <button
                onClick={() => {
                  addToCart(selectedProduct);
                  setSelectedProduct(null);
                }}
                className="text-white py-2.5 px-5 rounded-xl text-sm font-extrabold shadow-md transition-all cursor-pointer btn-premium btn-red-premium"
              >
                {cartIds.includes(selectedProduct.id) ? t.removeBtnText : t.addBtnText}
              </button>
            </div>
          </div>
        </div>
      )}
    </section>
  );
};
