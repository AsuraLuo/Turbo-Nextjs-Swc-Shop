import { Suspense } from 'react'
import { notFound } from 'next/navigation'
import type { Metadata } from 'next/types'

import { GET_STORE_CONFIG } from '@/graphql/getStoreConfig'
import { getClient } from '@/lib/ApolloProvider/client'
import ApolloProvider from '@/lib/ApolloProvider'
import StoreProvider from '@/lib/StoreProvider'
import EmotionProvider from '@/lib/EmotionProvider'

import AppLayout from '@/components/AppLayout'
import Header from '@/components/Header'
import Navigation from '@/components/Navigation'

export const metadata: Metadata = {
  title: 'Next.js App Router + Material UI v5',
  description: 'Next.js App Router + Material UI v5'
}

// Can be imported from a shared config
const locales = ['en', 'zh']

const RootLayout = async ({
  children,
  params
}: {
  children: React.ReactNode
  params: {
    appConfig: any
    locale: string
  }
}) => {
  // Validate that the incoming `locale` parameter is valid
  if (!locales.includes(params.locale as string)) notFound()

  const { data } = await getClient().query({ query: GET_STORE_CONFIG })

  params.appConfig = data

  return (
    <html lang="en">
      <body>
        <ApolloProvider>
          <StoreProvider>
            <EmotionProvider>
              <Header />
              <AppLayout appConfig={data} />
              <Header />
              <Suspense>
                <Navigation />
              </Suspense>
              {children}
            </EmotionProvider>
          </StoreProvider>
        </ApolloProvider>
      </body>
    </html>
  )
}

export default RootLayout
