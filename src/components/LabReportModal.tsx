import React, { useState } from 'react';
import {
  X,
  Search,
  FileCheck,
  Printer,
  AlertCircle,
  Download,
  QrCode,
  ShieldCheck,
  FlaskConical,
  CheckCircle2,
} from 'lucide-react';
import { MOCK_LAB_REPORTS, INSTITUTION_INFO } from '../data/mockData';
import { LabReport } from '../types';

interface LabReportModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export const LabReportModal: React.FC<LabReportModalProps> = ({ isOpen, onClose }) => {
  const [mrInput, setMrInput] = useState('');
  const [activeReport, setActiveReport] = useState<LabReport | null>(MOCK_LAB_REPORTS['MR-2024-8841']);
  const [errorMessage, setErrorMessage] = useState('');

  if (!isOpen) return null;

  const handleSearch = (e: React.FormEvent) => {
    e.preventDefault();
    const cleanMr = mrInput.trim().toUpperCase();
    if (!cleanMr) {
      setErrorMessage('Please enter a valid Patient MR Number.');
      return;
    }

    if (MOCK_LAB_REPORTS[cleanMr]) {
      setActiveReport(MOCK_LAB_REPORTS[cleanMr]);
      setErrorMessage('');
    } else {
      setErrorMessage(`No verified lab report found for MR Number "${cleanMr}". Try the sample records below.`);
      setActiveReport(null);
    }
  };

