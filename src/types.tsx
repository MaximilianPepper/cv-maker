export interface PersonalDetailsInterface {
  name?: string;
  email?: string;
  phone?: string; // can make a regex for correct phone here
  location?: string;
  website?: string; // regex for url
}
export interface ExperienceInterface {
  company?: string;
  role?: string;
  description?: string;
  startDate?: string;
  endDate?: string;
  id?: string;
}
export interface EducationInterface {
  school?: string;
  degree?: string;
  startDate?: string;
  endDate?: string;
  id?: string;
}
export interface StateInterface {
  personalInfo: PersonalDetailsInterface;
  experience: ExperienceInterface[];
  education: EducationInterface[];
}
