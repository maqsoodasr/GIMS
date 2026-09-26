import React from 'react';
import { Quote, Award, ShieldCheck, HeartHandshake, CheckCircle2 } from 'lucide-react';
import { INSTITUTION_INFO } from '../data/mockData';

export const LeadershipSection: React.FC = () => {
  return (
    <section id="leadership" className="py-16 sm:py-20 bg-white border-t border-slate-200/80">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-12 gap-10 items-center">
          {/* Left Director Profile Card */}
          <div className="lg:col-span-5">
            <div className="relative bg-gradient-to-br from-slate-900 to-slate-950 rounded-2xl p-7 text-white shadow-xl border border-slate-800">
              <div className="flex items-center gap-4">
                <div className="w-20 h-20 rounded-2xl bg-gradient-to-br from-teal-500 to-slate-700 flex items-center justify-center text-white font-black text-2xl shadow-inner border-2 border-teal-400">
                  RBB
                </div>
                <div>
                  <h3 className="text-xl font-black text-white font-['Playfair_Display',serif]">
                    {INSTITUTION_INFO.directorName}
                  </h3>
                  <div className="text-xs text-teal-400 font-semibold mt-0.5">
                    {INSTITUTION_INFO.directorTitle}
                  </div>
                  <div className="inline-flex items-center gap-1.5 mt-2 bg-slate-800/80 px-2.5 py-1 rounded-full text-[10px] text-amber-300 border border-slate-700">
                    <Award className="w-3 h-3 text-amber-400" />
                    <span>Sitara-e-Imtiaz • Pride of Performance</span>
                  </div>
                </div>
              </div>

              <div className="mt-6 pt-5 border-t border-slate-800 space-y-3 text-xs text-slate-300 leading-relaxed">
                <p>
                  "When we laid the foundation of this institute in rural Gambat, many believed it
                  impossible to perform organ transplants outside metropolitan capital centers. Today,
                  over 1,200 liver transplants and 1,850 kidney transplants have been accomplished here
                  free of cost."
                </p>
                <p>
                  "We have demonstrated that with integrity, political will, and surgical excellence,
                  world-class medicine can be made universally available to the poorest citizen."
                </p>
              </div>

              <div className="mt-6 pt-4 border-t border-slate-800/80 grid grid-cols-2 gap-3 text-center">
                <div className="bg-slate-800/50 p-2.5 rounded-lg">
                  <div className="text-lg font-black text-teal-400">40+ Yrs</div>
                  <div className="text-[10px] text-slate-400">Public Service</div>
                </div>
                <div className="bg-slate-800/50 p-2.5 rounded-lg">
                  <div className="text-lg font-black text-teal-400">100% Free</div>
                  <div className="text-[10px] text-slate-400">Organ Transplants</div>
                </div>
              </div>
            </div>
          </div>

          {/* Right Institutional Story & Vision */}
          <div className="lg:col-span-7 space-y-5">
            <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-teal-100 text-teal-900 text-xs font-bold tracking-wide uppercase">
              <HeartHandshake className="w-4 h-4 text-teal-700" />
              <span>Institutional Heritage & Vision</span>
            </div>

            <h2 className="text-2xl sm:text-3xl lg:text-4xl font-extrabold text-slate-900 tracking-tight font-['Playfair_Display',serif]">
              From a Rural Dispensary to South Asia’s Beacon of Free Tertiary Healthcare
            </h2>

            <p className="text-sm text-slate-600 leading-relaxed">
              Pir Abdul Qadir Shah Jeelani Institute of Medical Sciences (PAQSJIMS), popularly known as
              GIMS, stands as one of Pakistan’s most inspiring public sector triumphs. What started as
              a humble two-room civil dispensary has been transformed through visionary leadership and
              Sindh Government funding into an autonomous post-graduate medical university and tertiary
              hospital with 1,200+ beds.
            </p>

            <div className="grid sm:grid-cols-2 gap-3 pt-2">
              <div className="p-3.5 bg-slate-50 rounded-xl border border-slate-200">
                <div className="font-bold text-xs text-slate-900 flex items-center gap-1.5">
                  <CheckCircle2 className="w-4 h-4 text-teal-600" />
                  <span>Universal Free Treatment</span>
                </div>
                <div className="text-xs text-slate-600 mt-1">
                  Investigations, robotic/complex surgeries, ICU care, and post-transplant lifelong
                  medicines provided at zero expense.
                </div>
              </div>

              <div className="p-3.5 bg-slate-50 rounded-xl border border-slate-200">
                <div className="font-bold text-xs text-slate-900 flex items-center gap-1.5">
                  <CheckCircle2 className="w-4 h-4 text-teal-600" />
                  <span>National Inclusivity</span>
                </div>
                <div className="text-xs text-slate-600 mt-1">
                  Patients receive identical dignitary medical care regardless of province, religion,
                  ethnicity, or economic status.
                </div>
              </div>

              <div className="p-3.5 bg-slate-50 rounded-xl border border-slate-200">
                <div className="font-bold text-xs text-slate-900 flex items-center gap-1.5">
                  <CheckCircle2 className="w-4 h-4 text-teal-600" />
                  <span>Pioneering Firsts</span>
                </div>
                <div className="text-xs text-slate-600 mt-1">
                  First in Pakistan to execute swap liver transplants, ABO-incompatible living donor
                  transplants, and combined liver-kidney operations.
                </div>
              </div>

              <div className="p-3.5 bg-slate-50 rounded-xl border border-slate-200">
                <div className="font-bold text-xs text-slate-900 flex items-center gap-1.5">
                  <CheckCircle2 className="w-4 h-4 text-teal-600" />
                  <span>Academic Excellence</span>
                </div>
                <div className="text-xs text-slate-600 mt-1">
                  Educating future healers at Gambat Medical College, College of Nursing, and CPSP
                  post-graduate residency programs.
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
