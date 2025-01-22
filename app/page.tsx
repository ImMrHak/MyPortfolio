'use client'

import { Scene3D } from "@/components/Scene3D"
import { useScrollNavigation } from "@/hooks/useScrollNavigation"

export default function Home() {
  // When scrolling down at bottom, go to projects
  // When scrolling up at top, go to contact (circular navigation)
  useScrollNavigation({
    prev: '/contact',
    next: '/projects'
  })

  return (
    <main className="flex-1 ml-[250px] min-h-screen bg-gradient-to-br from-background via-background/95 to-background/90">
      <div className="max-w-5xl mx-auto px-6 py-16">
        <Scene3D />
      </div>
    </main>
  )
}
