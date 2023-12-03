'use client'
import { Provider } from 'react-redux'

import { reduxStore } from '@/store'

const StoreProvider = ({ children }: { children: React.ReactNode }) => {
  return <Provider store={reduxStore}>{children}</Provider>
}

export default StoreProvider
