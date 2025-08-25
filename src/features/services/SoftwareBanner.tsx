import { memo } from "react";

import autocad from "../../assets/images/software/autocad.webp";
import bentley from "../../assets/images/software/bentley.webp";
import googleearth from "../../assets/images/software/googleeartjpg.webp";
import lode from "../../assets/images/software/lode.webp";
import magellan from "../../assets/images/software/magellan-logo.webp";
import spatialnet from "../../assets/images/software/spatialnet.webp";

// Single source of truth for software logos
// Note: object-contain ensures no cropping; containers share identical aspect ratio
const SOFTWARE_LOGOS: { src: string; alt: string }[] = [
  { src: autocad, alt: "Autodesk AutoCAD" },
  { src: bentley, alt: "Bentley Systems" },
  { src: googleearth, alt: "Google Earth" },
  { src: lode, alt: "Lode Data" },
  { src: magellan, alt: "Magellan" },
  { src: spatialnet, alt: "SpatialNet" },
];

function LogoTile({ src, alt }: { src: string; alt: string }) {
  return (
    <div
      className="relative w-full"
      // Maintain a consistent 3:2 ratio without relying on Tailwind's aspect utilities
      style={{ paddingBottom: "66.6667%" }}
      aria-label={alt}
    >
      <img
        src={src}
        alt={alt}
        loading="lazy"
        decoding="async"
        className="absolute inset-0 m-auto max-h-[92%] max-w-[92%] object-contain"
      />
    </div>
  );
}

function SoftwareBannerBase() {
  return (
    <section
      aria-labelledby="software-banner-title"
      className="bg-blue-50 py-16 md:py-24"
    >
      <div className="container mx-auto px-4">
        <h2
          id="software-banner-title"
          className="text-3xl md:text-4xl font-bold text-gray-800 text-center"
        >
          Software we work with
        </h2>
        <div className="w-24 h-1 bg-blue-600 mx-auto mt-6 mb-16"></div>
        <div
          className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-6 gap-6 items-center"
          role="list"
          aria-label="Software logos"
        >
          {SOFTWARE_LOGOS.map(({ src, alt }) => (
            <div
              key={alt}
              role="listitem"
              className="rounded-md border border-gray-200 bg-white/60 p-2.5 shadow-sm"
            >
              <LogoTile src={src} alt={alt} />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

const SoftwareBanner = memo(SoftwareBannerBase);
export default SoftwareBanner;
