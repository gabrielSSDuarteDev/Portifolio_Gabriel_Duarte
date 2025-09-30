import { cn } from "../libra/utils"
import { Briefcase, Code, User } from "lucide-react"



export const AboutSection = () => {
    return <section id="about" className="py-24 px-4 relative">
        {" "}
          <div className="container mx-auto max-w-5xl">
                <h2 className="text-3xl md:text-4xl font-bold mb-12 text-center">
                    Sobre <span className="text-primary">Mim</span>
                </h2>
    
            <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
    
                <div className="space-y-6">
                    <h3 className="text-2xl font-semibold">
                        Desenvolvedor abaixonado por criações Web e Resolução de Problemas</h3>
    
    
                    <p className="text-muted-foreground">
                        I`m actully at the college,cursing and persuing my dream of be a developer
                        i just have complete a year of studies on Information technologys and i looking for a stage ata the moment 
                        with the goal of improve my abilities and add more skills about my knowlodge
                    </p>
    
                    <p className="text-muted-foreground">
                        Im just have falling in love with programming and the logics problems they have 
                        and create some solutions from those problems has been a very fun activity.
                        After pass of all the way to get here,im just looking for the next pass, more places to explore in this area.
    
                    </p>
           
    
                <div className="flex flex-col sm:flex-row gap-4 pt-4 justify-center">
                    <a href="#contact" className="portifolio-buttons">
                        Clique aqui
                    </a>
    
                    <a
                    href="public/Documents/curriculo-gabriel-soares-de-souza-duarte.pdf"
                    className={cn(
                        "px-6 py-2 rounded-full border border-primary text-primary",
                        "hover: bg-primary/10 transition-colors duration-300"
                    )} 
                    download="curriculo-gabriel-soares-de-souza-duarte.pdf">
                        Download CV
                    </a>
    
                    </div>
                </div>
    
                <div className="grid grid-cols-1 gap-6">
                    <div className="gradient-border p-6 card-hover">
                        <div className="flex items-start gap-4">
                            <div className="p-3 rounded-full bg-primary/10">
                                <Code className="h-6 w-6 text-primary "/>
                            </div>
                            <div className="text-left">
                                <h4 className="font-semibold text-lg">Web Development</h4>
                                <p className="text-muted-foreground ">
                                    Lorem, ipsum dolor sit amet consectetur adipisicing elit.
                                </p>

                            </div>
                        </div>
                    </div>
                    <div className="gradient-border p-6 card-hover">
                        <div className="flex items-start gap-4">
                            <div className="p-3 rounded-full bg-primary/10">
                                <User className="h-6 w-6 text-primary "/>
                            </div>
                             <div className="text-left">
                                <h4 className="font-semibold text-lg">Web Development</h4>
                                <p className="text-muted-foreground ">
                                    Lorem, ipsum dolor sit amet consectetur adipisicing elit.
                                </p>
                            </div>
                        </div>
                    </div>
                    <div className="gradient-border p-6 card-hover">
                        <div className="flex items-start gap-4">
                            <div className="p-3 rounded-full bg-primary/10">
                                <Briefcase className="h-6 w-6 text-primary "/>
                            </div>
                            <div className="text-left">
                                <h4 className="font-semibold text-lg">Web Development</h4>
                                <p className="text-muted-foreground ">
                                    Lorem, ipsum dolor sit amet consectetur adipisicing elit.
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
          </div>
        </section>
    }