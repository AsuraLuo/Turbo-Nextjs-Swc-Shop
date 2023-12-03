'use client'
import { ApolloLink, HttpLink } from '@apollo/client'
import {
  ApolloNextAppProvider,
  NextSSRInMemoryCache,
  NextSSRApolloClient,
  SSRMultipartLink
} from '@apollo/experimental-nextjs-app-support/ssr'

import { loadErrorMessages, loadDevMessages } from '@apollo/client/dev'
import { setVerbosity } from 'ts-invariant'

if (process.env.NODE_ENV === 'development') {
  setVerbosity('debug')
  loadDevMessages()
  loadErrorMessages()
}

const makeClient = () => {
  const isServer: boolean = typeof window === 'undefined'
  const httpLink = new HttpLink({
    uri: `${process.env.NEXT_PUBLIC_HOST_URL}api/graphql`,
    credentials: 'same-origin',
    useGETForQueries: true,
    fetchOptions: {
      caches: 'no-store'
    }
  })

  return new NextSSRApolloClient({
    cache: new NextSSRInMemoryCache(),
    link: isServer
      ? ApolloLink.from([
          new SSRMultipartLink({
            stripDefer: true
          }),
          httpLink
        ])
      : httpLink
  })
}

const ApolloProvider = ({ children }: React.PropsWithChildren) => {
  return <ApolloNextAppProvider makeClient={makeClient}>{children}</ApolloNextAppProvider>
}

export default ApolloProvider
