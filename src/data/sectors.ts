// Sectors and Activities Data for FinClick.AI

export interface Activity {
  id: string;
  name: string;
  nameEn: string;
  description?: string;
}

export interface Sector {
  id: string;
  name: string;
  nameEn: string;
  icon?: string;
  activities: Activity[];
}

export const sectors: Sector[] = [
  {
    id: 'banking',
    name: 'المصارف والخدمات المصرفية',
    nameEn: 'Banking and Financial Services',
    activities: [
      { id: 'commercial-banking', name: 'المصارف التجارية', nameEn: 'Commercial Banking' },
      { id: 'investment-banking', name: 'المصارف الاستثمارية', nameEn: 'Investment Banking' },
      { id: 'islamic-banking', name: 'المصارف الإسلامية', nameEn: 'Islamic Banking' },
      { id: 'retail-banking', name: 'المصارف التجزئة', nameEn: 'Retail Banking' },
      { id: 'corporate-banking', name: 'الخدمات المصرفية للشركات', nameEn: 'Corporate Banking' },
      { id: 'private-banking', name: 'الخدمات المصرفية الخاصة', nameEn: 'Private Banking' },
    ]
  },
  {
    id: 'insurance',
    name: 'التأمين',
    nameEn: 'Insurance',
    activities: [
      { id: 'life-insurance', name: 'تأمين الحياة', nameEn: 'Life Insurance' },
      { id: 'health-insurance', name: 'التأمين الصحي', nameEn: 'Health Insurance' },
      { id: 'property-insurance', name: 'تأمين الممتلكات', nameEn: 'Property Insurance' },
      { id: 'auto-insurance', name: 'تأمين السيارات', nameEn: 'Auto Insurance' },
      { id: 'marine-insurance', name: 'التأمين البحري', nameEn: 'Marine Insurance' },
      { id: 'reinsurance', name: 'إعادة التأمين', nameEn: 'Reinsurance' },
    ]
  },
  {
    id: 'real-estate',
    name: 'العقارات والتطوير العقاري',
    nameEn: 'Real Estate and Development',
    activities: [
      { id: 'residential-development', name: 'التطوير السكني', nameEn: 'Residential Development' },
      { id: 'commercial-development', name: 'التطوير التجاري', nameEn: 'Commercial Development' },
      { id: 'industrial-development', name: 'التطوير الصناعي', nameEn: 'Industrial Development' },
      { id: 'property-management', name: 'إدارة الممتلكات', nameEn: 'Property Management' },
      { id: 'real-estate-investment', name: 'الاستثمار العقاري', nameEn: 'Real Estate Investment' },
      { id: 'property-brokerage', name: 'الوساطة العقارية', nameEn: 'Property Brokerage' },
    ]
  },
  {
    id: 'telecommunications',
    name: 'الاتصالات وتقنية المعلومات',
    nameEn: 'Telecommunications and IT',
    activities: [
      { id: 'mobile-services', name: 'خدمات الهاتف المحمول', nameEn: 'Mobile Services' },
      { id: 'fixed-line-services', name: 'خدمات الخطوط الثابتة', nameEn: 'Fixed Line Services' },
      { id: 'internet-services', name: 'خدمات الإنترنت', nameEn: 'Internet Services' },
      { id: 'data-services', name: 'خدمات البيانات', nameEn: 'Data Services' },
      { id: 'it-services', name: 'خدمات تقنية المعلومات', nameEn: 'IT Services' },
      { id: 'software-development', name: 'تطوير البرمجيات', nameEn: 'Software Development' },
    ]
  },
  {
    id: 'energy',
    name: 'الطاقة والمرافق',
    nameEn: 'Energy and Utilities',
    activities: [
      { id: 'oil-gas-exploration', name: 'استكشاف النفط والغاز', nameEn: 'Oil & Gas Exploration' },
      { id: 'oil-refining', name: 'تكرير النفط', nameEn: 'Oil Refining' },
      { id: 'petrochemicals', name: 'البتروكيماويات', nameEn: 'Petrochemicals' },
      { id: 'electricity-generation', name: 'توليد الكهرباء', nameEn: 'Electricity Generation' },
      { id: 'renewable-energy', name: 'الطاقة المتجددة', nameEn: 'Renewable Energy' },
      { id: 'water-utilities', name: 'مرافق المياه', nameEn: 'Water Utilities' },
    ]
  },
  {
    id: 'healthcare',
    name: 'الرعاية الصحية والأدوية',
    nameEn: 'Healthcare and Pharmaceuticals',
    activities: [
      { id: 'hospitals', name: 'المستشفيات', nameEn: 'Hospitals' },
      { id: 'medical-centers', name: 'المراكز الطبية', nameEn: 'Medical Centers' },
      { id: 'pharmaceutical-manufacturing', name: 'صناعة الأدوية', nameEn: 'Pharmaceutical Manufacturing' },
      { id: 'medical-equipment', name: 'المعدات الطبية', nameEn: 'Medical Equipment' },
      { id: 'healthcare-services', name: 'الخدمات الصحية', nameEn: 'Healthcare Services' },
      { id: 'biotechnology', name: 'التقنية الحيوية', nameEn: 'Biotechnology' },
    ]
  },
  {
    id: 'manufacturing',
    name: 'الصناعات التحويلية',
    nameEn: 'Manufacturing',
    activities: [
      { id: 'food-beverage', name: 'الأغذية والمشروبات', nameEn: 'Food & Beverages' },
      { id: 'textiles', name: 'النسيج والملابس', nameEn: 'Textiles & Apparel' },
      { id: 'chemicals', name: 'الكيماويات', nameEn: 'Chemicals' },
      { id: 'metals', name: 'المعادن والحديد', nameEn: 'Metals & Steel' },
      { id: 'construction-materials', name: 'مواد البناء', nameEn: 'Construction Materials' },
      { id: 'automotive', name: 'صناعة السيارات', nameEn: 'Automotive' },
    ]
  },
  {
    id: 'retail',
    name: 'التجارة والتجزئة',
    nameEn: 'Retail and Trade',
    activities: [
      { id: 'supermarkets', name: 'السوبرماركت', nameEn: 'Supermarkets' },
      { id: 'fashion-retail', name: 'تجارة الأزياء', nameEn: 'Fashion Retail' },
      { id: 'electronics-retail', name: 'تجارة الإلكترونيات', nameEn: 'Electronics Retail' },
      { id: 'automotive-retail', name: 'تجارة السيارات', nameEn: 'Automotive Retail' },
      { id: 'wholesale-trade', name: 'التجارة بالجملة', nameEn: 'Wholesale Trade' },
      { id: 'ecommerce', name: 'التجارة الإلكترونية', nameEn: 'E-commerce' },
    ]
  },
  {
    id: 'transportation',
    name: 'النقل واللوجستيات',
    nameEn: 'Transportation and Logistics',
    activities: [
      { id: 'airlines', name: 'شركات الطيران', nameEn: 'Airlines' },
      { id: 'shipping', name: 'النقل البحري', nameEn: 'Shipping' },
      { id: 'land-transport', name: 'النقل البري', nameEn: 'Land Transport' },
      { id: 'logistics-services', name: 'خدمات اللوجستيات', nameEn: 'Logistics Services' },
      { id: 'ports', name: 'الموانئ', nameEn: 'Ports' },
      { id: 'warehousing', name: 'التخزين', nameEn: 'Warehousing' },
    ]
  },
  {
    id: 'agriculture',
    name: 'الزراعة والثروة الحيوانية',
    nameEn: 'Agriculture and Livestock',
    activities: [
      { id: 'crop-production', name: 'إنتاج المحاصيل', nameEn: 'Crop Production' },
      { id: 'livestock', name: 'الثروة الحيوانية', nameEn: 'Livestock' },
      { id: 'dairy', name: 'منتجات الألبان', nameEn: 'Dairy Products' },
      { id: 'poultry', name: 'الدواجن', nameEn: 'Poultry' },
      { id: 'fisheries', name: 'الثروة السمكية', nameEn: 'Fisheries' },
      { id: 'agricultural-equipment', name: 'المعدات الزراعية', nameEn: 'Agricultural Equipment' },
    ]
  },
  {
    id: 'construction',
    name: 'المقاولات والإنشاءات',
    nameEn: 'Construction and Contracting',
    activities: [
      { id: 'general-construction', name: 'المقاولات العامة', nameEn: 'General Construction' },
      { id: 'infrastructure', name: 'البنية التحتية', nameEn: 'Infrastructure' },
      { id: 'residential-construction', name: 'الإنشاءات السكنية', nameEn: 'Residential Construction' },
      { id: 'commercial-construction', name: 'الإنشاءات التجارية', nameEn: 'Commercial Construction' },
      { id: 'engineering-services', name: 'الخدمات الهندسية', nameEn: 'Engineering Services' },
      { id: 'specialized-construction', name: 'المقاولات المتخصصة', nameEn: 'Specialized Construction' },
    ]
  },
  {
    id: 'education',
    name: 'التعليم والتدريب',
    nameEn: 'Education and Training',
    activities: [
      { id: 'higher-education', name: 'التعليم العالي', nameEn: 'Higher Education' },
      { id: 'vocational-training', name: 'التدريب المهني', nameEn: 'Vocational Training' },
      { id: 'private-schools', name: 'المدارس الخاصة', nameEn: 'Private Schools' },
      { id: 'online-education', name: 'التعليم الإلكتروني', nameEn: 'Online Education' },
      { id: 'educational-services', name: 'الخدمات التعليمية', nameEn: 'Educational Services' },
      { id: 'research-development', name: 'البحث والتطوير', nameEn: 'Research & Development' },
    ]
  },
  {
    id: 'hospitality',
    name: 'الضيافة والسياحة',
    nameEn: 'Hospitality and Tourism',
    activities: [
      { id: 'hotels', name: 'الفنادق', nameEn: 'Hotels' },
      { id: 'restaurants', name: 'المطاعم', nameEn: 'Restaurants' },
      { id: 'travel-agencies', name: 'وكالات السفر', nameEn: 'Travel Agencies' },
      { id: 'tourism-services', name: 'الخدمات السياحية', nameEn: 'Tourism Services' },
      { id: 'event-management', name: 'إدارة الفعاليات', nameEn: 'Event Management' },
      { id: 'entertainment', name: 'الترفيه', nameEn: 'Entertainment' },
    ]
  },
  {
    id: 'media',
    name: 'الإعلام والاتصالات',
    nameEn: 'Media and Communications',
    activities: [
      { id: 'television', name: 'التلفزيون', nameEn: 'Television' },
      { id: 'radio', name: 'الراديو', nameEn: 'Radio' },
      { id: 'publishing', name: 'النشر', nameEn: 'Publishing' },
      { id: 'advertising', name: 'الإعلان', nameEn: 'Advertising' },
      { id: 'digital-media', name: 'الإعلام الرقمي', nameEn: 'Digital Media' },
      { id: 'public-relations', name: 'العلاقات العامة', nameEn: 'Public Relations' },
    ]
  },
  {
    id: 'mining',
    name: 'التعدين والمعادن',
    nameEn: 'Mining and Minerals',
    activities: [
      { id: 'gold-mining', name: 'تعدين الذهب', nameEn: 'Gold Mining' },
      { id: 'phosphate-mining', name: 'تعدين الفوسفات', nameEn: 'Phosphate Mining' },
      { id: 'copper-mining', name: 'تعدين النحاس', nameEn: 'Copper Mining' },
      { id: 'iron-ore', name: 'خام الحديد', nameEn: 'Iron Ore' },
      { id: 'industrial-minerals', name: 'المعادن الصناعية', nameEn: 'Industrial Minerals' },
      { id: 'precious-metals', name: 'المعادن الثمينة', nameEn: 'Precious Metals' },
    ]
  }
];

