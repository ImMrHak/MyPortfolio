'use client'

import { Badge } from "@/components/ui/badge"
import { motion } from "framer-motion"
import { Navigation } from "@/components/Navigation"
import { Progress } from "@/components/ui/progress"
import { AnimatedCard } from "@/components/ui/animated-card"
import { AnimatedGradient } from "@/components/ui/animated-gradient"
import { useScrollNavigation } from "@/hooks/useScrollNavigation"

const skills = {
  languages: [
    { name: "Java", level: 95 },
    { name: "TypeScript", level: 90 },
    { name: "Python", level: 85 },
    { name: "C/C++", level: 80 },
    { name: "PHP", level: 75 },
  ],
  frontend: [
    { name: "React", level: 90 },
    { name: "Angular", level: 85 },
    { name: "Next.js", level: 85 },
    { name: "TailwindCSS", level: 90 },
    { name: "Flutter", level: 75 },
  ],
  backend: [
    { name: "Spring Boot", level: 95 },
    { name: ".NET", level: 85 },
    { name: "Node.js", level: 80 },
    { name: "FastAPI", level: 75 },
  ],
  databases: [
    { name: "MySQL", level: 90 },
    { name: "PostgreSQL", level: 85 },
    { name: "MongoDB", level: 80 },
    { name: "Oracle", level: 85 },
  ],
  tools: [
    { name: "Git", level: 95 },
    { name: "Docker", level: 85 },
    { name: "Kubernetes", level: 75 },
    { name: "Jenkins", level: 70 },
  ],
}

const SkillCategory = ({ title, skills, delay = 0 }: { title: string; skills: { name: string; level: number }[]; delay?: number }) => (
  <AnimatedCard>
    <h2 className="text-2xl font-semibold mb-6 bg-gradient-to-r from-primary via-primary/80 to-primary text-transparent bg-clip-text">
      {title}
    </h2>
    <div className="space-y-4">
      {skills.map((skill, index) => (
        <motion.div
          key={skill.name}
          initial={{ opacity: 0, x: -20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ delay: delay + index * 0.1 }}
        >
          <div className="flex justify-between mb-2">
            <span className="text-muted-foreground">{skill.name}</span>
            <Badge variant="outline" className="bg-primary/5">
              {skill.level}%
            </Badge>
          </div>
          <div className="relative h-2 w-full bg-muted rounded-full overflow-hidden">
            <motion.div
              initial={{ width: 0 }}
              animate={{ width: `${skill.level}%` }}
              transition={{ delay: delay + index * 0.1, duration: 0.5, ease: "easeOut" }}
              className="absolute h-full bg-gradient-to-r from-primary to-primary/80 rounded-full"
            />
          </div>
        </motion.div>
      ))}
    </div>
  </AnimatedCard>
);

const SkillsPage = () => {
  useScrollNavigation({
    prev: '/projects',
    next: '/contact'
  })

  return (
    <main className="flex-1 min-h-screen bg-gradient-to-br from-background via-background/95 to-background/90 flex items-center justify-center">
      <section className="w-full px-6 py-16">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="max-w-6xl mx-auto"
        >
          <AnimatedGradient className="inline-block mb-12">
            <h1 className="text-4xl md:text-5xl font-bold">
              Skills & Expertise
            </h1>
          </AnimatedGradient>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <SkillCategory title="Programming Languages" skills={skills.languages} delay={0.1} />
            <SkillCategory title="Frontend Development" skills={skills.frontend} delay={0.2} />
            <SkillCategory title="Backend Development" skills={skills.backend} delay={0.3} />
            <SkillCategory title="Databases" skills={skills.databases} delay={0.4} />
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.5 }}
              className="md:col-span-2"
            >
              <SkillCategory title="Tools & DevOps" skills={skills.tools} delay={0.5} />
            </motion.div>
          </div>
        </motion.div>
      </section>
    </main>
  )
}

export default SkillsPage;
