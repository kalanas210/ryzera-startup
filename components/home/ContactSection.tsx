"use client";

import { useRef, useState } from "react";
import { motion, useInView } from "framer-motion";
import { Button } from "@/components/ui/button";
import { SendIcon } from "lucide-react";

export default function ContactSection() {
  const sectionRef = useRef<HTMLDivElement>(null);
  const isInView = useInView(sectionRef, { once: true, amount: 0.2 });
  const [formState, setFormState] = useState({
    name: "",
    email: "",
    message: "",
    submitted: false,
    loading: false,
  });
  
  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setFormState((prev) => ({ ...prev, loading: true }));
    
    // Simulate form submission
    setTimeout(() => {
      setFormState((prev) => ({
        ...prev,
        submitted: true,
        loading: false,
      }));
    }, 1500);
  };
  
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
      id="contact" 
      ref={sectionRef} 
      className="py-20 bg-gradient-to-b from-background to-blue-950/10 relative overflow-hidden"
    >
      {/* Background accent */}
      <div className="absolute top-0 left-0 w-full h-full overflow-hidden pointer-events-none">
        <div className="absolute -top-[400px] -left-[300px] w-[800px] h-[800px] rounded-full bg-blue-500/5 blur-3xl" />
        <div className="absolute -bottom-[400px] -right-[300px] w-[800px] h-[800px] rounded-full bg-blue-500/5 blur-3xl" />
      </div>
      
      <div className="container mx-auto px-4 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            Want to build something{" "}
            <span className="text-blue-500">impactful together?</span>
          </h2>
          <p className="text-lg text-white/70 max-w-2xl mx-auto">
            Let's talk about your next project. We're here to help you bring your ideas to life.
          </p>
        </motion.div>
        
        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate={isInView ? "visible" : "hidden"}
          className="max-w-2xl mx-auto bg-blue-950/10 border border-white/10 rounded-xl p-8 backdrop-blur-sm"
        >
          {formState.submitted ? (
            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.5 }}
              className="text-center py-12"
            >
              <div className="inline-flex items-center justify-center w-16 h-16 bg-blue-500/20 rounded-full mb-6 text-blue-400">
                <CheckIcon size={32} />
              </div>
              <h3 className="text-2xl font-bold mb-3">Message Sent!</h3>
              <p className="text-white/70 mb-6">
                Thank you for reaching out. We'll get back to you very soon.
              </p>
              <Button
                variant="glow"
                onClick={() => setFormState((prev) => ({ ...prev, submitted: false }))}
              >
                Send Another Message
              </Button>
            </motion.div>
          ) : (
            <form onSubmit={handleSubmit}>
              <motion.div 
                variants={itemVariants} 
                className="mb-6"
              >
                <label 
                  htmlFor="name" 
                  className="block text-sm font-medium text-white/80 mb-2"
                >
                  Your Name
                </label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  required
                  value={formState.name}
                  onChange={(e) => setFormState((prev) => ({ ...prev, name: e.target.value }))}
                  className="w-full px-4 py-3 bg-blue-950/20 border border-white/10 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500/50 text-white"
                  placeholder="John Doe"
                />
              </motion.div>
              
              <motion.div 
                variants={itemVariants} 
                className="mb-6"
              >
                <label 
                  htmlFor="email" 
                  className="block text-sm font-medium text-white/80 mb-2"
                >
                  Email Address
                </label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  required
                  value={formState.email}
                  onChange={(e) => setFormState((prev) => ({ ...prev, email: e.target.value }))}
                  className="w-full px-4 py-3 bg-blue-950/20 border border-white/10 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500/50 text-white"
                  placeholder="john@example.com"
                />
              </motion.div>
              
              <motion.div 
                variants={itemVariants} 
                className="mb-6"
              >
                <label 
                  htmlFor="message" 
                  className="block text-sm font-medium text-white/80 mb-2"
                >
                  Your Message
                </label>
                <textarea
                  id="message"
                  name="message"
                  required
                  value={formState.message}
                  onChange={(e) => setFormState((prev) => ({ ...prev, message: e.target.value }))}
                  className="w-full px-4 py-3 bg-blue-950/20 border border-white/10 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500/50 text-white min-h-[150px]"
                  placeholder="Tell us about your project..."
                />
              </motion.div>
              
              <motion.div variants={itemVariants}>
                <Button
                  type="submit"
                  variant="glow"
                  className="w-full"
                  disabled={formState.loading}
                >
                  {formState.loading ? (
                    <span className="flex items-center">
                      <svg className="animate-spin -ml-1 mr-3 h-5 w-5 text-white\" xmlns="http://www.w3.org/2000/svg\" fill="none\" viewBox="0 0 24 24">
                        <circle className="opacity-25\" cx="12\" cy="12\" r="10\" stroke="currentColor\" strokeWidth="4"></circle>
                        <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                      </svg>
                      Sending...
                    </span>
                  ) : (
                    <span className="flex items-center">
                      Contact Us
                      <SendIcon className="ml-2 h-4 w-4" />
                    </span>
                  )}
                </Button>
              </motion.div>
            </form>
          )}
        </motion.div>
      </div>
    </section>
  );
}

// CheckIcon is used in this component but not imported
// Let's add the missing import
import { Check as CheckIcon } from "lucide-react";