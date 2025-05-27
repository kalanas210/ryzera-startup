"use client";

import { useState, useRef, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ChevronLeft, ChevronRight, Quote } from "lucide-react";

const testimonials = [
  {
    id: 1,
    content: "Ryzera helped us streamline parcel tracking across the railway network. Their professionalism and expertise stood out.",
    author: "Senior IT Officer",
    company: "Sri Lanka Railway Department",
  },
  {
    id: 2,
    content: "Ryzera helped us manage our branches island-wide by creating a project management system.",
    author: "CEO",
    company: "Solid Graphics Pvt Ltd",
  },
  {
    id: 3,
    content: "Their AI solutions have transformed how we process customer data, saving us countless hours of manual work while improving accuracy.",
    author: "Director of Operations",
    company: "GlobalNet Enterprises",
  },
  {
    id: 4,
    content: "Working with Ryzera has been a game-changer for our startup. Their technical expertise and attention to detail exceeded our expectations.",
    author: "Founder",
    company: "InnovateTech Solutions",
  },
];

export default function TestimonialsSection() {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [direction, setDirection] = useState(0);
  const intervalRef = useRef<NodeJS.Timeout | null>(null);
  
  const slideVariants = {
    enter: (direction: number) => ({
      x: direction > 0 ? 500 : -500,
      opacity: 0,
    }),
    center: {
      x: 0,
      opacity: 1,
    },
    exit: (direction: number) => ({
      x: direction < 0 ? 500 : -500,
      opacity: 0,
    }),
  };
  
  const handleNext = () => {
    setDirection(1);
    setCurrentIndex((prevIndex) => 
      prevIndex === testimonials.length - 1 ? 0 : prevIndex + 1
    );
    resetInterval();
  };
  
  const handlePrev = () => {
    setDirection(-1);
    setCurrentIndex((prevIndex) => 
      prevIndex === 0 ? testimonials.length - 1 : prevIndex - 1
    );
    resetInterval();
  };
  
  const handleDotClick = (index: number) => {
    setDirection(index > currentIndex ? 1 : -1);
    setCurrentIndex(index);
    resetInterval();
  };
  
  const resetInterval = () => {
    if (intervalRef.current) {
      clearInterval(intervalRef.current);
    }
    intervalRef.current = setInterval(handleNext, 6000);
  };
  
  useEffect(() => {
    intervalRef.current = setInterval(handleNext, 6000);
    
    return () => {
      if (intervalRef.current) {
        clearInterval(intervalRef.current);
      }
    };
  }, []);
  
  return (
    <section className="py-20 bg-gradient-to-b from-background to-blue-950/10">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            What Our{" "}
            <span className="text-blue-500">Clients Say</span>
          </h2>
          <p className="text-lg text-white/70 max-w-2xl mx-auto">
            Hear from organizations that have partnered with us on their digital transformation journey.
          </p>
        </div>
        
        <div className="relative max-w-4xl mx-auto">
          <div className="absolute -top-12 left-1/2 transform -translate-x-1/2 text-blue-500/20">
            <Quote size={120} />
          </div>
          
          <div className="relative overflow-hidden bg-blue-950/10 border border-white/10 rounded-xl p-8 md:p-12 min-h-[300px] flex items-center">
            <AnimatePresence custom={direction} initial={false} mode="wait">
              <motion.div
                key={currentIndex}
                custom={direction}
                variants={slideVariants}
                initial="enter"
                animate="center"
                exit="exit"
                transition={{ duration: 0.5, ease: "easeInOut" }}
                className="w-full text-center"
              >
                <p className="text-lg md:text-xl text-white/90 mb-8 italic relative z-10">
                  "{testimonials[currentIndex].content}"
                </p>
                <div>
                  <p className="font-semibold text-white">
                    {testimonials[currentIndex].author}
                  </p>
                  <p className="text-white/70">
                    {testimonials[currentIndex].company}
                  </p>
                </div>
              </motion.div>
            </AnimatePresence>
          </div>
          
          <div className="flex justify-center mt-8 space-x-2">
            {testimonials.map((_, index) => (
              <button
                key={index}
                onClick={() => handleDotClick(index)}
                className={`w-3 h-3 rounded-full transition-all duration-300 ${
                  index === currentIndex
                    ? "bg-blue-500 w-8"
                    : "bg-white/30 hover:bg-white/50"
                }`}
                aria-label={`Go to testimonial ${index + 1}`}
              />
            ))}
          </div>
          
          <button
            onClick={handlePrev}
            className="absolute top-1/2 left-4 transform -translate-y-1/2 w-10 h-10 rounded-full bg-blue-500/20 text-white flex items-center justify-center hover:bg-blue-500/40 transition-colors"
            aria-label="Previous testimonial"
          >
            <ChevronLeft size={24} />
          </button>
          
          <button
            onClick={handleNext}
            className="absolute top-1/2 right-4 transform -translate-y-1/2 w-10 h-10 rounded-full bg-blue-500/20 text-white flex items-center justify-center hover:bg-blue-500/40 transition-colors"
            aria-label="Next testimonial"
          >
            <ChevronRight size={24} />
          </button>
        </div>
      </div>
    </section>
  );
}