export const entityTypes = [
  { id: 'public-company', name: 'شركة مساهمة عامة', nameEn: 'Public Company' },
  { id: 'private-company', name: 'شركة مساهمة مقفلة', nameEn: 'Private Company' },
  { id: 'llc', name: 'شركة ذات مسؤولية محدودة', nameEn: 'Limited Liability Company' },
  { id: 'partnership', name: 'شركة تضامن', nameEn: 'Partnership' },
  { id: 'sole-proprietorship', name: 'مؤسسة فردية', nameEn: 'Sole Proprietorship' },
  { id: 'branch', name: 'فرع شركة أجنبية', nameEn: 'Foreign Company Branch' },
  { id: 'holding-company', name: 'شركة قابضة', nameEn: 'Holding Company' },
  { id: 'investment-fund', name: 'صندوق استثماري', nameEn: 'Investment Fund' },
  { id: 'reit', name: 'صندوق استثمار عقاري', nameEn: 'Real Estate Investment Trust' },
  { id: 'cooperative', name: 'جمعية تعاونية', nameEn: 'Cooperative Society' },
  { id: 'government-entity', name: 'جهة حكومية', nameEn: 'Government Entity' },
  { id: 'non-profit', name: 'مؤسسة غير ربحية', nameEn: 'Non-Profit Organization' },
];

