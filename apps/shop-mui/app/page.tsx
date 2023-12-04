'use client'
import { Suspense } from 'react'
import { useSuspenseQuery } from '@apollo/experimental-nextjs-app-support/ssr'

import { GET_CMS_PAGE } from '@/graphql/getCmsPage'
import HomePage from '@/components/HomePage'

const Home = ({ ...props }: PageProps) => {
  const { params } = props
  const { appConfig } = params ?? {}
  const { storeConfig } = appConfig ?? {}
  const identifier: string = storeConfig?.cms_home_page ?? ''

  const { data } = useSuspenseQuery(GET_CMS_PAGE, {
    variables: { identifier }
  })
  const cmsPage: any = data?.cmsPage ?? {}

  return (
    <Suspense>
      <HomePage page={cmsPage} />
    </Suspense>
  )
}

export default Home
