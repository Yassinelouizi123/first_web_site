"use client";

import { AnimatePresence, motion } from "framer-motion";
import { MenuIcon, LinkedinIcon } from "lucide-react";
import React, { useState } from "react";
import { Button } from "../ui/button";
import Link from "next/link";
import Image from "next/image";
import { usePathname, useRouter } from "next/navigation";

function NavLinks() {
  const router = useRouter();
  const pathname = usePathname();

  const handleScrollToServices = () => {
    if (pathname === "/") {
      // If on the homepage, scroll to the services section
      const servicesSection = document.getElementById("services-section");
      if (servicesSection) {
        servicesSection.scrollIntoView({ behavior: "smooth" });
      }
    } else {
      // If on another page, navigate to the homepage
      router.push("/");

      // Wait for the page to load, then scroll to the services section
      setTimeout(() => {
        const servicesSection = document.getElementById("services-section");
        if (servicesSection) {
          servicesSection.scrollIntoView({ behavior: "smooth" });
        }
      }, 500); // Adjust the delay if needed
    }
  };

  return (
    <>
      <motion.div whileHover={{ scale: 1.1 }}>
        <Link
          href="/"
          className="text-xl font-medium hover:underline underline-offset-4 text-white" // Changed from text-2xl to text-xl
          prefetch={false}
        >
          Accueil
        </Link>
      </motion.div>
      <motion.div whileHover={{ scale: 1.1 }}>
        <Link
          href="/notreIdntite"
          className="text-xl font-medium hover:underline underline-offset-4 text-white" // Changed from text-2xl to text-xl
          prefetch={false}
        >
          Notre identité
        </Link>
      </motion.div>
      <motion.div whileHover={{ scale: 1.1 }}>
        <button
          onClick={handleScrollToServices}
          className="text-xl font-medium hover:underline underline-offset-4 text-white" // Changed from text-2xl to text-xl
        >
          Nos services
        </button>
      </motion.div>
      <motion.div whileHover={{ scale: 1.1 }}>
        <Link
          href="/contact"
          className="text-xl font-medium hover:underline underline-offset-4 text-white" // Changed from text-2xl to text-xl
          prefetch={false}
        >
          Contact
        </Link>
      </motion.div>
    </>
  );
}

// SiteNav component (default export)
function SiteNav() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => setIsMenuOpen(!isMenuOpen);

  return (
    <>
      <header className="sticky top-0 z-40 w-full bg-green-600">
        <div className="container flex h-16 items-center justify-between px-4 md:px-6">
          <Link href="/" className="flex items-center gap-2" prefetch={false}>
            <motion.div
              whileHover={{ rotate: 360 }}
              transition={{ duration: 0.5 }}
            >
              <Image
                src="/logo.png"
                alt="Logo"
                width={140}
                height={140}
                className="h-6 w-6"
              />
            </motion.div>
            <span className="text-lg font-semibold text-white">Upmind Business</span>
          </Link>
          <nav className="hidden gap-4 md:flex">
            <NavLinks />
          </nav>
          <div className="flex items-center gap-2">
            <Link
              href="https://www.linkedin.com/in/abderrahmane-chafik-5458492b8/"
              target="_blank"
            >
              <LinkedinIcon className="h-6 w-6 text-white" />
            </Link>
            <button className="md:hidden ml-8" onClick={toggleMenu}>
              <MenuIcon className="h-6 w-6 text-white" />
            </button>
          </div>
        </div>
      </header>
      <AnimatePresence>
        {isMenuOpen && (
          <motion.div
            initial={{ opacity: 0, y: -50 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -50 }}
            className="md:hidden fixed inset-0 z-50 bg-green-600"
            onClick={() => setIsMenuOpen(false)}
          >
            <div className="flex flex-col items-center justify-center h-full gap-6">
              <NavLinks />
              <Button variant="secondary" className="mt-4" onClick={toggleMenu}>
                Close
              </Button>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}

export default SiteNav;