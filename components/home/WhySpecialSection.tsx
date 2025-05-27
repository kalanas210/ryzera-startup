"use client";

import { useRef } from "react";
import { motion, useInView } from "framer-motion";
import { 
  Award, 
  Clock, 
  Code, 
  HeartHandshake, 
  Shield, 
  Users2 
} from "lucide-react";

export default function WhySpecialSection() {
  const sectionRef = useRef<HTMLDivElement>(null);
  const isInView = useInView(sectionRef, { once: true, amount: 0.2 });
  
  const features = [
    {
      id: "local",
      title: "Local Expertise",
      description: "Deep understanding of the Sri Lankan market and its unique challenges.",
      icon: Users2,
    },
    {
      id: "government",
      title: "Government Experience",
      description: "Proven track record working with government institutions.",
      icon: Building2,
    },
    {
      id: "tech",
      title: "Cutting-Edge Technology",
      description: "We use the latest technologies to deliver modern, scalable solutions.",
      icon: Code,
    },
    {
      id: "security",
      title: "Security First",
      description: "Implementing robust security measures in all our solutions.",
      icon: Shield,
    },
    {
      id: "commitment",
      title: "Client Commitment",
      description: "Dedicated to your success with ongoing support and partnership.",
      icon: HeartHandshake,
    },
    {
      id: "delivery",
      title: "Timely Delivery",
      description: "We value your time and deliver projects within agreed timeframes.",
      icon: Clock,
    },
  ];
  
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
      },
    },
  };
  
  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.5 } },
  };
  
  return (
    <section 
      ref={sectionRef} 
      className="py-20 bg-gradient-to-b from-blue-950/10 to-background"
    >
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            Why We're{" "}
            <span className="text-blue-500">Special</span>
          </h2>
          <p className="text-lg text-white/70 max-w-2xl mx-auto">
            What sets us apart and makes us the ideal technology partner for your organization.
          </p>
        </motion.div>
        
        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate={isInView ? "visible" : "hidden"}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
        >
          {features.map((feature) => (
            <motion.div
              key={feature.id}
              variants={itemVariants}
              className="bg-blue-950/10 border border-white/10 rounded-xl p-6 flex items-start gap-4 hover:border-blue-500/30 transition-colors duration-300"
            >
              <div className="text-blue-500 mt-1">
                <feature.icon size={24} />
              </div>
              <div>
                <h3 className="text-xl font-bold mb-2">{feature.title}</h3>
                <p className="text-white/70">{feature.description}</p>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}

// Building2 icon is used in this component but not imported
// Let's add the missing import
import { Building2 } from "lucide-react";