import * as React from "react";
import { cn } from "@/lib/utils";

interface TimelineProps extends React.HTMLAttributes<HTMLDivElement> {
  children: React.ReactNode;
}

const Timeline = React.forwardRef<HTMLDivElement, TimelineProps>(
  ({ className, children, ...props }, ref) => {
    return (
      <div
        ref={ref}
        className={cn("relative space-y-12 pl-8", className)}
        {...props}
      >
        <div className="absolute top-0 bottom-0 left-[9px] w-px bg-border" />
        {children}
      </div>
    );
  }
);
Timeline.displayName = "Timeline";

interface TimelineItemProps extends React.HTMLAttributes<HTMLDivElement> {
  children: React.ReactNode;
}

const TimelineItem = React.forwardRef<HTMLDivElement, TimelineItemProps>(
  ({ className, children, ...props }, ref) => {
    return (
      <div ref={ref} className={cn("relative", className)} {...props}>
        <div className="absolute top-1 left-[-31px] h-5 w-5 rounded-full border-2 border-primary bg-background" />
        {children}
      </div>
    );
  }
);
TimelineItem.displayName = "TimelineItem";

interface TimelineIconProps extends React.HTMLAttributes<HTMLDivElement> {
  icon: React.ReactNode;
}

const TimelineIcon = React.forwardRef<HTMLDivElement, TimelineIconProps>(
  ({ className, icon, ...props }, ref) => {
    return (
      <div
        ref={ref}
        className={cn(
          "absolute top-0 left-[-40px] flex h-7 w-7 items-center justify-center rounded-full bg-primary text-primary-foreground",
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
}

const TimelineTitle = React.forwardRef<HTMLHeadingElement, TimelineTitleProps>(
  ({ className, children, ...props }, ref) => {
    return (
      <h3
        ref={ref}
        className={cn("text-xl font-semibold", className)}
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
}

const TimelineDate = React.forwardRef<HTMLParagraphElement, TimelineDateProps>(
  ({ className, children, ...props }, ref) => {
    return (
      <p
        ref={ref}
        className={cn("text-sm text-muted-foreground", className)}
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
}

const TimelineContent = React.forwardRef<HTMLDivElement, TimelineContentProps>(
  ({ className, children, ...props }, ref) => {
    return (
      <div
        ref={ref}
        className={cn("mt-2 text-muted-foreground", className)}
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
