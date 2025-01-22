'use client'

import { motion, useScroll, useMotionValueEvent } from 'framer-motion'
import { Button } from './ui/button'
import { Github, Linkedin, Mail, Download, Terminal as TerminalIcon } from 'lucide-react'
import { useState } from 'react'
import { Terminal } from './Terminal'

export function Scene3D() {
  const [showScroll, setShowScroll] = useState(true)
  const [showTerminal, setShowTerminal] = useState(false)
  const { scrollY } = useScroll()

  useMotionValueEvent(scrollY, "change", (latest) => {
    if (latest > 10 && showScroll) {
      setShowScroll(false)
    }
  })

  return (
    <div className="relative min-h-screen">
      {/* Background */}
      <div className="absolute inset-0 bg-gradient-to-br from-background via-background/95 to-background/90">
        <div className="absolute inset-0 bg-grid-white/[0.02]" />
        <div className="absolute inset-0 bg-gradient-to-b from-transparent via-transparent to-background" />
      </div>

      {/* Hero Section */}
      <section className="relative h-screen flex items-center justify-center px-6">
        <div className="relative z-10 text-center">
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="text-4xl md:text-6xl font-bold mb-4 bg-clip-text text-transparent bg-gradient-to-r from-primary via-primary/80 to-primary"
          >
            Mohamed Hakkou
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="text-xl md:text-2xl text-muted-foreground mb-8"
          >
            Software & Network Engineer
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="flex items-center justify-center gap-4 mb-8"
          >
            <Button
              variant="outline"
              size="lg"
              className="gap-2"
              onClick={() => setShowTerminal(!showTerminal)}
            >
              <TerminalIcon className="w-4 h-4" />
              Open Terminal
            </Button>
            <Button
              variant="outline"
              size="lg"
              className="gap-2"
              asChild
            >
              <a href="/resume.pdf" download>
                <Download className="w-4 h-4" />
                Download CV
              </a>
            </Button>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.3 }}
            className="flex items-center justify-center gap-4"
          >
            <a
              href="https://github.com/ImMrHak"
              target="_blank"
              rel="noopener noreferrer"
              className="text-muted-foreground hover:text-primary transition-colors"
            >
              <Github className="w-6 h-6" />
            </a>
            <a
              href="https://linkedin.com/in/mohamed-hakkou"
              target="_blank"
              rel="noopener noreferrer"
              className="text-muted-foreground hover:text-primary transition-colors"
            >
              <Linkedin className="w-6 h-6" />
            </a>
            <a
              href="mailto:hakkoumohamed23@gmail.com"
              className="text-muted-foreground hover:text-primary transition-colors"
            >
              <Mail className="w-6 h-6" />
            </a>
          </motion.div>
        </div>

        {/* Scroll Indicator */}
        {showScroll && (
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.5 }}
            className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 text-muted-foreground"
          >
            <span className="text-sm">Scroll to explore</span>
            <motion.div
              animate={{ y: [0, 8, 0] }}
              transition={{ duration: 1.5, repeat: Infinity }}
              className="w-1 h-8 bg-muted-foreground/20 rounded-full relative overflow-hidden"
            >
              <motion.div
                animate={{ y: [-16, 16] }}
                transition={{ duration: 1.5, repeat: Infinity }}
                className="absolute inset-x-0 h-1/2 bg-gradient-to-b from-muted-foreground to-transparent"
              />
            </motion.div>
          </motion.div>
        )}
      </section>

      {/* Terminal Modal */}
      {showTerminal && (
        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          animate={{ opacity: 1, scale: 1 }}
          exit={{ opacity: 0, scale: 0.95 }}
          className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-background/80 backdrop-blur-sm"
          onClick={(e) => {
            if (e.target === e.currentTarget) {
              setShowTerminal(false)
            }
          }}
        >
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: 20 }}
            className="w-full max-w-3xl bg-background border border-border rounded-lg shadow-lg overflow-hidden"
            onClick={(e) => e.stopPropagation()}
          >
            <Terminal />
          </motion.div>
        </motion.div>
      )}
    </div>
  )
}
