import React, { useState } from 'react';
import { Link, useNavigate, useLocation } from 'react-router-dom';
import { Button } from '../ui/button';

interface HeaderProps {
  user?: {
    name: string;
    type: 'user' | 'admin' | 'guest';
    subscriptionStatus: 'active' | 'trial' | 'inactive';
  };
  onLogout?: () => void;
}

export const Header: React.FC<HeaderProps> = ({ user, onLogout }) => {
  const [searchQuery, setSearchQuery] = useState('');
  const navigate = useNavigate();
  const location = useLocation();

  const handleSearch = (e: React.FormEvent) => {
    e.preventDefault();
    if (searchQuery.trim()) {
      const searchTerm = searchQuery.toLowerCase();

      if (searchTerm.includes('تحليل') || searchTerm.includes('analysis')) {
        navigate('/', { state: { scrollTo: 'analysis-types' } });
      } else if (searchTerm.includes('مميزات') || searchTerm.includes('features')) {
        navigate('/', { state: { scrollTo: 'features' } });
      } else if (searchTerm.includes('أسعار') || searchTerm.includes('pricing')) {
        navigate('/', { state: { scrollTo: 'pricing' } });
      } else if (searchTerm.includes('لوحة') || searchTerm.includes('dashboard')) {
        navigate('/dashboard');
      } else if (searchTerm.includes('تقارير') || searchTerm.includes('reports')) {
        navigate('/reports');
      } else {
        navigate('/');
      }

      setSearchQuery('');
    }
  };

  const goToHomePage = () => {
    navigate('/');
  };

  const scrollToSection = (sectionId: string) => {
    if (location.pathname !== '/') {
      navigate('/', { state: { scrollTo: sectionId } });
    } else {
      const element = document.getElementById(sectionId);
      if (element) {
        element.scrollIntoView({ behavior: 'smooth' });
      }
    }
  };

  return (
    <header className="bg-black border-b border-amber-500 sticky top-0 z-50">
      <div className="container mx-auto px-4">
        {/* Top Header */}
        <div className="flex items-center justify-between py-4">
          {/* Logo and Brand */}
          <div className="flex items-center gap-4">
            <div className="relative">
              <div
                className="w-12 h-12 bg-gradient-to-r from-amber-500 to-yellow-500 rounded-full flex items-center justify-center cursor-pointer animate-pulse"
                onClick={goToHomePage}
              >
                <span className="text-black text-xl font-bold">Fi</span>
              </div>
            </div>
            <div>
              <h1
                className="text-2xl font-bold text-amber-500 cursor-pointer hover:text-yellow-400 transition-colors"
                onClick={goToHomePage}
              >
                FinClick.AI
              </h1>
              <p className="text-sm text-amber-600">منصة التحليل المالي الذكية الثورية</p>
            </div>
          </div>

          {/* Search Bar */}
          <div className="flex-1 max-w-md mx-8">
            <form onSubmit={handleSearch} className="relative">
              <div className="absolute right-3 top-1/2 transform -translate-y-1/2 text-amber-500">
                🔍
              </div>
              <input
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                placeholder="البحث في المنصة..."
                className="w-full px-4 py-2 pr-10 bg-black border border-amber-500 rounded-lg text-amber-500 placeholder-amber-600 focus:outline-none focus:ring-2 focus:ring-amber-500"
              />
            </form>
          </div>

          {/* Right Side Controls */}
          <div className="flex items-center gap-4">
            <Button
              variant="ghost"
              className="text-amber-500 hover:bg-amber-500 hover:text-black"
            >
              🔔
            </Button>

            {user ? (
              <div className="flex items-center gap-4">
                <span className="text-amber-500">مرحباً، {user.name}</span>
                <div className="flex items-center gap-2">
                  <div className={`w-2 h-2 rounded-full ${
                    user.subscriptionStatus === 'active' ? 'bg-green-500' :
                    user.subscriptionStatus === 'trial' ? 'bg-yellow-500' : 'bg-red-500'
                  }`}></div>
                  <span className="text-xs text-amber-600">
                    {user.subscriptionStatus === 'active' ? 'نشط' :
                     user.subscriptionStatus === 'trial' ? 'تجريبي' : 'منتهي'}
                  </span>
                </div>
                <Button
                  onClick={onLogout}
                  variant="outline"
                  className="bg-black border-amber-500 text-amber-500 hover:bg-amber-500 hover:text-black"
                >
                  تسجيل الخروج
                </Button>
              </div>
            ) : (
              <>
                <Link to="/auth">
                  <Button
                    variant="outline"
                    className="bg-black border-amber-500 text-amber-500 hover:bg-amber-500 hover:text-black"
                  >
                    إنشاء حساب
                  </Button>
                </Link>
                <Link to="/auth">
                  <Button className="bg-amber-500 text-black hover:bg-amber-600">
                    تسجيل الدخول
                  </Button>
                </Link>
              </>
            )}
          </div>
        </div>

        {/* Navigation Menu */}
        <nav className="border-t border-amber-500 py-3">
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-6">
              <button
                onClick={goToHomePage}
                className="flex items-center gap-2 text-amber-500 hover:text-yellow-400 transition-colors"
              >
                🏠 الصفحة الرئيسية
              </button>

              <Link
                to="/dashboard"
                className="flex items-center gap-2 text-amber-500 hover:text-yellow-400 transition-colors"
              >
                📊 لوحة التحكم
              </Link>

              <button
                onClick={() => scrollToSection('analysis-types')}
                className="flex items-center gap-2 text-amber-500 hover:text-yellow-400 transition-colors"
              >
                📈 أنواع التحليل
              </button>

              <button
                onClick={() => scrollToSection('features')}
                className="flex items-center gap-2 text-amber-500 hover:text-yellow-400 transition-colors"
              >
                ⭐ مميزات المنصة
              </button>

              <button
                onClick={() => scrollToSection('pricing')}
                className="flex items-center gap-2 text-amber-500 hover:text-yellow-400 transition-colors"
              >
                💳 الاشتراكات والأسعار
              </button>

              <Link
                to="/reports"
                className="flex items-center gap-2 text-amber-500 hover:text-yellow-400 transition-colors"
              >
                📄 التقارير
              </Link>

              <button
                onClick={() => scrollToSection('contact')}
                className="flex items-center gap-2 text-amber-500 hover:text-yellow-400 transition-colors"
              >
                📞 التواصل والدعم
              </button>
            </div>

            <div className="flex items-center gap-2">
              <Button
                variant="ghost"
                className="text-amber-500 hover:bg-amber-500 hover:text-black"
                onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
              >
                ⬆️
              </Button>
              <Button
                variant="ghost"
                className="text-amber-500 hover:bg-amber-500 hover:text-black"
                onClick={() => window.scrollTo({ top: document.body.scrollHeight, behavior: 'smooth' })}
              >
                ⬇️
              </Button>
            </div>
          </div>
        </nav>
      </div>
    </header>
  );
};