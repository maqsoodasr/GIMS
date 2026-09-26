import React from 'react';
import {
  Heart,
  Home,
  ShieldCheck,
  Clock,
  Pill,
  Droplet,
  Users,
  CheckCircle2,
  FileText,
} from 'lucide-react';

export const PatientCareGuide: React.FC = () => {
  const facilities = [
    {
      icon: ShieldCheck,
      title: '100% Free Treatment Charter',
      desc: 'No billing counters exist in GIMS. Consultation, pathology tests, CT/MRI scans, open heart surgery, and organ transplants are 100% free under Sindh Govt funding.',
      color: 'teal',
    },
    {
      icon: Home,
      title: 'Free Attendants’ Sarai (Lodge)',
      desc: 'Comfortable guest rooms and hygienic dormitory accommodations provided completely free for families and donor relatives traveling from distant cities and provinces.',
      color: 'sky',
    },
    {
      icon: Pill,
      title: '24/7 Free Pharmacy Dispensing',
      desc: 'High-grade hospital formulary medicines, intravenous antibiotics, chemotherapy agents, and post-transplant immunosuppressants dispensed at zero charge.',
      color: 'emerald',
    },
    {
      icon: Droplet,
      title: 'Component Blood Bank',
      desc: 'Free screened blood components, platelets, and plasma issued 24/7 with voluntary replacement donation drives.',
      color: 'rose',
    },
    {
      icon: Clock,
      title: 'Visiting Regulations',
      desc: 'General Wards: 04:00 PM – 06:00 PM daily. Intensive Care Units (ICU): Strictly restricted to 1 nominated attendant with sterile protective attire.',
      color: 'indigo',
    },
    {
      icon: Users,
      title: 'Patient Welfare & Social Services',
      desc: 'Dedicated patient welfare officers stationed in each block to assist illiterate or elderly patients with orientation, wheelchair transit, and paperwork.',
      color: 'amber',
    },
  ];

  return (
    <section id="patient-care" className="py-16 sm:py-20 bg-slate-50 border-t border-slate-200/80">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-3xl">
          <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-teal-100 text-teal-900 text-xs font-bold tracking-wide uppercase">
            <Heart className="w-4 h-4 text-teal-700" />
            <span>Patient & Family Centered Care</span>
          </div>
          <h2 className="mt-3 text-2xl sm:text-3xl lg:text-4xl font-extrabold text-slate-900 tracking-tight font-['Playfair_Display',serif]">
            Compassionate, Dignified & Free Inpatient Services
          </h2>
          <p className="mt-3 text-slate-600 text-sm sm:text-base leading-relaxed">
            Understanding that acute disease affects entire families, GIMS offers comprehensive
            support systems ensuring patients focus solely on healing without economic anxiety.
          </p>
        </div>

        <div className="mt-10 grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {facilities.map((fac, idx) => {
            const Icon = fac.icon;
            return (
              <div
                key={idx}
                className="bg-white rounded-xl border border-slate-200 p-6 shadow-xs hover:shadow-md transition-shadow flex flex-col justify-between"
              >
                <div>
                  <div
                    className={`w-11 h-11 rounded-lg flex items-center justify-center mb-4 ${
                      fac.color === 'teal'
                        ? 'bg-teal-50 text-teal-700'
                        : fac.color === 'sky'
                        ? 'bg-sky-50 text-sky-700'
                        : fac.color === 'emerald'
                        ? 'bg-emerald-50 text-emerald-700'
                        : fac.color === 'rose'
                        ? 'bg-rose-50 text-rose-700'
                        : fac.color === 'indigo'
                        ? 'bg-indigo-50 text-indigo-700'
                        : 'bg-amber-50 text-amber-800'
                    }`}
                  >
                    <Icon className="w-5 h-5" />
                  </div>
                  <h3 className="text-base font-bold text-slate-900">{fac.title}</h3>
                  <p className="mt-2 text-xs text-slate-600 leading-relaxed">{fac.desc}</p>
                </div>
              </div>
            );
          })}
        </div>

        {/* Patient Rights Banner */}
        <div className="mt-10 bg-gradient-to-r from-teal-900 to-slate-900 text-white rounded-2xl p-6 sm:p-8 flex flex-col md:flex-row items-center justify-between gap-6 shadow-lg">
          <div className="space-y-2 max-w-2xl">
            <h4 className="text-lg sm:text-xl font-bold font-['Playfair_Display',serif]">
              Patient Rights & Dignity Charter
            </h4>
            <p className="text-xs text-slate-300 leading-relaxed">
              Every patient admitted to GIMS has the right to considerate, respectful clinical care,
              complete informed consent for surgical interventions, privacy of medical records, and
              unconditional free treatment regardless of socio-economic background.
            </p>
          </div>
          <div className="flex flex-col sm:flex-row gap-3 shrink-0">
            <button
              onClick={() => alert('GIMS Patient Rights & Hospital Policy Document Downloaded.')}
              className="bg-teal-500 hover:bg-teal-400 text-slate-950 font-bold text-xs px-5 py-3 rounded-xl transition-colors cursor-pointer"
            >
              Download Patient Charter
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};
