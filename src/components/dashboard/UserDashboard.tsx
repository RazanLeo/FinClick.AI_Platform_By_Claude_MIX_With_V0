import React, { useState } from 'react';
import { Card, CardContent, CardHeader, CardTitle } from '../ui/card';
import { Button } from '../ui/button';
import FinancialAnalysisEngine, {
  FinancialStatement,
  CompanyInfo,
  AnalysisResult
} from '../../core/FinancialAnalysisEngine';
import { AgentManager, FinancialData, AgentResponse } from '../../agents';
import { agents } from '../../agents';

interface UserDashboardProps {
  user: {
    name: string;
    type: 'user' | 'admin' | 'guest';
    subscriptionStatus: 'active' | 'trial' | 'inactive';
  };
}

interface AnalysisHistory {
  id: string;
  companyName: string;
  date: string;
  status: 'completed' | 'processing' | 'failed';
  analysisTypes: string[];
  filesCount: number;
  results?: AnalysisResult[];
}

export const UserDashboard: React.FC<UserDashboardProps> = ({ user }) => {
  const [uploadedFiles, setUploadedFiles] = useState<File[]>([]);
  const [analysisOptions, setAnalysisOptions] = useState<any>({});
  const [isAnalyzing, setIsAnalyzing] = useState(false);
  const [analysisResults, setAnalysisResults] = useState<AnalysisResult[]>([]);
  const [agentResults, setAgentResults] = useState<AgentResponse[]>([]);
  const [agentManager] = useState(new AgentManager());
  const [analysisHistory, setAnalysisHistory] = useState<AnalysisHistory[]>([
    {
      id: '1',
      companyName: 'شركة التقنية المتقدمة',
      date: '2024-01-15',
      status: 'completed',
      analysisTypes: ['التحليل الشامل'],
      filesCount: 5,
    },
    {
      id: '2',
      companyName: 'مؤسسة الاستثمار الذكي',
      date: '2024-01-10',
      status: 'completed',
      analysisTypes: ['التحليل الأساسي الكلاسيكي'],
      filesCount: 3,
    },
    {
      id: '3',
      companyName: 'شركة التجارة الإلكترونية',
      date: '2024-01-08',
      status: 'processing',
      analysisTypes: ['التحليل المتقدم والمتطور'],
      filesCount: 7,
    },
  ]);

  const handleFileUpload = (event: React.ChangeEvent<HTMLInputElement>) => {
    const files = Array.from(event.target.files || []);
    setUploadedFiles(files);
  };

  const handleStartAnalysis = async () => {
    if (uploadedFiles.length === 0) {
      alert('يرجى رفع الملفات المالية أولاً');
      return;
    }

    setIsAnalyzing(true);

    try {
      // Create mock financial data for demonstration
      const mockCompanyInfo: CompanyInfo = {
        name: analysisOptions.companyName || 'شركة تجريبية',
        industry: analysisOptions.sector || 'التقنية',
        sector: analysisOptions.sector || 'تقنية المعلومات',
        legalEntity: 'شركة مساهمة مقفلة',
        yearsAnalyzed: 1,
        benchmarkType: 'قطاعي',
        analysisLanguage: 'ar'
      };

      const mockFinancialStatement: FinancialStatement = {
        year: 2024,
        companyName: mockCompanyInfo.name,
        balanceSheet: {
          cash: 250000000,
          accountsReceivable: 180000000,
          inventory: 320000000,
          shortTermInvestments: 100000000,
          prepaidExpenses: 45000000,
          otherCurrentAssets: 0,
          totalCurrentAssets: 895000000,
          propertyPlantEquipment: 1800000000,
          intangibleAssets: 150000000,
          longTermInvestments: 180000000,
          goodwill: 200000000,
          otherNonCurrentAssets: 0,
          totalNonCurrentAssets: 1880000000,
          totalAssets: 2775000000,
          accountsPayable: 140000000,
          shortTermDebt: 80000000,
          accruedLiabilities: 60000000,
          taxesPayable: 45000000,
          otherCurrentLiabilities: 0,
          totalCurrentLiabilities: 325000000,
          longTermDebt: 850000000,
          deferredTaxLiabilities: 45000000,
          otherNonCurrentLiabilities: 0,
          totalNonCurrentLiabilities: 895000000,
          totalLiabilities: 1220000000,
          shareCapital: 500000000,
          retainedEarnings: 955000000,
          additionalPaidInCapital: 0,
          accumulatedOtherComprehensiveIncome: 100000000,
          treasuryStock: 0,
          totalEquity: 1555000000
        },
        incomeStatement: {
          revenue: 1800000000,
          costOfGoodsSold: 1260000000,
          grossProfit: 540000000,
          sellingGeneralAdministrative: 200000000,
          researchDevelopment: 25000000,
          depreciationAmortization: 70000000,
          otherOperatingExpenses: 0,
          totalOperatingExpenses: 295000000,
          operatingIncome: 245000000,
          interestIncome: 12000000,
          interestExpense: 35000000,
          otherIncome: 8000000,
          otherExpenses: 0,
          netNonOperatingIncome: -15000000,
          earningsBeforeTax: 230000000,
          taxExpense: 57500000,
          netIncome: 172500000,
          sharesOutstanding: 125000000,
          basicEarningsPerShare: 1.38,
          dilutedEarningsPerShare: 1.38,
          weightedAverageShares: 125000000,
          dilutedShares: 125000000
        },
        cashFlowStatement: {
          netIncome: 172500000,
          depreciationAmortization: 100000000,
          workingCapitalChanges: -25000000,
          accountsReceivableChange: -15000000,
          inventoryChange: -8000000,
          accountsPayableChange: -2000000,
          otherOperatingActivities: 8500000,
          netCashFromOperations: 256000000,
          capitalExpenditures: -180000000,
          acquisitions: -50000000,
          investmentPurchases: -25000000,
          investmentSales: 35000000,
          otherInvestingActivities: 15000000,
          netCashFromInvesting: -205000000,
          debtIssuance: 120000000,
          debtRepayment: -85000000,
          equityIssuance: 0,
          dividendsPaid: -100000000,
          shareRepurchases: -15000000,
          otherFinancingActivities: 0,
          netCashFromFinancing: -80000000,
          netCashFlow: -29000000,
          cashBeginningPeriod: 279000000,
          cashEndPeriod: 250000000,
          freeCashFlow: 76000000
        },
        period: '2024-Q4',
        fiscalYear: 2024,
        reportingCurrency: 'SAR'
      };

      // Create and run the analysis engine
      const engine = new FinancialAnalysisEngine([mockFinancialStatement], mockCompanyInfo);
      const result = await engine.executeComprehensiveAnalysis();

      setAnalysisResults(result.analyses);

      // Run AI Agents Analysis
      const financialData: FinancialData = {
        revenue: mockFinancialStatement.incomeStatement.revenue,
        netIncome: mockFinancialStatement.incomeStatement.netIncome,
        totalAssets: mockFinancialStatement.balanceSheet.totalAssets,
        totalLiabilities: mockFinancialStatement.balanceSheet.totalLiabilities,
        equity: mockFinancialStatement.balanceSheet.totalEquity,
        currentAssets: mockFinancialStatement.balanceSheet.totalCurrentAssets,
        currentLiabilities: mockFinancialStatement.balanceSheet.totalCurrentLiabilities,
        cash: mockFinancialStatement.balanceSheet.cash,
        inventory: mockFinancialStatement.balanceSheet.inventory,
        accountsReceivable: mockFinancialStatement.balanceSheet.accountsReceivable,
        longTermDebt: mockFinancialStatement.balanceSheet.longTermDebt,
        shortTermDebt: mockFinancialStatement.balanceSheet.shortTermDebt,
        operatingCashFlow: mockFinancialStatement.cashFlowStatement.netCashFromOperations,
        capex: Math.abs(mockFinancialStatement.cashFlowStatement.capitalExpenditures),
        dividends: mockFinancialStatement.cashFlowStatement.dividendsPaid ? Math.abs(mockFinancialStatement.cashFlowStatement.dividendsPaid) : 0,
        shares: mockFinancialStatement.incomeStatement.sharesOutstanding,
        marketCap: 15625000000, // 125M shares * 125 SAR per share
        stockPrice: 125
      };

      const agentResponses = agentManager.runAnalysis(financialData);
      setAgentResults(agentResponses);

      // Add to history
      const newAnalysis: AnalysisHistory = {
        id: Date.now().toString(),
        companyName: mockCompanyInfo.name,
        date: new Date().toISOString().split('T')[0],
        status: 'completed',
        analysisTypes: ['التحليل الشامل - 180 تحليل'],
        filesCount: uploadedFiles.length,
        results: result.analyses
      };

      setAnalysisHistory(prev => [newAnalysis, ...prev]);

    } catch (error) {
      console.error('خطأ في التحليل:', error);
      alert('حدث خطأ أثناء التحليل. يرجى المحاولة مرة أخرى.');
    } finally {
      setIsAnalyzing(false);
    }
  };

  const getStatusIcon = (status: string) => {
    switch (status) {
      case 'completed':
        return '✅';
      case 'processing':
        return '⏳';
      case 'failed':
        return '❌';
      default:
        return '❓';
    }
  };

  const getStatusText = (status: string) => {
    switch (status) {
      case 'completed':
        return 'مكتمل';
      case 'processing':
        return 'قيد المعالجة';
      case 'failed':
        return 'فشل';
      default:
        return 'غير معروف';
    }
  };

  const getStatusColor = (status: string) => {
    switch (status) {
      case 'completed':
        return 'bg-green-500';
      case 'processing':
        return 'bg-yellow-500';
      case 'failed':
        return 'bg-red-500';
      default:
        return 'bg-gray-500';
    }
  };

  return (
    <div className="min-h-screen bg-black">
      <div className="container mx-auto px-4 py-8">
        {/* Welcome Section */}
        <div className="mb-8">
          <div className="flex items-center justify-between mb-4">
            <div>
              <h1 className="text-3xl font-bold text-amber-500 animate-pulse">
                مرحباً، {user?.name}
              </h1>
              <p className="text-amber-600">لوحة التحكم - منصة التحليل المالي الذكية</p>
            </div>
            <div className="flex items-center gap-4">
              <div className={`px-3 py-1 rounded-full text-sm ${
                user?.subscriptionStatus === 'active' ? 'bg-green-500' :
                user?.subscriptionStatus === 'trial' ? 'bg-yellow-500' : 'bg-red-500'
              } text-white`}>
                {user?.subscriptionStatus === 'active' ? 'اشتراك نشط' :
                 user?.subscriptionStatus === 'trial' ? 'فترة تجريبية' : 'منتهي الصلاحية'}
              </div>
              {user?.type === 'guest' && (
                <div className="px-3 py-1 bg-blue-500 text-white rounded-full text-sm">
                  حساب ضيف
                </div>
              )}
            </div>
          </div>
        </div>

        {/* Quick Stats */}
        <div className="grid grid-cols-1 md:grid-cols-4 gap-6 mb-8">
          <Card className="bg-black border-amber-500 hover:border-yellow-400 transition-colors">
            <CardContent className="p-6 text-center">
              <div className="text-4xl mb-2">📄</div>
              <div className="text-2xl font-bold text-amber-500">{analysisHistory.length}</div>
              <div className="text-amber-600 text-sm">إجمالي التحليلات</div>
            </CardContent>
          </Card>

          <Card className="bg-black border-amber-500 hover:border-yellow-400 transition-colors">
            <CardContent className="p-6 text-center">
              <div className="text-4xl mb-2">✅</div>
              <div className="text-2xl font-bold text-amber-500">
                {analysisHistory.filter(a => a.status === 'completed').length}
              </div>
              <div className="text-amber-600 text-sm">تحليلات مكتملة</div>
            </CardContent>
          </Card>

          <Card className="bg-black border-amber-500 hover:border-yellow-400 transition-colors">
            <CardContent className="p-6 text-center">
              <div className="text-4xl mb-2">⏳</div>
              <div className="text-2xl font-bold text-amber-500">
                {analysisHistory.filter(a => a.status === 'processing').length}
              </div>
              <div className="text-amber-600 text-sm">قيد المعالجة</div>
            </CardContent>
          </Card>

          <Card className="bg-black border-amber-500 hover:border-yellow-400 transition-colors">
            <CardContent className="p-6 text-center">
              <div className="text-4xl mb-2">📈</div>
              <div className="text-2xl font-bold text-amber-500">180+</div>
              <div className="text-amber-600 text-sm">أنواع التحليل المتاحة</div>
            </CardContent>
          </Card>
        </div>

        {/* Main Content */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          {/* Left Column - File Upload and Analysis */}
          <div className="space-y-6">
            {/* File Upload */}
            <Card className="bg-black border-amber-500">
              <CardHeader>
                <CardTitle className="text-amber-500 flex items-center gap-2">
                  📁 رفع الملفات المالية
                </CardTitle>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  <input
                    type="file"
                    multiple
                    accept=".pdf,.xlsx,.xls,.csv"
                    onChange={handleFileUpload}
                    className="w-full p-3 border border-amber-500 rounded-lg bg-black text-amber-500 file:bg-amber-500 file:text-black file:border-0 file:rounded-md file:px-4 file:py-2 file:ml-4"
                  />
                  {uploadedFiles.length > 0 && (
                    <div className="space-y-2">
                      <p className="text-amber-500 font-semibold">الملفات المرفوعة:</p>
                      {uploadedFiles.map((file, index) => (
                        <div key={index} className="flex items-center gap-2 text-amber-600">
                          <span>📄</span>
                          <span>{file.name}</span>
                          <span className="text-sm">({(file.size / 1024 / 1024).toFixed(2)} MB)</span>
                        </div>
                      ))}
                    </div>
                  )}
                </div>
              </CardContent>
            </Card>

            {/* Analysis Options */}
            <Card className="bg-black border-amber-500">
              <CardHeader>
                <CardTitle className="text-amber-500 flex items-center gap-2">
                  ⚙️ خيارات التحليل
                </CardTitle>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  <div>
                    <label className="block text-amber-500 mb-2">اسم الشركة</label>
                    <input
                      type="text"
                      placeholder="ادخل اسم الشركة"
                      value={analysisOptions.companyName || ''}
                      onChange={(e) => setAnalysisOptions(prev => ({ ...prev, companyName: e.target.value }))}
                      className="w-full p-3 border border-amber-500 rounded-lg bg-black text-amber-500 placeholder-amber-600"
                    />
                  </div>

                  <div>
                    <label className="block text-amber-500 mb-2">القطاع</label>
                    <select
                      value={analysisOptions.sector || ''}
                      onChange={(e) => setAnalysisOptions(prev => ({ ...prev, sector: e.target.value }))}
                      className="w-full p-3 border border-amber-500 rounded-lg bg-black text-amber-500"
                    >
                      <option value="">اختر القطاع</option>
                      <option value="التقنية">التقنية</option>
                      <option value="المصارف">المصارف</option>
                      <option value="التجارة">التجارة</option>
                      <option value="الصناعة">الصناعة</option>
                      <option value="العقار">العقار</option>
                      <option value="الطاقة">الطاقة</option>
                    </select>
                  </div>

                  <div>
                    <label className="block text-amber-500 mb-2">نوع التحليل</label>
                    <select
                      value={analysisOptions.analysisType || 'comprehensive'}
                      onChange={(e) => setAnalysisOptions(prev => ({ ...prev, analysisType: e.target.value }))}
                      className="w-full p-3 border border-amber-500 rounded-lg bg-black text-amber-500"
                    >
                      <option value="comprehensive">التحليل الشامل (180 تحليل)</option>
                      <option value="basic">التحليل الأساسي</option>
                      <option value="advanced">التحليل المتقدم</option>
                      <option value="ratios">تحليل النسب المالية</option>
                      <option value="cashflow">تحليل التدفق النقدي</option>
                    </select>
                  </div>
                </div>
              </CardContent>
            </Card>

            {/* Start Analysis Button */}
            <Card className="bg-black border-amber-500">
              <CardContent className="p-6">
                <Button
                  onClick={handleStartAnalysis}
                  disabled={uploadedFiles.length === 0 || isAnalyzing}
                  className="w-full bg-amber-500 text-black hover:bg-amber-600 text-xl py-6 font-bold"
                >
                  {isAnalyzing ? (
                    <>⏳ جاري التحليل...</>
                  ) : (
                    <>✨ بدء التحليل المالي الذكي</>
                  )}
                </Button>
                {uploadedFiles.length === 0 && (
                  <p className="text-amber-600 text-sm text-center mt-2">
                    يرجى رفع الملفات المالية أولاً
                  </p>
                )}
              </CardContent>
            </Card>
          </div>

          {/* Right Column - Analysis History */}
          <div className="space-y-6">
            <Card className="bg-black border-amber-500">
              <CardHeader>
                <CardTitle className="text-amber-500 flex items-center gap-2">
                  📊 سجل التحليلات السابقة
                </CardTitle>
              </CardHeader>
              <CardContent>
                <div className="space-y-4 max-h-96 overflow-y-auto">
                  {analysisHistory.map((analysis) => (
                    <div
                      key={analysis.id}
                      className="p-4 bg-gray-900 border border-amber-600 rounded-lg hover:border-amber-500 transition-all"
                    >
                      <div className="flex items-start justify-between mb-3">
                        <div>
                          <h4 className="text-amber-500 font-semibold">{analysis.companyName}</h4>
                          <p className="text-amber-600 text-sm">{analysis.date}</p>
                        </div>
                        <div className="flex items-center gap-2">
                          <span>{getStatusIcon(analysis.status)}</span>
                          <div className={`px-2 py-1 rounded text-xs text-white ${getStatusColor(analysis.status)}`}>
                            {getStatusText(analysis.status)}
                          </div>
                        </div>
                      </div>

                      <div className="flex flex-wrap gap-2 mb-3">
                        {analysis.analysisTypes.map((type, index) => (
                          <div key={index} className="px-2 py-1 border border-amber-500 text-amber-500 rounded text-xs">
                            {type}
                          </div>
                        ))}
                      </div>

                      <div className="flex items-center justify-between">
                        <span className="text-amber-600 text-sm">{analysis.filesCount} ملفات</span>
                        <div className="flex gap-2">
                          {analysis.status === 'completed' && (
                            <>
                              <Button
                                variant="ghost"
                                size="sm"
                                className="text-amber-500 hover:bg-amber-500 hover:text-black"
                              >
                                👁️
                              </Button>
                              <Button
                                variant="ghost"
                                size="sm"
                                className="text-amber-500 hover:bg-amber-500 hover:text-black"
                              >
                                📥
                              </Button>
                            </>
                          )}
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>

            {/* Quick Actions */}
            <Card className="bg-black border-amber-500">
              <CardHeader>
                <CardTitle className="text-amber-500">إجراءات سريعة</CardTitle>
              </CardHeader>
              <CardContent className="space-y-3">
                <Button
                  variant="outline"
                  className="w-full justify-start border-amber-500 text-amber-500 hover:bg-amber-500 hover:text-black bg-transparent"
                >
                  📄 تحميل قالب القوائم المالية
                </Button>
                <Button
                  variant="outline"
                  className="w-full justify-start border-amber-500 text-amber-500 hover:bg-amber-500 hover:text-black bg-transparent"
                >
                  ▶️ مشاهدة فيديو تعليمي
                </Button>
                <Button
                  variant="outline"
                  className="w-full justify-start border-amber-500 text-amber-500 hover:bg-amber-500 hover:text-black bg-transparent"
                >
                  📈 عرض أمثلة التحليلات
                </Button>
              </CardContent>
            </Card>
          </div>
        </div>

        {/* Analysis Results */}
        {analysisResults.length > 0 && (
          <div className="mt-8">
            <Card className="bg-black border-amber-500">
              <CardHeader>
                <CardTitle className="text-amber-500 flex items-center gap-2">
                  📈 نتائج التحليل الأخير
                </CardTitle>
              </CardHeader>
              <CardContent>
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
                  {analysisResults.slice(0, 9).map((result, index) => (
                    <div
                      key={index}
                      className="p-4 bg-gray-900 border border-amber-600 rounded-lg"
                    >
                      <h4 className="text-amber-500 font-semibold text-sm mb-2">
                        {result.arabicName}
                      </h4>
                      <p className="text-amber-400 text-lg font-bold">
                        {typeof result.value === 'number' ? result.value.toFixed(2) : result.value}
                      </p>
                      <div className={`inline-block px-2 py-1 rounded text-xs mt-2 ${
                        result.rating === 'excellent' ? 'bg-green-500' :
                        result.rating === 'very_good' ? 'bg-blue-500' :
                        result.rating === 'good' ? 'bg-yellow-500' :
                        result.rating === 'acceptable' ? 'bg-orange-500' : 'bg-red-500'
                      } text-white`}>
                        {result.rating === 'excellent' ? 'ممتاز' :
                         result.rating === 'very_good' ? 'جيد جداً' :
                         result.rating === 'good' ? 'جيد' :
                         result.rating === 'acceptable' ? 'مقبول' : 'ضعيف'}
                      </div>
                    </div>
                  ))}
                </div>
                {analysisResults.length > 9 && (
                  <div className="text-center mt-4">
                    <Button
                      variant="outline"
                      className="border-amber-500 text-amber-500 hover:bg-amber-500 hover:text-black"
                    >
                      عرض جميع النتائج ({analysisResults.length} تحليل)
                    </Button>
                  </div>
                )}
              </CardContent>
            </Card>
          </div>
        )}

        {/* AI Agents Analysis Results */}
        {agentResults.length > 0 && (
          <div className="mt-8">
            <Card className="bg-black border-amber-500">
              <CardHeader>
                <CardTitle className="text-amber-500 flex items-center gap-2">
                  🤖 تحليل الوكلاء الذكية (23 وكيل)
                </CardTitle>
              </CardHeader>
              <CardContent>
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
                  {agentResults.map((result, index) => (
                    <div
                      key={index}
                      className="p-4 bg-gray-900 border border-amber-600 rounded-lg hover:border-amber-500 transition-all"
                    >
                      <div className="flex items-center justify-between mb-3">
                        <h4 className="text-amber-500 font-semibold text-sm">
                          {result.agentName}
                        </h4>
                        <div className={`w-3 h-3 rounded-full ${
                          result.riskLevel === 'low' ? 'bg-green-400' :
                          result.riskLevel === 'medium' ? 'bg-yellow-400' : 'bg-red-400'
                        }`}></div>
                      </div>

                      <p className="text-amber-400 text-lg font-bold mb-2">
                        {result.value}
                      </p>

                      <p className="text-gray-300 text-xs mb-3 leading-relaxed">
                        {result.interpretation}
                      </p>

                      <div className="flex items-center justify-between text-xs">
                        <span className={`px-2 py-1 rounded ${
                          result.riskLevel === 'low' ? 'bg-green-500' :
                          result.riskLevel === 'medium' ? 'bg-yellow-500' : 'bg-red-500'
                        } text-white`}>
                          {result.riskLevel === 'low' ? 'مخاطر منخفضة' :
                           result.riskLevel === 'medium' ? 'مخاطر متوسطة' : 'مخاطر عالية'}
                        </span>
                        <span className="text-amber-600">
                          ثقة: {(result.confidence * 100).toFixed(0)}%
                        </span>
                      </div>
                    </div>
                  ))}
                </div>

                <div className="mt-6 p-4 bg-gray-900 border border-amber-600 rounded-lg">
                  <h5 className="text-amber-500 font-semibold mb-3">📊 ملخص الوكلاء الذكية</h5>
                  <div className="grid grid-cols-2 md:grid-cols-5 gap-4 text-center">
                    <div>
                      <div className="text-2xl font-bold text-green-400">
                        {agentResults.filter(r => r.riskLevel === 'low').length}
                      </div>
                      <div className="text-xs text-gray-400">مخاطر منخفضة</div>
                    </div>
                    <div>
                      <div className="text-2xl font-bold text-yellow-400">
                        {agentResults.filter(r => r.riskLevel === 'medium').length}
                      </div>
                      <div className="text-xs text-gray-400">مخاطر متوسطة</div>
                    </div>
                    <div>
                      <div className="text-2xl font-bold text-red-400">
                        {agentResults.filter(r => r.riskLevel === 'high').length}
                      </div>
                      <div className="text-xs text-gray-400">مخاطر عالية</div>
                    </div>
                    <div>
                      <div className="text-2xl font-bold text-amber-400">
                        {agents.length}
                      </div>
                      <div className="text-xs text-gray-400">إجمالي الوكلاء</div>
                    </div>
                    <div>
                      <div className="text-2xl font-bold text-blue-400">
                        {(agentResults.reduce((sum, r) => sum + r.confidence, 0) / agentResults.length * 100).toFixed(0)}%
                      </div>
                      <div className="text-xs text-gray-400">متوسط الثقة</div>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        )}
      </div>
    </div>
  );
};