export const comparisonTypes = [
  { id: 'industry', name: 'مقارنة بمتوسط الصناعة', nameEn: 'Industry Average Comparison' },
  { id: 'competitors', name: 'مقارنة بالمنافسين المباشرين', nameEn: 'Direct Competitors Comparison' },
  { id: 'size-peers', name: 'مقارنة بالشركات المماثلة في الحجم', nameEn: 'Size Peers Comparison' },
  { id: 'regional', name: 'مقارنة إقليمية', nameEn: 'Regional Comparison' },
  { id: 'global', name: 'مقارنة عالمية', nameEn: 'Global Comparison' },
  { id: 'historical', name: 'مقارنة تاريخية', nameEn: 'Historical Comparison' },
  { id: 'best-in-class', name: 'مقارنة بأفضل الممارسات', nameEn: 'Best-in-Class Comparison' },
  { id: 'market-leaders', name: 'مقارنة بقادة السوق', nameEn: 'Market Leaders Comparison' },
];

export const analysisTypes = [
  { id: 'comprehensive', name: 'تحليل شامل (180 نوع)', nameEn: 'Comprehensive Analysis (180 types)' },
  { id: 'basic', name: 'التحليل الأساسي (50 نوع)', nameEn: 'Basic Analysis (50 types)' },
  { id: 'financial-ratios', name: 'النسب المالية فقط (75 نوع)', nameEn: 'Financial Ratios Only (75 types)' },
  { id: 'risk-analysis', name: 'تحليل المخاطر (25 نوع)', nameEn: 'Risk Analysis (25 types)' },
  { id: 'valuation', name: 'تحليل التقييم (13 نوع)', nameEn: 'Valuation Analysis (13 types)' },
  { id: 'cash-flow', name: 'تحليل التدفق النقدي (18 نوع)', nameEn: 'Cash Flow Analysis (18 types)' },
  { id: 'performance', name: 'تحليل الأداء (21 نوع)', nameEn: 'Performance Analysis (21 types)' },
  { id: 'statistical', name: 'التحليل الإحصائي (16 نوع)', nameEn: 'Statistical Analysis (16 types)' },
  { id: 'predictive', name: 'التحليل التنبؤي (10 نوع)', nameEn: 'Predictive Analysis (10 types)' },
  { id: 'custom', name: 'تحليل مخصص', nameEn: 'Custom Analysis' },
];

