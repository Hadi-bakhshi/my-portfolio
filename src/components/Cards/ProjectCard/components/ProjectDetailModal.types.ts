export interface ProjectDetailModalData {
  projectName: string;
  description: string;
  repositoryLink: string | null;
  liveDemoLink: string | null;
  screenShotImage: string | null;
  technologies: {
    name: string;
    tag: string;
  }[];
}

export interface ProjectDetailModalProps extends ProjectDetailModalData {
  open: boolean;
  onClose: () => void;
}
