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
                       Desenvolvedor focado em projetar arquiteturas backend e solucionar desafios lógicos complexos</h3>
    
    
                    <p className="text-muted-foreground">
                        Atualmente, curso Engenharia de Software no Distrito Federal (UDF), 
                        onde aprofundo meus conhecimentos em arquitetura de sistemas e metodologias ágeis. 
                        Após consolidar uma base sólida em Tecnologia da Informação, busco minha oportunidade de estágio para 
                        aplicar essa teoria na resolução de desafios reais e contribuir com o ciclo de desenvolvimento de software.
                    </p>
    
                    <p className="text-muted-foreground">
                       Encaro cada desafio de programação como uma oportunidade de evoluir minha visão técnica. 
                       Minha motivação está em entender o funcionamento do software em todas as suas camadas e em como estruturar soluções que unam lógica sólida 
                       a uma excelente experiência final. Estou pronto para dar o próximo passo na minha carreira, explorando novos contextos e contribuindo com projetos desafiadores.

                    </p>
           
    
                <div className="flex flex-col sm:flex-row gap-4 pt-4 justify-center">
                    <a href="#contact" className="portifolio-buttons">
                        Entrar em Contato
                    </a>
    
                    <a
                    href="/Documents/Currículo_GabrielDuarte.pdf"
                    className={cn(
                        "px-6 py-2 rounded-full border border-primary text-primary",
                        "hover: bg-primary/10 transition-colors duration-300"
                    )} 
                    download="Currículo_GabrielDuarte.pdf">
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
                                <h4 className="font-semibold text-lg">Desenvolvimento Full Stack</h4>
                                <p className="text-muted-foreground ">
                                   Criação de aplicações completas, unindo interfaces intuitivas a estruturas de dados sólidas e escaláveis.
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
                                <h4 className="font-semibold text-lg">Engenharia de Software</h4>
                                <p className="text-muted-foreground ">
                                   Aplicação de padrões de projeto e lógica rigorosa para transformar requisitos complexos em soluções funcionais.
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
                                <h4 className="font-semibold text-lg">Foco em Resultados</h4>
                                <p className="text-muted-foreground ">
                                    Comprometido com a entrega de código limpo e a colaboração em metodologias ágeis para impulsionar o sucesso da equipe.
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
          </div>
        </section>
    }