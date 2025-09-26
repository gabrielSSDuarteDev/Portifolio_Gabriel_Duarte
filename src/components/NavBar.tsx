import { useEffect, useState } from "react";
import { cn } from "../libra/utils.js";

const itensNavBar = [
    { name: "Home", href: "#hero" },
    { name: "Sobre", href: "#about" },
    { name: "Habilidades", href: "#skills" },
    { name: "Projetos", href: "#projects" },
    { name: "Contatos", href: "#contact" },
];

export const NavBar = () => {
    const [isScrolled, setIsScrolled] = useState(false);
    const [isMenuOpen, setIsMenuOpen] = useState(true); 

    useEffect(() => {
        const handleScroll = () => {
            setIsScrolled(window.scrollY > 10);
        };

        window.addEventListener("scroll", handleScroll);
        return () => window.removeEventListener("scroll", handleScroll);
    }, []);

    const toggleMenu = () => {
        setIsMenuOpen(!isMenuOpen);
    };

    return (
        <nav
            className={cn(
                "fixed w-full z-40 transition-all duration-300",
                isScrolled ? "py-3 bg-background/80 backdrop-blur-md shadow-sm" : "py-5"
            )}
        >
            <div className="container flex items-center justify-between">
                {/* Logo e Nome */}
                <a className="text-xl font-medium text-primary flex items-center">
                    <span className="relative z-10">
                        <span className="text-glow text-foreground">Gabriel Duarte</span>{" "} Portifólio
                    </span>
                </a>

                {/* Versão Desktop */}
                <div className="hidden md:flex space-x-8">
                    {itensNavBar.map((item, key) => (
                        <a
                            key={key}
                            href={item.href}
                            className="text-foreground/80 hover:text-primary transition-colors duration-300"
                        >
                            {item.name}
                        </a>
                    ))}
                </div>

                {/* Botão para o menu mobile */}
                <button
                    onClick={toggleMenu}
                    className="md:hidden text-foreground hover:text-primary transition-colors duration-300"
                    aria-label="Toggle navigation menu"
                >
                    {isMenuOpen ? (
                        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><line x1="18" y1="6" x2="6" y2="18"></line><line x1="6" y1="6" x2="18" y2="18"></line></svg>
                    ) : (
                        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><line x1="3" x2="21" y1="6" y2="6"></line><line x1="3" x2="21" y1="12" y2="12"></line><line x1="3" x2="21" y1="18" y2="18"></line></svg>
                    )}
                </button>

                {/* Menu mobile */}
                <div
                    className={cn(
                        "fixed inset-0 bg-background/95 backdrop-blur-md z-40 flex flex-col items-center justify-center",
                        "transition-all duration-300 md:hidden",
                        isMenuOpen ? "opacity-100 pointer-events-auto" : "opacity-0 pointer-events-none"
                    )}
                >
                    <div className="flex flex-col space-y-8 text-xl">
                        {itensNavBar.map((item, key) => (
                            <a
                                key={key}
                                href={item.href}
                                className="text-foreground/80 hover:text-primary transition-colors duration-300"
                                onClick={toggleMenu} // Fecha o menu ao clicar em um link
                            >
                                {item.name}
                            </a>
                        ))}
                    </div>
                </div>
            </div>
        </nav>
    );
};