'use client'
import { ThemeProvider } from '@emotion/react'
import type { ReactNode } from 'react'

import { theme } from '@/theme/emotion.theme'

const EmotionThemeProvider = ({ children }: { children: ReactNode }) => {
  return <ThemeProvider theme={theme}>{children}</ThemeProvider>
}

export default EmotionThemeProvider
