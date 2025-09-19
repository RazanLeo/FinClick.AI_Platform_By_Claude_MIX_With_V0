/**
 * Additional AI Agents - FinClick.AI Platform
 * الوكلاء الذكية الإضافية - منصة FinClick.AI
 *
 * Agents 6-23: Additional specialized financial analysis agents
 */

import { Agent, FinancialData, AgentResponse } from './index';

// Agent 6: Debt-to-Equity Analysis Agent
export const debtToEquityAgent: Agent = {
  id: 'debt-to-equity',
  name: 'Debt-to-Equity Analyst',
  nameAr: 'محلل نسبة الدين إلى حقوق الملكية',
  category: 'leverage',
  description: 'Analyzes financial leverage and debt structure',
  descriptionAr: 'يحلل الرافعة المالية وهيكل المديونية',
  analyze: (data: FinancialData): AgentResponse => {
    const totalDebt = (data.longTermDebt || 0) + (data.shortTermDebt || 0);
    const ratio = data.equity && totalDebt ? totalDebt / data.equity : 0;

    let interpretation = '';
    let recommendation = '';
    let riskLevel: 'low' | 'medium' | 'high' = 'medium';

    if (ratio <= 0.3) {
      interpretation = 'مديونية منخفضة - هيكل مالي محافظ وآمن';
      recommendation = 'إمكانية زيادة الاستدانة للتوسع إذا توفرت فرص مربحة';
      riskLevel = 'low';
    } else if (ratio <= 0.6) {
      interpretation = 'مديونية معتدلة - توازن جيد بين الدين وحقوق الملكية';
      recommendation = 'مراقبة مستويات الدين وضمان قدرة خدمة الدين';
      riskLevel = 'low';
    } else if (ratio <= 1.0) {
      interpretation = 'مديونية مرتفعة - حاجة لمراقبة دقيقة';
      recommendation = 'تقليل المديونية تدريجياً وتحسين التدفقات النقدية';
      riskLevel = 'medium';
    } else {
      interpretation = 'مديونية مفرطة - مخاطر مالية عالية';
      recommendation = 'خفض المديونية فوراً وإعادة هيكلة الديون';
      riskLevel = 'high';
    }

    return {
      agentName: 'محلل نسبة الدين إلى حقوق الملكية',
      analysis: `نسبة الدين إلى حقوق الملكية هي ${ratio.toFixed(2)}. ${interpretation}`,
      value: ratio.toFixed(2),
      interpretation,
      recommendation,
      riskLevel,
      confidence: 0.89
    };
  }
};

// Agent 7: Asset Turnover Analysis Agent
export const assetTurnoverAgent: Agent = {
  id: 'asset-turnover',
  name: 'Asset Turnover Analyst',
  nameAr: 'محلل معدل دوران الأصول',
  category: 'efficiency',
  description: 'Analyzes efficiency in using assets to generate revenue',
  descriptionAr: 'يحلل كفاءة استخدام الأصول في توليد الإيرادات',
  analyze: (data: FinancialData): AgentResponse => {
    const ratio = data.revenue && data.totalAssets ? data.revenue / data.totalAssets : 0;

    let interpretation = '';
    let recommendation = '';
    let riskLevel: 'low' | 'medium' | 'high' = 'medium';

    if (ratio >= 1.5) {
      interpretation = 'كفاءة عالية في استخدام الأصول لتوليد الإيرادات';
      recommendation = 'الحفاظ على الكفاءة الحالية والتوسع المدروس';
      riskLevel = 'low';
    } else if (ratio >= 1.0) {
      interpretation = 'كفاءة جيدة في استخدام الأصول';
      recommendation = 'البحث عن فرص لتحسين كفاءة الأصول';
      riskLevel = 'low';
    } else if (ratio >= 0.5) {
      interpretation = 'كفاءة متوسطة - حاجة لتحسين';
      recommendation = 'مراجعة استراتيجية إدارة الأصول وتحسين العمليات';
      riskLevel = 'medium';
    } else {
      interpretation = 'كفاءة منخفضة في استخدام الأصول';
      recommendation = 'إعادة هيكلة الأصول وتحسين العمليات التشغيلية';
      riskLevel = 'high';
    }

    return {
      agentName: 'محلل معدل دوران الأصول',
      analysis: `معدل دوران الأصول هو ${ratio.toFixed(2)}. ${interpretation}`,
      value: ratio.toFixed(2),
      interpretation,
      recommendation,
      riskLevel,
      confidence: 0.85
    };
  }
};

