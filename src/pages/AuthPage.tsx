/**
 * Authentication Page - FinClick.AI Platform
 * صفحة التحقق والتسجيل
 */

import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { Header } from '../components/layout/Header';
import { Button } from '../components/ui/button';
import { Card, CardHeader, CardTitle, CardDescription, CardContent } from '../components/ui/card';

const AuthPage: React.FC = () => {
  const [isLogin, setIsLogin] = useState(true);
  const [formData, setFormData] = useState({
    email: '',
    password: '',
    name: '',
    confirmPassword: ''
  });
  const navigate = useNavigate();

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Mock authentication - in real app this would connect to auth service
    if (isLogin) {
      console.log('Login attempt:', formData.email);
      navigate('/dashboard');
    } else {
      console.log('Registration attempt:', formData.email);
      navigate('/dashboard');
    }
  };

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

      {/* Authentication Section */}
      <section className="py-20 px-4">
        <div className="max-w-md mx-auto">
          <Card className="p-8">
            <CardHeader className="text-center mb-6">
              <div className="w-16 h-16 bg-gradient-to-r from-amber-500 to-yellow-500 rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-black text-2xl font-bold">Fi</span>
              </div>
              <CardTitle className="text-2xl text-amber-500">
                {isLogin ? 'تسجيل الدخول' : 'إنشاء حساب جديد'}
              </CardTitle>
              <CardDescription className="text-gray-300">
                {isLogin
                  ? 'ادخل إلى منصة التحليل المالي الذكية'
                  : 'انضم إلى منصة FinClick.AI واستفد من 180 تحليل مالي'
                }
              </CardDescription>
            </CardHeader>

            <CardContent>
              <form onSubmit={handleSubmit} className="space-y-4">
                {!isLogin && (
                  <div>
                    <label className="block text-sm font-medium text-amber-500 mb-2">
                      الاسم الكامل
                    </label>
                    <input
                      type="text"
                      name="name"
                      value={formData.name}
                      onChange={handleInputChange}
                      className="w-full px-4 py-3 bg-black border border-amber-500/30 rounded-lg text-amber-500 placeholder-amber-600 focus:outline-none focus:ring-2 focus:ring-amber-500"
                      placeholder="أدخل اسمك الكامل"
                      required={!isLogin}
                    />
                  </div>
                )}

                <div>
                  <label className="block text-sm font-medium text-amber-500 mb-2">
                    البريد الإلكتروني
                  </label>
                  <input
                    type="email"
                    name="email"
                    value={formData.email}
                    onChange={handleInputChange}
                    className="w-full px-4 py-3 bg-black border border-amber-500/30 rounded-lg text-amber-500 placeholder-amber-600 focus:outline-none focus:ring-2 focus:ring-amber-500"
                    placeholder="example@domain.com"
                    required
                  />
                </div>

                <div>
                  <label className="block text-sm font-medium text-amber-500 mb-2">
                    كلمة المرور
                  </label>
                  <input
                    type="password"
                    name="password"
                    value={formData.password}
                    onChange={handleInputChange}
                    className="w-full px-4 py-3 bg-black border border-amber-500/30 rounded-lg text-amber-500 placeholder-amber-600 focus:outline-none focus:ring-2 focus:ring-amber-500"
                    placeholder="كلمة المرور"
                    required
                  />
                </div>

                {!isLogin && (
                  <div>
                    <label className="block text-sm font-medium text-amber-500 mb-2">
                      تأكيد كلمة المرور
                    </label>
                    <input
                      type="password"
                      name="confirmPassword"
                      value={formData.confirmPassword}
                      onChange={handleInputChange}
                      className="w-full px-4 py-3 bg-black border border-amber-500/30 rounded-lg text-amber-500 placeholder-amber-600 focus:outline-none focus:ring-2 focus:ring-amber-500"
                      placeholder="أعد إدخال كلمة المرور"
                      required={!isLogin}
                    />
                  </div>
                )}

                <Button type="submit" className="w-full py-3 text-lg">
                  {isLogin ? 'تسجيل الدخول' : 'إنشاء الحساب'}
                </Button>
              </form>

              <div className="mt-6 text-center">
                <p className="text-gray-400 text-sm">
                  {isLogin ? 'ليس لديك حساب؟' : 'لديك حساب بالفعل؟'}
                  <button
                    onClick={() => setIsLogin(!isLogin)}
                    className="text-amber-500 hover:text-yellow-400 font-semibold mr-2"
                  >
                    {isLogin ? 'إنشاء حساب جديد' : 'تسجيل الدخول'}
                  </button>
                </p>
              </div>

              {isLogin && (
                <div className="mt-4 text-center">
                  <Link to="/forgot-password" className="text-amber-500 hover:text-yellow-400 text-sm">
                    نسيت كلمة المرور؟
                  </Link>
                </div>
              )}
            </CardContent>
          </Card>

          {/* Features Preview */}
          <div className="mt-8 text-center text-gray-400 text-sm">
            <p className="mb-2">🚀 ابدأ مجاناً واحصل على:</p>
            <div className="flex justify-center gap-4 text-xs">
              <span>• 5 تحليلات مجانية</span>
              <span>• تقارير PDF</span>
              <span>• دعم فني</span>
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

export default AuthPage;