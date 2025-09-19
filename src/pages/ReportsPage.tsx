/**
 * Reports Page - FinClick.AI Platform
 * صفحة التقارير
 */

import React, { useState } from 'react';
import { Header } from '../components/layout/Header';
import { Button } from '../components/ui/button';
import { Card, CardHeader, CardTitle, CardDescription, CardContent } from '../components/ui/card';

interface User {
  name: string;
  type: 'user' | 'admin' | 'guest';
  subscriptionStatus: 'active' | 'trial' | 'inactive';
}

interface Report {
  id: string;
  title: string;
  company: string;
  type: string;
  date: string;
  status: 'completed' | 'pending' | 'failed';
  analysisCount: number;
  downloadUrl?: string;
}

const ReportsPage: React.FC = () => {
  // Mock user data
  const [user] = useState<User>({
    name: 'أحمد محمد',
    type: 'user',
    subscriptionStatus: 'active'
  });

  // Mock reports data
  const [reports] = useState<Report[]>([
    {
      id: '1',
      title: 'تحليل شامل للسيولة والربحية',
      company: 'الشركة السعودية للصناعات الأساسية (سابك)',
      type: 'تحليل شامل',
      date: '2024-01-15',
      status: 'completed',
      analysisCount: 45,
      downloadUrl: '/reports/sabic-comprehensive-2024.pdf'
    },
    {
      id: '2',
      title: 'تقرير المخاطر المالية',
      company: 'أرامكو السعودية',
      type: 'تحليل المخاطر',
      date: '2024-01-14',
      status: 'completed',
      analysisCount: 23,
      downloadUrl: '/reports/aramco-risk-2024.pdf'
    },
    {
      id: '3',
      title: 'تحليل الأداء التشغيلي',
      company: 'البنك الأهلي التجاري',
      type: 'تحليل العمليات',
      date: '2024-01-13',
      status: 'pending',
      analysisCount: 0
    }
  ]);

  const handleLogout = () => {
    console.log('User logged out');
  };

  const handleDownload = (report: Report) => {
    if (report.downloadUrl) {
      console.log('Downloading report:', report.downloadUrl);
      // In real app, this would trigger file download
      alert(`تحميل التقرير: ${report.title}`);
    }
  };

  const getStatusColor = (status: Report['status']) => {
    switch (status) {
      case 'completed':
        return 'text-green-400';
      case 'pending':
        return 'text-yellow-400';
      case 'failed':
        return 'text-red-400';
      default:
        return 'text-gray-400';
    }
  };

  const getStatusText = (status: Report['status']) => {
    switch (status) {
      case 'completed':
        return 'مكتمل';
      case 'pending':
        return 'قيد المعالجة';
      case 'failed':
        return 'فشل';
      default:
        return 'غير معروف';
    }
  };

  return (
    <div className="min-h-screen bg-black text-amber-500" dir="rtl">
      <Header user={user} onLogout={handleLogout} />

      {/* Stock Ticker */}
      <div className="bg-gray-900 border-t border-amber-500/20 py-2 overflow-hidden">
        <div className="animate-scroll whitespace-nowrap">
          <span className="text-amber-500 mx-8">📈 TADAWUL: +1.2%</span>
          <span className="text-green-400 mx-8">🏦 البنك الأهلي: 45.80 (+2.1%)</span>
          <span className="text-red-400 mx-8">⚡ أرامكو: 28.50 (-0.8%)</span>
          <span className="text-green-400 mx-8">🏭 سابك: 89.20 (+1.5%)</span>
          <span className="text-amber-500 mx-8">💎 معادن: 52.30 (+0.9%)</span>
        </div>
      </div>

      {/* Reports Section */}
      <section className="py-8 px-4">
        <div className="max-w-7xl mx-auto">
          {/* Header */}
          <div className="mb-8">
            <h1 className="text-3xl font-bold text-amber-500 mb-2">📄 التقارير المالية</h1>
            <p className="text-gray-300">
              عرض وإدارة جميع التقارير المالية التي تم إنشاؤها بواسطة منصة FinClick.AI
            </p>
          </div>

          {/* Stats Overview */}
          <div className="grid grid-cols-1 md:grid-cols-4 gap-6 mb-8">
            <Card className="p-6">
              <div className="text-2xl font-bold text-amber-500 mb-2">3</div>
              <div className="text-sm text-gray-300">إجمالي التقارير</div>
            </Card>
            <Card className="p-6">
              <div className="text-2xl font-bold text-green-400 mb-2">2</div>
              <div className="text-sm text-gray-300">تقارير مكتملة</div>
            </Card>
            <Card className="p-6">
              <div className="text-2xl font-bold text-yellow-400 mb-2">1</div>
              <div className="text-sm text-gray-300">قيد المعالجة</div>
            </Card>
            <Card className="p-6">
              <div className="text-2xl font-bold text-amber-500 mb-2">68</div>
              <div className="text-sm text-gray-300">إجمالي التحليلات</div>
            </Card>
          </div>

          {/* Filters and Actions */}
          <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-4 mb-6">
            <div className="flex gap-4">
              <select className="px-4 py-2 bg-black border border-amber-500/30 rounded-lg text-amber-500 focus:outline-none focus:ring-2 focus:ring-amber-500">
                <option value="">جميع الأنواع</option>
                <option value="comprehensive">تحليل شامل</option>
                <option value="risk">تحليل المخاطر</option>
                <option value="operations">تحليل العمليات</option>
              </select>
              <select className="px-4 py-2 bg-black border border-amber-500/30 rounded-lg text-amber-500 focus:outline-none focus:ring-2 focus:ring-amber-500">
                <option value="">جميع الحالات</option>
                <option value="completed">مكتمل</option>
                <option value="pending">قيد المعالجة</option>
                <option value="failed">فشل</option>
              </select>
            </div>
            <Button className="bg-gradient-to-r from-amber-500 to-yellow-500 text-black">
              📊 إنشاء تقرير جديد
            </Button>
          </div>

          {/* Reports List */}
          <div className="space-y-4">
            {reports.map((report) => (
              <Card key={report.id} className="p-6 hover:border-amber-500/50 transition-all">
                <div className="flex flex-col lg:flex-row justify-between items-start lg:items-center gap-4">
                  {/* Report Info */}
                  <div className="flex-1">
                    <div className="flex items-center gap-3 mb-2">
                      <h3 className="text-xl font-bold text-amber-500">{report.title}</h3>
                      <span className={`text-sm font-medium ${getStatusColor(report.status)}`}>
                        {getStatusText(report.status)}
                      </span>
                    </div>
                    <p className="text-gray-300 mb-2">{report.company}</p>
                    <div className="flex flex-wrap items-center gap-4 text-sm text-gray-400">
                      <span>📅 {new Date(report.date).toLocaleDateString('ar-SA')}</span>
                      <span>🏷️ {report.type}</span>
                      <span>📊 {report.analysisCount} تحليل</span>
                    </div>
                  </div>

                  {/* Actions */}
                  <div className="flex gap-2">
                    {report.status === 'completed' && (
                      <>
                        <Button
                          variant="outline"
                          size="sm"
                          onClick={() => handleDownload(report)}
                        >
                          📥 تحميل PDF
                        </Button>
                        <Button variant="outline" size="sm">
                          👁️ عرض
                        </Button>
                      </>
                    )}
                    {report.status === 'pending' && (
                      <Button variant="outline" size="sm" disabled>
                        ⏳ قيد المعالجة...
                      </Button>
                    )}
                    <Button variant="ghost" size="sm" className="text-red-400 hover:text-red-300">
                      🗑️ حذف
                    </Button>
                  </div>
                </div>
              </Card>
            ))}
          </div>

          {/* Empty State */}
          {reports.length === 0 && (
            <Card className="p-12 text-center">
              <div className="text-6xl mb-4">📄</div>
              <h3 className="text-xl font-bold text-amber-500 mb-2">لا توجد تقارير حتى الآن</h3>
              <p className="text-gray-300 mb-6">
                ابدأ بإنشاء تقريرك الأول باستخدام محرك التحليل المالي الذكي
              </p>
              <Button className="bg-gradient-to-r from-amber-500 to-yellow-500 text-black">
                📊 إنشاء أول تقرير
              </Button>
            </Card>
          )}

          {/* Report Templates */}
          <div className="mt-12">
            <h2 className="text-2xl font-bold text-amber-500 mb-6">📋 قوالب التقارير المتاحة</h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              <Card className="p-6 hover:border-amber-500/50 transition-all cursor-pointer">
                <CardHeader>
                  <div className="w-12 h-12 bg-gradient-to-r from-blue-500 to-blue-600 rounded-lg flex items-center justify-center mb-4">
                    <span className="text-white font-bold">💧</span>
                  </div>
                  <CardTitle className="text-lg text-amber-500">تحليل السيولة</CardTitle>
                  <CardDescription className="text-gray-300">
                    15 تحليل متخصص في السيولة المالية والتدفقات النقدية
                  </CardDescription>
                </CardHeader>
              </Card>

              <Card className="p-6 hover:border-amber-500/50 transition-all cursor-pointer">
                <CardHeader>
                  <div className="w-12 h-12 bg-gradient-to-r from-green-500 to-green-600 rounded-lg flex items-center justify-center mb-4">
                    <span className="text-white font-bold">📈</span>
                  </div>
                  <CardTitle className="text-lg text-amber-500">تحليل الربحية</CardTitle>
                  <CardDescription className="text-gray-300">
                    25 تحليل شامل للأرباح والعوائد ومؤشرات الأداء المالي
                  </CardDescription>
                </CardHeader>
              </Card>

              <Card className="p-6 hover:border-amber-500/50 transition-all cursor-pointer">
                <CardHeader>
                  <div className="w-12 h-12 bg-gradient-to-r from-red-500 to-red-600 rounded-lg flex items-center justify-center mb-4">
                    <span className="text-white font-bold">🛡️</span>
                  </div>
                  <CardTitle className="text-lg text-amber-500">تحليل المخاطر</CardTitle>
                  <CardDescription className="text-gray-300">
                    21 تحليل متطور لإدارة المخاطر المالية والائتمانية
                  </CardDescription>
                </CardHeader>
              </Card>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-black border-t border-amber-500/20 py-8 px-4">
        <div className="max-w-7xl mx-auto text-center">
          <div className="flex items-center justify-center mb-4">
            <div className="w-8 h-8 bg-gradient-to-r from-amber-500 to-yellow-500 rounded-lg flex items-center justify-center">
              <span className="text-black font-bold">Fi</span>
            </div>
            <span className="mr-2 text-lg font-bold text-amber-500">FinClick.AI</span>
          </div>
          <p className="text-gray-400 text-sm">
            © 2024 FinClick.AI. جميع الحقوق محفوظة.
          </p>
        </div>
      </footer>
    </div>
  );
};

export default ReportsPage;