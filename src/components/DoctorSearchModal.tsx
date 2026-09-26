import React, { useState, useEffect } from 'react';
import {
  X,
  Search,
  Calendar,
  User,
  Clock,
  MapPin,
  Award,
  Filter,
} from 'lucide-react';
import { DOCTORS_DATA, DEPARTMENTS_DATA } from '../data/mockData';

interface DoctorSearchModalProps {
  isOpen: boolean;
  onClose: () => void;
  onSelectDoctorToBook: (deptId: string, doctorId: string) => void;
  initialSearchQuery?: string;
}

export const DoctorSearchModal: React.FC<DoctorSearchModalProps> = ({
  isOpen,
  onClose,
  onSelectDoctorToBook,
  initialSearchQuery,
}) => {
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedDeptFilter, setSelectedDeptFilter] = useState('all');

  useEffect(() => {
    if (isOpen) {
      setSearchTerm(initialSearchQuery || '');
    }
  }, [isOpen, initialSearchQuery]);

  if (!isOpen) return null;

  const filteredDoctors = DOCTORS_DATA.filter((doc) => {
    const matchesSearch =
      doc.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
      doc.specialization.toLowerCase().includes(searchTerm.toLowerCase()) ||
      doc.qualifications.toLowerCase().includes(searchTerm.toLowerCase());

    const matchesDept =
      selectedDeptFilter === 'all' || doc.departmentId === selectedDeptFilter;

    return matchesSearch && matchesDept;
  });

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-3 sm:p-4 bg-slate-950/70 backdrop-blur-xs animate-in fade-in duration-150">
      <div className="bg-white rounded-2xl max-w-3xl w-full max-h-[92vh] overflow-y-auto shadow-2xl border border-slate-200 relative">
        {/* Modal Header */}
        <div className="sticky top-0 bg-slate-900 text-white px-6 py-4 rounded-t-2xl flex items-center justify-between z-10">
          <div className="flex items-center gap-2.5">
            <div className="p-2 bg-teal-800 rounded-lg text-teal-300">
              <User className="w-5 h-5" />
            </div>
            <div>
              <h3 className="text-base font-bold text-white font-['Playfair_Display',serif]">
                Consultant Specialists & Faculty Directory
              </h3>
              <p className="text-[11px] text-slate-300">
                Find senior surgeons, professors & OPD clinic schedules
              </p>
            </div>
          </div>
          <button
            onClick={onClose}
            className="p-1.5 rounded-lg text-slate-400 hover:text-white hover:bg-slate-800 transition-colors cursor-pointer"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        <div className="p-6 space-y-5">
          {/* Search and Filters */}
          <div className="grid sm:grid-cols-12 gap-3">
            <div className="sm:col-span-7 relative">
              <Search className="w-4 h-4 text-slate-400 absolute left-3 top-3" />
              <input
                type="text"
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                placeholder="Search by doctor name or specialty (e.g. Dogar, Liver, CABG)..."
                className="w-full text-xs pl-9 pr-4 py-2.5 bg-slate-50 border border-slate-300 rounded-lg focus:outline-hidden focus:border-teal-500"
              />
            </div>

            <div className="sm:col-span-5">
              <select
                value={selectedDeptFilter}
                onChange={(e) => setSelectedDeptFilter(e.target.value)}
                className="w-full text-xs bg-slate-50 border border-slate-300 rounded-lg p-2.5 focus:outline-hidden focus:border-teal-500"
              >
                <option value="all">All Clinical Departments</option>
                {DEPARTMENTS_DATA.map((dept) => (
                  <option key={dept.id} value={dept.id}>
                    {dept.name}
                  </option>
                ))}
              </select>
            </div>
          </div>

          {/* Results List */}
          <div className="space-y-3">
            {filteredDoctors.length > 0 ? (
              filteredDoctors.map((doc) => (
                <div
                  key={doc.id}
                  className="bg-white rounded-xl border border-slate-200 p-4 hover:border-teal-500/50 hover:shadow-sm transition-all flex flex-col sm:flex-row sm:items-center justify-between gap-4"
                >
                  <div className="space-y-1.5 flex-1">
                    <div className="flex flex-wrap items-center gap-2">
                      <h4 className="text-sm font-bold text-slate-900">{doc.name}</h4>
                      <span className="text-[10px] font-bold text-teal-800 bg-teal-50 px-2 py-0.5 rounded border border-teal-200">
                        {doc.experienceYears}+ Yrs Exp
                      </span>
                    </div>

                    <div className="text-xs font-semibold text-slate-700">
                      {doc.designation}
                    </div>

                    <div className="text-[11px] text-slate-500">
                      {doc.qualifications}
                    </div>

                    <div className="text-xs text-slate-600 font-medium pt-1">
                      <span className="text-slate-400">Specialization:</span>{' '}
                      {doc.specialization}
                    </div>

                    <div className="flex flex-wrap items-center gap-4 text-xs text-slate-500 pt-1">
                      <div className="flex items-center gap-1 text-teal-700 font-medium">
                        <Calendar className="w-3.5 h-3.5" />
                        <span>Days: {doc.opdDays.join(', ')}</span>
                      </div>
                      <div className="flex items-center gap-1">
                        <Clock className="w-3.5 h-3.5" />
                        <span>{doc.opdTimings}</span>
                      </div>
                      <div className="flex items-center gap-1">
                        <MapPin className="w-3.5 h-3.5" />
                        <span>{doc.roomNo}</span>
                      </div>
                    </div>
                  </div>

                  <div className="sm:text-right shrink-0">
                    <button
                      onClick={() => onSelectDoctorToBook(doc.departmentId, doc.id)}
                      className="w-full sm:w-auto bg-teal-700 hover:bg-teal-800 text-white text-xs font-bold px-4 py-2 rounded-lg transition-colors flex items-center justify-center gap-1.5 cursor-pointer shadow-xs"
                    >
                      <Calendar className="w-3.5 h-3.5" />
                      <span>Book Consultation</span>
                    </button>
                  </div>
                </div>
              ))
            ) : (
              <div className="text-center py-10 bg-slate-50 rounded-xl border border-dashed border-slate-300">
                <User className="w-8 h-8 text-slate-400 mx-auto mb-2" />
                <div className="text-xs font-bold text-slate-700">No doctors match your query</div>
                <div className="text-[11px] text-slate-500 mt-1">
                  Try adjusting the department filter or searching a different keyword.
                </div>
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};
