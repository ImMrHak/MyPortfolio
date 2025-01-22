'use client'

import { Terminal } from '@/components/Terminal'
import { motion } from 'framer-motion'
import { ArrowRight, Github, Linkedin, Mail } from 'lucide-react'
import { Button } from '@/components/ui/button'
import Link from 'next/link'
import { useTheme } from 'next-themes'
import { cn } from '@/lib/utils'

const socialLinks = [
  {
    name: 'GitHub',
    icon: Github,
    href: 'https://github.com/ImMrHak',
    color: 'hover:text-[#333] dark:hover:text-white',
  },
  {
    name: 'LinkedIn',
    icon: Linkedin,
    href: 'https://linkedin.com/in/mohamed-hakkou',
    color: 'hover:text-[#0077b5]',
  },
  {
    name: 'Email',
    icon: Mail,
    href: 'mailto:hakkoumohamed23@gmail.com',
    color: 'hover:text-[#ea4335]',
  },
]

export default function Home() {
  const { resolvedTheme } = useTheme()
  const isDark = resolvedTheme === 'dark'

  return (
    <div className="relative">
      {/* Background Gradient */}
      <div className="absolute inset-0 bg-gradient-to-br from-primary/5 via-transparent to-primary/10 pointer-events-none" />

      {/* Main Content */}
      <div className="container mx-auto px-4 py-8 relative">
        <div className="grid lg:grid-cols-2 gap-12 items-center min-h-[calc(100vh-4rem)]">
          {/* Introduction Section */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5 }}
            className="space-y-8"
          >
            {/* Header */}
            <div className="space-y-4">
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.2 }}
                className={cn(
                  "inline-block px-4 py-2 rounded-full text-sm font-medium",
                  isDark 
                    ? "bg-primary/10 text-primary"
                    : "bg-primary/5 text-primary-foreground"
                )}
              >
                Welcome to my portfolio
              </motion.div>

              <motion.h1 
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.3 }}
                className="text-4xl sm:text-5xl lg:text-6xl font-bold"
              >
                Hi, I'm{' '}
                <span className={cn(
                  "bg-clip-text text-transparent bg-gradient-to-r",
                  isDark 
                    ? "from-primary via-primary/50 to-primary"
                    : "from-primary to-primary/80"
                )}>
                  Mohamed Hakkou
                </span>
              </motion.h1>

              <motion.p 
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.4 }}
                className="text-xl sm:text-2xl text-muted-foreground font-medium"
              >
                Software & Network Engineer
              </motion.p>
            </div>

            {/* Description */}
            <motion.p 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.5 }}
              className="text-lg text-muted-foreground max-w-lg leading-relaxed"
            >
              I specialize in building modern, scalable web applications with cutting-edge technologies.
              Currently pursuing engineering studies at EMSI, focusing on innovative solutions and best practices.
            </motion.p>

            {/* Action Buttons */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.6 }}
              className="flex flex-wrap gap-4"
            >
              <Button asChild size="lg" className="gap-2 shadow-lg shadow-primary/20">
                <Link href="/projects">
                  View Projects
                  <ArrowRight className="w-4 h-4" />
                </Link>
              </Button>
              <Button 
                variant="outline" 
                size="lg" 
                asChild
                className={cn(
                  "shadow-lg",
                  isDark 
                    ? "shadow-primary/10 hover:bg-primary/10" 
                    : "shadow-primary/5 hover:bg-primary/5"
                )}
              >
                <Link href="/contact">Get in Touch</Link>
              </Button>
            </motion.div>

            {/* Social Links */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.7 }}
              className="flex items-center gap-4"
            >
              {socialLinks.map((link) => (
                <a
                  key={link.name}
                  href={link.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className={cn(
                    "p-3 rounded-full transition-all duration-300",
                    "hover:scale-110 active:scale-95",
                    isDark 
                      ? "bg-primary/10 hover:bg-primary/20" 
                      : "bg-primary/5 hover:bg-primary/10",
                    link.color
                  )}
                >
                  <link.icon className="w-5 h-5" />
                </a>
              ))}
            </motion.div>
          </motion.div>

          {/* Terminal Section */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className={cn(
              "relative p-1 rounded-2xl",
              isDark 
                ? "bg-gradient-to-br from-primary/20 via-primary/10 to-primary/5"
                : "bg-gradient-to-br from-primary/10 via-primary/5 to-primary/0"
            )}
          >
            <Terminal />
          </motion.div>
        </div>
      </div>
    </div>
  )
}
