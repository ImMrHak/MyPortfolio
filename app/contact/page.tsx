'use client'

import { Card, CardContent } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { motion } from "framer-motion"
import { Navigation } from "@/components/Navigation"
import { Github, Linkedin, Mail, Phone, MapPin } from "lucide-react"
import { useScrollNavigation } from "@/hooks/useScrollNavigation"
import { AnimatedGradient } from "@/components/ui/animated-gradient"

export default function ContactPage() {
  useScrollNavigation({
    prev: '/skills',
    next: '/'  
  })

  return (
    <main className="flex-1 min-h-screen bg-gradient-to-br from-background via-background/95 to-background/90 flex items-center justify-center">
      <section className="w-full max-w-6xl px-6 py-16">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="mx-auto"
        >
          <AnimatedGradient className="inline-block mb-12">
            <h1 className="text-4xl md:text-5xl font-bold">
              Get in Touch
            </h1>
          </AnimatedGradient>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.2 }}
            >
              <Card>
                <CardContent className="p-6">
                  <h2 className="text-2xl font-semibold mb-6">Send me a message</h2>
                  <form className="space-y-4">
                    <div className="grid grid-cols-2 gap-4">
                      <div className="space-y-2">
                        <label htmlFor="firstName" className="text-sm text-muted-foreground">First Name</label>
                        <Input id="firstName" placeholder="John" />
                      </div>
                      <div className="space-y-2">
                        <label htmlFor="lastName" className="text-sm text-muted-foreground">Last Name</label>
                        <Input id="lastName" placeholder="Doe" />
                      </div>
                    </div>
                    <div className="space-y-2">
                      <label htmlFor="email" className="text-sm text-muted-foreground">Email</label>
                      <Input id="email" placeholder="john.doe@example.com" />
                    </div>
                    <div className="space-y-2">
                      <label htmlFor="message" className="text-sm text-muted-foreground">Message</label>
                      <Textarea id="message" placeholder="Your message..." />
                    </div>
                    <Button type="submit" className="w-full">Send Message</Button>
                  </form>
                </CardContent>
              </Card>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.3 }}
              className="space-y-6"
            >
              <Card>
                <CardContent className="p-6">
                  <h2 className="text-2xl font-semibold mb-6">Contact Information</h2>
                  <div className="space-y-4">
                    <div className="flex items-center gap-3">
                      <div className="p-2 rounded-full bg-primary/10">
                        <Mail className="w-5 h-5 text-primary" />
                      </div>
                      <div>
                        <p className="text-sm text-muted-foreground">Email</p>
                        <a href="mailto:hakkoumohamed23@gmail.com" className="hover:text-primary transition-colors">
                          hakkoumohamed23@gmail.com
                        </a>
                      </div>
                    </div>
                    <div className="flex items-center gap-3">
                      <div className="p-2 rounded-full bg-primary/10">
                        <Phone className="w-5 h-5 text-primary" />
                      </div>
                      <div>
                        <p className="text-sm text-muted-foreground">Phone</p>
                        <a href="tel:0669242712" className="hover:text-primary transition-colors">
                          0669-242712
                        </a>
                      </div>
                    </div>
                    <div className="flex items-center gap-3">
                      <div className="p-2 rounded-full bg-primary/10">
                        <MapPin className="w-5 h-5 text-primary" />
                      </div>
                      <div>
                        <p className="text-sm text-muted-foreground">Location</p>
                        <p>Rabat-Sale-Kenitra, Morocco</p>
                      </div>
                    </div>
                  </div>
                </CardContent>
              </Card>
              <Card>
                <CardContent className="p-6">
                  <h2 className="text-2xl font-semibold mb-6">Social Links</h2>
                  <div className="space-y-4">
                    <a
                      href="https://github.com/ImMrHak"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center gap-3 hover:text-primary transition-colors"
                    >
                      <div className="p-2 rounded-full bg-primary/10">
                        <Github className="w-5 h-5 text-primary" />
                      </div>
                      <span>GitHub</span>
                    </a>
                    <a
                      href="https://linkedin.com/in/mohamed-hakkou"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center gap-3 hover:text-primary transition-colors"
                    >
                      <div className="p-2 rounded-full bg-primary/10">
                        <Linkedin className="w-5 h-5 text-primary" />
                      </div>
                      <span>LinkedIn</span>
                    </a>
                  </div>
                </CardContent>
              </Card>
            </motion.div>
          </div>
        </motion.div>
      </section>
    </main>
  )
}
