import { motion, useInView } from "framer-motion";
import { useRef } from "react";

const MissionVisionSection = () => {
  const missionRef = useRef(null);
  const visionRef = useRef(null);
  const isMissionInView = useInView(missionRef, { once: true, margin: "-100px 0px" });
  const isVisionInView = useInView(visionRef, { once: true, margin: "-100px 0px" });

  return (
    <section className="py-16 md:py-24">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
          <motion.div
            ref={missionRef}
            initial={{ opacity: 0, x: -20 }}
            animate={isMissionInView ? { opacity: 1, x: 0 } : { opacity: 0, x: -20 }}
            transition={{ duration: 0.8 }}
            className="bg-blue-50 p-8 rounded-lg"
          >
            <h2 className="text-3xl font-bold text-gray-800 mb-6">Our Mission</h2>
            <p className="text-gray-700 mb-4">
              To deliver top-tier telecommunication design services through continuous improvement, high-quality standards, and client-centric strategies.
            </p>
            <p className="text-gray-700">
              We are committed to delivering exceptional value to our clients by combining technical expertise with a deep understanding of business needs.
            </p>
          </motion.div>

          <motion.div
            ref={visionRef}
            initial={{ opacity: 0, x: 20 }}
            animate={isVisionInView ? { opacity: 1, x: 0 } : { opacity: 0, x: 20 }}
            transition={{ duration: 0.8 }}
            className="bg-blue-600 text-white p-8 rounded-lg"
          >
            <h2 className="text-3xl font-bold mb-6">Our Vision</h2>
            <p className="mb-4">
              To be the most trusted partner in telecommunication network design, setting industry standards for quality, efficiency, and innovation.
            </p>
            <p>
              We envision a future where our innovative solutions help organizations of all sizes harness the full potential of technology to achieve their goals.
            </p>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default MissionVisionSection;
