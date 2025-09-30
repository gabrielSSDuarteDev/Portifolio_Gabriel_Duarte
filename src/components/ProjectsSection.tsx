import { ArrowRight, ExternalLink, Github } from "lucide-react"

const projects = [

        {
            id: 1,
            title:"Eccomerce HomePage",
            description: "A beatiful landing page app using javascript and css",
            imagem: "/projects/porjeto1.png",
            tags: ["JavaScript" , "HTML" , "Css"],
            demoUrl: "https://www.youtube.com/watch?v=YVkUvmDQ3HY&list=RDYVkUvmDQ3HY&start_radio=1",
            gitHubUrl: "https://github.com/",

        },
        {
            id: 2,
            title:"Eccomerce HomePage",
            description: "A beatiful landing page app using javascript and css",
            imagem: "/projects/projeto2.png",
            tags: ["JavaScript" , "HTML" , "Css"],
            demoUrl: "https://www.youtube.com/watch?v=YVkUvmDQ3HY&list=RDYVkUvmDQ3HY&start_radio=1",
            gitHubUrl: "https://github.com/",

        },
        {
            id: 3,
            title:"Eccomerce HomePage",
            description: "A beatiful landing page app using javascript and css",
            imagem: "/projects/projeto3.png",
            tags: ["JavaScript" , "HTML" , "Css"],
            demoUrl: "https://www.youtube.com/watch?v=YVkUvmDQ3HY&list=RDYVkUvmDQ3HY&start_radio=1",
            gitHubUrl: "https://github.com/",

        },
]
export const ProjectsSection = () => {
 return <section id="projects" className="py-24 px-4 relative">
            <div className="container mx-auto max-w-5xl">
                <h2 className="text-3xl md:text-4xl font-bold mb-4 text-center">
                    {" "}
                    Características dos <span className="text-primary"> Projects</span>
                </h2>

                <p className="text-center text-muted-foreground mb-12 max-w-2xl mx-auto">
                    Thats a section totally dedicated to my developed projects. All of them have your only 
                    features and details minimally thought out on the UX. I hopeffuly expect you enjoy them.
                </p>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                    {projects.map((project,key) =>
                      <div
                        key={key}
                        className="group bg-card rounded-lg overflow-hidden shadow-xs card-hover"
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
                                    <ExternalLink size={20}/>
                                </a>
                                <a 
                                href={project.gitHubUrl}
                                target="_blank"
                                className="text-foreground/80 hover:text-primary transition-colors" >
                                    <Github size={20}/>
                                </a>
                            </div>
                          </div>
                      </div>
                    </div>
                    )}
                </div>

                <div className="text-center mt-12"> 
                    <a className="portifolio-buttons w-fit flex items-center mx-auto gap-2"
                    target="_blank"
                    href="https://github.com/gabrielSSDuarteDev">
                          Confira meu GitHub <ArrowRight size={16}/> 
                    </a>
                </div>

            </div>
 </section>
}