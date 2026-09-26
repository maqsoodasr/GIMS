import React, { useState } from 'react';
import { TopBar } from './components/TopBar';
import { Header } from './components/Header';
import { Hero } from './components/Hero';
import { QuickActionCards } from './components/QuickActionCards';
import { TransplantShowcase } from './components/TransplantShowcase';
import { DepartmentGrid } from './components/DepartmentGrid';
import { AcademicsSection } from './components/AcademicsSection';
import { LeadershipSection } from './components/LeadershipSection';
import { PatientCareGuide } from './components/PatientCareGuide';
import { NewsSection } from './components/NewsSection';
import { Footer } from './components/Footer';

import { AppointmentModal } from './components/AppointmentModal';
import { LabReportModal } from './components/LabReportModal';
import { DoctorSearchModal } from './components/DoctorSearchModal';
import { TransplantReferralModal } from './components/TransplantReferralModal';
import { EmergencyModal } from './components/EmergencyModal';

export default function App() {
  // Modal states
  const [appointmentModalOpen, setAppointmentModalOpen] = useState(false);
  const [selectedDeptForAppointment, setSelectedDeptForAppointment] = useState<string | undefined>(undefined);
  const [selectedDoctorForAppointment, setSelectedDoctorForAppointment] = useState<string | undefined>(undefined);

  const [labReportsModalOpen, setLabReportsModalOpen] = useState(false);
  const [doctorSearchModalOpen, setDoctorSearchModalOpen] = useState(false);
  const [doctorSearchQuery, setDoctorSearchQuery] = useState('');
  const [transplantDeskModalOpen, setTransplantDeskModalOpen] = useState(false);
  const [selectedOrganForTransplant, setSelectedOrganForTransplant] = useState<string | undefined>(undefined);
  const [emergencyModalOpen, setEmergencyModalOpen] = useState(false);

  // Smooth navigation handler
  const handleNavigateSection = (sectionId: string) => {
    const el = document.getElementById(sectionId);
    if (el) {
      el.scrollIntoView({ behavior: 'smooth' });
    }
  };

  // Triggers for Appointment Booking
  const handleOpenAppointment = (deptId?: string, doctorId?: string) => {
    setSelectedDeptForAppointment(deptId);
    setSelectedDoctorForAppointment(doctorId);
    setAppointmentModalOpen(true);
  };

  // Triggers for Doctor Search
  const handleOpenDoctorSearch = (query?: string) => {
    setDoctorSearchQuery(query || '');
    setDoctorSearchModalOpen(true);
  };

  // Triggers for Transplant Referral
  const handleOpenTransplantDesk = (organId?: string) => {
    setSelectedOrganForTransplant(organId);
    setTransplantDeskModalOpen(true);
  };

  // From Doctor Search to Booking
  const handleSelectDoctorToBook = (deptId: string, doctorId: string) => {
    setDoctorSearchModalOpen(false);
    handleOpenAppointment(deptId, doctorId);
  };

  return (
    <div className="min-h-screen flex flex-col bg-slate-50 text-slate-900 selection:bg-teal-600 selection:text-white">
      {/* 1. Global Top Notification & Emergency Line */}
      <TopBar
        onOpenEmergency={() => setEmergencyModalOpen(true)}
        onOpenLabReports={() => setLabReportsModalOpen(true)}
        onOpenAppointment={() => handleOpenAppointment()}
        onOpenTransplantDesk={() => handleOpenTransplantDesk()}
      />

      {/* 2. Institutional Header & Main Navigation */}
      <Header
        onOpenAppointment={() => handleOpenAppointment()}
        onOpenDoctorSearch={() => handleOpenDoctorSearch()}
        onOpenLabReports={() => setLabReportsModalOpen(true)}
        onOpenEmergency={() => setEmergencyModalOpen(true)}
        onOpenTransplantDesk={() => handleOpenTransplantDesk()}
        onNavigateSection={handleNavigateSection}
      />

      {/* 3. Hero Showcase with Live Search & Statistics */}
      <main className="flex-1">
        <Hero
          onOpenAppointment={() => handleOpenAppointment()}
          onOpenDoctorSearch={handleOpenDoctorSearch}
          onOpenLabReports={() => setLabReportsModalOpen(true)}
          onOpenTransplantDesk={() => handleOpenTransplantDesk()}
          onOpenEmergency={() => setEmergencyModalOpen(true)}
          onNavigateSection={handleNavigateSection}
        />

        {/* 4. Quick Action Cards (OPD, Labs, Transplants, Doctors, GMC) */}
        <QuickActionCards
          onOpenAppointment={() => handleOpenAppointment()}
          onOpenLabReports={() => setLabReportsModalOpen(true)}
          onOpenTransplantDesk={() => handleOpenTransplantDesk()}
          onOpenDoctorSearch={() => handleOpenDoctorSearch()}
          onOpenEmergency={() => setEmergencyModalOpen(true)}
          onNavigateSection={handleNavigateSection}
        />

        {/* 5. Centers of Excellence: 5 Major Organ & Tissue Transplants */}
        <TransplantShowcase
          onOpenTransplantDesk={handleOpenTransplantDesk}
          onOpenAppointment={() => handleOpenAppointment()}
        />

        {/* 6. Comprehensive Clinical & Surgical Departments */}
        <DepartmentGrid
          onOpenAppointment={handleOpenAppointment}
          onOpenDoctorSearch={() => handleOpenDoctorSearch()}
        />

        {/* 7. Gambat Medical College & Academics with MDCAT Aggregate Calculator */}
        <AcademicsSection />

        {/* 8. Institutional Vision & Founder Director Prof. Dr. Rahim Bux Bhatti */}
        <LeadershipSection />

        {/* 9. Patient Care Guide, Free Attendant Lodge & Rights Charter */}
        <PatientCareGuide />

        {/* 10. News, Press Releases, CME Workshops & Tenders */}
        <NewsSection />
      </main>

      {/* 11. Institutional Footer */}
      <Footer
        onOpenAppointment={() => handleOpenAppointment()}
        onOpenLabReports={() => setLabReportsModalOpen(true)}
        onOpenTransplantDesk={() => handleOpenTransplantDesk()}
        onOpenEmergency={() => setEmergencyModalOpen(true)}
        onNavigateSection={handleNavigateSection}
      />

      {/* Interactive Modals */}
      <AppointmentModal
        isOpen={appointmentModalOpen}
        onClose={() => setAppointmentModalOpen(false)}
        preSelectedDeptId={selectedDeptForAppointment}
        preSelectedDoctorId={selectedDoctorForAppointment}
      />

      <LabReportModal
        isOpen={labReportsModalOpen}
        onClose={() => setLabReportsModalOpen(false)}
      />

      <DoctorSearchModal
        isOpen={doctorSearchModalOpen}
        onClose={() => setDoctorSearchModalOpen(false)}
        onSelectDoctorToBook={handleSelectDoctorToBook}
        initialSearchQuery={doctorSearchQuery}
      />

      <TransplantReferralModal
        isOpen={transplantDeskModalOpen}
        onClose={() => setTransplantDeskModalOpen(false)}
        preSelectedOrgan={selectedOrganForTransplant}
      />

      <EmergencyModal
        isOpen={emergencyModalOpen}
        onClose={() => setEmergencyModalOpen(false)}
      />
    </div>
  );
}
