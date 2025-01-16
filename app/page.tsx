"use client";

import React from "react";
import HeroSection from "@/components/landing/hero-section";
import FeaturesSection from "@/components/landing/features-section";
import Quote from "@/components/landing/quote";


export default function Component() {
  return (
      <main className="flex-1 ">
        <HeroSection />
        <FeaturesSection />
        <Quote/>
      </main>
      
 
  );
}
