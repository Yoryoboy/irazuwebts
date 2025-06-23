import { motion, useInView } from "framer-motion";
import React from "react";
import type { TimelineItemType } from "./types";
import TimelineItem from "./TimelineItem";
import { Building2, Handshake, Users, Trophy } from "lucide-react";

interface TimelineProps {
  reference: React.RefObject<HTMLDivElement | null>;
}

const data: TimelineItemType[] = [
  {
    icon: Building2,
    title: "Founded in Denver",
    date: "January 2020",
    content:
      "Irazu Technology was born to meet the growing demand for HFC and FTTH network designs.",
  },
  {
    icon: Handshake,
    title: "First Major Projects",
    date: "March 2021",
    content:
      "Began collaborations with industry leaders such as Charter, Comcast, and SEFNCO.",
  },
  {
    icon: Users,
    title: "Team Expansion",
    date: "June 2022",
    content:
      "Grew to a team of 10+ engineers and specialists focused on excellence.",
  },
  {
    icon: Trophy,
    title: "Market Leadership",
    date: "Present",
    content:
      "Established as a trusted partner with 40+ years of combined experience.",
  },
];

function Timeline({ reference }: TimelineProps) {
  const isInView = useInView(reference, {
    once: true,
    margin: "-100px 0px",
  });

  return (
    <motion.div
      ref={reference}
      initial={{ opacity: 0 }}
      animate={isInView ? { opacity: 1 } : { opacity: 0 }}
      transition={{ duration: 0.8 }}
    >
      <div className="relative">
        <div className="absolute left-6 md:left-1/2 top-0 bottom-0 w-px bg-gray-700 md:transform md:-translate-x-px"></div>

        {data.map((item, index) => (
          <TimelineItem key={index} item={item} index={index} />
        ))}
      </div>
    </motion.div>
  );
}

export default Timeline;
