'use client'

import { Badge } from "@/components/ui/badge"
import { Github, ExternalLink } from "lucide-react"
import { motion } from "framer-motion"
import { AnimatedCard } from "@/components/ui/animated-card"
import { AnimatedGradient } from "@/components/ui/animated-gradient"
import { useScrollNavigation } from "@/hooks/useScrollNavigation"

const projects = [
  {
    title: "DevProGen",
    description: "Development of an automated project generation tool with customizable templates, integrating OAuth2 authentication, user and project management. Built with Domain-Driven Design (DDD) architecture, featuring clear separation of layers: Domain, Application, Infrastructure, and Interface.",
    image: "/projects/devprogen.png",
    github: "https://github.com/ImMrHak/DevProGen-BE",
    tags: ["Spring Boot", "MySQL", "OAuth2", "Lombok", "Angular", "DDD"]
  },
  {
    title: "LibraryHub",
    description: "An enterprise-grade library management system built with modern cloud-native microservices architecture. Features include OAuth2/OpenID Connect authentication, event-driven architecture using Kafka, circuit breakers for resilience, and comprehensive microservices (Books, Users, Borrows, Reservations, Notifications).",
    image: "/projects/libraryhub.png",
    github: "https://github.com/ImMrHak/LibraryHub",
    demo: "https://libraryhub.demo.com",
    tags: ["Spring Boot 3.4", "Spring Cloud", "PostgreSQL", "MongoDB", "Kafka", "Docker", "Keycloak", "Microservices"]
  },
  {
    title: "CarFleet",
    description: "A complete solution for fleet management, enabling vehicle management, real-time location tracking, trip history, and user management. Features include interactive maps and comprehensive fleet analytics.",
    image: "/projects/carfleet.png",
    github: "https://github.com/ImMrHak/CarFleet-Management",
    tags: ["Spring Boot", "React", "Android", "MySQL", "LeafletJS", "Node.js"]
  },
  {
    title: "Mission Tracking",
    description: "A digital solution for managing the missions of the General Inspectorate at the Ministry of Justice. Implements multi-layer architecture for efficient mission tracking and management.",
    image: "/projects/missiontracking.png",
    tags: [".NET", "Entity Framework", "LINQ to SQL", "SQL Server", "MVC"]
  },
  {
    title: "ProfOnline",
    description: "An innovative platform that enables students to book tutoring sessions with professors, offering multiple session formats including remote sessions with screen sharing and chat capabilities, home visits, or office appointments.",
    image: "/projects/profonline.png",
    github: "https://github.com/ImMrHak/ProfOnline",
    demo: "https://profonline.demo.com",
    tags: ["Spring Boot", "Angular", "WebRTC", "Real-time Communication", "OAuth2"]
  },
  {
    title: "HakDuinoSerial",
    description: "A cross-platform C# library enabling seamless communication with Arduino via serial connection. Features include mouse and keyboard control capabilities, making it versatile for hardware interaction projects.",
    image: "/projects/hakduinoserial.png",
    github: "https://github.com/ImMrHak/HakDuinoSerial",
    tags: ["C#", "Arduino", "Serial Communication", "Cross-platform"]
  },
  {
    title: "OPPPT Manager",
    description: "A C# ASP.NET application facilitating student enrollment in OPPPT training programs. Features include application management, control addition, and student tracking for center directors.",
    image: "/projects/oppptmanager.png",
    tags: ["C#", "ASP.NET", "SQL Server", "MVC"]
  }
]

export default function ProjectsPage() {
  useScrollNavigation({
    prev: '/',
    next: '/skills'
  })

  return (
    <main className="flex-1 min-h-screen bg-gradient-to-br from-background via-background/95 to-background/90 flex items-center justify-center">
      <div className="w-full max-w-6xl px-4 sm:px-6 py-8 sm:py-16 mt-16 lg:mt-0">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="mb-8"
        >
          <AnimatedGradient className="inline-block mb-8 sm:mb-12">
            <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold">
              Featured Projects
            </h1>
          </AnimatedGradient>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 sm:gap-6">
          {projects.map((project, index) => (
            <AnimatedCard key={project.title} index={index}>
              <div className="p-4 sm:p-6">
                {project.image && (
                  <div className="relative h-40 sm:h-48 mb-4 overflow-hidden rounded-lg">
                    <img
                      src={project.image}
                      alt={project.title}
                      className="object-cover w-full h-full transform group-hover:scale-105 transition-transform duration-300"
                    />
                    <AnimatedGradient className="absolute inset-0 opacity-20" />
                  </div>
                )}
                <h3 className="text-lg sm:text-xl font-semibold mb-2">{project.title}</h3>
                <p className="text-sm sm:text-base text-muted-foreground mb-4">{project.description}</p>
                <div className="flex flex-wrap gap-2 mb-4">
                  {project.tags.map((tag) => (
                    <Badge key={tag} variant="secondary" className="text-xs sm:text-sm">
                      {tag}
                    </Badge>
                  ))}
                </div>
                <div className="flex flex-wrap gap-4">
                  {project.github && (
                    <a
                      href={project.github}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center gap-2 text-sm sm:text-base text-muted-foreground hover:text-primary transition-colors"
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
                      className="flex items-center gap-2 text-sm sm:text-base text-muted-foreground hover:text-primary transition-colors"
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
