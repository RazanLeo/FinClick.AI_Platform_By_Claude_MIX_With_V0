/**
 * Subscription Plans Component - FinClick.AI Platform
 * مكون خطط الاشتراك
 */

import React, { useState } from 'react';
import { Card, CardContent, CardHeader, CardTitle } from '../ui/Card';
import { Button } from '../ui/Button';
import { Badge } from '../ui/Badge';
import { CheckCircle, Star, Zap, Crown, Building } from 'lucide-react';

interface PlanFeature {
  name: string;
  included: boolean;
  description?: string;
}

interface SubscriptionPlan {
  id: string;
  name: string;
  nameAr: string;
  price: {
    monthly: number;
    yearly: number;
  };
  description: string;
  descriptionAr: string;
  icon: React.ReactNode;
  popular?: boolean;
  features: PlanFeature[];
  analysisLimits: {
    liquidity: number;
    profitability: number;
    efficiency: number;
    leverage: number;
    market: number;
    risk: number;
    growth: number;
    cashFlow: number;
    valuation: number;
  };
  additionalBenefits: string[];
}

const SubscriptionPlans: React.FC = () => {
  const [isYearly, setIsYearly] = useState(false);
  const [selectedPlan, setSelectedPlan] = useState<string | null>(null);
  const [loading, setLoading] = useState(false);

  const plans: SubscriptionPlan[] = [
    {
      id: 'free',
      name: 'Free',
      nameAr: 'مجاني',
      price: { monthly: 0, yearly: 0 },
      description: 'Perfect for getting started with basic financial analysis',
      descriptionAr: 'مثالي للبدء بالتحليل المالي الأساسي',
      icon: <Star className=\"w-6 h-6\" />,
      features: [
        { name: 'تحليل السيولة الأساسي', included: true },
        { name: 'تحليل الربحية الأساسي', included: true },
        { name: 'تقارير شهرية محدودة', included: true },
        { name: 'دعم عبر البريد الإلكتروني', included: true },
        { name: 'تحليلات متقدمة', included: false },
        { name: 'تحليل المخاطر', included: false },
        { name: 'التحليل بالذكاء الاصطناعي', included: false },
        { name: 'تقارير مخصصة', included: false },
      ],
      analysisLimits: {
        liquidity: 5,
        profitability: 5,
        efficiency: 0,
        leverage: 0,
        market: 0,
        risk: 0,
        growth: 0,
        cashFlow: 0,
        valuation: 0,
      },
      additionalBenefits: [
        'واجهة مستخدم عربية بالكامل',
        'دروس تعليمية أساسية',
        'مكتبة مصطلحات مالية',
      ],
    },
    {
      id: 'basic',
      name: 'Basic',
      nameAr: 'أساسي',
      price: { monthly: 99, yearly: 990 },
      description: 'Great for small businesses and individual analysts',
      descriptionAr: 'ممتاز للشركات الصغيرة والمحللين الأفراد',
      icon: <Zap className=\"w-6 h-6\" />,
      features: [
        { name: 'جميع ميزات الخطة المجانية', included: true },
        { name: 'تحليل الكفاءة والرافعة المالية', included: true },
        { name: 'تحليل التدفق النقدي', included: true },
        { name: 'تقارير شهرية مفصلة', included: true },
        { name: 'مقارنات صناعية', included: true },
        { name: 'دعم هاتفي', included: true },
        { name: 'تحليل المخاطر المتقدم', included: false },
        { name: 'تحليل السوق', included: false },
      ],
      analysisLimits: {
        liquidity: 50,
        profitability: 50,
        efficiency: 25,
        leverage: 25,
        market: 0,
        risk: 0,
        growth: 0,
        cashFlow: 25,
        valuation: 0,
      },
      additionalBenefits: [
        'تصدير التقارير بصيغة PDF',
        'مكتبة قوالب تحليلية',
        'تنبيهات ذكية',
        'تحليل اتجاهات 12 شهر',
      ],
    },
    {
      id: 'professional',
      name: 'Professional',
      nameAr: 'احترافي',
      price: { monthly: 299, yearly: 2990 },
      description: 'Advanced analytics for growing businesses',
      descriptionAr: 'تحليلات متقدمة للشركات النامية',
      icon: <Crown className=\"w-6 h-6\" />,
      popular: true,
      features: [
        { name: 'جميع ميزات الخطة الأساسية', included: true },
        { name: 'تحليل المخاطر المتقدم', included: true },
        { name: 'تحليل السوق والنمو', included: true },
        { name: 'التحليل بالذكاء الاصطناعي', included: true },
        { name: 'تقارير مخصصة', included: true },
        { name: 'مدير حساب مخصص', included: true },
        { name: 'تحليل التقييم الأساسي', included: true },
        { name: 'API Access', included: true },
      ],
      analysisLimits: {
        liquidity: 200,
        profitability: 200,
        efficiency: 100,
        leverage: 100,
        market: 50,
        risk: 50,
        growth: 50,
        cashFlow: 100,
        valuation: 10,
      },
      additionalBenefits: [
        'تحليل تنبؤي بالذكاء الاصطناعي',
        'لوحة معلومات متقدمة',
        'تحليل المنافسين',
        'تقارير تلقائية أسبوعية',
        'ورش عمل شهرية مجانية',
      ],
    },
    {
      id: 'enterprise',
      name: 'Enterprise',
      nameAr: 'المؤسسات',
      price: { monthly: 999, yearly: 9990 },
      description: 'Complete solution for large organizations',
      descriptionAr: 'الحل الشامل للمؤسسات الكبيرة',
      icon: <Building className=\"w-6 h-6\" />,
      features: [
        { name: 'جميع ميزات الخطة الاحترافية', included: true },
        { name: 'تحليل التقييم المتقدم', included: true },
        { name: 'تحليلات غير محدودة', included: true },
        { name: 'API مطور بالكامل', included: true },
        { name: 'تخصيص كامل للمنصة', included: true },
        { name: 'فريق دعم مخصص', included: true },
        { name: 'تدريب فريق العمل', included: true },
        { name: 'تكامل مع الأنظمة المؤسسية', included: true },
      ],
      analysisLimits: {
        liquidity: -1, // unlimited
        profitability: -1,
        efficiency: -1,
        leverage: -1,
        market: -1,
        risk: -1,
        growth: -1,
        cashFlow: -1,
        valuation: -1,
      },
      additionalBenefits: [
        'استشارات مالية مخصصة',
        'تقارير مجلس إدارة',
        'تحليل محافظ متعددة',
        'نماذج تقييم متقدمة',
        'دعم 24/7',
        'SLA مضمون',
      ],
    },
  ];

  const handleSelectPlan = async (planId: string) => {
    setSelectedPlan(planId);
    setLoading(true);

    try {
      // محاكاة API call للاشتراك
      await new Promise(resolve => setTimeout(resolve, 2000));

      if (planId === 'free') {
        // تفعيل الخطة المجانية مباشرة
        console.log('Activated free plan');
      } else {
        // توجيه لصفحة الدفع
        console.log(`Redirecting to payment for plan: ${planId}`);
      }
    } catch (error) {
      console.error('Error selecting plan:', error);
    } finally {
      setLoading(false);
      setSelectedPlan(null);
    }
  };

  const formatPrice = (price: number, isYearly: boolean = false) => {
    if (price === 0) return 'مجاني';

    const finalPrice = isYearly ? price : price;
    const discount = isYearly ? Math.round((price * 12 - price) / (price * 12) * 100) : 0;

    return (
      <div className=\"text-center\">
        <span className=\"text-3xl font-bold\">
          {finalPrice.toLocaleString()} ر.س
        </span>
        {isYearly && discount > 0 && (
          <div className=\"text-sm text-green-600 font-medium\">
            وفر {discount}% سنوياً
          </div>
        )}
        <div className=\"text-sm text-gray-500\">
          {isYearly ? 'سنوياً' : 'شهرياً'}
        </div>
      </div>
    );
  };

  const formatLimit = (limit: number) => {
    if (limit === -1) return 'غير محدود';
    if (limit === 0) return 'غير متاح';
    return limit.toLocaleString();
  };

  return (
    <div className=\"space-y-8\" dir=\"rtl\">
      {/* Header */}
      <div className=\"text-center space-y-4\">
        <h2 className=\"text-4xl font-bold text-gray-900\">اختر الخطة المناسبة لك</h2>
        <p className=\"text-xl text-gray-600 max-w-3xl mx-auto\">
          احصل على أدوات التحليل المالي المتقدمة التي تحتاجها لاتخاذ قرارات مالية ذكية
        </p>

        {/* Billing Toggle */}
        <div className=\"flex items-center justify-center space-x-4 space-x-reverse\">
          <span className={`text-sm ${!isYearly ? 'text-gray-900 font-medium' : 'text-gray-500'}`}>
            شهري
          </span>
          <button
            onClick={() => setIsYearly(!isYearly)}
            className={`relative inline-flex h-6 w-11 items-center rounded-full transition-colors ${
              isYearly ? 'bg-blue-600' : 'bg-gray-200'
            }`}
          >
            <span
              className={`inline-block h-4 w-4 transform rounded-full bg-white transition-transform ${
                isYearly ? 'translate-x-6' : 'translate-x-1'
              }`}
            />
          </button>
          <span className={`text-sm ${isYearly ? 'text-gray-900 font-medium' : 'text-gray-500'}`}>
            سنوي
          </span>
          {isYearly && (
            <Badge variant=\"success\" className=\"mr-2\">
              وفر حتى 20%
            </Badge>
          )}
        </div>
      </div>

      {/* Plans Grid */}
      <div className=\"grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 max-w-7xl mx-auto\">
        {plans.map((plan) => (
          <Card
            key={plan.id}
            className={`relative transition-all duration-300 ${
              plan.popular
                ? 'ring-2 ring-blue-500 shadow-lg scale-105'
                : 'hover:shadow-lg hover:scale-102'
            }`}
          >
            {plan.popular && (
              <div className=\"absolute -top-3 right-1/2 transform translate-x-1/2\">
                <Badge variant=\"primary\" className=\"bg-blue-500 text-white px-4 py-1\">
                  الأكثر شعبية
                </Badge>
              </div>
            )}

            <CardHeader className=\"text-center space-y-4\">
              <div className={`mx-auto p-3 rounded-full ${
                plan.popular ? 'bg-blue-100 text-blue-600' : 'bg-gray-100 text-gray-600'
              }`}>
                {plan.icon}
              </div>

              <div>
                <CardTitle className=\"text-2xl font-bold\">{plan.nameAr}</CardTitle>
                <p className=\"text-gray-600 text-sm mt-2\">{plan.descriptionAr}</p>
              </div>

              <div className=\"py-4\">
                {formatPrice(isYearly ? plan.price.yearly : plan.price.monthly, isYearly)}
              </div>
            </CardHeader>

            <CardContent className=\"space-y-6\">
              {/* Features List */}
              <div className=\"space-y-3\">
                <h4 className=\"font-semibold text-gray-900\">الميزات:</h4>
                <ul className=\"space-y-2\">
                  {plan.features.map((feature, index) => (
                    <li key={index} className=\"flex items-center space-x-2 space-x-reverse text-sm\">
                      <CheckCircle
                        className={`w-4 h-4 ${
                          feature.included ? 'text-green-500' : 'text-gray-300'
                        }`}
                      />
                      <span className={feature.included ? 'text-gray-700' : 'text-gray-400'}>
                        {feature.name}
                      </span>
                    </li>
                  ))}
                </ul>
              </div>

              {/* Analysis Limits */}
              <div className=\"space-y-3\">
                <h4 className=\"font-semibold text-gray-900\">حدود التحليل الشهرية:</h4>
                <div className=\"grid grid-cols-2 gap-2 text-xs\">
                  <div className=\"flex justify-between\">
                    <span>السيولة:</span>
                    <span className=\"font-medium\">{formatLimit(plan.analysisLimits.liquidity)}</span>
                  </div>
                  <div className=\"flex justify-between\">
                    <span>الربحية:</span>
                    <span className=\"font-medium\">{formatLimit(plan.analysisLimits.profitability)}</span>
                  </div>
                  <div className=\"flex justify-between\">
                    <span>الكفاءة:</span>
                    <span className=\"font-medium\">{formatLimit(plan.analysisLimits.efficiency)}</span>
                  </div>
                  <div className=\"flex justify-between\">
                    <span>الرافعة:</span>
                    <span className=\"font-medium\">{formatLimit(plan.analysisLimits.leverage)}</span>
                  </div>
                </div>
              </div>

              {/* CTA Button */}
              <Button
                onClick={() => handleSelectPlan(plan.id)}
                disabled={loading && selectedPlan === plan.id}
                className={`w-full ${
                  plan.popular
                    ? 'bg-blue-600 hover:bg-blue-700 text-white'
                    : 'bg-gray-100 hover:bg-gray-200 text-gray-900'
                }`}
              >
                {loading && selectedPlan === plan.id ? (
                  <div className=\"flex items-center space-x-2 space-x-reverse\">
                    <div className=\"w-4 h-4 border-2 border-gray-300 border-t-blue-600 rounded-full animate-spin\" />
                    <span>جاري المعالجة...</span>
                  </div>
                ) : plan.id === 'free' ? (
                  'ابدأ مجاناً'
                ) : (
                  'اشترك الآن'
                )}
              </Button>

              {/* Additional Benefits */}
              {plan.additionalBenefits.length > 0 && (
                <div className=\"pt-4 border-t border-gray-200\">
                  <h5 className=\"text-sm font-medium text-gray-700 mb-2\">مزايا إضافية:</h5>
                  <ul className=\"space-y-1 text-xs text-gray-600\">
                    {plan.additionalBenefits.map((benefit, index) => (
                      <li key={index} className=\"flex items-start space-x-2 space-x-reverse\">
                        <span className=\"text-blue-500 mt-1\">•</span>
                        <span>{benefit}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              )}
            </CardContent>
          </Card>
        ))}
      </div>

      {/* FAQ Section */}
      <div className=\"max-w-4xl mx-auto mt-16\">
        <h3 className=\"text-2xl font-bold text-center text-gray-900 mb-8\">
          الأسئلة الشائعة
        </h3>
        <div className=\"grid gap-6\">
          <Card>
            <CardContent className=\"p-6\">
              <h4 className=\"font-semibold text-gray-900 mb-2\">
                هل يمكنني تغيير خطتي في أي وقت؟
              </h4>
              <p className=\"text-gray-600\">
                نعم، يمكنك ترقية أو تخفيض خطتك في أي وقت. ستدفع الفرق تناسبياً للفترة المتبقية.
              </p>
            </CardContent>
          </Card>

          <Card>
            <CardContent className=\"p-6\">
              <h4 className=\"font-semibold text-gray-900 mb-2\">
                ما هي وسائل الدفع المقبولة؟
              </h4>
              <p className=\"text-gray-600\">
                نقبل جميع بطاقات الائتمان الرئيسية، التحويل البنكي، والمحافظ الرقمية مثل STC Pay و Apple Pay.
              </p>
            </CardContent>
          </Card>

          <Card>
            <CardContent className=\"p-6\">
              <h4 className=\"font-semibold text-gray-900 mb-2\">
                هل تقدمون ضمان استرداد الأموال؟
              </h4>
              <p className=\"text-gray-600\">
                نعم، نقدم ضمان استرداد الأموال لمدة 30 يوماً لجميع الخطط المدفوعة دون أي أسئلة.
              </p>
            </CardContent>
          </Card>
        </div>
      </div>
    </div>
  );
};

export default SubscriptionPlans;