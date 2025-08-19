import { Link } from "react-router-dom";
import CTA from "../../components/CTA";
import PageHero from "../../components/PageHero";
import SEOHelmet from "../../components/SEOHelmet";
import BuildFutureSection from "./BuildFutureSection";
import heroVideo from "../../assets/video/hero.mp4";
import ServicesHighlight from "./ServicesHighlight";
import JoinTeamSection from "./JoinTeamSection";

function Home() {
  return (
    <>
      <SEOHelmet
        title="Leading Telecommunication Network Design Services"
        siteName="Irazu Technology"
        description="Expert telecommunication network design services specializing in HFC and FTTH solutions for the modern digital infrastructure"
      />
      <PageHero
        title="Leading Telecommunication Network Design Services"
        description="Expert telecommunication network design services specializing in HFC and FTTH solutions for the modern digital infrastructure"
        centered={false}
        backgroundVideo={heroVideo}
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
        description="Contact us today to discuss how we can help with your telecommunication needs"
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
}

export default Home;
