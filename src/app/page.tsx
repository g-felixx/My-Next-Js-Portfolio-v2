import Navbar from "@/components/Navbar";
import HeroSection from "@/components/HeroSection";
import AboutSection from "@/components/AboutSection";
import ExperienceSection from "@/components/ExperienceSection";
import EducationSection from "@/components/EducationSection";
import CertificationsSection from "@/components/CertificationsSection";
import ProjectsSection from "@/components/ProjectsSection";
import SkillsSection from "@/components/SkillsSection";
import ContactSection from "@/components/ContactSection";
import Footer from "@/components/Footer";
import Mascot from "@/components/Mascot";
import StatsStrip from "@/components/StatsStrip";
import SeaDivider from "@/components/SeaDivider";

export default function Home() {
  return (
    <>
      <Mascot />
      <Navbar />
      <main id="main-content" tabIndex={-1}>
        <HeroSection />
        <StatsStrip />
        <AboutSection />
        <ExperienceSection />
        <EducationSection />
        <CertificationsSection />
        <ProjectsSection />
        <SkillsSection />
        <ContactSection />
        <SeaDivider />
      </main>
      <Footer />
    </>
  );
}
