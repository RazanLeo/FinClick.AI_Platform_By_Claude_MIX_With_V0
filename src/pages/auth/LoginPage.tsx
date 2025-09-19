import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';

const LoginPage: React.FC = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const navigate = useNavigate();

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    navigate('/dashboard');
  };

  return (
    <div className="min-h-screen bg-black text-amber-500 flex items-center justify-center p-6" dir="rtl">
      <div className="max-w-md w-full space-y-8">
        <div className="text-center">
          <div className="inline-block bg-gradient-to-r from-amber-500 to-yellow-500 p-4 rounded-xl mb-4">
            <span className="text-black font-bold text-xl">Fi</span>
          </div>
          <h2 className="text-3xl font-bold text-amber-500 mb-2">أهلاً بعودتك</h2>
          <p className="text-gray-400">سجل دخولك للوصول إلى منصة التحليل المالي الذكية</p>
        </div>

        <form className="mt-8 space-y-6" onSubmit={handleSubmit}>
          <div className="space-y-4">
            <div>
              <label className="block text-sm font-medium text-amber-500 mb-2">البريد الإلكتروني</label>
              <input
                type="email"
                required
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                className="w-full px-4 py-3 border border-amber-500/30 bg-black/50 rounded-lg text-amber-500 focus:outline-none focus:ring-2 focus:ring-amber-500"
                placeholder="أدخل بريدك الإلكتروني"
              />
            </div>

            <div>
              <label className="block text-sm font-medium text-amber-500 mb-2">كلمة المرور</label>
              <input
                type="password"
                required
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                className="w-full px-4 py-3 border border-amber-500/30 bg-black/50 rounded-lg text-amber-500 focus:outline-none focus:ring-2 focus:ring-amber-500"
                placeholder="أدخل كلمة المرور"
              />
            </div>
          </div>

          <button
            type="submit"
            className="w-full py-3 px-4 bg-gradient-to-r from-amber-500 to-yellow-500 text-black rounded-lg font-semibold hover:from-yellow-500 hover:to-amber-500 transition-all"
          >
            تسجيل الدخول
          </button>

          <div className="text-center">
            <p className="text-sm text-gray-400">
              ليس لديك حساب؟{' '}
              <Link to="/register" className="font-medium text-amber-500 hover:text-yellow-400">
                إنشاء حساب جديد
              </Link>
            </p>
          </div>
        </form>
      </div>
    </div>
  );
};

export default LoginPage;