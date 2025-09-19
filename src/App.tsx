/**
 * Main App Component - FinClick.AI Platform
 * المكون الرئيسي للتطبيق
 */

import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import HomePage from './pages/HomePage';
import AuthPage from './pages/AuthPage';
import DashboardPageV2 from './pages/DashboardPageV2';
import ReportsPage from './pages/ReportsPage';
import LoginPage from './pages/auth/LoginPage';
import RegisterPage from './pages/auth/RegisterPage';
import DashboardPage from './pages/dashboard/DashboardPage';
import AnalysisPage from './pages/analysis/AnalysisPage';
import LiquidityAnalysisPage from './pages/analysis/LiquidityAnalysisPage';
import SubscriptionPage from './pages/subscription/SubscriptionPage';
import NotFoundPage from './pages/NotFoundPage';

function App() {
  return (
    <div className="App min-h-screen bg-black text-amber-500">
      <Router>
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/auth" element={<AuthPage />} />
          <Route path="/login" element={<AuthPage />} />
          <Route path="/register" element={<AuthPage />} />
          <Route path="/dashboard" element={<DashboardPageV2 />} />
          <Route path="/reports" element={<ReportsPage />} />

          {/* Legacy routes for backward compatibility */}
          <Route path="/dashboard-old" element={<DashboardPage />} />
          <Route path="/analysis" element={<AnalysisPage />} />
          <Route path="/analysis/liquidity" element={<LiquidityAnalysisPage />} />
          <Route path="/subscription" element={<SubscriptionPage />} />
          <Route path="*" element={<NotFoundPage />} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;