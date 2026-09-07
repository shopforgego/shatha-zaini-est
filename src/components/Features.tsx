import React from 'react';
import { ShieldCheck, Truck, RefreshCw, Headphones, CheckCircle } from 'lucide-react';
import { storeConfig } from '../config/store';

export const Features: React.FC = () => {
  return (
    <section className="py-6 border-b border-current/10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
          <div className="bg-white border border-purple-100 hover:border-purple-400 shadow-sm hover:shadow-xl p-4 rounded-2xl flex items-center gap-3">
            <div className="w-11 h-11 rounded-xl bg-black/5 flex items-center justify-center flex-shrink-0 text-purple-600">
              <ShieldCheck className="w-6 h-6" />
            </div>
            <div>
              <h4 className="text-xs font-bold">ثبات وفوحان فائق</h4>
              <p className="text-[11px] opacity-70 mt-0.5">تركيز عالي بزيوت عطرية نقية 100%</p>
            </div>
          </div>

          <div className="bg-white border border-purple-100 hover:border-purple-400 shadow-sm hover:shadow-xl p-4 rounded-2xl flex items-center gap-3">
            <div className="w-11 h-11 rounded-xl bg-black/5 flex items-center justify-center flex-shrink-0 text-purple-600">
              <CheckCircle className="w-6 h-6" />
            </div>
            <div>
              <h4 className="text-xs font-bold">عطور أصلية ومفحوصة</h4>
              <p className="text-[11px] opacity-70 mt-0.5">مطابقة للاشتراطات الصحية والبيئية</p>
            </div>
          </div>

          <div className="bg-white border border-purple-100 hover:border-purple-400 shadow-sm hover:shadow-xl p-4 rounded-2xl flex items-center gap-3">
            <div className="w-11 h-11 rounded-xl bg-black/5 flex items-center justify-center flex-shrink-0 text-purple-600">
              <Truck className="w-6 h-6" />
            </div>
            <div>
              <h4 className="text-xs font-bold">تغليف هدايا فاخر</h4>
              <p className="text-[11px] opacity-70 mt-0.5">كرت إهداء وشريط ستان ملكي مجاناً</p>
            </div>
          </div>

          <div className="bg-white border border-purple-100 hover:border-purple-400 shadow-sm hover:shadow-xl p-4 rounded-2xl flex items-center gap-3">
            <div className="w-11 h-11 rounded-xl bg-black/5 flex items-center justify-center flex-shrink-0 text-purple-600">
              <RefreshCw className="w-6 h-6" />
            </div>
            <div>
              <h4 className="text-xs font-bold">عينات مجانية</h4>
              <p className="text-[11px] opacity-70 mt-0.5">تصلك عينات للتجربة مع كل طلب</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
