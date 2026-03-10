import React from 'react';
import { Capacitor } from '@capacitor/core';
import LandingPage from './LandingPage'; // استدعاء صفحة الهبوط التي صممناها
import ParentPortal from './ParentPortal'; // هذا يجب أن يكون ملف التطبيق الأساسي القديم الخاص بك

function App() {
  // الجراحة الذكية: هل نحن داخل تطبيق أندرويد (Native) أم متصفح ويب؟
  const isNative = Capacitor.isNativePlatform();

  if (isNative) {
    // إذا كان ولي الأمر يفتح التطبيق من هاتفه، اعرض له واجهة التطبيق
    return <ParentPortal />; 
  }

  // إذا تم فتح الرابط عبر الواتساب في المتصفح، اعرض له صفحة التحميل
  return <LandingPage />;
}

export default App;
