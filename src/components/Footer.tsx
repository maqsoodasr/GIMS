import React from 'react';
import {
  Phone,
  Mail,
  MapPin,
  Clock,
  ShieldCheck,
  Award,
  ExternalLink,
  Heart,
  ArrowUp,
} from 'lucide-react';
import { INSTITUTION_INFO } from '../data/mockData';
import { GimsLogo } from './GimsLogo';

interface FooterProps {
  onOpenAppointment: () => void;
  onOpenLabReports: () => void;
  onOpenTransplantDesk: () => void;
  onOpenEmergency: () => void;
  onNavigateSection: (sectionId: string) => void;
}

export const Footer: React.FC<FooterProps> = ({
  onOpenAppointment,
  onOpenLabReports,
  onOpenTransplantDesk,
  onOpenEmergency,
  onNavigateSection,
}) => {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="bg-slate-950 text-slate-300 pt-16 pb-12 border-t border-slate-800 text-xs">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-12">
        {/* Top Accreditation & Institutional Identity Banner */}
        <div className="bg-slate-900/90 rounded-2xl p-6 sm:p-8 border border-slate-800 flex flex-col lg:flex-row items-center justify-between gap-6">
          <div className="flex items-center gap-4">
            <div className="w-16 h-16 rounded-xl bg-white p-1 flex items-center justify-center border border-slate-700 shadow-md shrink-0">
              <GimsLogo size="custom" className="w-full h-full" />
            </div>
            <div>
              <div className="text-base sm:text-lg font-bold text-white font-['Playfair_Display',serif]">
                Pir Abdul Qadir Shah Jeelani Institute of Medical Sciences (PAQSJIMS)
              </div>
              <div className="text-xs text-teal-400 font-medium">
                Government of Sindh Autonomous Center of Excellence • Gambat, Pakistan
              </div>
            </div>
          </div>

          <div className="flex flex-wrap items-center gap-2 text-[11px] text-slate-400">
            <span className="bg-slate-800 px-3 py-1.5 rounded-lg border border-slate-700">
              PM&DC Recognized
            </span>
            <span className="bg-slate-800 px-3 py-1.5 rounded-lg border border-slate-700">
              CPSP Accredited
            </span>
            <span className="bg-slate-800 px-3 py-1.5 rounded-lg border border-slate-700">
              HEC Approved
            </span>
            <span className="bg-slate-800 px-3 py-1.5 rounded-lg border border-slate-700">
              Sindh Healthcare Commission
            </span>
          </div>
        </div>

        {/* 4-Column Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Col 1: Contacts & Emergency */}
          <div className="space-y-3.5">
            <h4 className="text-sm font-bold text-white uppercase tracking-wider font-['Playfair_Display',serif]">
              Emergency & Campus
            </h4>
            <div className="space-y-2.5 text-slate-400">
              <div className="flex items-start gap-2">
                <MapPin className="w-4 h-4 text-teal-400 shrink-0 mt-0.5" />
                <span>{INSTITUTION_INFO.location}</span>
              </div>
              <div className="flex items-center gap-2 text-rose-400 font-bold">
                <Phone className="w-4 h-4 shrink-0" />
                <span>24/7 Emergency: {INSTITUTION_INFO.emergencyPhone}</span>
              </div>
              <div className="flex items-center gap-2">
                <Phone className="w-4 h-4 text-teal-400 shrink-0" />
                <span>Helpline: {INSTITUTION_INFO.helplinePhone}</span>
              </div>
              <div className="flex items-center gap-2">
                <Mail className="w-4 h-4 text-teal-400 shrink-0" />
                <a href={`mailto:${INSTITUTION_INFO.email}`} className="hover:text-white">
                  {INSTITUTION_INFO.email}
                </a>
              </div>
            </div>
          </div>

          {/* Col 2: Centers of Excellence */}
          <div className="space-y-3">
            <h4 className="text-sm font-bold text-white uppercase tracking-wider font-['Playfair_Display',serif]">
              Centers of Excellence
            </h4>
            <ul className="space-y-2 text-slate-400">
              <li>
                <button
                  onClick={() => onNavigateSection('transplants')}
                  className="hover:text-teal-400 transition-colors"
                >
                  Liver Transplant & HPB Surgery
                </button>
              </li>
              <li>
                <button
                  onClick={() => onNavigateSection('transplants')}
                  className="hover:text-teal-400 transition-colors"
                >
                  Renal Transplant & 24/7 Dialysis
                </button>
              </li>
              <li>
                <button
                  onClick={() => onNavigateSection('transplants')}
                  className="hover:text-teal-400 transition-colors"
                >
                  Bone Marrow Transplant & Hematology
                </button>
              </li>
              <li>
                <button
                  onClick={() => onNavigateSection('departments')}
                  className="hover:text-teal-400 transition-colors"
                >
                  Cardiology & Open Heart Surgery
                </button>
              </li>
              <li>
                <button
                  onClick={() => onNavigateSection('departments')}
                  className="hover:text-teal-400 transition-colors"
                >
                  Medical & Radiation Oncology
                </button>
              </li>
              <li>
                <button
                  onClick={onOpenEmergency}
                  className="hover:text-rose-400 transition-colors"
                >
                  24/7 Level-1 Emergency & Trauma
                </button>
              </li>
            </ul>
          </div>

          {/* Col 3: Academic Faculties */}
          <div className="space-y-3">
            <h4 className="text-sm font-bold text-white uppercase tracking-wider font-['Playfair_Display',serif]">
              Academics & Admissions
            </h4>
            <ul className="space-y-2 text-slate-400">
              <li>
                <button
                  onClick={() => onNavigateSection('academics')}
                  className="hover:text-teal-400 transition-colors"
                >
                  Gambat Medical College (MBBS)
                </button>
              </li>
              <li>
                <button
                  onClick={() => onNavigateSection('academics')}
                  className="hover:text-teal-400 transition-colors"
                >
                  GIMS College of Nursing (BSN)
                </button>
              </li>
              <li>
                <button
                  onClick={() => onNavigateSection('academics')}
                  className="hover:text-teal-400 transition-colors"
                >
                  BS Medical Technology Programs
                </button>
              </li>
              <li>
                <button
                  onClick={() => onNavigateSection('academics')}
                  className="hover:text-teal-400 transition-colors"
                >
                  Post-Graduate Residency (FCPS / MCPS)
                </button>
              </li>
              <li>
                <button
                  onClick={() => onNavigateSection('academics')}
                  className="hover:text-teal-400 transition-colors"
                >
                  MDCAT Aggregate Calculator
                </button>
              </li>
            </ul>
          </div>

          {/* Col 4: Quick Portals & Travel Info */}
          <div className="space-y-3">
            <h4 className="text-sm font-bold text-white uppercase tracking-wider font-['Playfair_Display',serif]">
              Patient Portals & Travel
            </h4>
            <div className="space-y-2">
              <button
                onClick={onOpenAppointment}
                className="w-full bg-slate-900 hover:bg-slate-800 text-teal-300 font-semibold p-2.5 rounded-lg border border-slate-800 text-left transition-colors flex items-center justify-between"
              >
                <span>Book OPD Consultation</span>
                <span>→</span>
              </button>
              <button
                onClick={onOpenLabReports}
                className="w-full bg-slate-900 hover:bg-slate-800 text-sky-300 font-semibold p-2.5 rounded-lg border border-slate-800 text-left transition-colors flex items-center justify-between"
              >
                <span>Online Lab Results</span>
                <span>→</span>
              </button>
              <button
                onClick={onOpenTransplantDesk}
                className="w-full bg-slate-900 hover:bg-slate-800 text-amber-300 font-semibold p-2.5 rounded-lg border border-slate-800 text-left transition-colors flex items-center justify-between"
              >
                <span>Transplant Referral Desk</span>
                <span>→</span>
              </button>
            </div>
            <div className="pt-2 text-[11px] text-slate-500">
              Nearest Airport: Begum Nusrat Bhutto International Airport Sukkur (45 min drive via N-5).
            </div>
          </div>
        </div>

        {/* Bottom Rights & Scroll to Top */}
        <div className="pt-8 border-t border-slate-900 flex flex-col sm:flex-row items-center justify-between gap-4 text-[11px] text-slate-500">
          <div>
            © 2026 Pir Abdul Qadir Shah Jeelani Institute of Medical Sciences (PAQSJIMS / GIMS) Gambat.
            All rights reserved. 100% Free Public Health Initiative of the Government of Sindh.
          </div>

          <button
            onClick={scrollToTop}
            className="flex items-center gap-1.5 text-slate-400 hover:text-white transition-colors cursor-pointer"
          >
            <span>Back to Top</span>
            <ArrowUp className="w-3.5 h-3.5" />
          </button>
        </div>
      </div>
    </footer>
  );
};
