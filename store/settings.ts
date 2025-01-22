import { create } from 'zustand'
import { persist } from 'zustand/middleware'

interface SettingsState {
  autoScroll: boolean
  toggleAutoScroll: () => void
  theme: 'dark' | 'light'
  toggleTheme: () => void
}

export const useSettings = create<SettingsState>()(
  persist(
    (set) => ({
      autoScroll: false,
      toggleAutoScroll: () => set((state) => ({ autoScroll: !state.autoScroll })),
      theme: 'dark',
      toggleTheme: () => set((state) => ({ theme: state.theme === 'dark' ? 'light' : 'dark' })),
    }),
    {
      name: 'portfolio-settings',
    }
  )
)
