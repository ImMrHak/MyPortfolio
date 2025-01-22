'use client'

import { motion } from 'framer-motion'
import { useTheme } from 'next-themes'
import { cn } from '@/lib/utils'
import { useEffect, useState } from 'react'

export function FloatingElements() {
  const { resolvedTheme } = useTheme()
  const isDark = resolvedTheme === 'dark'
  const [windowSize, setWindowSize] = useState({ width: 0, height: 0 })

  useEffect(() => {
    const handleResize = () => {
      setWindowSize({
        width: window.innerWidth,
        height: window.innerHeight,
      })
    }

    handleResize()
    window.addEventListener('resize', handleResize)
    return () => window.removeEventListener('resize', handleResize)
  }, [])

  return (
    <div className="fixed inset-0 -z-10 overflow-hidden">
      {/* Background gradient */}
      <motion.div 
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.8 }}
        className={cn(
          "absolute inset-0 transition-colors duration-500",
          isDark 
            ? "bg-gradient-to-br from-gray-900 via-gray-900/90 to-emerald-900/20" 
            : "bg-gradient-to-br from-gray-50 via-gray-100/90 to-emerald-100/20"
        )} 
      />

      {/* Grid pattern */}
      <div 
        className={cn(
          "absolute inset-0 bg-[linear-gradient(to_right,#8882_1px,transparent_1px),linear-gradient(to_bottom,#8882_1px,transparent_1px)]",
          "bg-[size:4rem_4rem]",
          isDark ? "opacity-25" : "opacity-10"
        )} 
      />

      {/* Floating elements */}
      <div className="absolute inset-0">
        {/* Terminal */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ 
            opacity: [0, 1, 0.8],
            y: [20, 0, 10],
            rotateX: [0, 5, -5],
            rotateY: [0, -5, 5],
          }}
          transition={{
            duration: 8,
            repeat: Infinity,
            repeatType: "reverse",
          }}
          className={cn(
            "absolute top-1/4 right-1/4 w-64 h-40 rounded-lg shadow-2xl",
            isDark 
              ? "bg-black/30 border border-emerald-500/20 shadow-emerald-500/5" 
              : "bg-white/30 border border-gray-200/50 shadow-gray-500/5"
          )}
        >
          <div className="absolute top-3 left-3 flex gap-2">
            <div className="w-2.5 h-2.5 rounded-full bg-red-500/80" />
            <div className="w-2.5 h-2.5 rounded-full bg-yellow-500/80" />
            <div className="w-2.5 h-2.5 rounded-full bg-emerald-500/80" />
          </div>
        </motion.div>

        {/* Code blocks */}
        <motion.div
          initial={{ opacity: 0, x: -20 }}
          animate={{ 
            opacity: [0, 1, 0.8],
            x: [-20, 0, -10],
            y: [0, 10, 0],
            rotateY: [0, 10, -10],
          }}
          transition={{
            duration: 6,
            repeat: Infinity,
            repeatType: "reverse",
            delay: 1,
          }}
          className={cn(
            "absolute top-1/3 left-1/4 w-48 h-32 rounded-lg shadow-2xl transform -rotate-6",
            isDark 
              ? "bg-gray-800/30 border border-emerald-500/20 shadow-emerald-500/5" 
              : "bg-gray-50/30 border border-gray-200/50 shadow-gray-500/5"
          )}
        >
          <div className={cn(
            "h-2 w-20 rounded mt-6 ml-4",
            isDark ? "bg-emerald-500/30" : "bg-gray-400/30"
          )} />
          <div className={cn(
            "h-2 w-32 rounded mt-3 ml-4",
            isDark ? "bg-emerald-500/20" : "bg-gray-400/20"
          )} />
          <div className={cn(
            "h-2 w-24 rounded mt-3 ml-4",
            isDark ? "bg-emerald-500/10" : "bg-gray-400/10"
          )} />
        </motion.div>

        {/* Particles */}
        {windowSize.width > 0 && [...Array(30)].map((_, i) => (
          <motion.div
            key={i}
            initial={{ 
              opacity: 0,
              x: Math.random() * windowSize.width,
              y: Math.random() * windowSize.height,
            }}
            animate={{ 
              opacity: [0, 0.5, 0],
              x: [
                Math.random() * windowSize.width,
                Math.random() * windowSize.width,
                Math.random() * windowSize.width,
              ],
              y: [
                Math.random() * windowSize.height,
                Math.random() * windowSize.height,
                Math.random() * windowSize.height,
              ],
            }}
            transition={{
              duration: Math.random() * 10 + 10,
              repeat: Infinity,
              repeatType: "loop",
              ease: "linear",
            }}
            className={cn(
              "absolute w-1 h-1 rounded-full",
              isDark ? "bg-emerald-500/30" : "bg-emerald-600/20"
            )}
          />
        ))}

        {/* Glow effects */}
        <div className={cn(
          "absolute inset-0 bg-gradient-radial pointer-events-none mix-blend-soft-light",
          isDark 
            ? "from-emerald-500/5 to-transparent" 
            : "from-emerald-200/10 to-transparent"
        )} />
      </div>
    </div>
  )
}
