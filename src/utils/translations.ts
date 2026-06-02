export interface TranslationDict {
  // Common / Navbar
  home: string;
  aboutUs: string;
  products: string;
  services: string;
  contact: string;
  getQuote: string;
  civilDefenseApproved: string;
  monFriHours: string;
  locationAjman: string;
  quoteCart: string;
  quoteCartItems: string;
  phone: string;
  email: string;

  // Hero
  heroTag: string;
  heroTitle: string;
  heroTitleRed: string;
  heroDesc: string;
  heroBtnQuote: string;
  heroBtnProducts: string;
  statOnTime: string;
  statQC: string;
  statISO: string;
  statOnTimeDesc: string;
  statQCDesc: string;
  statISODesc: string;
  badge1Title: string;
  badge1Desc: string;
  badge2Title: string;
  badge2Desc: string;
  badge3Title: string;
  badge3Desc: string;

  // TrustStats
  trustStatsTitle: string;
  trustStatsMetricEco: string;
  trustStatsMetricCert: string;
  trustStatsOnTimeDesc: string;
  trustStatsEcoDesc: string;
  trustStatsQCDesc: string;
  trustStatsCertDesc: string;
  trustStatsQC: string;
  trustStatsEco: string;

  // About Us
  aboutTag: string;
  aboutTitle: string;
  aboutDesc1: string;
  aboutDesc2: string;
  segmentOffice: string;
  segmentWarehouse: string;
  segmentResidential: string;
  segmentFireDoors: string;
  highlight1Title: string;
  highlight1Desc: string;
  highlight2Title: string;
  highlight2Desc: string;
  highlight3Title: string;
  highlight3Desc: string;

  // Catalog
  catalogTag: string;
  catalogTitle: string;
  catalogDesc: string;
  searchPlaceholder: string;
  technicalSpecs: string;
  addToQuote: string;
  selected: string;
  close: string;
  specsTitle: string;
  appsTitle: string;
  certsTitle: string;
  closeBtn: string;
  addBtnText: string;
  removeBtnText: string;
  noProducts: string;
  tryModifying: string;

  // Services
  servicesTag: string;
  servicesTitle: string;
  servicesDesc: string;
  installationTitle: string;
  installationDesc: string;
  inspectionTitle: string;
  inspectionDesc: string;
  calibrationTitle: string;
  calibrationDesc: string;
  exitLightsTitle: string;
  exitLightsDesc: string;
  amcTitle: string;
  amcDesc: string;
  defenseHelpTitle: string;
  defenseHelpDesc: string;
  guaranteeTitle: string;
  guaranteeDesc: string;
  workflowStandard: string;
  annualCheckingLogs: string;
  civilDefenseCodes: string;

  // Contact
  contactTag: string;
  contactTitle: string;
  contactDesc: string;
  contactPhoneLabel: string;
  contactEmailLabel: string;
  contactHoursLabel: string;
  contactLocationLabel: string;
  contactFormTitle: string;
  contactFormName: string;
  contactFormEmail: string;
  contactFormPhone: string;
  contactFormSubject: string;
  contactFormMessage: string;
  contactFormDispatch: string;
  contactSuccessTitle: string;
  contactSuccessDesc: string;
  contactSuccessBtn: string;

  // Quote Builder Drawer
  quoteDrawerTitle: string;
  quoteDrawerDesc: string;
  quoteSec1: string;
  quoteSec2: string;
  quoteSec3: string;
  quoteEmptyCart: string;
  quoteInstallLabel: string;
  quoteInstallSub: string;
  quoteMaintenanceLabel: string;
  quoteMaintenanceSub: string;
  quoteInspectionLabel: string;
  quoteInspectionSub: string;
  quoteFormName: string;
  quoteFormCompany: string;
  quoteFormEmail: string;
  quoteFormPhone: string;
  quoteFormSize: string;
  quoteFormMsg: string;
  quoteFormSubmit: string;
  quoteSuccessTitle: string;
  quoteSuccessDesc: string;
  quoteSuccessBtn: string;

  // Footer
  footerDesc: string;
  footerRights: string;
  footerAuthor: string;
}

