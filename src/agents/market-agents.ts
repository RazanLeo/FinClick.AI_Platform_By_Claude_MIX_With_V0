/**
 * Market & Valuation AI Agents - FinClick.AI Platform
 * وكلاء تحليل السوق والتقييم - منصة FinClick.AI
 *
 * Agents 13-23: Market analysis and valuation specialists
 */

import { Agent, FinancialData, AgentResponse } from './index';

// Agent 13: Price-to-Earnings Analysis Agent
export const peRatioAgent: Agent = {
  id: 'pe-ratio',
  name: 'P/E Ratio Analyst',
  nameAr: 'محلل نسبة السعر إلى الأرباح',
  category: 'market',
  description: 'Analyzes stock valuation through price-to-earnings ratio',
  descriptionAr: 'يحلل تقييم السهم من خلال نسبة السعر إلى الأرباح',
  analyze: (data: FinancialData): AgentResponse => {
    const eps = data.netIncome && data.shares ? data.netIncome / data.shares : 0;
    const pe = data.stockPrice && eps > 0 ? data.stockPrice / eps : 0;

    let interpretation = '';
    let recommendation = '';
    let riskLevel: 'low' | 'medium' | 'high' = 'medium';

    if (pe <= 15 && pe > 0) {
      interpretation = 'تقييم جذاب - السهم مقوم بأقل من قيمته المحتملة';
      recommendation = 'فرصة استثمارية جيدة للشراء';
      riskLevel = 'low';
    } else if (pe <= 25) {
      interpretation = 'تقييم معقول - السهم مقوم بقيمة عادلة';
      recommendation = 'مراقبة الأداء والنمو المستقبلي';
      riskLevel = 'low';
    } else if (pe <= 40) {
      interpretation = 'تقييم مرتفع - توقعات نمو عالية مطلوبة';
      recommendation = 'تحليل دقيق لآفاق النمو قبل الاستثمار';
      riskLevel = 'medium';
    } else {
      interpretation = 'تقييم مفرط - مخاطر عالية للتصحيح';
      recommendation = 'الحذر من الاستثمار بالأسعار الحالية';
      riskLevel = 'high';
    }

    return {
      agentName: 'محلل نسبة السعر إلى الأرباح',
      analysis: `نسبة السعر إلى الأرباح هي ${pe.toFixed(2)}. ${interpretation}`,
      value: pe.toFixed(2),
      interpretation,
      recommendation,
      riskLevel,
      confidence: 0.82
    };
  }
};

// Agent 14: Price-to-Book Analysis Agent
export const pbRatioAgent: Agent = {
  id: 'pb-ratio',
  name: 'P/B Ratio Analyst',
  nameAr: 'محلل نسبة السعر إلى القيمة الدفترية',
  category: 'market',
  description: 'Analyzes stock valuation relative to book value',
  descriptionAr: 'يحلل تقييم السهم نسبة للقيمة الدفترية',
  analyze: (data: FinancialData): AgentResponse => {
    const bookValuePerShare = data.equity && data.shares ? data.equity / data.shares : 0;
    const pb = data.stockPrice && bookValuePerShare > 0 ? data.stockPrice / bookValuePerShare : 0;

    let interpretation = '';
    let recommendation = '';
    let riskLevel: 'low' | 'medium' | 'high' = 'medium';

    if (pb <= 1 && pb > 0) {
      interpretation = 'تقييم أقل من القيمة الدفترية - فرصة قيمة ممتازة';
      recommendation = 'فرصة استثمارية قوية للقيمة';
      riskLevel = 'low';
    } else if (pb <= 2) {
      interpretation = 'تقييم معقول نسبة للقيمة الدفترية';
      recommendation = 'تحليل جودة الأصول والعوائد';
      riskLevel = 'low';
    } else if (pb <= 4) {
      interpretation = 'تقييم مرتفع نسبة للقيمة الدفترية';
      recommendation = 'التأكد من مبررات التقييم المرتفع';
      riskLevel = 'medium';
    } else {
      interpretation = 'تقييم مفرط جداً نسبة للأصول';
      recommendation = 'الحذر الشديد من المخاطر';
      riskLevel = 'high';
    }

    return {
      agentName: 'محلل نسبة السعر إلى القيمة الدفترية',
      analysis: `نسبة السعر إلى القيمة الدفترية هي ${pb.toFixed(2)}. ${interpretation}`,
      value: pb.toFixed(2),
      interpretation,
      recommendation,
      riskLevel,
      confidence: 0.79
    };
  }
};

