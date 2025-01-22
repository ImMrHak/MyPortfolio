'use client'

import Link from 'next/link'
import { usePathname } from 'next/navigation'
import { motion } from 'framer-motion'
import { Home, FolderGit, Code2, Mail, Github, Linkedin, Terminal, ScrollText, Sun, Moon, Menu, X, MousePointer2 } from 'lucide-react'
import { cn } from '@/lib/utils'
import { useTheme } from 'next-themes'
import { Button } from './ui/button'
import { useState } from 'react'
import { useSettings } from '@/store/settings'
import { Tooltip, TooltipContent, TooltipTrigger } from './ui/tooltip'

const links = [
  { name: 'Home', href: '/ImMrHak', icon: Terminal },
  { name: 'Projects', href: '/ImMrHak/projects', icon: FolderGit },
  { name: 'Skills', href: '/ImMrHak/skills', icon: Code2 },
  { name: 'Contact', href: '/ImMrHak/contact', icon: Mail },
]

const socialLinks = [
  { name: 'GitHub', href: 'https://github.com/ImMrHak', icon: Github },
  { name: 'LinkedIn', href: 'https://linkedin.com/in/mohamed-hakkou', icon: Linkedin },
]

export function Navigation() {
  const pathname = usePathname()
  const { theme, setTheme } = useTheme()
  const [isOpen, setIsOpen] = useState(false)
  const { autoScroll, toggleAutoScroll } = useSettings()

  return (
    <>
      {/* Mobile Menu Button */}
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="lg:hidden fixed top-4 right-4 z-50 p-2 rounded-md bg-background border"
      >
        {isOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
      </button>

      {/* Navigation Sidebar */}
      <nav className={cn(
        "fixed top-0 left-0 h-screen bg-background border-r transition-transform duration-300 z-40",
        "w-[250px] lg:translate-x-0",
        isOpen ? "translate-x-0" : "-translate-x-full"
      )}>
        <div className="flex flex-col h-full">
          {/* Logo */}
          <div className="p-6">
            <div className="flex items-center gap-2 text-primary">
              <Terminal className={cn(
                "w-6 h-6",
                theme === 'light' ? "text-primary" : "text-white"
              )} />
              <span className="font-bold text-lg">Mohamed Hakkou</span>
            </div>
          </div>

          {/* Navigation Links */}
          <ul className="flex-1 px-4">
            {links.map((item) => {
              const isActive = pathname === item.href
              
              return (
                <li key={item.href} className="mb-2">
                  <Link
                    href={item.href}
                    onClick={() => setIsOpen(false)}
                    className={cn(
                      "flex items-center px-3 py-2 rounded-md transition-colors relative",
                      isActive ? "text-primary" : "text-muted-foreground hover:text-primary"
                    )}
                  >
                    {isActive && (
                      <motion.div
                        layoutId="active-nav"
                        className="absolute inset-0 bg-secondary rounded-md"
                        initial={false}
                        transition={{
                          type: "spring",
                          stiffness: 500,
                          damping: 30
                        }}
                      />
                    )}
                    <item.icon className="w-5 h-5 mr-3" />
                    <span className="relative z-10">{item.name}</span>
                  </Link>
                </li>
              )
            })}
          </ul>

          {/* Bottom Section */}
          <div className="p-6 border-t">
            <div className="flex items-center justify-between mb-4">
              <div className="flex items-center gap-2">
                <Tooltip delayDuration={0}>
                  <TooltipTrigger asChild>
                    <Button
                      variant="ghost"
                      size="icon"
                      onClick={() => setTheme(theme === 'dark' ? 'light' : 'dark')}
                      className="rounded-md"
                    >
                      {theme === 'dark' ? (
                        <Sun className="h-5 w-5" />
                      ) : (
                        <Moon className="h-5 w-5" />
                      )}
                    </Button>
                  </TooltipTrigger>
                  <TooltipContent side="right" className="max-w-[200px] space-y-1">
                    <p className="font-medium">Switch to {theme === 'dark' ? 'Light' : 'Dark'} Mode</p>
                    <p className="text-xs text-muted-foreground">
                      {theme === 'dark' 
                        ? "Change to a brighter theme for better visibility in well-lit environments" 
                        : "Change to a darker theme for better visibility in low-light environments"}
                    </p>
                  </TooltipContent>
                </Tooltip>

                <Tooltip delayDuration={0}>
                  <TooltipTrigger asChild>
                    <Button
                      variant="ghost"
                      size="icon"
                      onClick={toggleAutoScroll}
                      className={cn(
                        "rounded-md",
                        autoScroll ? "text-primary" : "text-muted-foreground"
                      )}
                    >
                      <MousePointer2 className="h-5 w-5" />
                    </Button>
                  </TooltipTrigger>
                  <TooltipContent side="right" className="max-w-[200px] space-y-1">
                    <p className="font-medium">{autoScroll ? 'Disable' : 'Enable'} Auto-Scroll Navigation</p>
                    <p className="text-xs text-muted-foreground">
                      {autoScroll 
                        ? "Turn off automatic page navigation when scrolling to the top or bottom" 
                        : "Turn on automatic page navigation when scrolling to the top or bottom"}
                    </p>
                  </TooltipContent>
                </Tooltip>
              </div>

              <div className="flex gap-2">
                {socialLinks.map((link) => (
                  <a
                    key={link.name}
                    href={link.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="p-2 rounded-md text-muted-foreground hover:text-primary transition-colors"
                  >
                    <link.icon className="w-5 h-5" />
                  </a>
                ))}
              </div>
            </div>
          </div>
        </div>
      </nav>

      {/* Overlay */}
      {isOpen && (
        <div
          className="fixed inset-0 bg-background/80 backdrop-blur-sm z-30 lg:hidden"
          onClick={() => setIsOpen(false)}
        />
      )}
    </>
  )
}
