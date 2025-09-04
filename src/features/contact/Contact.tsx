import PageHero from "../../components/PageHero";
import SEOHelmet from "../../components/SEOHelmet";
import { ContactForm } from "./components/ContactForm";
import { ContactInfo } from "./components/ContactInfo";

function Contact() {

  return (
    <>
      <SEOHelmet
        title="Contact Us"
        description="Get in touch with Irazu Technology for innovative technology solutions for your business."
      />

      {/* Hero Section */}
      <PageHero
        title="Contact Us"
        description="We'd love to hear from you. Reach out to discuss how we can help your business."
      />

      {/* Contact Form and Info */}
      <section className="py-16 md:py-24">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
            <ContactForm />
            <ContactInfo />
          </div>
        </div>
      </section>

      {/* Map Section */}
      {/* <section className="py-12">
        <div className="container mx-auto px-4">
          <div className="bg-gray-200 h-96 rounded-lg overflow-hidden"> */}
      {/* Replace with actual map component or embed */}
      {/* <div className="w-full h-full flex items-center justify-center bg-gray-300">
              <p className="text-gray-600">Map will be displayed here</p>
            </div>
          </div>
        </div>
      </section> */}
    </>
  );
}

export default Contact;
