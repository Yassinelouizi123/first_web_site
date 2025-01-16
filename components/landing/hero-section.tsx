"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import React, { useState, useEffect } from "react";
import Image from "next/image";
import { ChevronLeft, ChevronRight, ChevronDown } from "lucide-react";

const images = [
  "/business-consulting-1.jpg",
  "/business-consulting-2.jpg",
  "/business-consulting-3.jpg",
];

function HeroSection() {
  const [currentImage, setCurrentImage] = useState(0);

  // Function to go to the next image
  const nextImage = () => {
    setCurrentImage((prev) => (prev + 1) % images.length);
  };

  // Function to go to the previous image
  const prevImage = () => {
    setCurrentImage((prev) => (prev - 1 + images.length) % images.length);
  };

  // Automatically cycle through images every 10 seconds
  useEffect(() => {
    const interval = setInterval(() => {
      nextImage();
    }, 10000); // 10 seconds

    // Cleanup the interval on component unmount
    return () => clearInterval(interval);
  }, []); // Empty dependency array ensures this runs only once on mount

  const handleScrollToFeatures = () => {
    const offset = window.innerWidth < 768 ? 60 : 0; // Adjust scroll offset for mobile
    const target = document.getElementById("services-section");
    if (target) {
      const targetPosition =
        target.getBoundingClientRect().top + window.pageYOffset - offset;
      window.scrollTo({ top: targetPosition, behavior: "smooth" });
    }
  };

  return (
    <motion.section
      initial={{ opacity: 0, y: 50 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
      className="relative w-full h-screen flex flex-col justify-center overflow-hidden"
    >
      {/* Background images with smooth transitions */}
      {images.map((src, index) => (
        <motion.div
          key={src}
          initial={{ opacity: 0 }}
          animate={{ opacity: index === currentImage ? 1 : 0 }}
          transition={{ duration: 2 }} // Adjust the duration for slower transitions
          className="absolute inset-0"
        >
          <Image
            src={src || "/placeholder.svg"}
            alt={`Business Consulting ${index + 1}`}
            fill
            className="object-cover"
            priority
          />
        </motion.div>
      ))}
      <div className="absolute inset-0 bg-black bg-opacity-50" />

      {/* Hero content */}
      <div className="container relative z-10 flex flex-col items-center justify-center gap-4 px-4 text-center md:px-6 lg:gap-10 h-full">
        <div className="space-y-3 items-center">
          <h1 className="text-4xl font-bold tracking-tighter sm:text-5xl md:text-6xl text-white">
            Upmind Business Consulting, votre partenaire en conseil d'entreprise.
          </h1>
          <p className="mx-auto max-w-[700px] text-white md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
            Transformer les entreprises grâce à des conseils d'experts en gestion
            et en organisation
          </p>
        </div>

        {/* Buttons */}
        <div className="flex flex-col gap-8 min-[600px]:flex-row justify-center">
          <motion.div whileHover={{ scale: 1.2 }} whileTap={{ scale: 0.95 }}>
            <button
              onClick={handleScrollToFeatures}
              className="inline-flex h-20 items-center justify-center rounded-md bg-green-600 px-12 text-xl font-medium text-white shadow transition-colors hover:bg-green-500 focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-white disabled:pointer-events-none disabled:opacity-50"
            >
              Nos services
            </button>
          </motion.div>
          <motion.div whileHover={{ scale: 1.2 }} whileTap={{ scale: 0.95 }}>
            <Link
              href="/contact"
              className="inline-flex h-20 items-center justify-center rounded-md border border-white bg-transparent px-12 text-xl font-medium text-white shadow-sm transition-colors hover:bg-white hover:text-black focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-white disabled:pointer-events-none disabled:opacity-50"
            >
              Contactez-nous
            </Link>
          </motion.div>
        </div>
      </div>

      {/* Image navigation buttons */}
      <button
        onClick={prevImage}
        className="absolute left-4 top-1/2 -translate-y-1/2 bg-black bg-opacity-50 p-2 rounded-full text-white z-20"
        aria-label="Previous image"
      >
        <ChevronLeft className="h-6 w-6" />
      </button>
      <button
        onClick={nextImage}
        className="absolute right-4 top-1/2 -translate-y-1/2 bg-black bg-opacity-50 p-2 rounded-full text-white z-20"
        aria-label="Next image"
      >
        <ChevronRight className="h-6 w-6" />
      </button>

      {/* Scroll indicator (chevron button) */}
      <div className="flex justify-center mt-auto pb-8">
        <button
          onClick={handleScrollToFeatures}
          className="text-white bg-black bg-opacity-50 rounded-full p-4 animate-bounce"
          aria-label="Scroll Down"
        >
          <ChevronDown className="h-12 w-12" />
        </button>
      </div>
    </motion.section>
  );
}

export default HeroSection;