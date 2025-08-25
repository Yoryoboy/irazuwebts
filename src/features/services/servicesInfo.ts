import ftthDesigns from "../../assets/images/ftth_designs.webp";
import hfcDesigns from "../../assets/images/hfc_network_design.webp";
import nodeSplitDesigns from "../../assets/images/node_split_designs.webp";
import draftingDesigns from "../../assets/images/drafting_designs.webp";
import highSplitDesigns from "../../assets/images/high_split_designs.webp";
import metroEDesigns from "../../assets/images/metro_e_designs.webp";
import bauDesigns from "../../assets/images/bau_designs.webp";
import lodeDataDesigns from "../../assets/images/lode_data_designs.webp";

interface Service {
  title: string;
  description: string;
  items: string[];
  image: string;
}

export const servicesInfo: Service[] = [
  {
    title: "FTTH Designs",
    description:
      "Our Fiber to the Home (FTTH) design services ensure seamless fiber connectivity from the central office to individual residences or buildings. We handle both horizontal and vertical designs, including Multi-Dwelling Units (MDU), with precision and efficiency.",
    items: [
      "End-to-end FTTH network planning",
      "Drafting for horizontal (street-level) and vertical (building-level) deployments",
      "MDU (Multi-Dwelling Unit) infrastructure layouts",
      "Integration with local permitting and engineering standards",
    ],
    image: ftthDesigns,
  },
  {
    title: "HFC Network Design",
    description:
      "We specialize in Hybrid Fiber-Coax (HFC) design to deliver reliable broadband services. Our designs include power planning, coaxial routing, and boundary redraws to maximize signal quality and reduce network noise.",
    items: [
      "Full HFC network schematics",
      "Power supply and powering plan development",
      "Redrawing and optimizing node boundaries",
      "Coaxial infrastructure mapping and documentation",
    ],
    image: hfcDesigns,
  },
  {
    title: "Node Split & Segmentation",
    description:
      "Our node segmentation services improve network performance by redistributing traffic loads. We manage the full lifecycle of node split projects from redraw to powering and documentation.",
    items: [
      "Node split analysis and boundary redefinition",
      "Power reconfiguration and validation",
      "Traffic load balancing and optimization",
      "Integration into existing network topology",
    ],
    image: nodeSplitDesigns,
  },
  {
    title: "Drafting in Magellan or SpatialNet",
    description:
      "We provide precise post-construction documentation using Magellan or SpatialNet, ensuring that every element of your network is accurately represented and compliant with operational standards.",
    items: [
      "Detailed redlining and updates to built infrastructure",
      "Alignment with original engineering designs",
      "Integration with Magellan or SpatialNet database systems",
      "Compliance with industry record-keeping standards",
    ],
    image: draftingDesigns,
  },
  {
    title: "High Split Projects",
    description:
      "Our High Split design services help modernize legacy systems by expanding the upstream bandwidth capacity, enabling better performance for current and future demands.",
    items: [
      "Evaluation and planning of High Split architecture",
      "Component selection and placement strategy",
      "Documentation for regulatory compliance",
      "Preparation for DOCSIS 3.1+ upgrades",
    ],
    image: highSplitDesigns,
  },
  {
    title: "Metro-E",
    description:
      "We design robust Metro Ethernet (Metro-E) networks to enable high-speed, scalable, and reliable communication between enterprise locations or service provider hubs.",
    items: [
      "Design of Metro-E topologies",
      "Ethernet service provisioning and documentation",
      "Integration with fiber backbone infrastructure",
      "Capacity and redundancy planning",
    ],
    image: metroEDesigns,
  },
  {
    title: "BAU’s (Business As Usual)",
    description:
      "Our BAU services provide continuous support for everyday operations, updates, and minor redesigns, ensuring your network remains reliable, efficient, and future-proof.",
    items: [
      "Ongoing drafting and design updates",
      "Service request handling and implementation",
      "Minor enhancements and modifications",
      "Long-term design support and partner collaboration",
    ],
    image: bauDesigns,
  },
  // {
  //   title: "LODE DATA Designs with BOM",
  //   description:
  //     "Using LodeData, we create detailed network blueprints complete with accurate Bills of Materials (BOM). These designs streamline procurement and construction processes by eliminating guesswork and waste.",
  //   items: [
  //     "Network layout using LodeData tools",
  //     "Generation of accurate and complete BOMs",
  //     "Drafting Assistant and Design Assistant utilization",
  //     "Fiber module configurations and summaries",
  //   ],
  //   image: lodeDataDesigns,
  // },
];