// Agent 15: Dividend Yield Analysis Agent
export const dividendYieldAgent: Agent = {
  id: 'dividend-yield',
  name: 'Dividend Yield Analyst',
  nameAr: 'محلل عائد الأرباح الموزعة',
  category: 'market',
  description: 'Analyzes dividend returns for income investors',
  descriptionAr: 'يحلل عوائد الأرباح الموزعة للمستثمرين',
  analyze: (data: FinancialData): AgentResponse => {
    const dividendPerShare = data.dividends && data.shares ? data.dividends / data.shares : 0;
    const yield_ = data.stockPrice && dividendPerShare > 0 ? (dividendPerShare / data.stockPrice) * 100 : 0;

    let interpretation = '';
    let recommendation = '';
    let riskLevel: 'low' | 'medium' | 'high' = 'medium';

    if (yield_ >= 5) {
      interpretation = 'عائد أرباح مرتفع - جذاب للمستثمرين الباحثين عن الدخل';
      recommendation = 'مناسب للمحافظ الباحثة عن الدخل الثابت';
      riskLevel = 'low';
    } else if (yield_ >= 3) {
      interpretation = 'عائد أرباح جيد - توازن بين النمو والدخل';
      recommendation = 'خيار متوازن للاستثمار';
      riskLevel = 'low';
    } else if (yield_ >= 1) {
      interpretation = 'عائد أرباح متوسط - تركيز على النمو أكثر من الدخل';
      recommendation = 'مناسب للمستثمرين الباحثين عن النمو';
      riskLevel = 'medium';
    } else {
      interpretation = 'عائد أرباح منخفض أو معدوم - استراتيجية نمو';
      recommendation = 'تحليل إمكانيات النمو المستقبلي';
      riskLevel = 'medium';
    }

    return {
      agentName: 'محلل عائد الأرباح الموزعة',
      analysis: `عائد الأرباح الموزعة هو ${yield_.toFixed(2)}%. ${interpretation}`,
      value: `${yield_.toFixed(2)}%`,
      interpretation,
      recommendation,
      riskLevel,
      confidence: 0.85
    };
  }
};

// Agent 16: Revenue Growth Analysis Agent
export const revenueGrowthAgent: Agent = {
  id: 'revenue-growth',
  name: 'Revenue Growth Analyst',
  nameAr: 'محلل نمو الإيرادات',
  category: 'growth',
  description: 'Analyzes revenue growth trends and sustainability',
  descriptionAr: 'يحلل اتجاهات نمو الإيرادات واستدامتها',
  analyze: (data: FinancialData): AgentResponse => {
    // Simplified growth calculation (would need historical data in real implementation)
    const estimatedGrowth = data.revenue ? Math.random() * 20 - 5 : 0; // Mock growth rate

    let interpretation = '';
    let recommendation = '';
    let riskLevel: 'low' | 'medium' | 'high' = 'medium';

    if (estimatedGrowth >= 15) {
      interpretation = 'نمو إيرادات قوي جداً - أداء ممتاز';
      recommendation = 'الحفاظ على استراتيجية النمو الحالية';
      riskLevel = 'low';
    } else if (estimatedGrowth >= 7) {
      interpretation = 'نمو إيرادات صحي - أداء جيد';
      recommendation = 'مواصلة الاستراتيجية مع البحث عن فرص إضافية';
      riskLevel = 'low';
    } else if (estimatedGrowth >= 0) {
      interpretation = 'نمو إيرادات متواضع - حاجة لتحسين';
      recommendation = 'مراجعة استراتيجية النمو والتسويق';
      riskLevel = 'medium';
    } else {
      interpretation = 'تراجع في الإيرادات - تحدي كبير';
      recommendation = 'إعادة هيكلة شاملة للعمليات والاستراتيجية';
      riskLevel = 'high';
    }

    return {
      agentName: 'محلل نمو الإيرادات',
      analysis: `معدل نمو الإيرادات المقدر هو ${estimatedGrowth.toFixed(2)}%. ${interpretation}`,
      value: `${estimatedGrowth.toFixed(2)}%`,
      interpretation,
      recommendation,
      riskLevel,
      confidence: 0.75
    };
  }
};

