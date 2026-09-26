import React, { useState } from 'react';
import {
  GraduationCap,
  BookOpen,
  Award,
  CheckCircle2,
  Calendar,
  Calculator,
  Download,
  Users,
  ShieldCheck,
} from 'lucide-react';
import { ACADEMIC_PROGRAMS } from '../data/mockData';

export const AcademicsSection: React.FC = () => {
  const [activeProgramId, setActiveProgramId] = useState('mbbs');

  // Interactive MDCAT Aggregate Calculator
  const [matricMarks, setMatricMarks] = useState('980');
  const [matricTotal, setMatricTotal] = useState('1100');
  const [fscMarks, setFscMarks] = useState('950');
  const [fscTotal, setFscTotal] = useState('1100');
  const [mdcatMarks, setMdcatMarks] = useState('165');
  const [mdcatTotal, setMdcatTotal] = useState('200');

  const calcMatricPerc = matricMarks && matricTotal ? (parseFloat(matricMarks) / parseFloat(matricTotal)) * 100 : 0;
  const calcFscPerc = fscMarks && fscTotal ? (parseFloat(fscMarks) / parseFloat(fscTotal)) * 100 : 0;
  const calcMdcatPerc = mdcatMarks && mdcatTotal ? (parseFloat(mdcatMarks) / parseFloat(mdcatTotal)) * 100 : 0;

  // Formula as per PM&DC: Matric 10%, F.Sc 40%, MDCAT 50%
  const aggregateScore = (calcMatricPerc * 0.1) + (calcFscPerc * 0.4) + (calcMdcatPerc * 0.5);

  const selectedProgram =
    ACADEMIC_PROGRAMS.find((p) => p.id === activeProgramId) || ACADEMIC_PROGRAMS[0];

  return (
    <section id="academics" className="py-16 sm:py-20 bg-slate-50 border-t border-slate-200/80">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="max-w-3xl">
          <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-teal-100 text-teal-900 text-xs font-bold tracking-wide uppercase">
            <GraduationCap className="w-4 h-4 text-teal-700" />
            <span>Academic & Medical Training Excellence</span>
          </div>
          <h2 className="mt-3 text-2xl sm:text-3xl lg:text-4xl font-extrabold text-slate-900 tracking-tight font-['Playfair_Display',serif]">
            Gambat Medical College & Faculty of Health Sciences
          </h2>
          <p className="mt-3 text-slate-600 text-sm sm:text-base leading-relaxed">
            Recognized by PM&DC and CPSP, affiliated with SMBBMU Larkana. Medical students, nurses,
            and allied health professionals receive direct hands-on clinical exposure in South Asia’s
            most active multi-organ transplant hospital.
          </p>
        </div>

        {/* Two-Column: Programs & Calculator */}
        <div className="mt-10 grid lg:grid-cols-12 gap-8">
          {/* Programs Navigation & Details */}
          <div className="lg:col-span-7 space-y-6">
            <div className="flex flex-wrap gap-2">
              {ACADEMIC_PROGRAMS.map((prog) => (
                <button
                  key={prog.id}
                  onClick={() => setActiveProgramId(prog.id)}
                  className={`px-3.5 py-2 rounded-lg text-xs font-bold transition-all cursor-pointer ${
                    activeProgramId === prog.id
                      ? 'bg-teal-700 text-white shadow-xs'
                      : 'bg-white text-slate-700 hover:bg-slate-100 border border-slate-200'
                  }`}
                >
                  {prog.title.split('(')[0].trim()}
                </button>
              ))}
            </div>

            <div className="bg-white rounded-2xl border border-slate-200 p-6 sm:p-7 shadow-xs space-y-5">
              <div className="flex flex-wrap items-center justify-between gap-3">
                <span className="text-xs font-bold text-teal-800 bg-teal-50 px-3 py-1 rounded border border-teal-200">
                  {selectedProgram.faculty}
                </span>
                <span className="text-xs font-bold text-emerald-800 bg-emerald-50 px-3 py-1 rounded border border-emerald-200">
                  {selectedProgram.status}
                </span>
              </div>

              <div>
                <h3 className="text-xl font-bold text-slate-900 font-['Playfair_Display',serif]">
                  {selectedProgram.title}
                </h3>
                <div className="flex flex-wrap gap-4 text-xs text-slate-500 mt-2">
                  <div>
                    <span className="font-semibold text-slate-700">Duration: </span>
                    {selectedProgram.duration}
                  </div>
                  <div>
                    <span className="font-semibold text-slate-700">Annual Intake: </span>
                    {selectedProgram.seats} Seats
                  </div>
                  <div>
                    <span className="font-semibold text-slate-700">Level: </span>
                    {selectedProgram.degreeType}
                  </div>
                </div>
              </div>

              <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
                {selectedProgram.description}
              </p>

              <div className="p-3.5 bg-slate-50 rounded-xl border border-slate-200">
                <div className="text-xs font-bold uppercase tracking-wider text-slate-500">
                  Eligibility Criteria
                </div>
                <div className="text-xs font-medium text-slate-800 mt-1">
                  {selectedProgram.eligibility}
                </div>
              </div>

              <div>
                <div className="text-xs font-bold uppercase tracking-wider text-slate-500 mb-2">
                  Recognitions & Affiliations
                </div>
                <div className="flex flex-wrap gap-2">
                  {selectedProgram.accreditations.map((acc, idx) => (
                    <span
                      key={idx}
                      className="text-[11px] font-semibold text-slate-700 bg-slate-100 px-2.5 py-1 rounded-md border border-slate-200"
                    >
                      {acc}
                    </span>
                  ))}
                </div>
              </div>

              <div className="pt-3 border-t border-slate-100 flex flex-wrap items-center justify-between gap-3">
                <div className="text-xs text-slate-500">
                  Session: 2026-2027 Academic Year
                </div>
                <button
                  onClick={() => alert('GMC Academic Prospectus & Admission Guidelines Downloaded.')}
                  className="bg-slate-900 hover:bg-slate-800 text-white text-xs font-bold px-4 py-2 rounded-lg flex items-center gap-1.5 transition-colors cursor-pointer"
                >
                  <Download className="w-3.5 h-3.5 text-teal-400" />
                  <span>Download GMC Prospectus</span>
                </button>
              </div>
            </div>
          </div>

          {/* Interactive PM&DC Merit Aggregate Calculator */}
          <div className="lg:col-span-5 bg-white rounded-2xl border border-teal-500/30 p-6 shadow-sm flex flex-col justify-between">
            <div>
              <div className="flex items-center gap-2 text-teal-700 text-xs font-bold uppercase tracking-wider">
                <Calculator className="w-4 h-4" />
                <span>Prospective Students Portal</span>
              </div>
              <h3 className="text-lg font-bold text-slate-900 mt-1 font-['Playfair_Display',serif]">
                PM&DC Merit Aggregate Calculator
              </h3>
              <p className="text-xs text-slate-500 mt-1">
                Estimate your admission aggregate based on official formula: Matriculation (10%) +
                Intermediate F.Sc (40%) + National MDCAT (50%).
              </p>

              <div className="mt-5 space-y-3.5">
                {/* Matric */}
                <div>
                  <div className="flex justify-between text-xs font-semibold text-slate-700 mb-1">
                    <span>Matric / SSC (10% Weightage)</span>
                    <span className="text-slate-500">{calcMatricPerc.toFixed(1)}%</span>
                  </div>
                  <div className="grid grid-cols-2 gap-2">
                    <input
                      type="number"
                      placeholder="Marks"
                      value={matricMarks}
                      onChange={(e) => setMatricMarks(e.target.value)}
                      className="text-xs p-2 bg-slate-50 border border-slate-300 rounded-lg focus:outline-hidden"
                    />
                    <input
                      type="number"
                      placeholder="Total (1100)"
                      value={matricTotal}
                      onChange={(e) => setMatricTotal(e.target.value)}
                      className="text-xs p-2 bg-slate-50 border border-slate-300 rounded-lg focus:outline-hidden"
                    />
                  </div>
                </div>

                {/* F.Sc */}
                <div>
                  <div className="flex justify-between text-xs font-semibold text-slate-700 mb-1">
                    <span>F.Sc Pre-Medical (40% Weightage)</span>
                    <span className="text-slate-500">{calcFscPerc.toFixed(1)}%</span>
                  </div>
                  <div className="grid grid-cols-2 gap-2">
                    <input
                      type="number"
                      placeholder="Marks"
                      value={fscMarks}
                      onChange={(e) => setFscMarks(e.target.value)}
                      className="text-xs p-2 bg-slate-50 border border-slate-300 rounded-lg focus:outline-hidden"
                    />
                    <input
                      type="number"
                      placeholder="Total (1100)"
                      value={fscTotal}
                      onChange={(e) => setFscTotal(e.target.value)}
                      className="text-xs p-2 bg-slate-50 border border-slate-300 rounded-lg focus:outline-hidden"
                    />
                  </div>
                </div>

                {/* MDCAT */}
                <div>
                  <div className="flex justify-between text-xs font-semibold text-slate-700 mb-1">
                    <span>National MDCAT (50% Weightage)</span>
                    <span className="text-slate-500">{calcMdcatPerc.toFixed(1)}%</span>
                  </div>
                  <div className="grid grid-cols-2 gap-2">
                    <input
                      type="number"
                      placeholder="Score"
                      value={mdcatMarks}
                      onChange={(e) => setMdcatMarks(e.target.value)}
                      className="text-xs p-2 bg-slate-50 border border-slate-300 rounded-lg focus:outline-hidden"
                    />
                    <input
                      type="number"
                      placeholder="Total (200)"
                      value={mdcatTotal}
                      onChange={(e) => setMdcatTotal(e.target.value)}
                      className="text-xs p-2 bg-slate-50 border border-slate-300 rounded-lg focus:outline-hidden"
                    />
                  </div>
                </div>
              </div>

              {/* Result Box */}
              <div className="mt-5 p-4 bg-teal-950 text-white rounded-xl border border-teal-800 text-center">
                <span className="text-[11px] uppercase tracking-wider text-teal-300 font-bold">
                  Estimated Admission Aggregate
                </span>
                <div className="text-3xl font-black text-white mt-0.5">
                  {aggregateScore > 0 ? `${aggregateScore.toFixed(2)}%` : '--%'}
                </div>
                <div className="text-[11px] text-teal-200/80 mt-1">
                  {aggregateScore >= 70 ? (
                    <span className="text-emerald-400 font-bold">
                      ✓ Eligible for Gambat Medical College Merit Application
                    </span>
                  ) : (
                    <span>Minimum 65% aggregate required for PM&DC consideration</span>
                  )}
                </div>
              </div>
            </div>

            <div className="mt-5 pt-3 border-t border-slate-100 flex items-center justify-between text-xs text-slate-500">
              <span>Principal: Prof. Dr. Haresh Chand</span>
              <a
                href="mailto:admissions@gims.edu.pk"
                className="text-teal-700 font-bold hover:underline"
              >
                admissions@gims.edu.pk
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
