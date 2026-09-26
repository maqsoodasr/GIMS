import React, { useState } from 'react';
import {
  Menu,
  X,
  ChevronDown,
  Calendar,
  AlertTriangle,
  Search,
  FileText,
  GraduationCap,
  Heart,
  Activity,
  Building2,
  Users,
} from 'lucide-react';
import { INSTITUTION_INFO } from '../data/mockData';
import { GimsLogo } from './GimsLogo';

interface HeaderProps {
  onOpenAppointment: () => void;
  onOpenDoctorSearch: () => void;
  onOpenLabReports: () => void;
  onOpenEmergency: () => void;
  onOpenTransplantDesk: () => void;
  onNavigateSection: (sectionId: string) => void;
}

export const Header: React.FC<HeaderProps> = ({
  onOpenAppointment,
  onOpenDoctorSearch,
  onOpenLabReports,
  onOpenEmergency,
  onOpenTransplantDesk,
  onNavigateSection,
}) => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [activeDropdown, setActiveDropdown] = useState<string | null>(null);

  const handleNavClick = (sectionId: string) => {
    onNavigateSection(sectionId);
    setMobileMenuOpen(false);
    setActiveDropdown(null);
  };

  return (
    <header className="sticky top-0 z-40 bg-white/95 backdrop-blur-md border-b border-slate-200/80 shadow-xs transition-all">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-20">
          {/* Official Emblem & Title */}
          <div
            onClick={() => handleNavClick('hero')}
            className="flex items-center gap-3.5 cursor-pointer group"
          >
            {/* Official Logo */}
            <div className="w-14 h-14 sm:w-16 sm:h-16 rounded-xl bg-white p-1 flex items-center justify-center shadow-xs border border-slate-200/90 group-hover:shadow-md group-hover:border-teal-500/40 transition-all shrink-0">
              <GimsLogo size="custom" className="w-full h-full" />
            </div>

            <div className="flex flex-col">
              <div className="flex items-center gap-2">
                <span className="text-xl sm:text-2xl font-black tracking-tight text-slate-900 font-['Playfair_Display',serif]">
                  GIMS
                </span>
                <span className="hidden sm:inline-block text-[11px] font-semibold text-teal-800 bg-teal-50 px-2 py-0.5 rounded-full border border-teal-200/70">
                  PAQSJIMS
                </span>
              </div>
              <span className="text-[11px] sm:text-xs font-semibold text-slate-700 line-clamp-1 max-w-[220px] sm:max-w-md">
                Pir Abdul Qadir Shah Jeelani Institute of Medical Sciences
              </span>
              <span className="text-[10px] text-teal-700 font-medium tracking-wide">
                Govt. of Sindh Autonomous Center of Excellence • Gambat
              </span>
            </div>
          </div>

          {/* Desktop Navigation Links */}
          <nav className="hidden lg:flex items-center space-x-1 xl:space-x-2">
            {/* Centers of Excellence Dropdown */}
            <div
              className="relative"
              onMouseEnter={() => setActiveDropdown('centers')}
              onMouseLeave={() => setActiveDropdown(null)}
            >
              <button
                onClick={() => handleNavClick('transplants')}
                className="flex items-center gap-1 px-3 py-2 text-sm font-semibold text-slate-700 hover:text-teal-700 rounded-lg hover:bg-slate-50 transition-colors"
              >
                <span>Centers of Excellence</span>
                <ChevronDown className="w-4 h-4 text-slate-400" />
              </button>

              {activeDropdown === 'centers' && (
                <div className="absolute top-full left-0 w-80 bg-white rounded-xl shadow-xl border border-slate-100 p-2.5 grid gap-1.5 animate-in fade-in slide-in-from-top-2 duration-150">
                  <button
                    onClick={() => handleNavClick('transplants')}
                    className="flex items-start gap-2.5 p-2 rounded-lg hover:bg-teal-50/70 text-left transition-colors"
                  >
                    <div className="p-1.5 bg-teal-100 rounded-md text-teal-800 mt-0.5">
                      <Activity className="w-4 h-4" />
                    </div>
                    <div>
                      <div className="text-xs font-bold text-slate-900">
                        Liver Transplant Center
                      </div>
                      <div className="text-[11px] text-slate-500">
                        1,200+ Free Living Donor Surgeries
                      </div>
                    </div>
                  </button>

                  <button
                    onClick={() => handleNavClick('transplants')}
                    className="flex items-start gap-2.5 p-2 rounded-lg hover:bg-teal-50/70 text-left transition-colors"
                  >
                    <div className="p-1.5 bg-sky-100 rounded-md text-sky-800 mt-0.5">
                      <Heart className="w-4 h-4" />
                    </div>
                    <div>
                      <div className="text-xs font-bold text-slate-900">
                        Kidney & Urology Center
                      </div>
                      <div className="text-[11px] text-slate-500">
                        1,850+ Renal Transplants & 85 Dialysis Beds
                      </div>
                    </div>
                  </button>

                  <button
                    onClick={() => handleNavClick('transplants')}
                    className="flex items-start gap-2.5 p-2 rounded-lg hover:bg-teal-50/70 text-left transition-colors"
                  >
                    <div className="p-1.5 bg-rose-100 rounded-md text-rose-800 mt-0.5">
                      <Heart className="w-4 h-4" />
                    </div>
                    <div>
                      <div className="text-xs font-bold text-slate-900">
                        Cardiac Complex & Cath Lab
                      </div>
                      <div className="text-[11px] text-slate-500">
                        24/7 Primary Angioplasty & Open Heart Surgery
                      </div>
                    </div>
                  </button>

                  <button
                    onClick={() => handleNavClick('transplants')}
                    className="flex items-start gap-2.5 p-2 rounded-lg hover:bg-teal-50/70 text-left transition-colors"
                  >
                    <div className="p-1.5 bg-amber-100 rounded-md text-amber-800 mt-0.5">
                      <AlertTriangle className="w-4 h-4" />
                    </div>
                    <div>
                      <div className="text-xs font-bold text-slate-900">
                        Bone Marrow & Oncology
                      </div>
                      <div className="text-[11px] text-slate-500">
                        Stem Cell Cures & Linear Accelerator Radiotherapy
                      </div>
                    </div>
                  </button>
                </div>
              )}
            </div>

            {/* Clinical Departments */}
            <button
              onClick={() => handleNavClick('departments')}
              className="px-3 py-2 text-sm font-semibold text-slate-700 hover:text-teal-700 rounded-lg hover:bg-slate-50 transition-colors"
            >
              Clinical Departments
            </button>

            {/* Academics & Admissions */}
            <button
              onClick={() => handleNavClick('academics')}
              className="flex items-center gap-1 px-3 py-2 text-sm font-semibold text-slate-700 hover:text-teal-700 rounded-lg hover:bg-slate-50 transition-colors"
            >
              <GraduationCap className="w-4 h-4 text-teal-600" />
              <span>GMC & Academics</span>
            </button>

            {/* Patient Care & Free Policy */}
            <button
              onClick={() => handleNavClick('patient-care')}
              className="px-3 py-2 text-sm font-semibold text-slate-700 hover:text-teal-700 rounded-lg hover:bg-slate-50 transition-colors"
            >
              Patient Care
            </button>

            {/* Director's Vision */}
            <button
              onClick={() => handleNavClick('leadership')}
              className="px-3 py-2 text-sm font-semibold text-slate-700 hover:text-teal-700 rounded-lg hover:bg-slate-50 transition-colors"
            >
              Director's Vision
            </button>

            {/* News & Notices */}
            <button
              onClick={() => handleNavClick('news')}
              className="px-3 py-2 text-sm font-semibold text-slate-700 hover:text-teal-700 rounded-lg hover:bg-slate-50 transition-colors"
            >
              News & Tenders
            </button>
          </nav>

          {/* Action CTAs */}
          <div className="hidden sm:flex items-center gap-2.5">
            <button
              onClick={onOpenDoctorSearch}
              className="p-2.5 rounded-lg text-slate-600 hover:text-teal-700 hover:bg-slate-100 transition-colors"
              title="Find a Doctor & Clinic Schedules"
            >
              <Search className="w-4.5 h-4.5" />
            </button>

            <button
              onClick={onOpenAppointment}
              className="flex items-center gap-2 bg-gradient-to-r from-teal-700 to-teal-800 hover:from-teal-800 hover:to-teal-900 text-white text-xs md:text-sm font-bold px-4 py-2.5 rounded-lg shadow-sm hover:shadow transition-all cursor-pointer"
            >
              <Calendar className="w-4 h-4" />
              <span>Book OPD</span>
            </button>

            <button
              onClick={onOpenEmergency}
              className="flex items-center gap-1.5 bg-rose-50 text-rose-700 hover:bg-rose-100 text-xs md:text-sm font-bold px-3 py-2.5 rounded-lg border border-rose-200 transition-colors cursor-pointer"
            >
              <AlertTriangle className="w-4 h-4 text-rose-600" />
              <span className="hidden md:inline">Emergency</span>
            </button>
          </div>

          {/* Mobile Menu Toggle Button */}
          <div className="flex sm:hidden items-center gap-2">
            <button
              onClick={onOpenAppointment}
              className="bg-teal-700 text-white text-xs font-bold px-2.5 py-1.5 rounded-md"
            >
              Book OPD
            </button>
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="p-2 rounded-lg text-slate-600 hover:text-slate-900 hover:bg-slate-100"
              aria-label="Toggle Navigation Menu"
            >
              {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Drawer Menu */}
      {mobileMenuOpen && (
        <div className="lg:hidden bg-white border-b border-slate-200 px-4 pt-3 pb-6 space-y-3 shadow-lg animate-in fade-in duration-200">
          <div className="grid grid-cols-2 gap-2 pb-3 border-b border-slate-100">
            <button
              onClick={() => {
                onOpenEmergency();
                setMobileMenuOpen(false);
              }}
              className="flex items-center justify-center gap-1.5 bg-rose-600 text-white text-xs font-bold py-2.5 rounded-lg"
            >
              <AlertTriangle className="w-3.5 h-3.5" />
              <span>24/7 Emergency</span>
            </button>
            <button
              onClick={() => {
                onOpenLabReports();
                setMobileMenuOpen(false);
              }}
              className="flex items-center justify-center gap-1.5 bg-slate-800 text-white text-xs font-bold py-2.5 rounded-lg"
            >
              <FileText className="w-3.5 h-3.5" />
              <span>Lab Reports</span>
            </button>
          </div>

          <div className="flex flex-col space-y-1 text-sm font-semibold text-slate-800">
            <button
              onClick={() => handleNavClick('transplants')}
              className="flex items-center gap-2 px-3 py-2 rounded-lg hover:bg-slate-50 text-left"
            >
              <Activity className="w-4 h-4 text-teal-600" />
              <span>Centers of Excellence (Organ Transplants)</span>
            </button>

            <button
              onClick={() => handleNavClick('departments')}
              className="flex items-center gap-2 px-3 py-2 rounded-lg hover:bg-slate-50 text-left"
            >
              <Building2 className="w-4 h-4 text-teal-600" />
              <span>Clinical Departments</span>
            </button>

            <button
              onClick={() => {
                onOpenDoctorSearch();
                setMobileMenuOpen(false);
              }}
              className="flex items-center gap-2 px-3 py-2 rounded-lg hover:bg-slate-50 text-left"
            >
              <Users className="w-4 h-4 text-teal-600" />
              <span>Find a Doctor & OPD Rosters</span>
            </button>

            <button
              onClick={() => handleNavClick('academics')}
              className="flex items-center gap-2 px-3 py-2 rounded-lg hover:bg-slate-50 text-left"
            >
              <GraduationCap className="w-4 h-4 text-teal-600" />
              <span>GMC & Academic Admissions</span>
            </button>

            <button
              onClick={() => handleNavClick('patient-care')}
              className="flex items-center gap-2 px-3 py-2 rounded-lg hover:bg-slate-50 text-left"
            >
              <Heart className="w-4 h-4 text-teal-600" />
              <span>Free Patient Welfare & Care Guide</span>
            </button>

            <button
              onClick={() => handleNavClick('leadership')}
              className="flex items-center gap-2 px-3 py-2 rounded-lg hover:bg-slate-50 text-left"
            >
              <span>Director's Message & History</span>
            </button>

            <button
              onClick={() => handleNavClick('news')}
              className="flex items-center gap-2 px-3 py-2 rounded-lg hover:bg-slate-50 text-left"
            >
              <span>News, Tenders & CME</span>
            </button>
          </div>

          <div className="pt-3 border-t border-slate-100 flex flex-col gap-2">
            <button
              onClick={() => {
                onOpenTransplantDesk();
                setMobileMenuOpen(false);
              }}
              className="w-full py-2.5 bg-amber-500 hover:bg-amber-600 text-slate-950 font-bold text-xs rounded-lg transition-colors"
            >
              Transplant Referral & Evaluation Desk
            </button>
            <div className="text-center text-[11px] text-slate-500">
              Gambat Station Road, District Khairpur Mirs, Sindh
            </div>
          </div>
        </div>
      )}
    </header>
  );
};
