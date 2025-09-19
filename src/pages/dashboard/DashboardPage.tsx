import React from 'react';
import { Link } from 'react-router-dom';

const DashboardPage: React.FC = () => {
  return (
    <div className="min-h-screen bg-black text-amber-500 p-6" dir="rtl">
      <div className="max-w-7xl mx-auto">
        <div className="mb-8">
          <h1 className="text-3xl font-bold text-amber-500 mb-2">مرحباً بك في FinClick.AI</h1>
          <p className="text-gray-400">لوحة المعلومات الرئيسية</p>
        </div>

        {/* Stats Cards */}
        <div className="grid grid-cols-1 md:grid-cols-4 gap-6 mb-8">
          <div className="bg-black/50 border border-amber-500/30 rounded-xl p-6">
            <div className="text-2xl font-bold text-amber-500 mb-2">5</div>
            <div className="text-gray-400">التحليلات المتاحة</div>
          </div>
          <div className="bg-black/50 border border-amber-500/30 rounded-xl p-6">
            <div className="text-2xl font-bold text-amber-500 mb-2">0</div>
            <div className="text-gray-400">التحليلات المستخدمة</div>
          </div>
          <div className="bg-black/50 border border-amber-500/30 rounded-xl p-6">
            <div className="text-2xl font-bold text-amber-500 mb-2">99%</div>
            <div className="text-gray-400">دقة التحليل</div>
          </div>
          <div className="bg-black/50 border border-amber-500/30 rounded-xl p-6">
            <div className="text-2xl font-bold text-amber-500 mb-2">24</div>
            <div className="text-gray-400">ساعات موفرة</div>
          </div>
        </div>

        {/* Quick Actions */}
        <div className="mb-8">
          <h2 className="text-xl font-bold text-amber-500 mb-4">إجراءات سريعة</h2>
          <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
            <Link
              to="/analysis"
              className="bg-blue-500 hover:bg-blue-600 text-white p-6 rounded-xl transition-all group"
            >
              <div className="text-center">
                <div className="text-3xl mb-3">📊</div>
                <h3 className="font-semibold mb-2">تحليل سريع</h3>
                <p className="text-sm opacity-90">ابدأ تحليل مالي جديد</p>
              </div>
            </Link>

            <Link
              to="/analysis/liquidity"
              className="bg-emerald-500 hover:bg-emerald-600 text-white p-6 rounded-xl transition-all group"
            >
              <div className="text-center">
                <div className="text-3xl mb-3">💧</div>
                <h3 className="font-semibold mb-2">تحليل السيولة</h3>
                <p className="text-sm opacity-90">15 تحليل للسيولة المالية</p>
              </div>
            </Link>

            <Link
              to="/subscription"
              className="bg-purple-500 hover:bg-purple-600 text-white p-6 rounded-xl transition-all group"
            >
              <div className="text-center">
                <div className="text-3xl mb-3">👑</div>
                <h3 className="font-semibold mb-2">ترقية الاشتراك</h3>
                <p className="text-sm opacity-90">احصل على مميزات أكثر</p>
              </div>
            </Link>

            <Link
              to="/reports"
              className="bg-orange-500 hover:bg-orange-600 text-white p-6 rounded-xl transition-all group"
            >
              <div className="text-center">
                <div className="text-3xl mb-3">📄</div>
                <h3 className="font-semibold mb-2">التقارير</h3>
                <p className="text-sm opacity-90">عرض وتحميل التقارير</p>
              </div>
            </Link>
          </div>
        </div>

        {/* Analysis Categories */}
        <div className="bg-black/50 border border-amber-500/30 rounded-xl p-6">
          <h2 className="text-xl font-bold text-amber-500 mb-4">فئات التحليل المتاحة</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            {[
              { name: 'السيولة', count: 15, href: '/analysis/liquidity' },
              { name: 'الربحية', count: 25, href: '/analysis/profitability' },
              { name: 'الكفاءة', count: 20, href: '/analysis/efficiency' },
              { name: 'الرافعة المالية', count: 18, href: '/analysis/leverage' },
              { name: 'السوق', count: 23, href: '/analysis/market' },
              { name: 'المخاطر', count: 21, href: '/analysis/risk' },
              { name: 'النمو', count: 15, href: '/analysis/growth' },
              { name: 'التدفق النقدي', count: 13, href: '/analysis/cash-flow' },
              { name: 'التقييم', count: 10, href: '/analysis/valuation' }
            ].map((category, index) => (
              <Link
                key={index}
                to={category.href}
                className="p-4 rounded-lg border border-amber-500/20 hover:border-amber-500/40 transition-all group"
              >
                <div className="font-medium text-amber-500 mb-1">{category.name}</div>
                <div className="text-2xl font-bold text-white mb-1">{category.count}</div>
                <div className="text-gray-400 text-sm">تحليل متاح</div>
              </Link>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default DashboardPage;