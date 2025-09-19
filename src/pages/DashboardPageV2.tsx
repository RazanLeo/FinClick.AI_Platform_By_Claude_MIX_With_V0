import React, { useState } from 'react';
import { Header } from '../components/layout/Header';
import { UserDashboard } from '../components/dashboard/UserDashboard';

interface User {
  name: string;
  type: 'user' | 'admin' | 'guest';
  subscriptionStatus: 'active' | 'trial' | 'inactive';
}

const DashboardPageV2: React.FC = () => {
  // Mock user - in real app this would come from auth context
  const [user] = useState<User>({
    name: 'أحمد محمد',
    type: 'user',
    subscriptionStatus: 'active'
  });

  const handleLogout = () => {
    // Handle logout logic
    console.log('User logged out');
  };

  return (
    <div className="min-h-screen bg-black">
      <Header user={user} onLogout={handleLogout} />

      {/* Stock Ticker */}
      <div className="bg-gray-900 border-t border-amber-500/20 py-2 overflow-hidden">
        <div className="animate-pulse">
          <div className="flex whitespace-nowrap animate-scroll">
            <span className="text-amber-500 mx-8">📈 TADAWUL: +1.2%</span>
            <span className="text-green-400 mx-8">🏦 البنك الأهلي: 45.80 (+2.1%)</span>
            <span className="text-red-400 mx-8">⚡ أرامكو: 28.50 (-0.8%)</span>
            <span className="text-green-400 mx-8">🏭 سابك: 89.20 (+1.5%)</span>
            <span className="text-amber-500 mx-8">💎 معادن: 52.30 (+0.9%)</span>
            <span className="text-blue-400 mx-8">🏪 الراجحي: 78.90 (+1.8%)</span>
            <span className="text-green-400 mx-8">⚡ الكهرباء: 23.40 (+0.5%)</span>
          </div>
        </div>
      </div>

      <UserDashboard user={user} />
    </div>
  );
};

export default DashboardPageV2;