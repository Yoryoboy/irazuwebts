import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import CTA from "../../components/CTA";
import PageHero from "../../components/PageHero";
import SEOHelmet from "../../components/SEOHelmet";
import BuildFutureSection from "./BuildFutureSection";
import companyImage from "../../assets/images/hero-telecom.webp";
import ServicesHighlight from "./ServicesHighlight";
import JoinTeamSection from "./JoinTeamSection";

const Home = () => {
  return (
    <>
      <SEOHelmet
        title="Innovative Technology Solutions"
        siteName="Irazu Technology"
        description="Irazu Technology provides innovative technology solutions with integrity and excellence."
      />
      <PageHero
        title="Best in Class Custom Technology Solutions"
        description="Single Source Solutions including Consulting, Engineering, Development, and Technical Services"
        centered={false}
        backgroundImage={companyImage}
      >
        <div className="flex flex-wrap gap-4">
          <Link
            to="/services"
            className="bg-blue-600 hover:bg-blue-700 text-white px-6 py-3 rounded-md transition-colors font-medium"
          >
            Our Services
          </Link>
          <Link
            to="/contact"
            className="border border-white bg-white text-gray-900 px-6 py-3 rounded-md transition-colors font-medium"
          >
            Get Started Today
          </Link>
        </div>
      </PageHero>
      <BuildFutureSection />
      <ServicesHighlight />
      <JoinTeamSection />
      <CTA
        title="Ready to Get Started?"
        description="Contact us today to discuss how we can help with your technology needs"
        buttonText="Contact Us"
        buttonLink="/contact"
        bgColor="bg-blue-50"
        textColor=""
        headingColor="text-gray-800"
        descriptionColor="text-gray-600"
        buttonBgColor="bg-blue-600"
        buttonTextColor="text-white"
        buttonHoverBgColor="hover:bg-blue-700"
      />
    </>
  );
};

export default Home;
