import { ThemeToggle } from "../components/ThemeToggle.tsx";
import {StarBackground} from "../components/StarBackground.tsx"
import { NavBar } from "../components/NavBar.tsx"; 
import { HeroSection } from "../components/HeroSection.tsx";
import {  AboutSection } from "../components/AboutSection.tsx";
import { Skills } from "../components/Skills.tsx";
import { ProjectsSection } from "../components/ProjectsSection.tsx";
import { ContactSection } from "../components/ContactSection.tsx";
import { Footer } from "@/components/Footer.jsx";

export const Home = () => {
  return (

    <div className="min-h-screen bg-background text-foreground overflow-x-hidden">
    {/* Theme Toggle*/}
    <ThemeToggle/>
    {/* BackGround Effects */}
    <StarBackground />
    {/*NavBar */ }
    <NavBar />
    {/* Main */}
    <main>
      <HeroSection/>
      <AboutSection/>
      <Skills/>
      <ProjectsSection/>
      <ContactSection/>
    </main>
   
   <Footer/>
    

    
    </div>
 
  )
}