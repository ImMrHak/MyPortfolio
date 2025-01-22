'use client'

import { useTheme } from 'next-themes'
import { motion } from 'framer-motion'
import { Moon, Sun } from 'lucide-react'
import { Button } from './button'

export function ThemeToggle() {
  const { theme, setTheme } = useTheme()
  const isDark = theme === 'dark'

  return (
    <Button
      variant="ghost"
      size="icon"
      onClick={() => setTheme(isDark ? 'light' : 'dark')}
      className="relative p-2 rounded-lg text-muted-foreground hover:text-primary hover:bg-primary/10 transition-colors overflow-hidden"
      title={`Switch to ${isDark ? 'light' : 'dark'} mode`}
    >
      <div className="relative z-10">
        {isDark ? (
          <Sun className="h-5 w-5" />
        ) : (
          <Moon className="h-5 w-5" />
        )}
      </div>
      
      {/* Wave Animation */}
      <motion.div
        initial={false}
        animate={{
          y: isDark ? -30 : 0,
          backgroundColor: isDark ? 'rgb(0, 0, 0)' : 'rgb(255, 255, 255)',
        }}
        transition={{
          type: "spring",
          stiffness: 160,
          damping: 20
        }}
        className="absolute inset-0 -z-[1]"
      >
        <svg
          className="absolute bottom-0 left-0 w-full"
          viewBox="0 0 100 20"
          preserveAspectRatio="none"
        >
          <motion.path
            d="M0 20 Q25 0 50 20 T100 20 L100 50 L0 50 Z"
            fill="currentColor"
            animate={{
              d: isDark 
                ? "M0 20 Q25 0 50 20 T100 20 L100 50 L0 50 Z"
                : "M0 20 Q25 40 50 20 T100 20 L100 50 L0 50 Z",
            }}
            transition={{
              type: "spring",
              stiffness: 160,
              damping: 20
            }}
          />
        </svg>
      </motion.div>
    </Button>
  )
}
