import { createContext, useContext } from 'react'

interface ThemeContextType {
  dark: boolean
  toggleDark: () => void
}

export const ThemeContext = createContext<ThemeContextType>({
  dark: true,
  toggleDark: () => {},
})

export const useTheme = () => useContext(ThemeContext)