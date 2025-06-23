import { motion, useInView } from "framer-motion";
import type { CompanyStoryProps } from "./types";

function CompanyStory({ reference }: CompanyStoryProps) {
  const isInView = useInView(reference, {
    once: true,
    margin: "-100px 0px",
  });

  return (
    <motion.div
      ref={reference}
      initial={{ opacity: 0, x: -20 }}
      animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: -20 }}
      transition={{ duration: 0.8 }}
    >
      <p className="text-gray-700 mb-6">
        Founded in 2020 in Denver, Colorado, Irazu Technology was born to meet
        the growing demand for HFC and FTTH network designs in the U.S. market.
        Backed by over 40 years of combined experience in Cable TV and
        Communications, we bring expertise, innovation, and a people-first
        approach to every project.
      </p>
      <p className="text-gray-700 mb-6">
        We're proud to have collaborated with industry leaders such as Charter,
        Comcast, SEFNCO, and Claro, delivering exceptional network design
        solutions that meet the highest standards of quality and performance.
      </p>
      <p className="text-gray-700 mb-6">
        Today, we've grown to a team of engineers and specialists while
        maintaining our focus on excellence, efficiency, and long-term client
        satisfaction.
      </p>
    </motion.div>
  );
}

export default CompanyStory;
