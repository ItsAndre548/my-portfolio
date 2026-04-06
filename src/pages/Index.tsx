import Navbar from "@/components/Navbar";
import HeroSection from "@/components/HeroSection";
import AboutSection from "@/components/AboutSection";
import ProjectsSection from "@/components/ProjectsSection";
import HobbiesSection from "@/components/HobbiesSection";
import ContactSection from "@/components/ContactSection";

const Index = () => (
  <div className="noise">
    <Navbar />
    <HeroSection />
    <AboutSection />
    <ProjectsSection />
    <HobbiesSection />
    <ContactSection />
  </div>
);

export default Index;