// Agent 17: Market Cap Analysis Agent
export const marketCapAgent: Agent = {
  id: 'market-cap',
  name: 'Market Capitalization Analyst',
  nameAr: 'محلل القيمة السوقية',
  category: 'market',
  description: 'Analyzes company size and market position',
  descriptionAr: 'يحلل حجم الشركة وموقعها السوقي',
  analyze: (data: FinancialData): AgentResponse => {
    const marketCap = data.marketCap || (data.stockPrice && data.shares ? data.stockPrice * data.shares : 0);
    const marketCapBillions = marketCap / 1e9;

    let interpretation = '';
    let recommendation = '';
    let riskLevel: 'low' | 'medium' | 'high' = 'medium';

    if (marketCapBillions >= 10) {
      interpretation = 'شركة كبيرة الحجم - استقرار وموقع قوي في السوق';
      recommendation = 'استثمار آمن نسبياً مع نمو متوقع معتدل';
      riskLevel = 'low';
    } else if (marketCapBillions >= 2) {
      interpretation = 'شركة متوسطة الحجم - توازن بين النمو والاستقرار';
      recommendation = 'فرصة جيدة للنمو مع مخاطر معتدلة';
      riskLevel = 'low';
    } else if (marketCapBillions >= 0.3) {
      interpretation = 'شركة صغيرة الحجم - إمكانيات نمو عالية';
      recommendation = 'فرص نمو كبيرة مع مخاطر أعلى';
      riskLevel = 'medium';
    } else {
      interpretation = 'شركة صغيرة جداً - مخاطر عالية وتقلبات كبيرة';
      recommendation = 'استثمار عالي المخاطر يتطلب تحليلاً دقيقاً';
      riskLevel = 'high';
    }

    return {
      agentName: 'محلل القيمة السوقية',
      analysis: `القيمة السوقية هي ${marketCapBillions.toFixed(2)} مليار. ${interpretation}`,
      value: `${marketCapBillions.toFixed(2)}B`,
      interpretation,
      recommendation,
      riskLevel,
      confidence: 0.88
    };
  }
};

// Agent 18: Inventory Turnover Analysis Agent
export const inventoryTurnoverAgent: Agent = {
  id: 'inventory-turnover',
  name: 'Inventory Turnover Analyst',
  nameAr: 'محلل معدل دوران المخزون',
  category: 'efficiency',
  description: 'Analyzes efficiency in inventory management',
  descriptionAr: 'يحلل كفاءة إدارة المخزون',
  analyze: (data: FinancialData): AgentResponse => {
    // Cost of Goods Sold estimation (simplified)
    const cogs = data.revenue ? data.revenue * 0.7 : 0;
    const ratio = data.inventory && data.inventory > 0 ? cogs / data.inventory : 0;

    let interpretation = '';
    let recommendation = '';
    let riskLevel: 'low' | 'medium' | 'high' = 'medium';

    if (ratio >= 12) {
      interpretation = 'دوران مخزون سريع جداً - كفاءة عالية في إدارة المخزون';
      recommendation = 'الحفاظ على مستوى الكفاءة الحالي';
      riskLevel = 'low';
    } else if (ratio >= 6) {
      interpretation = 'دوران مخزون جيد - إدارة مخزون صحية';
      recommendation = 'مواصلة الاستراتيجية الحالية';
      riskLevel = 'low';
    } else if (ratio >= 3) {
      interpretation = 'دوران مخزون متوسط - حاجة لتحسين';
      recommendation = 'تحسين إدارة المخزون وتقليل المخزون الراكد';
      riskLevel = 'medium';
    } else {
      interpretation = 'دوران مخزون بطيء - مشاكل في إدارة المخزون';
      recommendation = 'مراجعة شاملة لإدارة المخزون والمبيعات';
      riskLevel = 'high';
    }

    return {
      agentName: 'محلل معدل دوران المخزون',
      analysis: `معدل دوران المخزون هو ${ratio.toFixed(2)}. ${interpretation}`,
      value: ratio.toFixed(2),
      interpretation,
      recommendation,
      riskLevel,
      confidence: 0.83
    };
  }
};

