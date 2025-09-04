import { motion } from "framer-motion";
import { CONTACT_INFO, SOCIAL_LINKS } from "../constants/contactData";

const ContactInfoItem = ({ icon, title, content }: { icon: React.ReactNode; title: string; content: React.ReactNode }) => (
  <div className="flex items-start">
    <div className="flex-shrink-0 bg-blue-100 rounded-full p-3 mr-4">
      {icon}
    </div>
    <div>
      <h3 className="text-lg font-medium text-gray-800">{title}</h3>
      <div className="text-gray-600">{content}</div>
    </div>
  </div>
);

const SocialLink = ({ name, href, icon, hoverColor }: { name: string; href: string; icon: React.ReactNode; hoverColor: string }) => (
  <a href={href} className={`text-gray-600 ${hoverColor}`}>
    <span className="sr-only">{name}</span>
    {icon}
  </a>
);

export const ContactInfo = () => {
  return (
    <motion.div
      initial={{ opacity: 0, x: 20 }}
      whileInView={{ opacity: 1, x: 0 }}
      transition={{ duration: 0.8 }}
      viewport={{ once: true }}
      className="space-y-8"
    >
      <div>
        <h2 className="text-2xl font-bold text-gray-800 mb-6">
          Contact Information
        </h2>
        <p className="text-gray-600 mb-8">
          We're here to help with any questions you may have about our
          services or how we can assist your business.
        </p>
      </div>

      <div className="space-y-6">
        {CONTACT_INFO.map((info, index) => (
          <ContactInfoItem
            key={index}
            icon={info.icon}
            title={info.title}
            content={info.content}
          />
        ))}
      </div>

      <div className="pt-8">
        <h3 className="text-lg font-medium text-gray-800 mb-4">
          Follow Us
        </h3>
        <div className="flex space-x-4">
          {SOCIAL_LINKS.map((social, index) => (
            <SocialLink
              key={index}
              name={social.name}
              href={social.href}
              icon={social.icon}
              hoverColor={social.hoverColor}
            />
          ))}
        </div>
      </div>
    </motion.div>
  );
};
