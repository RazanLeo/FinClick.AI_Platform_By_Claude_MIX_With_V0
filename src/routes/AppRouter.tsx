/**
 * App Router - FinClick.AI Platform
 * نظام التوجيه الرئيسي
 */

import React, { Suspense } from 'react';
import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom';
import { useAuth } from '../contexts/AuthContext';
import { LoadingSpinner } from '../components/ui/LoadingSpinner';
import ErrorBoundary from '../components/ui/ErrorBoundary';

// Lazy loading للمكونات
const HomePage = React.lazy(() => import('../pages/HomePage'));
const LoginPage = React.lazy(() => import('../pages/auth/LoginPage'));
const RegisterPage = React.lazy(() => import('../pages/auth/RegisterPage'));
const DashboardPage = React.lazy(() => import('../pages/dashboard/DashboardPage'));
const AnalysisPage = React.lazy(() => import('../pages/analysis/AnalysisPage'));
const ProfitabilityAnalysisPage = React.lazy(() => import('../pages/analysis/ProfitabilityAnalysisPage'));
const LiquidityAnalysisPage = React.lazy(() => import('../pages/analysis/LiquidityAnalysisPage'));
const EfficiencyAnalysisPage = React.lazy(() => import('../pages/analysis/EfficiencyAnalysisPage'));
const LeverageAnalysisPage = React.lazy(() => import('../pages/analysis/LeverageAnalysisPage'));
const MarketAnalysisPage = React.lazy(() => import('../pages/analysis/MarketAnalysisPage'));
const RiskAnalysisPage = React.lazy(() => import('../pages/analysis/RiskAnalysisPage'));
const GrowthAnalysisPage = React.lazy(() => import('../pages/analysis/GrowthAnalysisPage'));
const CashFlowAnalysisPage = React.lazy(() => import('../pages/analysis/CashFlowAnalysisPage'));
const ValuationAnalysisPage = React.lazy(() => import('../pages/analysis/ValuationAnalysisPage'));
const ReportsPage = React.lazy(() => import('../pages/reports/ReportsPage'));
const SubscriptionPage = React.lazy(() => import('../pages/subscription/SubscriptionPage'));
const SettingsPage = React.lazy(() => import('../pages/settings/SettingsPage'));
const ProfilePage = React.lazy(() => import('../pages/profile/ProfilePage'));
const NotFoundPage = React.lazy(() => import('../pages/NotFoundPage'));

// Route Guards
interface ProtectedRouteProps {
  children: React.ReactNode;
  requiredPlan?: 'free' | 'basic' | 'professional' | 'enterprise';
}

const ProtectedRoute: React.FC<ProtectedRouteProps> = ({
  children,
  requiredPlan = 'free'
}) => {
  const { user, isAuthenticated, loading } = useAuth();

  if (loading) {
    return (
      <div className=\"min-h-screen flex items-center justify-center\">
        <LoadingSpinner size=\"lg\" />
      </div>
    );
  }

  if (!isAuthenticated) {
    return <Navigate to=\"/login\" replace />;
  }

  // فحص خطة الاشتراك
  if (requiredPlan !== 'free' && user?.subscription?.plan !== requiredPlan) {
    const planHierarchy = ['free', 'basic', 'professional', 'enterprise'];
    const userPlanLevel = planHierarchy.indexOf(user?.subscription?.plan || 'free');
    const requiredPlanLevel = planHierarchy.indexOf(requiredPlan);

    if (userPlanLevel < requiredPlanLevel) {
      return <Navigate to=\"/subscription\" replace />;
    }
  }

  return <>{children}</>;
};

const PublicRoute: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const { isAuthenticated, loading } = useAuth();

  if (loading) {
    return (
      <div className=\"min-h-screen flex items-center justify-center\">
        <LoadingSpinner size=\"lg\" />
      </div>
    );
  }

  if (isAuthenticated) {
    return <Navigate to=\"/dashboard\" replace />;
  }

  return <>{children}</>;
};