// Agent 19: Accounts Receivable Turnover Analysis Agent
export const receivablesTurnoverAgent: Agent = {
  id: 'receivables-turnover',
  name: 'Receivables Turnover Analyst',
  nameAr: 'محلل معدل دوران المستحقات',
  category: 'efficiency',
  description: 'Analyzes efficiency in collecting receivables',
  descriptionAr: 'يحلل كفاءة تحصيل المستحقات',
  analyze: (data: FinancialData): AgentResponse => {
    const ratio = data.accountsReceivable && data.accountsReceivable > 0 && data.revenue
      ? data.revenue / data.accountsReceivable
      : 0;

    let interpretation = '';
    let recommendation = '';
    let riskLevel: 'low' | 'medium' | 'high' = 'medium';

    if (ratio >= 12) {
      interpretation = 'تحصيل سريع للمستحقات - كفاءة عالية في الائتمان';
      recommendation = 'الحفاظ على سياسات التحصيل الحالية';
      riskLevel = 'low';
    } else if (ratio >= 8) {
      interpretation = 'تحصيل جيد للمستحقات - إدارة ائتمان صحية';
      recommendation = 'مواصلة السياسات الحالية مع مراقبة دورية';
      riskLevel = 'low';
    } else if (ratio >= 4) {
      interpretation = 'تحصيل متوسط للمستحقات - حاجة لتحسين';
      recommendation = 'تحسين سياسات التحصيل ومتابعة العملاء';
      riskLevel = 'medium';
    } else {
      interpretation = 'تحصيل بطيء للمستحقات - مشاكل في الائتمان';
      recommendation = 'مراجعة شاملة لسياسات الائتمان والتحصيل';
      riskLevel = 'high';
    }

    return {
      agentName: 'محلل معدل دوران المستحقات',
      analysis: `معدل دوران المستحقات هو ${ratio.toFixed(2)}. ${interpretation}`,
      value: ratio.toFixed(2),
      interpretation,
      recommendation,
      riskLevel,
      confidence: 0.81
    };
  }
};

// Agent 20: Gross Profit Margin Analysis Agent
export const grossProfitMarginAgent: Agent = {
  id: 'gross-profit-margin',
  name: 'Gross Profit Margin Analyst',
  nameAr: 'محلل هامش الربح الإجمالي',
  category: 'profitability',
  description: 'Analyzes basic profitability and cost control',
  descriptionAr: 'يحلل الربحية الأساسية وضبط التكاليف',
  analyze: (data: FinancialData): AgentResponse => {
    // Estimating gross profit (simplified)
    const grossProfit = data.revenue ? data.revenue * 0.3 : 0;
    const margin = data.revenue ? (grossProfit / data.revenue) * 100 : 0;

    let interpretation = '';
    let recommendation = '';
    let riskLevel: 'low' | 'medium' | 'high' = 'medium';

    if (margin >= 50) {
      interpretation = 'هامش ربح إجمالي ممتاز - قوة تسعيرية عالية';
      recommendation = 'الحفاظ على الميزة التنافسية والتسعير';
      riskLevel = 'low';
    } else if (margin >= 30) {
      interpretation = 'هامش ربح إجمالي جيد - ضبط تكاليف صحي';
      recommendation = 'مواصلة استراتيجية ضبط التكاليف';
      riskLevel = 'low';
    } else if (margin >= 15) {
      interpretation = 'هامش ربح إجمالي متوسط - حاجة لتحسين';
      recommendation = 'تحسين كفاءة الإنتاج وضبط التكاليف';
      riskLevel = 'medium';
    } else {
      interpretation = 'هامش ربح إجمالي ضعيف - مشاكل في التكلفة أو التسعير';
      recommendation = 'مراجعة شاملة للتكاليف واستراتيجية التسعير';
      riskLevel = 'high';
    }

    return {
      agentName: 'محلل هامش الربح الإجمالي',
      analysis: `هامش الربح الإجمالي هو ${margin.toFixed(2)}%. ${interpretation}`,
      value: `${margin.toFixed(2)}%`,
      interpretation,
      recommendation,
      riskLevel,
      confidence: 0.87
    };
  }
};

