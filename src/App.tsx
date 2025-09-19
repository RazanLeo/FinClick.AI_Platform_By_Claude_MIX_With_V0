/**
 * Main App Component - FinClick.AI Platform
 * المكون الرئيسي للتطبيق
 */

import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import HomePage from './pages/HomePage';
import LoginPage from './pages/auth/LoginPage';
import RegisterPage from './pages/auth/RegisterPage';
import DashboardPage from './pages/dashboard/DashboardPage';
import AnalysisPage from './pages/analysis/AnalysisPage';
import LiquidityAnalysisPage from './pages/analysis/LiquidityAnalysisPage';
import SubscriptionPage from './pages/subscription/SubscriptionPage';
import ReportsPage from './pages/reports/ReportsPage';
import NotFoundPage from './pages/NotFoundPage';

function App() {
  return (
    <div className="App min-h-screen bg-black text-amber-500">
      <Router>
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/login" element={<LoginPage />} />
          <Route path="/register" element={<RegisterPage />} />
          <Route path="/dashboard" element={<DashboardPage />} />
          <Route path="/analysis" element={<AnalysisPage />} />
          <Route path="/analysis/liquidity" element={<LiquidityAnalysisPage />} />
          <Route path="/subscription" element={<SubscriptionPage />} />
          <Route path="/reports" element={<ReportsPage />} />
          <Route path="*" element={<NotFoundPage />} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;