import { Linkedin, Mail, Phone, Github, Send,  } from "lucide-react"
import { RiDiscordFill } from "react-icons/ri";
import { cn } from "@/libra/utils";
import { useState } from "react";
import emailjs from "@emailjs/browser";
import { useToast } from "@/hooks/useToast"
import React from "react";

const serviceID = 'service_c4xo4uo';
const templateID = 'template_wfhjmof';
const userID = 'o2u3aRMu8QDSs1dzp';

export const ContactSection = () => {

    const {toast} = useToast()
    const [name, setName] = useState("")
    const [email, setEmail] = useState("")
    const [subject, setSubject] = useState("")
    const [message, setMessage] = useState("")

    const sendEmail = async (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();

    const form = e.currentTarget
        
    
    const templateParams = {
        name:name,
        email:email,
        subject_email:subject,
        message:message
    }

 try{
     await emailjs.send(
        serviceID,
        templateID,
        templateParams,
        userID,
    );
    toast({
        title: "Mensagem Enviada com Sucesso!",
        description: "Obrigado! Recebemos sua mensagem e em breve enviaremos uma resposta.",
    });

    setName("");
            setEmail("");
            setSubject("");
            setMessage("");

 }  catch(error){
        console.error("Erro ao enciar o E-mail", error);
        toast({
            title: "Erro no Envio",
            description: "Não foi possível enviar a mensagem. Tente novamente mais tarde.",
        })
     }
}





return( 
< section id="contact" className="py-24 px-4 relative bg-secondary/30">
        <div className="container mx-auto max-w-5xl">
            <h2 className="text-3xl md:text-4xl font-bold mb-4 text-center">
                Entre em <span className=" text-primary">Contato</span>
            </h2>


            <p className="text-center text-muted-foreground mb-12 max-w-2xl mx-auto">
                Entre em contato caso tenha interesse em desenvolver um projeto em colaboração
                ou caso tenha ficado interessado e queira entrar em contato,vou deixar meus dados disponiveis 
            </p>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
                <div className="space-y-8">
                    <h3 className="text-2xl font-semibold mb-6">
                        Informações para Contato
                    </h3>

                <div className="space-y-6 justify-center ">
                    <div className="flex items-star space-x-4">
                        <div className="p-3 rounded-full bg-primary/10">
                            <Phone className="h-6 w-6 text-primary"/>
                        </div>
                        <div>
                            <h4 className="font-medium">
                                Número para Contato: 
                            </h4>
                            <a 
                            href="tel:+5561991188466"
                            className="text-muted-foreground hover:text-primary transition-colors">
                                +55 (61) 991188466
                            </a>
                        </div>
                    </div>
                    <div className="flex items-star space-x-4">
                        <div className="p-3 rounded-full bg-primary/10">
                            <Mail className="h-6 w-6 text-primary"/>
                        </div>
                        <div>
                            <h4 className="font-medium">
                                Email:
                            </h4>
                            <a 
                            href="mailto:gabrielssduarte.dev@gmail.com"
                            className="text-muted-foreground hover:text-primary transition-colors">
                                gabrielssduarte.dev@gmail.com
                            </a>
                        </div>
                    </div>
                    <div className="flex items-star space-x-4">
                        <div className="p-3 rounded-full bg-primary/10">
                            <Linkedin className="h-6 w-6 text-primary"/>
                        </div>
                        <div>
                            <h4 className="font-medium">
                               Linkedin:
                            </h4>
                            <a 
                            href="https://www.linkedin.com/in/gabriel-s-s-duarte-a16820374/"
                            className="text-muted-foreground hover:text-primary transition-colors">
                               linkedinn/gabrielssduartedev
                            </a>
                        </div>
                    </div>
                      <div className="flex items-star space-x-4">
                        <div className="p-3 rounded-full bg-primary/10">
                            <Github className="h-6 w-6 text-primary"/>
                        </div>
                        <div>
                            <h4 className="font-medium">
                               GitHub:
                            </h4>
                            <a 
                            href="https://github.com/gabrielSSDuarteDev"
                            className="text-muted-foreground hover:text-primary transition-colors">
                               github.com/gabrielSSDuarteDev
                            </a>
                        </div>
                    </div>
                </div>
                    <div className="pt-8">
                        <h4 className="font-medium mb-4">Conecte-se com as <span className="text-primary">Minhas Redes</span></h4>
                        <div className="flex space-x-4 justify-center" >
                            <a 
                            href="https://www.linkedin.com/in/gabriel-s-s-duarte-a16820374/"
                            target="_blank">
                                <Linkedin/>
                            </a>
                             <a
                              href="https://github.com/gabrielSSDuarteDev"
                              target="_blank">
                                <Github/>
                            </a>
                             <a 
                             href="mailto:gabrielssduarte.dev@gmail.com"
                             target="_blank">
                                <Mail/>
                            </a>
                             <a 
                             href="mailto:gabrielssduarte.dev@gmail.com"
                             target="_blank">
                                <RiDiscordFill size={25} />
                            </a>
                            

                        </div>
                    </div>
                 </div>

                <div className="bg-card p-8 rounded-lg shadow-xs ">
                    <h3 className="text-2xl font-semibold mb-6">Envie um Email</h3>
                    
                    <form className="space-y-6" onSubmit={sendEmail} >
                        <div>
                            <label 
                            htmlFor="name"
                            className="block text-sm font-medium mb-2"
                            > 
                            Seu nome: 
                            </label>
                            <input 
                            type="text"
                            id="name" 
                            required
                            onChange={(e) => setName(e.target.value)}
                            value={name}
                            className="w-full px-4 py-3 rounded-md border border-input bg-background focus:outlind-hidden focus:ring-2 focus:ring-primary"
                            placeholder="Gabriel Soares"/>
                        </div>

                         <div>
                            <label 
                            htmlFor="email"
                            className="block text-sm font-medium mb-2"
                            > Seu Email: 


                            </label>
                            <input 
                                type="email"
                                id="email" 
                                required
                                 onChange={(e) => setEmail(e.target.value)}
                                value={email}
                                className="w-full px-4 py-3 rounded-md border border-input bg-background focus:outlind-hidden focus:ring-2 focus:ring-primary"
                                placeholder="seu.email@gmail.com"/>
                        </div>
                        
                        <div>
                            <label 
                            htmlFor="subject"
                            className="block text-sm font-medium mb-2"
                            > Assunto:


                            </label>
                            <input 
                            type="subject"
                            id="subject" 
                            required
                             onChange={(e) => setSubject(e.target.value)}
                            value={subject}
                            className="w-full px-4 py-3 rounded-md border border-input bg-background focus:outlind-hidden focus:ring-2 focus:ring-primary"
                            placeholder="Gabriel Soares"/>
                        </div>

                         <div>
                            <label 
                            htmlFor="message"
                            className="block text-sm font-medium mb-2"
                            > Conteúdo do Email: 


                            </label>
                            <textarea
                                id="message" 
                                name="message"
                                required
                                onChange={(e) => setMessage(e.target.value)}
                                value={message}
                                className="w-full px-4 py-3 rounded-md border border-input bg-background focus:outlind-hidden focus:ring-2 focus:ring-primary  resize-none"
                                placeholder="Olá, gostaria de agendar uma reunião sobre..."
                                />
                        </div>


                        <button type="submit" className={cn(
                            "portifolio-buttons w-full flex items-center justify-center gap-2",
                        )}>
                            Enviar Mensagem
                            <Send size={16}/>
 
                        </button>
                    </form>
                </div>
            </div>
         </div>
          


        </section>


)
}