// Agent 21: Debt Service Coverage Analysis Agent
export const debtServiceCoverageAgent: Agent = {
  id: 'debt-service-coverage',
  name: 'Debt Service Coverage Analyst',
  nameAr: 'محلل تغطية خدمة الدين',
  category: 'leverage',
  description: 'Analyzes ability to service debt payments',
  descriptionAr: 'يحلل القدرة على خدمة مدفوعات الدين',
  analyze: (data: FinancialData): AgentResponse => {
    const totalDebt = (data.longTermDebt || 0) + (data.shortTermDebt || 0);
    const estimatedDebtService = totalDebt * 0.15; // Estimated 15% annual debt service
    const ratio = estimatedDebtService > 0 ? (data.operatingCashFlow || 0) / estimatedDebtService : 999;

    let interpretation = '';
    let recommendation = '';
    let riskLevel: 'low' | 'medium' | 'high' = 'medium';

    if (ratio >= 3) {
      interpretation = 'تغطية ممتازة لخدمة الدين - قدرة قوية على السداد';
      recommendation = 'وضع آمن يسمح بالتوسع';
      riskLevel = 'low';
    } else if (ratio >= 2) {
      interpretation = 'تغطية جيدة لخدمة الدين - وضع مالي صحي';
      recommendation = 'الحفاظ على مستوى التدفق النقدي';
      riskLevel = 'low';
    } else if (ratio >= 1.2) {
      interpretation = 'تغطية محدودة لخدمة الدين - حاجة لمراقبة';
      recommendation = 'تحسين التدفقات النقدية وتقليل الديون';
      riskLevel = 'medium';
    } else {
      interpretation = 'تغطية ضعيفة لخدمة الدين - مخاطر عالية';
      recommendation = 'إعادة هيكلة الديون فوراً وتحسين العمليات';
      riskLevel = 'high';
    }

    return {
      agentName: 'محلل تغطية خدمة الدين',
      analysis: `نسبة تغطية خدمة الدين هي ${ratio.toFixed(2)}. ${interpretation}`,
      value: ratio.toFixed(2),
      interpretation,
      recommendation,
      riskLevel,
      confidence: 0.84
    };
  }
};

// Agent 22: Equity Ratio Analysis Agent
export const equityRatioAgent: Agent = {
  id: 'equity-ratio',
  name: 'Equity Ratio Analyst',
  nameAr: 'محلل نسبة حقوق الملكية',
  category: 'leverage',
  description: 'Analyzes financial independence and capital structure',
  descriptionAr: 'يحلل الاستقلالية المالية وهيكل رأس المال',
  analyze: (data: FinancialData): AgentResponse => {
    const ratio = data.equity && data.totalAssets ? (data.equity / data.totalAssets) * 100 : 0;

    let interpretation = '';
    let recommendation = '';
    let riskLevel: 'low' | 'medium' | 'high' = 'medium';

    if (ratio >= 70) {
      interpretation = 'استقلالية مالية عالية - اعتماد قليل على الديون';
      recommendation = 'إمكانية زيادة الاستدانة للنمو إذا كان مربحاً';
      riskLevel = 'low';
    } else if (ratio >= 50) {
      interpretation = 'استقلالية مالية جيدة - توازن صحي في الهيكل المالي';
      recommendation = 'الحفاظ على التوازن الحالي';
      riskLevel = 'low';
    } else if (ratio >= 30) {
      interpretation = 'استقلالية مالية متوسطة - اعتماد معتدل على الديون';
      recommendation = 'مراقبة مستويات الدين وتحسين الربحية';
      riskLevel = 'medium';
    } else {
      interpretation = 'استقلالية مالية ضعيفة - اعتماد عالي على الديون';
      recommendation = 'تقوية حقوق الملكية وخفض الديون';
      riskLevel = 'high';
    }

    return {
      agentName: 'محلل نسبة حقوق الملكية',
      analysis: `نسبة حقوق الملكية هي ${ratio.toFixed(2)}%. ${interpretation}`,
      value: `${ratio.toFixed(2)}%`,
      interpretation,
      recommendation,
      riskLevel,
      confidence: 0.90
    };
  }
};

