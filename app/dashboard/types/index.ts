export type ColorScheme = "purple" | "blue" | "green" | "orange";

export interface BaseCardProps {
  className?: string;
  children: React.ReactNode;
}

export interface StatCardProps {
  heading: string;
  subheading: string;
  description: string;
  colorScheme: ColorScheme;
  className?: string;
}

export interface ActivityItem {
  icon: React.ReactNode;
  iconBg: string;
  title: string;
  description: string;
  time: string;
}

export interface ManagementItem {
  id: number;
  [key: string]: any;
}

export interface Column {
  header: string;
  accessor: (row: any) => React.ReactNode;
}

export interface ManagementSectionProps {
  title: string;
  columns: Column[];
  data: any[];
  onViewAll?: () => void;
  className?: string;
}

export interface ModalProps {
  isOpen: boolean;
  onClose: () => void;
  title: string;
  children: React.ReactNode;
  className?: string;
}

export interface WelcomeSectionProps {
  title: string;
  description: string;
  className?: string;
}
