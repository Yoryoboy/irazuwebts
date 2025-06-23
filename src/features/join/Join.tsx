import PageHero from "../../components/PageHero";
import SEOHelmet from "../../components/SEOHelmet";

const Join = () => {
  return (
    <>
      <SEOHelmet
        title="Join Our Team"
        description="Join the Irazu Technology team and build the future with us."
      />

      {/* Hero Section */}
      <PageHero
        title="Join Our Team"
        description="Build the future with us at Irazu Technology"
      />

      {/* Coming Soon Message */}
      <section className="py-16 md:py-24">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl font-bold text-gray-800 mb-6">Coming Soon</h2>
          <p className="text-xl text-gray-600 mb-8">
            We're currently working on this page. Please check back later for
            job opportunities.
          </p>
          <a
            href="/contact"
            className="bg-blue-600 text-white hover:bg-blue-700 px-8 py-4 rounded-md transition-colors font-medium text-lg inline-block"
          >
            Contact Us
          </a>
        </div>
      </section>
    </>
  );
};

export default Join;
