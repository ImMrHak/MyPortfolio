'use client'

import { useState, FormEvent } from 'react'
import { motion } from 'framer-motion'
import { Card } from '@/components/ui/card'
import { Input } from '@/components/ui/input'
import { Textarea } from '@/components/ui/textarea'
import { Button } from '@/components/ui/button'
import { useTheme } from 'next-themes'
import { cn } from '@/lib/utils'
import { Github, Linkedin, Mail, Send, Loader2, MapPin, Clock, Phone } from 'lucide-react'
import { BackButton } from '@/components/BackButton'
import { toast } from 'sonner'

const socialLinks = [
  {
    name: 'GitHub',
    icon: Github,
    href: 'https://github.com/ImMrHak',
    color: 'hover:text-[#333] dark:hover:text-white',
  },
  {
    name: 'LinkedIn',
    icon: Linkedin,
    href: 'https://linkedin.com/in/mohamed-hakkou',
    color: 'hover:text-[#0077b5]',
  },
  {
    name: 'Email',
    icon: Mail,
    href: 'mailto:hakkoumohamed23@gmail.com',
    color: 'hover:text-[#ea4335]',
  },
  {
    name: 'Phone',
    icon: Phone,
    href: 'phone:+212669242712',
    color: 'hover:text-[#ea4335]',
  },
]

