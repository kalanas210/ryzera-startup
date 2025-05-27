"use client";

import { useRef } from "react";
import { motion, useInView } from "framer-motion";
import { Building2, Building, RocketIcon } from "lucide-react";

export default function ClientsSection() {
  const sectionRef = useRef<HTMLDivElement>(null);
  const isInView = useInView(sectionRef, { once: true, amount: 0.2 });
  
  const clientCategories = [
    {
      id: "governments",
      title: "Governments",
      description: "Supporting digital transformation in public sector",
      icon: Building2,
    },
    {
      id: "enterprises",
      title: "Enterprises",
      description: "Scaling business operations with technology",
      icon: Building,
    },
    {
      id: "startups",
      title: "Startups",
      description: "Building innovative products from concept to launch",
      icon: RocketIcon,
    },
  ];
  
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
      },
    },
  };
  
  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.6 } },
  };
  
  return (
    <section 
      id="clients" 
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
            Who We{" "}
            <span className="text-blue-500">Work With</span>
          </h2>
          <p className="text-lg text-white/70 max-w-2xl mx-auto">
            We partner with organizations across different sectors to deliver innovative technology solutions.
          </p>
        </motion.div>
        
        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate={isInView ? "visible" : "hidden"}
          className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16"
        >
          {clientCategories.map((category) => (
            <motion.div
              key={category.id}
              variants={itemVariants}
              className="bg-blue-950/10 border border-white/10 rounded-xl p-8 text-center backdrop-blur-sm"
            >
              <div className="inline-flex items-center justify-center w-16 h-16 bg-blue-500/20 rounded-full mb-6 text-blue-400">
                <category.icon size={32} />
              </div>
              <h3 className="text-xl font-bold mb-3">{category.title}</h3>
              <p className="text-white/70">{category.description}</p>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}