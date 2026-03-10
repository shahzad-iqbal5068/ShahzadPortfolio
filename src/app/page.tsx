import HeroSection from "@/components/sections/hero";
import AboutMeSection from "@/components/sections/about-me";
import SkillsSection from "@/components/sections/skills";
import ProjectsPreviewSection from "@/components/sections/projects-preview";
import ExperiencePreviewSection from "@/components/sections/experience-preview";
import FAQsSection from "@/components/sections/faqs";
import TestimonialsMarqueeSection from "@/components/sections/testimonials-marquee";
import ContactSection from "@/components/sections/contact";

export default function Home() {
  return (
    <>
      <HeroSection />
      <AboutMeSection />
      <SkillsSection />
      <ProjectsPreviewSection />
      <ExperiencePreviewSection />
      <FAQsSection />
      <TestimonialsMarqueeSection />
      <ContactSection />
    </>
  );
}
