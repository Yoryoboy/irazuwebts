import { motion } from "framer-motion";

/**
 * Reusable page hero component with customizable title, description, and background
 * @param {Object} props
 * @param {string} props.title - The main heading text
 * @param {string} props.description - The subheading text
 * @param {boolean} props.centered - Whether to center the text (default: true)
 * @param {string} props.backgroundImage - Optional URL for background image
 * @param {React.ReactNode} props.children - Optional additional content to render below description
 */
const PageHero = ({
  title,
  description,
  centered = true,
  backgroundImage,
  children,
}) => {
  // Determine if we should use the home page style (with background image) or standard style
  const isHomeStyle = !!backgroundImage;

  return (
    <section
      className={`${
        isHomeStyle
          ? "relative text-white"
          : "bg-gray-900 text-white py-16 md:py-24"
      }`}
    >
      {isHomeStyle && (
        <>
          <div className="absolute inset-0 bg-gradient-to-r from-blue-900/80 to-blue-800/50 z-10"></div>
          <div
            className="absolute inset-0 bg-cover bg-center opacity-90"
            style={{ backgroundImage: `url('${backgroundImage}')` }}
          ></div>
        </>
      )}

      <div
        className={`container mx-auto px-4 ${
          isHomeStyle ? "py-24 md:py-32 relative z-20" : ""
        }`}
      >
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.8 }}
          className={`${centered ? "text-center" : ""} max-w-3xl ${
            centered ? "mx-auto" : ""
          }`}
        >
          <h1 className="text-4xl md:text-5xl font-bold mb-6">{title}</h1>
          {description && <p className="text-xl mb-8">{description}</p>}
          {children}
        </motion.div>
      </div>
    </section>
  );
};

export default PageHero;
