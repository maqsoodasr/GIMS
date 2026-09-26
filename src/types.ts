export interface Department {
  id: string;
  name: string;
  category: 'transplant' | 'clinical' | 'surgical' | 'diagnostic' | 'emergency';
  headOfDept: string;
  headDesignation: string;
  description: string;
  shortDesc: string;
  services: string[];
  bedCount?: number;
  featuredStats?: string;
  iconName: string;
  color: string;
}

export interface Doctor {
  id: string;
  name: string;
  qualifications: string;
  designation: string;
  departmentId: string;
  departmentName: string;
  opdDays: string[];
  opdTimings: string;
  roomNo: string;
  experienceYears: number;
  specialization: string;
  availableForTeleconsult: boolean;
}

export interface OrganTransplantProgram {
  id: string;
  organName: string;
  totalTransplants: number;
  successRate: string;
  costToPatient: string;
  director: string;
  leadSurgeon: string;
  highlights: string[];
  description: string;
  icon: string;
}

export interface AcademicProgram {
  id: string;
  title: string;
  faculty: string;
  duration: string;
  degreeType: 'Undergraduate' | 'Postgraduate' | 'Diploma' | 'Nursing';
  eligibility: string;
  seats: number;
  status: 'Admissions Open' | 'Upcoming Session' | 'Class in Progress';
  description: string;
  accreditations: string[];
}

export interface LabParameter {
  name: string;
  result: string;
  normalRange: string;
  unit: string;
  flag: 'Normal' | 'High' | 'Low';
}

export interface LabReport {
  mrNo: string;
  pin: string;
  patientName: string;
  age: number;
  gender: 'Male' | 'Female';
  testName: string;
  category: string;
  collectionDate: string;
  reportingDate: string;
  consultant: string;
  status: 'Verified & Certified' | 'Pending Review';
  parameters: LabParameter[];
  clinicalRemarks: string;
}

export interface AppointmentRecord {
  id: string;
  tokenNumber: string;
  mrNo: string;
  patientName: string;
  guardianName: string;
  age: string;
  gender: string;
  phone: string;
  email: string;
  cnic: string;
  departmentId: string;
  departmentName: string;
  doctorName: string;
  date: string;
  timeSlot: string;
  roomNo: string;
  status: 'Confirmed' | 'Completed';
  createdAt: string;
}

export interface NewsItem {
  id: string;
  title: string;
  category: 'Transplant Milestone' | 'Admissions' | 'Research & CME' | 'Hospital Notice';
  date: string;
  summary: string;
  readTime: string;
  featured?: boolean;
}
