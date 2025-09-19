/**
 * Home Page - FinClick.AI Platform
 * الصفحة الرئيسية
 */

import React from 'react';
import { Link } from 'react-router-dom';

const HomePage: React.FC = () => {
  return (
    <div className="min-h-screen bg-black text-amber-500" dir="rtl">
      {/* Navigation */}
      <nav className="bg-black/90 backdrop-blur-sm border-b border-amber-500/20 fixed w-full z-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between h-16">
            <div className="flex items-center">
              <div className="flex-shrink-0 flex items-center">
                <div className="w-10 h-10 bg-gradient-to-r from-amber-500 to-yellow-500 rounded-lg flex items-center justify-center">
                  <span className="text-black font-bold text-xl">Fi</span>
                </div>
                <span className="mr-3 text-xl font-bold">FinClick.AI</span>
              </div>
            </div>

            <div className="hidden md:flex items-center space-x-reverse space-x-8">
              <a href="#features" className="text-amber-500 hover:text-yellow-400">المميزات</a>
              <a href="#pricing" className="text-amber-500 hover:text-yellow-400">الأسعار</a>
              <Link to="/login" className="text-amber-500 hover:text-yellow-400">تسجيل الدخول</Link>
              <Link to="/register" className="bg-gradient-to-r from-amber-500 to-yellow-500 text-black px-4 py-2 rounded-lg font-semibold hover:from-yellow-500 hover:to-amber-500">
                ابدأ مجاناً
              </Link>
            </div>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="pt-20 pb-20 px-4">
        <div className="max-w-7xl mx-auto text-center">
          <div className="mb-8">
            <div className="inline-block bg-gradient-to-r from-amber-500 to-yellow-500 p-6 rounded-3xl mb-8">
              <span className="text-black text-6xl font-bold">Fi</span>
            </div>
          </div>

          <h1 className="text-5xl md:text-7xl font-bold mb-6 bg-gradient-to-r from-amber-500 to-yellow-500 bg-clip-text text-transparent">
            FinClick.AI
          </h1>

          <p className="text-2xl md:text-3xl mb-4 text-amber-400">
            منصة التحليل المالي الذكية بالذكاء الاصطناعي
          </p>

          <p className="text-lg mb-8 max-w-3xl mx-auto text-gray-300">
            180 تحليل مالي • 23 وكيل ذكاء اصطناعي • تقارير احترافية
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-16">
            <Link
              to="/register"
              className="bg-gradient-to-r from-amber-500 to-yellow-500 text-black px-8 py-4 rounded-xl font-bold text-lg hover:from-yellow-500 hover:to-amber-500 transition-all transform hover:scale-105"
            >
              ابدأ التحليل المجاني
            </Link>
            <Link
              to="/login"
              className="border-2 border-amber-500 text-amber-500 px-8 py-4 rounded-xl font-bold text-lg hover:bg-amber-500 hover:text-black transition-all"
            >
              تسجيل الدخول
            </Link>
          </div>

          {/* Stats */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-4xl mx-auto">
            <div className="bg-amber-500/10 border border-amber-500/30 rounded-xl p-6">
              <div className="text-3xl font-bold text-amber-500 mb-2">180+</div>
              <div className="text-lg text-gray-300">تحليل مالي متقدم</div>
            </div>
            <div className="bg-amber-500/10 border border-amber-500/30 rounded-xl p-6">
              <div className="text-3xl font-bold text-amber-500 mb-2">23</div>
              <div className="text-lg text-gray-300">وكيل ذكاء اصطناعي</div>
            </div>
            <div className="bg-amber-500/10 border border-amber-500/30 rounded-xl p-6">
              <div className="text-3xl font-bold text-amber-500 mb-2">99%</div>
              <div className="text-lg text-gray-300">دقة التحليل</div>
            </div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section id="features" className="py-20 px-4 bg-gray-900/50">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold mb-4 text-amber-500">
              المميزات الرئيسية
            </h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              اكتشف قوة التحليل المالي المدعوم بالذكاء الاصطناعي
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {/* Feature 1 */}
            <div className="bg-black/50 border border-amber-500/30 rounded-xl p-8 hover:border-amber-500/50 transition-all">
              <div className="w-12 h-12 bg-gradient-to-r from-amber-500 to-yellow-500 rounded-lg flex items-center justify-center mb-6">
                <span className="text-black font-bold">📊</span>
              </div>
              <h3 className="text-xl font-bold mb-4 text-amber-500">تحليل السيولة</h3>
              <p className="text-gray-300 mb-4">
                15 تحليل متقدم للسيولة المالية مع توصيات ذكية
              </p>
              <ul className="text-sm text-gray-400 space-y-2">
                <li>• نسبة التداول المتقدمة</li>
                <li>• تحليل السيولة السريعة</li>
                <li>• دورة تحويل النقد</li>
              </ul>
            </div>

            {/* Feature 2 */}
            <div className="bg-black/50 border border-amber-500/30 rounded-xl p-8 hover:border-amber-500/50 transition-all">
              <div className="w-12 h-12 bg-gradient-to-r from-amber-500 to-yellow-500 rounded-lg flex items-center justify-center mb-6">
                <span className="text-black font-bold">📈</span>
              </div>
              <h3 className="text-xl font-bold mb-4 text-amber-500">تحليل الربحية</h3>
              <p className="text-gray-300 mb-4">
                25 تحليل شامل للأرباح والعوائد مع مقارنات قطاعية
              </p>
              <ul className="text-sm text-gray-400 space-y-2">
                <li>• هوامش الربح المتقدمة</li>
                <li>• العائد على الاستثمار</li>
                <li>• تحليل الأرباح التشغيلية</li>
              </ul>
            </div>

            {/* Feature 3 */}
            <div className="bg-black/50 border border-amber-500/30 rounded-xl p-8 hover:border-amber-500/50 transition-all">
              <div className="w-12 h-12 bg-gradient-to-r from-amber-500 to-yellow-500 rounded-lg flex items-center justify-center mb-6">
                <span className="text-black font-bold">🛡️</span>
              </div>
              <h3 className="text-xl font-bold mb-4 text-amber-500">تحليل المخاطر</h3>
              <p className="text-gray-300 mb-4">
                21 تحليل متطور لإدارة المخاطر المالية
              </p>
              <ul className="text-sm text-gray-400 space-y-2">
                <li>• تقييم المخاطر الائتمانية</li>
                <li>• مخاطر السوق</li>
                <li>• تحليل الحساسية</li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Pricing Section */}
      <section id="pricing" className="py-20 px-4">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold mb-4 text-amber-500">
              خطط الاشتراك
            </h2>
            <p className="text-xl text-gray-300">
              اختر الخطة المناسبة لاحتياجاتك
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {/* Free Plan */}
            <div className="bg-black/50 border border-amber-500/30 rounded-xl p-8">
              <h3 className="text-xl font-bold mb-4 text-amber-500">مجاني</h3>
              <div className="text-3xl font-bold mb-6 text-white">0 ر.س</div>
              <ul className="space-y-3 mb-8 text-gray-300">
                <li>• 5 تحليلات شهرياً</li>
                <li>• تحليلات أساسية</li>
                <li>• تقارير PDF</li>
                <li>• دعم بريد إلكتروني</li>
              </ul>
              <Link to="/register" className="w-full bg-amber-500/20 text-amber-500 border border-amber-500 py-3 rounded-lg font-semibold text-center block hover:bg-amber-500 hover:text-black transition-all">
                ابدأ مجاناً
              </Link>
            </div>

            {/* Professional Plan */}
            <div className="bg-black/50 border-2 border-amber-500 rounded-xl p-8 relative">
              <div className="absolute -top-4 left-1/2 transform -translate-x-1/2">
                <span className="bg-gradient-to-r from-amber-500 to-yellow-500 text-black px-4 py-1 rounded-full text-sm font-bold">
                  الأكثر شعبية
                </span>
              </div>
              <h3 className="text-xl font-bold mb-4 text-amber-500">احترافي</h3>
              <div className="text-3xl font-bold mb-6 text-white">599 ر.س <span className="text-lg text-gray-400">/شهر</span></div>
              <ul className="space-y-3 mb-8 text-gray-300">
                <li>• 100 تحليل شهرياً</li>
                <li>• جميع التحليلات</li>
                <li>• 15 وكيل ذكي</li>
                <li>• تقارير مخصصة</li>
                <li>• API متقدم</li>
              </ul>
              <Link to="/register" className="w-full bg-gradient-to-r from-amber-500 to-yellow-500 text-black py-3 rounded-lg font-semibold text-center block hover:from-yellow-500 hover:to-amber-500 transition-all">
                اشترك الآن
              </Link>
            </div>

            {/* Additional plans can be added here */}
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-black border-t border-amber-500/20 py-12 px-4">
        <div className="max-w-7xl mx-auto text-center">
          <div className="flex items-center justify-center mb-4">
            <div className="w-8 h-8 bg-gradient-to-r from-amber-500 to-yellow-500 rounded-lg flex items-center justify-center">
              <span className="text-black font-bold">Fi</span>
            </div>
            <span className="mr-2 text-lg font-bold text-amber-500">FinClick.AI</span>
          </div>
          <p className="text-gray-400 text-sm mb-4">
            منصة التحليل المالي الذكية المدعومة بالذكاء الاصطناعي
          </p>
          <p className="text-gray-400 text-sm">
            © 2024 FinClick.AI. جميع الحقوق محفوظة.
          </p>
        </div>
      </footer>
    </div>
  );
};

export default HomePage;