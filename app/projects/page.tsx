'use client'

import { motion } from 'framer-motion'
import { Card } from '@/components/ui/card'
import { Badge } from '@/components/ui/badge'
import { Button } from '@/components/ui/button'
import { useTheme } from 'next-themes'
import { cn } from '@/lib/utils'
import { Github, ExternalLink } from 'lucide-react'
import { BackButton } from '@/components/BackButton'

const projects = [
  {
    title: 'Portfolio Website',
    description: 'My personal portfolio website built with Next.js 13, Tailwind CSS, and Framer Motion.',
    tags: ['Next.js', 'React', 'TypeScript', 'Tailwind CSS', 'Framer Motion'],
    github: 'https://github.com/ImMrHak/MyPortfolio',
    demo: 'https://immrhak.github.io/MyPortfolio',
  },
  {
    title: 'ProfOnline',
    description: 'A microservice-based online tutoring platform built with Spring Boot and React.',
    tags: ['.NET', 'Angular', 'SqlServer', 'Docker', 'Kubernetes'],
    github: 'https://github.com/ImMrHak/ProfOnline',
  },
  {
    title: 'LibraryHub',
    description: 'Modern library management system with real-time updates and analytics.',
    tags: ['Spring Boot', 'Angular', 'MongoDB', 'MySQL', 'PostgreSQL', 'Kafka', 'KeyCloak'],
    github: 'https://github.com/ImMrHak/LibraryHub',
  },
  {
    title: 'DevProGen',
    description: 'A powerful and flexible project generation tool designed for developers.',
    tags: ['Angular', 'Spring Boot', 'MySQL', 'Material UI'],
    github: 'https://github.com/ImMrHak/DevProGen-BE',
  },
  {
    title: 'HakDuinoSerial',
    description: 'Arduino serial communication library for easy hardware interfacing.',
    tags: ['C#', 'Arduino', 'Serial Communication'],
    github: 'https://github.com/ImMrHak/HakDuinoSerial',
  }
]

export default function ProjectsPage() {
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
            <h1 className="text-3xl font-bold">Projects</h1>
            <p className="text-muted-foreground">
              Here are some of my featured projects. Each one represents a unique challenge and learning experience.
            </p>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {projects.map((project, index) => (
            <motion.div
              key={project.title}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.1 }}
            >
              <Card className={cn(
                "group p-6 h-full backdrop-blur-md border transition-all duration-300",
                isDark 
                  ? "bg-black/20 border-white/10 hover:border-primary/50" 
                  : "bg-white/20 border-black/10 hover:border-primary/50"
              )}>
                <div className="space-y-4">
                  <div className="space-y-2">
                    <h2 className="text-xl font-semibold group-hover:text-primary transition-colors">
                      {project.title}
                    </h2>
                    <p className="text-muted-foreground">
                      {project.description}
                    </p>
                  </div>

                  <div className="flex flex-wrap gap-2">
                    {project.tags.map((tag) => (
                      <Badge
                        key={tag}
                        variant="outline"
                        className={cn(
                          "transition-colors",
                          isDark 
                            ? "bg-primary/10 hover:bg-primary/20 border-primary/20" 
                            : "bg-primary/5 hover:bg-primary/10 border-primary/10"
                        )}
                      >
                        {tag}
                      </Badge>
                    ))}
                  </div>

                  <div className="flex items-center gap-3 pt-4">
                    <Button
                      variant="outline"
                      size="sm"
                      className="gap-2"
                      asChild
                    >
                      <a
                        href={project.github}
                        target="_blank"
                        rel="noopener noreferrer"
                      >
                        <Github className="w-4 h-4" />
                        GitHub
                      </a>
                    </Button>
                    {project.demo && (
                      <Button
                        size="sm"
                        className="gap-2"
                        asChild
                      >
                        <a
                          href={project.demo}
                          target="_blank"
                          rel="noopener noreferrer"
                        >
                          <ExternalLink className="w-4 h-4" />
                          Live Demo
                        </a>
                      </Button>
                    )}
                  </div>
                </div>
              </Card>
            </motion.div>
          ))}
        </div>
      </motion.div>
    </div>
  )
}
