import React from 'react';
import { 
  Download, Smartphone, ShieldCheck, 
  Star, MessageCircle, Activity, Code 
} from 'lucide-react';

const App = () => {
  return (
    <div className="min-h-screen bg-slate-50 font-sans" dir="rtl">
      
      {/* ================= القسم الرئيسي ================= */}
      <div className="relative bg-gradient-to-br from-[#0f172a] to-[#1e3a8a] overflow-hidden">
        <div className="absolute top-[-20%] left-[-10%] w-96 h-96 bg-blue-500/20 rounded-full mix-blend-screen filter blur-3xl"></div>
        <div className="absolute bottom-[-10%] right-[-10%] w-72 h-72 bg-amber-500/20 rounded-full mix-blend-screen filter blur-3xl"></div>

        <div className="max-w-6xl mx-auto px-6 pt-20 pb-28 relative z-10 flex flex-col md:flex-row items-center justify-between gap-12">
          
          <div className="flex-1 text-center md:text-right">
            <div className="inline-block bg-white/10 backdrop-blur-md border border-white/20 rounded-full px-4 py-1.5 mb-6">
              <span className="text-amber-400 font-bold text-sm flex items-center gap-2">
                <Star size={16} fill="currentColor" /> الإصدار الجديد متوفر الآن
              </span>
            </div>
            
            <h1 className="text-4xl md:text-6xl font-black text-white mb-6 leading-tight">
              أبناؤك تحت أنظارك.. <br/>
              <span className="text-amber-400">كُن شريكاً في نجاحهم!</span>
            </h1>
            
            <p className="text-blue-100 text-lg mb-10 max-w-xl mx-auto md:mx-0 leading-relaxed font-medium">
              تطبيق "راصد للآباء" يضع كل تفاصيل الحياة المدرسية لأبنائك في جيبك. 
              تابع الدرجات، الحضور، والسلوكيات لحظة بلحظة، وتواصل مع المعلمين بكل سهولة.
            </p>
            
            <div className="flex flex-col sm:flex-row items-center gap-4 justify-center md:justify-start">
              {/* تأكد من رفع ملف Rased-Parents.apk في مجلد public ليعمل هذا الزر */}
              <a 
                href="/Rased-Parents.apk" 
                download
                className="w-full sm:w-auto bg-gradient-to-r from-amber-500 to-amber-600 text-white px-8 py-4 rounded-2xl font-black text-lg flex items-center justify-center gap-3 shadow-[0_10px_25px_rgba(245,158,11,0.4)] hover:scale-105 transition-transform"
              >
                <Download size={24} />
                تحميل التطبيق (APK)
              </a>
              <p className="text-slate-300 text-sm font-bold mt-2 sm:mt-0 flex items-center gap-1">
                <ShieldCheck size={16} className="text-emerald-400"/> آمن وموثوق
              </p>
            </div>
          </div>

          <div className="flex-1 flex justify-center md:justify-end relative">
            <div className="w-64 h-64 md:w-80 md:h-80 bg-white/5 rounded-[3rem] border border-white/10 backdrop-blur-md p-6 shadow-2xl relative animate-in fade-in zoom-in duration-1000">
              <img src="/logo-512x512.png" alt="أيقونة راصد" className="w-full h-full object-contain drop-shadow-2xl" />
            </div>
          </div>

        </div>
      </div>

      {/* ================= قسم المميزات ================= */}
      <div className="py-24 bg-white relative">
        <div className="max-w-6xl mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-black text-[#1e3a8a] mb-4">لماذا تطبيق راصد؟</h2>
            <p className="text-slate-500 font-bold text-lg">كل ما تحتاجه لمتابعة مسيرة ابنك التعليمية في مكان واحد</p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            <div className="bg-slate-50 p-8 rounded-[2rem] border border-slate-100 hover:border-blue-200 hover:shadow-xl transition-all group">
              <div className="w-16 h-16 bg-blue-100 text-blue-600 rounded-2xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform">
                <Activity size={32} />
              </div>
              <h3 className="text-xl font-black text-slate-800 mb-3">متابعة دقيقة للحضور</h3>
              <p className="text-slate-600 font-medium leading-relaxed">
                اطلع على سجل الغياب والتسرب لحظة بلحظة، وكن على علم دائم بتواجد ابنك في المدرسة.
              </p>
            </div>

            <div className="bg-slate-50 p-8 rounded-[2rem] border border-slate-100 hover:border-amber-200 hover:shadow-xl transition-all group">
              <div className="w-16 h-16 bg-amber-100 text-amber-600 rounded-2xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform">
                <Star size={32} />
              </div>
              <h3 className="text-xl font-black text-slate-800 mb-3">سجل الدرجات والسلوك</h3>
              <p className="text-slate-600 font-medium leading-relaxed">
                تابع النقاط الإيجابية والتنبيهات، وشاهد درجات الاختبارات فور رصدها من قبل المعلم.
              </p>
            </div>

            <div className="bg-slate-50 p-8 rounded-[2rem] border border-slate-100 hover:border-emerald-200 hover:shadow-xl transition-all group">
              <div className="w-16 h-16 bg-emerald-100 text-emerald-600 rounded-2xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform">
                <MessageCircle size={32} />
              </div>
              <h3 className="text-xl font-black text-slate-800 mb-3">تواصل مباشر</h3>
              <p className="text-slate-600 font-medium leading-relaxed">
                أرسل استفساراتك وملاحظاتك أو أعذار الغياب لمعلم المادة مباشرة عبر نافذة المراسلة الآمنة.
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* ================= قسم لقطات الشاشة ================= */}
      <div className="py-24 bg-slate-50">
        <div className="max-w-6xl mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-black text-[#1e3a8a] mb-4">نظرة من الداخل</h2>
            <p className="text-slate-500 font-bold text-lg">واجهة عصرية، سهلة الاستخدام، ومصممة خصيصاً لراحتك</p>
          </div>

          <div className="flex flex-col md:flex-row items-center justify-center gap-8">
            <div className="relative border-[8px] border-slate-800 rounded-[3rem] overflow-hidden shadow-2xl w-64 h-[500px] bg-white">
              <img src="/login-screenshot.jpg" alt="شاشة تسجيل الدخول" className="w-full h-full object-cover" />
            </div>

            <div className="relative border-[8px] border-slate-800 rounded-[3rem] overflow-hidden shadow-2xl w-64 h-[500px] bg-white md:-mt-12">
              <img src="/dashboard-screenshot.jpg" alt="لوحة المتابعة" className="w-full h-full object-cover" />
            </div>
          </div>
        </div>
      </div>

      {/* ================= الختام ================= */}
      <div className="bg-[#0f172a] py-12 border-t border-white/10">
        <div className="max-w-6xl mx-auto px-6 flex flex-col items-center justify-center text-center">
          <div className="w-16 h-16 bg-white/5 rounded-2xl flex items-center justify-center mb-6">
            <Smartphone size={32} className="text-amber-400" />
          </div>
          <h2 className="text-xl font-black text-white mb-2">راصد للآباء</h2>
          <p className="text-slate-400 text-sm font-bold mb-8">الرابط الأقوى بين المدرسة والبيت</p>
          
          <div className="py-4 px-8 bg-white/5 rounded-full">
            <p className="text-slate-500 text-xs font-bold mb-1">برمجة وتطوير</p>
            <div className="flex items-center justify-center gap-2">
              <Code size={16} className="text-amber-500" />
              <span className="text-amber-500 text-sm font-black tracking-widest uppercase">Mohammed Alzaabi</span>
              <span className="text-slate-600 mx-1">|</span>
              <span className="text-slate-400 text-xs font-black">ALZAABI 555</span>
            </div>
          </div>
        </div>
      </div>

    </div>
  );
};

export default App;
