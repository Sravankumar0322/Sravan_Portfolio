import { TopBar } from './components/TopBar';
import { HeroSection } from './components/HeroSection';
import { SkillsSection } from './components/SkillsSection';
import { TechStackSection } from './components/TechStackSection';
import { ProjectsSection } from './components/ProjectsSection';
import { DifferentiationSection } from './components/DifferentiationSection';
import { CTASection } from './components/CTASection';
import { Footer } from './components/Footer';

export default function App() {
  return (
    <div className="min-h-screen bg-white">
      <TopBar />
      <HeroSection />
      <SkillsSection />
      <TechStackSection />
      <ProjectsSection />
      <DifferentiationSection />
      <CTASection />
      <Footer />
    </div>
  );
}
