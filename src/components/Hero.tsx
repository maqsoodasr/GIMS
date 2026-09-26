import React, { useState } from 'react';
import {
  Search,
  Calendar,
  FileCheck,
  ShieldCheck,
  Activity,
  Heart,
  ArrowRight,
  Sparkles,
  PhoneCall,
  UserCheck,
} from 'lucide-react';
import { INSTITUTION_INFO } from '../data/mockData';

interface HeroProps {
  onOpenAppointment: () => void;
  onOpenDoctorSearch: (query?: string) => void;
  onOpenLabReports: () => void;
  onOpenTransplantDesk: () => void;
  onOpenEmergency: () => void;
  onNavigateSection: (sectionId: string) => void;
}

export const Hero: React.FC<HeroProps> = ({
  onOpenAppointment,
  onOpenDoctorSearch,
  onOpenLabReports,
  onOpenTransplantDesk,
  onOpenEmergency,
  onNavigateSection,
}) => {
  const [searchQuery, setSearchQuery] = useState('');

  const handleSearchSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    onOpenDoctorSearch(searchQuery);
  };

  return (
    <div id="hero" className="relative bg-gradient-to-b from-slate-950 via-slate-900 to-slate-950 text-white overflow-hidden">
      {/* Background Architectural & Medical Grids */}
      <div className="absolute inset-0 opacity-15 pointer-events-none">
        <div className="absolute -top-40 -right-40 w-96 h-96 rounded-full bg-teal-500 blur-3xl"></div>
        <div className="absolute top-1/2 -left-40 w-96 h-96 rounded-full bg-sky-600 blur-3xl"></div>
        <div className="w-full h-full bg-[radial-gradient(#38bdf8_1px,transparent_1px)] [background-size:24px_24px]"></div>
      </div>

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-12 pb-16 lg:pt-16 lg:pb-24">
        {/* Top Badges */}
        <div className="flex flex-wrap items-center gap-2 sm:gap-3 mb-6">
          <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-teal-950/80 border border-teal-500/40 text-teal-300 text-xs font-semibold backdrop-blur-sm">
            <ShieldCheck className="w-3.5 h-3.5 text-teal-400" />
            <span>Government of Sindh Public Healthcare Flagship</span>
          </div>

          <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-amber-950/70 border border-amber-500/40 text-amber-300 text-xs font-semibold backdrop-blur-sm">
            <Sparkles className="w-3.5 h-3.5 text-amber-400" />
            <span>100% Free Treatment • Zero Out-of-Pocket Expense</span>
          </div>
        </div>

        {/* Main Title & Subtitle */}
        <div className="grid lg:grid-cols-12 gap-8 lg:gap-12 items-center">
          <div className="lg:col-span-8">
            <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-extrabold tracking-tight leading-tight text-white font-['Playfair_Display',serif]">
              World-Class Healing.{' '}
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-teal-400 via-sky-300 to-amber-300">
                Life-Saving Transplants.
              </span>{' '}
              Accessible to All.
            </h1>

            <p className="mt-4 text-base sm:text-lg text-slate-300 leading-relaxed max-w-3xl">
              Pir Abdul Qadir Shah Jeelani Institute of Medical Sciences (PAQSJIMS / GIMS) in Gambat,
              Sindh is South Asia’s premier autonomous public health center. Delivering landmark
              living-donor liver transplants, kidney transplants, stem cell therapies, and
              comprehensive tertiary care free of cost to patients across Pakistan.
            </p>

            {/* Quick Interactive Search Form */}
            <div className="mt-8 bg-slate-900/90 p-2.5 sm:p-3 rounded-2xl border border-slate-700/80 shadow-2xl backdrop-blur-md max-w-2xl">
              <form onSubmit={handleSearchSubmit} className="flex flex-col sm:flex-row gap-2">
                <div className="relative flex-1 flex items-center">
                  <Search className="w-5 h-5 text-slate-400 absolute left-3.5" />
                  <input
                    type="text"
                    value={searchQuery}
                    onChange={(e) => setSearchQuery(e.target.value)}
                    placeholder="Search specialist, liver transplant, OPD clinic, test..."
                    className="w-full bg-slate-800/90 text-white placeholder-slate-400 text-sm pl-11 pr-4 py-3 rounded-xl border border-slate-700 focus:outline-hidden focus:border-teal-400 transition-colors"
                  />
                </div>
                <button
                  type="submit"
                  className="bg-teal-600 hover:bg-teal-500 text-white font-bold text-sm px-6 py-3 rounded-xl flex items-center justify-center gap-2 transition-colors cursor-pointer shadow-md"
                >
                  <Search className="w-4 h-4" />
                  <span>Find Doctor</span>
                </button>
              </form>
            </div>

            {/* Quick Action Shortcuts */}
            <div className="mt-5 flex flex-wrap items-center gap-2.5 sm:gap-3 text-xs">
              <span className="text-slate-400 font-medium">Quick Portals:</span>
              <button
                onClick={onOpenAppointment}
                className="bg-slate-800 hover:bg-slate-700 text-slate-200 hover:text-white px-3 py-1.5 rounded-lg border border-slate-700 transition-colors flex items-center gap-1.5"
              >
                <Calendar className="w-3.5 h-3.5 text-teal-400" />
                <span>Book OPD Consultation</span>
              </button>
              <button
                onClick={onOpenLabReports}
                className="bg-slate-800 hover:bg-slate-700 text-slate-200 hover:text-white px-3 py-1.5 rounded-lg border border-slate-700 transition-colors flex items-center gap-1.5"
              >
                <FileCheck className="w-3.5 h-3.5 text-sky-400" />
                <span>Verify Lab Reports</span>
              </button>
              <button
                onClick={onOpenTransplantDesk}
                className="bg-amber-950/80 hover:bg-amber-900/80 text-amber-200 px-3 py-1.5 rounded-lg border border-amber-500/40 transition-colors flex items-center gap-1.5"
              >
                <Activity className="w-3.5 h-3.5 text-amber-400" />
                <span>Transplant Referral Desk</span>
              </button>
            </div>
          </div>

          {/* Right Hero Interactive Snapshot Card */}
          <div className="lg:col-span-4">
            <div className="bg-gradient-to-br from-slate-900/90 to-slate-950/90 rounded-2xl border border-teal-500/30 p-6 shadow-2xl relative overflow-hidden backdrop-blur-md">
              <div className="absolute top-0 right-0 w-32 h-32 bg-teal-500/10 rounded-full blur-2xl"></div>

              <div className="flex items-center justify-between pb-4 border-b border-slate-800">
                <div className="flex items-center gap-2">
                  <div className="w-2.5 h-2.5 rounded-full bg-emerald-400 animate-pulse"></div>
                  <span className="text-xs font-bold uppercase tracking-wider text-emerald-400">
                    Live Center Status
                  </span>
                </div>
                <span className="text-[11px] text-slate-400">Open 24/7/365</span>
              </div>

              <div className="mt-4 space-y-3.5">
                <div className="bg-slate-800/60 rounded-xl p-3 border border-slate-700/50">
                  <div className="text-[11px] font-semibold text-slate-400">
                    National Organ Transplant Hub
                  </div>
                  <div className="text-xl font-black text-white mt-0.5 flex items-center justify-between">
                    <span>1,240+ Liver Transplants</span>
                    <span className="text-xs font-bold text-teal-400 bg-teal-950/70 px-2 py-0.5 rounded border border-teal-700/50">
                      94.8% Success
                    </span>
                  </div>
                  <div className="text-[11px] text-slate-300 mt-1">
                    Free for eligible patients nationwide.
                  </div>
                </div>

                <div className="bg-slate-800/60 rounded-xl p-3 border border-slate-700/50">
                  <div className="text-[11px] font-semibold text-slate-400">
                    Renal & Hemodialysis Services
                  </div>
                  <div className="text-xl font-black text-white mt-0.5 flex items-center justify-between">
                    <span>85+ Dialysis Stations</span>
                    <span className="text-xs font-bold text-sky-400 bg-sky-950/70 px-2 py-0.5 rounded border border-sky-700/50">
                      24/7 Active
                    </span>
                  </div>
                  <div className="text-[11px] text-slate-300 mt-1">
                    Over 1,850+ kidney transplants completed.
                  </div>
                </div>

                <div className="bg-slate-800/60 rounded-xl p-3 border border-slate-700/50">
                  <div className="text-[11px] font-semibold text-slate-400">
                    Emergency Triage & Trauma
                  </div>
                  <div className="text-lg font-bold text-white mt-0.5 flex items-center justify-between">
                    <span>Level-1 Trauma & Burn Care</span>
                    <span className="text-xs font-bold text-rose-400 bg-rose-950/70 px-2 py-0.5 rounded border border-rose-700/50">
                      Immediate
                    </span>
                  </div>
                  <div className="text-[11px] text-slate-300 mt-1">
                    Direct access via N-5 Highway Gambat bypass.
                  </div>
                </div>
              </div>

              <div className="mt-5 pt-4 border-t border-slate-800 flex gap-2">
                <button
                  onClick={onOpenEmergency}
                  className="flex-1 bg-rose-600 hover:bg-rose-500 text-white font-bold text-xs py-2.5 px-3 rounded-lg flex items-center justify-center gap-1.5 transition-colors cursor-pointer"
                >
                  <PhoneCall className="w-3.5 h-3.5" />
                  <span>Call Emergency</span>
                </button>
                <button
                  onClick={() => onNavigateSection('transplants')}
                  className="flex-1 bg-slate-800 hover:bg-slate-700 text-teal-300 font-bold text-xs py-2.5 px-3 rounded-lg flex items-center justify-center gap-1 transition-colors cursor-pointer"
                >
                  <span>Explore Units</span>
                  <ArrowRight className="w-3.5 h-3.5" />
                </button>
              </div>
            </div>
          </div>
        </div>

        {/* Highlighted Verified Statistics Banner */}
        <div className="mt-14 pt-10 border-t border-slate-800/90 grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-5 gap-6 text-center">
          <div className="p-3 rounded-xl bg-slate-900/40 border border-slate-800/80">
            <div className="text-2xl sm:text-3xl lg:text-4xl font-black text-teal-400 font-['Playfair_Display',serif]">
              {INSTITUTION_INFO.stats.liverTransplants}
            </div>
            <div className="text-xs font-semibold text-slate-300 mt-1">Liver Transplants</div>
            <div className="text-[10px] text-slate-400">Living Donor & Paediatric</div>
          </div>

          <div className="p-3 rounded-xl bg-slate-900/40 border border-slate-800/80">
            <div className="text-2xl sm:text-3xl lg:text-4xl font-black text-sky-400 font-['Playfair_Display',serif]">
              {INSTITUTION_INFO.stats.kidneyTransplants}
            </div>
            <div className="text-xs font-semibold text-slate-300 mt-1">Kidney Transplants</div>
            <div className="text-[10px] text-slate-400">With Laparoscopic Nephrectomy</div>
          </div>

          <div className="p-3 rounded-xl bg-slate-900/40 border border-slate-800/80">
            <div className="text-2xl sm:text-3xl lg:text-4xl font-black text-amber-400 font-['Playfair_Display',serif]">
              {INSTITUTION_INFO.stats.freeTreatmentPercentage}
            </div>
            <div className="text-xs font-semibold text-slate-300 mt-1">Free Healthcare</div>
            <div className="text-[10px] text-slate-400">Sindh Govt Welfare Funding</div>
          </div>

          <div className="p-3 rounded-xl bg-slate-900/40 border border-slate-800/80">
            <div className="text-2xl sm:text-3xl lg:text-4xl font-black text-emerald-400 font-['Playfair_Display',serif]">
              {INSTITUTION_INFO.stats.hospitalBeds}
            </div>
            <div className="text-xs font-semibold text-slate-300 mt-1">Hospital Bed Capacity</div>
            <div className="text-[10px] text-slate-400">140+ Modern ICU Suites</div>
          </div>

          <div className="col-span-2 sm:col-span-1 p-3 rounded-xl bg-slate-900/40 border border-slate-800/80">
            <div className="text-2xl sm:text-3xl lg:text-4xl font-black text-purple-400 font-['Playfair_Display',serif]">
              {INSTITUTION_INFO.stats.dailyOpdFootfall}
            </div>
            <div className="text-xs font-semibold text-slate-300 mt-1">Daily Outpatients</div>
            <div className="text-[10px] text-slate-400">Free Medicine & Diagnostics</div>
          </div>
        </div>
      </div>
    </div>
  );
};
