import { motion, useInView } from "framer-motion";
import type { SectionTitleProps } from "./types";

function SectionTitle({ title, reference }: SectionTitleProps) {
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
      className="text-center mb-16"
    >
      <h2 className="text-3xl md:text-4xl font-bold text-gray-800 mb-4">
        {title}
      </h2>
      <div className="w-24 h-1 bg-blue-600 mx-auto"></div>
    </motion.div>
  );
}

export default SectionTitle;
