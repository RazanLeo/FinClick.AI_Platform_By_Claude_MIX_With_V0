import React from 'react';
import './App.css';

function App() {
  return (
    <div className="App" dir="rtl">
      <header className="App-header" style={{backgroundColor: '#1a1a1a', color: '#f1c40f', padding: '20px'}}>
        <h1>🚀 FinClick.AI Platform</h1>
        <h2>منصة التحليل المالي الذكية</h2>
        <p>تم النشر بنجاح! ✅</p>

        <div style={{marginTop: '30px', textAlign: 'right'}}>
          <h3>🎯 المميزات الرئيسية:</h3>
          <ul style={{listStyle: 'none', padding: 0}}>
            <li>📊 180+ نوع تحليل مالي</li>
            <li>🤖 23 وكيل ذكاء اصطناعي</li>
            <li>📈 تحليل شامل ومتقدم</li>
            <li>📱 واجهة عربية سهلة الاستخدام</li>
            <li>☁️ نشر سحابي على Vercel</li>
          </ul>
        </div>

        <div style={{marginTop: '30px'}}>
          <button
            style={{
              backgroundColor: '#f1c40f',
              color: '#1a1a1a',
              border: 'none',
              padding: '15px 30px',
              borderRadius: '5px',
              fontSize: '18px',
              cursor: 'pointer',
              fontWeight: 'bold'
            }}
            onClick={() => alert('المنصة جاهزة للعمل! 🎉')}
          >
            ابدأ التحليل المالي الآن
          </button>
        </div>

        <div style={{marginTop: '20px', fontSize: '14px', opacity: 0.8}}>
          <p>تم التطوير بواسطة Claude Code ⚡</p>
          <p>النشر: Vercel 🚀 | الكود: GitHub 📁</p>
        </div>
      </header>
    </div>
  );
}

export default App;