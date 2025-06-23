import CTA from "../../components/CTA";
import PageHero from "../../components/PageHero";
import SEOHelmet from "../../components/SEOHelmet";
import ServicesList from "./ServicesList";

function Services() {
  return (
    <>
      <SEOHelmet
        title="Services"
        description="Explore our comprehensive telecom network design services including FTTH, HFC, Node Split, and more."
      />

      {/* Hero Section */}
      <PageHero
        title="Our Services"
        description="At Irazu Technology, we provide comprehensive design and drafting services for HFC and FTTH networks, customized to the unique needs of each client and project."
      />

      {/* Service Sections */}
      <ServicesList />

      {/* CTA Section */}
      <CTA
        title="Ready to Transform Your Business?"
        description="Contact us today to discuss how our services can help you achieve your technology goals"
        buttonText="Get in Touch"
        buttonLink="/contact"
        bgColor="bg-blue-600"
        textColor="text-white"
        buttonBgColor="bg-white"
        buttonTextColor="text-blue-600"
        buttonHoverBgColor="hover:bg-blue-50"
      />
    </>
  );
}

export default Services;
