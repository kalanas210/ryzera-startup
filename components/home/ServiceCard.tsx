"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import Link from "next/link";
import { ArrowRight, DivideIcon as LucideIcon } from "lucide-react";

interface ServiceProps {
  service: {
    id: string;
    title: string;
    description: string;
    icon: LucideIcon;
    href: string;
    featured?: boolean;
  };
}

export default function ServiceCard({ service }: ServiceProps) {
  const [isHovered, setIsHovered] = useState(false);
  
  const cardVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { 
      opacity: 1, 
      y: 0,
      transition: { duration: 0.5 }
    }
  };

  return (
    <motion.div
      variants={cardVariants}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
      className={`group relative overflow-hidden rounded-xl ${
        service.featured 
          ? "border-2 border-blue-500/50"
          : "border border-white/10"
      }`}
    >
      <Link href={service.href} className="block">
        <div className="absolute inset-0 bg-gradient-to-br from-blue-900/20 to-blue-950/30 backdrop-blur-sm z-0" />
        
        <div 
          className={`relative z-10 p-8 h-full flex flex-col ${
            service.featured ? "bg-blue-950/30" : ""
          }`}
        >
          {service.featured && (
            <div className="absolute top-3 right-3">
              <span className="bg-blue-500 text-xs font-medium px-2 py-1 rounded-full">
                Featured
              </span>
            </div>
          )}
          
          <div className={`mb-4 ${service.featured ? "text-blue-400" : "text-blue-500"}`}>
            <service.icon size={32} strokeWidth={1.5} />
          </div>
          
          <h3 className="text-xl font-bold mb-3">{service.title}</h3>
          
          <p className="text-white/70 mb-6 flex-grow">
            {service.description}
          </p>
          
          <div className="mt-auto flex items-center text-sm font-medium">
            <span className={`${service.featured ? "text-blue-400" : "text-blue-500"} group-hover:underline`}>
              Learn more
            </span>
            <motion.div
              animate={{ x: isHovered ? 5 : 0 }}
              transition={{ duration: 0.2 }}
            >
              <ArrowRight className="ml-2 h-4 w-4" />
            </motion.div>
          </div>
        </div>
      </Link>
      
      {/* Gradient border animation */}
      <div className="absolute inset-0 rounded-xl overflow-hidden pointer-events-none">
        <div
          className={`absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500 
            bg-gradient-to-r from-blue-600/0 via-blue-600/50 to-blue-400/0 z-0 
            ${isHovered ? "animate-gradient-x" : ""}`}
          style={{
            backgroundSize: "200% 100%",
          }}
        />
      </div>
    </motion.div>
  );
}