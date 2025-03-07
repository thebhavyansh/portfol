import { Card } from "@/components/ui/card"

const technologies = [
  {
    category: "",
    skills: ["React",
  "Tailwind CSS",
  "Mapbox",
  "jQuery",
  "HTML",
  "CSS",
  "SCSS",
  "Node.js",
  "Express.js",
  "JWT",
  "Python",
  "C",
  "C++",
  "Strapi",
  "Clerk",
  "MongoDB",
  "PostgreSQL",
  "MySQL",
  "Vercel",
  "Next.js",
  "Drizzle",
  "TypeScript",
  "JavaScript",
  "npm"],
  }
]

export default function TechStack() {
  return (
    <div className="">
      {technologies.map((tech) => (
        <Card key={tech.category} className="p-6">
          <h3 className="text-lg font-semibold mb-4">{tech.category}</h3>
          <div className="flex flex-wrap gap-3 items-center justify-center">
            {tech.skills.map((skill) => (
              <span
                key={skill}
                className="inline-flex items-center rounded-md bg-primary/10 px-2 py-1 text-sm font-medium text-primary ring-1 ring-inset ring-primary/20"
              >
                {skill}
              </span>
            ))}
          </div>
        </Card>
      ))}
    </div>
  )
}

