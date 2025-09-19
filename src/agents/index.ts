/**
 * AI Agents System - FinClick.AI Platform
 * نظام الوكلاء الذكية - منصة FinClick.AI
 *
 * This module contains the 23 AI agents that power the financial analysis
 * هذا الملف يحتوي على 23 وكيل ذكي يشغلون التحليل المالي
 */

// Import additional agents
import { additionalAgents } from './additional-agents';
import { marketAgents } from './market-agents';

export interface FinancialData {
  [key: string]: number | string | undefined;
  revenue?: number;
  netIncome?: number;
  totalAssets?: number;
  totalLiabilities?: number;
  equity?: number;
  currentAssets?: number;
  currentLiabilities?: number;
  cash?: number;
  inventory?: number;
  accountsReceivable?: number;
  longTermDebt?: number;
  shortTermDebt?: number;
  operatingCashFlow?: number;
  capex?: number;
  dividends?: number;
  shares?: number;
  marketCap?: number;
  stockPrice?: number;
}

export interface AgentResponse {
  agentName: string;
  analysis: string;
  value: number | string;
  interpretation: string;
  recommendation: string;
  riskLevel: 'low' | 'medium' | 'high';
  confidence: number;
}

export interface Agent {
  id: string;
  name: string;
  nameAr: string;
  category: string;
  description: string;
  descriptionAr: string;
  analyze: (data: FinancialData) => AgentResponse;
}

// Agent 1: Current Ratio Analysis Agent
export const currentRatioAgent: Agent = {
  id: 'current-ratio',
  name: 'Current Ratio Analyst',
  nameAr: 'محلل نسبة التداول',
  category: 'liquidity',
  description: 'Analyzes short-term liquidity through current ratio',
  descriptionAr: 'يحلل السيولة قصيرة المدى من خلال نسبة التداول',
  analyze: (data: FinancialData): AgentResponse => {
    const ratio = data.currentAssets && data.currentLiabilities
      ? data.currentAssets / data.currentLiabilities
      : 0;

    let interpretation = '';
    let recommendation = '';
    let riskLevel: 'low' | 'medium' | 'high' = 'medium';

    if (ratio >= 2) {
      interpretation = 'سيولة قوية جداً - قدرة ممتازة على سداد الالتزامات قصيرة المدى';
      recommendation = 'استثمار الفائض النقدي لتحسين العوائد';
      riskLevel = 'low';
    } else if (ratio >= 1.5) {
      interpretation = 'سيولة جيدة - قدرة قوية على سداد الالتزامات قصيرة المدى';
      recommendation = 'مراقبة مستويات السيولة والحفاظ على الوضع الحالي';
      riskLevel = 'low';
    } else if (ratio >= 1) {
      interpretation = 'سيولة مقبولة - قدرة أساسية على سداد الالتزامات';
      recommendation = 'تحسين إدارة رأس المال العامل';
      riskLevel = 'medium';
    } else {
      interpretation = 'سيولة ضعيفة - مخاطر في سداد الالتزامات قصيرة المدى';
      recommendation = 'ضرورة تحسين السيولة فوراً وإعادة هيكلة الديون';
      riskLevel = 'high';
    }

    return {
      agentName: 'محلل نسبة التداول',
      analysis: `نسبة التداول هي ${ratio.toFixed(2)}. ${interpretation}`,
      value: ratio.toFixed(2),
      interpretation,
      recommendation,
      riskLevel,
      confidence: 0.95
    };
  }
};

