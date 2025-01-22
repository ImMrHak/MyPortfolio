'use client'

import React, { useState, useRef, useEffect } from 'react'
import { Card } from './ui/card'
import { Badge } from './ui/badge'

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
    return null // Return null on server-side and initial client-side render
  }

  return (
    <Card className="w-full max-w-4xl mx-auto bg-[#1E1E1E] text-emerald-400 font-mono rounded-xl overflow-hidden border-none shadow-2xl shadow-primary/10 backdrop-blur-xl">
      {/* Terminal Header */}
      <div className="flex items-center justify-between px-6 py-3 bg-black/50 border-b border-primary/10">
        <div className="flex gap-3">
          <div className="w-3.5 h-3.5 rounded-full bg-red-500/90 shadow-lg shadow-red-500/20 hover:bg-red-600/90 transition-colors cursor-pointer" />
          <div className="w-3.5 h-3.5 rounded-full bg-yellow-500/90 shadow-lg shadow-yellow-500/20 hover:bg-yellow-600/90 transition-colors cursor-pointer" />
          <div className="w-3.5 h-3.5 rounded-full bg-emerald-500/90 shadow-lg shadow-emerald-500/20 hover:bg-emerald-600/90 transition-colors cursor-pointer" />
        </div>
        <Badge variant="outline" className="text-sm bg-black/30 text-emerald-400 border-emerald-900/50 px-4 py-1">
          guest@immrhak — Terminal
        </Badge>
        <div className="w-[88px]" /> {/* Spacer to center the badge */}
      </div>

      {/* Terminal Content */}
      <div 
        ref={terminalRef} 
        className="h-[400px] overflow-y-auto p-6 space-y-3 bg-gradient-to-b from-[#1E1E1E] to-black/95 scrollbar-thin scrollbar-track-transparent scrollbar-thumb-emerald-900/50 hover:scrollbar-thumb-emerald-800/50"
      >
        {/* Welcome Message */}
        {history.length === 0 && (
          <div className="space-y-2 animate-fade-in">
            <div className="text-emerald-400/90 font-medium text-lg">
              Welcome to my interactive portfolio!
            </div>
            <div className="text-emerald-400/70 font-light">
              Type <span className="text-emerald-300 font-medium">'help'</span> to see available commands.
            </div>
          </div>
        )}

        {/* Command History */}
        {history.map(({ command, output }, index) => (
          <div key={index} className="space-y-2 animate-fade-in">
            <div className="flex items-center gap-2 group">
              <span className="text-emerald-300 group-hover:text-emerald-200 transition-colors">guest@immrhak</span>
              <span className="text-emerald-400 group-hover:text-emerald-300 transition-colors">$</span>
              <span className="text-emerald-400 group-hover:text-emerald-300 transition-colors">{command}</span>
            </div>
            <div className="text-emerald-400/70 ml-6 whitespace-pre-line font-light leading-relaxed">
              {output}
            </div>
          </div>
        ))}

        {/* Input Line */}
        <div className="flex items-center gap-2 group animate-fade-in">
          <span className="text-emerald-300 group-hover:text-emerald-200 transition-colors">guest@immrhak</span>
          <span className="text-emerald-400 group-hover:text-emerald-300 transition-colors">$</span>
          <input
            ref={inputRef}
            value={input}
            onChange={(e) => setInput(e.target.value)}
            onKeyDown={handleKeyDown}
            className="flex-1 bg-transparent border-none outline-none text-emerald-400 focus:ring-0 focus-visible:ring-0 px-0 placeholder-emerald-700 text-base"
            autoFocus
            placeholder="Type a command..."
          />
        </div>
      </div>
    </Card>
  )
}
