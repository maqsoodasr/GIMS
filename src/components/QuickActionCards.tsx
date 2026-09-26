import React from 'react';
import {
  Calendar,
  FileCheck2,
  Activity,
  UserCheck,
  GraduationCap,
  ShieldAlert,
  ArrowRight,
  HeartHandshake,
} from 'lucide-react';

interface QuickActionCardsProps {
  onOpenAppointment: () => void;
  onOpenLabReports: () => void;
  onOpenTransplantDesk: () => void;
  onOpenDoctorSearch: () => void;
  onOpenEmergency: () => void;
  onNavigateSection: (sectionId: string) => void;
}

export const QuickActionCards: React.FC<QuickActionCardsProps> = ({
  onOpenAppointment,
  onOpenLabReports,
  onOpenTransplantDesk,
  onOpenDoctorSearch,
  onOpenEmergency,
  onNavigateSection,
}) => {
  const cards = [
    {
      id: 'card-opd',
      title: 'Book OPD Consultation',
      subtitle: 'Schedule appointment with senior consultants & get instant verified token slip.',
      icon: Calendar,
      color: 'teal',
      badge: 'Online Portal',
      action: onOpenAppointment,
      actionText: 'Book Appointment',
    },
    {
      id: 'card-lab',
      title: 'Online Lab Reports',
      subtitle: 'Instant pathology, biochemistry & viral PCR report verification by Patient MR Number.',
      icon: FileCheck2,
      color: 'sky',
      badge: 'Real-time PACS',
      action: onOpenLabReports,
      actionText: 'Verify Results',
    },
    {
      id: 'card-transplant',
      title: 'Transplant Referral Desk',
      subtitle: 'End-stage liver, renal & bone marrow transplant evaluation & donor assessment.',
      icon: Activity,
      color: 'emerald',
      badge: '100% Free Care',
      action: onOpenTransplantDesk,
      actionText: 'Submit Referral',
    },
    {
      id: 'card-doctors',
      title: 'Find Doctors & Timings',
      subtitle: 'Search faculty, professors, transplant surgeons & daily OPD room allocations.',
      icon: UserCheck,
      color: 'indigo',
      badge: 'Faculty Roster',
      action: onOpenDoctorSearch,
      actionText: 'Search Doctors',
    },
    {
      id: 'card-gmc',
      title: 'GMC Admissions 2026',
      subtitle: 'MBBS, BS Nursing & Allied Health Sciences eligibility criteria and merit portal.',
      icon: GraduationCap,
      color: 'amber',
      badge: 'PM&DC Approved',
      action: () => onNavigateSection('academics'),
      actionText: 'Admissions Info',
    },
    {
      id: 'card-emergency',
      title: '24/7 Level-1 Emergency',
      subtitle: 'Direct ambulance dispatch, urgent blood bank requests & poison/snakebite triage.',
      icon: ShieldAlert,
      color: 'rose',
      badge: '24/7 Helpline',
      action: onOpenEmergency,
      actionText: 'Emergency Help',
    },
  ];

  return (
    <section className="relative -mt-8 sm:-mt-10 z-20 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 lg:gap-5">
        {cards.map((card) => {
          const Icon = card.icon;
          return (
            <div
              key={card.id}
              onClick={card.action}
              className="group bg-white rounded-xl p-5 border border-slate-200/90 shadow-sm hover:shadow-md hover:border-teal-500/60 transition-all cursor-pointer flex flex-col justify-between"
            >
              <div>
                <div className="flex items-center justify-between mb-3">
                  <div
                    className={`w-11 h-11 rounded-lg flex items-center justify-center transition-colors ${
                      card.color === 'teal'
                        ? 'bg-teal-50 text-teal-700 group-hover:bg-teal-600 group-hover:text-white'
                        : card.color === 'sky'
                        ? 'bg-sky-50 text-sky-700 group-hover:bg-sky-600 group-hover:text-white'
                        : card.color === 'emerald'
                        ? 'bg-emerald-50 text-emerald-700 group-hover:bg-emerald-600 group-hover:text-white'
                        : card.color === 'indigo'
                        ? 'bg-indigo-50 text-indigo-700 group-hover:bg-indigo-600 group-hover:text-white'
                        : card.color === 'amber'
                        ? 'bg-amber-50 text-amber-800 group-hover:bg-amber-600 group-hover:text-white'
                        : 'bg-rose-50 text-rose-700 group-hover:bg-rose-600 group-hover:text-white'
                    }`}
                  >
                    <Icon className="w-5 h-5" />
                  </div>
                  <span className="text-[11px] font-semibold text-slate-500 bg-slate-100 px-2 py-0.5 rounded-full border border-slate-200">
                    {card.badge}
                  </span>
                </div>

                <h3 className="text-base font-bold text-slate-900 group-hover:text-teal-700 transition-colors">
                  {card.title}
                </h3>
                <p className="mt-1 text-xs text-slate-600 leading-relaxed line-clamp-2">
                  {card.subtitle}
                </p>
              </div>

              <div className="mt-4 pt-3 border-t border-slate-100 flex items-center justify-between text-xs font-bold text-teal-800 group-hover:text-teal-700">
                <span>{card.actionText}</span>
                <ArrowRight className="w-3.5 h-3.5 transform group-hover:translate-x-1 transition-transform" />
              </div>
            </div>
          );
        })}
      </div>
    </section>
  );
};
