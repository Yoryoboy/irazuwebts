import SEOHelmet from "../../components/SEOHelmet";
import MissionVisionSection from "./MissionVisionSection";
import CompanyBackgroundSection from "./CompanyBackgroundSection";
import CoreValuesSection from "./CoreValuesSection";
import TeamSection from "./TeamSection";
import PageHero from "../../components/PageHero";

function About() {
  return (
    <>
      <SEOHelmet
        title="About Us"
        description="Learn about Irazu Technology, our mission, values, and the team behind our telecommunication network design services."
      />

      <PageHero
        title="About Irazu Technology"
        description="We're a team of telecommunication network design experts dedicated to delivering HFC and FTTH solutions with integrity and excellence."
      />

      <MissionVisionSection />

      <CompanyBackgroundSection />

      <CoreValuesSection />

      <TeamSection />
    </>
  );
}

export default About;
