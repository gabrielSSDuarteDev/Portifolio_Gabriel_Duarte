import { Sun } from "lucide-react";
import { Moon } from "lucide-react";
import { useState, useEffect, use } from "react";

export const ThemeToggle = () => {
  const [isDarkMode, setIsDarkMode] = useState(false);


 // Verifica o tema salvo no localStorage
    useEffect(() => { 
    const savedTheme = localStorage.getItem("theme");   
    if (savedTheme === "dark") {
      document.documentElement.classList.add("dark");
      setIsDarkMode(true);
    } else {
      document.documentElement.classList.remove("dark");
      setIsDarkMode(false);
    }
    }, []);

  // Use useEffect para sincronizar o estado com a classe no DOM
  useEffect(() => {
    // Verifica o estado inicial do tema
    if (document.documentElement.classList.contains("dark")) {
        setIsDarkMode(true);
    }

  }, []);

  const toggleTheme = () => {
    // Altera o estado
    setIsDarkMode(!isDarkMode);
   localStorage.setItem("theme", isDarkMode ? "light" : "dark");

    // Usa toggle() para adicionar ou remover a classe "dark" de forma simples
    document.documentElement.classList.toggle("dark");
    
 };

    //  Retorna o ícone de sol ou lua com base no estado atual
  return (
    <button onClick={toggleTheme}>
      {isDarkMode ? (
        <Sun className="h-6 w-6 text-yellow-300" />
      ) : (
        <Moon className="h-6 w-6 text-gray-800" />
      )}
    </button>
  );
};