import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import './globals.css'
import { ThemeProvider } from '@/components/ThemeProvider'
import { Navigation } from '@/components/Navigation'
import { FloatingElements } from '@/components/3d/FloatingElements'
import { ClientWrapper } from '@/components/ClientWrapper'
import { TooltipProvider } from '@/components/ui/tooltip'
import { cn } from '@/lib/utils'
import { Toaster } from 'sonner'
import { CustomCursor } from '@/components/CustomCursor'

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'Mohamed Hakkou - Software Engineer',
  description: 'Personal portfolio showcasing my projects and skills in software engineering.',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className={cn(
        inter.className,
        "min-h-screen bg-background font-sans antialiased"
      )}>
        <ThemeProvider
          attribute="class"
          defaultTheme="system"
          enableSystem
          disableTransitionOnChange
        >
          <CustomCursor />
          <TooltipProvider>
            <div className="relative min-h-screen overflow-hidden">
              <FloatingElements />
              <div className="relative z-10 flex">
                <Navigation />
                <main className="flex-1 min-h-screen pl-[5rem]">
                  <ClientWrapper>
                    {children}
                  </ClientWrapper>
                </main>
              </div>
            </div>
            <Toaster />
          </TooltipProvider>
        </ThemeProvider>
      </body>
    </html>
  )
}
