import AboutSection from "@/components/AboutSection";
import ContactSection from "@/components/ContactSection";
import HeroSection from "@/components/HeroSection";
import ProjectsSection from "@/components/ProjectSection";
import SkillsSection from "@/components/SkillsSection";

export default async function Home() {
  return (
    <main className="min-h-screen overflow-x-hidden bg-slate-50 text-slate-900">
		<HeroSection />
		<ProjectsSection />
		<SkillsSection />
		<AboutSection />
		<ContactSection />
	</main>
  );
}
