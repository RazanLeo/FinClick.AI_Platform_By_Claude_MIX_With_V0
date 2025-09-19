import React, { useState } from 'react';
import { Link } from 'react-router-dom';

const AnalysisPage: React.FC = () => {
  const [files, setFiles] = useState<File[]>([]);
  const [analysisType, setAnalysisType] = useState('comprehensive');

  const handleFileUpload = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (e.target.files) {
      setFiles(Array.from(e.target.files));
    }
  };

  const handleAnalysis = () => {
    alert('سيتم بدء التحليل قريباً - هذه نسخة تجريبية');
  };

  return (
    <div className="min-h-screen bg-black text-amber-500 p-6" dir="rtl">
      <div className="max-w-7xl mx-auto">
        <div className="mb-8">
          <h1 className="text-3xl font-bold text-amber-500 mb-2">التحليل المالي الذكي</h1>
          <p className="text-gray-400">ارفع ملفاتك المالية واحصل على تحليل شامل</p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          {/* File Upload */}
          <div className="bg-black/50 border border-amber-500/30 rounded-xl p-6">
            <h2 className="text-xl font-bold text-amber-500 mb-4">1. رفع الملفات</h2>

            <div className="border-2 border-dashed border-amber-500/30 rounded-xl p-8 text-center mb-4">
              <div className="text-4xl mb-4">📁</div>
              <h3 className="text-lg font-semibold text-amber-500 mb-2">اختر الملفات المالية</h3>
              <p className="text-gray-400 mb-4">PDF, Excel, Word, أو صور</p>

              <input
                type="file"
                multiple
                onChange={handleFileUpload}
                className="w-full p-3 border border-amber-500/30 rounded-lg bg-black/50 text-amber-500"
                accept=".pdf,.xlsx,.xls,.docx,.doc,.png,.jpg,.jpeg"
              />
            </div>

            {files.length > 0 && (
              <div>
                <h3 className="font-semibold text-amber-500 mb-3">الملفات المختارة:</h3>
                <div className="space-y-2">
                  {files.map((file, index) => (
                    <div key={index} className="flex items-center justify-between p-3 bg-amber-500/10 rounded-lg">
                      <span className="text-amber-500">{file.name}</span>
                      <span className="text-gray-400">{(file.size / 1024 / 1024).toFixed(2)} MB</span>
                    </div>
                  ))}
                </div>
              </div>
            )}
          </div>

          {/* Analysis Options */}
          <div className="bg-black/50 border border-amber-500/30 rounded-xl p-6">
            <h2 className="text-xl font-bold text-amber-500 mb-4">2. خيارات التحليل</h2>

            <div className="space-y-4">
              <div>
                <label className="block text-sm font-medium text-amber-500 mb-2">نوع التحليل</label>
                <select
                  value={analysisType}
                  onChange={(e) => setAnalysisType(e.target.value)}
                  className="w-full p-3 bg-black/50 border border-amber-500/30 rounded-lg text-amber-500"
                >
                  <option value="comprehensive">تحليل شامل</option>
                  <option value="liquidity">تحليل السيولة</option>
                  <option value="profitability">تحليل الربحية</option>
                  <option value="risk">تحليل المخاطر</option>
                </select>
              </div>

              <div>
                <label className="block text-sm font-medium text-amber-500 mb-2">القطاع</label>
                <select className="w-full p-3 bg-black/50 border border-amber-500/30 rounded-lg text-amber-500">
                  <option>اختر القطاع</option>
                  <option>البنوك والخدمات المالية</option>
                  <option>التجارة والخدمات</option>
                  <option>الصناعات الأساسية</option>
                  <option>التكنولوجيا</option>
                </select>
              </div>

              <button
                onClick={handleAnalysis}
                disabled={files.length === 0}
                className="w-full py-3 px-4 bg-gradient-to-r from-amber-500 to-yellow-500 text-black rounded-lg font-semibold hover:from-yellow-500 hover:to-amber-500 disabled:opacity-50 transition-all"
              >
                بدء التحليل
              </button>
            </div>
          </div>
        </div>

        {/* Analysis Types */}
        <div className="mt-8 bg-black/50 border border-amber-500/30 rounded-xl p-6">
          <h2 className="text-xl font-bold text-amber-500 mb-4">أنواع التحليل المتاحة</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            {[
              { name: 'تحليل السيولة', description: '15 تحليل متقدم', link: '/analysis/liquidity' },
              { name: 'تحليل الربحية', description: '25 تحليل شامل', link: '/analysis/profitability' },
              { name: 'تحليل المخاطر', description: '21 تحليل متطور', link: '/analysis/risk' }
            ].map((item, index) => (
              <Link
                key={index}
                to={item.link}
                className="p-4 border border-amber-500/30 rounded-lg hover:border-amber-500/50 transition-all"
              >
                <h3 className="font-semibold text-amber-500 mb-2">{item.name}</h3>
                <p className="text-gray-400 text-sm">{item.description}</p>
              </Link>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default AnalysisPage;