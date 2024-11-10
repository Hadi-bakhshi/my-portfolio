import type { EducationExperience, WorkExperience } from './components/ExperienceDetailsModal.types';

export type ExperienceCardProps = Work | Education;

export type Work = {
  type: 'work';
  companyName: string;
  role: string;
  detail: WorkExperience;
};

export type Education = {
  type: 'education';
  universityName: string;
  degree: string;
  detail: EducationExperience;
};
