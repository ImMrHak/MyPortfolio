import { create } from 'zustand'

interface SettingsState {
  autoScroll: boolean
  setAutoScroll: (autoScroll: boolean) => void
}

export const useSettings = create<SettingsState>((set) => ({
  autoScroll: true,
  setAutoScroll: (autoScroll) => set({ autoScroll }),
}))