// Agent 2: Quick Ratio Analysis Agent
export const quickRatioAgent: Agent = {
  id: 'quick-ratio',
  name: 'Quick Ratio Analyst',
  nameAr: 'محلل نسبة السيولة السريعة',
  category: 'liquidity',
  description: 'Analyzes immediate liquidity excluding inventory',
  descriptionAr: 'يحلل السيولة الفورية باستثناء المخزون',
  analyze: (data: FinancialData): AgentResponse => {
    const quickAssets = (data.currentAssets || 0) - (data.inventory || 0);
    const ratio = data.currentLiabilities ? quickAssets / data.currentLiabilities : 0;

    let interpretation = '';
    let recommendation = '';
    let riskLevel: 'low' | 'medium' | 'high' = 'medium';

    if (ratio >= 1.5) {
      interpretation = 'سيولة سريعة ممتازة - قدرة فورية قوية على سداد الالتزامات';
      recommendation = 'استثمار الفائض في الأصول المدرة للدخل';
      riskLevel = 'low';
    } else if (ratio >= 1) {
      interpretation = 'سيولة سريعة جيدة - قدرة مناسبة على السداد الفوري';
      recommendation = 'مراقبة مستويات النقد والاستثمارات قصيرة المدى';
      riskLevel = 'low';
    } else if (ratio >= 0.8) {
      interpretation = 'سيولة سريعة مقبولة - حاجة لمراقبة دقيقة';
      recommendation = 'تحسين تحصيل المستحقات وإدارة النقد';
      riskLevel = 'medium';
    } else {
      interpretation = 'سيولة سريعة ضعيفة - مخاطر في السداد الفوري';
      recommendation = 'تسريع تحصيل المستحقات وتقليل المدفوعات غير الضرورية';
      riskLevel = 'high';
    }

    return {
      agentName: 'محلل نسبة السيولة السريعة',
      analysis: `نسبة السيولة السريعة هي ${ratio.toFixed(2)}. ${interpretation}`,
      value: ratio.toFixed(2),
      interpretation,
      recommendation,
      riskLevel,
      confidence: 0.92
    };
  }
};

// Agent 3: Cash Ratio Analysis Agent
export const cashRatioAgent: Agent = {
  id: 'cash-ratio',
  name: 'Cash Ratio Analyst',
  nameAr: 'محلل نسبة النقد',
  category: 'liquidity',
  description: 'Analyzes the most conservative liquidity measure',
  descriptionAr: 'يحلل أكثر مقاييس السيولة تحفظاً',
  analyze: (data: FinancialData): AgentResponse => {
    const ratio = data.cash && data.currentLiabilities
      ? data.cash / data.currentLiabilities
      : 0;

    let interpretation = '';
    let recommendation = '';
    let riskLevel: 'low' | 'medium' | 'high' = 'medium';

    if (ratio >= 0.5) {
      interpretation = 'نسبة نقد ممتازة - قدرة فورية قوية جداً على السداد';
      recommendation = 'استثمار جزء من النقد الفائض في أدوات استثمارية آمنة';
      riskLevel = 'low';
    } else if (ratio >= 0.2) {
      interpretation = 'نسبة نقد جيدة - احتياطي نقدي مناسب';
      recommendation = 'الحفاظ على المستوى الحالي مع مراقبة التدفقات النقدية';
      riskLevel = 'low';
    } else if (ratio >= 0.1) {
      interpretation = 'نسبة نقد متوسطة - احتياطي محدود نسبياً';
      recommendation = 'زيادة الاحتياطيات النقدية وتحسين إدارة التدفقات النقدية';
      riskLevel = 'medium';
    } else {
      interpretation = 'نسبة نقد منخفضة - مخاطر في السيولة النقدية المباشرة';
      recommendation = 'ضرورة زيادة الاحتياطيات النقدية وإعادة النظر في السياسات النقدية';
      riskLevel = 'high';
    }

    return {
      agentName: 'محلل نسبة النقد',
      analysis: `نسبة النقد هي ${ratio.toFixed(2)}. ${interpretation}`,
      value: ratio.toFixed(2),
      interpretation,
      recommendation,
      riskLevel,
      confidence: 0.90
    };
  }
};

