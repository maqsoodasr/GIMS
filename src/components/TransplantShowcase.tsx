import React, { useState } from 'react';
import {
  Activity,
  Heart,
  ShieldCheck,
  CheckCircle2,
  AlertCircle,
  FileText,
  Users,
  Award,
  ArrowRight,
  ShieldAlert,
  Eye,
  Headphones,
} from 'lucide-react';
import { TRANSPLANT_PROGRAMS } from '../data/mockData';

interface TransplantShowcaseProps {
  onOpenTransplantDesk: (organId?: string) => void;
  onOpenAppointment: () => void;
}

export const TransplantShowcase: React.FC<TransplantShowcaseProps> = ({
  onOpenTransplantDesk,
  onOpenAppointment,
}) => {
  const [activeTab, setActiveTab] = useState('liver');

  const selectedProgram =
    TRANSPLANT_PROGRAMS.find((p) => p.id === activeTab) || TRANSPLANT_PROGRAMS[0];

  const getIcon = (id: string) => {
    switch (id) {
      case 'liver':
        return <Activity className="w-5 h-5" />;
      case 'kidney':
        return <ShieldAlert className="w-5 h-5" />;
      case 'bone-marrow':
        return <Heart className="w-5 h-5" />;
      case 'cornea':
        return <Eye className="w-5 h-5" />;
      case 'cochlear':
        return <Headphones className="w-5 h-5" />;
      default:
        return <Activity className="w-5 h-5" />;
    }
  };

  return (
    <section id="transplants" className="py-16 sm:py-20 bg-slate-50 border-t border-slate-200/80">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="max-w-3xl">
          <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-teal-100 text-teal-900 text-xs font-bold tracking-wide uppercase">
            <Award className="w-3.5 h-3.5 text-teal-700" />
            <span>National Centers of Excellence</span>
          </div>
          <h2 className="mt-3 text-2xl sm:text-3xl lg:text-4xl font-extrabold text-slate-900 tracking-tight font-['Playfair_Display',serif]">
            South Asia’s Largest Free-of-Cost Organ Transplant Programs
          </h2>
          <p className="mt-3 text-slate-600 text-sm sm:text-base leading-relaxed">
            Funded by the Government of Sindh, GIMS has achieved international acclaim for
            delivering complex multi-organ transplant procedures with zero cost to patients, supported
            by state-of-the-art sterile surgical suites, molecular tissue typing, and lifelong medication.
          </p>
        </div>

        {/* Tab Navigation */}
        <div className="mt-8 flex flex-wrap gap-2 border-b border-slate-200 pb-2">
          {TRANSPLANT_PROGRAMS.map((program) => (
            <button
              key={program.id}
              onClick={() => setActiveTab(program.id)}
              className={`flex items-center gap-2 px-4 py-3 rounded-xl text-xs sm:text-sm font-bold transition-all cursor-pointer ${
                activeTab === program.id
                  ? 'bg-slate-900 text-white shadow-md'
                  : 'bg-white text-slate-700 hover:bg-slate-100 border border-slate-200/80'
              }`}
            >
              <span
                className={
                  activeTab === program.id
                    ? 'text-teal-400'
                    : 'text-teal-600'
                }
              >
                {getIcon(program.id)}
              </span>
              <span>{program.organName.split('&')[0]}</span>
              <span
                className={`text-[10px] px-1.5 py-0.5 rounded-full ${
                  activeTab === program.id
                    ? 'bg-teal-900 text-teal-200 border border-teal-600/40'
                    : 'bg-slate-100 text-slate-600'
                }`}
              >
                {program.totalTransplants}+
              </span>
            </button>
          ))}
        </div>

        {/* Selected Program Details Card */}
        <div className="mt-6 bg-white rounded-2xl border border-slate-200/90 shadow-sm p-6 sm:p-8">
          <div className="grid lg:grid-cols-12 gap-8 items-start">
            {/* Left Content */}
            <div className="lg:col-span-8 space-y-5">
              <div className="flex flex-wrap items-center gap-3">
                <span className="text-xs font-bold text-teal-800 bg-teal-50 px-3 py-1 rounded-md border border-teal-200">
                  {selectedProgram.costToPatient}
                </span>
                <span className="text-xs font-bold text-emerald-800 bg-emerald-50 px-3 py-1 rounded-md border border-emerald-200">
                  Success Rate: {selectedProgram.successRate}
                </span>
                <span className="text-xs font-medium text-slate-500">
                  Total Surgeries to Date: {selectedProgram.totalTransplants.toLocaleString()}+
                </span>
              </div>

              <h3 className="text-xl sm:text-2xl font-bold text-slate-900 font-['Playfair_Display',serif]">
                {selectedProgram.organName}
              </h3>

              <p className="text-sm text-slate-600 leading-relaxed">
                {selectedProgram.description}
              </p>

              <div>
                <h4 className="text-xs font-bold uppercase tracking-wider text-slate-500 mb-3">
                  Key Clinical Milestones & Standard of Care
                </h4>
                <div className="grid sm:grid-cols-2 gap-2.5">
                  {selectedProgram.highlights.map((item, idx) => (
                    <div
                      key={idx}
                      className="flex items-start gap-2 bg-slate-50 p-2.5 rounded-lg border border-slate-200/70 text-xs text-slate-700"
                    >
                      <CheckCircle2 className="w-4 h-4 text-teal-600 shrink-0 mt-0.5" />
                      <span>{item}</span>
                    </div>
                  ))}
                </div>
              </div>

              {/* Leadership & Faculty */}
              <div className="pt-3 border-t border-slate-100 flex flex-wrap items-center justify-between gap-4 text-xs text-slate-600">
                <div>
                  <span className="font-bold text-slate-900">Program Director: </span>
                  {selectedProgram.director}
                </div>
                <div>
                  <span className="font-bold text-slate-900">Lead Surgeon: </span>
                  {selectedProgram.leadSurgeon}
                </div>
              </div>
            </div>

            {/* Right Action Panel */}
            <div className="lg:col-span-4 bg-slate-900 text-white rounded-xl p-6 flex flex-col justify-between space-y-6">
              <div>
                <div className="flex items-center gap-2 text-teal-400 text-xs font-bold uppercase tracking-wide">
                  <ShieldCheck className="w-4 h-4" />
                  <span>Free Patient Evaluation</span>
                </div>
                <h4 className="mt-2 text-lg font-bold text-white">
                  Refer a Patient or Inquire for Evaluation
                </h4>
                <p className="mt-2 text-xs text-slate-300 leading-relaxed">
                  Physicians and patient families from anywhere in Pakistan can register for donor
                  matching, liver triphasic CT reviews, HLA cross-matching, and pre-transplant workup.
                </p>

                <div className="mt-4 space-y-2 text-xs text-slate-300">
                  <div className="flex items-center gap-2">
                    <span className="w-1.5 h-1.5 rounded-full bg-teal-400"></span>
                    <span>No surgery charges</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <span className="w-1.5 h-1.5 rounded-full bg-teal-400"></span>
                    <span>No ICU or bed charges</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <span className="w-1.5 h-1.5 rounded-full bg-teal-400"></span>
                    <span>Free post-operative immunosuppressants</span>
                  </div>
                </div>
              </div>

              <div className="space-y-2.5">
                <button
                  onClick={() => onOpenTransplantDesk(selectedProgram.id)}
                  className="w-full bg-teal-500 hover:bg-teal-400 text-slate-950 font-bold text-xs py-3 px-4 rounded-lg flex items-center justify-center gap-2 transition-colors cursor-pointer shadow-md"
                >
                  <FileText className="w-4 h-4" />
                  <span>Submit Transplant Inquiry</span>
                </button>

                <button
                  onClick={onOpenAppointment}
                  className="w-full bg-slate-800 hover:bg-slate-700 text-slate-200 font-semibold text-xs py-2.5 px-4 rounded-lg flex items-center justify-center gap-1.5 transition-colors cursor-pointer border border-slate-700"
                >
                  <span>Book OPD Consultation</span>
                  <ArrowRight className="w-3.5 h-3.5" />
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
