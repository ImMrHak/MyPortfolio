'use client'

import { useEffect, useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { ScrollText } from 'lucide-react'
import { useSettings } from '@/store/settings'
import { Button } from './button'
import { Tooltip, TooltipContent, TooltipProvider, TooltipTrigger } from './tooltip'

export function ScrollToggle() {
  const [isVisible, setIsVisible] = useState(false)
  const { autoScroll, toggleAutoScroll } = useSettings()

  useEffect(() => {
    const checkScroll = () => {
      const scrolledToBottom = 
        window.innerHeight + window.scrollY >= document.documentElement.scrollHeight - 100
      setIsVisible(scrolledToBottom)
    }

    window.addEventListener('scroll', checkScroll, { passive: true })
    return () => window.removeEventListener('scroll', checkScroll)
  }, [])

  return (
    <AnimatePresence>
      {isVisible && (
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: 20 }}
          className="fixed bottom-6 right-6 z-50"
        >
          <TooltipProvider>
            <Tooltip>
              <TooltipTrigger asChild>
                <Button
                  variant="default"
                  size="lg"
                  onClick={toggleAutoScroll}
                  className={`rounded-full shadow-lg ${
                    autoScroll ? 'bg-primary text-primary-foreground' : ''
                  }`}
                >
                  <ScrollText className="h-5 w-5 mr-2" />
                  {autoScroll ? 'Disable' : 'Enable'} Auto-scroll
                </Button>
              </TooltipTrigger>
              <TooltipContent>
                <p>{autoScroll ? 'Disable' : 'Enable'} automatic page navigation when scrolling</p>
              </TooltipContent>
            </Tooltip>
          </TooltipProvider>
        </motion.div>
      )}
    </AnimatePresence>
  )
}
