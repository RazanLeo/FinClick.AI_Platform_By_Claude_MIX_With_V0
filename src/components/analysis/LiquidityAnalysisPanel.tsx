/**
 * Liquidity Analysis Panel - FinClick.AI Platform
 * لوحة تحليل السيولة
 */

import React, { useState, useEffect } from 'react';
import { Card, CardContent, CardHeader, CardTitle } from '../ui/Card';
import { Button } from '../ui/Button';
import { Input } from '../ui/Input';
import { LoadingSpinner } from '../ui/LoadingSpinner';
import { TrendingUp, TrendingDown, AlertCircle, CheckCircle, Info } from 'lucide-react';

interface LiquidityMetrics {
  currentAssets: number;
  currentLiabilities: number;
  quickAssets: number;
  cash: number;
  inventory: number;
  accountsReceivable: number;
}

interface LiquidityResults {
  currentRatio: number;
  quickRatio: number;
  cashRatio: number;
  workingCapital: number;
  interpretation: {
    riskLevel: 'low' | 'medium' | 'high' | 'critical';
    interpretation: string;
    recommendation: string;
  };
  industryBenchmark: {
    excellent: number;
    good: number;
    average: number;
    poor: number;
  };
}

const LiquidityAnalysisPanel: React.FC = () => {
  const [metrics, setMetrics] = useState<LiquidityMetrics>({
    currentAssets: 0,
    currentLiabilities: 0,
    quickAssets: 0,
    cash: 0,
    inventory: 0,
    accountsReceivable: 0,
  });

  const [results, setResults] = useState<LiquidityResults | null>(null);
  const [loading, setLoading] = useState(false);
  const [selectedIndustry, setSelectedIndustry] = useState('default');

  const industries = [
    { value: 'default', label: 'عام' },
    { value: 'retail', label: 'التجارة' },
    { value: 'manufacturing', label: 'التصنيع' },
    { value: 'technology', label: 'التكنولوجيا' },
    { value: 'healthcare', label: 'الرعاية الصحية' },
    { value: 'utilities', label: 'المرافق' },
  ];

  const analyzeCurrentRatio = () => {
    if (metrics.currentLiabilities === 0) return 0;
    return metrics.currentAssets / metrics.currentLiabilities;
  };

  const analyzeQuickRatio = () => {
    if (metrics.currentLiabilities === 0) return 0;
    return metrics.quickAssets / metrics.currentLiabilities;
  };

  const analyzeCashRatio = () => {
    if (metrics.currentLiabilities === 0) return 0;
    return metrics.cash / metrics.currentLiabilities;
  };

  const calculateWorkingCapital = () => {
    return metrics.currentAssets - metrics.currentLiabilities;
  };

  const getInterpretation = (currentRatio: number): LiquidityResults['interpretation'] => {
    if (currentRatio >= 2.5) {
      return {
        riskLevel: 'low',
        interpretation: 'نسبة تداول ممتازة - سيولة قوية جداً',
        recommendation: 'الاستمرار في الإدارة الحكيمة للسيولة',
      };
    } else if (currentRatio >= 2.0) {
      return {
        riskLevel: 'low',
        interpretation: 'نسبة تداول جيدة - سيولة كافية',
        recommendation: 'مراقبة مستويات السيولة بانتظام',
      };
    } else if (currentRatio >= 1.5) {
      return {
        riskLevel: 'medium',
        interpretation: 'نسبة تداول مقبولة - سيولة متوسطة',
        recommendation: 'تحسين إدارة رأس المال العامل',
      };
    } else if (currentRatio >= 1.0) {
      return {
        riskLevel: 'high',
        interpretation: 'نسبة تداول منخفضة - مخاطر سيولة',
        recommendation: 'تحسين السيولة عبر زيادة الأصول المتداولة أو تقليل الالتزامات',
      };
    } else {
      return {
        riskLevel: 'critical',
        interpretation: 'نسبة تداول حرجة - مخاطر سيولة عالية',
        recommendation: 'إجراءات طارئة لتحسين السيولة مطلوبة فوراً',
      };
    }
  };

  const getIndustryBenchmark = (industry: string) => {
    const benchmarks: Record<string, LiquidityResults['industryBenchmark']> = {
      retail: { excellent: 2.5, good: 2.0, average: 1.5, poor: 1.0 },
      manufacturing: { excellent: 2.0, good: 1.8, average: 1.3, poor: 1.0 },
      technology: { excellent: 3.0, good: 2.5, average: 2.0, poor: 1.5 },
      healthcare: { excellent: 2.8, good: 2.3, average: 1.8, poor: 1.2 },
      utilities: { excellent: 1.8, good: 1.5, average: 1.2, poor: 0.9 },
      default: { excellent: 2.5, good: 2.0, average: 1.5, poor: 1.0 },
    };

    return benchmarks[industry] || benchmarks.default;
  };

  const handleAnalyze = async () => {
    setLoading(true);

    // محاكاة API call
    await new Promise(resolve => setTimeout(resolve, 1500));

    const currentRatio = analyzeCurrentRatio();
    const quickRatio = analyzeQuickRatio();
    const cashRatio = analyzeCashRatio();
    const workingCapital = calculateWorkingCapital();

    const analysisResults: LiquidityResults = {
      currentRatio,
      quickRatio,
      cashRatio,
      workingCapital,
      interpretation: getInterpretation(currentRatio),
      industryBenchmark: getIndustryBenchmark(selectedIndustry),
    };

    setResults(analysisResults);
    setLoading(false);
  };

  const getRiskIcon = (riskLevel: string) => {
    switch (riskLevel) {
      case 'low':
        return <CheckCircle className=\"w-5 h-5 text-green-500\" />;
      case 'medium':
        return <Info className=\"w-5 h-5 text-yellow-500\" />;
      case 'high':
        return <AlertCircle className=\"w-5 h-5 text-orange-500\" />;
      case 'critical':
        return <AlertCircle className=\"w-5 h-5 text-red-500\" />;
      default:
        return <Info className=\"w-5 h-5 text-gray-500\" />;
    }
  };

  const getRiskColor = (riskLevel: string) => {
    switch (riskLevel) {
      case 'low':
        return 'text-green-600 bg-green-50 border-green-200';
      case 'medium':
        return 'text-yellow-600 bg-yellow-50 border-yellow-200';
      case 'high':
        return 'text-orange-600 bg-orange-50 border-orange-200';
      case 'critical':
        return 'text-red-600 bg-red-50 border-red-200';
      default:
        return 'text-gray-600 bg-gray-50 border-gray-200';
    }
  };

  const formatCurrency = (value: number) => {
    return new Intl.NumberFormat('ar-SA', {
      style: 'currency',
      currency: 'SAR',
      minimumFractionDigits: 0,
    }).format(value);
  };

  const formatRatio = (value: number) => {
    return value.toFixed(2);
  };

  return (
    <div className=\"space-y-6 p-6 bg-gray-50 min-h-screen\" dir=\"rtl\">
      <div className=\"max-w-7xl mx-auto\">
        {/* Header */}
        <div className=\"mb-8\">
          <h1 className=\"text-3xl font-bold text-gray-900 mb-2\">تحليل السيولة</h1>
          <p className=\"text-gray-600\">
            قم بتحليل قدرة الشركة على سداد التزاماتها قصيرة المدى من خلال نسب السيولة المختلفة
          </p>
        </div>

        <div className=\"grid grid-cols-1 lg:grid-cols-3 gap-6\">
          {/* Input Panel */}
          <div className=\"lg:col-span-1\">
            <Card>
              <CardHeader>
                <CardTitle className=\"flex items-center space-x-2 space-x-reverse\">
                  <span>بيانات الشركة</span>
                </CardTitle>
              </CardHeader>
              <CardContent className=\"space-y-4\">
                <div>
                  <label className=\"block text-sm font-medium text-gray-700 mb-2\">
                    الصناعة
                  </label>
                  <select
                    value={selectedIndustry}
                    onChange={(e) => setSelectedIndustry(e.target.value)}
                    className=\"w-full p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent\"
                  >
                    {industries.map((industry) => (
                      <option key={industry.value} value={industry.value}>
                        {industry.label}
                      </option>
                    ))}
                  </select>
                </div>

                <div>
                  <label className=\"block text-sm font-medium text-gray-700 mb-2\">
                    الأصول المتداولة
                  </label>
                  <Input
                    type=\"number\"
                    value={metrics.currentAssets}
                    onChange={(e) =>
                      setMetrics({ ...metrics, currentAssets: Number(e.target.value) })
                    }
                    placeholder=\"أدخل قيمة الأصول المتداولة\"
                  />
                </div>

                <div>
                  <label className=\"block text-sm font-medium text-gray-700 mb-2\">
                    الالتزامات المتداولة
                  </label>
                  <Input
                    type=\"number\"
                    value={metrics.currentLiabilities}
                    onChange={(e) =>
                      setMetrics({ ...metrics, currentLiabilities: Number(e.target.value) })
                    }
                    placeholder=\"أدخل قيمة الالتزامات المتداولة\"
                  />
                </div>

                <div>
                  <label className=\"block text-sm font-medium text-gray-700 mb-2\">
                    الأصول السريعة
                  </label>
                  <Input
                    type=\"number\"
                    value={metrics.quickAssets}
                    onChange={(e) =>
                      setMetrics({ ...metrics, quickAssets: Number(e.target.value) })
                    }
                    placeholder=\"أدخل قيمة الأصول السريعة\"
                  />
                </div>

                <div>
                  <label className=\"block text-sm font-medium text-gray-700 mb-2\">
                    النقد والنقد المعادل
                  </label>
                  <Input
                    type=\"number\"
                    value={metrics.cash}
                    onChange={(e) =>
                      setMetrics({ ...metrics, cash: Number(e.target.value) })
                    }
                    placeholder=\"أدخل قيمة النقد والنقد المعادل\"
                  />
                </div>

                <div>
                  <label className=\"block text-sm font-medium text-gray-700 mb-2\">
                    المخزون
                  </label>
                  <Input
                    type=\"number\"
                    value={metrics.inventory}
                    onChange={(e) =>
                      setMetrics({ ...metrics, inventory: Number(e.target.value) })
                    }
                    placeholder=\"أدخل قيمة المخزون\"
                  />
                </div>

                <div>
                  <label className=\"block text-sm font-medium text-gray-700 mb-2\">
                    الذمم المدينة
                  </label>
                  <Input
                    type=\"number\"
                    value={metrics.accountsReceivable}
                    onChange={(e) =>
                      setMetrics({ ...metrics, accountsReceivable: Number(e.target.value) })
                    }
                    placeholder=\"أدخل قيمة الذمم المدينة\"
                  />
                </div>

                <Button
                  onClick={handleAnalyze}
                  disabled={loading || metrics.currentLiabilities === 0}
                  className=\"w-full\"
                >
                  {loading ? (
                    <div className=\"flex items-center space-x-2 space-x-reverse\">
                      <LoadingSpinner size=\"sm\" />
                      <span>جاري التحليل...</span>
                    </div>
                  ) : (
                    'تحليل السيولة'
                  )}
                </Button>
              </CardContent>
            </Card>
          </div>

          {/* Results Panel */}
          <div className=\"lg:col-span-2\">
            {results ? (
              <div className=\"space-y-6\">
                {/* Key Metrics */}
                <div className=\"grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4\">
                  <Card>
                    <CardContent className=\"p-6\">
                      <div className=\"flex items-center justify-between\">
                        <div>
                          <p className=\"text-sm font-medium text-gray-600\">نسبة التداول</p>
                          <p className=\"text-2xl font-bold text-gray-900\">
                            {formatRatio(results.currentRatio)}
                          </p>
                        </div>
                        <TrendingUp className=\"w-8 h-8 text-blue-500\" />
                      </div>
                    </CardContent>
                  </Card>

                  <Card>
                    <CardContent className=\"p-6\">
                      <div className=\"flex items-center justify-between\">
                        <div>
                          <p className=\"text-sm font-medium text-gray-600\">نسبة السيولة السريعة</p>
                          <p className=\"text-2xl font-bold text-gray-900\">
                            {formatRatio(results.quickRatio)}
                          </p>
                        </div>
                        <TrendingUp className=\"w-8 h-8 text-green-500\" />
                      </div>
                    </CardContent>
                  </Card>

                  <Card>
                    <CardContent className=\"p-6\">
                      <div className=\"flex items-center justify-between\">
                        <div>
                          <p className=\"text-sm font-medium text-gray-600\">نسبة النقدية</p>
                          <p className=\"text-2xl font-bold text-gray-900\">
                            {formatRatio(results.cashRatio)}
                          </p>
                        </div>
                        <TrendingUp className=\"w-8 h-8 text-purple-500\" />
                      </div>
                    </CardContent>
                  </Card>

                  <Card>
                    <CardContent className=\"p-6\">
                      <div className=\"flex items-center justify-between\">
                        <div>
                          <p className=\"text-sm font-medium text-gray-600\">رأس المال العامل</p>
                          <p className=\"text-lg font-bold text-gray-900\">
                            {formatCurrency(results.workingCapital)}
                          </p>
                        </div>
                        {results.workingCapital >= 0 ? (
                          <TrendingUp className=\"w-8 h-8 text-green-500\" />
                        ) : (
                          <TrendingDown className=\"w-8 h-8 text-red-500\" />
                        )}
                      </div>
                    </CardContent>
                  </Card>
                </div>

                {/* Interpretation */}
                <Card>
                  <CardHeader>
                    <CardTitle className=\"flex items-center space-x-2 space-x-reverse\">
                      {getRiskIcon(results.interpretation.riskLevel)}
                      <span>تفسير النتائج</span>
                    </CardTitle>
                  </CardHeader>
                  <CardContent>
                    <div
                      className={`p-4 rounded-lg border ${getRiskColor(
                        results.interpretation.riskLevel
                      )}`}
                    >
                      <h3 className=\"font-semibold mb-2\">{results.interpretation.interpretation}</h3>
                      <p className=\"text-sm\">{results.interpretation.recommendation}</p>
                    </div>
                  </CardContent>
                </Card>

                {/* Industry Benchmark */}
                <Card>
                  <CardHeader>
                    <CardTitle>مقارنة مع معايير الصناعة</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <div className=\"space-y-4\">
                      <div className=\"flex justify-between items-center p-3 bg-green-50 rounded-lg\">
                        <span className=\"font-medium\">ممتاز</span>
                        <span className=\"font-bold text-green-600\">
                          {formatRatio(results.industryBenchmark.excellent)}
                        </span>
                      </div>
                      <div className=\"flex justify-between items-center p-3 bg-blue-50 rounded-lg\">
                        <span className=\"font-medium\">جيد</span>
                        <span className=\"font-bold text-blue-600\">
                          {formatRatio(results.industryBenchmark.good)}
                        </span>
                      </div>
                      <div className=\"flex justify-between items-center p-3 bg-yellow-50 rounded-lg\">
                        <span className=\"font-medium\">متوسط</span>
                        <span className=\"font-bold text-yellow-600\">
                          {formatRatio(results.industryBenchmark.average)}
                        </span>
                      </div>
                      <div className=\"flex justify-between items-center p-3 bg-red-50 rounded-lg\">
                        <span className=\"font-medium\">ضعيف</span>
                        <span className=\"font-bold text-red-600\">
                          {formatRatio(results.industryBenchmark.poor)}
                        </span>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              </div>
            ) : (
              <Card>
                <CardContent className=\"p-12 text-center\">
                  <div className=\"text-gray-400 mb-4\">
                    <svg
                      className=\"w-16 h-16 mx-auto\"
                      fill=\"none\"
                      stroke=\"currentColor\"
                      viewBox=\"0 0 24 24\"
                    >
                      <path
                        strokeLinecap=\"round\"
                        strokeLinejoin=\"round\"
                        strokeWidth={2}
                        d=\"M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z\"
                      />
                    </svg>
                  </div>
                  <h3 className=\"text-lg font-medium text-gray-900 mb-2\">
                    قم بإدخال البيانات المالية
                  </h3>
                  <p className=\"text-gray-600\">
                    أدخل البيانات المالية للشركة في النموذج للحصول على تحليل شامل للسيولة
                  </p>
                </CardContent>
              </Card>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default LiquidityAnalysisPanel;