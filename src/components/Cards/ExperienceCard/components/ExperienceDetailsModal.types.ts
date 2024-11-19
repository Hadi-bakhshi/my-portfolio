export type ExperienceDetailData = WorkExperience | EducationExperience;

export type ExperienceDetailsModalProps = {
  open: boolean;
  onClose: () => void;
  data: ExperienceDetailData;
  title: string;
};

export type WorkExperience = {
  type?: 'work';
  /**
   * You should pass date
   * @example "2024 Nov"
   */
  startDate: string;

  /**
   * You should pass date
   * @example "2024 Nov"
   */
  endDate: string;

  /**
   * You should provide your achievements list
   */
  achievements: string[];

  /**
   * You can provide the location in the way that like.
   * Recommended format:
   * @example Iran, Tehran
   */
  location: string;
};

export type EducationExperience = {
  type?: 'education';

  /**
   * You should pass date
   * @example "2024 Nov"
   */
  startDate: string;

  /**
   * You should pass date
   * @example "2024 Nov"
   */
  endDate: string;
};
