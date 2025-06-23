import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import TeamGrid from "./TeamGrid";
const TeamSection = () => {
  const titleRef = useRef(null);
  const isTitleInView = useInView(titleRef, {
    once: true,
    margin: "-100px 0px",
  });

  return (
    <section className="py-16 md:py-24 bg-gray-50">
      <div className="container mx-auto px-4">
        <motion.div
          ref={titleRef}
          initial={{ opacity: 0 }}
          animate={isTitleInView ? { opacity: 1 } : { opacity: 0 }}
          transition={{ duration: 0.8 }}
          className="text-center"
        >
          <h2 className="text-3xl md:text-4xl font-bold text-gray-800 mb-4">
            Our Leadership Team
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Meet the experts leading our company forward
          </p>
          <div className="w-24 h-1 bg-blue-600 mx-auto mt-6"></div>
        </motion.div>
      </div>
      <TeamGrid />
    </section>
  );
};

export default TeamSection;
