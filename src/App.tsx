import React from 'react';
import { Download, ShieldCheck, Star, Activity, MessageCircle, Code } from 'lucide-react';

const App = () => {
  return (
    // استخدام min-h-screen مع flex ليتوسط المحتوى الشاشة بالكامل بدون الحاجة للنزول لأسفل
    <div className="min-h-screen bg-gradient-to-br from-[#0f172a] to-[#1e3a8a] flex items-center justify-center p-4 md:p-8 font-sans text-white overflow-hidden relative" dir="rtl">
      
      {/* إضاءات الخلفية */}
      <div className="absolute top-[-20%] left-[-10%] w-96 h-96 bg-blue-500/20 rounded-full mix-blend-screen filter blur-3xl pointer-events-none"></div>
      <div className="absolute bottom-[-10%] right-[-10%] w-72 h-72 bg-amber-500/20 rounded-full mix-blend-screen filter blur-3xl pointer-events-none"></div>

      {/* الحاوية الزجاجية الرئيسية التي تجمع كل شيء */}
      <div className="relative z-10 w-full max-w-6xl bg-white/10 backdrop-blur-xl border border-white/20 rounded-[2.5rem] p-6 md:p-12 shadow-[0_20px_50px_rgba(0,0,0,0.5)]">
        
        {/* تقسيم الشاشة لقسمين: يمين (للنصوص) ويسار (للصور) */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 md:gap-12 items-center">
          
          {/* ================= القسم الأيمن: النصوص والمميزات والتحميل ================= */}
          <div className="lg:col-span-7 flex flex-col gap-5">
            
            {/* الترويسة: الأيقونة (مصغرة) بجوار العنوان */}
            <div className="flex items-center gap-4 mb-2">
              <div className="w-16 h-16 md:w-20 md:h-20 bg-white/10 rounded-2xl p-2 border border-white/20 shadow-lg shrink-0">
                <img src="./logo.png" alt="أيقونة راصد" className="w-full h-full object-contain drop-shadow-md" />
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
            
            {/* قائمة المميزات المصغرة (الشبكة) */}
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

            {/* زر التحميل */}
            <div className="mt-2">
              <a 
                href="./Rased-Parents.apk" 
                download
                className="inline-flex w-full sm:w-auto bg-gradient-to-r from-amber-500 to-amber-600 text-white px-8 py-3.5 rounded-xl font-black text-base items-center justify-center gap-2 shadow-[0_8px_20px_rgba(245,158,11,0.3)] hover:scale-105 transition-transform"
              >
                <Download size={20} />
                تحميل التطبيق الآن (APK)
              </a>
            </div>

          </div>

          {/* ================= القسم الأيسر: صور التطبيق المتداخلة ================= */}
          <div className="lg:col-span-5 relative flex justify-center items-center h-[300px] md:h-[400px] mt-8 lg:mt-0">
            {/* الصورة الخلفية (شاشة الدخول) */}
            <div className="absolute transform -rotate-6 -translate-x-12 md:-translate-x-16 w-36 md:w-48 h-auto border-[4px] border-slate-800 rounded-3xl overflow-hidden shadow-2xl opacity-80 hover:opacity-100 hover:rotate-0 hover:z-20 transition-all duration-300">
              <img src="./login-screenshot.jpg" alt="شاشة الدخول" className="w-full h-auto object-cover pointer-events-none" />
            </div>
            
            {/* الصورة الأمامية (لوحة المتابعة) */}
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
