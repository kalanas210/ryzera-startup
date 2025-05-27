import { Metadata } from "next";
import Link from "next/link";
import { 
  BarChart3, 
  Building2, 
  Cloud, 
  Code2, 
  Database, 
  Smartphone 
} from "lucide-react";
import { Button } from "@/components/ui/button";

export const metadata: Metadata = {
  title: "Our Services | Ryzera Technologies",
  description: "Discover our comprehensive range of technology services from web and mobile applications to AI solutions and government software.",
};

const services = [
  {
    id: "government",
    title: "Government Software Projects",
    description: "We proudly support national progress by developing software for the Sri Lankan government, including the Ministry of Transport and Railway Department.",
    icon: Building2,
    href: "/services/government",
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

export default function ServicesPage() {
  return (
    <div className="min-h-screen pt-24 pb-20">
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto text-center mb-16">
          <h1 className="text-4xl md:text-5xl font-bold mb-6">
            Our{" "}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-blue-600">
              Services
            </span>
          </h1>
          <p className="text-lg text-white/80 mb-8">
            We provide a wide range of technology solutions tailored to your business needs. From custom software development to AI integration, we're here to help you succeed.
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
          {services.map((service) => (
            <div 
              key={service.id}
              className="bg-blue-950/10 border border-white/10 rounded-xl overflow-hidden group hover:border-blue-500/30 transition-all duration-300"
            >
              <div className="p-8">
                <div className="mb-4 text-blue-500">
                  <service.icon size={40} strokeWidth={1.5} />
                </div>
                
                <h3 className="text-xl font-bold mb-3">{service.title}</h3>
                
                <p className="text-white/70 mb-6">
                  {service.description}
                </p>
                
                <Link href={service.href}>
                  <Button variant="blue-outline" className="w-full">
                    Learn More
                  </Button>
                </Link>
              </div>
            </div>
          ))}
        </div>
        
        <div className="max-w-4xl mx-auto bg-blue-950/10 border border-white/10 rounded-xl p-8 text-center">
          <h2 className="text-2xl font-bold mb-4">
            Not sure which service you need?
          </h2>
          <p className="text-white/70 mb-6">
            Contact our team for a consultation and we'll help you determine the best solution for your business.
          </p>
          <Link href="/#contact">
            <Button variant="glow" size="lg">
              Get in Touch
            </Button>
          </Link>
        </div>
      </div>
    </div>
  );
}