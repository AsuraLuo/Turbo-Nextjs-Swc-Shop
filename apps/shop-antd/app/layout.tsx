import type { Metadata } from 'next/types'

import StyledComponentsRegistry from '@/lib/antdRegistry'
import StyledRegistry from '@/lib/StyledRegistry'

import Header from '@/components/Header'

export const metadata: Metadata = {
  title: 'Next.js App Router + Antd v5',
  description: 'Next.js App Router + Antd v5'
}

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body>
        <StyledRegistry>
          <StyledComponentsRegistry>
            <Header />
            {children}
          </StyledComponentsRegistry>
        </StyledRegistry>
      </body>
    </html>
  )
}
