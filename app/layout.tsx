import { Inter } from "next/font/google"
import "./globals.css"
import { ThemeProvider } from "@/components/theme-provider"
import { ThemeWave } from "@/components/theme-wave"
import { cn } from "@/lib/utils"
import { Navigation } from "@/components/Navigation"
import { metadata } from "./metadata"
import { TooltipProvider } from "@/components/ui/tooltip"

const inter = Inter({ 
  subsets: ["latin"],
  variable: '--font-inter',
})

export { metadata }

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body
        className={cn(
          "min-h-screen bg-background font-sans antialiased",
          inter.className
        )}
      >
        <ThemeProvider
          attribute="class"
          defaultTheme="dark"
          enableSystem={false}
          disableTransitionOnChange
        >
          <TooltipProvider>
            <ThemeWave />
            <div className="flex min-h-screen">
              <Navigation />
              {children}
            </div>
          </TooltipProvider>
        </ThemeProvider>
      </body>
    </html>
  )
}
