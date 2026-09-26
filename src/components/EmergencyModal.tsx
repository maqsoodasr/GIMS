import React from 'react';
import {
  X,
  Phone,
  AlertTriangle,
  Ambulance,
  Heart,
  Droplet,
  MapPin,
  Clock,
  ShieldAlert,
} from 'lucide-react';
import { INSTITUTION_INFO } from '../data/mockData';

interface EmergencyModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export const EmergencyModal: React.FC<EmergencyModalProps> = ({ isOpen, onClose }) => {
  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-3 sm:p-4 bg-slate-950/75 backdrop-blur-xs animate-in fade-in duration-150">
      <div className="bg-white rounded-2xl max-w-xl w-full max-h-[92vh] overflow-y-auto shadow-2xl border border-rose-200 relative">
        {/* Header */}
        <div className="bg-rose-700 text-white px-6 py-4 rounded-t-2xl flex items-center justify-between">
          <div className="flex items-center gap-2.5">
            <div className="p-2 bg-rose-800 rounded-lg text-white">
              <AlertTriangle className="w-5 h-5 animate-pulse" />
            </div>
            <div>
              <h3 className="text-base font-bold text-white font-['Playfair_Display',serif]">
                24/7 Emergency & Level-1 Trauma Dispatch
              </h3>
              <p className="text-[11px] text-rose-100">
                Immediate Critical Resuscitation, Ambulance & Blood Bank
              </p>
            </div>
          </div>
          <button
            onClick={onClose}
            className="p-1.5 rounded-lg text-rose-200 hover:text-white hover:bg-rose-800 transition-colors cursor-pointer"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        <div className="p-6 space-y-5">
          {/* Emergency Hotlines */}
          <div className="grid sm:grid-cols-2 gap-3">
            <a
              href={`tel:${INSTITUTION_INFO.emergencyPhone.replace(/[^0-9]/g, '')}`}
              className="bg-rose-50 hover:bg-rose-100 border border-rose-200 rounded-xl p-4 flex flex-col justify-between transition-colors group"
            >
              <div>
                <span className="text-[10px] font-bold uppercase tracking-wider text-rose-700">
                  Direct Trauma Emergency
                </span>
                <div className="text-lg font-black text-rose-900 mt-1">
                  {INSTITUTION_INFO.emergencyPhone}
                </div>
              </div>
              <div className="mt-3 text-xs font-bold text-rose-700 flex items-center gap-1 group-hover:underline">
                <Phone className="w-3.5 h-3.5" />
                <span>Tap to Call Emergency Room</span>
              </div>
            </a>

            <a
              href="tel:1122"
              className="bg-amber-50 hover:bg-amber-100 border border-amber-200 rounded-xl p-4 flex flex-col justify-between transition-colors group"
            >
              <div>
                <span className="text-[10px] font-bold uppercase tracking-wider text-amber-800">
                  Ambulance Dispatch
                </span>
                <div className="text-lg font-black text-amber-950 mt-1">
                  Dial 1122 / (0243)-640160
                </div>
              </div>
              <div className="mt-3 text-xs font-bold text-amber-800 flex items-center gap-1 group-hover:underline">
                <Ambulance className="w-3.5 h-3.5" />
                <span>ACLS Emergency Fleet</span>
              </div>
            </a>
          </div>

          {/* Blood Bank & Critical Units */}
          <div className="space-y-2.5">
            <h4 className="text-xs font-bold uppercase tracking-wider text-slate-500">
              Immediate Critical Services Available 24/7
            </h4>

            <div className="p-3 bg-slate-50 rounded-xl border border-slate-200 flex items-start gap-3">
              <Droplet className="w-5 h-5 text-rose-600 shrink-0 mt-0.5" />
              <div>
                <div className="text-xs font-bold text-slate-900">
                  24/7 Component Blood Bank
                </div>
                <div className="text-[11px] text-slate-600">
                  Immediate cross-match and issue of Packed Red Blood Cells (PRBC), Fresh Frozen
                  Plasma (FFP), and Single Donor Platelets (SDP).
                </div>
              </div>
            </div>

            <div className="p-3 bg-slate-50 rounded-xl border border-slate-200 flex items-start gap-3">
              <ShieldAlert className="w-5 h-5 text-amber-600 shrink-0 mt-0.5" />
              <div>
                <div className="text-xs font-bold text-slate-900">
                  Snakebite Anti-Venom & Dog Bite Rabies Clinic
                </div>
                <div className="text-[11px] text-slate-600">
                  Free Anti-Snake Venom (ASV) and modern tissue-culture Anti-Rabies Vaccine (ARV) with
                  dedicated observation beds.
                </div>
              </div>
            </div>

            <div className="p-3 bg-slate-50 rounded-xl border border-slate-200 flex items-start gap-3">
              <Heart className="w-5 h-5 text-rose-600 shrink-0 mt-0.5" />
              <div>
                <div className="text-xs font-bold text-slate-900">
                  Emergency Cath Lab & Primary PCI
                </div>
                <div className="text-[11px] text-slate-600">
                  Immediate 24/7 coronary angiography & primary stenting for acute heart attack
                  (STEMI) patients.
                </div>
              </div>
            </div>
          </div>

          {/* Location & Directions */}
          <div className="p-3.5 bg-slate-100 rounded-xl text-xs text-slate-700 flex items-start gap-2.5">
            <MapPin className="w-4 h-4 text-slate-600 shrink-0 mt-0.5" />
            <div>
              <div className="font-bold text-slate-900">Emergency Entrance Gate:</div>
              <div>
                Main Hospital Campus, Gambat Station Road, Taluka Gambat, District Khairpur, Sindh.
              </div>
              <div className="text-slate-500 text-[10px] mt-0.5">
                Direct approach from N-5 National Highway Gambat bypass.
              </div>
            </div>
          </div>

          <div className="pt-2 flex justify-end">
            <button
              onClick={onClose}
              className="bg-slate-900 hover:bg-slate-800 text-white text-xs font-bold px-5 py-2.5 rounded-lg transition-colors cursor-pointer"
            >
              Close Window
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};
