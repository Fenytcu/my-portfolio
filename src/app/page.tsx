import HeroSection from "@/components/sections/HeroSection";
import Features from "@/components/sections/Features";
import TechStack from "@/components/sections/TechStack";
import Comparison from "@/components/sections/Comparison";
import Projects from "@/components/sections/Projects";
import Experience from "@/components/sections/Experience";
import Testimonials from "@/components/sections/Testimonials";
import FAQ from "@/components/sections/FAQ";
import Contact from "@/components/sections/Contact";
import Footer from "@/components/sections/Footer";

export default function Home() {
  return (
    <main className="w-full flex flex-col items-center">
      <HeroSection />
      <Features />
      <TechStack />
      <Comparison />
      <Projects />
      <Experience />
      <Testimonials />
      <FAQ />
      <Contact />
      <Footer />
    </main>
  );
}
