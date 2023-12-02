'use client'
import { useEffect } from 'react'
import { useDispatch } from 'react-redux'
import { isEmpty } from 'lodash-es'

import { actions as appActions } from '@/store/app'

const AppLayout = ({ children, appConfig }: { children?: React.ReactNode; appConfig: any }) => {
  const dispatch = useDispatch()

  useEffect(() => {
    if (!isEmpty(appConfig)) dispatch(appActions.setAppConfig(appConfig))
  }, [appConfig])

  return (
    <div id="__next">
      {children}
      <p>AppLayout</p>
    </div>
  )
}

export default AppLayout
