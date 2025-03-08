import { Button } from "@/components/ui/button"
import { Github, Linkedin, Mail, Twitter } from "lucide-react"
import Link from "next/link"
import ContactForm from "./components/contact-form"
import ProjectCard from "./components/project-card"
import TechStack from "./components/tech-stack"
import AboutSection from "./components/about-section"
import ChemdrawCard from "./components/experience"

export default function Home() {
  return (
    <div className="min-h-screen bg-background relative overflow-hidden">
      <div className="absolute inset-0 w-full h-full bg-gradient-to-br from-primary/20 via-background to-secondary/20 animate-gradient-xy" />
      <div className="relative">
        <header className="sticky top-0 z-50 w-full border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
          <div className="container mx-auto px-4 flex h-14 items-center">
            <div className="mr-4 hidden md:flex">
              <Link className="mr-6 flex items-center space-x-2" href="/">
                <span className="hidden font-bold sm:inline-block">Bhavyansh</span>
              </Link>
              <nav className="flex items-center space-x-6 text-sm font-medium">
                <Link href="/#about" className="transition-colors hover:text-foreground/80">
                  About
                </Link>
                <Link href="/#projects" className="transition-colors hover:text-foreground/80">
                  Projects
                </Link>
                <Link href="/#tech-stack" className="transition-colors hover:text-foreground/80">
                  Tech Stack
                </Link>
                <Link href="/#contact" className="transition-colors hover:text-foreground/80">
                  Contact
                </Link>
              </nav>
            </div>
            <Button variant="outline" className="ml-auto">
              <Link href="https://drive.google.com/file/d/1tEaLQ43eW0Yw3nr9cPMS1YUXTUY9pwhy/view?usp=sharing">Resume</Link>
            </Button>
          </div>
        </header>

        <main className="container px-4 md:px-6 mx-auto">
          <section className="py-12 md:py-24 lg:py-32 xl:py-40">
            <div className="container px-4 md:px-6">
              <div className="flex flex-col items-center justify-center space-y-4 text-center">
                <div className="space-y-6">
                <h2 className="md:text-[55px] md:flex-row md:gap-5 flex flex-col items-center justify-center text-[30px] ft">
        <p className="sm:text-center">Hello! I'm</p> <strong className="text-[#cd9403] ">Bhavyansh Tomar</strong>
      </h2>
                  <h1 className="text-2xl my-10 font-bold tracking-tighter sm:text-4xl md:text-5xl lg:text-6xl/none bg-clip-text text-transparent bg-gradient-to-r from-primary to-secondary animate-gradient">
                   A Full Stack Developer
                  </h1>
                  <p className="mx-auto max-w-[700px]  text-gray-500 md:text-xl dark:text-gray-400 my-20">
                    Crafting innovative digital solutions with cutting-edge technologies. Specialized in building
                    scalable applications, cloud architecture, and creating exceptional user experiences.
                  </p>
                  <div className="flex flex-wrap justify-center gap-4 mt-8">
                    <Link href="#projects">
                      <Button variant="default" size="lg">
                        View Projects
                      </Button>
                    </Link>
                    <Link href="#contact">
                      <Button variant="outline" size="lg">
                        Contact Me
                      </Button>
                    </Link>
                  </div>
                </div>
                <div className="flex flex-wrap justify-center gap-4 mt-8">
                  <Link href="https://github.com/thebhavyansh" target="_blank">
                    <Button variant="outline" size="icon" className="rounded-full">
                      <Github className="h-5 w-5" />
                      <span className="sr-only">GitHub</span>
                    </Button>
                  </Link>
                  <Link href="https://www.linkedin.com/in/bhavyanshtomar/" target="_blank">
                    <Button variant="outline" size="icon" className="rounded-full">
                      <Linkedin className="h-5 w-5" />
                      <span className="sr-only">LinkedIn</span>
                    </Button>
                  </Link>
                  <Link href="https://twitter.com" target="_blank">
                    <Button variant="outline" size="icon" className="rounded-full">
                      <Twitter className="h-5 w-5" />
                      <span className="sr-only">Twitter</span>
                    </Button>
                  </Link>
                  <Link href="mailto:bhavyanshtomar22@gmail.com">
                    <Button variant="outline" size="icon" className="rounded-full">
                      <Mail className="h-5 w-5" />
                      <span className="sr-only">Email</span>
                    </Button>
                  </Link>
                </div>
              </div>
            </div>
          </section>

          <AboutSection />

          <section id="projects" className="py-12 md:py-24 lg:py-32">
            <div className="container px-4 md:px-6">
              <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl mb-12 text-center">
                Projects
              </h2>
              <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
                <ProjectCard
                  title="Ai-mock-interview"
                  description="A full-stack AI mock interview platform with real-time audio/video recording and speech-to-text conversion."
                  image="/ai.png"
                  link="https://github.com/thebhavyansh/Mock-Interview-App"
                  tags={["Next.js", "Drizzle-orm", "Postgrsql","Tailwind CSS", "Clerk", "React.js", "Node.js"]}
                />
                <ProjectCard
                  title="Fshare"
                  description="A password protected file-sharing application with robust security features and intuitive user experience."
                  image="/FShare.png"
                  link="https://github.com/thebhavyansh/Fshare"
                  tags={["Next.js", "Firebase","Tailwind CSS", "React.js", "Node.js"]}
                />
                <ProjectCard
                  title="ExpensX"
                  description="An AI-enhanced finance management platform that automates transaction tracking and delivers
comprehensive financial analysis."
                  image="/travel.png"
                  link="https://github.com/thebhavyansh/ExpensX"
                  tags={["Next.js", "TailwindCSS", "Node.js", "Postgresql", "Clerk", "React.js"]}
                />
              </div>
            </div>
          </section>
          <section id="tech-stack" className="py-12 md:py-24 lg:py-32">
            <div className="container px-4 md:px-6">
              <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl mb-12 text-center">
                Experience
              </h2>
              <ChemdrawCard />
            </div>
          </section>
          
          <section id="tech-stack" className="py-12 md:py-24 lg:py-32">
            <div className="container px-4 md:px-6">
              <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl mb-12 text-center">
                Technologies i use
              </h2>
              <TechStack />
            </div>
          </section>

          <section id="contact" className="py-12 md:py-24 lg:py-32">
            <div className="container px-4 md:px-6">
              <div className="mx-auto max-w-2xl">
                <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl mb-12 text-center">
                  Get in Touch
                </h2>
                <ContactForm />
              </div>
            </div>
          </section>
        </main>

        <footer className="border-t bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
          <div className="container mx-auto py-12 px-4 md:px-6">
            <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
              <div className="space-y-4">
                <h3 className="text-lg font-semibold">About</h3>
                <p className="text-sm text-muted-foreground">
                  Building the future of web applications with modern technologies and best practices.
                </p>
              </div>
              <div className="space-y-4">
                <h3 className="text-lg font-semibold">Quick Links</h3>
                <ul className="space-y-2">
                  <li>
                    <Link href="#about" className="text-sm text-muted-foreground hover:text-primary">
                      About
                    </Link>
                  </li>
                  <li>
                    <Link href="#projects" className="text-sm text-muted-foreground hover:text-primary">
                      Projects
                    </Link>
                  </li>
                  <li>
                    <Link href="#contact" className="text-sm text-muted-foreground hover:text-primary">
                      Contact
                    </Link>
                  </li>
                </ul>
              </div>
              <div className="space-y-4">
                <h3 className="text-lg font-semibold">Connect</h3>
                <ul className="space-y-2">
                  <li>
                    <Link href="https://github.com/thebhavyansh" className="text-sm text-muted-foreground hover:text-primary">
                      GitHub
                    </Link>
                  </li>
                  <li>
                    <Link href="https://www.linkedin.com/in/bhavyanshtomar/" className="text-sm text-muted-foreground hover:text-primary">
                      LinkedIn
                    </Link>
                  </li>
                  
                </ul>
              </div>
              <div className="space-y-4">
                <h3 className="text-lg font-semibold">Contact</h3>
                <ul className="space-y-2">
                  <li className="text-sm text-muted-foreground">Email: bhavyanshtomar22@gmail.com</li>
                  <li className="text-sm text-muted-foreground">Location: Bengaluru, IN</li>
                </ul>
              </div>
            </div>
            
          </div>
        </footer>
      </div>
    </div>
  );
}
