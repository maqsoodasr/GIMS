import React, { useState } from 'react';
import {
  Activity,
  Heart,
  ShieldAlert,
  Sparkles,
  AlertTriangle,
  Baby,
  Users,
  Cpu,
  FlaskConical,
  Filter,
  CheckCircle2,
  Calendar,
  X,
  ArrowRight,
} from 'lucide-react';
import { DEPARTMENTS_DATA, DOCTORS_DATA } from '../data/mockData';
import { Department } from '../types';

interface DepartmentGridProps {
  onOpenAppointment: (deptId?: string, doctorId?: string) => void;
  onOpenDoctorSearch: () => void;
}

export const DepartmentGrid: React.FC<DepartmentGridProps> = ({
  onOpenAppointment,
  onOpenDoctorSearch,
}) => {
  const [filter, setFilter] = useState<'all' | 'transplant' | 'surgical' | 'clinical' | 'diagnostic' | 'emergency'>('all');
  const [selectedDept, setSelectedDept] = useState<Department | null>(null);

  const filteredDepts =
    filter === 'all'
      ? DEPARTMENTS_DATA
      : DEPARTMENTS_DATA.filter((d) => d.category === filter);

  const getDeptIcon = (iconName: string) => {
    switch (iconName) {
      case 'Activity':
        return <Activity className="w-5 h-5" />;
      case 'Heart':
        return <Heart className="w-5 h-5" />;
      case 'ShieldAlert':
        return <ShieldAlert className="w-5 h-5" />;
      case 'Sparkles':
        return <Sparkles className="w-5 h-5" />;
      case 'AlertTriangle':
        return <AlertTriangle className="w-5 h-5" />;
      case 'Baby':
        return <Baby className="w-5 h-5" />;
      case 'Users':
        return <Users className="w-5 h-5" />;
      case 'Cpu':
        return <Cpu className="w-5 h-5" />;
      case 'FlaskConical':
        return <FlaskConical className="w-5 h-5" />;
      default:
        return <Activity className="w-5 h-5" />;
    }
  };

  const getDeptDoctors = (deptId: string) => {
    return DOCTORS_DATA.filter((doc) => doc.departmentId === deptId);
  };

  return (
    <section id="departments" className="py-16 sm:py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-4">
          <div className="max-w-2xl">
            <span className="text-xs font-bold text-teal-800 uppercase tracking-wider">
              Comprehensive Clinical Services
            </span>
            <h2 className="mt-2 text-2xl sm:text-3xl lg:text-4xl font-extrabold text-slate-900 tracking-tight font-['Playfair_Display',serif]">
              Specialized Medical & Surgical Faculties
            </h2>
            <p className="mt-2 text-slate-600 text-sm leading-relaxed">
              Equipped with international-grade technologies, laminar airflow surgical theatres, 3T MRI,
              and 24/7 fully staffed intensive care units.
            </p>
          </div>

          <button
            onClick={onOpenDoctorSearch}
            className="self-start md:self-auto text-xs font-bold text-teal-700 hover:text-teal-800 bg-teal-50 hover:bg-teal-100 px-4 py-2.5 rounded-lg border border-teal-200 transition-colors flex items-center gap-1.5"
          >
            <span>View Full Faculty Directory</span>
            <ArrowRight className="w-4 h-4" />
          </button>
        </div>

        {/* Category Filters */}
        <div className="mt-8 flex flex-wrap gap-2">
          {[
            { id: 'all', label: 'All Faculties' },
            { id: 'transplant', label: 'Organ Transplants' },
            { id: 'surgical', label: 'Surgical & Cardiac' },
            { id: 'clinical', label: 'Clinical Medicine & Oncology' },
            { id: 'diagnostic', label: 'Diagnostics, 3T MRI & Labs' },
            { id: 'emergency', label: 'Level-1 Emergency & Trauma' },
          ].map((tab) => (
            <button
              key={tab.id}
              onClick={() => setFilter(tab.id as any)}
              className={`px-3.5 py-2 rounded-lg text-xs font-bold transition-colors cursor-pointer ${
                filter === tab.id
                  ? 'bg-teal-700 text-white shadow-xs'
                  : 'bg-slate-100 text-slate-600 hover:bg-slate-200/80'
              }`}
            >
              {tab.label}
            </button>
          ))}
        </div>

        {/* Department Cards Grid */}
        <div className="mt-8 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredDepts.map((dept) => (
            <div
              key={dept.id}
              className="bg-white rounded-xl border border-slate-200/90 shadow-xs hover:shadow-md hover:border-teal-500/50 transition-all p-5 flex flex-col justify-between"
            >
              <div>
                <div className="flex items-start justify-between gap-3 mb-3">
                  <div className="p-2.5 bg-slate-100 rounded-lg text-teal-800">
                    {getDeptIcon(dept.iconName)}
                  </div>
                  {dept.featuredStats && (
                    <span className="text-[11px] font-bold text-teal-800 bg-teal-50 px-2 py-0.5 rounded border border-teal-200/70">
                      {dept.featuredStats}
                    </span>
                  )}
                </div>

                <h3 className="text-base font-bold text-slate-900 line-clamp-1">
                  {dept.name}
                </h3>

                <p className="mt-2 text-xs text-slate-600 line-clamp-2 leading-relaxed">
                  {dept.description}
                </p>

                <div className="mt-4 pt-3 border-t border-slate-100">
                  <div className="text-[11px] text-slate-500">Head of Department:</div>
                  <div className="text-xs font-bold text-slate-800 truncate">
                    {dept.headOfDept}
                  </div>
                  <div className="text-[10px] text-slate-500 truncate">
                    {dept.headDesignation}
                  </div>
                </div>
              </div>

              <div className="mt-5 pt-3 border-t border-slate-100 flex items-center justify-between gap-2">
                <button
                  onClick={() => setSelectedDept(dept)}
                  className="text-xs font-semibold text-slate-600 hover:text-teal-700 cursor-pointer"
                >
                  View Details
                </button>

                <button
                  onClick={() => onOpenAppointment(dept.id)}
                  className="bg-teal-700 hover:bg-teal-800 text-white text-xs font-bold px-3 py-1.5 rounded-md transition-colors flex items-center gap-1.5 cursor-pointer"
                >
                  <Calendar className="w-3.5 h-3.5" />
                  <span>Book OPD</span>
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Department Detail Modal */}
      {selectedDept && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-slate-950/60 backdrop-blur-xs animate-in fade-in duration-150">
          <div className="bg-white rounded-2xl max-w-2xl w-full max-h-[90vh] overflow-y-auto shadow-2xl border border-slate-200 p-6 relative">
            <button
              onClick={() => setSelectedDept(null)}
              className="absolute top-4 right-4 p-2 text-slate-400 hover:text-slate-700 rounded-lg hover:bg-slate-100 transition-colors"
            >
              <X className="w-5 h-5" />
            </button>

            <div className="flex items-center gap-3">
              <div className="p-3 bg-teal-100 text-teal-800 rounded-xl">
                {getDeptIcon(selectedDept.iconName)}
              </div>
              <div>
                <span className="text-[11px] font-bold text-teal-700 uppercase tracking-wider">
                  Clinical Faculty
                </span>
                <h3 className="text-xl font-bold text-slate-900 font-['Playfair_Display',serif]">
                  {selectedDept.name}
                </h3>
              </div>
            </div>

            <p className="mt-4 text-xs sm:text-sm text-slate-600 leading-relaxed">
              {selectedDept.description}
            </p>

            {/* Department Leadership */}
            <div className="mt-5 p-3.5 bg-slate-50 rounded-xl border border-slate-200">
              <div className="text-xs font-bold text-slate-500 uppercase tracking-wider">
                Leadership
              </div>
              <div className="text-sm font-bold text-slate-900 mt-1">
                {selectedDept.headOfDept}
              </div>
              <div className="text-xs text-slate-600">{selectedDept.headDesignation}</div>
              {selectedDept.bedCount && selectedDept.bedCount > 0 ? (
                <div className="mt-2 text-xs font-semibold text-teal-700">
                  Dedicated Inpatient Bed Capacity: {selectedDept.bedCount} beds
                </div>
              ) : null}
            </div>

            {/* Clinical Services List */}
            <div className="mt-5">
              <h4 className="text-xs font-bold uppercase tracking-wider text-slate-500 mb-2.5">
                Specialized Services & Procedures
              </h4>
              <div className="grid sm:grid-cols-2 gap-2">
                {selectedDept.services.map((svc, i) => (
                  <div
                    key={i}
                    className="flex items-start gap-2 bg-slate-50 p-2 rounded-lg text-xs text-slate-700 border border-slate-200/60"
                  >
                    <CheckCircle2 className="w-4 h-4 text-teal-600 shrink-0 mt-0.5" />
                    <span>{svc}</span>
                  </div>
                ))}
              </div>
            </div>

            {/* Doctors in this department */}
            <div className="mt-5">
              <h4 className="text-xs font-bold uppercase tracking-wider text-slate-500 mb-2.5">
                Consultants & Faculty Roster
              </h4>
              {getDeptDoctors(selectedDept.id).length > 0 ? (
                <div className="space-y-2">
                  {getDeptDoctors(selectedDept.id).map((doc) => (
                    <div
                      key={doc.id}
                      className="p-3 bg-white rounded-lg border border-slate-200 flex flex-col sm:flex-row sm:items-center justify-between gap-2"
                    >
                      <div>
                        <div className="text-xs font-bold text-slate-900">{doc.name}</div>
                        <div className="text-[11px] text-slate-500">{doc.qualifications}</div>
                        <div className="text-[11px] text-teal-700 mt-0.5">
                          OPD: {doc.opdDays.join(', ')} ({doc.opdTimings})
                        </div>
                      </div>
                      <button
                        onClick={() => {
                          const deptId = selectedDept.id;
                          setSelectedDept(null);
                          onOpenAppointment(deptId, doc.id);
                        }}
                        className="bg-teal-700 hover:bg-teal-800 text-white text-xs font-bold px-3 py-1.5 rounded-md transition-colors self-start sm:self-auto cursor-pointer"
                      >
                        Book with Doctor
                      </button>
                    </div>
                  ))}
                </div>
              ) : (
                <div className="text-xs text-slate-500 italic p-3 bg-slate-50 rounded-lg">
                  Consultants on 24/7 rotational duty. Please consult OPD desk for daily schedule.
                </div>
              )}
            </div>

            {/* Modal Bottom CTA */}
            <div className="mt-6 pt-4 border-t border-slate-200 flex justify-end gap-2">
              <button
                onClick={() => setSelectedDept(null)}
                className="px-4 py-2 text-xs font-bold text-slate-600 hover:bg-slate-100 rounded-lg cursor-pointer"
              >
                Close
              </button>
              <button
                onClick={() => {
                  const deptId = selectedDept.id;
                  setSelectedDept(null);
                  onOpenAppointment(deptId);
                }}
                className="bg-teal-700 hover:bg-teal-800 text-white text-xs font-bold px-5 py-2 rounded-lg transition-colors cursor-pointer"
              >
                Book Department OPD
              </button>
            </div>
          </div>
        </div>
      )}
    </section>
  );
};