export const reportFormats = [
  { id: 'pdf', name: 'PDF تقرير', nameEn: 'PDF Report', icon: '📄' },
  { id: 'word', name: 'Word مستند', nameEn: 'Word Document', icon: '📝' },
  { id: 'excel', name: 'Excel جدول بيانات', nameEn: 'Excel Spreadsheet', icon: '📊' },
  { id: 'powerpoint', name: 'PowerPoint عرض تقديمي', nameEn: 'PowerPoint Presentation', icon: '📈' },
  { id: 'interactive', name: 'تقرير تفاعلي', nameEn: 'Interactive Report', icon: '🌐' },
  { id: 'dashboard', name: 'لوحة معلومات', nameEn: 'Dashboard', icon: '📱' },
];

// Helper functions
export const getSectorById = (sectorId: string): Sector | undefined => {
  return sectors.find(sector => sector.id === sectorId);
};

export const getActivitiesBySector = (sectorId: string): Activity[] => {
  const sector = getSectorById(sectorId);
  return sector ? sector.activities : [];
};

export const getActivityById = (sectorId: string, activityId: string): Activity | undefined => {
  const activities = getActivitiesBySector(sectorId);
  return activities.find(activity => activity.id === activityId);
};

export const getAllActivities = (): Activity[] => {
  return sectors.reduce((allActivities, sector) => {
    return [...allActivities, ...sector.activities];
  }, [] as Activity[]);
};

export const searchSectors = (query: string): Sector[] => {
  const lowerQuery = query.toLowerCase();
  return sectors.filter(sector =>
    sector.name.toLowerCase().includes(lowerQuery) ||
    sector.nameEn.toLowerCase().includes(lowerQuery)
  );
};

export const searchActivities = (query: string, sectorId?: string): Activity[] => {
  const lowerQuery = query.toLowerCase();
  const activitiesToSearch = sectorId ? getActivitiesBySector(sectorId) : getAllActivities();

  return activitiesToSearch.filter(activity =>
    activity.name.toLowerCase().includes(lowerQuery) ||
    activity.nameEn.toLowerCase().includes(lowerQuery)
  );
};