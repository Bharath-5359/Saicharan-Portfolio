import { createFileRoute } from "@tanstack/react-router";
import { useState, useEffect } from "react";

import HeroSection from "@/components/HeroSection";
import AboutSection from "@/components/AboutSection";
import ProfessionalHighlightsSection from "@/components/ProfessionalHighlightsSection";
import ServicesSection from "@/components/ServicesSection";
import ProjectsSection from "@/components/ProjectsSection";
import WhatMakesMeDifferentSection from "@/components/WhatMakesMeDifferentSection";
import ContactSection from "@/components/ContactSection";
import Preloader from "@/components/Preloader";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      {
        title:
          "Chandra Sai Charan Ramagiri - Digital Marketing Specialist",
      },
      {
        name: "description",
        content:
          "Portfolio of Chandra Sai Charan Ramagiri - Digital Marketing Specialist in Hyderabad.",
      },
      {
        property: "og:title",
        content:
          "Chandra Sai Charan Ramagiri - Digital Marketing Specialist",
      },
      {
        property: "og:description",
        content:
          "Portfolio of Chandra Sai Charan Ramagiri - Digital Marketing Specialist in Hyderabad.",
      },
    ],
  }),
  component: Index,
});

function Index() {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    document.body.style.overflow = loading ? "hidden" : "auto";

    return () => {
      document.body.style.overflow = "auto";
    };
  }, [loading]);

  if (loading) {
    return (
      <Preloader
        onFinish={() => {
          setLoading(false);
        }}
      />
    );
  }

  return (
    <main
      className="relative w-full"
      style={{
        overflowX: "clip",
        background: "#0C0C0C",
      }}
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

export default Index;