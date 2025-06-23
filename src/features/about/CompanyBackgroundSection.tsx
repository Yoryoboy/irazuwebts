import { motion, useInView } from "framer-motion";
import { useRef } from "react";

import { Building2, Handshake, Users, Trophy } from "lucide-react";

const CompanyBackgroundSection = () => {
  const titleRef = useRef(null);
  const contentRef = useRef(null);
  const timelineRef = useRef(null);

  const isTitleInView = useInView(titleRef, {
    once: true,
    margin: "-100px 0px",
  });
  const isContentInView = useInView(contentRef, {
    once: true,
    margin: "-100px 0px",
  });
  const isTimelineInView = useInView(timelineRef, {
    once: true,
    margin: "-100px 0px",
  });

  const timelineData = [
    {
      icon: Building2,
      title: "Founded in Denver",
      date: "January 2020",
      content:
        "Irazu Technology was born to meet the growing demand for HFC and FTTH network designs.",
    },
    {
      icon: Handshake,
      title: "First Major Projects",
      date: "March 2021",
      content:
        "Began collaborations with industry leaders such as Charter, Comcast, and SEFNCO.",
    },
    {
      icon: Users,
      title: "Team Expansion",
      date: "June 2022",
      content:
        "Grew to a team of 10+ engineers and specialists focused on excellence.",
    },
    {
      icon: Trophy,
      title: "Market Leadership",
      date: "Present",
      content:
        "Established as a trusted partner with 40+ years of combined experience.",
    },
  ];

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

        <div className="flex flex-col">
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
            ref={timelineRef}
            initial={{ opacity: 0 }}
            animate={isTimelineInView ? { opacity: 1 } : { opacity: 0 }}
            transition={{ duration: 0.8 }}
          >
            <div className="relative">
              {/* Timeline line */}
              <div className="absolute left-6 md:left-1/2 top-0 bottom-0 w-px bg-gray-700 md:transform md:-translate-x-px"></div>

              {timelineData.map((item, index) => {
                const Icon = item.icon;
                const isEven = index % 2 === 0;

                return (
                  <div
                    key={index}
                    className={`relative flex items-start mb-8 md:mb-12 ${
                      isEven ? "md:flex-row-reverse" : ""
                    }`}
                  >
                    {/* Timeline dot */}
                    <div className="absolute left-6 md:left-1/2 w-3 h-3 bg-white border-2 border-gray-600 rounded-full md:transform md:-translate-x-1.5 z-10"></div>

                    {/* Content */}
                    <div
                      className={`ml-16 md:ml-0 md:w-1/2 ${
                        isEven ? "md:pr-8 md:text-right" : "md:pl-8"
                      }`}
                    >
                      <div className="group">
                        <div
                          className={`flex items-center gap-3 mb-2 ${
                            isEven ? "md:justify-end" : ""
                          }`}
                        >
                          <div
                            className={`p-2 rounded-lg bg-gray-800 text-gray-300 ${
                              isEven ? "md:order-2" : ""
                            }`}
                          >
                            <Icon className="w-4 h-4" />
                          </div>
                          <span
                            className={`text-xs font-medium text-gray-400 ${
                              isEven ? "md:order-1" : ""
                            }`}
                          >
                            {item.date}
                          </span>
                        </div>
                        <h3 className="text-lg font-semibold text-white mb-2 group-hover:text-gray-300 transition-colors duration-200">
                          {item.title}
                        </h3>
                        <p className="text-sm text-gray-400 leading-relaxed">
                          {item.content}
                        </p>
                      </div>
                    </div>
                  </div>
                );
              })}
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default CompanyBackgroundSection;
