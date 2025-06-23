import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import { Link } from "react-router-dom";
import companyImage from "../../assets/images/telecommunications-build.webp";

function BuildFutureSection() {
  const ref1 = useRef(null);
  const ref2 = useRef(null);
  const isInView1 = useInView(ref1, { once: true, margin: "-100px 0px" });
  const isInView2 = useInView(ref2, { once: true, margin: "-100px 0px" });

  return (
    <section className="bg-blue-50 py-16 md:py-24">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl md:text-4xl font-bold text-blue-600 mb-4">
            Build the Future With Us
          </h2>
          <div className="w-24 h-1 bg-blue-600 mx-auto"></div>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
          <motion.div
            ref={ref1}
            initial={{ opacity: 0, x: -20 }}
            animate={isInView1 ? { opacity: 1, x: 0 } : { opacity: 0, x: -20 }}
            transition={{ duration: 0.8 }}
          >
            <h3 className="text-2xl md:text-3xl font-bold text-gray-800 mb-6">
              Local Values, Global Impact
            </h3>
            <p className="text-gray-600 mb-6">
              We are a U.S.-based telecommunications design company founded in
              2020 in Denver, Colorado. Although young as a company, Irazu
              Technology is built on over 40 years of combined experience in the
              Cable TV and Communications industry.
            </p>
            <p className="text-gray-600 mb-6">
              Our specialized team continues to grow as we meet the increasing
              demand for high-quality HFC and FTTH solutions across the United
              States.
            </p>
            <p className="text-gray-600 mb-6">
              At Irazu Technology, we believe in building strong partnerships
              with our clients and continuously improving our processes to
              deliver reliable, scalable, and innovative results.
            </p>
            <Link
              to="/about"
              className="inline-flex items-center text-blue-600 font-medium hover:text-blue-800"
            >
              About Irazu
              <svg
                className="ml-2 w-5 h-5"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M9 5l7 7-7 7"
                ></path>
              </svg>
            </Link>
          </motion.div>

          <motion.div
            ref={ref2}
            initial={{ opacity: 0, x: 20 }}
            animate={isInView2 ? { opacity: 1, x: 0 } : { opacity: 0, x: 20 }}
            transition={{ duration: 0.8 }}
            className="rounded-lg overflow-hidden shadow-xl"
          >
            <img
              src={companyImage}
              alt="Irazu Technology Headquarters"
              className="w-full h-auto"
            />
          </motion.div>
        </div>
      </div>
    </section>
  );
}

export default BuildFutureSection;
