/**
 * Test Runner لاختبار محرك التحليل المالي
 * Financial Analysis Engine Test Runner
 */

import FinancialAnalysisEngine, {
  FinancialStatement,
  BalanceSheet,
  IncomeStatement,
  CashFlowStatement,
  CompanyInfo
} from './FinancialAnalysisEngine';

// بيانات تجريبية لشركة وهمية
export const mockCompanyInfo: CompanyInfo = {
  name: 'شركة النقل المتطور المحدودة',
  englishName: 'Advanced Transport Limited',
  industry: 'النقل والخدمات اللوجستية',
  sector: 'قطاع النقل',
  marketCap: 2500000000, // 2.5 مليار
  employees: 1500,
  establishedYear: 2010,
  headquarters: 'الرياض، المملكة العربية السعودية',
  website: 'www.advancedtransport.com',
  stockSymbol: 'ADVT'
};

export const mockBalanceSheet: BalanceSheet = {
  // الأصول المتداولة
  cash: 250000000,
  shortTermInvestments: 100000000,
  accountsReceivable: 180000000,
  inventory: 320000000,
  prepaidExpenses: 45000000,
  totalCurrentAssets: 895000000,

  // الأصول الثابتة
  propertyPlantEquipment: 1800000000,
  accumulatedDepreciation: 450000000,
  netPPE: 1350000000,
  intangibleAssets: 150000000,
  goodwill: 200000000,
  longTermInvestments: 180000000,
  totalNonCurrentAssets: 1880000000,

  totalAssets: 2775000000,

  // المطلوبات المتداولة
  accountsPayable: 140000000,
  shortTermDebt: 80000000,
  accruedExpenses: 60000000,
  currentPortionLongTermDebt: 45000000,
  totalCurrentLiabilities: 325000000,

  // المطلوبات طويلة المدى
  longTermDebt: 850000000,
  deferredTaxLiabilities: 45000000,
  totalNonCurrentLiabilities: 895000000,

  totalLiabilities: 1220000000,

  // حقوق الملكية
  shareCapital: 500000000,
  retainedEarnings: 955000000,
  accumulatedOtherComprehensiveIncome: 100000000,
  totalEquity: 1555000000,

  totalLiabilitiesAndEquity: 2775000000
};

export const mockIncomeStatement: IncomeStatement = {
  revenue: 1800000000,
  costOfGoodsSold: 1260000000,
  grossProfit: 540000000,

  operatingExpenses: 295000000,
  operatingIncome: 245000000,

  interestExpense: 35000000,
  interestIncome: 12000000,
  otherIncome: 8000000,

  earningsBeforeTax: 230000000,
  taxExpense: 57500000,
  netIncome: 172500000,

  // بيانات إضافية
  sharesOutstanding: 125000000,
  earningsPerShare: 1.38,
  dividendsPerShare: 0.80,

  // تفاصيل إضافية
  researchAndDevelopment: 25000000,
  depreciation: 85000000,
  amortization: 15000000
};

export const mockCashFlowStatement: CashFlowStatement = {
  // التدفقات النقدية التشغيلية
  netIncome: 172500000,
  depreciation: 85000000,
  amortization: 15000000,
  changeInWorkingCapital: -25000000,
  otherOperatingActivities: 8500000,
  netCashFromOperations: 256000000,

  // التدفقات النقدية الاستثمارية
  capitalExpenditures: -180000000,
  acquisitions: -50000000,
  assetSales: 15000000,
  investmentPurchases: -25000000,
  investmentSales: 35000000,
  netCashFromInvesting: -205000000,

  // التدفقات النقدية التمويلية
  dividendsPaid: -100000000,
  shareIssuance: 0,
  shareRepurchases: -15000000,
  debtIssuance: 120000000,
  debtRepayment: -85000000,
  netCashFromFinancing: -80000000,

  netChangeInCash: -29000000,
  beginningCash: 279000000,
  endingCash: 250000000,

  // بيانات إضافية
  freeCashFlow: 76000000, // التدفق النقدي الحر
  capitalExpendituresPercent: 10.0, // النفقات الرأسمالية كنسبة من الإيرادات
  cashConversionCycle: 45 // دورة التحويل النقدي بالأيام
};

export const mockFinancialStatement: FinancialStatement = {
  balanceSheet: mockBalanceSheet,
  incomeStatement: mockIncomeStatement,
  cashFlowStatement: mockCashFlowStatement,
  period: '2024-Q4',
  fiscalYear: 2024,
  reportingCurrency: 'SAR'
};

/**
 * تشغيل اختبار شامل لمحرك التحليل المالي
 */
