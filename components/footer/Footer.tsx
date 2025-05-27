"use client";

import Link from "next/link";
import { 
  FacebookIcon, 
  TwitterIcon, 
  InstagramIcon, 
  LinkedinIcon,
  Mail,
  Phone,
  MapPin
} from "lucide-react";

export default function Footer() {
  const currentYear = new Date().getFullYear();
  
  const footerLinks = [
    {
      title: "Services",
      links: [
        { name: "Web Applications", href: "/services/web-development" },
        { name: "AI & ML Solutions", href: "/services/ai-ml" },
        { name: "Government Solutions", href: "/services/government" },
        { name: "Mobile Applications", href: "/services/mobile" },
        { name: "Project Management", href: "/services/project-management" },
        { name: "Cloud Solutions", href: "/services/cloud" },
      ],
    },
    {
      title: "Company",
      links: [
        { name: "About Us", href: "/about" },
        { name: "Our Team", href: "/team" },
        { name: "Careers", href: "/careers" },
        { name: "Blog", href: "/blog" },
      ],
    },
    {
      title: "Resources",
      links: [
        { name: "Case Studies", href: "/case-studies" },
        { name: "Testimonials", href: "/#testimonials" },
        { name: "FAQ", href: "/faq" },
        { name: "Privacy Policy", href: "/privacy" },
      ],
    },
  ];
  
  const socialLinks = [
    { name: "Facebook", icon: FacebookIcon, href: "#" },
    { name: "Twitter", icon: TwitterIcon, href: "#" },
    { name: "Instagram", icon: InstagramIcon, href: "#" },
    { name: "LinkedIn", icon: LinkedinIcon, href: "#" },
  ];
  
  return (
    <footer className="bg-blue-950/20 border-t border-white/10">
      {/* Main footer content */}
      <div className="container mx-auto px-4 py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-8">
          {/* Company info */}
          <div className="lg:col-span-2">
            <Link href="/" className="inline-block">
              <h2 className="text-2xl font-bold">
                <span className="text-blue-500">Ryzera</span> Technologies
              </h2>
            </Link>
            <p className="mt-4 text-white/70 max-w-md">
              We partner with enterprises, startups, and government organizations to build scalable software, AI products, and intelligent systems.
            </p>
            
            <div className="mt-6 space-y-3">
              <div className="flex items-center">
                <Mail className="text-blue-500 mr-3 h-5 w-5" />
                <a href="mailto:info@ryzera.com" className="text-white/70 hover:text-white transition-colors">
                  info@ryzera.com
                </a>
              </div>
              <div className="flex items-center">
                <Phone className="text-blue-500 mr-3 h-5 w-5" />
                <a href="tel:+94112345678" className="text-white/70 hover:text-white transition-colors">
                  +94 11 234 5678
                </a>
              </div>
              <div className="flex items-start">
                <MapPin className="text-blue-500 mr-3 h-5 w-5 mt-1" />
                <address className="text-white/70 not-italic">
                  42 Tech Avenue, Colombo 03,<br /> Sri Lanka
                </address>
              </div>
            </div>
          </div>
          
          {/* Links */}
          {footerLinks.map((section) => (
            <div key={section.title}>
              <h3 className="text-lg font-semibold mb-4">{section.title}</h3>
              <ul className="space-y-3">
                {section.links.map((link) => (
                  <li key={link.name}>
                    <Link 
                      href={link.href}
                      className="text-white/70 hover:text-white transition-colors"
                    >
                      {link.name}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
      
      {/* Bottom bar */}
      <div className="border-t border-white/10 py-6">
        <div className="container mx-auto px-4 flex flex-col md:flex-row justify-between items-center">
          <p className="text-white/60 text-sm">
            &copy; {currentYear} Ryzera Technologies. All rights reserved.
          </p>
          
          <div className="flex space-x-4 mt-4 md:mt-0">
            {socialLinks.map((social) => (
              <a 
                key={social.name}
                href={social.href}
                className="text-white/60 hover:text-blue-500 transition-colors"
                aria-label={social.name}
              >
                <social.icon className="h-5 w-5" />
              </a>
            ))}
          </div>
        </div>
      </div>
    </footer>
  );
}