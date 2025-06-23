import type { LucideIcon } from "lucide-react";

export type TimelineItemType = {
  icon: LucideIcon;
  title: string;
  date: string;
  content: string;
};

export interface CompanyStoryProps {
  reference: React.RefObject<HTMLDivElement | null>;
}

export interface SectionTitleProps {
  title: string;
  reference: React.RefObject<HTMLDivElement | null>;
}

export interface TimelineItemProps {
  item: TimelineItemType;
  index: number;
}
