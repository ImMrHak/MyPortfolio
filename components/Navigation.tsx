'use client'

import Link from 'next/link'
import { usePathname } from 'next/navigation'
import { motion } from 'framer-motion'
import { Home, FolderGit, Code2, Mail, Github, Linkedin, Terminal, ScrollText, Sun, Moon } from 'lucide-react'
import { cn } from '@/lib/utils'
import { useTheme } from 'next-themes'
import { Button } from './ui/button'

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

  return (
    <nav className="fixed top-0 left-0 h-screen w-[250px] bg-background border-r">
      <div className="flex flex-col h-full">
        {/* Logo */}
        <div className="p-6">
          <div className="flex items-center gap-2 text-primary">
            <Terminal className="w-6 h-6" />
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
  )
}
