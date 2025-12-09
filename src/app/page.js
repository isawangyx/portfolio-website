import HeroSection from "./components/HeroSection";
import Navbar from "./components/Navbar";
import AboutSection from "./components/AboutSection";
import ProjectsSection from "./components/ProjectsSection";
import WorkSection from "./components/WorkSection";
import Footer from "./components/Footer";

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col">
      <Navbar />
      <div className="container mt-24 mx-auto px-12 py-4 w-4/5">
        <HeroSection />
        <AboutSection />
        <WorkSection />
        <ProjectsSection />
        <Footer />
      </div>
    </main>
  );
}