  const loadSample = (sampleMr: string) => {
    setMrInput(sampleMr);
    setActiveReport(MOCK_LAB_REPORTS[sampleMr]);
    setErrorMessage('');
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-3 sm:p-4 bg-slate-950/70 backdrop-blur-xs animate-in fade-in duration-150">
      <div className="bg-white rounded-2xl max-w-3xl w-full max-h-[92vh] overflow-y-auto shadow-2xl border border-slate-200 relative">
        {/* Header */}
        <div className="sticky top-0 bg-slate-900 text-white px-6 py-4 rounded-t-2xl flex items-center justify-between z-10">
          <div className="flex items-center gap-2.5">
            <div className="p-2 bg-sky-800 rounded-lg text-sky-300">
              <FlaskConical className="w-5 h-5" />
            </div>
            <div>
              <h3 className="text-base font-bold text-white font-['Playfair_Display',serif]">
                Online Diagnostic & Pathology Reports Portal
              </h3>
              <p className="text-[11px] text-slate-300">
                PACS & LIS Certified Molecular, Biochemistry & Haematology Verification
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

        <div className="p-6 space-y-6">
          {/* Search Box */}
          <div className="bg-slate-50 p-4 rounded-xl border border-slate-200">
            <form onSubmit={handleSearch} className="flex flex-col sm:flex-row gap-2">
              <div className="relative flex-1">
                <Search className="w-4 h-4 text-slate-400 absolute left-3 top-3" />
                <input
                  type="text"
                  value={mrInput}
                  onChange={(e) => setMrInput(e.target.value)}
                  placeholder="Enter Patient MR# (e.g. MR-2024-8841)"
                  className="w-full text-xs pl-9 pr-4 py-2.5 bg-white border border-slate-300 rounded-lg focus:outline-hidden focus:border-teal-500"
                />
              </div>
              <button
                type="submit"
                className="bg-sky-700 hover:bg-sky-800 text-white font-bold text-xs px-5 py-2.5 rounded-lg transition-colors cursor-pointer shadow-xs flex items-center justify-center gap-1.5"
              >
                <Search className="w-3.5 h-3.5" />
                <span>Search Report</span>
              </button>
            </form>

            {/* Quick Sample Test Buttons */}
            <div className="mt-3 flex flex-wrap items-center gap-2 text-xs">
              <span className="text-slate-500 font-medium">Quick Sample Records:</span>
              <button
                type="button"
                onClick={() => loadSample('MR-2024-8841')}
                className="bg-white hover:bg-sky-50 text-sky-800 px-2.5 py-1 rounded border border-slate-300 hover:border-sky-300 text-[11px] font-semibold transition-colors"
              >
                MR-2024-8841 (Liver Panel & PCR)
              </button>
              <button
                type="button"
                onClick={() => loadSample('MR-2024-9102')}
                className="bg-white hover:bg-sky-50 text-sky-800 px-2.5 py-1 rounded border border-slate-300 hover:border-sky-300 text-[11px] font-semibold transition-colors"
              >
                MR-2024-9102 (Renal & Electrolytes)
              </button>
              <button
                type="button"
                onClick={() => loadSample('MR-2024-5531')}
                className="bg-white hover:bg-sky-50 text-sky-800 px-2.5 py-1 rounded border border-slate-300 hover:border-sky-300 text-[11px] font-semibold transition-colors"
              >
                MR-2024-5531 (Automated CBC)
              </button>
            </div>
          </div>

          {errorMessage && (
            <div className="bg-rose-50 border border-rose-200 text-rose-700 p-3 rounded-xl text-xs flex items-center gap-2">
              <AlertCircle className="w-4 h-4 shrink-0" />
              <span>{errorMessage}</span>
            </div>
          )}

          {/* Render Certified Report */}
          {activeReport && (
            <div className="bg-white rounded-xl border border-slate-300 shadow-sm p-5 sm:p-6 text-slate-800 space-y-4">
              {/* Lab Header */}
              <div className="flex flex-col sm:flex-row items-center justify-between pb-4 border-b border-slate-200 gap-3">
                <div className="text-center sm:text-left">
                  <div className="text-xs font-black tracking-wide text-slate-900">
                    PAQSJIMS COMPUTERIZED PATHOLOGICAL & MOLECULAR LABORATORIES
                  </div>
                  <div className="text-[10px] text-slate-500">
                    Gambat Institute of Medical Sciences • ISO 15189 Standard Compliant
                  </div>
                  <div className="text-xs font-bold text-teal-800 mt-1">
                    {activeReport.category}
                  </div>
                </div>

                <div className="flex items-center gap-3">
                  <div className="text-right hidden sm:block">
                    <div className="text-[10px] text-slate-400">Specimen Barcode</div>
                    <div className="font-mono text-xs font-bold tracking-widest text-slate-800">
                      *{activeReport.mrNo}*
                    </div>
                  </div>
                  <div className="p-1 bg-slate-100 rounded border border-slate-200">
                    <QrCode className="w-10 h-10 text-slate-800" />
                  </div>
                </div>
              </div>

              {/* Patient Demographics Table */}
              <div className="grid grid-cols-2 sm:grid-cols-4 gap-3 bg-slate-50 p-3 rounded-lg border border-slate-200 text-xs">
                <div>
                  <span className="text-slate-500 text-[10px]">MR Number:</span>
                  <div className="font-bold text-slate-900">{activeReport.mrNo}</div>
                </div>
                <div>
                  <span className="text-slate-500 text-[10px]">Patient Name:</span>
                  <div className="font-bold text-slate-900">{activeReport.patientName}</div>
                </div>
                <div>
                  <span className="text-slate-500 text-[10px]">Age / Gender:</span>
                  <div className="font-bold text-slate-900">
                    {activeReport.age} Y / {activeReport.gender}
                  </div>
                </div>
                <div>
                  <span className="text-slate-500 text-[10px]">Report Status:</span>
                  <div className="font-bold text-emerald-700 flex items-center gap-1">
                    <CheckCircle2 className="w-3 h-3" />
                    <span>{activeReport.status}</span>
                  </div>
                </div>

                <div>
                  <span className="text-slate-500 text-[10px]">Collection Time:</span>
                  <div className="text-slate-700 text-[11px]">{activeReport.collectionDate}</div>
                </div>
                <div>
                  <span className="text-slate-500 text-[10px]">Verification Time:</span>
                  <div className="text-slate-700 text-[11px]">{activeReport.reportingDate}</div>
                </div>
                <div className="col-span-2">
                  <span className="text-slate-500 text-[10px]">Test Name:</span>
                  <div className="font-bold text-teal-900 text-[11px]">{activeReport.testName}</div>
                </div>
              </div>

              {/* Parameters Table */}
              <div className="overflow-x-auto">
                <table className="w-full text-xs text-left">
                  <thead className="bg-slate-100 text-slate-700 uppercase text-[10px] tracking-wider font-bold">
                    <tr>
                      <th className="py-2 px-3">Investigation / Parameter</th>
                      <th className="py-2 px-3">Observed Result</th>
                      <th className="py-2 px-3">Reference Range</th>
                      <th className="py-2 px-3">Units</th>
                      <th className="py-2 px-3 text-right">Interpretation</th>
                    </tr>
                  </thead>
                  <tbody className="divide-y divide-slate-200 font-mono">
                    {activeReport.parameters.map((param, index) => (
                      <tr key={index} className="hover:bg-slate-50/70">
                        <td className="py-2 px-3 font-sans font-medium text-slate-900">
                          {param.name}
                        </td>
                        <td className="py-2 px-3 font-bold text-slate-900">
                          {param.result}
                        </td>
                        <td className="py-2 px-3 text-slate-600">{param.normalRange}</td>
                        <td className="py-2 px-3 text-slate-500">{param.unit}</td>
                        <td className="py-2 px-3 text-right">
                          <span
                            className={`px-2 py-0.5 rounded text-[10px] font-sans font-bold ${
                              param.flag === 'Normal'
                                ? 'bg-emerald-100 text-emerald-800'
                                : 'bg-rose-100 text-rose-800'
                            }`}
                          >
                            {param.flag}
                          </span>
                        </td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>

              {/* Pathologist Remarks */}
              <div className="p-3 bg-slate-50 rounded-lg border border-slate-200 text-xs">
                <span className="font-bold text-slate-700">Clinical Interpretation: </span>
                <span className="text-slate-600">{activeReport.clinicalRemarks}</span>
              </div>

              {/* Signatures & Certification */}
              <div className="pt-3 border-t border-slate-200 flex flex-col sm:flex-row items-center justify-between gap-3 text-[11px] text-slate-500">
                <div className="flex items-center gap-1.5 text-teal-800 font-semibold">
                  <ShieldCheck className="w-4 h-4 text-teal-600" />
                  <span>Electronically Verified & Authenticated by LIS GIMS Gambat</span>
                </div>
                <div className="text-right">
                  <div className="font-bold text-slate-800">{activeReport.consultant}</div>
                  <div className="text-[10px] text-slate-400">Department of Pathology & Transfusion</div>
                </div>
              </div>

              {/* Action Buttons */}
              <div className="pt-3 border-t border-slate-200 flex items-center justify-between">
                <div className="text-[10px] text-slate-400">
                  Document Security ID: GIMS-LAB-{activeReport.mrNo}-{activeReport.pin}
                </div>
                <div className="flex gap-2">
                  <button
                    onClick={() => window.print()}
                    className="flex items-center gap-1.5 bg-slate-800 hover:bg-slate-700 text-white text-xs font-bold px-3 py-1.5 rounded-lg transition-colors cursor-pointer"
                  >
                    <Printer className="w-3.5 h-3.5" />
                    <span>Print Report</span>
                  </button>
                  <button
                    onClick={() => {
                      alert('Certified PDF report downloaded to your device.');
                    }}
                    className="flex items-center gap-1.5 bg-teal-700 hover:bg-teal-800 text-white text-xs font-bold px-3 py-1.5 rounded-lg transition-colors cursor-pointer"
                  >
                    <Download className="w-3.5 h-3.5" />
                    <span>Download PDF</span>
                  </button>
                </div>
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};
