/**
 * 404 Not Found Page - FinClick.AI Platform
 * صفحة 404 - الصفحة غير موجودة
 */

import React from 'react';
import { Link } from 'react-router-dom';

const NotFoundPage: React.FC = () => {
  return (
    <div className="min-h-screen bg-black text-amber-500 flex items-center justify-center p-6" dir="rtl">
      <div className="max-w-2xl mx-auto text-center">
        {/* Logo */}
        <div className="mb-8">
          <div className="inline-block bg-gradient-to-r from-amber-500 to-yellow-500 p-6 rounded-3xl mb-4">
            <span className="text-black text-4xl font-bold">Fi</span>
          </div>
          <h1 className="text-2xl font-bold text-amber-500">FinClick.AI</h1>
        </div>

        {/* 404 Animation */}
        <div className="mb-8">
          <div className="text-8xl font-bold text-gradient mb-4">404</div>
          <div className="w-32 h-1 bg-gradient-to-r from-amber-500 to-yellow-500 mx-auto rounded mb-6"></div>
        </div>

        {/* Error Message */}
        <div className="mb-8">
          <h2 className="text-3xl font-bold text-amber-500 mb-4">
            الصفحة غير موجودة
          </h2>
          <p className="text-xl text-gray-400 mb-6">
            عذراً، لا يمكننا العثور على الصفحة التي تبحث عنها
          </p>
          <p className="text-gray-500">
            ربما تم نقل الصفحة أو حذفها، أو أنك كتبت عنوان URL خاطئ
          </p>
        </div>

        {/* Action Buttons */}
        <div className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-12">
          <Link
            to="/"
            className="flex items-center px-6 py-3 bg-gradient-to-r from-amber-500 to-yellow-500 text-black rounded-lg font-semibold hover:from-yellow-500 hover:to-amber-500 transition-all transform hover:scale-105"
          >
            <span className="text-xl ml-2">🏠</span>
            العودة للرئيسية
          </Link>

          <Link
            to="/dashboard"
            className="flex items-center px-6 py-3 border border-amber-500 text-amber-500 rounded-lg font-semibold hover:bg-amber-500 hover:text-black transition-all"
          >
            <span className="text-xl ml-2">⬅</span>
            لوحة المعلومات
          </Link>
        </div>

        {/* Helpful Links */}
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-6">
          <Link
            to="/analysis"
            className="p-6 bg-black/50 border border-amber-500/30 rounded-xl hover:border-amber-500/50 transition-all group"
          >
            <span className="text-3xl text-amber-500 mx-auto mb-3 group-hover:scale-110 transition-transform block">🔍</span>
            <h3 className="font-semibold text-amber-500 mb-2">التحليل المالي</h3>
            <p className="text-gray-400 text-sm">ابدأ تحليل مالي جديد</p>
          </Link>

          <Link
            to="/subscription"
            className="p-6 bg-black/50 border border-amber-500/30 rounded-xl hover:border-amber-500/50 transition-all group"
          >
            <div className="w-8 h-8 text-amber-500 mx-auto mb-3 group-hover:scale-110 transition-transform">
              <svg viewBox="0 0 24 24" fill="currentColor">
                <path d="M12 2L3.09 8.26L12 14.5L20.91 8.26L12 2ZM21 16L12 22L3 16L12 10L21 16Z"/>
              </svg>
            </div>
            <h3 className="font-semibold text-amber-500 mb-2">الاشتراكات</h3>
            <p className="text-gray-400 text-sm">اختر خطة مناسبة</p>
          </Link>

          <Link
            to="/help"
            className="p-6 bg-black/50 border border-amber-500/30 rounded-xl hover:border-amber-500/50 transition-all group"
          >
            <span className="text-3xl text-amber-500 mx-auto mb-3 group-hover:scale-110 transition-transform block">❓</span>
            <h3 className="font-semibold text-amber-500 mb-2">المساعدة</h3>
            <p className="text-gray-400 text-sm">احصل على الدعم</p>
          </Link>
        </div>

        {/* Contact Info */}
        <div className="mt-12 p-6 bg-amber-500/10 border border-amber-500/30 rounded-xl">
          <h3 className="font-semibold text-amber-500 mb-3">تحتاج مساعدة؟</h3>
          <p className="text-gray-400 mb-4">
            إذا كنت تواجه مشكلة تقنية أو تحتاج مساعدة، لا تتردد في التواصل معنا
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a
              href="mailto:support@finclick.ai"
              className="text-amber-500 hover:text-yellow-400 font-medium"
            >
              support@finclick.ai
            </a>
            <span className="hidden sm:block text-gray-600">|</span>
            <a
              href="tel:+966500000000"
              className="text-amber-500 hover:text-yellow-400 font-medium"
            >
              +966 50 000 0000
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default NotFoundPage;