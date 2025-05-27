"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { motion } from "framer-motion";

interface NavLinkProps {
  href: string;
  name: string;
}

export default function NavLink({ href, name }: NavLinkProps) {
  const pathname = usePathname();
  const isActive = pathname === href || 
    (href !== "/" && pathname.startsWith(href));

  return (
    <Link
      href={href}
      className="relative px-3 py-2 rounded-md text-sm font-medium transition-colors"
    >
      <span
        className={`relative z-10 ${
          isActive ? "text-white" : "text-white/70 hover:text-white"
        }`}
      >
        {name}
      </span>
      {isActive && (
        <motion.span
          layoutId="activeNavLink"
          className="absolute inset-0 bg-blue-500/20 rounded-md"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.2 }}
        />
      )}
    </Link>
  );
}