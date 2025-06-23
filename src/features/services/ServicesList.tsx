import { servicesInfo } from "./servicesInfo";
import ServiceCard from "./ServiceCard";

/**
 * Component that renders a list of service cards with alternating layout
 * @param {Object} props
 * @param {Array} props.services - Optional array of services to render (defaults to servicesInfo)
 */
function ServicesList({ services = servicesInfo }) {
  return (
    <section className="py-16">
      <div className="container mx-auto px-4">
        {services.map((service, index) => (
          <ServiceCard key={service.title} service={service} index={index} />
        ))}
      </div>
    </section>
  );
}

export default ServicesList;
