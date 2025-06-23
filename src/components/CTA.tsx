import { motion, useInView } from "framer-motion";
import { Link } from "react-router-dom";
import { useRef } from "react";

function CTA({
  title = "Ready to Transform Your Business?",
  description = "Contact us today to discuss how our services can help you achieve your technology goals",
  buttonText = "Get in Touch",
  buttonLink = "/contact",
  // Styling props with defaults
  bgColor = "bg-blue-600",
  textColor = "text-white",
  headingColor = "", // Default will use textColor
  descriptionColor = "", // Default will use textColor
  buttonBgColor = "bg-white",
  buttonTextColor = "text-blue-600",
  buttonHoverBgColor = "hover:bg-blue-50",
  paddingY = "py-16 md:py-24",
}) {
  // Fix animation rendering with useInView hook
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px 0px" });

  // Set default colors if not provided
  const finalHeadingColor = headingColor || textColor;
  const finalDescriptionColor = descriptionColor || textColor;

  return (
    <section className={`${bgColor} ${textColor} ${paddingY}`}>
      <div className="container mx-auto px-4 text-center">
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
          transition={{ duration: 0.8 }}
        >
          <h2
            className={`text-3xl md:text-4xl font-bold mb-6 ${finalHeadingColor}`}
          >
            {title}
          </h2>
          <p
            className={`text-xl max-w-3xl mx-auto mb-8 ${finalDescriptionColor}`}
          >
            {description}
          </p>
          <Link
            to={buttonLink}
            className={`${buttonBgColor} ${buttonTextColor} ${buttonHoverBgColor} px-8 py-4 rounded-md transition-colors font-medium text-lg inline-block`}
          >
            {buttonText}
          </Link>
        </motion.div>
      </div>
    </section>
  );
}

export default CTA;
