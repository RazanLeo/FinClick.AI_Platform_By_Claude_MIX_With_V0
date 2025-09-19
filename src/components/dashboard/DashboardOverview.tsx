/**
 * Dashboard Overview Component - FinClick.AI Platform
 * نظرة عامة على لوحة المعلومات
 */

import React, { useState, useEffect } from 'react';
import { Card, CardContent, CardHeader, CardTitle } from '../ui/Card';
import { Badge } from '../ui/Badge';
import { LoadingSpinner } from '../ui/LoadingSpinner';
import {
  TrendingUp,
  TrendingDown,
  DollarSign,
  BarChart3,
  PieChart,
  Activity,
  AlertTriangle,
  CheckCircle,
  Eye,
  Download,
  Calendar,
  Users,
} from 'lucide-react';

interface DashboardData {
  user: {
    name: string;
    subscription: {
      plan: string;
      daysRemaining: number;
    };
  };
  usage: {
    analysesThisMonth: number;
    analysesLimit: number;
    reportsGenerated: number;
    lastAnalysisDate: string;
  };
  recentAnalyses: Array<{
    id: string;
    type: string;
    company: string;
    date: string;
    result: 'positive' | 'negative' | 'neutral';
    score: number;
  }>;
  insights: Array<{
    id: string;
    type: 'warning' | 'success' | 'info';
    title: string;
    description: string;
    actionRequired: boolean;
  }>;
  marketTrends: {
    saudiIndex: {
      value: number;
      change: number;
      changePercent: number;
    };
    bankingIndex: {
      value: number;
      change: number;
      changePercent: number;
    };
  };
}

