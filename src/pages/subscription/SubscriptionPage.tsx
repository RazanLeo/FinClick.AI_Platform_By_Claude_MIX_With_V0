import React, { useState } from 'react';

const SubscriptionPage: React.FC = () => {
  const [selectedPlan, setSelectedPlan] = useState('professional');

  const plans = [
    {
      id: 'free',
      name: 'مجاني',
      price: 0,
      features: ['5 تحليلات شهرياً', 'تحليلات أساسية', 'تقارير PDF', 'دعم بريد إلكتروني']
    },
    {
      id: 'professional',
      name: 'احترافي',
      price: 599,
      popular: true,
      features: ['100 تحليل شهرياً', 'جميع التحليلات', '15 وكيل ذكي', 'تقارير مخصصة', 'API متقدم']
    },
    {
      id: 'enterprise',
      name: 'مؤسسي',
      price: 1299,
      features: ['تحليلات غير محدودة', 'جميع الوكلاء الذكيين', 'تقارير مؤسسية', 'دعم مخصص']
    }
  ];

  const handleSubscribe = (planId: string) => {
    alert(`تم اختيار خطة: ${plans.find(p => p.id === planId)?.name}`);
  };

  return (
    <div className="min-h-screen bg-black text-amber-500 p-6" dir="rtl">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-12">
          <h1 className="text-4xl font-bold text-amber-500 mb-4">اختر خطة الاشتراك المناسبة</h1>
          <p className="text-xl text-gray-400">احصل على تحليل مالي متقدم بواسطة الذكاء الاصطناعي</p>
        </div>

        {/* Plans Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-12">
          {plans.map((plan) => (
            <div
              key={plan.id}
              className={`relative bg-black/50 border rounded-2xl p-8 transition-all ${
                plan.popular
                  ? 'border-purple-500 shadow-purple-500/20 shadow-xl scale-105'
                  : 'border-amber-500/30 hover:border-amber-500/50'
              }`}
            >
              {plan.popular && (
                <div className="absolute -top-4 left-1/2 transform -translate-x-1/2">
                  <span className="bg-gradient-to-r from-purple-500 to-pink-500 text-white px-4 py-1 rounded-full text-sm font-bold">
                    الأكثر شعبية
                  </span>
                </div>
              )}

              <div className="text-center mb-6">
                <div className="text-4xl mb-4">
                  {plan.id === 'free' ? '🎁' : plan.id === 'professional' ? '👑' : '⭐'}
                </div>
                <h3 className="text-2xl font-bold text-amber-500 mb-2">{plan.name}</h3>
                <div className="text-3xl font-bold text-white mb-2">
                  {plan.price === 0 ? 'مجاني' : `${plan.price.toLocaleString('ar-SA')} ر.س`}
                </div>
                {plan.price > 0 && (
                  <div className="text-gray-400 text-sm">/شهر</div>
                )}
              </div>

              <div className="space-y-3 mb-8">
                {plan.features.map((feature, index) => (
                  <div key={index} className="flex items-center">
                    <span className="text-green-400 ml-2">✓</span>
                    <span className="text-gray-300 text-sm">{feature}</span>
                  </div>
                ))}
              </div>

              <button
                onClick={() => handleSubscribe(plan.id)}
                className={`w-full py-3 px-4 rounded-lg font-bold transition-all ${
                  plan.popular
                    ? 'bg-gradient-to-r from-purple-500 to-pink-500 text-white hover:from-purple-600 hover:to-pink-600'
                    : 'bg-gradient-to-r from-amber-500 to-yellow-500 text-black hover:from-yellow-500 hover:to-amber-500'
                }`}
              >
                {plan.id === 'free' ? 'البدء مجاناً' : 'اشترك الآن'}
              </button>
            </div>
          ))}
        </div>

        {/* Features Comparison */}
        <div className="bg-black/50 border border-amber-500/30 rounded-xl p-8">
          <h2 className="text-2xl font-bold text-amber-500 mb-8 text-center">مقارنة مفصلة للمميزات</h2>

          <div className="overflow-x-auto">
            <table className="w-full">
              <thead>
                <tr className="border-b border-amber-500/20">
                  <th className="text-right p-4 text-amber-500">المميزة</th>
                  <th className="text-center p-4 text-amber-500">مجاني</th>
                  <th className="text-center p-4 text-amber-500">احترافي</th>
                  <th className="text-center p-4 text-amber-500">مؤسسي</th>
                </tr>
              </thead>
              <tbody className="text-gray-300">
                <tr className="border-b border-amber-500/10">
                  <td className="p-4 font-medium">عدد التحليلات الشهرية</td>
                  <td className="text-center p-4">5</td>
                  <td className="text-center p-4">100</td>
                  <td className="text-center p-4">غير محدود</td>
                </tr>
                <tr className="border-b border-amber-500/10">
                  <td className="p-4 font-medium">وكلاء الذكاء الاصطناعي</td>
                  <td className="text-center p-4">3</td>
                  <td className="text-center p-4">15</td>
                  <td className="text-center p-4">23</td>
                </tr>
                <tr className="border-b border-amber-500/10">
                  <td className="p-4 font-medium">صيغ التقارير</td>
                  <td className="text-center p-4">PDF</td>
                  <td className="text-center p-4">PDF, Excel, Word</td>
                  <td className="text-center p-4">جميع الصيغ</td>
                </tr>
                <tr>
                  <td className="p-4 font-medium">نوع الدعم</td>
                  <td className="text-center p-4">بريد إلكتروني</td>
                  <td className="text-center p-4">24/7</td>
                  <td className="text-center p-4">فريق مخصص</td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>

        {/* FAQ */}
        <div className="mt-16 grid grid-cols-1 md:grid-cols-2 gap-8">
          <div className="bg-black/50 border border-amber-500/30 rounded-xl p-6">
            <h3 className="font-bold text-amber-500 mb-3">هل يمكنني تغيير خطتي؟</h3>
            <p className="text-gray-400">نعم، يمكنك الترقية أو التراجع في أي وقت.</p>
          </div>

          <div className="bg-black/50 border border-amber-500/30 rounded-xl p-6">
            <h3 className="font-bold text-amber-500 mb-3">هل هناك فترة تجريبية؟</h3>
            <p className="text-gray-400">نعم، جميع الخطط تأتي مع تجربة مجانية 14 يوم.</p>
          </div>

          <div className="bg-black/50 border border-amber-500/30 rounded-xl p-6">
            <h3 className="font-bold text-amber-500 mb-3">طرق الدفع المقبولة؟</h3>
            <p className="text-gray-400">بطاقات الائتمان، مدى، والتحويل البنكي.</p>
          </div>

          <div className="bg-black/50 border border-amber-500/30 rounded-xl p-6">
            <h3 className="font-bold text-amber-500 mb-3">هل بياناتي آمنة؟</h3>
            <p className="text-gray-400">نستخدم أعلى معايير الأمان والتشفير.</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SubscriptionPage;