import { Sun } from "lucide-react";
import { Moon } from "lucide-react";
import { useState, useEffect} from "react";
import { cn } from "../libra/utils.js";  

export const ThemeToggle = () => {
  const [isDarkMode, setIsDarkMode] = useState(false);


 // Verifica o tema salvo no localStorage
    useEffect(() => { 
    const storedTheme = localStorage.getItem("theme");   
    if (storedTheme === "dark") {
      document.documentElement.classList.add("dark");
      setIsDarkMode(true);
    } else {
      document.documentElement.classList.remove("dark");
      setIsDarkMode(false);
    }
    }, []);

  const toggleTheme = () => {
   if(isDarkMode) {
    document.documentElement.classList.remove("dark");
    localStorage.setItem("theme", "light");
    setIsDarkMode(false);
   }else{
     document.documentElement.classList.add("dark");
    localStorage.setItem("theme", "dark");
    setIsDarkMode(true);
   }
    
 };

    //  Retorna o ícone de sol ou lua com base no estado atual
  return (
    <button 
    onClick={toggleTheme} 
    className={cn(
      "fixed max-sm:hidden top5 right-5 z-50 p-2 rounded-full transition-colors duration-300",
      "focus:outlin-hidden"
    )}>
      
      
      
      {isDarkMode ? (
        <Sun className="h-6 w-6 text-yellow-300" />
      ) : (
        <Moon className="h-6 w-6 text-gray-800" />
      )}
    </button>
  );
};