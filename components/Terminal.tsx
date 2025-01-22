'use client'

import React, { useState, useRef, useEffect } from 'react'
import { Card } from './ui/card'
import { Badge } from './ui/badge'
import { useTheme } from 'next-themes'
import { cn } from '@/lib/utils'

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
    "• Languages: Java, TypeScript, Python, C#, C++\n" +
    "• Frontend: React, Next.js, TailwindCSS\n" +
    "• Backend: Spring Boot, Node.js, .NET\n" +
    "• Database: PostgreSQL, MongoDB, Redis\n" +
    "• DevOps: Docker, Kubernetes, CI/CD\n" +
    "• Cloud: AWS, Azure",
  projects: "Featured Projects:\n" +
    "• ProfOnline - A microservice-based online tutoring platform\n" +
    "• LibraryHub - Modern library management system\n" +
    "• HakDuinoSerial - Arduino serial communication library",
  contact: "Get in touch:\n" +
    "• Email: hakkoumohamed23@gmail.com\n" +
    "• LinkedIn: linkedin.com/in/mohamed-hakkou\n" +
    "• GitHub: github.com/ImMrHak",
  passions: "Gaming & Other Interests:\n\n" +
    " Competitive Gaming:\n" +
    "• VALORANT\n" + //  - Immortal Rank
    "• CS:GO\n" + //  - Legendary Eagle Master
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
  const { theme } = useTheme()

  useEffect(() => {
    setMounted(true)
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

    // Scroll to bottom
    setTimeout(() => {
      if (terminalRef.current) {
        terminalRef.current.scrollTop = terminalRef.current.scrollHeight
      }
    }, 0)
  }

  const handleKeyDown = (e: React.KeyboardEvent<HTMLInputElement>) => {
    if (e.key === 'Enter') {
      handleCommand(input)
    }
  }

  if (!mounted) {
    return null
  }

  return (
    <Card className={cn(
      "w-full max-w-4xl mx-auto font-mono rounded-xl overflow-hidden border-none shadow-2xl shadow-primary/10 backdrop-blur-xl",
      theme === 'dark' 
        ? "bg-[#1E1E1E] text-emerald-400" 
        : "bg-white text-gray-800 border border-gray-200"
    )}>
      {/* Terminal Header */}
      <div className={cn(
        "flex items-center justify-between px-6 py-3 border-b",
        theme === 'dark'
          ? "bg-black/50 border-primary/10"
          : "bg-gray-100 border-gray-200"
      )}>
        <div className="flex gap-3">
          <div className="w-3.5 h-3.5 rounded-full bg-red-500/90 shadow-lg shadow-red-500/20 hover:bg-red-600/90 transition-colors cursor-pointer" />
          <div className="w-3.5 h-3.5 rounded-full bg-yellow-500/90 shadow-lg shadow-yellow-500/20 hover:bg-yellow-600/90 transition-colors cursor-pointer" />
          <div className="w-3.5 h-3.5 rounded-full bg-emerald-500/90 shadow-lg shadow-emerald-500/20 hover:bg-emerald-600/90 transition-colors cursor-pointer" />
        </div>
        <Badge variant="outline" className={cn(
          "text-xs font-medium",
          theme === 'dark' ? "border-primary/20" : "border-gray-300"
        )}>
          guest@portfolio ~ %
        </Badge>
      </div>

      {/* Terminal Content */}
      <div 
        ref={terminalRef}
        className={cn(
          "h-[400px] overflow-auto p-6 space-y-4",
          theme === 'dark' ? "bg-[#1E1E1E]" : "bg-white"
        )}
      >
        {/* Welcome Message */}
        <div className="space-y-1">
          <p className="font-bold">Welcome to my portfolio terminal! 👋</p>
          <p className={cn(
            "text-sm",
            theme === 'dark' ? "text-emerald-400/70" : "text-gray-600"
          )}>Type 'help' to see available commands.</p>
        </div>

        {/* Command History */}
        {history.map(({ command, output }, i) => (
          <div key={i} className="space-y-2">
            <div className={cn(
              "flex items-center gap-2",
              theme === 'dark' ? "text-emerald-400" : "text-gray-800"
            )}>
              <span className="opacity-50">$</span>
              <span className="font-bold">{command}</span>
            </div>
            <div className={cn(
              "whitespace-pre-wrap pl-6",
              theme === 'dark' ? "text-emerald-400/70" : "text-gray-600"
            )}>
              {output}
            </div>
          </div>
        ))}

        {/* Input Line */}
        <div className={cn(
          "flex items-center gap-2",
          theme === 'dark' ? "text-emerald-400" : "text-gray-800"
        )}>
          <span className="opacity-50">$</span>
          <input
            ref={inputRef}
            type="text"
            value={input}
            onChange={(e) => setInput(e.target.value)}
            onKeyDown={handleKeyDown}
            className={cn(
              "flex-1 bg-transparent outline-none",
              theme === 'dark' ? "text-emerald-400" : "text-gray-800"
            )}
            autoFocus
          />
        </div>
      </div>
    </Card>
  )
}