const DashboardOverview: React.FC = () => {
  const [dashboardData, setDashboardData] = useState<DashboardData | null>(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    // محاكاة تحميل البيانات
    const loadDashboardData = async () => {
      setLoading(true);
      await new Promise(resolve => setTimeout(resolve, 1500));

      const mockData: DashboardData = {
        user: {
          name: 'أحمد محمد',
          subscription: {
            plan: 'Professional',
            daysRemaining: 15,
          },
        },
        usage: {
          analysesThisMonth: 45,
          analysesLimit: 200,
          reportsGenerated: 12,
          lastAnalysisDate: '2024-01-15',
        },
        recentAnalyses: [
          {
            id: '1',
            type: 'liquidity',
            company: 'شركة الاتصالات السعودية',
            date: '2024-01-15',
            result: 'positive',
            score: 85,
          },
          {
            id: '2',
            type: 'profitability',
            company: 'البنك الأهلي السعودي',
            date: '2024-01-14',
            result: 'positive',
            score: 92,
          },
          {
            id: '3',
            type: 'risk',
            company: 'أرامكو السعودية',
            date: '2024-01-13',
            result: 'neutral',
            score: 78,
          },
          {
            id: '4',
            type: 'efficiency',
            company: 'شركة سابك',
            date: '2024-01-12',
            result: 'negative',
            score: 45,
          },
        ],
        insights: [
          {
            id: '1',
            type: 'warning',
            title: 'انخفاض في مؤشرات السيولة',
            description: 'تحتاج 3 شركات في محفظتك إلى مراجعة وضع السيولة',
            actionRequired: true,
          },
          {
            id: '2',
            type: 'success',
            title: 'أداء ربحية ممتاز',
            description: 'حققت شركتان في محفظتك نمواً في الأرباح بنسبة 15%+',
            actionRequired: false,
          },
          {
            id: '3',
            type: 'info',
            title: 'تحديث معايير الصناعة',
            description: 'تم تحديث معايير صناعة البتروكيماويات',
            actionRequired: false,
          },
        ],
        marketTrends: {
          saudiIndex: {
            value: 11245.67,
            change: 125.34,
            changePercent: 1.13,
          },
          bankingIndex: {
            value: 4567.89,
            change: -23.45,
            changePercent: -0.51,
          },
        },
      };

      setDashboardData(mockData);
      setLoading(false);
    };

    loadDashboardData();
  }, []);

  const getAnalysisTypeLabel = (type: string) => {
    const labels: Record<string, string> = {
      liquidity: 'السيولة',
      profitability: 'الربحية',
      efficiency: 'الكفاءة',
      leverage: 'الرافعة المالية',
      market: 'السوق',
      risk: 'المخاطر',
      growth: 'النمو',
      cashFlow: 'التدفق النقدي',
      valuation: 'التقييم',
    };
    return labels[type] || type;
  };

  const getResultBadgeVariant = (result: string) => {
    switch (result) {
      case 'positive':
        return 'success';
      case 'negative':
        return 'destructive';
      default:
        return 'secondary';
    }
  };

  const getResultIcon = (result: string) => {
    switch (result) {
      case 'positive':
        return <TrendingUp className=\"w-4 h-4\" />;
      case 'negative':
        return <TrendingDown className=\"w-4 h-4\" />;
      default:
        return <Activity className=\"w-4 h-4\" />;
    }
  };

  const getInsightIcon = (type: string) => {
    switch (type) {
      case 'warning':
        return <AlertTriangle className=\"w-5 h-5 text-orange-500\" />;
      case 'success':
        return <CheckCircle className=\"w-5 h-5 text-green-500\" />;
      default:
        return <Eye className=\"w-5 h-5 text-blue-500\" />;
    }
  };

  const formatDate = (dateString: string) => {
    return new Date(dateString).toLocaleDateString('ar-SA', {
      year: 'numeric',
      month: 'long',
      day: 'numeric',
    });
  };

  const formatNumber = (num: number) => {
    return new Intl.NumberFormat('ar-SA').format(num);
  };

  if (loading) {
    return (
      <div className=\"min-h-screen flex items-center justify-center\">
        <div className=\"text-center\">
          <LoadingSpinner size=\"lg\" />
          <p className=\"mt-4 text-gray-600\">جاري تحميل لوحة المعلومات...</p>
        </div>
      </div>
    );
  }

  if (!dashboardData) {
    return (
      <div className=\"min-h-screen flex items-center justify-center\">
        <p className=\"text-gray-600\">فشل في تحميل البيانات</p>
      </div>
    );
  }

  return (
    <div className=\"space-y-6 p-6 bg-gray-50 min-h-screen\" dir=\"rtl\">
      <div className=\"max-w-7xl mx-auto\">
        {/* Welcome Header */}
        <div className=\"mb-8\">
          <h1 className=\"text-3xl font-bold text-gray-900 mb-2\">
            مرحباً، {dashboardData.user.name}
          </h1>
          <p className=\"text-gray-600\">
            إليك نظرة عامة على أنشطتك المالية وتحليلاتك الحديثة
          </p>
        </div>

        {/* Top Stats Cards */}
        <div className=\"grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-8\">
          <Card>
            <CardContent className=\"p-6\">
              <div className=\"flex items-center justify-between\">
                <div>
                  <p className=\"text-sm font-medium text-gray-600\">التحليلات هذا الشهر</p>
                  <p className=\"text-2xl font-bold text-gray-900\">
                    {formatNumber(dashboardData.usage.analysesThisMonth)}
                  </p>
                  <p className=\"text-xs text-gray-500\">
                    من أصل {formatNumber(dashboardData.usage.analysesLimit)}
                  </p>
                </div>
                <BarChart3 className=\"w-8 h-8 text-blue-500\" />
              </div>
              <div className=\"mt-4 w-full bg-gray-200 rounded-full h-2\">
                <div
                  className=\"bg-blue-500 h-2 rounded-full\"
                  style={{
                    width: `${(dashboardData.usage.analysesThisMonth / dashboardData.usage.analysesLimit) * 100}%`,
                  }}
                ></div>
              </div>
            </CardContent>
          </Card>

          <Card>
            <CardContent className=\"p-6\">
              <div className=\"flex items-center justify-between\">
                <div>
                  <p className=\"text-sm font-medium text-gray-600\">التقارير المولدة</p>
                  <p className=\"text-2xl font-bold text-gray-900\">
                    {formatNumber(dashboardData.usage.reportsGenerated)}
                  </p>
                  <p className=\"text-xs text-gray-500\">هذا الشهر</p>
                </div>
                <Download className=\"w-8 h-8 text-green-500\" />
              </div>
            </CardContent>
          </Card>

          <Card>
            <CardContent className=\"p-6\">
              <div className=\"flex items-center justify-between\">
                <div>
                  <p className=\"text-sm font-medium text-gray-600\">الخطة الحالية</p>
                  <p className=\"text-2xl font-bold text-gray-900\">
                    {dashboardData.user.subscription.plan}
                  </p>
                  <p className=\"text-xs text-gray-500\">
                    {dashboardData.user.subscription.daysRemaining} يوم متبقي
                  </p>
                </div>
                <Users className=\"w-8 h-8 text-purple-500\" />
              </div>
            </CardContent>
          </Card>

          <Card>
            <CardContent className=\"p-6\">
              <div className=\"flex items-center justify-between\">
                <div>
                  <p className=\"text-sm font-medium text-gray-600\">آخر تحليل</p>
                  <p className=\"text-2xl font-bold text-gray-900\">
                    {formatDate(dashboardData.usage.lastAnalysisDate)}
                  </p>
                </div>
                <Calendar className=\"w-8 h-8 text-orange-500\" />
              </div>
            </CardContent>
          </Card>
        </div>

        <div className=\"grid grid-cols-1 lg:grid-cols-3 gap-6\">
          {/* Recent Analyses */}
          <div className=\"lg:col-span-2\">
            <Card>
              <CardHeader>
                <CardTitle className=\"flex items-center space-x-2 space-x-reverse\">
                  <BarChart3 className=\"w-5 h-5\" />
                  <span>التحليلات الحديثة</span>
                </CardTitle>
              </CardHeader>
              <CardContent>
                <div className=\"space-y-4\">
                  {dashboardData.recentAnalyses.map((analysis) => (
                    <div
                      key={analysis.id}
                      className=\"flex items-center justify-between p-4 bg-gray-50 rounded-lg\"
                    >
                      <div className=\"flex items-center space-x-3 space-x-reverse\">
                        <div className=\"p-2 bg-white rounded-lg\">
                          {getResultIcon(analysis.result)}
                        </div>
                        <div>
                          <p className=\"font-medium text-gray-900\">
                            {getAnalysisTypeLabel(analysis.type)} - {analysis.company}
                          </p>
                          <p className=\"text-sm text-gray-500\">{formatDate(analysis.date)}</p>
                        </div>
                      </div>
                      <div className=\"flex items-center space-x-2 space-x-reverse\">
                        <Badge variant={getResultBadgeVariant(analysis.result)}>
                          {analysis.score}%
                        </Badge>
                        <button className=\"text-blue-600 hover:text-blue-700 text-sm font-medium\">
                          عرض
                        </button>
                      </div>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>
          </div>

          {/* Insights & Market Trends */}
          <div className=\"space-y-6\">
            {/* Insights */}
            <Card>
              <CardHeader>
                <CardTitle className=\"flex items-center space-x-2 space-x-reverse\">
                  <Eye className=\"w-5 h-5\" />
                  <span>رؤى ذكية</span>
                </CardTitle>
              </CardHeader>
              <CardContent>
                <div className=\"space-y-4\">
                  {dashboardData.insights.map((insight) => (
                    <div
                      key={insight.id}
                      className=\"flex items-start space-x-3 space-x-reverse p-3 bg-gray-50 rounded-lg\"
                    >
                      {getInsightIcon(insight.type)}
                      <div className=\"flex-1 min-w-0\">
                        <p className=\"font-medium text-gray-900 text-sm\">{insight.title}</p>
                        <p className=\"text-xs text-gray-600 mt-1\">{insight.description}</p>
                        {insight.actionRequired && (
                          <button className=\"text-blue-600 hover:text-blue-700 text-xs font-medium mt-2\">
                            اتخاذ إجراء
                          </button>
                        )}
                      </div>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>

            {/* Market Trends */}
            <Card>
              <CardHeader>
                <CardTitle className=\"flex items-center space-x-2 space-x-reverse\">
                  <TrendingUp className=\"w-5 h-5\" />
                  <span>اتجاهات السوق</span>
                </CardTitle>
              </CardHeader>
              <CardContent>
                <div className=\"space-y-4\">
                  <div className=\"flex items-center justify-between p-3 bg-gray-50 rounded-lg\">
                    <div>
                      <p className=\"font-medium text-gray-900\">المؤشر العام السعودي</p>
                      <p className=\"text-2xl font-bold text-gray-900\">
                        {formatNumber(dashboardData.marketTrends.saudiIndex.value)}
                      </p>
                    </div>
                    <div className=\"text-left\">
                      <p
                        className={`text-sm font-medium ${
                          dashboardData.marketTrends.saudiIndex.change >= 0
                            ? 'text-green-600'
                            : 'text-red-600'
                        }`}
                      >
                        {dashboardData.marketTrends.saudiIndex.change >= 0 ? '+' : ''}
                        {formatNumber(dashboardData.marketTrends.saudiIndex.change)}
                      </p>
                      <p
                        className={`text-xs ${
                          dashboardData.marketTrends.saudiIndex.changePercent >= 0
                            ? 'text-green-600'
                            : 'text-red-600'
                        }`}
                      >
                        ({dashboardData.marketTrends.saudiIndex.changePercent >= 0 ? '+' : ''}
                        {dashboardData.marketTrends.saudiIndex.changePercent.toFixed(2)}%)
                      </p>
                    </div>
                  </div>

                  <div className=\"flex items-center justify-between p-3 bg-gray-50 rounded-lg\">
                    <div>
                      <p className=\"font-medium text-gray-900\">مؤشر البنوك</p>
                      <p className=\"text-2xl font-bold text-gray-900\">
                        {formatNumber(dashboardData.marketTrends.bankingIndex.value)}
                      </p>
                    </div>
                    <div className=\"text-left\">
                      <p
                        className={`text-sm font-medium ${
                          dashboardData.marketTrends.bankingIndex.change >= 0
                            ? 'text-green-600'
                            : 'text-red-600'
                        }`}
                      >
                        {dashboardData.marketTrends.bankingIndex.change >= 0 ? '+' : ''}
                        {formatNumber(dashboardData.marketTrends.bankingIndex.change)}
                      </p>
                      <p
                        className={`text-xs ${
                          dashboardData.marketTrends.bankingIndex.changePercent >= 0
                            ? 'text-green-600'
                            : 'text-red-600'
                        }`}
                      >
                        ({dashboardData.marketTrends.bankingIndex.changePercent >= 0 ? '+' : ''}
                        {dashboardData.marketTrends.bankingIndex.changePercent.toFixed(2)}%)
                      </p>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </div>
  );
};

export default DashboardOverview;