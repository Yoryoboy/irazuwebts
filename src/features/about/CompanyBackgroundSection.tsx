import { useRef } from "react";
import { SectionTitle, CompanyStory, Timeline } from "./components";

function CompanyBackgroundSection() {
  const titleRef = useRef<HTMLDivElement>(null);
  const contentRef = useRef<HTMLDivElement>(null);
  const timelineRef = useRef<HTMLDivElement>(null);

  return (
    <section className="py-16 md:py-24 bg-gray-50">
      <div className="container mx-auto px-4">
        <SectionTitle title="Our Story" reference={titleRef} />

        <div className="flex flex-col gap-16 max-w-6xl mx-auto">
          <CompanyStory reference={contentRef} />
          <Timeline reference={timelineRef} />
        </div>
      </div>
    </section>
  );
}

export default CompanyBackgroundSection;
