import AboutSection from "@/components/AboustSection";
import ContactSection from "@/components/ContactSecion";
import HeroSection from "@/components/HeroSection";
import ProjectsSection from "@/components/ProjectSection";
import SkillsSection from "@/components/SkillsSection";

export default async function Home() {
  return (
    <main className="min-h-screen bg-gray-50 text-gray-900 overflow-x-hidden">
		<HeroSection />
		<ProjectsSection />
		<SkillsSection />
		<AboutSection />
		<ContactSection />
	</main>
  );
}
