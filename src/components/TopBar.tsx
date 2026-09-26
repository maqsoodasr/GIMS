import React, { useState } from 'react';
import { Phone, AlertCircle, Clock, HeartHandshake, Globe, Eye } from 'lucide-react';
import { INSTITUTION_INFO } from '../data/mockData';

interface TopBarProps {
  onOpenEmergency: () => void;
  onOpenLabReports: () => void;
  onOpenAppointment: () => void;
  onOpenTransplantDesk: () => void;
}

export const TopBar: React.FC<TopBarProps> = ({
  onOpenEmergency,
  onOpenLabReports,
  onOpenAppointment,
  onOpenTransplantDesk,
}) => {
  const [lang, setLang] = useState<'EN' | 'UR' | 'SD'>('EN');

  return (
    <div className="bg-slate-900 text-slate-200 text-xs border-b border-slate-800 tracking-wide">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-2 flex flex-col md:flex-row items-center justify-between gap-2">
        {/* Left emergency contacts */}
        <div className="flex flex-wrap items-center justify-center md:justify-start gap-4 sm:gap-6">
          <div className="flex items-center gap-1.5 text-rose-400 font-semibold">
            <span className="relative flex h-2 w-2">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-rose-400 opacity-75"></span>
              <span className="relative inline-flex rounded-full h-2 w-2 bg-rose-500"></span>
            </span>
            <span>24/7 Trauma Emergency:</span>
            <a
              href="tel:0243640160"
              className="text-white hover:text-rose-300 transition-colors underline decoration-rose-500/40"
            >
              {INSTITUTION_INFO.emergencyPhone}
            </a>
          </div>

          <div className="hidden sm:flex items-center gap-1.5 text-slate-300">
            <Phone className="w-3.5 h-3.5 text-teal-400" />
            <span>Helpline:</span>
            <a href="tel:0243720772" className="hover:text-teal-300 transition-colors">
              (0243)-720772
            </a>
          </div>

          <div className="hidden lg:flex items-center gap-1.5 text-amber-300">
            <Clock className="w-3.5 h-3.5" />
            <span>OPD Timings: Mon-Sat 08:30 AM - 02:30 PM</span>
          </div>
        </div>

        {/* Right quick services & accessibility */}
        <div className="flex items-center gap-3 sm:gap-5">
          <button
            onClick={onOpenEmergency}
            className="flex items-center gap-1 text-rose-300 hover:text-white transition-colors cursor-pointer"
          >
            <AlertCircle className="w-3.5 h-3.5" />
            <span className="hidden xs:inline">Ambulance & Blood Bank</span>
          </button>

          <button
            onClick={onOpenLabReports}
            className="text-slate-300 hover:text-teal-400 transition-colors cursor-pointer"
          >
            Online Lab Reports
          </button>

          <button
            onClick={onOpenTransplantDesk}
            className="hidden sm:inline-block text-amber-300 hover:text-amber-200 font-medium transition-colors cursor-pointer"
          >
            Transplant Referral
          </button>

          {/* Language selector toggle */}
          <div className="flex items-center gap-1 bg-slate-800/80 rounded px-1.5 py-0.5 border border-slate-700/60 text-[11px]">
            <Globe className="w-3 h-3 text-slate-400" />
            <button
              onClick={() => setLang('EN')}
              className={`px-1 py-0.5 rounded transition-colors ${
                lang === 'EN' ? 'bg-teal-700 text-white font-bold' : 'text-slate-400 hover:text-white'
              }`}
            >
              EN
            </button>
            <button
              onClick={() => setLang('UR')}
              className={`px-1 py-0.5 rounded transition-colors ${
                lang === 'UR' ? 'bg-teal-700 text-white font-bold' : 'text-slate-400 hover:text-white'
              }`}
              title="اردو"
            >
              اردو
            </button>
            <button
              onClick={() => setLang('SD')}
              className={`px-1 py-0.5 rounded transition-colors ${
                lang === 'SD' ? 'bg-teal-700 text-white font-bold' : 'text-slate-400 hover:text-white'
              }`}
              title="سنڌي"
            >
              سنڌي
            </button>
          </div>
        </div>
      </div>

      {/* Localized Banner Notice for Urdu / Sindhi */}
      {lang === 'UR' && (
        <div
          className="bg-teal-950 text-teal-100 text-xs py-1.5 px-4 text-center border-t border-teal-800/60 font-sans tracking-normal flex items-center justify-center gap-2 animate-in fade-in duration-200"
          dir="rtl"
        >
          <span className="font-bold">حکومتِ سندھ پبلک ویلفیئر:</span>
          <span>
            پیر عبدالقادر شاہ جیلانی انسٹیٹیوٹ (گمبٹ ہسپتال) — تمام ادویات، لیب ٹیسٹ، او پی ڈی، اور جگر و گردے کی پیوند کاری 100٪ مفت ہے۔
          </span>
        </div>
      )}

      {lang === 'SD' && (
        <div
          className="bg-teal-950 text-teal-100 text-xs py-1.5 px-4 text-center border-t border-teal-800/60 font-sans tracking-normal flex items-center justify-center gap-2 animate-in fade-in duration-200"
          dir="rtl"
        >
          <span className="font-bold">سنڌ حڪومت پاران مفت سهولت:</span>
          <span>
            پير عبدالقادر شاهه جيلاني انسٽيٽيوٽ گمبٽ — مريضن لاءِ سڀني علاجن، دوائن، ٽيسٽن ۽ آرگن ٽرانسپلانٽ سرجريز جو سمورو خرچ مڪمل مفت آهي.
          </span>
        </div>
      )}
    </div>
  );
};
