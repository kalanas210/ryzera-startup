"use client";

import { useRef } from "react";
import { motion, useInView } from "framer-motion";
import Link from "next/link";
import { 
  BarChart3, 
  Cloud, 
  Code2, 
  Database, 
  Smartphone, 
  Building2 
} from "lucide-react";
import ServiceCard from "./ServiceCard";

const services = [
    //services section updated
  {
    id: "government",
    title: "Government Software Projects",
    description: "We proudly support national progress by developing software for the Sri Lankan government, including the Ministry of Transport and Railway Department.",
    icon: Building2,
    href: "/services/government",
    featured: true,
  },
  {
    id: "web",
    title: "Web Applications",
    description: "Build secure and scalable web applications that grow with your business needs.",
    icon: Code2,
    href: "/services/web-development",
  },
  {
    id: "ai",
    title: "AI & Machine Learning Solutions",
    description: "Automate tasks, personalize user experiences, and make smarter decisions with custom AI models and intelligent agents.",
    icon: Database,
    href: "/services/ai-ml",
  },
  {
    id: "mobile",
    title: "Mobile Applications",
    description: "Create intuitive mobile experiences on Android and iOS, tailored to your users and business goals.",
    icon: Smartphone,
    href: "/services/mobile",
  },
  {
    id: "project",
    title: "Project Management Tools",
    description: "Empower teams to work efficiently with tailored tools that streamline workflows, communication, and task tracking.",
    icon: BarChart3,
    href: "/services/project-management",
  },
  {
    id: "cloud",
    title: "Cloud Solutions",
    description: "Scalable infrastructure and secure cloud architecture. We design, deploy, and manage cloud-based systems using AWS, Azure, and GCP.",
    icon: Cloud,
    href: "/services/cloud",
  }
];

export default function ServicesSection() {
  const sectionRef = useRef<HTMLDivElement>(null);
  const isInView = useInView(sectionRef, { once: true, amount: 0.1 });
  
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
      },
    },
  };
  
  return (
    <section 
      id="services" 
      ref={sectionRef} 
      className="py-20 bg-gradient-to-b from-background to-blue-950/10"
    >
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            What We Can{" "}
            <span className="text-blue-500">Build for You</span>
          </h2>
          <p className="text-lg text-white/70 max-w-2xl mx-auto">
            Discover how our expertise can transform your business with cutting-edge solutions tailored to your needs.
          </p>
        </motion.div>
        
        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate={isInView ? "visible" : "hidden"}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
        >
          {services.map((service) => (
            <ServiceCard key={service.id} service={service} />
          ))}
        </motion.div>
      </div>
    </section>
  );
}