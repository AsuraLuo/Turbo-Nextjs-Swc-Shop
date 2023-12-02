'use client'
import { ThemeProvider } from '@mui/material/styles'
import CssBaseline from '@mui/material/CssBaseline'

import EmotionCacheProvider from './emotionCache'
import { theme } from '../../theme'

const EmotionProvider = ({ children }: { children: React.ReactNode }) => {
  return (
    <EmotionCacheProvider options={{ key: 'mui' }}>
      <ThemeProvider theme={theme}>
        <CssBaseline />
        {children}
      </ThemeProvider>
    </EmotionCacheProvider>
  )
}

export default EmotionProvider
