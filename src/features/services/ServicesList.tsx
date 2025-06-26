import { servicesInfo } from "./servicesInfo";
import ServiceCard from "./ServiceCard";

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