const AppRouter: React.FC = () => {
  return (
    <Router>
      <ErrorBoundary>
        <Suspense
          fallback={
            <div className=\"min-h-screen flex items-center justify-center bg-gray-50\">
              <div className=\"text-center\">
                <LoadingSpinner size=\"lg\" />
                <p className=\"mt-4 text-gray-600\">جاري تحميل الصفحة...</p>
              </div>
            </div>
          }
        >
          <Routes>
            {/* Public Routes */}
            <Route
              path=\"/\"
              element={
                <PublicRoute>
                  <HomePage />
                </PublicRoute>
              }
            />
            <Route
              path=\"/login\"
              element={
                <PublicRoute>
                  <LoginPage />
                </PublicRoute>
              }
            />
            <Route
              path=\"/register\"
              element={
                <PublicRoute>
                  <RegisterPage />
                </PublicRoute>
              }
            />

            {/* Protected Routes */}
            <Route
              path=\"/dashboard\"
              element={
                <ProtectedRoute>
                  <DashboardPage />
                </ProtectedRoute>
              }
            />

            {/* Analysis Routes */}
            <Route
              path=\"/analysis\"
              element={
                <ProtectedRoute>
                  <AnalysisPage />
                </ProtectedRoute>
              }
            />
            <Route
              path=\"/analysis/profitability\"
              element={
                <ProtectedRoute>
                  <ProfitabilityAnalysisPage />
                </ProtectedRoute>
              }
            />
            <Route
              path=\"/analysis/liquidity\"
              element={
                <ProtectedRoute>
                  <LiquidityAnalysisPage />
                </ProtectedRoute>
              }
            />
            <Route
              path=\"/analysis/efficiency\"
              element={
                <ProtectedRoute requiredPlan=\"basic\">
                  <EfficiencyAnalysisPage />
                </ProtectedRoute>
              }
            />
            <Route
              path=\"/analysis/leverage\"
              element={
                <ProtectedRoute requiredPlan=\"basic\">
                  <LeverageAnalysisPage />
                </ProtectedRoute>
              }
            />
            <Route
              path=\"/analysis/market\"
              element={
                <ProtectedRoute requiredPlan=\"professional\">
                  <MarketAnalysisPage />
                </ProtectedRoute>
              }
            />
            <Route
              path=\"/analysis/risk\"
              element={
                <ProtectedRoute requiredPlan=\"professional\">
                  <RiskAnalysisPage />
                </ProtectedRoute>
              }
            />
            <Route
              path=\"/analysis/growth\"
              element={
                <ProtectedRoute requiredPlan=\"professional\">
                  <GrowthAnalysisPage />
                </ProtectedRoute>
              }
            />
            <Route
              path=\"/analysis/cash-flow\"
              element={
                <ProtectedRoute requiredPlan=\"basic\">
                  <CashFlowAnalysisPage />
                </ProtectedRoute>
              }
            />
            <Route
              path=\"/analysis/valuation\"
              element={
                <ProtectedRoute requiredPlan=\"enterprise\">
                  <ValuationAnalysisPage />
                </ProtectedRoute>
              }
            />

            {/* Reports */}
            <Route
              path=\"/reports\"
              element={
                <ProtectedRoute requiredPlan=\"basic\">
                  <ReportsPage />
                </ProtectedRoute>
              }
            />

            {/* Subscription */}
            <Route
              path=\"/subscription\"
              element={
                <ProtectedRoute>
                  <SubscriptionPage />
                </ProtectedRoute>
              }
            />

            {/* User Management */}
            <Route
              path=\"/profile\"
              element={
                <ProtectedRoute>
                  <ProfilePage />
                </ProtectedRoute>
              }
            />
            <Route
              path=\"/settings\"
              element={
                <ProtectedRoute>
                  <SettingsPage />
                </ProtectedRoute>
              }
            />

            {/* 404 */}
            <Route path=\"*\" element={<NotFoundPage />} />
          </Routes>
        </Suspense>
      </ErrorBoundary>
    </Router>
  );
};

export default AppRouter;