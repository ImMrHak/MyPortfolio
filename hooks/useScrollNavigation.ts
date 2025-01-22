import { useEffect } from 'react'
import { useRouter } from 'next/navigation'
import { useSettings } from '@/store/settings'

const SCROLL_THRESHOLD_BOTTOM = 0.99 // 99% of the page height
const SCROLL_THRESHOLD_TOP = 0 // 0% of the page height
const DEBOUNCE_TIME = 200 // 200ms debounce
const SCROLL_LOCK_TIME = 1000 // 1000ms scroll lock after navigation
const MIN_SCROLL_DISTANCE = 100 // Minimum scroll distance to trigger navigation

interface NavigationPages {
  prev: string
  next: string
}

export function useScrollNavigation(pages: NavigationPages) {
  const router = useRouter()
  const { autoScroll } = useSettings()

  useEffect(() => {
    if (!autoScroll) return // Don't set up scroll listeners if auto-scroll is disabled

    let lastScrollPosition = window.scrollY
    let scrollTimeout: NodeJS.Timeout
    let isNavigating = false
    let lastNavigationTime = 0
    let scrollStartPosition = 0
    let isScrolling = false

    const handleScrollStart = () => {
      if (!isScrolling) {
        isScrolling = true
        scrollStartPosition = window.scrollY
      }
    }

    const handleScrollEnd = () => {
      const now = Date.now()
      if (isNavigating || now - lastNavigationTime < SCROLL_LOCK_TIME) return

      const scrollPosition = window.scrollY
      const windowHeight = window.innerHeight
      const documentHeight = document.documentElement.scrollHeight
      const scrollPercentage = (scrollPosition + windowHeight) / documentHeight
      const scrollDistance = Math.abs(scrollPosition - scrollStartPosition)
      const isScrollingDown = scrollPosition > scrollStartPosition
      const isScrollingUp = scrollPosition < scrollStartPosition && scrollPosition <= 5

      // Only navigate if we've scrolled enough distance and meet the threshold
      if (scrollDistance > MIN_SCROLL_DISTANCE) {
        // Check if we're at the very bottom (considering some margin for different screen sizes)
        const isAtBottom = documentHeight - (scrollPosition + windowHeight) < 20
        
        // Navigate to next page when scrolling down at bottom
        if (isScrollingDown && isAtBottom && scrollPercentage >= SCROLL_THRESHOLD_BOTTOM) {
          isNavigating = true
          lastNavigationTime = now
          router.push(pages.next)
        }
        // Navigate to previous page when scrolling up at top
        else if (isScrollingUp) {
          isNavigating = true
          lastNavigationTime = now
          router.push(pages.prev)
        }
      }

      isScrolling = false
      lastScrollPosition = scrollPosition
    }

    const handleScroll = () => {
      handleScrollStart()
      clearTimeout(scrollTimeout)
      scrollTimeout = setTimeout(handleScrollEnd, DEBOUNCE_TIME)
    }

    window.addEventListener('scroll', handleScroll, { passive: true })
    return () => {
      window.removeEventListener('scroll', handleScroll)
      clearTimeout(scrollTimeout)
    }
  }, [router, pages, autoScroll]) // Add autoScroll to dependencies
}
