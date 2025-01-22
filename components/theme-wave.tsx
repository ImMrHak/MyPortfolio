'use client'

import { useTheme } from 'next-themes'
import { motion, AnimatePresence } from 'framer-motion'
import { useState, useEffect, useMemo } from 'react'

const generateParticles = (count: number) => {
  const particles = []
  for (let i = 0; i < count; i++) {
    particles.push({
      id: i,
      size: 4 + (i % 8),
      xOffset: (i * 3.33) % 100,
      yOffset: (i * 7.77) % 100,
      delay: (i * 0.1) % 0.5
    })
  }
  return particles
}

export function ThemeWave() {
  const { theme } = useTheme()
  const [mounted, setMounted] = useState(false)
  const particles = useMemo(() => generateParticles(30), [])

  useEffect(() => {
    setMounted(true)
  }, [])

  if (!mounted) return null

  return (
    <AnimatePresence mode="wait">
      <motion.div
        key={theme}
        className="fixed inset-0 z-[-1] pointer-events-none"
        initial="hidden"
        animate="visible"
        exit="exit"
      >
        <motion.div 
          className="absolute inset-0 origin-center"
          variants={{
            hidden: {
              rotateX: 45,
              y: '100%',
              opacity: 0
            },
            visible: {
              rotateX: 0,
              y: 0,
              opacity: 0.8
            },
            exit: {
              rotateX: -45,
              y: '-100%',
              opacity: 0
            }
          }}
          transition={{
            type: "spring",
            damping: 20,
            stiffness: 100,
            duration: 0.8
          }}
        >
          {/* Background Layer */}
          <motion.div
            className="absolute inset-0"
            style={{
              background: theme === 'dark' 
                ? 'linear-gradient(to bottom, #000000 0%, rgba(0, 0, 0, 0.9) 100%)'
                : 'linear-gradient(to bottom, #ffffff 0%, rgba(255, 255, 255, 0.9) 100%)'
            }}
          />

          {/* Simple Wave Effect */}
          <svg
            className="absolute bottom-0 w-full h-64"
            viewBox="0 0 1440 320"
            preserveAspectRatio="none"
          >
            <motion.path
              d="M0,96L48,112C96,128,192,160,288,186.7C384,213,480,235,576,213.3C672,192,768,128,864,128C960,128,1056,192,1152,208C1248,224,1344,192,1392,176L1440,160L1440,320L1392,320C1344,320,1248,320,1152,320C1056,320,960,320,864,320C768,320,672,320,576,320C480,320,384,320,288,320C192,320,96,320,48,320L0,320Z"
              fill={theme === 'dark' ? '#000000' : '#ffffff'}
              animate={{
                d: [
                  "M0,96L48,112C96,128,192,160,288,186.7C384,213,480,235,576,213.3C672,192,768,128,864,128C960,128,1056,192,1152,208C1248,224,1344,192,1392,176L1440,160L1440,320L1392,320C1344,320,1248,320,1152,320C1056,320,960,320,864,320C768,320,672,320,576,320C480,320,384,320,288,320C192,320,96,320,48,320L0,320Z",
                  "M0,160L48,144C96,128,192,96,288,122.7C384,149,480,235,576,234.7C672,235,768,149,864,133.3C960,117,1056,171,1152,192C1248,213,1344,203,1392,197.3L1440,192L1440,320L1392,320C1344,320,1248,320,1152,320C1056,320,960,320,864,320C768,320,672,320,576,320C480,320,384,320,288,320C192,320,96,320,48,320L0,320Z"
                ]
              }}
              transition={{
                duration: 10,
                ease: "easeInOut",
                repeat: Infinity,
                repeatType: "reverse"
              }}
            />
          </svg>

          {/* Glowing Particles */}
          <motion.div className="absolute inset-0 overflow-hidden">
            {particles.map((particle) => (
              <motion.div
                key={particle.id}
                className="absolute rounded-full"
                style={{
                  width: `${particle.size}px`,
                  height: `${particle.size}px`,
                  left: `${particle.xOffset}%`,
                  top: `${particle.yOffset}%`,
                  backgroundColor: theme === 'dark' ? '#ffffff' : '#000000',
                  filter: 'blur(1px)',
                  boxShadow: theme === 'dark' 
                    ? '0 0 15px rgba(255, 255, 255, 0.7)'
                    : '0 0 15px rgba(0, 0, 0, 0.7)',
                }}
                animate={{
                  y: [0, -150],
                  x: [0, ((particle.id % 3) - 1) * 50],
                  scale: [1, 0],
                  opacity: [0.8, 0]
                }}
                transition={{
                  duration: 2,
                  ease: "easeOut",
                  delay: particle.delay,
                  repeat: Infinity
                }}
              />
            ))}
          </motion.div>
        </motion.div>
      </motion.div>
    </AnimatePresence>
  )
}
