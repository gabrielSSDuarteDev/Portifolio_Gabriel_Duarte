import { ArrowDown } from "lucide-react";




export const HeroSection = () => {

    return ( <section id="hero" className="relative min-h-screen flex flex-col items-center justify-center px-4">
            <div className="container max-w-4xl mx-auto text-center z-10">
                <div className="sapce-y-6">
                    <h1 className="text-4xl md:text-7xl font-bold tracking-tight">
                        <span className="opacity-0 animate-fade-in">Olá, Eu me chamo<br/></span>
                        <span className="text-primary opacity-0 animate-fade-in-dalay-1 ">Gabriel </span>
                        <span className="text-gradient  ml-2 opacity-0 animate-fade-in-dalay-2 ">Duarte</span>
                        
                    </h1>

                   
                    <p className=" pt-4 text-lg md:text-m text-mute-foregrounf max-2-2xl mx-auto opacity-0 animate-fade-in-dalay-3 "  >
                       &nbsp; Lorem ipsum dolor sit amet consectetur adipisicing elit. Aliquid sequi repellat.
                    </p>

                    
                    <div className="pt-5 opacity-0 animate-fade-in-dalay-4">
                        <a href="#projects" className="portifolio-buttons">
                            Meus Projetos
                        </a>
                    </div>
                </div>
            </div>

            <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 flex flex-col items-center animate-bounce ">
                    <span className="text-sm text-mute-foreground mb-2"> Scroll</span>
                    <ArrowDown className="h-5 w-5 text-primary"></ArrowDown>

            </div>




    </section>
    );
};