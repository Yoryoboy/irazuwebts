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

        <div className="grid grid-cols-1 gap-12">
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
            initial={{ opacity: 0, y: 20 }}
            animate={
              isImageInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }
            }
            transition={{ duration: 0.8 }}
            className="w-full py-8"
          >
            <h3 className="text-2xl font-bold mb-12 text-gray-800 text-center">Our Journey</h3>
            
            <Timeline horizontal={true} className="pb-8 px-6">
              {/* Phase 1 */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={isImageInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
                transition={{ duration: 0.5, delay: 0.1 }}
              >
                <TimelineItem horizontal={true}>
                  <TimelineIcon horizontal={true} icon={<RocketIcon size={20} />} />
                  <TimelineTitle horizontal={true}>Founded in Denver</TimelineTitle>
                  <TimelineDate horizontal={true}>January 2020</TimelineDate>
                  <TimelineContent horizontal={true}>
                    <p>Irazu Technology was born to meet the growing demand for HFC and FTTH network designs.</p>
                  </TimelineContent>
                </TimelineItem>
              </motion.div>

              {/* Phase 2 */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={isImageInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
                transition={{ duration: 0.5, delay: 0.3 }}
              >
                <TimelineItem horizontal={true}>
                  <TimelineIcon horizontal={true} icon={<GearIcon size={20} />} />
                  <TimelineTitle horizontal={true}>First Major Projects</TimelineTitle>
                  <TimelineDate horizontal={true}>March 2021</TimelineDate>
                  <TimelineContent horizontal={true}>
                    <p>Began collaborations with industry leaders such as Charter, Comcast, and SEFNCO.</p>
                  </TimelineContent>
                </TimelineItem>
              </motion.div>

              {/* Phase 3 */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={isImageInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
                transition={{ duration: 0.5, delay: 0.5 }}
              >
                <TimelineItem horizontal={true}>
                  <TimelineIcon horizontal={true} icon={<TargetIcon size={20} />} />
                  <TimelineTitle horizontal={true}>Team Expansion</TimelineTitle>
                  <TimelineDate horizontal={true}>June 2022</TimelineDate>
                  <TimelineContent horizontal={true}>
                    <p>Grew to a team of 10+ engineers and specialists focused on excellence.</p>
                  </TimelineContent>
                </TimelineItem>
              </motion.div>

              {/* Phase 4 */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={isImageInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
                transition={{ duration: 0.5, delay: 0.7 }}
              >
                <TimelineItem horizontal={true}>
                  <TimelineIcon horizontal={true} icon={<FlagIcon size={20} />} />
                  <TimelineTitle horizontal={true}>Market Leadership</TimelineTitle>
                  <TimelineDate horizontal={true}>Present</TimelineDate>
                  <TimelineContent horizontal={true}>
                    <p>Established as a trusted partner with 40+ years of combined experience.</p>
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
