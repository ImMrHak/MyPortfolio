'use client'

import { cn } from "@/lib/utils"
import { motion } from "framer-motion"

interface AnimatedCardProps {
  children: React.ReactNode
  className?: string
  index?: number
}

export function AnimatedCard({
  children,
  className,
  index = 0,
}: AnimatedCardProps) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{
        duration: 0.4,
        delay: index * 0.1,
        ease: "easeOut"
      }}
      className={cn(
        "relative overflow-hidden rounded-lg border bg-card p-6",
        className
      )}
    >
      {children}
    </motion.div>
  )
}
