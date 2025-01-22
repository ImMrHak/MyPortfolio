'use client'

import { Badge } from "@/components/ui/badge"
import { Github, ExternalLink } from "lucide-react"
import { motion } from "framer-motion"
import { AnimatedCard } from "@/components/ui/animated-card"
import { AnimatedGradient } from "@/components/ui/animated-gradient"
import { useScrollNavigation } from "@/hooks/useScrollNavigation"

const projects = [
  {
    title: "ProfOnline (Dev)",
    description: "A comprehensive microservice-based platform built with .NET, designed to connect students with professors for online tutoring and educational support. Features include real-time scheduling, video conferencing, and resource sharing.",
    image: "/projects/profonline.png",
    github: "https://github.com/ImMrHak/ProfOnline",
    demo: "https://profonline.demo.com",
    tags: [".NET", "Microservices", "React", "SQL Server", "Docker", "Azure", "Redis"]
  },
  {
    title: "LibraryHub",
    description: "A modern library management system built with Java microservices architecture. Handles book management, user accounts, and lending processes.",
    image: "/projects/libraryhub.png",
    github: "https://github.com/ImMrHak/LibraryHub",
    demo: "https://libraryhub.demo.com",
    tags: ["Java", "Spring Boot", "Angular", "PostgreSQL", "Docker", "RabbitMQ"]
  },
  {
    title: "HakDuinoSerial",
    description: "A Python library for seamless serial communication with Arduino boards. Features include automatic port detection, command queuing, and event-driven communication.",
    image: "/projects/hakduinoserial.png",
    github: "https://github.com/ImMrHak/HakDuinoSerial",
    tags: ["Python", "Arduino", "Serial Communication", "PyPI"]
  }
]

export default function ProjectsPage() {
  useScrollNavigation({
    prev: '/',
    next: '/skills'
  })

  return (
    <main className="flex-1 min-h-screen bg-gradient-to-br from-background via-background/95 to-background/90 flex items-center justify-center">
      <div className="w-full max-w-6xl px-6 py-16">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="mb-8"
        >
          <AnimatedGradient className="inline-block mb-12">
            <h1 className="text-4xl md:text-5xl font-bold">
              Featured Projects
            </h1>
          </AnimatedGradient>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {projects.map((project, index) => (
            <AnimatedCard key={project.title} index={index}>
              <div className="p-6">
                {project.image && (
                  <div className="relative h-48 mb-4 overflow-hidden rounded-lg">
                    <img
                      src={project.image}
                      alt={project.title}
                      className="object-cover w-full h-full transform group-hover:scale-105 transition-transform duration-300"
                    />
                    <AnimatedGradient className="absolute inset-0 opacity-20" />
                  </div>
                )}
                <h3 className="text-xl font-semibold mb-2">{project.title}</h3>
                <p className="text-muted-foreground mb-4">{project.description}</p>
                <div className="flex flex-wrap gap-2 mb-4">
                  {project.tags.map((tag) => (
                    <Badge key={tag} variant="secondary">
                      {tag}
                    </Badge>
                  ))}
                </div>
                <div className="flex gap-4">
                  {project.github && (
                    <a
                      href={project.github}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center gap-2 text-muted-foreground hover:text-primary transition-colors"
                    >
                      <Github className="w-4 h-4" />
                      <span>Source Code</span>
                    </a>
                  )}
                  {project.demo && (
                    <a
                      href={project.demo}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center gap-2 text-muted-foreground hover:text-primary transition-colors"
                    >
                      <ExternalLink className="w-4 h-4" />
                      <span>Live Demo</span>
                    </a>
                  )}
                </div>
              </div>
            </AnimatedCard>
          ))}
        </div>
      </div>
    </main>
  )
}
