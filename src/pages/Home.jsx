import { ThemeToggle } from "../components/ThemeToggle.tsx";
import {StarBackground} from "../components/StarBackground.tsx"
import { NavBar } from "../components/NavBar.tsx"; 

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

    {/* Footer */}
    

    
    </div>
 
  )
}