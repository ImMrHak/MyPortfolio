'use client'

import { useState, useEffect } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { useTheme } from 'next-themes'
import { cn } from '@/lib/utils'

interface ClientWrapperProps {
  children: React.ReactNode
}

export function ClientWrapper({ children }: ClientWrapperProps) {
  const [mounted, setMounted] = useState(false)
  const { resolvedTheme } = useTheme()

  useEffect(() => {
    setMounted(true)
  }, [])

  if (!mounted) {
    return (
      <div className="w-full h-screen bg-background">
        <div className="absolute inset-0 bg-gradient-to-br from-background to-background/80" />
      </div>
    )
  }

  const isDark = resolvedTheme === 'dark'

  return (
    <AnimatePresence mode="wait">
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        transition={{ duration: 0.3 }}
        className={cn(
          "relative min-h-screen w-full",
          isDark ? "bg-background/50" : "bg-background/30"
        )}
      >
        <div className="absolute inset-0 bg-gradient-to-br from-transparent via-primary/5 to-primary/10 pointer-events-none" />
        <div className="relative z-10">
          {children}
        </div>
      </motion.div>
    </AnimatePresence>
  )
}
