import { create } from 'zustand'

interface SettingsState {
  autoScroll: boolean
  setAutoScroll: (autoScroll: boolean) => void
  toggleAutoScroll: () => void
}

export const useSettings = create<SettingsState>((set) => ({
  autoScroll: true,
  setAutoScroll: (autoScroll) => set({ autoScroll }),
  toggleAutoScroll: () => set((state) => ({ autoScroll: !state.autoScroll })),
}))
