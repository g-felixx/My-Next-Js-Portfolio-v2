import dynamic from "next/dynamic";
import Navbar from "@/components/Navbar";
import HeroSection from "@/components/HeroSection";
import TechMarquee from "@/components/TechMarquee";
import AboutSection from "@/components/AboutSection";
import ExperienceSection from "@/components/ExperienceSection";
import EducationSection from "@/components/EducationSection";
import CertificationsSection from "@/components/CertificationsSection";
import ProjectsSection from "@/components/ProjectsSection";
import SkillsSection from "@/components/SkillsSection";
import AskCta from "@/components/AskCta";
import ContactSection from "@/components/ContactSection";
import Footer from "@/components/Footer";
import FloatingMascot from "@/components/FloatingMascot";

const FluidCursor = dynamic(() => import("@/components/FluidCursor"));

export default function Home() {
  return (
    <>
      <FluidCursor />
      <Navbar />
      <main id="main-content" tabIndex={-1}>
        <HeroSection />
        <TechMarquee />
        <AboutSection />
        <ExperienceSection />
        <EducationSection />
        <CertificationsSection />
        <ProjectsSection />
        <SkillsSection />
        <AskCta />
        <ContactSection />
      </main>
      <Footer />
      <FloatingMascot />
    </>
  );
}