// Agent 4: ROA (Return on Assets) Analysis Agent
export const roaAgent: Agent = {
  id: 'roa',
  name: 'Return on Assets Analyst',
  nameAr: 'محلل العائد على الأصول',
  category: 'profitability',
  description: 'Analyzes efficiency in using assets to generate profits',
  descriptionAr: 'يحلل كفاءة استخدام الأصول في توليد الأرباح',
  analyze: (data: FinancialData): AgentResponse => {
    const roa = data.netIncome && data.totalAssets
      ? (data.netIncome / data.totalAssets) * 100
      : 0;

    let interpretation = '';
    let recommendation = '';
    let riskLevel: 'low' | 'medium' | 'high' = 'medium';

    if (roa >= 10) {
      interpretation = 'عائد ممتاز على الأصول - كفاءة عالية جداً في استخدام الأصول';
      recommendation = 'الحفاظ على الاستراتيجية الحالية والتوسع المدروس';
      riskLevel = 'low';
    } else if (roa >= 5) {
      interpretation = 'عائد جيد على الأصول - كفاءة مناسبة في إدارة الأصول';
      recommendation = 'البحث عن فرص لتحسين كفاءة الأصول والعمليات';
      riskLevel = 'low';
    } else if (roa >= 2) {
      interpretation = 'عائد متوسط على الأصول - حاجة لتحسين الكفاءة';
      recommendation = 'مراجعة استراتيجية الاستثمار وتحسين كفاءة الأصول';
      riskLevel = 'medium';
    } else {
      interpretation = 'عائد ضعيف على الأصول - كفاءة منخفضة في استخدام الأصول';
      recommendation = 'إعادة هيكلة الأصول وتحسين العمليات التشغيلية جذرياً';
      riskLevel = 'high';
    }

    return {
      agentName: 'محلل العائد على الأصول',
      analysis: `العائد على الأصول هو ${roa.toFixed(2)}%. ${interpretation}`,
      value: `${roa.toFixed(2)}%`,
      interpretation,
      recommendation,
      riskLevel,
      confidence: 0.88
    };
  }
};

// Agent 5: ROE (Return on Equity) Analysis Agent
export const roeAgent: Agent = {
  id: 'roe',
  name: 'Return on Equity Analyst',
  nameAr: 'محلل العائد على حقوق الملكية',
  category: 'profitability',
  description: 'Analyzes returns generated for shareholders',
  descriptionAr: 'يحلل العوائد المحققة للمساهمين',
  analyze: (data: FinancialData): AgentResponse => {
    const roe = data.netIncome && data.equity
      ? (data.netIncome / data.equity) * 100
      : 0;

    let interpretation = '';
    let recommendation = '';
    let riskLevel: 'low' | 'medium' | 'high' = 'medium';

    if (roe >= 20) {
      interpretation = 'عائد استثنائي على حقوق الملكية - قيمة ممتازة للمساهمين';
      recommendation = 'الحفاظ على الأداء المتميز والتوسع الاستراتيجي';
      riskLevel = 'low';
    } else if (roe >= 15) {
      interpretation = 'عائد قوي على حقوق الملكية - أداء جيد للمساهمين';
      recommendation = 'مواصلة الاستراتيجية الحالية مع البحث عن فرص نمو';
      riskLevel = 'low';
    } else if (roe >= 10) {
      interpretation = 'عائد مقبول على حقوق الملكية - أداء متوسط';
      recommendation = 'تحسين كفاءة رأس المال وزيادة الربحية';
      riskLevel = 'medium';
    } else {
      interpretation = 'عائد ضعيف على حقوق الملكية - أداء دون المستوى المطلوب';
      recommendation = 'مراجعة شاملة للاستراتيجية وتحسين الربحية';
      riskLevel = 'high';
    }

    return {
      agentName: 'محلل العائد على حقوق الملكية',
      analysis: `العائد على حقوق الملكية هو ${roe.toFixed(2)}%. ${interpretation}`,
      value: `${roe.toFixed(2)}%`,
      interpretation,
      recommendation,
      riskLevel,
      confidence: 0.91
    };
  }
};

// Export all agents
export const agents: Agent[] = [
  currentRatioAgent,
  quickRatioAgent,
  cashRatioAgent,
  roaAgent,
  roeAgent,
  ...additionalAgents,
  ...marketAgents
];

// Agent Manager Class
export class AgentManager {
  private agents: Agent[];

  constructor() {
    this.agents = agents;
  }

  getAgent(id: string): Agent | undefined {
    return this.agents.find(agent => agent.id === id);
  }

  getAgentsByCategory(category: string): Agent[] {
    return this.agents.filter(agent => agent.category === category);
  }

  getAllAgents(): Agent[] {
    return this.agents;
  }

  runAnalysis(data: FinancialData, agentIds?: string[]): AgentResponse[] {
    const targetAgents = agentIds
      ? this.agents.filter(agent => agentIds.includes(agent.id))
      : this.agents;

    return targetAgents.map(agent => agent.analyze(data));
  }

  runCategoryAnalysis(data: FinancialData, category: string): AgentResponse[] {
    const categoryAgents = this.getAgentsByCategory(category);
    return categoryAgents.map(agent => agent.analyze(data));
  }
}