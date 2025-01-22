'use client'

import { cn } from "@/lib/utils"
import { motion } from "framer-motion"

interface AnimatedGradientProps {
  children?: React.ReactNode
  className?: string
}

export function AnimatedGradient({
  children,
  className,
}: AnimatedGradientProps) {
  return (
    <motion.div
      initial={{ opacity: 0, scale: 0.8 }}
      animate={{ opacity: 1, scale: 1 }}
      transition={{
        duration: 0.3,
        ease: [0, 0.71, 0.2, 1.01],
        scale: {
          type: "spring",
          damping: 5,
          stiffness: 100,
          restDelta: 0.001
        }
      }}
      className={cn(
        "relative p-[2px] bg-gradient-to-r from-primary via-primary/50 to-primary rounded-lg group",
        className
      )}
    >
      <div className="relative bg-background rounded-lg p-4 h-full">
        {children}
      </div>
      <div className="absolute inset-0 rounded-lg bg-gradient-to-r from-primary via-primary/50 to-primary opacity-0 group-hover:opacity-100 blur transition-opacity" />
    </motion.div>
  )
}
