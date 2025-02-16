'use client'

import { useState } from 'react'
import Link from 'next/link'
import { usePathname } from 'next/navigation'
import { motion, AnimatePresence } from 'framer-motion'
import { cn } from '@/lib/utils'
import { useTheme } from 'next-themes'
import { Home, FolderGit2, Mail, Code2, Sun, Moon, Award } from 'lucide-react'

const links = [
  {
    name: 'Home',
    href: '/',
    icon: Home
  },
  {
    name: 'Projects',
    href: '/projects',
    icon: FolderGit2
  },
  {
    name: 'Skills',
    href: '/skills',
    icon: Code2
  },
  {
    name: 'Certificates',
    href: '/certificates',
    icon: Award
  },
  {
    name: 'Contact',
    href: '/contact',
    icon: Mail
  }
]

export function Navigation() {
  const pathname = usePathname()
  const { resolvedTheme, setTheme } = useTheme()
  const isDark = resolvedTheme === 'dark'
  const [isOpen, setIsOpen] = useState(false)

  return (
    <>
      {/* Blur Overlay */}
      <div 
        className={cn(
          "fixed inset-0 bg-background/80 backdrop-blur-sm z-30",
          "transition-opacity duration-300",
          "md:hidden",
          isOpen ? "opacity-100" : "opacity-0 pointer-events-none"
        )}
        onClick={() => setIsOpen(false)}
      />

      <motion.nav
        initial={{ opacity: 0, x: -20 }}
        animate={{ opacity: 1, x: 0 }}
        className={cn(
          "fixed left-0 h-full flex flex-col items-center justify-between py-8",
          "border-r backdrop-blur-md",
          isDark ? "border-white/10 bg-black/20" : "border-black/10 bg-white/20",
          "transition-all duration-300",
          "w-[5rem]",
          "z-40",
          "md:translate-x-0",
          !isOpen && "-translate-x-full md:translate-x-0"
        )}
      >
        <div className="flex flex-col items-center gap-4">
          {links.map((link) => {
            const isActive = pathname === link.href
            const Icon = link.icon

            return (
              <Link
                key={link.name}
                href={link.href}
                className={cn(
                  "relative p-3 rounded-xl transition-all duration-300",
                  "hover:bg-primary/10 group",
                  isActive && (isDark ? "bg-primary/20" : "bg-primary/10")
                )}
                onClick={() => setIsOpen(false)}
              >
                <Icon className={cn(
                  "w-6 h-6 transition-colors duration-300",
                  isActive ? "text-primary" : "text-muted-foreground",
                  "group-hover:text-primary"
                )} />
                
                {/* Tooltip */}
                <span className={cn(
                  "absolute left-full ml-2 px-2 py-1 rounded-md text-sm whitespace-nowrap",
                  "opacity-0 group-hover:opacity-100 transition-opacity duration-300",
                  "pointer-events-none",
                  isDark ? "bg-black/50 text-white" : "bg-white/50 text-black"
                )}>
                  {link.name}
                </span>
              </Link>
            )
          })}
        </div>

        {/* Theme Toggle */}
        <button
          onClick={() => setTheme(isDark ? 'light' : 'dark')}
          className={cn(
            "relative p-3 rounded-xl transition-all duration-300",
            "hover:bg-primary/10 group"
          )}
        >
          <AnimatePresence mode="wait" initial={false}>
            {isDark ? (
              <motion.div
                key="sun"
                initial={{ scale: 0, rotate: 90 }}
                animate={{ scale: 1, rotate: 0 }}
                exit={{ scale: 0, rotate: 90 }}
                transition={{ duration: 0.2 }}
              >
                <Sun className="w-6 h-6 text-muted-foreground group-hover:text-primary" />
              </motion.div>
            ) : (
              <motion.div
                key="moon"
                initial={{ scale: 0, rotate: 90 }}
                animate={{ scale: 1, rotate: 0 }}
                exit={{ scale: 0, rotate: 90 }}
                transition={{ duration: 0.2 }}
              >
                <Moon className="w-6 h-6 text-muted-foreground group-hover:text-primary" />
              </motion.div>
            )}
          </AnimatePresence>

          {/* Tooltip */}
          <span className={cn(
            "absolute left-full ml-2 px-2 py-1 rounded-md text-sm whitespace-nowrap",
            "opacity-0 group-hover:opacity-100 transition-opacity duration-300",
            "pointer-events-none",
            isDark ? "bg-black/50 text-white" : "bg-white/50 text-black"
          )}>
            Switch to {isDark ? 'light' : 'dark'} mode
          </span>
        </button>
      </motion.nav>
    </>
  )
}
