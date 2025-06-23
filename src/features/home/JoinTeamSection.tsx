import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import { Link } from "react-router-dom";

function JoinTeamSection() {
  const contentRef = useRef(null);
  const statsRef = useRef(null);
  const isContentInView = useInView(contentRef, {
    once: true,
    margin: "-100px 0px",
  });
  const isStatsInView = useInView(statsRef, {
    once: true,
    margin: "-100px 0px",
  });

  return (
    <section className="bg-gray-900 text-white py-16 md:py-24">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
          <motion.div
            ref={contentRef}
            initial={{ opacity: 0, x: -20 }}
            animate={
              isContentInView ? { opacity: 1, x: 0 } : { opacity: 0, x: -20 }
            }
            transition={{ duration: 0.8 }}
          >
            <h2 className="text-3xl md:text-4xl font-bold mb-6">
              Join Our Team
            </h2>
            <p className="text-xl mb-8">
              We're building a company where technical excellence meets a
              collaborative culture. Whether you're a seasoned network engineer
              or a motivated newcomer, we invite you to help us shape the future
              of telecommunications.
            </p>
            <Link
              to="/join"
              className="bg-blue-600 hover:bg-blue-700 text-white px-6 py-3 rounded-md transition-colors font-medium inline-block"
            >
              Explore Opportunities
            </Link>
          </motion.div>

          <motion.div
            ref={statsRef}
            initial={{ opacity: 0, x: 20 }}
            animate={
              isStatsInView ? { opacity: 1, x: 0 } : { opacity: 0, x: 20 }
            }
            transition={{ duration: 0.8 }}
            className="grid grid-cols-2 gap-4"
          >
            <div className="bg-blue-800 p-6 rounded-lg">
              <h3 className="text-2xl font-bold mb-2">40+</h3>
              <p>Years of Experience</p>
            </div>
            <div className="bg-blue-700 p-6 rounded-lg">
              <h3 className="text-2xl font-bold mb-2">30+</h3>
              <p>States Served</p>
            </div>
            <div className="bg-blue-600 p-6 rounded-lg">
              <h3 className="text-2xl font-bold mb-2">500+</h3>
              <p>Projects Completed</p>
            </div>
            <div className="bg-blue-500 p-6 rounded-lg">
              <h3 className="text-2xl font-bold mb-2">1M+</h3>
              <p>Homes Passed</p>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}

export default JoinTeamSection;
