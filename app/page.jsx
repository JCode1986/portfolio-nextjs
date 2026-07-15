import AboutSection from "@/components/AboutSection";
import ContactSection from "@/components/ContactSection";
import ExperienceSection from "@/components/ExperienceSection";
import Footer from "@/components/Footer";
import HeroSection from "@/components/HeroSection";
import HowIWorkSection from "@/components/HowIWorkSection";
import ProjectsSection from "@/components/ProjectSection";
import SkillsSection from "@/components/SkillsSection";

export default async function Home() {
  return (
    <main className="min-h-screen overflow-x-hidden bg-slate-950 text-white">
		<HeroSection />
		<ProjectsSection />
		<ExperienceSection />
		<AboutSection />
		<HowIWorkSection />
		<SkillsSection />
		<ContactSection />
		<Footer />
	</main>
  );
}
