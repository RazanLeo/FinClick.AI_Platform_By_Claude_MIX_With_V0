import React from 'react';

const LiquidityAnalysisPage: React.FC = () => {
  const liquidityRatios = [
    { name: 'نسبة التداول', value: 2.0, benchmark: 2.0, status: 'excellent' },
    { name: 'السيولة السريعة', value: 1.68, benchmark: 1.0, status: 'good' },
    { name: 'النسبة النقدية', value: 0.6, benchmark: 0.2, status: 'excellent' },
    { name: 'دورة تحويل النقد', value: 45, benchmark: 30, status: 'average' }
  ];

  const getStatusColor = (status: string) => {
    switch (status) {
      case 'excellent': return 'text-green-400 bg-green-500/20';
      case 'good': return 'text-blue-400 bg-blue-500/20';
      case 'average': return 'text-yellow-400 bg-yellow-500/20';
      default: return 'text-gray-400 bg-gray-500/20';
    }
  };

  return (
    <div className="min-h-screen bg-black text-amber-500 p-6" dir="rtl">
      <div className="max-w-7xl mx-auto">
        <div className="mb-8">
          <h1 className="text-3xl font-bold text-amber-500 mb-2">تحليل السيولة</h1>
          <p className="text-gray-400">تحليل شامل لقدرة الشركة على الوفاء بالتزاماتها قصيرة الأجل</p>
        </div>

        {/* Summary Cards */}
        <div className="grid grid-cols-1 md:grid-cols-4 gap-6 mb-8">
          {liquidityRatios.map((ratio, index) => (
            <div key={index} className="bg-black/50 border border-amber-500/30 rounded-xl p-6">
              <div className="flex items-center justify-between mb-4">
                <div className="text-3xl">📊</div>
                <span className={`text-xs px-2 py-1 rounded ${getStatusColor(ratio.status)}`}>
                  {ratio.status === 'excellent' ? 'ممتاز' :
                   ratio.status === 'good' ? 'جيد' : 'متوسط'}
                </span>
              </div>
              <h3 className="text-lg font-semibold text-amber-500 mb-1">{ratio.name}</h3>
              <p className="text-2xl font-bold text-white">
                {ratio.name === 'دورة تحويل النقد' ? `${ratio.value} يوم` : ratio.value.toFixed(2)}
              </p>
              <p className="text-sm text-gray-400">
                المعيار: {ratio.name === 'دورة تحويل النقد' ? `${ratio.benchmark} يوم` : ratio.benchmark}
              </p>
            </div>
          ))}
        </div>

        {/* Detailed Analysis */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          {/* Ratios List */}
          <div className="bg-black/50 border border-amber-500/30 rounded-xl p-6">
            <h2 className="text-xl font-bold text-amber-500 mb-6">نسب السيولة التفصيلية</h2>

            <div className="space-y-4">
              {liquidityRatios.map((ratio, index) => (
                <div key={index} className="bg-amber-500/5 border border-amber-500/20 rounded-lg p-4">
                  <div className="flex items-center justify-between mb-3">
                    <h3 className="font-semibold text-amber-500">{ratio.name}</h3>
                    <span className={`px-2 py-1 rounded text-xs ${getStatusColor(ratio.status)}`}>
                      {ratio.status === 'excellent' ? 'ممتاز' :
                       ratio.status === 'good' ? 'جيد' : 'متوسط'}
                    </span>
                  </div>

                  <div className="grid grid-cols-2 gap-4 mb-3">
                    <div>
                      <span className="text-gray-400 text-sm">القيمة الحالية</span>
                      <p className="font-bold text-white">
                        {ratio.name === 'دورة تحويل النقد' ? `${ratio.value} يوم` : ratio.value.toFixed(2)}
                      </p>
                    </div>
                    <div>
                      <span className="text-gray-400 text-sm">المعيار</span>
                      <p className="font-bold text-amber-500">
                        {ratio.name === 'دورة تحويل النقد' ? `${ratio.benchmark} يوم` : ratio.benchmark}
                      </p>
                    </div>
                  </div>

                  <div className="mb-3">
                    <span className="text-sm font-medium text-gray-300">التفسير:</span>
                    <p className="text-sm text-gray-400 mt-1">
                      {ratio.status === 'excellent' ? 'أداء ممتاز في هذا المؤشر' :
                       ratio.status === 'good' ? 'أداء جيد ومستقر' :
                       'يحتاج إلى تحسين في هذا المؤشر'}
                    </p>
                  </div>

                  <div>
                    <span className="text-sm font-medium text-gray-300">التوصية:</span>
                    <p className="text-sm text-amber-400 mt-1">
                      {ratio.status === 'excellent' ? 'حافظ على الأداء الحالي' :
                       ratio.status === 'good' ? 'راقب الأداء واستمر في التحسين' :
                       'ركز على تحسين هذا المؤشر'}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Charts and Insights */}
          <div className="space-y-6">
            {/* Progress Bars */}
            <div className="bg-black/50 border border-amber-500/30 rounded-xl p-6">
              <h3 className="text-lg font-bold text-amber-500 mb-4">مقارنة النسب</h3>

              <div className="space-y-4">
                {liquidityRatios.map((ratio, index) => (
                  <div key={index}>
                    <div className="flex justify-between items-center mb-2">
                      <span className="text-sm text-gray-400">{ratio.name}</span>
                      <span className="text-amber-500 font-semibold">
                        {ratio.name === 'دورة تحويل النقد' ? `${ratio.value} يوم` : ratio.value.toFixed(2)}
                      </span>
                    </div>
                    <div className="w-full bg-gray-700 rounded-full h-3">
                      <div
                        className={`h-3 rounded-full ${
                          ratio.status === 'excellent' ? 'bg-green-500' :
                          ratio.status === 'good' ? 'bg-blue-500' : 'bg-yellow-500'
                        }`}
                        style={{
                          width: `${Math.min((ratio.value / ratio.benchmark) * 50, 100)}%`
                        }}
                      ></div>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Recommendations */}
            <div className="bg-black/50 border border-amber-500/30 rounded-xl p-6">
              <h3 className="text-lg font-bold text-amber-500 mb-4">التوصيات الذكية</h3>

              <div className="space-y-4">
                <div className="flex items-start">
                  <div className="text-green-400 text-xl ml-3">✅</div>
                  <div>
                    <p className="font-medium text-green-400 mb-1">نقاط القوة</p>
                    <p className="text-sm text-gray-400">
                      نسبة التداول والسيولة السريعة في مستويات ممتازة
                    </p>
                  </div>
                </div>

                <div className="flex items-start">
                  <div className="text-yellow-400 text-xl ml-3">⚠️</div>
                  <div>
                    <p className="font-medium text-yellow-400 mb-1">نقاط التحسين</p>
                    <p className="text-sm text-gray-400">
                      تحسين دورة تحويل النقد من خلال إدارة أفضل للمخزون
                    </p>
                  </div>
                </div>

                <div className="flex items-start">
                  <div className="text-blue-400 text-xl ml-3">💡</div>
                  <div>
                    <p className="font-medium text-blue-400 mb-1">خطة العمل</p>
                    <p className="text-sm text-gray-400">
                      وضع سياسات تحصيل أكثر فعالية لتحسين دورة النقد
                    </p>
                  </div>
                </div>
              </div>
            </div>

            {/* Industry Comparison */}
            <div className="bg-black/50 border border-amber-500/30 rounded-xl p-6">
              <h3 className="text-lg font-bold text-amber-500 mb-4">مقارنة مع القطاع</h3>

              <div className="space-y-3">
                <div className="flex justify-between items-center">
                  <span className="text-gray-400">متوسط القطاع</span>
                  <span className="text-amber-500">1.8</span>
                </div>
                <div className="flex justify-between items-center">
                  <span className="text-gray-400">أداؤك</span>
                  <span className="text-green-400 font-semibold">أفضل بـ 11%</span>
                </div>
                <div className="flex justify-between items-center">
                  <span className="text-gray-400">ترتيبك</span>
                  <span className="text-green-400 font-semibold">الربع الأول</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default LiquidityAnalysisPage;