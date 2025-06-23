import { motion, useInView } from "framer-motion";
import { useRef } from "react";

const CoreValuesSection = () => {
  const titleRef = useRef(null);
  const isTitleInView = useInView(titleRef, { once: true, margin: "-100px 0px" });
  
  // Create refs for each value card
  const valueRef1 = useRef(null);
  const valueRef2 = useRef(null);
  const valueRef3 = useRef(null);
  
  // Create inView states for each value card
  const isValue1InView = useInView(valueRef1, { once: true, margin: "-100px 0px" });
  const isValue2InView = useInView(valueRef2, { once: true, margin: "-100px 0px" });
  const isValue3InView = useInView(valueRef3, { once: true, margin: "-100px 0px" });
  
  // Core Values data
  const coreValues = [
    {
      title: 'Partnership',
      description: 'We build lasting relationships with every client, working as an extension of their team.',
      icon: (
        <svg className="w-8 h-8 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 3v4M3 5h4M6 17v4m-2-2h4m5-16l2.286 6.857L21 12l-5.714 2.143L13 21l-2.286-6.857L5 12l5.714-2.143L13 3z"></path>
        </svg>
      )
    },
    {
      title: 'Industry-Standard Software',
      description: 'We are proficient in industry-standard platforms including SpatialNet, Magellan, Bentley V8i, AutoCAD MAP 2D, QGIS, and LodeData for precision and compatibility.',
      icon: (
        <svg className="w-8 h-8 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 3v2m6-2v2M9 19v2m6-2v2M5 9H3m2 6H3m18-6h-2m2 6h-2M7 19h10a2 2 0 002-2V7a2 2 0 00-2-2H7a2 2 0 00-2 2v10a2 2 0 002 2zM9 9h6v6H9V9z"></path>
        </svg>
      )
    },
    {
      title: 'Quality Assurance',
      description: 'Our rigorous quality control processes ensure that every design meets or exceeds client specifications and industry standards.',
      icon: (
        <svg className="w-8 h-8 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"></path>
        </svg>
      )
    }
  ];

  return (
    <section className="py-16 md:py-24">
      <div className="container mx-auto px-4">
        <motion.div
          ref={titleRef}
          initial={{ opacity: 0 }}
          animate={isTitleInView ? { opacity: 1 } : { opacity: 0 }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl md:text-4xl font-bold text-gray-800 mb-4">
            Our Core Values
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            These principles guide everything we do
          </p>
          <div className="w-24 h-1 bg-blue-600 mx-auto mt-6"></div>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {coreValues.map((value, index) => {
            // Use the appropriate ref and inView state based on index
            const currentRef = index === 0 ? valueRef1 : index === 1 ? valueRef2 : valueRef3;
            const isInView = index === 0 ? isValue1InView : index === 1 ? isValue2InView : isValue3InView;
            
            return (
              <motion.div
                key={index}
                ref={currentRef}
                initial={{ opacity: 0, y: 20 }}
                animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="bg-white rounded-lg shadow-lg p-8 text-center"
              >
                <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-6">
                  {value.icon}
                </div>
                <h3 className="text-xl font-bold text-gray-800 mb-3">{value.title}</h3>
                <p className="text-gray-600">{value.description}</p>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default CoreValuesSection;
