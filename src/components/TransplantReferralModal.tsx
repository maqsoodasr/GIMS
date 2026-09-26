import React, { useState } from 'react';
import {
  X,
  Activity,
  ShieldCheck,
  CheckCircle2,
  AlertCircle,
  FileText,
  Send,
  Phone,
  HelpCircle,
} from 'lucide-react';

interface TransplantReferralModalProps {
  isOpen: boolean;
  onClose: () => void;
  preSelectedOrgan?: string;
}

export const TransplantReferralModal: React.FC<TransplantReferralModalProps> = ({
  isOpen,
  onClose,
  preSelectedOrgan,
}) => {
  const [organType, setOrganType] = useState(preSelectedOrgan || 'liver');
  const [patientName, setPatientName] = useState('');
  const [patientAge, setPatientAge] = useState('');
  const [bloodGroup, setBloodGroup] = useState('O+ Positive');
  const [diagnosis, setDiagnosis] = useState('');
  const [meldScore, setMeldScore] = useState('');
  const [donorAvailable, setDonorAvailable] = useState('Yes, 1st Degree Relative (Living Donor)');
  const [contactPerson, setContactPerson] = useState('');
  const [contactPhone, setContactPhone] = useState('');
  const [cityProvince, setCityProvince] = useState('');
  const [submitted, setSubmitted] = useState(false);

  if (!isOpen) return null;

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-3 sm:p-4 bg-slate-950/70 backdrop-blur-xs animate-in fade-in duration-150">
      <div className="bg-white rounded-2xl max-w-2xl w-full max-h-[92vh] overflow-y-auto shadow-2xl border border-slate-200 relative">
        {/* Header */}
        <div className="sticky top-0 bg-slate-900 text-white px-6 py-4 rounded-t-2xl flex items-center justify-between z-10">
          <div className="flex items-center gap-2.5">
            <div className="p-2 bg-amber-600 rounded-lg text-white">
              <Activity className="w-5 h-5" />
            </div>
            <div>
              <h3 className="text-base font-bold text-white font-['Playfair_Display',serif]">
                Organ Transplant Referral & Evaluation Desk
              </h3>
              <p className="text-[11px] text-slate-300">
                100% Free Living Donor Liver, Kidney & Bone Marrow Evaluation
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

        <div className="p-6">
          {submitted ? (
            <div className="space-y-5 text-center py-4">
              <div className="w-14 h-14 bg-emerald-100 rounded-full flex items-center justify-center mx-auto text-emerald-700">
                <CheckCircle2 className="w-8 h-8" />
              </div>

              <div>
                <h4 className="text-lg font-bold text-slate-900">
                  Transplant Dossier Registered Successfully
                </h4>
                <p className="text-xs text-slate-600 max-w-md mx-auto mt-1 leading-relaxed">
                  Your case details have been routed to the Multi-Disciplinary Transplant Committee
                  at GIMS Gambat. A transplant coordinator will contact you within 24 to 48 hours for
                  pre-transplant laboratory and imaging scheduling.
                </p>
              </div>

              <div className="p-4 bg-slate-50 border border-slate-200 rounded-xl text-xs text-left max-w-md mx-auto space-y-2 font-mono">
                <div>
                  <span className="text-slate-500 font-sans">Patient: </span>
                  <span className="font-bold text-slate-900 font-sans">{patientName}</span>
                </div>
                <div>
                  <span className="text-slate-500 font-sans">Referred For: </span>
                  <span className="font-bold text-teal-800 font-sans uppercase">
                    {organType} Transplantation
                  </span>
                </div>
                <div>
                  <span className="text-slate-500 font-sans">Contact Registered: </span>
                  <span className="font-bold text-slate-900 font-sans">{contactPhone}</span>
                </div>
                <div className="pt-2 border-t border-slate-200 text-teal-700 font-sans font-bold">
                  Cost to Patient: Rs. 0/- (100% Free Government of Sindh Welfare Care)
                </div>
              </div>

              <div className="flex justify-center gap-3 pt-2">
                <button
                  onClick={() => {
                    setSubmitted(false);
                    onClose();
                  }}
                  className="bg-teal-700 hover:bg-teal-800 text-white text-xs font-bold px-6 py-2.5 rounded-lg transition-colors cursor-pointer"
                >
                  Close & Return
                </button>
              </div>
            </div>
          ) : (
            <form onSubmit={handleSubmit} className="space-y-4">
              <div className="bg-amber-50 border border-amber-200 rounded-xl p-3 text-xs text-amber-900 flex items-start gap-2.5">
                <ShieldCheck className="w-5 h-5 text-amber-700 shrink-0 mt-0.5" />
                <div>
                  <div className="font-bold">Government-Sponsored Free Organ Transplantation</div>
                  <div className="text-[11px] text-amber-800 mt-0.5">
                    All surgeries, donor workups, immunosuppressants, and post-operative ICU care are
                    funded 100% free for eligible Pakistani citizens.
                  </div>
                </div>
              </div>

              <div className="grid sm:grid-cols-2 gap-4">
                <div>
                  <label className="block text-xs font-bold text-slate-700 mb-1">
                    Select Organ Program *
                  </label>
                  <select
                    value={organType}
                    onChange={(e) => setOrganType(e.target.value)}
                    className="w-full text-xs bg-slate-50 border border-slate-300 rounded-lg p-2.5 focus:outline-hidden focus:border-teal-500 font-semibold"
                  >
                    <option value="liver">Liver Transplant (Adult / Pediatric LDLT)</option>
                    <option value="kidney">Kidney (Renal) Transplant</option>
                    <option value="bone-marrow">Bone Marrow Transplant (BMT / Thalassemia)</option>
                    <option value="cornea">Cornea Transplant (Eye Banking)</option>
                    <option value="cochlear">Cochlear Implant (Auditory Restoration)</option>
                  </select>
                </div>

                <div>
                  <label className="block text-xs font-bold text-slate-700 mb-1">
                    Patient Blood Group *
                  </label>
                  <select
                    value={bloodGroup}
                    onChange={(e) => setBloodGroup(e.target.value)}
                    className="w-full text-xs bg-slate-50 border border-slate-300 rounded-lg p-2.5 focus:outline-hidden focus:border-teal-500"
                  >
                    <option value="A+ Positive">A+ Positive</option>
                    <option value="A- Negative">A- Negative</option>
                    <option value="B+ Positive">B+ Positive</option>
                    <option value="B- Negative">B- Negative</option>
                    <option value="AB+ Positive">AB+ Positive</option>
                    <option value="AB- Negative">AB- Negative</option>
                    <option value="O+ Positive">O+ Positive</option>
                    <option value="O- Negative">O- Negative</option>
                  </select>
                </div>
              </div>

              <div className="grid sm:grid-cols-3 gap-3">
                <div className="sm:col-span-2">
                  <label className="block text-xs font-medium text-slate-700 mb-1">
                    Patient Full Name *
                  </label>
                  <input
                    type="text"
                    required
                    placeholder="Patient's legal name"
                    value={patientName}
                    onChange={(e) => setPatientName(e.target.value)}
                    className="w-full text-xs bg-white border border-slate-300 rounded-lg p-2.5 focus:outline-hidden focus:border-teal-500"
                  />
                </div>
                <div>
                  <label className="block text-xs font-medium text-slate-700 mb-1">
                    Age *
                  </label>
                  <input
                    type="number"
                    required
                    placeholder="Age"
                    value={patientAge}
                    onChange={(e) => setPatientAge(e.target.value)}
                    className="w-full text-xs bg-white border border-slate-300 rounded-lg p-2.5 focus:outline-hidden focus:border-teal-500"
                  />
                </div>
              </div>

              <div className="grid sm:grid-cols-2 gap-3">
                <div>
                  <label className="block text-xs font-medium text-slate-700 mb-1">
                    Primary Clinical Diagnosis
                  </label>
                  <input
                    type="text"
                    placeholder="e.g., HCV Cirrhosis / End Stage Renal Disease"
                    value={diagnosis}
                    onChange={(e) => setDiagnosis(e.target.value)}
                    className="w-full text-xs bg-white border border-slate-300 rounded-lg p-2.5 focus:outline-hidden focus:border-teal-500"
                  />
                </div>

                <div>
                  <label className="block text-xs font-medium text-slate-700 mb-1">
                    MELD Score or Serum Creatinine (If known)
                  </label>
                  <input
                    type="text"
                    placeholder="e.g., MELD 18 or Creatinine 7.2"
                    value={meldScore}
                    onChange={(e) => setMeldScore(e.target.value)}
                    className="w-full text-xs bg-white border border-slate-300 rounded-lg p-2.5 focus:outline-hidden focus:border-teal-500"
                  />
                </div>
              </div>

              <div>
                <label className="block text-xs font-medium text-slate-700 mb-1">
                  Living Related Donor Availability *
                </label>
                <select
                  value={donorAvailable}
                  onChange={(e) => setDonorAvailable(e.target.value)}
                  className="w-full text-xs bg-white border border-slate-300 rounded-lg p-2.5 focus:outline-hidden focus:border-teal-500"
                >
                  <option value="Yes, 1st Degree Relative (Living Donor)">
                    Yes - 1st Degree Relative Ready (Sibling, Parent, Offspring, Spouse)
                  </option>
                  <option value="Evaluation in progress / Seeking compatibility">
                    Evaluation in progress / Potential Donor Available
                  </option>
                  <option value="Need Guidance on Donor Criteria">
                    Need Guidance on Donor Eligibility Requirements
                  </option>
                </select>
              </div>

              <div className="grid sm:grid-cols-3 gap-3">
                <div>
                  <label className="block text-xs font-medium text-slate-700 mb-1">
                    Contact Person Name *
                  </label>
                  <input
                    type="text"
                    required
                    placeholder="Attendant / Guardian"
                    value={contactPerson}
                    onChange={(e) => setContactPerson(e.target.value)}
                    className="w-full text-xs bg-white border border-slate-300 rounded-lg p-2.5 focus:outline-hidden focus:border-teal-500"
                  />
                </div>
                <div>
                  <label className="block text-xs font-medium text-slate-700 mb-1">
                    Mobile Phone *
                  </label>
                  <input
                    type="tel"
                    required
                    placeholder="0300-XXXXXXX"
                    value={contactPhone}
                    onChange={(e) => setContactPhone(e.target.value)}
                    className="w-full text-xs bg-white border border-slate-300 rounded-lg p-2.5 focus:outline-hidden focus:border-teal-500"
                  />
                </div>
                <div>
                  <label className="block text-xs font-medium text-slate-700 mb-1">
                    City & Province *
                  </label>
                  <input
                    type="text"
                    required
                    placeholder="e.g. Sukkur, Sindh"
                    value={cityProvince}
                    onChange={(e) => setCityProvince(e.target.value)}
                    className="w-full text-xs bg-white border border-slate-300 rounded-lg p-2.5 focus:outline-hidden focus:border-teal-500"
                  />
                </div>
              </div>

              <div className="pt-3 border-t border-slate-200 flex justify-end gap-3">
                <button
                  type="button"
                  onClick={onClose}
                  className="px-4 py-2 text-xs font-bold text-slate-600 hover:bg-slate-100 rounded-lg cursor-pointer"
                >
                  Cancel
                </button>
                <button
                  type="submit"
                  className="bg-teal-700 hover:bg-teal-800 text-white text-xs font-bold px-6 py-2.5 rounded-lg shadow-sm hover:shadow transition-colors flex items-center gap-1.5 cursor-pointer"
                >
                  <Send className="w-3.5 h-3.5" />
                  <span>Submit for Multi-Disciplinary Review</span>
                </button>
              </div>
            </form>
          )}
        </div>
      </div>
    </div>
  );
};