export const translations: Record<'en' | 'ar', TranslationDict> = {
  en: {
    home: "Home",
    aboutUs: "About Us",
    products: "Products",
    services: "Services",
    contact: "Contact",
    getQuote: "Get A Quote",
    civilDefenseApproved: "UAE Civil Defense Approved",
    monFriHours: "Mon - Fri: 09:00 - 17:00",
    locationAjman: "Ajman, UAE",
    quoteCart: "Quote Request List",
    quoteCartItems: "Items",
    phone: "Phone Call",
    email: "Email Inquiry",

    heroTag: "#1 Fire Safety Supplier in UAE",
    heroTitle: "Protecting What Matters With",
    heroTitleRed: "Uncompromising Quality",
    heroDesc: "ADIGA Fire and Safety Equipment Trading LLC is a premier provider of certified fire fighting equipment, suppression systems, and installation services across the UAE. We secure residential, commercial, and industrial facilities.",
    heroBtnQuote: "Get A Quote",
    heroBtnProducts: "Browse Products",
    statOnTime: "99%",
    statQC: "99%",
    statISO: "ISO",
    statOnTimeDesc: "On-Time Delivery",
    statQCDesc: "QC Passed Rate",
    statISODesc: "9001:2008 Certified",
    badge1Title: "UAE Civil Defense Approved",
    badge1Desc: "Licensed and fully compliant with the official civil defense codes and standards across the UAE.",
    badge2Title: "ISO 9001:2008 Certified",
    badge2Desc: "Recognized globally for strict quality management systems and high-standard labor practices.",
    badge3Title: "The Safety Adviser",
    badge3Desc: "Providing state-of-the-art fire door installations, pump checking, and complete warehouse fire system setup.",

    trustStatsTitle: "Punctual Delivery",
    trustStatsMetricEco: "Eco-Friendly",
    trustStatsMetricCert: "Certified",
    trustStatsOnTimeDesc: "Delivered On Time across the UAE region",
    trustStatsEcoDesc: "Environment friendly processes and testing",
    trustStatsQCDesc: "QC Passed audit checks on all products",
    trustStatsCertDesc: "Full official compliance & certification logs",
    trustStatsQC: "High Standard Labors",
    trustStatsEco: "High Tech Factory",

    aboutTag: "About Our Company",
    aboutTitle: "We Are ADIGA Fire & Safety Equipment Trading LLC",
    aboutDesc1: "At ADIGA, we are committed to providing top-tier fire protection services and certified accessories across the United Arab Emirates. With our comprehensive range of products, we deliver solutions that ensure the absolute safety and security of your property.",
    aboutDesc2: "Whether for residential apartments, complex commercial offices, or large-scale industrial warehouses, our systems are state-of-the-art. We utilize industry-best practices to tailor the exact protection setup you need while satisfying all local fire codes and civil defense rules.",
    segmentOffice: "Commercial Offices",
    segmentWarehouse: "Industrial Warehouses",
    segmentResidential: "Residential Buildings",
    segmentFireDoors: "Specialized Fire Doors",
    highlight1Title: "Safety First Approach",
    highlight1Desc: "All solutions are built around official safety guidelines and Civil Defense regulations.",
    highlight2Title: "Rigorous Quality Audits",
    highlight2Desc: "99% QC Pass rates with ISO 9001:2008 standards mapping for every product batch.",
    highlight3Title: "Tailored B2B Solutions",
    highlight3Desc: "Custom fire pump configurations, retardant coatings, and steel door integrations.",

    catalogTag: "Product Catalog",
    catalogTitle: "State-of-the-Art Fire Safety Equipment",
    catalogDesc: "ADIGA supplies a comprehensive range of certified fire fighting tools, pumps, detectors, doors, and passive coatings designed to comply with local regulations and international standards.",
    searchPlaceholder: "Search products...",
    technicalSpecs: "Technical Specs",
    addToQuote: "Add to Quote",
    selected: "Selected",
    close: "Close",
    specsTitle: "Technical Specs",
    appsTitle: "Typical Applications",
    certsTitle: "Certifications & Standard Compliances",
    closeBtn: "Close Window",
    addBtnText: "Add To Quote Request",
    removeBtnText: "Remove From Quote List",
    noProducts: "No products found",
    tryModifying: "Try modifying your filters or search keywords.",

    servicesTag: "Our Services",
    servicesTitle: "End-to-End Installation & Maintenance",
    servicesDesc: "We do not just supply products—we configure, test, and maintain your setups. ADIGA keeps your fire protection systems intact, fully operational, and ready for any emergency.",
    installationTitle: "Installation & Assembly",
    installationDesc: "Expert layout, piping, plumbing, and integration of fire suppression machinery.",
    inspectionTitle: "Inspection & Annual Testing",
    inspectionDesc: "Run-tests for pumps, checking valve flows, testing pressure, and certifying compliance.",
    calibrationTitle: "Alarms & Sensors Calibration",
    calibrationDesc: "Annual loop checking for addressable alarm configurations and smoke precursors.",
    exitLightsTitle: "Emergency & Exit Lights",
    exitLightsDesc: "Fitting code-compliant signs and rechargeable emergency light backup packs.",
    amcTitle: "Maintenance Contracts (AMC)",
    amcDesc: "Regular scheduled inspections to satisfy legal fire code compliance criteria.",
    defenseHelpTitle: "Civil Defense Approval Help",
    defenseHelpDesc: "Providing signed inspection logs and clearance paperwork for UAE licensing.",
    guaranteeTitle: "How We Guarantee Safety",
    guaranteeDesc: "Every client receives a custom compliance workflow. We track everything through detailed inspection files and official safety records.",
    workflowStandard: "ADIGA Quality Standard",
    annualCheckingLogs: "Annual checking logs",
    civilDefenseCodes: "Civil Defense codes",

    contactTag: "Contact Us",
    contactTitle: "Get in Touch With Our Safety Experts",
    contactDesc: "Have questions about fire codes, sprinkler fittings, or annual maintenance logs? Send us a message or visit our central branch in Ajman.",
    contactPhoneLabel: "Phone Call",
    contactEmailLabel: "Email Inquiry",
    contactHoursLabel: "Office Hours",
    contactLocationLabel: "Our Location",
    contactFormTitle: "Send A Message",
    contactFormName: "Your Name *",
    contactFormEmail: "Email Address *",
    contactFormPhone: "Phone Number *",
    contactFormSubject: "Inquiry Subject",
    contactFormMessage: "Message *",
    contactFormDispatch: "Dispatch Message",
    contactSuccessTitle: "Message Dispatched!",
    contactSuccessDesc: "Our safety experts have received your request and will contact you directly via phone or email in under 2 hours.",
    contactSuccessBtn: "Send another message",

    quoteDrawerTitle: "Request A Quote",
    quoteDrawerDesc: "Submit requirements to our Ajman main office.",
    quoteSec1: "1. Selected Equipment",
    quoteSec2: "2. Select Scope of Services",
    quoteSec3: "3. Business Details",
    quoteEmptyCart: "No products added to quote. You can submit general queries using the form below.",
    quoteInstallLabel: "Installation",
    quoteInstallSub: "Fitting & Setup",
    quoteMaintenanceLabel: "Maintenance",
    quoteMaintenanceSub: "AMC Inspection",
    quoteInspectionLabel: "Inspection",
    quoteInspectionSub: "Civil Defense Cert",
    quoteFormName: "Full Name *",
    quoteFormCompany: "Company Name",
    quoteFormEmail: "Email Address *",
    quoteFormPhone: "Phone Number *",
    quoteFormSize: "Estimated Facility Size (sq. meters)",
    quoteFormMsg: "Specific requirements or details about your warehouse/facility safety layouts...",
    quoteFormSubmit: "Submit Quote Request",
    quoteSuccessTitle: "Quote Request Received!",
    quoteSuccessDesc: "Thank you for choosing ADIGA Fire & Safety. Our technical adviser will review your specifications and contact you shortly within 2 hours.",
    quoteSuccessBtn: "Back to Website",

    footerDesc: "ADIGA Fire & Safety Equipment Trading LLC is a licensed provider of fire fighting equipment, alarm systems, fire doors, and suppression servicing throughout the UAE.",
    footerRights: "Adiga Fire & Safety Equipment Trading. All Rights Reserved.",
    footerAuthor: "Designed by LocalMedia.ae"
  },
  ar: {
    home: "الرئيسية",
    aboutUs: "من نحن",
    products: "المنتجات",
    services: "خدماتنا",
    contact: "اتصل بنا",
    getQuote: "احصل على عرض سعر",
    civilDefenseApproved: "معتمد من الدفاع المدني لدولة الإمارات",
    monFriHours: "الإثنين - الجمعة: 09:00 - 17:00",
    locationAjman: "عجمان، الإمارات العربية المتحدة",
    quoteCart: "قائمة طلب عرض السعر",
    quoteCartItems: "عناصر",
    phone: "اتصال هاتفي",
    email: "استفسار بالبريد",

    heroTag: "موزع معدات مكافحة الحرائق الأول في الإمارات",
    heroTitle: "حماية ما يهم بجودة",
    heroTitleRed: "لا مساومة فيها",
    heroDesc: "شركة أديكا لتجارة معدات الأمن والسلامة ذ.م.م هي موزع ومزود رائد لمعدات مكافحة الحرائق المعتمدة، وأنظمة الإطفاء، وخدمات التركيب في جميع أنحاء الإمارات العربية المتحدة. نقوم بتأمين المنشآت السكنية والتجارية والصناعية.",
    heroBtnQuote: "احصل على عرض سعر",
    heroBtnProducts: "تصفح المنتجات",
    statOnTime: "٩٩٪",
    statQC: "٩٩٪",
    statISO: "آيزو",
    statOnTimeDesc: "التسليم في الوقت المحدد",
    statQCDesc: "معدل نجاح فحص الجودة",
    statISODesc: "معتمد آيزو 9001:2008",
    badge1Title: "معتمد من الدفاع المدني بدولة الإمارات",
    badge1Desc: "مرخص ومتوافق بالكامل مع القوانين والمعايير الرسمية للدفاع المدني في دولة الإمارات.",
    badge2Title: "شهادة آيزو 9001:2008",
    badge2Desc: "معترف بنا عالمياً لتطبيق نظم إدارة الجودة الصارمة وممارسات العمل عالية المعايير.",
    badge3Title: "مستشار السلامة",
    badge3Desc: "توفير تركيبات أبواب الحريق المتطورة، وفحص المضخات، وتجهيز أنظمة مكافحة الحرائق للمستودعات بالكامل.",

    trustStatsTitle: "التسليم الدقيق",
    trustStatsMetricEco: "صديق للبيئة",
    trustStatsMetricCert: "معتمد",
    trustStatsOnTimeDesc: "تسليم في الوقت المحدد بجميع أنحاء دولة الإمارات",
    trustStatsEcoDesc: "عمليات واختبارات صديقة للبيئة ومتوافقة",
    trustStatsQCDesc: "عمليات تدقيق جودة ناجحة لجميع المنتجات",
    trustStatsCertDesc: "سجلات امتثال وشهادات رسمية بالكامل",
    trustStatsQC: "عمالة عالية المستوى",
    trustStatsEco: "مصنع ذو تقنية عالية",

    aboutTag: "عن شركتنا",
    aboutTitle: "نحن شركة أديكا لتجارة معدات الأمن والسلامة ذ.م.م",
    aboutDesc1: "في أديكا، نلتزم بتقديم أفضل خدمات الحماية من الحرائق والملحقات المعتمدة في جميع أنحاء الإمارات العربية المتحدة. من خلال مجموعتنا الشاملة من المنتجات، نقدم حلولاً تضمن السلامة والأمن المطلق لممتلكاتك.",
    aboutDesc2: "سواء للمباني السكنية أو المكاتب التجارية المعقدة أو المستودعات الصناعية واسعة النطاق، فإن أنظمتنا متطورة وحديثة. نستخدم أفضل ممارسات الصناعة لتصميم حل الحماية الدقيق الذي تحتاجه مع تلبية جميع قوانين مكافحة الحرائق والدفاع المدني المحلية.",
    segmentOffice: "المكاتب التجارية",
    segmentWarehouse: "المستودعات الصناعية",
    segmentResidential: "المباني السكنية",
    segmentFireDoors: "أبواب حريق متخصصة",
    highlight1Title: "منهج السلامة أولاً",
    highlight1Desc: "يتم بناء جميع الحلول حول إرشادات السلامة الرسمية ولوائح الدفاع المدني.",
    highlight2Title: "تدقيق صارم للجودة",
    highlight2Desc: "معدلات نجاح فحص الجودة 99% مع مطابقة معايير آيزو 9001:2008 لكل دفعة منتجات.",
    highlight3Title: "حلول مخصصة للشركات",
    highlight3Desc: "تجهيزات مخصصة لمضخات الحريق، والطلاءات المقاومة للهب، وتركيبات أبواب الصلب المقاومة للحريق.",

    catalogTag: "كتالوج المنتجات",
    catalogTitle: "أحدث معدات وأدوات السلامة من الحرائق",
    catalogDesc: "توفر أديكا مجموعة شاملة من أدوات مكافحة الحرائق المعتمدة والمضخات وأجهزة الكشف وأبواب الحريق والطلاءات السلبية المصممة للتوافق مع اللوائح المحلية والمعايير الدولية.",
    searchPlaceholder: "ابحث عن المنتجات...",
    technicalSpecs: "المواصفات الفنية",
    addToQuote: "أضف لطلب السعر",
    selected: "محدد",
    close: "إغلاق",
    specsTitle: "المواصفات التقنية",
    appsTitle: "التطبيقات النموذجية",
    certsTitle: "الشهادات والامتثال للمعايير",
    closeBtn: "إغلاق النافذة",
    addBtnText: "إضافة لطلب السعر",
    removeBtnText: "إزالة من قائمة طلب السعر",
    noProducts: "لم يتم العثور على منتجات",
    tryModifying: "حاول تعديل خيارات الفلترة أو كلمات البحث.",

    servicesTag: "خدماتنا",
    servicesTitle: "التركيب والصيانة الشاملة من البداية للنهاية",
    servicesDesc: "نحن لا نكتفي بتوريد المنتجات فحسب، بل نقوم بتركيبها واختبارها وصيانتها. تحافظ أديكا على جاهزية أنظمة الحماية من الحرائق وتضمن تشغيلها الأمثل لحالات الطوارئ.",
    installationTitle: "التركيب والتجميع",
    installationDesc: "تخطيط احترافي وتمديد الأنابيب ودمج آلات وأنظمة إطفاء الحرائق.",
    inspectionTitle: "الفحص والاختبار السنوي",
    inspectionDesc: "اختبار تشغيل المضخات وفحص تدفق الصمامات واختبار الضغط وإصدار شهادات الامتثال.",
    calibrationTitle: "معايرة أجهزة الإنذار والاستشعار",
    calibrationDesc: "فحص سنوي للوحات الإنذار القابلة للعنونة وكواشف الدخان والحرارة.",
    exitLightsTitle: "إضاءة الطوارئ والمخارج",
    exitLightsDesc: "تركيب علامات المخارج المتوافقة مع الكود وحزم بطاريات إضاءة الطوارئ القابلة لإعادة الشحن.",
    amcTitle: "عقود الصيانة السنوية (AMC)",
    amcDesc: "عمليات تفتيش دورية مجدولة لتلبية معايير وقوانين الدفاع المدني والامتثال القانوني.",
    defenseHelpTitle: "المساعدة في اعتمادات الدفاع المدني",
    defenseHelpDesc: "توفير سجلات الفحص الموقعة وأوراق التخليص والشهادات اللازمة لترخيص المنشآت في الإمارات.",
    guaranteeTitle: "كيف نضمن السلامة",
    guaranteeDesc: "يحصل كل عميل على خطة امتثال مخصصة. نتتبع كل شيء من خلال سجلات تفتيش مفصلة وتقارير جودة رسمية.",
    workflowStandard: "معيار الجودة لدى أديكا",
    annualCheckingLogs: "سجلات الفحص السنوية",
    civilDefenseCodes: "لوائح الدفاع المدني",

    contactTag: "اتصل بنا",
    contactTitle: "تواصل مع خبراء السلامة لدينا",
    contactDesc: "هل لديك أسئلة حول رموز الحريق، أو تركيبات الرشاشات، أو سجلات الصيانة السنوية؟ أرسل لنا رسالة أو تفضل بزيارة فرعنا الرئيسي في عجمان.",
    contactPhoneLabel: "اتصال هاتفي",
    contactEmailLabel: "استفسار بالبريد",
    contactHoursLabel: "ساعات العمل",
    contactLocationLabel: "موقعنا",
    contactFormTitle: "أرسل رسالة",
    contactFormName: "الاسم الكامل *",
    contactFormEmail: "البريد الإلكتروني *",
    contactFormPhone: "رقم الهاتف *",
    contactFormSubject: "موضوع الاستفسار",
    contactFormMessage: "الرسالة *",
    contactFormDispatch: "إرسال الرسالة",
    contactSuccessTitle: "تم إرسال الرسالة!",
    contactSuccessDesc: "تلقى خبراء السلامة لدينا طلبك وسيتصلون بك مباشرة عبر الهاتف أو البريد الإلكتروني في غضون ساعتين.",
    contactSuccessBtn: "إرسال رسالة أخرى",

    quoteDrawerTitle: "طلب عرض سعر",
    quoteDrawerDesc: "أرسل متطلباتك إلى مكتبنا الرئيسي في عجمان.",
    quoteSec1: "١. المعدات المحددة",
    quoteSec2: "٢. حدد نطاق الخدمات",
    quoteSec3: "٣. تفاصيل العمل والاتصال",
    quoteEmptyCart: "لم يتم إضافة منتجات لطلب السعر. يمكنك إرسال استفسار عام باستخدام النموذج أدناه.",
    quoteInstallLabel: "التركيب",
    quoteInstallSub: "التجهيز والتركيب",
    quoteMaintenanceLabel: "الصيانة",
    quoteMaintenanceSub: "عقود الصيانة AMC",
    quoteInspectionLabel: "الفحص والتفتيش",
    quoteInspectionSub: "اعتماد الدفاع المدني",
    quoteFormName: "الاسم الكامل *",
    quoteFormCompany: "اسم الشركة",
    quoteFormEmail: "البريد الإلكتروني *",
    quoteFormPhone: "رقم الهاتف *",
    quoteFormSize: "المساحة التقريبية للمنشأة (متر مربع)",
    quoteFormMsg: "متطلبات محددة أو تفاصيل حول مستودعك أو مخططات سلامة المنشأة...",
    quoteFormSubmit: "تقديم طلب عرض السعر",
    quoteSuccessTitle: "تم استلام طلب السعر!",
    quoteSuccessDesc: "نشكرك على اختيار أديكا للسلامة والحرائق. سيقوم مستشارنا الفني بمراجعة متطلباتك والاتصال بك في غضون ساعتين.",
    quoteSuccessBtn: "العودة للموقع",

    footerDesc: "شركة أديكا لتجارة معدات الأمن والسلامة ذ.م.م هي مزود مرخص وموثوق لمعدات مكافحة الحرائق، وأنظمة الإنذار، وأبواب الحريق، وخدمات الصيانة المعتمدة في جميع أنحاء الإمارات.",
    footerRights: "أديكا لتجارة معدات الأمن والسلامة. جميع الحقوق محفوظة.",
    footerAuthor: "تصميم LocalMedia.ae"
  }
};
