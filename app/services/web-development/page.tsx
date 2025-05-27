import { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { Check, Code2, ArrowRight } from "lucide-react";

export const metadata: Metadata = {
  title: "Web Development Services | Ryzera Technologies",
  description: "Expert web application development services using modern frameworks like React, Next.js, and Node.js to build scalable and responsive web solutions.",
};

const technologies = [
  "React", "Next.js", "Node.js", "TypeScript", 
  "MongoDB", "PostgreSQL", "Docker", "AWS"
];

const features = [
  "Responsive Design for All Devices",
  "Progressive Web Applications (PWAs)",
  "Full-Stack Development",
  "API Integration",
  "Performance Optimization",
  "Security Hardening",
  "SEO-Friendly Architecture",
  "Intuitive Admin Dashboards"
];

const projects = [
  {
    title: "E-Commerce Platform",
    description: "Complete online shopping solution with payment integration and inventory management.",
    image: "https://images.pexels.com/photos/230544/pexels-photo-230544.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
  },
  {
    title: "Transport Management System",
    description: "Custom web application for managing railway schedules and ticket bookings.",
    image: "https://images.pexels.com/photos/2678456/pexels-photo-2678456.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
  },
  {
    title: "Healthcare Portal",
    description: "Patient management system with appointment scheduling and medical records.",
    image: "https://images.pexels.com/photos/7579831/pexels-photo-7579831.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
  }
];

export default function WebDevelopmentPage() {
  return (
    <div className="min-h-screen pt-24 pb-20">
      {/* Hero Section */}
      <section className="relative">
        <div className="absolute inset-0 bg-gradient-to-b from-blue-950/30 via-background to-background -z-10" />
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center mb-16">
            <h1 className="text-4xl md:text-5xl font-bold mb-6">
              Web Development with{" "}
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-blue-600">
                Technology That's Here to Stay
              </span>
            </h1>
            <p className="text-lg text-white/80 mb-8">
              Build secure, scalable, and responsive web applications that grow with your business needs using modern frameworks and best practices.
            </p>
            
            <div className="flex flex-wrap justify-center gap-3 mb-8">
              {technologies.map((tech) => (
                <span 
                  key={tech} 
                  className="bg-blue-500/10 text-blue-400 px-3 py-1 rounded-full text-sm font-medium"
                >
                  {tech}
                </span>
              ))}
            </div>
            
            <Link href="/#contact">
              <Button variant="glow" size="lg">
                Discuss Your Project
              </Button>
            </Link>
          </div>
        </div>
      </section>
      
      {/* Features Section */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl font-bold mb-8 text-center">
              What We <span className="text-blue-500">Offer</span>
            </h2>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-12">
              {features.map((feature, index) => (
                <div 
                  key={index} 
                  className="flex items-start gap-3 bg-blue-950/10 border border-white/10 rounded-lg p-4"
                >
                  <div className="text-blue-500 mt-1">
                    <Check size={20} />
                  </div>
                  <span>{feature}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>
      
      {/* Process Section */}
      <section className="py-16 bg-blue-950/10">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl font-bold mb-8 text-center">
              Our Development <span className="text-blue-500">Process</span>
            </h2>
            
            <div className="relative">
              {/* Connecting line */}
              <div className="absolute left-16 top-0 bottom-0 w-0.5 bg-blue-500/30 hidden md:block" />
              
              <div className="space-y-16">
                {/* Step 1 */}
                <div className="relative flex flex-col md:flex-row gap-8 items-start">
                  <div className="flex-shrink-0 w-16 h-16 flex items-center justify-center bg-blue-500/20 rounded-full border border-blue-500/50 z-10">
                    <span className="text-xl font-bold">1</span>
                  </div>
                  <div>
                    <h3 className="text-xl font-bold mb-3">Discovery & Planning</h3>
                    <p className="text-white/70 mb-4">
                      We begin by understanding your business goals, target audience, and project requirements. This phase includes market research, competitive analysis, and defining the scope of work.
                    </p>
                  </div>
                </div>
                
                {/* Step 2 */}
                <div className="relative flex flex-col md:flex-row gap-8 items-start">
                  <div className="flex-shrink-0 w-16 h-16 flex items-center justify-center bg-blue-500/20 rounded-full border border-blue-500/50 z-10">
                    <span className="text-xl font-bold">2</span>
                  </div>
                  <div>
                    <h3 className="text-xl font-bold mb-3">Design & Prototyping</h3>
                    <p className="text-white/70 mb-4">
                      Our designers create wireframes and visual designs that align with your brand identity. We develop interactive prototypes to visualize the user flow and interface before development begins.
                    </p>
                  </div>
                </div>
                
                {/* Step 3 */}
                <div className="relative flex flex-col md:flex-row gap-8 items-start">
                  <div className="flex-shrink-0 w-16 h-16 flex items-center justify-center bg-blue-500/20 rounded-full border border-blue-500/50 z-10">
                    <span className="text-xl font-bold">3</span>
                  </div>
                  <div>
                    <h3 className="text-xl font-bold mb-3">Development</h3>
                    <p className="text-white/70 mb-4">
                      Our developers build your application using modern frameworks and best practices. We follow an agile approach with regular sprints and deliverables to ensure transparency and flexibility.
                    </p>
                  </div>
                </div>
                
                {/* Step 4 */}
                <div className="relative flex flex-col md:flex-row gap-8 items-start">
                  <div className="flex-shrink-0 w-16 h-16 flex items-center justify-center bg-blue-500/20 rounded-full border border-blue-500/50 z-10">
                    <span className="text-xl font-bold">4</span>
                  </div>
                  <div>
                    <h3 className="text-xl font-bold mb-3">Testing & Deployment</h3>
                    <p className="text-white/70 mb-4">
                      We conduct thorough testing to ensure functionality, performance, and security. Once approved, we deploy your application and provide training and documentation.
                    </p>
                  </div>
                </div>
                
                {/* Step 5 */}
                <div className="relative flex flex-col md:flex-row gap-8 items-start">
                  <div className="flex-shrink-0 w-16 h-16 flex items-center justify-center bg-blue-500/20 rounded-full border border-blue-500/50 z-10">
                    <span className="text-xl font-bold">5</span>
                  </div>
                  <div>
                    <h3 className="text-xl font-bold mb-3">Maintenance & Support</h3>
                    <p className="text-white/70 mb-4">
                      We provide ongoing maintenance, updates, and support to ensure your application continues to run smoothly and stays up-to-date with evolving technology.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      
      {/* Portfolio Section */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl font-bold mb-8 text-center">
              Featured <span className="text-blue-500">Projects</span>
            </h2>
            
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-12">
              {projects.map((project, index) => (
                <div 
                  key={index} 
                  className="bg-blue-950/10 border border-white/10 rounded-xl overflow-hidden group hover:border-blue-500/30 transition-all duration-300"
                >
                  <div className="relative h-48">
                    <Image
                      src={project.image}
                      alt={project.title}
                      fill
                      className="object-cover transition-transform duration-700 group-hover:scale-110"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-blue-950 to-transparent opacity-80" />
                  </div>
                  <div className="p-6">
                    <h3 className="text-xl font-bold mb-2">{project.title}</h3>
                    <p className="text-white/70">{project.description}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>
      
      {/* CTA Section */}
      <section className="py-16 bg-gradient-to-r from-blue-900/20 to-blue-950/20">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto text-center">
            <h2 className="text-3xl font-bold mb-6">
              Ready to build your web application?
            </h2>
            <p className="text-lg text-white/80 mb-8">
              Let's discuss how we can help you achieve your business goals with a custom web solution.
            </p>
            <Link href="/#contact">
              <Button variant="glow" size="lg" className="group">
                Get Started
                <ArrowRight className="ml-2 h-5 w-5 group-hover:translate-x-1 transition-transform" />
              </Button>
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}