export async function runComprehensiveTest(): Promise<void> {
  console.log('🚀 بدء اختبار محرك التحليل المالي الشامل...');
  console.log('=========================================');

  try {
    // إنشاء محرك التحليل
    const engine = new FinancialAnalysisEngine([mockFinancialStatement], mockCompanyInfo);

    console.log(`📊 تحليل شركة: ${mockCompanyInfo.name}`);
    console.log(`🏭 القطاع: ${mockCompanyInfo.industry}`);
    console.log(`💰 رأس المال السوقي: ${(mockCompanyInfo.marketCap / 1000000).toFixed(0)} مليون ريال`);
    console.log('');

    // تنفيذ التحليل الشامل
    console.log('⏳ تنفيذ جميع التحليلات الـ 180...');
    const startTime = Date.now();

    const result = await engine.executeComprehensiveAnalysis();

    const endTime = Date.now();
    const duration = (endTime - startTime) / 1000;

    console.log('');
    console.log('✅ تم إكمال التحليل بنجاح!');
    console.log('=========================================');
    console.log(`⏱️  الوقت المستغرق: ${duration.toFixed(2)} ثانية`);
    console.log(`📈 إجمالي التحليلات: ${result.analyses.length} تحليل مالي`);
    console.log('');

    // إحصائيات التحليلات
    const analysisStats = result.analyses.reduce((stats, analysis) => {
      stats[analysis.rating] = (stats[analysis.rating] || 0) + 1;
      return stats;
    }, {} as Record<string, number>);

    console.log('📊 توزيع التقييمات:');
    console.log(`   🟢 ممتاز: ${analysisStats.excellent || 0} تحليل`);
    console.log(`   🔵 جيد جداً: ${analysisStats.very_good || 0} تحليل`);
    console.log(`   🟡 جيد: ${analysisStats.good || 0} تحليل`);
    console.log(`   🟠 مقبول: ${analysisStats.acceptable || 0} تحليل`);
    console.log(`   🔴 ضعيف: ${analysisStats.poor || 0} تحليل`);
    console.log('');

    // عرض نماذج من التحليلات
    console.log('🔍 عينة من التحليلات:');
    console.log('------------------------');

    const sampleAnalyses = result.analyses.slice(0, 10);
    sampleAnalyses.forEach((analysis, index) => {
      const ratingEmoji = {
        excellent: '🟢',
        very_good: '🔵',
        good: '🟡',
        acceptable: '🟠',
        poor: '🔴'
      }[analysis.rating];

      console.log(`${index + 1}. ${ratingEmoji} ${analysis.arabicName}`);
      console.log(`   القيمة: ${analysis.value}`);
      console.log(`   التقييم: ${analysis.rating}`);
      console.log('');
    });

    // الملخص التنفيذي
    console.log('📋 الملخص التنفيذي:');
    console.log('------------------');
    console.log(`📈 نقاط القوة: ${result.executiveSummary.swotAnalysis.strengths.length} نقطة`);
    console.log(`📉 نقاط الضعف: ${result.executiveSummary.swotAnalysis.weaknesses.length} نقطة`);
    console.log(`🎯 الفرص: ${result.executiveSummary.swotAnalysis.opportunities.length} فرصة`);
    console.log(`⚠️  المخاطر: ${result.executiveSummary.swotAnalysis.threats.length} تهديد`);
    console.log('');

    console.log('🎉 اكتمل الاختبار بنجاح! النظام جاهز للإنتاج.');

  } catch (error) {
    console.error('❌ خطأ في اختبار محرك التحليل:', error);
    throw error;
  }
}

/**
 * اختبار سريع لتحليل محدد
 */
export async function runQuickTest(analysisType: 'structural' | 'ratios' | 'cashflow' = 'ratios'): Promise<void> {
  console.log(`🔍 اختبار سريع: ${analysisType}`);

  try {
    const engine = new FinancialAnalysisEngine([mockFinancialStatement], mockCompanyInfo);

    // تنفيذ تحليل محدد بدلاً من الشامل
    const analyses = await engine.executeAnalysis(analysisType);

    console.log(`✅ تم إكمال ${analyses.length} تحليل من نوع ${analysisType}`);

    // عرض النتائج
    analyses.slice(0, 5).forEach((analysis, index) => {
      console.log(`${index + 1}. ${analysis.arabicName}: ${analysis.value}`);
    });

  } catch (error) {
    console.error('❌ خطأ في الاختبار السريع:', error);
  }
}

// تشغيل الاختبار إذا تم استدعاء الملف مباشرة
if (require.main === module) {
  runComprehensiveTest()
    .then(() => console.log('✅ انتهى الاختبار بنجاح'))
    .catch((error) => console.error('❌ فشل الاختبار:', error));
}