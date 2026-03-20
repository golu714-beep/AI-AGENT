"use client";

import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import BentoGrid from "@/components/BentoGrid";
import Marquee from "@/components/Marquee";
import Testimonials from "@/components/Testimonials";
import Footer from "@/components/Footer";
import ServiceCovers from "@/components/ServiceCovers";
import BusinessUseCases from "@/components/BusinessUseCases";
import DeploymentProcess from "@/components/DeploymentProcess";
import Pricing from "@/components/Pricing";
import FeaturesShowcase from "@/components/FeaturesShowcase";
import OnboardingFlow from "@/components/OnboardingFlow";
import BusinessSolutions from "@/components/BusinessSolutions";
import ROICalculator from "@/components/ROICalculator";

export default function Home() {
  return (
    <main className="min-h-screen bg-[#050505] selection:bg-primary/30 selection:text-white overflow-x-hidden">
      <Navbar />
      <Hero />
      <Marquee />

      <BentoGrid />
      <BusinessSolutions />

      <FeaturesShowcase />

      <OnboardingFlow />

      <ServiceCovers />

      <DeploymentProcess />

      <BusinessUseCases />

      <ROICalculator />

      <Pricing />

      <Testimonials />

      <Footer />
    </main>
  );
}
