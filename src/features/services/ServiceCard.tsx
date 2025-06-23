import { motion, useInView } from "framer-motion";
import { useRef } from "react";

const ServiceCard = ({ service, index }) => {
  // Determine if image should be on left or right based on index
  const isEven = index % 2 === 0;
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px 0px" });

  return (
    <div className="mb-24" ref={ref}>
      <motion.div
        initial={{ opacity: 0 }}
        animate={isInView ? { opacity: 1 } : { opacity: 0 }}
        transition={{ duration: 0.8 }}
        className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center"
      >
        {/* Image section - conditionally positioned based on index */}
        <div
          className={`rounded-lg overflow-hidden shadow-xl ${
            !isEven ? "order-1 md:order-2" : "order-1"
          }`}
        >
          <img
            src={service.image}
            alt={service.title}
            className="w-full h-auto object-cover"
          />
        </div>

        {/* Content section - conditionally positioned based on index */}
        <div className={!isEven ? "order-2 md:order-1" : "order-2"}>
          <h2 className="text-3xl font-bold text-gray-800 mb-6">
            {service.title}
          </h2>
          <p className="text-gray-600 mb-6">{service.description}</p>
          <ul className="space-y-3 mb-6">
            {service.items.map((item, i) => (
              <li key={i} className="flex items-start">
                <svg
                  className="w-5 h-5 text-blue-600 mr-2 mt-1"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M5 13l4 4L19 7"
                  ></path>
                </svg>
                <span className="text-gray-700">{item}</span>
              </li>
            ))}
          </ul>
        </div>
      </motion.div>
    </div>
  );
};

export default ServiceCard;