// Agent 8: Net Profit Margin Analysis Agent
export const netProfitMarginAgent: Agent = {
  id: 'net-profit-margin',
  name: 'Net Profit Margin Analyst',
  nameAr: 'محلل هامش الربح الصافي',
  category: 'profitability',
  description: 'Analyzes the percentage of revenue that becomes profit',
  descriptionAr: 'يحلل نسبة الإيرادات التي تتحول إلى أرباح',
  analyze: (data: FinancialData): AgentResponse => {
    const margin = data.netIncome && data.revenue
      ? (data.netIncome / data.revenue) * 100
      : 0;

    let interpretation = '';
    let recommendation = '';
    let riskLevel: 'low' | 'medium' | 'high' = 'medium';

    if (margin >= 20) {
      interpretation = 'هامش ربح ممتاز - ربحية عالية جداً';
      recommendation = 'الحفاظ على الكفاءة التشغيلية العالية';
      riskLevel = 'low';
    } else if (margin >= 10) {
      interpretation = 'هامش ربح جيد - ربحية صحية';
      recommendation = 'مواصلة الاستراتيجية مع البحث عن تحسينات';
      riskLevel = 'low';
    } else if (margin >= 5) {
      interpretation = 'هامش ربح متوسط - حاجة لتحسين';
      recommendation = 'تقليل التكاليف وتحسين كفاءة العمليات';
      riskLevel = 'medium';
    } else {
      interpretation = 'هامش ربح ضعيف - مخاوف حول الربحية';
      recommendation = 'مراجعة شاملة للتكاليف والعمليات';
      riskLevel = 'high';
    }

    return {
      agentName: 'محلل هامش الربح الصافي',
      analysis: `هامش الربح الصافي هو ${margin.toFixed(2)}%. ${interpretation}`,
      value: `${margin.toFixed(2)}%`,
      interpretation,
      recommendation,
      riskLevel,
      confidence: 0.92
    };
  }
};

// Agent 9: Operating Cash Flow Analysis Agent
export const operatingCashFlowAgent: Agent = {
  id: 'operating-cash-flow',
  name: 'Operating Cash Flow Analyst',
  nameAr: 'محلل التدفق النقدي التشغيلي',
  category: 'cash-flow',
  description: 'Analyzes cash generated from core business operations',
  descriptionAr: 'يحلل النقد المتولد من العمليات التجارية الأساسية',
  analyze: (data: FinancialData): AgentResponse => {
    const ocf = data.operatingCashFlow || 0;
    const ocfMargin = data.revenue ? (ocf / data.revenue) * 100 : 0;

    let interpretation = '';
    let recommendation = '';
    let riskLevel: 'low' | 'medium' | 'high' = 'medium';

    if (ocfMargin >= 15) {
      interpretation = 'تدفق نقدي تشغيلي ممتاز - قدرة قوية على توليد النقد';
      recommendation = 'استثمار الفائض في النمو أو توزيع أرباح';
      riskLevel = 'low';
    } else if (ocfMargin >= 8) {
      interpretation = 'تدفق نقدي تشغيلي جيد - صحة مالية جيدة';
      recommendation = 'الحفاظ على مستوى التدفق النقدي';
      riskLevel = 'low';
    } else if (ocfMargin >= 3) {
      interpretation = 'تدفق نقدي تشغيلي متوسط - حاجة لتحسين';
      recommendation = 'تحسين إدارة رأس المال العامل';
      riskLevel = 'medium';
    } else {
      interpretation = 'تدفق نقدي تشغيلي ضعيف - مخاوف حول السيولة';
      recommendation = 'تحسين العمليات التشغيلية وإدارة المخزون';
      riskLevel = 'high';
    }

    return {
      agentName: 'محلل التدفق النقدي التشغيلي',
      analysis: `هامش التدفق النقدي التشغيلي هو ${ocfMargin.toFixed(2)}%. ${interpretation}`,
      value: `${ocfMargin.toFixed(2)}%`,
      interpretation,
      recommendation,
      riskLevel,
      confidence: 0.87
    };
  }
};

// Agent 10: Free Cash Flow Analysis Agent
export const freeCashFlowAgent: Agent = {
  id: 'free-cash-flow',
  name: 'Free Cash Flow Analyst',
  nameAr: 'محلل التدفق النقدي الحر',
  category: 'cash-flow',
  description: 'Analyzes cash available after capital expenditures',
  descriptionAr: 'يحلل النقد المتاح بعد النفقات الرأسمالية',
  analyze: (data: FinancialData): AgentResponse => {
    const fcf = (data.operatingCashFlow || 0) - (data.capex || 0);
    const fcfMargin = data.revenue ? (fcf / data.revenue) * 100 : 0;

    let interpretation = '';
    let recommendation = '';
    let riskLevel: 'low' | 'medium' | 'high' = 'medium';

    if (fcfMargin >= 10) {
      interpretation = 'تدفق نقدي حر ممتاز - قدرة قوية على خلق القيمة';
      recommendation = 'توزيع أرباح أو استثمارات استراتيجية';
      riskLevel = 'low';
    } else if (fcfMargin >= 5) {
      interpretation = 'تدفق نقدي حر جيد - وضع مالي صحي';
      recommendation = 'الحفاظ على مستوى الاستثمار';
      riskLevel = 'low';
    } else if (fcfMargin >= 0) {
      interpretation = 'تدفق نقدي حر محدود - حاجة لمراقبة';
      recommendation = 'مراجعة النفقات الرأسمالية وتحسين الكفاءة';
      riskLevel = 'medium';
    } else {
      interpretation = 'تدفق نقدي حر سالب - استنزاف النقد';
      recommendation = 'تقليل النفقات الرأسمالية وتحسين العمليات';
      riskLevel = 'high';
    }

    return {
      agentName: 'محلل التدفق النقدي الحر',
      analysis: `هامش التدفق النقدي الحر هو ${fcfMargin.toFixed(2)}%. ${interpretation}`,
      value: `${fcfMargin.toFixed(2)}%`,
      interpretation,
      recommendation,
      riskLevel,
      confidence: 0.84
    };
  }
};

