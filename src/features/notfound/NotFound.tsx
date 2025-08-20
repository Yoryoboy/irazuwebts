import { Link, useLocation, useNavigate } from "react-router-dom";
import SEOHelmet from "../../components/SEOHelmet";
import logoImage from "../../assets/logos/logo_no_backgorund.png";
import { AlertTriangle } from "lucide-react";

/**
 * NotFound (404) page
 * - Matches the site's dark theme and typography
 * - Provides quick navigation back to Home or Contact
 * - Lazy-loaded via router for performance
 */
function NotFound() {
  const location = useLocation();
  const navigate = useNavigate();

  /**
   * Safely go back if there is history, otherwise go Home
   */
  const handleBack = () => {
    if (typeof window !== "undefined" && window.history.length > 1) {
      navigate(-1);
    } else {
      navigate("/");
    }
  };

  return (
    <section className="bg-gray-900 text-white min-h-[70vh] md:min-h-[75vh] flex items-center py-12 md:py-16">
      {/* Basic SEO to indicate 404 status in title/description */}
      <SEOHelmet
        title="404 Not Found"
        description="The page you are looking for could not be found on Irazu Technology."
      />

      <div className="container mx-auto px-4 text-center">
        {/* Brand logo for consistency with the rest of the site */}
        <img
          src={logoImage}
          alt="Irazu Technology Logo"
          className="h-20 mx-auto mb-6"
          loading="lazy"
        />

        <h1 className="text-4xl md:text-5xl font-bold mb-6 inline-flex items-center gap-3 justify-center">
          <AlertTriangle className="h-8 w-8 text-blue-400" aria-hidden="true" />
          Page Not Found
        </h1>
        <p className="text-lg leading-relaxed text-gray-300 max-w-2xl mx-auto mb-10 text-justify hyphens-auto">
          We couldn't find the page
          {" "}
          <span className="font-semibold break-words">"{location?.pathname}"</span>.
          It may have been moved, deleted, or the URL might be incorrect.
        </p>

        {/* Clear actions to recover navigation */}
        <div className="flex flex-col sm:flex-row items-center justify-center gap-4 sm:gap-5">
          <Link
            to="/"
            className="bg-blue-600 hover:bg-blue-700 px-6 py-3 rounded-md transition-colors text-white"
          >
            Home
          </Link>
          <button
            type="button"
            onClick={handleBack}
            className="border border-blue-300 text-blue-300 hover:border-blue-400 hover:text-blue-400 px-6 py-3 rounded-md transition-colors"
            aria-label="Go back to previous page"
          >
            Back
          </button>
          <Link
            to="/contact"
            className="border border-white hover:border-blue-400 hover:text-blue-400 px-6 py-3 rounded-md transition-colors"
          >
            Contact
          </Link>
        </div>
      </div>
    </section>
  );
}

export default NotFound;
