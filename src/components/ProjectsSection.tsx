import { ArrowRight, ExternalLink, Github } from "lucide-react"

const projects = [

    {
        id: 1,
        title: "Eccomerce HomePage",
        description: "Interface de e-commerce moderna com foco em UX, utilizando JavaScript Vanilla para manipulação dinâmica do DOM, sliders interativos e animações sincronizadas com CSS avançado.",
        imagem: "/projects/porjeto1.png",
        tags: ["JavaScript", "HTML", "Css"],
        demoUrl: "https://gabrielSSDuarteDev.github.io/classic-sport-ecommerce/",
        gitHubUrl: "https://github.com/gabrielSSDuarteDev/classic-sport-ecommerce",

    },
    {
        id: 2,
        title: "Sistema de Gerenciador de Usuários",
        description: "Aplicação Full Stack para controle de registros, com integração em tempo real entre Front-end e Banco de Dados",
        imagem: "/projects/projeto2.png",
        tags: ["React.js", "Node.js", "MongoDB"],
        demoUrl: "https://manager-frontend-tsbm.onrender.com",
        gitHubUrl: "https://github.com/gabrielSSDuarteDev/FullStack-User-Manager",

    },

]
export const ProjectsSection = () => {
    return <section id="projects" className="py-24 px-4 relative">
        <div className="container mx-auto max-w-5xl">
            <h2 className="text-3xl md:text-4xl font-bold mb-4 text-center">
                {" "}
                Galeria de <span className="text-primary"> Projetos</span>
            </h2>

            <p className="text-center text-muted-foreground mb-12 max-w-2xl mx-auto">
               Esta seção é totalmente dedicada aos projetos que desenvolvi. 
               Todos eles possuem recursos e detalhes únicos, com uma experiência de usuário (UX) cuidadosamente projetada para garantir
                uma navegação fluida e intuitiva. 
            </p>

            <div className="flex flex-wrap justify-center gap-8">
                {projects.map((project, key) =>
                   <div key={key} 
                   className="bg-card rounded-xl overflow-hidden border border-border card-hover w-full max-w-[350px]"
                   >
                        <div className="h-48 overflow-hidden">
                            <img
                                src={project.imagem}
                                alt={project.title}
                                className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                            />
                        </div>

                        <div className="p-6">
                            <div className="flex flex-wrap gap-2 mb-4">
                                {project.tags.map((tag, idx) => (
                                    <span key={idx} className="px-2 py-2 text-xs font-medium border rounded-full bg-primary/20 text-secondary-foreground ">
                                        {tag}
                                    </span>
                                ))}
                            </div>
                            <h3 className="text-xl font-semibold mb-1">{project.title}</h3>
                            <p className="text-muted-foreground text-sm mb-4">
                                {project.description}
                            </p>
                            <div className="flex justify-between items-center">
                                <div className="flex space-x-3">
                                    <a
                                        href={project.demoUrl}
                                        target="_blank"
                                        className="text-foreground/80 hover:text-primary transition-colors duratio">
                                        <ExternalLink size={20} />
                                    </a>
                                    <a
                                        href={project.gitHubUrl}
                                        target="_blank"
                                        className="text-foreground/80 hover:text-primary transition-colors" >
                                        <Github size={20} />
                                    </a>
                                </div>
                            </div>
                        </div>
                    </div>
                )}
            </div>

            <div className="text-center mt-12">
                <a className="portifolio-buttons w-fit flex items-center mx-auto gap-2"
                    target="_blank" rel="noopener noreferrer"
                    href="https://github.com/gabrielSSDuarteDev">
                    Confira meu GitHub <ArrowRight size={16} />
                </a>
            </div>

        </div>
    </section>
}