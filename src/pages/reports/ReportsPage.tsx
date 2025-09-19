import React, { useState } from 'react';

const ReportsPage: React.FC = () => {
  const [searchQuery, setSearchQuery] = useState('');

  const mockReports = [
    {
      id: '1',
      title: 'تحليل شامل - شركة النقل المتطور',
      type: 'comprehensive',
      status: 'completed',
      date: '2024-01-15',
      fileSize: '2.3 MB',
      format: 'PDF'
    },
    {
      id: '2',
      title: 'تحليل السيولة - شركة الخدمات المالية',
      type: 'liquidity',
      status: 'completed',
      date: '2024-01-14',
      fileSize: '1.8 MB',
      format: 'Excel'
    },
    {
      id: '3',
      title: 'تحليل المخاطر - شركة الاستثمار',
      type: 'risk',
      status: 'processing',
      date: '2024-01-13',
      fileSize: 'جاري المعالجة...',
      format: 'PDF'
    }
  ];

  const getStatusColor = (status: string) => {
    switch (status) {
      case 'completed': return 'text-green-400 bg-green-500/20';
      case 'processing': return 'text-yellow-400 bg-yellow-500/20';
      case 'failed': return 'text-red-400 bg-red-500/20';
      default: return 'text-gray-400 bg-gray-500/20';
    }
  };

  const handleDownload = (reportId: string) => {
    alert(`تحميل التقرير ${reportId}`);
  };

  return (
    <div className="min-h-screen bg-black text-amber-500 p-6" dir="rtl">
      <div className="max-w-7xl mx-auto">
        <div className="mb-8">
          <h1 className="text-3xl font-bold text-amber-500 mb-2">التقارير المالية</h1>
          <p className="text-gray-400">إدارة وتحميل جميع تقاريرك المالية</p>
        </div>

        {/* Stats Cards */}
        <div className="grid grid-cols-1 md:grid-cols-4 gap-6 mb-8">
          <div className="bg-black/50 border border-amber-500/30 rounded-xl p-6">
            <div className="text-2xl font-bold text-amber-500 mb-2">{mockReports.length}</div>
            <div className="text-gray-400">إجمالي التقارير</div>
          </div>
          <div className="bg-black/50 border border-amber-500/30 rounded-xl p-6">
            <div className="text-2xl font-bold text-green-400">
              {mockReports.filter(r => r.status === 'completed').length}
            </div>
            <div className="text-gray-400">مكتملة</div>
          </div>
          <div className="bg-black/50 border border-amber-500/30 rounded-xl p-6">
            <div className="text-2xl font-bold text-yellow-400">
              {mockReports.filter(r => r.status === 'processing').length}
            </div>
            <div className="text-gray-400">قيد المعالجة</div>
          </div>
          <div className="bg-black/50 border border-amber-500/30 rounded-xl p-6">
            <div className="text-2xl font-bold text-purple-400">3</div>
            <div className="text-gray-400">هذا الشهر</div>
          </div>
        </div>

        {/* Search */}
        <div className="bg-black/50 border border-amber-500/30 rounded-xl p-6 mb-8">
          <div className="flex gap-4 items-center">
            <input
              type="text"
              placeholder="البحث في التقارير..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="flex-1 px-4 py-3 bg-black/50 border border-amber-500/30 rounded-lg text-amber-500 placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-amber-500"
            />
            <select className="px-4 py-3 bg-black/50 border border-amber-500/30 rounded-lg text-amber-500">
              <option>جميع الأنواع</option>
              <option>تحليل شامل</option>
              <option>تحليل السيولة</option>
              <option>تحليل المخاطر</option>
            </select>
          </div>
        </div>

        {/* Reports Table */}
        <div className="bg-black/50 border border-amber-500/30 rounded-xl overflow-hidden">
          <div className="p-6 border-b border-amber-500/20">
            <h2 className="text-xl font-bold text-amber-500">التقارير المحفوظة</h2>
          </div>

          <div className="overflow-x-auto">
            <table className="w-full">
              <thead className="bg-amber-500/5">
                <tr>
                  <th className="text-right p-4 text-amber-500 font-semibold">التقرير</th>
                  <th className="text-right p-4 text-amber-500 font-semibold">النوع</th>
                  <th className="text-right p-4 text-amber-500 font-semibold">الحالة</th>
                  <th className="text-right p-4 text-amber-500 font-semibold">التاريخ</th>
                  <th className="text-right p-4 text-amber-500 font-semibold">الحجم</th>
                  <th className="text-center p-4 text-amber-500 font-semibold">الإجراءات</th>
                </tr>
              </thead>
              <tbody>
                {mockReports.map((report) => (
                  <tr key={report.id} className="border-b border-amber-500/10 hover:bg-amber-500/5">
                    <td className="p-4">
                      <div className="flex items-center">
                        <div className="text-xl ml-3">📄</div>
                        <div>
                          <p className="font-medium text-amber-500">{report.title}</p>
                          <p className="text-sm text-gray-400">{report.format}</p>
                        </div>
                      </div>
                    </td>
                    <td className="p-4">
                      <span className="text-gray-300">
                        {report.type === 'comprehensive' ? 'شامل' :
                         report.type === 'liquidity' ? 'سيولة' :
                         report.type === 'risk' ? 'مخاطر' : report.type}
                      </span>
                    </td>
                    <td className="p-4">
                      <span className={`inline-flex items-center px-2 py-1 rounded text-xs ${getStatusColor(report.status)}`}>
                        {report.status === 'completed' ? 'مكتمل' :
                         report.status === 'processing' ? 'قيد المعالجة' : 'فشل'}
                      </span>
                    </td>
                    <td className="p-4">
                      <span className="text-gray-300 text-sm">{report.date}</span>
                    </td>
                    <td className="p-4">
                      <span className="text-gray-300 text-sm">{report.fileSize}</span>
                    </td>
                    <td className="p-4">
                      <div className="flex items-center justify-center gap-2">
                        {report.status === 'completed' && (
                          <>
                            <button
                              onClick={() => handleDownload(report.id)}
                              className="px-3 py-1 bg-blue-500/20 text-blue-400 rounded hover:bg-blue-500/30 transition-all text-sm"
                            >
                              تحميل
                            </button>
                            <button className="px-3 py-1 bg-green-500/20 text-green-400 rounded hover:bg-green-500/30 transition-all text-sm">
                              معاينة
                            </button>
                          </>
                        )}
                        {report.status === 'processing' && (
                          <span className="text-yellow-400 text-sm">جاري المعالجة...</span>
                        )}
                      </div>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>

          {mockReports.length === 0 && (
            <div className="text-center py-12">
              <div className="text-4xl mb-4">📄</div>
              <h3 className="text-xl font-semibold text-gray-400 mb-2">لا توجد تقارير</h3>
              <p className="text-gray-500">ابدأ تحليلك الأول لإنشاء التقارير</p>
            </div>
          )}
        </div>

        {/* Bulk Actions */}
        {mockReports.length > 0 && (
          <div className="mt-8 bg-black/50 border border-amber-500/30 rounded-xl p-6">
            <h3 className="text-lg font-bold text-amber-500 mb-4">إجراءات مجمعة</h3>
            <div className="flex flex-wrap gap-4">
              <button className="px-4 py-2 bg-blue-500/20 text-blue-400 border border-blue-500/30 rounded-lg hover:bg-blue-500/30 transition-all">
                تحميل جميع التقارير
              </button>
              <button className="px-4 py-2 bg-green-500/20 text-green-400 border border-green-500/30 rounded-lg hover:bg-green-500/30 transition-all">
                مشاركة متعددة
              </button>
              <button className="px-4 py-2 bg-red-500/20 text-red-400 border border-red-500/30 rounded-lg hover:bg-red-500/30 transition-all">
                حذف المحدد
              </button>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default ReportsPage;