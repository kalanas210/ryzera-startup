"use client";

import { useState, useEffect } from "react";
import { motion, useScroll, useTransform } from "framer-motion";
import Link from "next/link";
import { Menu, X } from "lucide-react";
import MobileNav from "./MobileNav";
import NavLink from "./NavLink";

export default function Navigation() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const { scrollY } = useScroll();
  
  // Transform navigation based on scroll position
  const navWidth = useTransform(
    scrollY,
    [0, 100],
    ["100%", "min(600px, 90%)"]
  );
  
  const navBackground = useTransform(
    scrollY,
    [0, 100],
    ["rgba(15, 23, 42, 0)", "rgba(15, 23, 42, 0.85)"]
  );

  const navMargin = useTransform(
    scrollY,
    [0, 100],
    ["0px", "16px"]
  );
  
  useEffect(() => {
    if (mobileMenuOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "auto";
    }
    
    return () => {
      document.body.style.overflow = "auto";
    };
  }, [mobileMenuOpen]);

  const navLinks = [
    { name: "Home", href: "/" },
    { name: "Services", href: "/services" },
    { name: "About", href: "/about" },
    { name: "Clients", href: "/#clients" },
    { name: "Contact", href: "/#contact" },
  ];

  return (
    <header className="fixed top-0 left-0 w-full z-50 flex justify-center px-4">
      <motion.nav
        style={{
          width: navWidth,
          backgroundColor: navBackground,
          marginTop: navMargin,
        }}
        className="flex items-center justify-between h-16 rounded-full backdrop-blur-md border border-white/10 px-4 md:px-8"
      >
        <Link href="/" className="font-bold text-xl text-white">
          <span className="text-blue-500">Ryzera</span>
        </Link>
        
        {/* Desktop Navigation */}
        <div className="hidden md:flex items-center space-x-2">
          {navLinks.map((link) => (
            <NavLink key={link.name} href={link.href} name={link.name} />
          ))}
        </div>
        
        {/* Mobile Navigation Toggle */}
        <div className="md:hidden flex items-center">
          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="rounded-md p-2 text-white hover:bg-blue-500/20 transition-colors"
            aria-label="Toggle menu"
          >
            {mobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
      </motion.nav>
      
      {/* Mobile Navigation Menu */}
      <MobileNav 
        isOpen={mobileMenuOpen} 
        onClose={() => setMobileMenuOpen(false)} 
        links={navLinks} 
      />
    </header>
  );
}