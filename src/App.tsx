import React from 'react';
import { Download, ShieldCheck, Star, Activity, MessageCircle, Code, Smartphone, AlertCircle } from 'lucide-react';

const App = () => {
  return (
    <div className="min-h-screen bg-gradient-to-br from-[#0f172a] to-[#1e3a8a] flex items-center justify-center p-4 md:p-8 font-sans text-white overflow-hidden relative" dir="rtl">
      
      {/* إضاءات الخلفية */}
      <div className="absolute top-[-20%] left-[-10%] w-96 h-96 bg-blue-500/20 rounded-full mix-blend-screen filter blur-3xl pointer-events-none"></div>
      <div className="absolute bottom-[-10%] right-[-10%] w-72 h-72 bg-amber-500/20 rounded-full mix-blend-screen filter blur-3xl pointer-events-none"></div>

      <div className="relative z-10 w-full max-w-6xl bg-white/10 backdrop-blur-xl border border-white/20 rounded-[2.5rem] p-6 md:p-12 shadow-[0_20px_50px_rgba(0,0,0,0.5)]">
        
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 md:gap-12 items-center">
          
          {/* ================= القسم الأيمن ================= */}
          <div className="lg:col-span-7 flex flex-col gap-5">
            
            <div className="flex items-center gap-4 mb-2">
              <div className="w-16 h-16 md:w-20 md:h-20 bg-white/10 rounded-2xl p-2 border border-white/20 shadow-lg shrink-0">
                <img src="./logo-512x512.png" alt="أيقونة راصد" className="w-full h-full object-contain drop-shadow-md" />
              </div>
              <div>
                <span className="inline-block bg-amber-500/20 text-amber-300 border border-amber-500/30 rounded-full px-3 py-0.5 text-[11px] font-bold mb-1.5">
                  الإصدار الجديد متوفر الآن
                </span>
                <h1 className="text-3xl md:text-5xl font-black text-white tracking-tight">
                  راصد لولي الأمر
                </h1>
              </div>
            </div>

            <h2 className="text-xl md:text-2xl font-bold text-blue-100 leading-snug">
              أبناؤك تحت أنظارك.. <br className="hidden md:block" />
              <span className="text-amber-400">كُن شريكاً في نجاحهم!</span>
            </h2>
            
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 my-2">
              <div className="flex items-center gap-3 bg-white/5 p-3 rounded-xl border border-white/5 hover:bg-white/10 transition-colors">
                <Activity className="text-blue-400 w-5 h-5 shrink-0" />
                <div>
                  <h3 className="font-bold text-sm text-white">متابعة الحضور</h3>
                  <p className="text-[10px] text-slate-300 mt-0.5">سجل الغياب والتسرب لحظياً</p>
                </div>
              </div>
              <div className="flex items-center gap-3 bg-white/5 p-3 rounded-xl border border-white/5 hover:bg-white/10 transition-colors">
                <Star className="text-amber-400 w-5 h-5 shrink-0" />
                <div>
                  <h3 className="font-bold text-sm text-white">الدرجات والسلوك</h3>
                  <p className="text-[10px] text-slate-300 mt-0.5">النقاط الإيجابية ونتائج الاختبارات</p>
                </div>
              </div>
              <div className="flex items-center gap-3 bg-white/5 p-3 rounded-xl border border-white/5 hover:bg-white/10 transition-colors">
                <MessageCircle className="text-emerald-400 w-5 h-5 shrink-0" />
                <div>
                  <h3 className="font-bold text-sm text-white">تواصل مباشر</h3>
                  <p className="text-[10px] text-slate-300 mt-0.5">مراسلة آمنة مع المعلمين</p>
                </div>
              </div>
              <div className="flex items-center gap-3 bg-white/5 p-3 rounded-xl border border-white/5 hover:bg-white/10 transition-colors">
                <ShieldCheck className="text-purple-400 w-5 h-5 shrink-0" />
                <div>
                  <h3 className="font-bold text-sm text-white">آمن وموثوق</h3>
                  <p className="text-[10px] text-slate-300 mt-0.5">بيانات أبنائك في أمان تام</p>
                </div>
              </div>
            </div>

            {/* ================= أزرار التحميل (أندرويد وآيفون) ================= */}
            <div className="mt-4 flex flex-col sm:flex-row items-center gap-3">
              {/* زر الأندرويد */}
              <a 
                href="./Rased-Parents.apk" 
                download
                className="flex-1 flex w-full justify-center bg-gradient-to-r from-amber-500 to-amber-600 text-white px-4 py-3.5 rounded-xl font-black text-sm items-center gap-2 shadow-[0_8px_20px_rgba(245,158,11,0.3)] hover:scale-105 transition-transform"
              >
                <Download size={18} />
                تحميل للأندرويد (APK)
              </a>

              {/* زر الآيفون الجديد */}
              <a 
                href="https://alzaabi555.github.io/rased-parents-app/" 
                target="_blank" 
                rel="noopener noreferrer"
                className="flex-1 flex w-full justify-center bg-slate-800/80 hover:bg-slate-700 border border-slate-600 text-white px-4 py-3.5 rounded-xl font-black text-sm items-center gap-2 shadow-[0_8px_20px_rgba(15,23,42,0.3)] hover:scale-105 transition-transform backdrop-blur-sm"
              >
                <Smartphone size={18} />
                دخول أصحاب الآيفون 
              </a>
            </div>

            {/* ================= ملاحظات وتوجيهات التحميل ================= */}
            <div className="flex flex-col gap-2 mt-2 bg-white/5 border border-white/10 p-3 rounded-xl">
               <div className="flex items-start gap-2">
                 <AlertCircle size={14} className="text-amber-400 shrink-0 mt-0.5" />
                 <p className="text-[10px] md:text-xs text-slate-300 font-bold leading-relaxed">
                   <span className="text-amber-400">لمستخدمي أندرويد:</span> عند التحميل، قد يظهر تنبيه أن الملف "قد يكون ضاراً" (لأنه من خارج المتجر). اضغط على <span className="text-white font-black">(التنزيل على أي حال)</span>، ثم افتح الملف واضغط <span className="text-white font-black">(تثبيت)</span>، التطبيق آمن 100%.
                 </p>
               </div>
               <div className="flex items-start gap-2 border-t border-white/10 pt-2">
                 <AlertCircle size={14} className="text-blue-400 shrink-0 mt-0.5" />
                 <p className="text-[10px] md:text-xs text-slate-300 font-bold leading-relaxed">
                   <span className="text-blue-400">لمستخدمي الآيفون:</span> اضغط على زر الآيفون أعلاه، وبمجرد فتح الصفحة، اضغط على أيقونة المشاركة في المتصفح ثم اختر <span className="text-white font-black">(إضافة إلى الشاشة الرئيسية)</span> ليصبح كتطبيق عادي.
                 </p>
               </div>
            </div>

          </div>

          {/* ================= القسم الأيسر ================= */}
          <div className="lg:col-span-5 relative flex justify-center items-center h-[300px] md:h-[400px] mt-8 lg:mt-0">
            <div className="absolute transform -rotate-6 -translate-x-12 md:-translate-x-16 w-36 md:w-48 h-auto border-[4px] border-slate-800 rounded-3xl overflow-hidden shadow-2xl opacity-80 hover:opacity-100 hover:rotate-0 hover:z-20 transition-all duration-300">
              <img src="./login-screenshot.jpg" alt="شاشة الدخول" className="w-full h-auto object-cover pointer-events-none" />
            </div>
            
            <div className="absolute transform rotate-3 translate-x-12 md:translate-x-8 z-10 w-44 md:w-56 h-auto border-[4px] border-slate-800 rounded-[2rem] overflow-hidden shadow-2xl hover:scale-105 transition-all duration-300">
              <img src="./dashboard-screenshot.jpg" alt="لوحة المتابعة" className="w-full h-auto object-cover pointer-events-none" />
            </div>
          </div>

        </div>

        {/* ================= تذييل البطاقة ================= */}
        <div className="mt-8 md:mt-12 pt-4 border-t border-white/10 flex flex-col md:flex-row items-center justify-between gap-4 text-center">
           <p className="text-slate-300 text-xs font-bold">الرابط الأقوى بين المدرسة والبيت</p>
           <div className="flex items-center gap-2 text-xs">
             <Code size={14} className="text-amber-500" />
             <span className="text-slate-400">برمجة وتطوير:</span>
             <span className="text-amber-500 font-black tracking-widest uppercase">Mohammed Alzaabi</span>
           </div>
        </div>

      </div>
    </div>
  );
};

export default App;
