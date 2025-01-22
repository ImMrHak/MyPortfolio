'use client'

import { motion } from 'framer-motion'
import { Card } from '@/components/ui/card'
import { Badge } from '@/components/ui/badge'
import { useTheme } from 'next-themes'
import { cn } from '@/lib/utils'
import { Code2, Database, Cloud, Server, Laptop, Terminal as TerminalIcon } from 'lucide-react'
import { BackButton } from '@/components/BackButton'

const skills = {
  languages: {
    icon: Code2,
    title: 'Programming Languages',
    items: [
      { name: 'TypeScript', level: 90 },
      { name: 'Java', level: 85 },
      { name: 'Python', level: 80 },
      { name: 'C#', level: 75 },
      { name: 'C++', level: 70 },
    ],
  },
  frontend: {
    icon: Laptop,
    title: 'Frontend Development',
    items: [
      { name: 'React.js', level: 90 },
      { name: 'Next.js', level: 85 },
      { name: 'TailwindCSS', level: 90 },
      { name: 'Framer Motion', level: 80 },
      { name: 'Angular', level: 75 },
    ],
  },
  backend: {
    icon: Server,
    title: 'Backend Development',
    items: [
      { name: 'Spring Boot', level: 85 },
      { name: 'Node.js', level: 80 },
      { name: '.NET Core', level: 75 },
      { name: 'Express.js', level: 80 },
      { name: 'NestJS', level: 75 },
    ],
  },
  database: {
    icon: Database,
    title: 'Databases',
    items: [
      { name: 'PostgreSQL', level: 85 },
      { name: 'MongoDB', level: 80 },
      { name: 'Redis', level: 75 },
      { name: 'MySQL', level: 85 },
      { name: 'SQLite', level: 80 },
    ],
  },
  devops: {
    icon: Cloud,
    title: 'DevOps & Cloud',
    items: [
      { name: 'Docker', level: 85 },
      { name: 'Kubernetes', level: 75 },
      { name: 'AWS', level: 70 },
      { name: 'Azure', level: 70 },
      { name: 'CI/CD', level: 80 },
    ],
  },
  tools: {
    icon: TerminalIcon,
    title: 'Tools & Others',
    items: [
      { name: 'Git', level: 90 },
      { name: 'Linux', level: 85 },
      { name: 'Vim', level: 75 },
      { name: 'VSCode', level: 90 },
      { name: 'Postman', level: 85 },
    ],
  },
}

export default function SkillsPage() {
  const { resolvedTheme } = useTheme()
  const isDark = resolvedTheme === 'dark'

  return (
    <div className="container mx-auto px-4 py-8">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        className="space-y-8"
      >
        <div className="relative pt-16">
          <div className="relative space-y-2">
            <BackButton />
            <h1 className="text-3xl font-bold">Skills & Technologies</h1>
            <p className="text-muted-foreground">
              Here are the technologies and tools I work with.
            </p>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {Object.entries(skills).map(([key, category], index) => {
            const Icon = category.icon
            
            return (
              <motion.div
                key={key}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.1 }}
              >
                <Card className={cn(
                  "group overflow-hidden border transition-colors h-full",
                  isDark 
                    ? "hover:border-primary/50 bg-black/30 backdrop-blur-xl" 
                    : "hover:border-primary/50 bg-white/30 backdrop-blur-xl"
                )}>
                  <div className="p-6 space-y-4">
                    <div className="flex items-center gap-3 mb-6">
                      <div className={cn(
                        "p-2 rounded-lg",
                        isDark ? "bg-primary/10" : "bg-primary/5"
                      )}>
                        <Icon className="w-5 h-5 text-primary" />
                      </div>
                      <h2 className="text-xl font-bold">{category.title}</h2>
                    </div>

                    <div className="space-y-4">
                      {category.items.map((skill) => (
                        <div key={skill.name} className="space-y-2">
                          <div className="flex justify-between items-center">
                            <span className="text-sm font-medium">{skill.name}</span>
                            <Badge 
                              variant="secondary"
                              className={cn(
                                "bg-primary/10 hover:bg-primary/20 transition-colors",
                                isDark ? "text-primary" : "text-primary-foreground"
                              )}
                            >
                              {skill.level}%
                            </Badge>
                          </div>
                          <div className="w-full h-2 bg-primary/10 rounded-full overflow-hidden">
                            <motion.div
                              initial={{ width: 0 }}
                              animate={{ width: `${skill.level}%` }}
                              transition={{ duration: 1, delay: index * 0.1 }}
                              className="h-full bg-primary rounded-full"
                            />
                          </div>
                        </div>
                      ))}
                    </div>
                  </div>
                </Card>
              </motion.div>
            )
          })}
        </div>
      </motion.div>
    </div>
  )
}
