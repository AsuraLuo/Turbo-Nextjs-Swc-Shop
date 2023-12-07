'use client'
import { ThemeProvider as MuiThemeProvider } from '@mui/material/styles'
import CssBaseline from '@mui/material/CssBaseline'

import { theme } from '@/theme/mui.theme'
import ThemeProvider from '../ThemeProvider'
import EmotionCacheProvider from './emotionCache'

const EmotionProvider = ({ children }: { children: React.ReactNode }) => {
  return (
    <EmotionCacheProvider options={{ key: 'mui' }}>
      <ThemeProvider>
        <MuiThemeProvider theme={theme}>
          <div>
            <CssBaseline />
            {children}
          </div>
        </MuiThemeProvider>
      </ThemeProvider>
    </EmotionCacheProvider>
  )
}

export default EmotionProvider
