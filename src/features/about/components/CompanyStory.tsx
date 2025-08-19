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
      className="text-justify"
    >
      <p className="text-gray-800 mb-6 leading-relaxed text-lg max-w-3xl mx-auto">
        <span className="font-semibold">Founded in 2020</span> in Denver,
        Colorado, Irazu Technology emerged to address the growing demand for HFC
        and FTTH network designs across the United States. With over 40 years of
        combined expertise in Cable TV and Communications, we deliver innovative
        solutions with a people-first philosophy.
      </p>
      <p className="text-gray-800 mb-6 leading-relaxed text-lg max-w-3xl mx-auto">
        We take pride in our strategic partnerships with industry leaders
        including Charter, Comcast, SEFNCO, and Claro. Through these
        collaborations, we consistently deliver network design solutions that
        exceed expectations in both quality and performance.
      </p>
      <p className="text-gray-800 mb-6 leading-relaxed text-lg max-w-3xl mx-auto">
        As we've expanded to a specialized team of engineers and technical
        experts, our commitment remains unwavering: excellence in execution,
        operational efficiency, and lasting client relationships that stand the
        test of time.
      </p>
    </motion.div>
  );
}

export default CompanyStory;
