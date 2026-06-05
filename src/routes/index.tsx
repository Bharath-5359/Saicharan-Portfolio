import { createFileRoute } from "@tanstack/react-router";
import HeroSection from "@/components/HeroSection";
import AboutSection from "@/components/AboutSection";
import ProfessionalHighlightsSection from "@/components/ProfessionalHighlightsSection";
import ServicesSection from "@/components/ServicesSection";
import ProjectsSection from "@/components/ProjectsSection";
import WhatMakesMeDifferentSection from "@/components/WhatMakesMeDifferentSection";
import ContactSection from "@/components/ContactSection";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "Chandra Sai Charan Ramagiri — Digital Marketing Specialist" },
      { name: "description", content: "Portfolio of Chandra Sai Charan Ramagiri — Digital Marketing Specialist in Hyderabad. Performance marketing, lead generation, Google Ads, Meta Ads, SEO and growth campaigns." },
      { property: "og:title", content: "Chandra Sai Charan Ramagiri — Digital Marketing Specialist" },
      { property: "og:description", content: "Portfolio of Chandra Sai Charan Ramagiri — Digital Marketing Specialist in Hyderabad. Performance marketing, lead generation, Google Ads, Meta Ads, SEO and growth campaigns." },
    ],
  }),
  component: Index,
});

function Index() {
  return (
    <main
      className="relative w-full"
      style={{ overflowX: "clip", background: "#0C0C0C" }}
    >
      <HeroSection />
      <AboutSection />
      <ProfessionalHighlightsSection />
      <ServicesSection />
      <ProjectsSection />
      <WhatMakesMeDifferentSection />
      <ContactSection />
    </main>
  );
}
