import HeroSection from "./components/HeroSection";
import Navbar from "./components/Navbar";
import AboutSection from "./components/AboutSection";
import ProjectsSection from "./components/ProjectsSection";
import ExternalSection from "./components/ExternalSection";
import EmailSection from "./components/EmailSection";
import WorkSection from "./components/WorkSection";

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col bg-[#1b1b1b]">
      <Navbar />
      <div className="container mt-24 mx-auto px-12 py-4">
        <HeroSection />
        <AboutSection />
        <WorkSection />
        <ProjectsSection />
        <ExternalSection />
        <EmailSection />
      </div>
    </main>
  );
}
