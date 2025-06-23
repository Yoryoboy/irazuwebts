import * as React from "react";
import { cn } from "@/lib/utils";

interface TimelineProps extends React.HTMLAttributes<HTMLDivElement> {
  children: React.ReactNode;
  horizontal?: boolean;
}

const Timeline = React.forwardRef<HTMLDivElement, TimelineProps>(
  ({ className, children, horizontal = false, ...props }, ref) => {
    return (
      <div
        ref={ref}
        className={cn(
          "relative",
          horizontal
            ? "grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 py-8"
            : "space-y-12 pl-8",
          className
        )}
        {...props}
      >
        {!horizontal && (
          <div className="absolute top-0 bottom-0 left-[9px] w-px bg-border" />
        )}
        {horizontal && (
          <div className="absolute left-0 right-0 top-[45px] h-[2px] bg-primary/30" />
        )}
        {children}
      </div>
    );
  }
);
Timeline.displayName = "Timeline";

interface TimelineItemProps extends React.HTMLAttributes<HTMLDivElement> {
  children: React.ReactNode;
  horizontal?: boolean;
}

const TimelineItem = React.forwardRef<HTMLDivElement, TimelineItemProps>(
  ({ className, children, horizontal = false, ...props }, ref) => {
    return (
      <div 
        ref={ref} 
        className={cn(
          "relative", 
          horizontal ? "flex flex-col items-center" : "",
          className
        )} 
        {...props}
      >
        {!horizontal && (
          <div className="absolute top-1 left-[-31px] h-5 w-5 rounded-full border-2 border-primary bg-background" />
        )}
        {horizontal && (
          <div className="absolute top-[45px] left-[50%] transform -translate-x-1/2 -translate-y-1/2 h-3 w-3 rounded-full bg-primary" />
        )}
        {children}
      </div>
    );
  }
);
TimelineItem.displayName = "TimelineItem";

interface TimelineIconProps extends React.HTMLAttributes<HTMLDivElement> {
  icon: React.ReactNode;
  horizontal?: boolean;
}

const TimelineIcon = React.forwardRef<HTMLDivElement, TimelineIconProps>(
  ({ className, icon, horizontal = false, ...props }, ref) => {
    return (
      <div
        ref={ref}
        className={cn(
          "flex items-center justify-center rounded-full bg-primary text-primary-foreground shadow-md",
          horizontal 
            ? "absolute top-[45px] left-[50%] transform -translate-x-1/2 -translate-y-1/2 h-10 w-10 z-10 border-2 border-background" 
            : "absolute top-0 left-[-40px] h-7 w-7",
          className
        )}
        {...props}
      >
        {icon}
      </div>
    );
  }
);
TimelineIcon.displayName = "TimelineIcon";

interface TimelineTitleProps extends React.HTMLAttributes<HTMLHeadingElement> {
  children: React.ReactNode;
  horizontal?: boolean;
}

const TimelineTitle = React.forwardRef<HTMLHeadingElement, TimelineTitleProps>(
  ({ className, children, horizontal = false, ...props }, ref) => {
    return (
      <h3
        ref={ref}
        className={cn(
          "font-medium",
          horizontal ? "text-center mt-20" : "",
          className
        )}
        {...props}
      >
        {children}
      </h3>
    );
  }
);
TimelineTitle.displayName = "TimelineTitle";

interface TimelineDateProps extends React.HTMLAttributes<HTMLParagraphElement> {
  children: React.ReactNode;
  horizontal?: boolean;
}

const TimelineDate = React.forwardRef<HTMLParagraphElement, TimelineDateProps>(
  ({ className, children, horizontal = false, ...props }, ref) => {
    return (
      <p
        ref={ref}
        className={cn(
          "text-sm text-muted-foreground",
          horizontal ? "text-center mt-1" : "",
          className
        )}
        {...props}
      >
        {children}
      </p>
    );
  }
);
TimelineDate.displayName = "TimelineDate";

interface TimelineContentProps extends React.HTMLAttributes<HTMLDivElement> {
  children: React.ReactNode;
  horizontal?: boolean;
}

const TimelineContent = React.forwardRef<HTMLDivElement, TimelineContentProps>(
  ({ className, children, horizontal = false, ...props }, ref) => {
    return (
      <div
        ref={ref}
        className={cn(
          "text-muted-foreground", 
          horizontal ? "text-center mt-2" : "mt-2",
          className
        )}
        {...props}
      >
        {children}
      </div>
    );
  }
);
TimelineContent.displayName = "TimelineContent";

export {
  Timeline,
  TimelineItem,
  TimelineIcon,
  TimelineTitle,
  TimelineDate,
  TimelineContent,
};