export default function ContactPage() {
  const { resolvedTheme } = useTheme()
  const isDark = resolvedTheme === 'dark'
  const [sending, setSending] = useState(false)
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: ''
  })

  const handleSubmit = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    setSending(true)

    try {
      // Here you would typically send the data to your backend
      // For now, we'll simulate a delay
      await new Promise(resolve => setTimeout(resolve, 1500))
      
      toast.success('Message sent successfully!')
      setFormData({ name: '', email: '', message: '' })
    } catch (error) {
      toast.error('Failed to send message. Please try again.')
    } finally {
      setSending(false)
    }
  }

  return (
    <div className="container mx-auto px-4 py-8">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        className="space-y-8"
      >
        <div className="relative pt-16">
          <div className="relative space-y-2">
            <BackButton />
            <h1 className="text-3xl font-bold">Get in Touch</h1>
            <p className="text-muted-foreground">
              Feel free to reach out! I'm always open to discussing new projects and opportunities.
            </p>
          </div>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          {/* Form Section */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.2 }}
          >
            <Card className={cn(
              "p-6 space-y-6 backdrop-blur-md",
              isDark 
                ? "bg-black/20 border-white/10" 
                : "bg-white/20 border-black/10"
            )}>
              <form onSubmit={handleSubmit} className="space-y-4">
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div className="space-y-2">
                    <label htmlFor="name" className="text-sm font-medium">
                      Name
                    </label>
                    <Input
                      id="name"
                      placeholder="Your name"
                      required
                      value={formData.name}
                      onChange={(e) => setFormData(prev => ({ ...prev, name: e.target.value }))}
                      className={cn(
                        "backdrop-blur-md",
                        isDark 
                          ? "bg-black/20 border-white/10 focus:border-primary" 
                          : "bg-white/20 border-black/10 focus:border-primary"
                      )}
                    />
                  </div>
                  <div className="space-y-2">
                    <label htmlFor="email" className="text-sm font-medium">
                      Email
                    </label>
                    <Input
                      id="email"
                      type="email"
                      placeholder="your@email.com"
                      required
                      value={formData.email}
                      onChange={(e) => setFormData(prev => ({ ...prev, email: e.target.value }))}
                      className={cn(
                        "backdrop-blur-md",
                        isDark 
                          ? "bg-black/20 border-white/10 focus:border-primary" 
                          : "bg-white/20 border-black/10 focus:border-primary"
                      )}
                    />
                  </div>
                </div>
                <div className="space-y-2">
                  <label htmlFor="message" className="text-sm font-medium">
                    Message
                  </label>
                  <Textarea
                    id="message"
                    placeholder="Your message..."
                    rows={5}
                    required
                    value={formData.message}
                    onChange={(e) => setFormData(prev => ({ ...prev, message: e.target.value }))}
                    className={cn(
                      "resize-none backdrop-blur-md",
                      isDark 
                        ? "bg-black/20 border-white/10 focus:border-primary" 
                        : "bg-white/20 border-black/10 focus:border-primary"
                    )}
                  />
                </div>
                <Button 
                  type="submit"
                  disabled={sending}
                  className={cn(
                    "w-full gap-2 transition-all duration-300",
                    sending ? "bg-primary/80" : "hover:bg-primary/90"
                  )}
                >
                  {sending ? (
                    <>
                      <Loader2 className="w-4 h-4 animate-spin" />
                      Sending...
                    </>
                  ) : (
                    <>
                      Send Message
                      <Send className="w-4 h-4" />
                    </>
                  )}
                </Button>
              </form>
            </Card>

            <br></br>

             {/* Additional Info Card */}
            <Card className={cn(
              "p-6 space-y-4 backdrop-blur-md",
              isDark 
                ? "bg-black/20 border-white/10" 
                : "bg-white/20 border-black/10"
            )}>
              <h2 className="text-xl font-semibold">Quick Response</h2>
              <p className="text-muted-foreground">
                I typically respond within 24 hours. For urgent matters, 
                feel free to reach out via LinkedIn or email.
              </p>
            </Card>
          </motion.div>
          

          {/* Info Section */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.3 }}
            className="space-y-6"
          >
            {/* Location Card */}
            <Card className={cn(
              "p-6 space-y-4 backdrop-blur-md",
              isDark 
                ? "bg-black/20 border-white/10" 
                : "bg-white/20 border-black/10"
            )}>
              <h2 className="text-xl font-semibold flex items-center gap-2">
                <MapPin className="w-5 h-5 text-primary" />
                Location
              </h2>
              <p className="text-muted-foreground">
                Based in Morocco, but available for remote work worldwide.
              </p>
              <div className="flex items-center gap-2 text-sm text-muted-foreground">
                <Clock className="w-4 h-4" />
                Time zone: GMT+1 (Central European Time)
              </div>
            </Card>

            {/* Contact Info Card */}
            <Card className={cn(
              "p-6 space-y-4 backdrop-blur-md",
              isDark 
                ? "bg-black/20 border-white/10" 
                : "bg-white/20 border-black/10"
            )}>
              <h2 className="text-xl font-semibold">Get in touch</h2>
              <div className="space-y-3">
                <a 
                  href="mailto:hakkoumohamed23@gmail.com"
                  className={cn(
                    "flex items-center gap-3 p-2 rounded-lg transition-all duration-300",
                    "hover:bg-primary/10",
                    isDark ? "hover:bg-primary/20" : "hover:bg-primary/10"
                  )}
                >
                  <Mail className="w-5 h-5 text-[#ea4335]" />
                  <span className="text-muted-foreground">hakkoumohamed23@gmail.com</span>
                </a>
                <a 
                  href="https://linkedin.com/in/mohamed-hakkou"
                  target="_blank"
                  rel="noopener noreferrer"
                  className={cn(
                    "flex items-center gap-3 p-2 rounded-lg transition-all duration-300",
                    "hover:bg-primary/10",
                    isDark ? "hover:bg-primary/20" : "hover:bg-primary/10"
                  )}
                >
                  <Linkedin className="w-5 h-5 text-[#0077b5]" />
                  <span className="text-muted-foreground">linkedin.com/in/mohamed-hakkou</span>
                </a>
                <a 
                  href="https://github.com/ImMrHak"
                  target="_blank"
                  rel="noopener noreferrer"
                  className={cn(
                    "flex items-center gap-3 p-2 rounded-lg transition-all duration-300",
                    "hover:bg-primary/10",
                    isDark ? "hover:bg-primary/20" : "hover:bg-primary/10"
                  )}
                >
                  <Github className="w-5 h-5" />
                  <span className="text-muted-foreground">github.com/ImMrHak</span>
                </a>
                <a 
                  href="#"
                  target=""
                  rel="noopener noreferrer"
                  className={cn(
                    "flex items-center gap-3 p-2 rounded-lg transition-all duration-300",
                    "hover:bg-primary/10",
                    isDark ? "hover:bg-primary/20" : "hover:bg-primary/10"
                  )}
                >
                  <Phone className="w-5 h-5" />
                  <span className="text-muted-foreground">+212 6 69 24 27 12</span>
                </a>
              </div>
            </Card>
          </motion.div>
        </div>
      </motion.div>
    </div>
  )
}
