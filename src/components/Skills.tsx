import { useState } from "react";
import { cn } from "../libra/utils";
const skills = [
    //Front End
    {name: "JavaScript", level: 95, category: "frontEnd"},
    {name: "Html5/Css3", level: 70, category: "frontEnd"},
    {name: "PHP", level: 60, category: "frontEnd"},
    {name: "React.js", level: 85, category: "frontEnd"},


    //Banco de Dados

    {name: "Mysql BD", level: 89, category:"dataBase"},
    {name: "Power Bi", level: 45, category: "database"},
    {name: "Excel", level: 80, category:"dataBase"},


    //Ferramentas
     {name:"VScode", level: 95, category:"tools"},
     {name:"Git/GitHub", level: 80, category: "tools"}
]
const categories = ["all","frontEnd","dataBase","tools"];


export const Skills  = () => {
    const [activeCategory, setActiveCategory] = useState("all");

    const filteredSkills = skills.filter(
        (skill) => activeCategory === "all" || skill.category == activeCategory
    )

    return(
    <section 
    id="skills"
    className="py-24 px-4 relative bg-secondary/30"
    >
        <div className="container mx-auto max-w-5xl">
                <h2 className="text-3xl md:text-4xl font-bold mb-12 text-center">
                     Minhas <span className="text-primary">Habilidades</span>
                </h2>

        <div className="flex flex-wrap justify-center gap-4 mb-12">
          {categories.map((category,key) => 
            <button 
            key={key}
            onClick={() => setActiveCategory(category)}
            className={cn(
            "px-5 py-2 rounded-full transition-colors duration-300 capitalize",
            activeCategory === category ? "bg-primary text-primary-foreground" : "bg-scondary/70 text-foreground hover-bd-secondary"
            )}>
            {category}
            </button>
        
        )}
        </div>
        <div className="grid grid-cols-1 sm:grid-cols2 lg:grid-cols-3 gap-6">
                {filteredSkills.map((skill,key) =>
            <div
                key={key}
                className="bg-card p-6 roundes-lg shadow-xs card-hover"
                >
                <div className="text-left mb-4">
                        <h3 className="font-semi-bold text-lg"> {skill.name}</h3>
                </div>
                <div className="w-full bg-secondary/50 h-2 rounded-full overflow-hidden">
                    <div className="bg-primary h-2 rounded-full origin-left animate-[grow_1.5s_ease-out]"
                    style={{ width: skill.level + "%" }}/>
                </div>

                <div className="text-right mt-1">
                    <span className="text-sm text-muted-foreground">
                        {skill.level + "%"}
                    </span>
                </div>
            </div>
            )}
        </div>
        </div>
    </section>

    ) 
}