// Agent 11: Interest Coverage Ratio Analysis Agent
export const interestCoverageAgent: Agent = {
  id: 'interest-coverage',
  name: 'Interest Coverage Analyst',
  nameAr: 'محلل نسبة تغطية الفوائد',
  category: 'leverage',
  description: 'Analyzes ability to pay interest on debt',
  descriptionAr: 'يحلل القدرة على دفع فوائد الديون',
  analyze: (data: FinancialData): AgentResponse => {
    // Estimating EBIT as Net Income + Interest + Taxes (simplified)
    const ebit = (data.netIncome || 0) * 1.4; // Rough estimate
    const interestExpense = ((data.longTermDebt || 0) + (data.shortTermDebt || 0)) * 0.05; // Estimated 5% interest
    const ratio = interestExpense > 0 ? ebit / interestExpense : 999;

    let interpretation = '';
    let recommendation = '';
    let riskLevel: 'low' | 'medium' | 'high' = 'medium';

    if (ratio >= 10) {
      interpretation = 'تغطية ممتازة للفوائد - قدرة قوية على خدمة الدين';
      recommendation = 'إمكانية زيادة الاستدانة للتوسع';
      riskLevel = 'low';
    } else if (ratio >= 5) {
      interpretation = 'تغطية جيدة للفوائد - وضع آمن';
      recommendation = 'الحفاظ على المستوى الحالي للدين';
      riskLevel = 'low';
    } else if (ratio >= 2) {
      interpretation = 'تغطية متوسطة للفوائد - حاجة لمراقبة';
      recommendation = 'تحسين الربحية وتقليل الديون تدريجياً';
      riskLevel = 'medium';
    } else {
      interpretation = 'تغطية ضعيفة للفوائد - مخاطر عالية';
      recommendation = 'خفض الديون فوراً وتحسين الربحية';
      riskLevel = 'high';
    }

    return {
      agentName: 'محلل نسبة تغطية الفوائد',
      analysis: `نسبة تغطية الفوائد هي ${ratio.toFixed(2)}. ${interpretation}`,
      value: ratio.toFixed(2),
      interpretation,
      recommendation,
      riskLevel,
      confidence: 0.80
    };
  }
};

// Agent 12: Working Capital Analysis Agent
export const workingCapitalAgent: Agent = {
  id: 'working-capital',
  name: 'Working Capital Analyst',
  nameAr: 'محلل رأس المال العامل',
  category: 'liquidity',
  description: 'Analyzes short-term financial health and operational efficiency',
  descriptionAr: 'يحلل الصحة المالية قصيرة المدى والكفاءة التشغيلية',
  analyze: (data: FinancialData): AgentResponse => {
    const workingCapital = (data.currentAssets || 0) - (data.currentLiabilities || 0);
    const wcRatio = data.revenue ? (workingCapital / data.revenue) * 100 : 0;

    let interpretation = '';
    let recommendation = '';
    let riskLevel: 'low' | 'medium' | 'high' = 'medium';

    if (wcRatio >= 20) {
      interpretation = 'رأس مال عامل كبير - سيولة قوية لكن ربما فائض';
      recommendation = 'استثمار الفائض أو تحسين دورة التشغيل';
      riskLevel = 'low';
    } else if (wcRatio >= 10) {
      interpretation = 'رأس مال عامل مناسب - توازن جيد';
      recommendation = 'الحفاظ على المستوى الحالي';
      riskLevel = 'low';
    } else if (wcRatio >= 5) {
      interpretation = 'رأس مال عامل محدود - حاجة لمراقبة';
      recommendation = 'تحسين إدارة رأس المال العامل';
      riskLevel = 'medium';
    } else {
      interpretation = 'رأس مال عامل منخفض أو سالب - مخاطر سيولة';
      recommendation = 'تحسين السيولة فوراً وإعادة هيكلة العمليات';
      riskLevel = 'high';
    }

    return {
      agentName: 'محلل رأس المال العامل',
      analysis: `نسبة رأس المال العامل إلى الإيرادات هي ${wcRatio.toFixed(2)}%. ${interpretation}`,
      value: `${wcRatio.toFixed(2)}%`,
      interpretation,
      recommendation,
      riskLevel,
      confidence: 0.86
    };
  }
};

// Export additional agents
export const additionalAgents: Agent[] = [
  debtToEquityAgent,
  assetTurnoverAgent,
  netProfitMarginAgent,
  operatingCashFlowAgent,
  freeCashFlowAgent,
  interestCoverageAgent,
  workingCapitalAgent
];

// Agent 13-23 will be added in the next module
export * from './market-agents';