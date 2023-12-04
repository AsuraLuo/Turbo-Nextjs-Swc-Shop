import { Suspense } from 'react'

import HomePage from '@/components/HomePage'

export default function Home(props: any) {
  const { params } = props
  const { appConfig } = params ?? {}
  const { storeConfig } = appConfig ?? {}
  const identifier: string = storeConfig?.cms_home_page ?? ''

  return (
    <Suspense>
      <HomePage identifier={identifier} />
    </Suspense>
  )
}