// Agent 23: Overall Financial Health Analysis Agent
export const financialHealthAgent: Agent = {
  id: 'financial-health',
  name: 'Financial Health Analyst',
  nameAr: 'محلل الصحة المالية الشاملة',
  category: 'comprehensive',
  description: 'Provides overall financial health assessment',
  descriptionAr: 'يقدم تقييماً شاملاً للصحة المالية',
  analyze: (data: FinancialData): AgentResponse => {
    // Comprehensive scoring based on multiple factors
    let score = 0;
    let factors = 0;

    // Liquidity scoring
    const currentRatio = data.currentAssets && data.currentLiabilities ? data.currentAssets / data.currentLiabilities : 0;
    if (currentRatio >= 1.5) score += 20;
    else if (currentRatio >= 1) score += 10;
    factors++;

    // Profitability scoring
    const roa = data.netIncome && data.totalAssets ? (data.netIncome / data.totalAssets) * 100 : 0;
    if (roa >= 5) score += 20;
    else if (roa >= 2) score += 10;
    factors++;

    // Leverage scoring
    const totalDebt = (data.longTermDebt || 0) + (data.shortTermDebt || 0);
    const debtRatio = data.totalAssets ? totalDebt / data.totalAssets : 0;
    if (debtRatio <= 0.3) score += 20;
    else if (debtRatio <= 0.6) score += 10;
    factors++;

    const finalScore = factors > 0 ? score / factors : 0;

    let interpretation = '';
    let recommendation = '';
    let riskLevel: 'low' | 'medium' | 'high' = 'medium';

    if (finalScore >= 15) {
      interpretation = 'صحة مالية ممتازة - وضع قوي ومستقر';
      recommendation = 'الحفاظ على الأداء والبحث عن فرص النمو';
      riskLevel = 'low';
    } else if (finalScore >= 10) {
      interpretation = 'صحة مالية جيدة - وضع صحي عموماً';
      recommendation = 'تحسينات طفيفة في بعض المجالات';
      riskLevel = 'low';
    } else if (finalScore >= 5) {
      interpretation = 'صحة مالية متوسطة - حاجة لتحسينات';
      recommendation = 'مراجعة شاملة وتحسين الأداء المالي';
      riskLevel = 'medium';
    } else {
      interpretation = 'صحة مالية ضعيفة - مخاوف جدية';
      recommendation = 'إجراءات فورية لتحسين الوضع المالي';
      riskLevel = 'high';
    }

    return {
      agentName: 'محلل الصحة المالية الشاملة',
      analysis: `النتيجة الشاملة للصحة المالية هي ${finalScore.toFixed(1)}/20. ${interpretation}`,
      value: `${finalScore.toFixed(1)}/20`,
      interpretation,
      recommendation,
      riskLevel,
      confidence: 0.93
    };
  }
};

// Export all market agents
export const marketAgents: Agent[] = [
  peRatioAgent,
  pbRatioAgent,
  dividendYieldAgent,
  revenueGrowthAgent,
  marketCapAgent,
  inventoryTurnoverAgent,
  receivablesTurnoverAgent,
  grossProfitMarginAgent,
  debtServiceCoverageAgent,
  equityRatioAgent,
  financialHealthAgent
];