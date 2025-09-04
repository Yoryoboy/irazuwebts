export interface ContactFormData {
  name: string;
  email: string;
  subject: string;
  message: string;
}

export interface ContactInfo {
  icon: React.ReactNode;
  title: string;
  content: string | React.ReactNode;
}

export interface SocialLink {
  name: string;
  href: string;
  icon: React.ReactNode;
  hoverColor: string;
}

export interface FormSubmissionState {
  loading: boolean;
  error: string | null;
  success: string | null;
}
