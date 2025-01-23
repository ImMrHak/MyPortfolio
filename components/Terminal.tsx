'use client'

import React, { useState, useRef, useEffect } from 'react'
import { Card } from './ui/card'
import { Badge } from './ui/badge'
import { useTheme } from 'next-themes'
import { cn } from '@/lib/utils'
import { motion, AnimatePresence } from 'framer-motion'

type CommandType = string | (() => Window | null)

const commands: Record<string, CommandType> = {
  help: 'Available commands:\n' +
    '  help     - Show this help message\n' +
    '  about    - Learn more about me\n' +
    '  skills   - View my technical skills\n' +
    '  projects - View my featured projects\n' +
    '  contact  - Get my contact information\n' +
    '  passions - Check out my gaming and other interests\n' +
    '  clear    - Clear the terminal\n' +
    '  github   - Open my GitHub profile',
  about: "Hi! I'm Mohamed Hakkou, a Software & Network Engineer passionate about building scalable applications.\n" +
    "Currently pursuing engineering studies at EMSI, focusing on modern technologies and best practices.",
  skills: "Technical Skills:\n" +
    "• Languages: Java, C#, C/C++, TypeScript, Python\n" +
    "• Frontend: Angular, React, Next.js\n" +
    "• Backend: Spring Boot, .NET, Node.js\n" +
    "• Database: Oracle, SqlServer, PostgreSQL, MongoDB, Redis\n" +
    "• DevOps: Docker, Kubernetes, CI/CD\n" +
    "• Cloud: AWS, Azure",
  projects: "Featured Projects:\n" +
    "• ProfOnline - A microservice-based online tutoring platform\n" +
    "• LibraryHub - A microservice-based Modern library management system\n" +
    "• DevProGen - A powerful and flexible project generation tool designed for developers\n" +
    "• HakDuinoSerial - Arduino serial communication library",
  contact: "Get in touch:\n" +
    "• Email: hakkoumohamed23@gmail.com\n" +
    "• LinkedIn: linkedin.com/in/mohamed-hakkou\n" +
    "• GitHub: github.com/ImMrHak",
  passions: "Gaming & Other Interests:\n\n" +
    " Competitive Gaming:\n" +
    "• VALORANT\n" +
    "• CS:GO\n" +
    " Tech Interests:\n" +
    "• PC Building\n" +
    "• Hardware Modding\n\n",
  github: () => window.open('https://github.com/ImMrHak', '_blank')
}

export function Terminal() {
  const [mounted, setMounted] = useState(false)
  const [history, setHistory] = useState<Array<{ command: string; output: string }>>([])
  const [input, setInput] = useState('')
  const inputRef = useRef<HTMLInputElement>(null)
  const terminalRef = useRef<HTMLDivElement>(null)
  const { resolvedTheme } = useTheme()

  useEffect(() => {
    setMounted(true)
    if (inputRef.current) {
      inputRef.current.focus()
    }
  }, [])

  const handleCommand = (command: string) => {
    const cmd = command.toLowerCase().trim()

    if (cmd === 'clear') {
      setHistory([])
      setInput('')
      return
    }

    if (cmd === '') return

    const commandFn = commands[cmd]
    const output = typeof commandFn === 'function' 
      ? (commandFn() as Window | null, 'Opening link...')
      : commandFn || `Command not found: ${command}. Type 'help' for available commands.`

    setHistory(prev => [...prev, { command, output: output as string }])
    setInput('')

    setTimeout(() => {
      if (terminalRef.current) {
        terminalRef.current.scrollTop = terminalRef.current.scrollHeight
      }
      if (inputRef.current) {
        inputRef.current.focus()
      }
    }, 0)
  }

  const handleKeyDown = (e: React.KeyboardEvent<HTMLInputElement>) => {
    if (e.key === 'Enter') {
      handleCommand(input)
    }
  }

  if (!mounted) {
    return (
      <div className="w-full max-w-4xl mx-auto mt-8">
        <Card className="w-full h-[500px] backdrop-blur-xl bg-background/20 border-none shadow-2xl" />
      </div>
    )
  }

  const isDark = resolvedTheme === 'dark'

  return (
    <div className="w-full max-w-4xl mx-auto mt-8">
      <Card className={cn(
        "w-full backdrop-blur-xl border-none shadow-2xl overflow-hidden",
        isDark 
          ? "bg-black/30 text-emerald-400 shadow-emerald-500/10" 
          : "bg-white/30 text-gray-800 shadow-gray-500/10"
      )}>
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        >
          <div className={cn(
            "flex items-center justify-between px-6 py-3 border-b",
            isDark
              ? "bg-black/40 border-primary/10"
              : "bg-white/40 border-gray-200/50"
          )}>
            <div className="flex gap-2">
              <motion.div
                whileHover={{ scale: 1.2 }}
                className="w-3 h-3 rounded-full bg-red-500/90 shadow-lg shadow-red-500/20"
              />
              <motion.div
                whileHover={{ scale: 1.2 }}
                className="w-3 h-3 rounded-full bg-yellow-500/90 shadow-lg shadow-yellow-500/20"
              />
              <motion.div
                whileHover={{ scale: 1.2 }}
                className="w-3 h-3 rounded-full bg-emerald-500/90 shadow-lg shadow-emerald-500/20"
              />
            </div>
            <Badge variant="outline" className={cn(
              "text-xs font-medium backdrop-blur-sm",
              isDark ? "border-primary/20 bg-primary/5" : "border-gray-300/50 bg-gray-50/50"
            )}>
              guest@portfolio ~ %
            </Badge>
          </div>

          <div 
            ref={terminalRef}
            className={cn(
              "h-[500px] overflow-auto p-6 space-y-4",
              isDark ? "bg-black/20" : "bg-white/20"
            )}
          >
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2 }}
              className="space-y-1"
            >
              <p className="font-bold">Welcome to my portfolio terminal! 👋</p>
              <p className={cn(
                "text-sm",
                isDark ? "text-emerald-400/70" : "text-gray-600"
              )}>Type 'help' to see available commands.</p>
            </motion.div>

            <AnimatePresence mode="popLayout">
              {history.map(({ command, output }, i) => (
                <motion.div
                  key={i}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -20 }}
                  transition={{ duration: 0.2 }}
                  className="space-y-2"
                >
                  <div className={cn(
                    "flex items-center gap-2",
                    isDark ? "text-emerald-400" : "text-gray-800"
                  )}>
                    <span className="opacity-50">$</span>
                    <span className="font-medium">{command}</span>
                  </div>
                  <div className={cn(
                    "whitespace-pre-wrap pl-6",
                    isDark ? "text-emerald-400/70" : "text-gray-600"
                  )}>
                    {output}
                  </div>
                </motion.div>
              ))}
            </AnimatePresence>

            <div className={cn(
              "flex items-center gap-2",
              isDark ? "text-emerald-400" : "text-gray-800"
            )}>
              <span className="opacity-50">$</span>
              <input
                ref={inputRef}
                type="text"
                value={input}
                onChange={(e) => setInput(e.target.value)}
                onKeyDown={handleKeyDown}
                className={cn(
                  "flex-1 bg-transparent outline-none font-medium",
                  isDark ? "text-emerald-400" : "text-gray-800",
                  "placeholder-muted-foreground/50"
                )}
                placeholder="Type a command..."
                spellCheck={false}
                autoComplete="off"
                autoCapitalize="off"
              />
            </div>
          </div>
        </motion.div>
      </Card>
    </div>
  )
}
