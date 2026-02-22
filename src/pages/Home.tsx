import { motion } from "framer-motion";
import { 
  ShieldCheck, Users, Landmark, FileSearch, 
  MapPin, Phone, ArrowLeft, History 
} from "lucide-react";

const HomePage = () => {
  return (
    <div className="bg-white font-cairo" dir="rtl">
      {/* Hero Section - مستوحى من صور Replit التي أرفقتها */}
      <section className="relative bg-moi-green text-white py-20 px-6 overflow-hidden">
        <div className="absolute inset-0 opacity-10 bg-[url('https://www.transparenttextures.com/patterns/pinstriped-suit.png')]"></div>
        <div className="container mx-auto relative z-10">
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="max-w-3xl"
          >
            <span className="text-moi-gold font-bold mb-4 block underline decoration-moi-gold underline-offset-8">بوابة المواطنين</span>
            <h1 className="text-4xl md:text-6xl font-tajawal font-bold mb-6">وزارة الداخلية</h1>
            <p className="text-xl opacity-90 leading-relaxed mb-8">
              نعمل على توفير بيئة آمنة وخدمات إلكترونية ذكية تخدم المواطن والمقيم في شتى أنحاء المملكة.
            </p>
            <div className="flex gap-4">
              <button className="bg-moi-gold text-moi-green px-8 py-3 rounded-md font-bold flex items-center gap-2 hover:bg-white transition">
                ابدأ الخدمة <ArrowLeft size={18} />
              </button>
              <button className="border border-white/30 px-8 py-3 rounded-md font-bold hover:bg-white/10 transition">
                تصفح الأنظمة
              </button>
            </div>
          </motion.div>
        </div>
      </section>

      {/* قسم تاريخ الوزارة - التاريخ العريق */}
      <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-6">
          <div className="flex flex-col md:flex-row items-center gap-12">
            <div className="md:w-1/2">
              <div className="flex items-center gap-3 text-moi-gold mb-4">
                <History size={28} />
                <h2 className="text-2xl font-tajawal font-bold text-moi-green">تاريخ الوزارة العريق</h2>
              </div>
              <div className="space-y-4 text-gray-700 leading-relaxed">
                <p>
                  تأسست وزارة الداخلية في عهد الملك المؤسس **عبدالعزيز بن عبدالرحمن آل سعود** - طيب الله ثراه - لتكون الركيزة الأساسية للأمن والاستقرار.
                </p>
                <div className="border-r-4 border-moi-gold pr-4 my-6">
                  <p className="font-bold text-moi-green">عام ١٣٤٤ هـ</p>
                  <p>صدر الأمر السامي بتأسيس مديرية الأمن العام، كأول خطوة تنظيمية أمنية.</p>
                </div>
                <div className="border-r-4 border-moi-gold pr-4">
                  <p className="font-bold text-moi-green">عام ١٣٧٠ هـ</p>
                  <p>صدر المرسوم الملكي بتحويل "المكتب التابع لرئاسة مجلس الوزراء" إلى وزارة للداخلية تعنى بشؤون الأمن والإمارات.</p>
                </div>
              </div>
            </div>
            <div className="md:w-1/2 grid grid-cols-2 gap-4">
              <div className="bg-moi-green h-48 rounded-2xl flex items-center justify-center text-moi-gold flex-col p-4 text-center">
                <Landmark size={40} className="mb-2" />
                <span className="font-bold">١٣٧٠ هـ</span>
                <span className="text-xs text-white/70">التأسيس الرسمي</span>
              </div>
              <div className="bg-white border border-gray-200 h-48 rounded-2xl flex items-center justify-center text-moi-green flex-col p-4 text-center shadow-sm">
                <ShieldCheck size={40} className="mb-2 text-moi-gold" />
                <span className="font-bold">رؤية ٢٠٣٠</span>
                <span className="text-xs text-gray-500">التحول الرقمي الشامل</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* الخدمات السريعة - Quick Access */}
      <section className="py-16">
        <div className="container mx-auto px-6">
          <h3 className="text-center font-tajawal text-3xl font-bold text-moi-green mb-12">الخدمات الأكثر استخداماً</h3>
          <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
            {[
              { title: "الأحوال المدنية", desc: "تجديد الهوية وسجل الأسرة", icon: <Users /> },
              { title: "المرور", desc: "تجديد رخص القيادة والمخالفات", icon: <ShieldCheck /> },
              { title: "الجوازات", desc: "إصدار وتجديد جواز السفر", icon: <FileSearch /> },
              { title: "الإمارات", desc: "خدمات الاستعلام والمطالبات", icon: <MapPin /> },
            ].map((item, idx) => (
              <motion.div 
                whileHover={{ scale: 1.03 }}
                key={idx} 
                className="p-8 border border-gray-100 rounded-xl shadow-sm hover:shadow-md transition bg-white text-center group"
              >
                <div className="w-16 h-16 bg-gray-50 rounded-full flex items-center justify-center mx-auto mb-4 group-hover:bg-moi-gold transition text-moi-green group-hover:text-white">
                  {item.icon}
                </div>
                <h4 className="font-bold text-moi-green mb-2">{item.title}</h4>
                <p className="text-sm text-gray-500">{item.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};

export default HomePage;
