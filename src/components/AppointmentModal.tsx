import React, { useState, useEffect } from 'react';
import {
  X,
  Calendar,
  Clock,
  User,
  Phone,
  FileText,
  CheckCircle2,
  Printer,
  ShieldCheck,
  Building,
  AlertCircle,
} from 'lucide-react';
import { DEPARTMENTS_DATA, DOCTORS_DATA, INSTITUTION_INFO } from '../data/mockData';
import { AppointmentRecord } from '../types';

interface AppointmentModalProps {
  isOpen: boolean;
  onClose: () => void;
  preSelectedDeptId?: string;
  preSelectedDoctorId?: string;
}

export const AppointmentModal: React.FC<AppointmentModalProps> = ({
  isOpen,
  onClose,
  preSelectedDeptId,
  preSelectedDoctorId,
}) => {
  const [selectedDeptId, setSelectedDeptId] = useState(preSelectedDeptId || DEPARTMENTS_DATA[0].id);
  const [selectedDoctorId, setSelectedDoctorId] = useState(preSelectedDoctorId || '');
  const [patientName, setPatientName] = useState('');
  const [guardianName, setGuardianName] = useState('');
  const [cnic, setCnic] = useState('');
  const [phone, setPhone] = useState('');
  const [email, setEmail] = useState('');
  const [age, setAge] = useState('');
  const [gender, setGender] = useState('Male');
  const [appointmentDate, setAppointmentDate] = useState('');
  const [timeSlot, setTimeSlot] = useState('09:30 AM - 10:30 AM');
  const [reason, setReason] = useState('');
  const [confirmedBooking, setConfirmedBooking] = useState<AppointmentRecord | null>(null);
  const [formError, setFormError] = useState('');

  // Sync props when modal opens
  useEffect(() => {
    if (preSelectedDeptId) {
      setSelectedDeptId(preSelectedDeptId);
    }
    if (preSelectedDoctorId) {
      setSelectedDoctorId(preSelectedDoctorId);
    }
    // Default tomorrow's date
    const tomorrow = new Date();
    tomorrow.setDate(tomorrow.getDate() + 1);
    const dateStr = tomorrow.toISOString().split('T')[0];
    setAppointmentDate(dateStr);
  }, [preSelectedDeptId, preSelectedDoctorId, isOpen]);

  if (!isOpen) return null;

  const availableDoctors = DOCTORS_DATA.filter(
    (doc) => doc.departmentId === selectedDeptId
  );

  const currentDept = DEPARTMENTS_DATA.find((d) => d.id === selectedDeptId);
  const currentDoctor = DOCTORS_DATA.find((d) => d.id === selectedDoctorId);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!patientName.trim()) {
      setFormError('Please enter the patient’s full name.');
      return;
    }
    if (!phone.trim()) {
      setFormError('Please enter a valid contact telephone number.');
      return;
    }

    setFormError('');

    const tokenNum = `GIMS-OPD-${Math.floor(1000 + Math.random() * 9000)}`;
    const mockMr = `MR-2026-${Math.floor(5000 + Math.random() * 4999)}`;
    const room = currentDoctor?.roomNo || 'OPD Central Triage Block C';

    const newBooking: AppointmentRecord = {
      id: tokenNum,
      tokenNumber: tokenNum,
      mrNo: mockMr,
      patientName,
      guardianName,
      age: age || '32',
      gender,
      phone,
      email: email || 'patient@gims-record.pk',
      cnic: cnic || '45202-*******-1',
      departmentId: selectedDeptId,
      departmentName: currentDept?.name || 'General OPD',
      doctorName: currentDoctor?.name || 'Duty Senior Registrar',
      date: appointmentDate,
      timeSlot,
      roomNo: room,
      status: 'Confirmed',
      createdAt: new Date().toLocaleString(),
    };

    setConfirmedBooking(newBooking);
  };

  const resetForm = () => {
    setConfirmedBooking(null);
    setPatientName('');
    setGuardianName('');
    setPhone('');
    setCnic('');
    setReason('');
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-3 sm:p-4 bg-slate-950/70 backdrop-blur-xs animate-in fade-in duration-150">
      <div className="bg-white rounded-2xl max-w-2xl w-full max-h-[92vh] overflow-y-auto shadow-2xl border border-slate-200 relative">
        {/* Modal Header */}
        <div className="sticky top-0 bg-slate-900 text-white px-6 py-4 rounded-t-2xl flex items-center justify-between z-10">
          <div className="flex items-center gap-2.5">
            <div className="p-2 bg-teal-800 rounded-lg text-teal-300">
              <Calendar className="w-5 h-5" />
            </div>
            <div>
              <h3 className="text-base font-bold text-white font-['Playfair_Display',serif]">
                OPD Appointment & Consultation Booking
              </h3>
              <p className="text-[11px] text-slate-300">
                GIMS Free Outpatient Department • 08:30 AM to 02:30 PM
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
          {confirmedBooking ? (
            /* Booking Confirmation / Printable Token Slip */
            <div className="space-y-6">
              <div className="text-center bg-emerald-50 border border-emerald-200 rounded-xl p-4">
                <CheckCircle2 className="w-10 h-10 text-emerald-600 mx-auto mb-2" />
                <h4 className="text-lg font-bold text-emerald-900">
                  OPD Appointment Confirmed!
                </h4>
                <p className="text-xs text-emerald-700 mt-1">
                  Your electronic appointment token has been issued. Free OPD service sponsored by
                  Sindh Government.
                </p>
              </div>

              {/* Verified Slip Representation */}
              <div
                id="printable-opd-slip"
                className="bg-white rounded-xl border-2 border-dashed border-slate-300 p-5 space-y-4 text-xs font-mono text-slate-800"
              >
                <div className="text-center pb-3 border-b border-slate-200">
                  <div className="text-sm font-black tracking-wider text-slate-900 font-sans">
                    PIR ABDUL QADIR SHAH JEELANI INSTITUTE OF MEDICAL SCIENCES
                  </div>
                  <div className="text-[10px] text-slate-500 font-sans">
                    Gambat, District Khairpur, Sindh • Tel: {INSTITUTION_INFO.emergencyPhone}
                  </div>
                  <div className="mt-2 inline-block bg-teal-100 text-teal-900 px-3 py-1 rounded-full font-bold text-xs font-sans">
                    OUTPATIENT CONSULTATION SLIP (TOKEN)
                  </div>
                </div>

                <div className="grid grid-cols-2 gap-3 text-xs">
                  <div>
                    <span className="text-slate-500">Token Number:</span>
                    <div className="text-base font-black text-teal-800">
                      {confirmedBooking.tokenNumber}
                    </div>
                  </div>
                  <div>
                    <span className="text-slate-500">Medical Record No (MR#):</span>
                    <div className="font-bold text-slate-900">{confirmedBooking.mrNo}</div>
                  </div>

                  <div>
                    <span className="text-slate-500">Patient Name:</span>
                    <div className="font-bold text-slate-900">
                      {confirmedBooking.patientName} ({confirmedBooking.gender}, {confirmedBooking.age} yrs)
                    </div>
                  </div>
                  <div>
                    <span className="text-slate-500">Phone:</span>
                    <div className="font-bold text-slate-900">{confirmedBooking.phone}</div>
                  </div>

                  <div>
                    <span className="text-slate-500">Department:</span>
                    <div className="font-bold text-slate-900">
                      {confirmedBooking.departmentName}
                    </div>
                  </div>
                  <div>
                    <span className="text-slate-500">Consultant:</span>
                    <div className="font-bold text-slate-900">
                      {confirmedBooking.doctorName}
                    </div>
                  </div>

                  <div>
                    <span className="text-slate-500">Consultation Date:</span>
                    <div className="font-bold text-slate-900">{confirmedBooking.date}</div>
                  </div>
                  <div>
                    <span className="text-slate-500">Time Window:</span>
                    <div className="font-bold text-teal-700">{confirmedBooking.timeSlot}</div>
                  </div>

                  <div className="col-span-2 bg-slate-50 p-2 rounded border border-slate-200">
                    <span className="text-slate-500">Allocated Room / Clinic:</span>
                    <div className="font-bold text-slate-900">{confirmedBooking.roomNo}</div>
                  </div>
                </div>

                {/* Simulated Barcode */}
                <div className="pt-3 border-t border-slate-200 text-center flex flex-col items-center">
                  <div className="tracking-[4px] font-black text-sm text-slate-800 select-none">
                    ||||| || |||||| | ||||| ||| ||||||| ||| |||
                  </div>
                  <div className="text-[10px] text-slate-400 mt-1 font-sans">
                    Issued: {confirmedBooking.createdAt} • Fee: Rs. 0/- (100% Free)
                  </div>
                </div>
              </div>

              {/* Instructions */}
              <div className="bg-amber-50 border border-amber-200 rounded-lg p-3 text-xs text-amber-900 space-y-1">
                <div className="font-bold flex items-center gap-1">
                  <AlertCircle className="w-3.5 h-3.5" />
                  <span>Important Patient Guidance:</span>
                </div>
                <p>
                  1. Please present this token at the OPD Reception Desk 15 minutes before your time slot.
                </p>
                <p>
                  2. Bring original CNIC/B-Form and any previous medical records or diagnostic films.
                </p>
                <p>3. All consultations, baseline lab tests, and prescribed medicines are completely free.</p>
              </div>

              {/* Bottom Actions */}
              <div className="flex flex-wrap items-center justify-between gap-3 pt-2">
                <button
                  onClick={resetForm}
                  className="text-xs font-semibold text-slate-600 hover:text-slate-900 cursor-pointer"
                >
                  Book Another Appointment
                </button>

                <div className="flex gap-2">
                  <button
                    onClick={() => window.print()}
                    className="flex items-center gap-1.5 bg-slate-800 hover:bg-slate-700 text-white text-xs font-bold px-4 py-2 rounded-lg transition-colors cursor-pointer"
                  >
                    <Printer className="w-4 h-4" />
                    <span>Print Token Slip</span>
                  </button>
                  <button
                    onClick={onClose}
                    className="bg-teal-700 hover:bg-teal-800 text-white text-xs font-bold px-5 py-2 rounded-lg transition-colors cursor-pointer"
                  >
                    Done
                  </button>
                </div>
              </div>
            </div>
          ) : (
            /* Booking Form */
            <form onSubmit={handleSubmit} className="space-y-4">
              {formError && (
                <div className="bg-rose-50 border border-rose-200 text-rose-700 p-2.5 rounded-lg text-xs font-medium flex items-center gap-2">
                  <AlertCircle className="w-4 h-4 shrink-0" />
                  <span>{formError}</span>
                </div>
              )}

              <div className="grid sm:grid-cols-2 gap-4">
                {/* Department Selection */}
                <div>
                  <label className="block text-xs font-bold text-slate-700 mb-1">
                    Select Clinical Department *
                  </label>
                  <select
                    value={selectedDeptId}
                    onChange={(e) => {
                      setSelectedDeptId(e.target.value);
                      setSelectedDoctorId('');
                    }}
                    className="w-full text-xs bg-white border border-slate-300 rounded-lg p-2.5 focus:border-teal-500 focus:outline-hidden"
                  >
                    {DEPARTMENTS_DATA.map((dept) => (
                      <option key={dept.id} value={dept.id}>
                        {dept.name}
                      </option>
                    ))}
                  </select>
                </div>

                {/* Doctor Selection */}
                <div>
                  <label className="block text-xs font-bold text-slate-700 mb-1">
                    Consultant Physician / Surgeon
                  </label>
                  <select
                    value={selectedDoctorId}
                    onChange={(e) => setSelectedDoctorId(e.target.value)}
                    className="w-full text-xs bg-white border border-slate-300 rounded-lg p-2.5 focus:border-teal-500 focus:outline-hidden"
                  >
                    <option value="">Any Available Senior Specialist (Recommended)</option>
                    {availableDoctors.map((doc) => (
                      <option key={doc.id} value={doc.id}>
                        {doc.name} - {doc.specialization}
                      </option>
                    ))}
                  </select>
                </div>
              </div>

              {/* Date & Time */}
              <div className="grid sm:grid-cols-2 gap-4">
                <div>
                  <label className="block text-xs font-bold text-slate-700 mb-1">
                    Preferred Date *
                  </label>
                  <input
                    type="date"
                    required
                    value={appointmentDate}
                    onChange={(e) => setAppointmentDate(e.target.value)}
                    className="w-full text-xs bg-white border border-slate-300 rounded-lg p-2.5 focus:border-teal-500 focus:outline-hidden"
                  />
                </div>

                <div>
                  <label className="block text-xs font-bold text-slate-700 mb-1">
                    Preferred OPD Time Slot
                  </label>
                  <select
                    value={timeSlot}
                    onChange={(e) => setTimeSlot(e.target.value)}
                    className="w-full text-xs bg-white border border-slate-300 rounded-lg p-2.5 focus:border-teal-500 focus:outline-hidden"
                  >
                    <option value="08:30 AM - 09:30 AM">08:30 AM - 09:30 AM (Early Morning)</option>
                    <option value="09:30 AM - 10:30 AM">09:30 AM - 10:30 AM (Regular)</option>
                    <option value="10:30 AM - 11:30 AM">10:30 AM - 11:30 AM (Mid-day)</option>
                    <option value="11:30 AM - 12:30 PM">11:30 AM - 12:30 PM (Mid-day)</option>
                    <option value="12:30 PM - 02:00 PM">12:30 PM - 02:00 PM (Afternoon)</option>
                  </select>
                </div>
              </div>

              {/* Patient Information */}
              <div className="pt-2 border-t border-slate-100">
                <h4 className="text-xs font-bold uppercase tracking-wider text-slate-500 mb-3">
                  Patient Demographics
                </h4>

                <div className="grid sm:grid-cols-2 gap-3">
                  <div>
                    <label className="block text-xs font-medium text-slate-700 mb-1">
                      Patient Full Name *
                    </label>
                    <input
                      type="text"
                      required
                      placeholder="e.g., Muhammad Ali"
                      value={patientName}
                      onChange={(e) => setPatientName(e.target.value)}
                      className="w-full text-xs bg-white border border-slate-300 rounded-lg p-2.5 focus:border-teal-500 focus:outline-hidden"
                    />
                  </div>

                  <div>
                    <label className="block text-xs font-medium text-slate-700 mb-1">
                      Father / Guardian Name
                    </label>
                    <input
                      type="text"
                      placeholder="e.g., Ghulam Rasool"
                      value={guardianName}
                      onChange={(e) => setGuardianName(e.target.value)}
                      className="w-full text-xs bg-white border border-slate-300 rounded-lg p-2.5 focus:border-teal-500 focus:outline-hidden"
                    />
                  </div>

                  <div>
                    <label className="block text-xs font-medium text-slate-700 mb-1">
                      Contact Mobile Number *
                    </label>
                    <input
                      type="tel"
                      required
                      placeholder="e.g., 0300-1234567"
                      value={phone}
                      onChange={(e) => setPhone(e.target.value)}
                      className="w-full text-xs bg-white border border-slate-300 rounded-lg p-2.5 focus:border-teal-500 focus:outline-hidden"
                    />
                  </div>

                  <div>
                    <label className="block text-xs font-medium text-slate-700 mb-1">
                      CNIC or B-Form Number
                    </label>
                    <input
                      type="text"
                      placeholder="e.g., 45202-1234567-1"
                      value={cnic}
                      onChange={(e) => setCnic(e.target.value)}
                      className="w-full text-xs bg-white border border-slate-300 rounded-lg p-2.5 focus:border-teal-500 focus:outline-hidden"
                    />
                  </div>

                  <div className="grid grid-cols-2 gap-2">
                    <div>
                      <label className="block text-xs font-medium text-slate-700 mb-1">
                        Age (Years)
                      </label>
                      <input
                        type="number"
                        placeholder="Age"
                        value={age}
                        onChange={(e) => setAge(e.target.value)}
                        className="w-full text-xs bg-white border border-slate-300 rounded-lg p-2.5 focus:border-teal-500 focus:outline-hidden"
                      />
                    </div>
                    <div>
                      <label className="block text-xs font-medium text-slate-700 mb-1">
                        Gender
                      </label>
                      <select
                        value={gender}
                        onChange={(e) => setGender(e.target.value)}
                        className="w-full text-xs bg-white border border-slate-300 rounded-lg p-2.5 focus:border-teal-500 focus:outline-hidden"
                      >
                        <option value="Male">Male</option>
                        <option value="Female">Female</option>
                        <option value="Other">Other</option>
                      </select>
                    </div>
                  </div>

                  <div>
                    <label className="block text-xs font-medium text-slate-700 mb-1">
                      Email (Optional)
                    </label>
                    <input
                      type="email"
                      placeholder="e.g., name@gmail.com"
                      value={email}
                      onChange={(e) => setEmail(e.target.value)}
                      className="w-full text-xs bg-white border border-slate-300 rounded-lg p-2.5 focus:border-teal-500 focus:outline-hidden"
                    />
                  </div>
                </div>

                <div className="mt-3">
                  <label className="block text-xs font-medium text-slate-700 mb-1">
                    Symptoms or Clinical Complaints
                  </label>
                  <textarea
                    rows={2}
                    placeholder="Briefly state symptoms, duration, or previous diagnosis..."
                    value={reason}
                    onChange={(e) => setReason(e.target.value)}
                    className="w-full text-xs bg-white border border-slate-300 rounded-lg p-2.5 focus:border-teal-500 focus:outline-hidden"
                  />
                </div>
              </div>

              <div className="bg-teal-50 border border-teal-200 rounded-lg p-3 text-xs text-teal-900 flex items-center justify-between">
                <div className="flex items-center gap-2">
                  <ShieldCheck className="w-4 h-4 text-teal-700 shrink-0" />
                  <span>Consultation Fee: <strong>Rs. 0 (100% Free Public Service)</strong></span>
                </div>
                <span className="text-[11px] font-semibold text-teal-700">Govt. of Sindh</span>
              </div>

              {/* Submit Button */}
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
                  className="bg-teal-700 hover:bg-teal-800 text-white text-xs font-bold px-6 py-2.5 rounded-lg shadow-sm hover:shadow transition-colors cursor-pointer"
                >
                  Generate OPD Token
                </button>
              </div>
            </form>
          )}
        </div>
      </div>
    </div>
  );
};
