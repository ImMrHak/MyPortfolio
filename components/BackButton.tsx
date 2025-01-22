'use client'

import { motion } from 'framer-motion'
import { useRouter } from 'next/navigation'
import { ChevronLeft } from 'lucide-react'
import { cn } from '@/lib/utils'
import { useTheme } from 'next-themes'

export function BackButton() {
  const router = useRouter()
  const { resolvedTheme } = useTheme()
  const isDark = resolvedTheme === 'dark'

  return (
    <motion.button
      onClick={() => router.push('/')}
      className={cn(
        "absolute -top-12 left-0 z-50",
        "flex items-center gap-2 px-4 py-2 rounded-full",
        "backdrop-blur-md border transition-all duration-300",
        "hover:scale-105 active:scale-95",
        isDark
          ? "bg-black/20 border-white/10 hover:bg-black/30 text-white"
          : "bg-white/20 border-black/10 hover:bg-white/30 text-black"
      )}
      initial={{ opacity: 0, x: -20 }}
      animate={{ opacity: 1, x: 0 }}
      whileHover={{ x: -5 }}
    >
      <ChevronLeft className="w-4 h-4" />
      <span className="text-sm font-medium">Back</span>
    </motion.button>
  )
}
