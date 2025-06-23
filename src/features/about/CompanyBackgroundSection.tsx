import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import {
  Timeline,
  TimelineItem,
  TimelineIcon,
  TimelineTitle,
  TimelineDate,
  TimelineContent,
} from "@/components/ui/timeline";
import { RocketIcon, GearIcon, TargetIcon, FlagIcon } from "@/components/ui/icons";

const CompanyBackgroundSection = () => {
  const titleRef = useRef(null);
  const contentRef = useRef(null);
  const imageRef = useRef(null);

  const isTitleInView = useInView(titleRef, {
    once: true,
    margin: "-100px 0px",
  });
  const isContentInView = useInView(contentRef, {
    once: true,
    margin: "-100px 0px",
  });
  const isImageInView = useInView(imageRef, {
    once: true,
    margin: "-100px 0px",
  });

  return (
    <section className="py-16 md:py-24 bg-gray-50">
      <div className="container mx-auto px-4">
        <motion.div
          ref={titleRef}
          initial={{ opacity: 0 }}
          animate={isTitleInView ? { opacity: 1 } : { opacity: 0 }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl md:text-4xl font-bold text-gray-800 mb-4">
            Our Story
          </h2>
          <div className="w-24 h-1 bg-blue-600 mx-auto"></div>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
          <motion.div
            ref={contentRef}
            initial={{ opacity: 0, x: -20 }}
            animate={
              isContentInView ? { opacity: 1, x: 0 } : { opacity: 0, x: -20 }
            }
            transition={{ duration: 0.8 }}
          >
            <p className="text-gray-700 mb-6">
              Founded in 2020 in Denver, Colorado, Irazu Technology was born to
              meet the growing demand for HFC and FTTH network designs in the
              U.S. market. Backed by over 40 years of combined experience in
              Cable TV and Communications, we bring expertise, innovation, and a
              people-first approach to every project.
            </p>
            <p className="text-gray-700 mb-6">
              We're proud to have collaborated with industry leaders such as
              Charter, Comcast, SEFNCO, and Claro, delivering exceptional
              network design solutions that meet the highest standards of
              quality and performance.
            </p>
            <p className="text-gray-700 mb-6">
              Today, we've grown to a team of engineers and specialists while
              maintaining our focus on excellence, efficiency, and long-term
              client satisfaction.
            </p>
          </motion.div>

          <motion.div
            ref={imageRef}
            initial={{ opacity: 0, x: 20 }}
            animate={
              isImageInView ? { opacity: 1, x: 0 } : { opacity: 0, x: 20 }
            }
            transition={{ duration: 0.8 }}
            className="bg-card p-6 rounded-lg shadow-lg"
          >
            <h3 className="text-2xl font-bold mb-6 text-gray-800">Our Journey</h3>
            
            <Timeline>
              {/* Phase 1 */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={isImageInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
                transition={{ duration: 0.5, delay: 0.1 }}
              >
                <TimelineItem>
                  <TimelineIcon icon={<RocketIcon size={16} />} />
                  <TimelineTitle>Founded in Denver</TimelineTitle>
                  <TimelineDate>January 2020</TimelineDate>
                  <TimelineContent>
                    <p>Irazu Technology was born to meet the growing demand for HFC and FTTH network designs in the U.S. market.</p>
                  </TimelineContent>
                </TimelineItem>
              </motion.div>

              {/* Phase 2 */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={isImageInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
                transition={{ duration: 0.5, delay: 0.3 }}
              >
                <TimelineItem>
                  <TimelineIcon icon={<GearIcon size={16} />} />
                  <TimelineTitle>First Major Projects</TimelineTitle>
                  <TimelineDate>March 2021</TimelineDate>
                  <TimelineContent>
                    <p>Began collaborations with industry leaders such as Charter, Comcast, and SEFNCO, delivering exceptional network design solutions.</p>
                  </TimelineContent>
                </TimelineItem>
              </motion.div>

              {/* Phase 3 */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={isImageInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
                transition={{ duration: 0.5, delay: 0.5 }}
              >
                <TimelineItem>
                  <TimelineIcon icon={<TargetIcon size={16} />} />
                  <TimelineTitle>Team Expansion</TimelineTitle>
                  <TimelineDate>June 2022</TimelineDate>
                  <TimelineContent>
                    <p>Grew to a team of 10+ engineers and specialists while maintaining our focus on excellence and efficiency.</p>
                  </TimelineContent>
                </TimelineItem>
              </motion.div>

              {/* Phase 4 */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={isImageInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
                transition={{ duration: 0.5, delay: 0.7 }}
              >
                <TimelineItem>
                  <TimelineIcon icon={<FlagIcon size={16} />} />
                  <TimelineTitle>Market Leadership</TimelineTitle>
                  <TimelineDate>Present</TimelineDate>
                  <TimelineContent>
                    <p>Established as a trusted partner for telecommunication network design with over 40 years of combined industry experience.</p>
                  </TimelineContent>
                </TimelineItem>
              </motion.div>
            </Timeline>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default CompanyBackgroundSection;
