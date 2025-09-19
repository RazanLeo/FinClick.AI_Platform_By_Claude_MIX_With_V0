/**
 * Home Page - FinClick.AI Platform
 * الصفحة الرئيسية
 */

import React, { useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Header } from '../components/layout/Header';
import { Button } from '../components/ui/button';
import { Card, CardHeader, CardTitle, CardDescription, CardContent } from '../components/ui/card';

const HomePage: React.FC = () => {
  const location = useLocation();

  useEffect(() => {
    // Handle scroll to section from navigation
    if (location.state?.scrollTo) {
      const element = document.getElementById(location.state.scrollTo);
      if (element) {
        setTimeout(() => {
          element.scrollIntoView({ behavior: 'smooth' });
        }, 100);
      }
    }
  }, [location]);

  return (
    <div className="min-h-screen bg-black text-amber-500" dir="rtl">
      <Header />

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
            <Button size="lg" className="px-8 py-4 text-lg" asChild>
              <Link to="/register">
                ابدأ التحليل المجاني
              </Link>
            </Button>
            <Button variant="outline" size="lg" className="px-8 py-4 text-lg" asChild>
              <Link to="/login">
                تسجيل الدخول
              </Link>
            </Button>
          </div>

          {/* Stats */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-4xl mx-auto">
            <Card className="p-6">
              <div className="text-3xl font-bold text-amber-500 mb-2">180+</div>
              <div className="text-lg text-gray-300">تحليل مالي متقدم</div>
            </Card>
            <Card className="p-6">
              <div className="text-3xl font-bold text-amber-500 mb-2">23</div>
              <div className="text-lg text-gray-300">وكيل ذكاء اصطناعي</div>
            </Card>
            <Card className="p-6">
              <div className="text-3xl font-bold text-amber-500 mb-2">99%</div>
              <div className="text-lg text-gray-300">دقة التحليل</div>
            </Card>
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
            <Card className="p-8 hover:border-amber-500/50 transition-all">
              <CardHeader className="pb-6">
                <div className="w-12 h-12 bg-gradient-to-r from-amber-500 to-yellow-500 rounded-lg flex items-center justify-center mb-4">
                  <span className="text-black font-bold">📊</span>
                </div>
                <CardTitle className="text-xl text-amber-500">تحليل السيولة</CardTitle>
                <CardDescription className="text-gray-300">
                  15 تحليل متقدم للسيولة المالية مع توصيات ذكية
                </CardDescription>
              </CardHeader>
              <CardContent>
                <ul className="text-sm text-gray-400 space-y-2">
                  <li>• نسبة التداول المتقدمة</li>
                  <li>• تحليل السيولة السريعة</li>
                  <li>• دورة تحويل النقد</li>
                </ul>
              </CardContent>
            </Card>

            {/* Feature 2 */}
            <Card className="p-8 hover:border-amber-500/50 transition-all">
              <CardHeader className="pb-6">
                <div className="w-12 h-12 bg-gradient-to-r from-amber-500 to-yellow-500 rounded-lg flex items-center justify-center mb-4">
                  <span className="text-black font-bold">📈</span>
                </div>
                <CardTitle className="text-xl text-amber-500">تحليل الربحية</CardTitle>
                <CardDescription className="text-gray-300">
                  25 تحليل شامل للأرباح والعوائد مع مقارنات قطاعية
                </CardDescription>
              </CardHeader>
              <CardContent>
                <ul className="text-sm text-gray-400 space-y-2">
                  <li>• هوامش الربح المتقدمة</li>
                  <li>• العائد على الاستثمار</li>
                  <li>• تحليل الأرباح التشغيلية</li>
                </ul>
              </CardContent>
            </Card>

            {/* Feature 3 */}
            <Card className="p-8 hover:border-amber-500/50 transition-all">
              <CardHeader className="pb-6">
                <div className="w-12 h-12 bg-gradient-to-r from-amber-500 to-yellow-500 rounded-lg flex items-center justify-center mb-4">
                  <span className="text-black font-bold">🛡️</span>
                </div>
                <CardTitle className="text-xl text-amber-500">تحليل المخاطر</CardTitle>
                <CardDescription className="text-gray-300">
                  21 تحليل متطور لإدارة المخاطر المالية
                </CardDescription>
              </CardHeader>
              <CardContent>
                <ul className="text-sm text-gray-400 space-y-2">
                  <li>• تقييم المخاطر الائتمانية</li>
                  <li>• مخاطر السوق</li>
                  <li>• تحليل الحساسية</li>
                </ul>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Analysis Types Section */}
      <section id="analysis-types" className="py-20 px-4">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold mb-4 text-amber-500">
              📊 أنواع التحليل المالي
            </h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              180 تحليل مالي شامل يغطي جميع جوانب الأداء المالي للشركات
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {/* Liquidity Analysis */}
            <Card className="p-6 hover:border-amber-500/50 transition-all">
              <CardHeader>
                <div className="w-12 h-12 bg-gradient-to-r from-blue-500 to-blue-600 rounded-lg flex items-center justify-center mb-4">
                  <span className="text-white font-bold">💧</span>
                </div>
                <CardTitle className="text-lg text-amber-500">تحليل السيولة</CardTitle>
                <CardDescription className="text-gray-300">
                  15 تحليل متخصص في السيولة والتدفقات النقدية
                </CardDescription>
              </CardHeader>
              <CardContent>
                <div className="text-sm text-gray-400 space-y-1">
                  <div>• نسبة التداول</div>
                  <div>• نسبة السيولة السريعة</div>
                  <div>• دورة التحويل النقدي</div>
                  <div>• نسبة النقد إلى الالتزامات</div>
                </div>
              </CardContent>
            </Card>

            {/* Profitability Analysis */}
            <Card className="p-6 hover:border-amber-500/50 transition-all">
              <CardHeader>
                <div className="w-12 h-12 bg-gradient-to-r from-green-500 to-green-600 rounded-lg flex items-center justify-center mb-4">
                  <span className="text-white font-bold">📈</span>
                </div>
                <CardTitle className="text-lg text-amber-500">تحليل الربحية</CardTitle>
                <CardDescription className="text-gray-300">
                  25 تحليل شامل للأرباح والعوائد
                </CardDescription>
              </CardHeader>
              <CardContent>
                <div className="text-sm text-gray-400 space-y-1">
                  <div>• هامش الربح الصافي</div>
                  <div>• العائد على الأصول</div>
                  <div>• العائد على حقوق الملكية</div>
                  <div>• نمو الأرباح</div>
                </div>
              </CardContent>
            </Card>

            {/* Efficiency Analysis */}
            <Card className="p-6 hover:border-amber-500/50 transition-all">
              <CardHeader>
                <div className="w-12 h-12 bg-gradient-to-r from-purple-500 to-purple-600 rounded-lg flex items-center justify-center mb-4">
                  <span className="text-white font-bold">⚡</span>
                </div>
                <CardTitle className="text-lg text-amber-500">تحليل الكفاءة</CardTitle>
                <CardDescription className="text-gray-300">
                  30 تحليل لكفاءة استخدام الأصول
                </CardDescription>
              </CardHeader>
              <CardContent>
                <div className="text-sm text-gray-400 space-y-1">
                  <div>• معدل دوران الأصول</div>
                  <div>• معدل دوران المخزون</div>
                  <div>• معدل تحصيل الذمم</div>
                  <div>• كفاءة رأس المال العامل</div>
                </div>
              </CardContent>
            </Card>

            {/* Leverage Analysis */}
            <Card className="p-6 hover:border-amber-500/50 transition-all">
              <CardHeader>
                <div className="w-12 h-12 bg-gradient-to-r from-orange-500 to-orange-600 rounded-lg flex items-center justify-center mb-4">
                  <span className="text-white font-bold">⚖️</span>
                </div>
                <CardTitle className="text-lg text-amber-500">تحليل الرافعة المالية</CardTitle>
                <CardDescription className="text-gray-300">
                  20 تحليل للمديونية والرافعة المالية
                </CardDescription>
              </CardHeader>
              <CardContent>
                <div className="text-sm text-gray-400 space-y-1">
                  <div>• نسبة الدين إلى حقوق الملكية</div>
                  <div>• نسبة تغطية الفوائد</div>
                  <div>• نسبة الدين إلى الأصول</div>
                  <div>• قدرة خدمة الدين</div>
                </div>
              </CardContent>
            </Card>

            {/* Market Analysis */}
            <Card className="p-6 hover:border-amber-500/50 transition-all">
              <CardHeader>
                <div className="w-12 h-12 bg-gradient-to-r from-indigo-500 to-indigo-600 rounded-lg flex items-center justify-center mb-4">
                  <span className="text-white font-bold">📊</span>
                </div>
                <CardTitle className="text-lg text-amber-500">تحليل السوق</CardTitle>
                <CardDescription className="text-gray-300">
                  25 تحليل لمؤشرات السوق والتقييم
                </CardDescription>
              </CardHeader>
              <CardContent>
                <div className="text-sm text-gray-400 space-y-1">
                  <div>• نسبة السعر إلى الأرباح</div>
                  <div>• نسبة السعر إلى القيمة الدفترية</div>
                  <div>• عائد الأرباح الموزعة</div>
                  <div>• التقييم العادل</div>
                </div>
              </CardContent>
            </Card>

            {/* Risk Analysis */}
            <Card className="p-6 hover:border-amber-500/50 transition-all">
              <CardHeader>
                <div className="w-12 h-12 bg-gradient-to-r from-red-500 to-red-600 rounded-lg flex items-center justify-center mb-4">
                  <span className="text-white font-bold">🛡️</span>
                </div>
                <CardTitle className="text-lg text-amber-500">تحليل المخاطر</CardTitle>
                <CardDescription className="text-gray-300">
                  21 تحليل متطور لإدارة المخاطر
                </CardDescription>
              </CardHeader>
              <CardContent>
                <div className="text-sm text-gray-400 space-y-1">
                  <div>• مخاطر الائتمان</div>
                  <div>• مخاطر السوق</div>
                  <div>• مخاطر السيولة</div>
                  <div>• تحليل الحساسية</div>
                </div>
              </CardContent>
            </Card>

            {/* Growth Analysis */}
            <Card className="p-6 hover:border-amber-500/50 transition-all">
              <CardHeader>
                <div className="w-12 h-12 bg-gradient-to-r from-teal-500 to-teal-600 rounded-lg flex items-center justify-center mb-4">
                  <span className="text-white font-bold">🚀</span>
                </div>
                <CardTitle className="text-lg text-amber-500">تحليل النمو</CardTitle>
                <CardDescription className="text-gray-300">
                  19 تحليل لاتجاهات النمو والاستدامة
                </CardDescription>
              </CardHeader>
              <CardContent>
                <div className="text-sm text-gray-400 space-y-1">
                  <div>• معدل نمو الإيرادات</div>
                  <div>• نمو الأرباح</div>
                  <div>• النمو المستدام</div>
                  <div>• توقعات النمو</div>
                </div>
              </CardContent>
            </Card>

            {/* Cash Flow Analysis */}
            <Card className="p-6 hover:border-amber-500/50 transition-all">
              <CardHeader>
                <div className="w-12 h-12 bg-gradient-to-r from-cyan-500 to-cyan-600 rounded-lg flex items-center justify-center mb-4">
                  <span className="text-white font-bold">💰</span>
                </div>
                <CardTitle className="text-lg text-amber-500">تحليل التدفق النقدي</CardTitle>
                <CardDescription className="text-gray-300">
                  25 تحليل شامل للتدفقات النقدية
                </CardDescription>
              </CardHeader>
              <CardContent>
                <div className="text-sm text-gray-400 space-y-1">
                  <div>• التدفق النقدي التشغيلي</div>
                  <div>• التدفق النقدي الحر</div>
                  <div>• جودة الأرباح</div>
                  <div>• توليد النقد</div>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="py-20 px-4 bg-gray-900/30">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-4xl font-bold mb-4 text-amber-500">
            📞 التواصل والدعم
          </h2>
          <p className="text-xl text-gray-300 mb-8">
            فريق الدعم الفني متاح 24/7 لمساعدتك في تحليلاتك المالية
          </p>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-8">
            <Card className="p-6">
              <div className="text-3xl mb-4">📧</div>
              <h3 className="text-lg font-bold text-amber-500 mb-2">البريد الإلكتروني</h3>
              <p className="text-gray-300">support@finclick.ai</p>
            </Card>
            <Card className="p-6">
              <div className="text-3xl mb-4">💬</div>
              <h3 className="text-lg font-bold text-amber-500 mb-2">الدردشة المباشرة</h3>
              <p className="text-gray-300">متاح 24/7</p>
            </Card>
            <Card className="p-6">
              <div className="text-3xl mb-4">📱</div>
              <h3 className="text-lg font-bold text-amber-500 mb-2">واتساب</h3>
              <p className="text-gray-300">+966 50 123 4567</p>
            </Card>
          </div>

          <Button size="lg" className="px-8 py-4 text-lg">
            📞 تواصل معنا الآن
          </Button>
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
            <Card className="p-8">
              <CardHeader>
                <CardTitle className="text-xl text-amber-500">مجاني</CardTitle>
                <div className="text-3xl font-bold text-white">0 ر.س</div>
              </CardHeader>
              <CardContent>
                <ul className="space-y-3 mb-8 text-gray-300">
                  <li>• 5 تحليلات شهرياً</li>
                  <li>• تحليلات أساسية</li>
                  <li>• تقارير PDF</li>
                  <li>• دعم بريد إلكتروني</li>
                </ul>
                <Button variant="outline" className="w-full" asChild>
                  <Link to="/register">ابدأ مجاناً</Link>
                </Button>
              </CardContent>
            </Card>

            {/* Professional Plan */}
            <Card className="p-8 border-2 border-amber-500 relative">
              <div className="absolute -top-4 left-1/2 transform -translate-x-1/2">
                <span className="bg-gradient-to-r from-amber-500 to-yellow-500 text-black px-4 py-1 rounded-full text-sm font-bold">
                  الأكثر شعبية
                </span>
              </div>
              <CardHeader>
                <CardTitle className="text-xl text-amber-500">احترافي</CardTitle>
                <div className="text-3xl font-bold text-white">599 ر.س <span className="text-lg text-gray-400">/شهر</span></div>
              </CardHeader>
              <CardContent>
                <ul className="space-y-3 mb-8 text-gray-300">
                  <li>• 100 تحليل شهرياً</li>
                  <li>• جميع التحليلات</li>
                  <li>• 15 وكيل ذكي</li>
                  <li>• تقارير مخصصة</li>
                  <li>• API متقدم</li>
                </ul>
                <Button className="w-full" asChild>
                  <Link to="/register">اشترك الآن</Link>
                </Button>
              </CardContent>
            </Card>

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